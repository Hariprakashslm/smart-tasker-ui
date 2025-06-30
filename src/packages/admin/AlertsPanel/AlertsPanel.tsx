import React from "react";

import "./AlertsPanel.css";

type User = {
  name: string;
};

export const AlertsPanel: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
