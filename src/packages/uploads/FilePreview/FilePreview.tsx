import React from "react";

import "./FilePreview.css";

type User = {
  name: string;
};

export const FilePreview: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
