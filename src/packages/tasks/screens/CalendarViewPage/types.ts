export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type?: 'task' | 'event';
  color?: string;
}

export interface CalendarViewPageProps {
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
} 