import React, { useState } from 'react';
import { CreateProjectModal } from 'projects/CreateProjectModal';

export default {
  title: 'Packages/Projects/CreateProjectModal',
  component: CreateProjectModal,
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <CreateProjectModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) => alert(JSON.stringify(data))}
      />
    </>
  );
};
