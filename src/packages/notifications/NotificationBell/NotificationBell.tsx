import React from "react";

import "./NotificationBell.css";

type User = {
  name: string;
};

export const NotificationBell: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
