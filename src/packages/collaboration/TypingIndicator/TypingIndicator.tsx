import React from "react";

import "./TypingIndicator.css";

type User = {
  name: string;
};

export const TypingIndicator: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
