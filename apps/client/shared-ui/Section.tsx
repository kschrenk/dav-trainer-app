import type { FC } from 'react';
import { Children } from '../types';

export const Section: FC<Children> = ({ children }) => {
  return <section className="container mx-auto">{children}</section>;
};
