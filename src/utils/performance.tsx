import React from 'react';

/**
 * Performance monitoring utilities
 */

interface PerformanceMetric {
  name: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private observers: Set<(metric: PerformanceMetric) => void> = new Set();

  /**
   * Start measuring a performance metric
   */
  startMeasure(name: string, metadata?: Record<string, any>): void {
    if (this.metrics.has(name)) {
      console.warn(`Performance metric "${name}" already exists. Overwriting.`);
    }

    this.metrics.set(name, {
      name,
      startTime: performance.now(),
      metadata,
    });
  }

  /**
   * End measuring a performance metric
   */
  endMeasure(name: string): PerformanceMetric | null {
    const metric = this.metrics.get(name);
    if (!metric) {
      console.warn(`Performance metric "${name}" not found.`);
      return null;
    }

    metric.endTime = performance.now();
    metric.duration = metric.endTime - metric.startTime;

    // Notify observers
    this.observers.forEach(observer => observer(metric));

    return metric;
  }

  /**
   * Get a specific metric
   */
  getMetric(name: string): PerformanceMetric | null {
    return this.metrics.get(name) || null;
  }

  /**
   * Get all metrics
   */
  getAllMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
  }

  /**
   * Subscribe to metric updates
   */
  subscribe(observer: (metric: PerformanceMetric) => void): () => void {
    this.observers.add(observer);
    return () => this.observers.delete(observer);
  }

  /**
   * Log slow operations (over threshold)
   */
  logSlowOperations(threshold: number = 100): void {
    const slowMetrics = this.getAllMetrics()
      .filter(metric => metric.duration && metric.duration > threshold)
      .sort((a, b) => (b.duration || 0) - (a.duration || 0));

    if (slowMetrics.length > 0) {
      console.warn('🐌 Slow operations detected:', slowMetrics);
    }
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Higher-order component for measuring component render time
 */
export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName?: string
): React.ComponentType<P> {
  const displayName = componentName || WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const PerformanceTrackedComponent = (props: P) => {
    const metricName = `${displayName}_render`;

    React.useEffect(() => {
      performanceMonitor.startMeasure(metricName, { props });
      
      return () => {
        performanceMonitor.endMeasure(metricName);
      };
    });

    return <WrappedComponent {...props} />;
  };

  PerformanceTrackedComponent.displayName = `withPerformanceTracking(${displayName})`;
  return PerformanceTrackedComponent;
}

/**
 * Hook for measuring custom operations
 */
export function usePerformanceMeasure() {
  return {
    startMeasure: performanceMonitor.startMeasure.bind(performanceMonitor),
    endMeasure: performanceMonitor.endMeasure.bind(performanceMonitor),
    getMetric: performanceMonitor.getMetric.bind(performanceMonitor),
  };
}

/**
 * Measure function execution time
 */
export function measureFunction<T extends (...args: any[]) => any>(
  fn: T,
  name?: string
): T {
  const functionName = name || fn.name || 'anonymous';
  
  return ((...args: Parameters<T>): ReturnType<T> => {
    const metricName = `${functionName}_execution`;
    performanceMonitor.startMeasure(metricName, { args });
    
    try {
      const result = fn(...args);
      
      // Handle both sync and async functions
      if (result instanceof Promise) {
        return result.finally(() => {
          performanceMonitor.endMeasure(metricName);
        }) as ReturnType<T>;
      } else {
        performanceMonitor.endMeasure(metricName);
        return result;
      }
    } catch (error) {
      performanceMonitor.endMeasure(metricName);
      throw error;
    }
  }) as T;
}

/**
 * Measure API call performance
 */
export function measureApiCall<T>(
  apiCall: () => Promise<T>,
  endpoint: string
): Promise<T> {
  const metricName = `api_${endpoint}`;
  performanceMonitor.startMeasure(metricName);
  
  return apiCall()
    .then(result => {
      performanceMonitor.endMeasure(metricName);
      return result;
    })
    .catch(error => {
      performanceMonitor.endMeasure(metricName);
      throw error;
    });
}

/**
 * Get performance summary
 */
export function getPerformanceSummary(): {
  totalMetrics: number;
  averageDuration: number;
  slowestOperation: PerformanceMetric | null;
  fastestOperation: PerformanceMetric | null;
} {
  const metrics = performanceMonitor.getAllMetrics().filter(m => m.duration);
  
  if (metrics.length === 0) {
    return {
      totalMetrics: 0,
      averageDuration: 0,
      slowestOperation: null,
      fastestOperation: null,
    };
  }

  const durations = metrics.map(m => m.duration!);
  const averageDuration = durations.reduce((sum, duration) => sum + duration, 0) / durations.length;
  
  const slowestOperation = metrics.reduce((slowest, current) => 
    (current.duration! > slowest.duration!) ? current : slowest
  );
  
  const fastestOperation = metrics.reduce((fastest, current) => 
    (current.duration! < fastest.duration!) ? current : fastest
  );

  return {
    totalMetrics: metrics.length,
    averageDuration,
    slowestOperation,
    fastestOperation,
  };
} 