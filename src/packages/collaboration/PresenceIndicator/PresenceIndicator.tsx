import React from "react";

import "./PresenceIndicator.css";

type User = {
  name: string;
};

export const PresenceIndicator: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
