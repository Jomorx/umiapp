import React, { ReactNode } from 'react';
function index({ children }: { children: ReactNode }) {
  return (
    <div>
      Layouts
      {children}
    </div>
  );
}

export default index;
