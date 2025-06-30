// src/ui-stories/common/OfflineBanner.stories.tsx
import React, { useState } from 'react';
import { OfflineBanner } from 'layout/OfflineBanner';

export default {
  title: 'Packages/Layout/OfflineBanner',
  component: OfflineBanner,
};

export const Simulated = () => {
  const [simulated, setSimulated] = useState(false);

  return (
    <div>
      {simulated && <div className="offline-banner">⚠️ Simulated Offline</div>}
      <button onClick={() => setSimulated(!simulated)}>
        Toggle Offline State
      </button>
    </div>
  );
};
