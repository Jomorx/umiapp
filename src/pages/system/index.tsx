import React, { ReactNode } from 'react';

function system({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default system;
