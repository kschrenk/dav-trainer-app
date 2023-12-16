import { FC } from 'react';
import type { Children } from '../../types';

export const Navigation: FC<Children> = ({ children }) => (
  <nav className="my-4 flex gap-8 bg-primary text-white px-4 py-3">
    {children}
  </nav>
);
