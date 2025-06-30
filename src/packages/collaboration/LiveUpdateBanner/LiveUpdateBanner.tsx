import React from "react";

import "./LiveUpdateBanner.css";

type User = {
  name: string;
};

export const LiveUpdateBanner: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
