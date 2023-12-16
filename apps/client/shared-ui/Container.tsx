import type { FC } from 'react';
import { Children } from '../types';

export const Container: FC<Children> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};
