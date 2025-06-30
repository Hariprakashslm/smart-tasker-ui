import React from "react";

import "./OfflineBanner.css";

type User = {
  name: string;
};

export const OfflineBanner: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
