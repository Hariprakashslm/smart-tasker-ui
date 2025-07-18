import React from 'react';
import './CalendarViewPage.css';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  type?: 'task' | 'event';
  color?: string;
}

export interface CalendarViewPageProps {
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
}

export const CalendarViewPage: React.FC<CalendarViewPageProps> = ({ events, onEventClick }) => {
  // For now, just group events by date and render a simple grid
  const grouped = events.reduce<Record<string, CalendarEvent[]>>((acc, ev) => {
    acc[ev.date] = acc[ev.date] || [];
    acc[ev.date].push(ev);
    return acc;
  }, {});

  // Generate a simple week view for demo
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toISOString().slice(0, 10);
  });

  return (
    <div className="calendar-view-page">
      <h1 className="calendar-title">Calendar</h1>
      <div className="calendar-grid">
        {weekDates.map((date) => (
          <div className="calendar-cell" key={date}>
            <div className="calendar-date">{date}</div>
            <div className="calendar-events">
              {(grouped[date] || []).map((ev) => (
                <div
                  key={ev.id}
                  className="calendar-event"
                  style={{ background: ev.color || '#e0e7ff' }}
                  onClick={() => onEventClick?.(ev)}
                  tabIndex={0}
                  role="button"
                  aria-label={ev.title}
                >
                  {ev.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 