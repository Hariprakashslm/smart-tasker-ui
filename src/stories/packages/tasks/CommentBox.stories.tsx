// src/ui-stories/tasks/CommentBox.stories.tsx
import React from 'react';
import { CommentBox } from '@tasks/CommentBox';

export default {
  title: 'Packages/Tasks/CommentBox',
  component: CommentBox,
};

export const Default = () => (
  <div style={{ maxWidth: 400 }}>
    <CommentBox
      userAvatarUrl="https://i.pravatar.cc/100"
      onSubmit={(text) => alert(`Commented: ${text}`)}
    />
  </div>
);

export const Disabled = () => (
  <CommentBox
    disabled
    userAvatarUrl="https://i.pravatar.cc/100"
    onSubmit={() => {}}
  />
);
