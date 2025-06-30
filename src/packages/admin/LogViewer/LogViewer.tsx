import React from "react";

import "./LogViewer.css";

type User = {
  name: string;
};

export const LogViewer: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
