// src/pages/calendar/CalendarPage.tsx
import React from 'react';
import './CalendarPage.css';
import {
  Calendar,
  dateFnsLocalizer,
  Event as CalendarEvent,
} from 'react-big-calendar';

import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import * as enUs from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUs,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events: CalendarEvent[] = [
  {
    title: 'Team Meeting',
    start: new Date(),
    end: new Date(new Date().getTime() + 60 * 60 * 1000),
    allDay: false,
  },
  {
    title: 'Project Deadline',
    start: new Date(),
    end: new Date(),
    allDay: true,
  },
];

const CalendarPage: React.FC = () => {
  const Cal: any = Calendar as unknown as React.FC;
  return (
    <div className="calendar-page">
      <h2 className="calendar-title">Task Calendar</h2>
      <Cal
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </div>
  );
};

export default CalendarPage;
