import React from 'react';

interface StatusPanelProps {
  status: string;
  message: string;
}

const StatusPanel: React.FC<StatusPanelProps> = ({ status, message }) => {
  return (
    <div className="status-panel">
      <h2>Status: {status}</h2>
      <p>{message}</p>
    </div>
  );
};

export default StatusPanel;