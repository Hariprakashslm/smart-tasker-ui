import React from "react";

import "./FileList.css";

type User = {
  name: string;
};

export const FileList: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
