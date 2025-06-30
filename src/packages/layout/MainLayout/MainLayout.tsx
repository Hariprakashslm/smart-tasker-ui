import React from "react";

import "./MainLayout.css";

type User = {
  name: string;
};

export const MainLayout: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
