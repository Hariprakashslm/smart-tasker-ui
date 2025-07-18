#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing bundle size...\n');

// Check if dist directory exists
const distPath = path.join(__dirname, '../dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ Dist directory not found. Please run "yarn build" first.');
  process.exit(1);
}

// Get bundle files
const bundleFiles = fs.readdirSync(distPath)
  .filter(file => file.endsWith('.js') || file.endsWith('.css'))
  .map(file => path.join(distPath, file));

console.log('📦 Bundle files found:');
bundleFiles.forEach(file => {
  const stats = fs.statSync(file);
  const sizeInKB = (stats.size / 1024).toFixed(2);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log(`  ${path.basename(file)}: ${sizeInKB} KB (${sizeInMB} MB)`);
});

// Analyze dependencies
console.log('\n📊 Dependency analysis:');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  
  console.log('\n📋 Dependencies:');
  Object.entries(packageJson.dependencies || {}).forEach(([name, version]) => {
    console.log(`  ${name}: ${version}`);
  });
  
  console.log('\n🔧 Dev Dependencies:');
  Object.entries(packageJson.devDependencies || {}).forEach(([name, version]) => {
    console.log(`  ${name}: ${version}`);
  });
  
  // Check for potential bundle size issues
  const largeDependencies = [
    'react-big-calendar',
    'recharts',
    'date-fns'
  ];
  
  console.log('\n⚠️  Large dependencies to monitor:');
  largeDependencies.forEach(dep => {
    if (packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]) {
      console.log(`  ${dep}: Consider tree-shaking or lazy loading`);
    }
  });
  
} catch (error) {
  console.error('❌ Error reading package.json:', error.message);
}

// Bundle optimization suggestions
console.log('\n💡 Bundle optimization suggestions:');
console.log('  1. Use dynamic imports for large components');
console.log('  2. Implement code splitting by routes');
console.log('  3. Tree-shake unused dependencies');
console.log('  4. Use compression (gzip/brotli)');
console.log('  5. Consider using CDN for large libraries');
console.log('  6. Implement lazy loading for non-critical components');

console.log('\n✅ Bundle analysis complete!'); 