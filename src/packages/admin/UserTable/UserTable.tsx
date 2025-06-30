import React from "react";

import "./UserTable.css";

type User = {
  name: string;
};

export const UserTable: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
