import React from "react";

import "./Header.css";

type User = {
  name: string;
};

export const Header: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
