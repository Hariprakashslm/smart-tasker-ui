import React from "react";

import "./FilterPanel.css";

type User = {
  name: string;
};

export const FilterPanel: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
