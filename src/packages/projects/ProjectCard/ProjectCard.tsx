import React from "react";

import "./ProjectCard.css";

type User = {
  name: string;
};

export const ProjectCard: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return <article></article>;
};
