import React from "react";

import "./StatCard.css";

type User = {
  name: string;
};

export const StatCard: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
