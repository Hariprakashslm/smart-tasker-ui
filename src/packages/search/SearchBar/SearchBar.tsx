import React from "react";

import "./SearchBar.css";

type User = {
  name: string;
};

export const SearchBar: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
