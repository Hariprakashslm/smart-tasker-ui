// src/ui/reports/Reports.tsx
import React from 'react';
import './Reports.css';

export interface ReportCard {
  title: string;
  value: string;
  description: string;
  icon?: string;
}

export interface ReportsProps {
  cards: ReportCard[];
}

export const Reports: React.FC<ReportsProps> = ({ cards }) => {
  return (
    <div className="reports-container">
      <h2 className="reports-title">Reports Dashboard</h2>
      <div className="reports-grid">
        {cards.map((card, idx) => (
          <div className="report-card" key={idx}>
            {card.icon && <div className="report-icon">{card.icon}</div>}
            <div className="report-content">
              <div className="report-title">{card.title}</div>
              <div className="report-value">{card.value}</div>
              <div className="report-desc">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
