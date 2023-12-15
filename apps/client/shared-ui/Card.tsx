import type { FC } from 'react';
import { Children } from '../types';

export const Card: FC<Children> = ({ children }) => {
  return <div className="border p-6">{children}</div>;
};
