import React from "react";

import "./NotificationItem.css";

type User = {
  name: string;
};

export const NotificationItem: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
