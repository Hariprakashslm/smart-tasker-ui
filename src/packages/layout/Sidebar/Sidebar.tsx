import React from "react";

import "./Sidebar.css";

type User = {
  name: string;
};

export const Sidebar: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
