'use client';

import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`max-w-[1920px] w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
