import type { FC } from 'react';
import { Children } from '../types';
import { concatClasses } from '../helpers';

const defaultStyles = 'border p-6 rounded';

export const Card: FC<Children & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={concatClasses(defaultStyles, className)}>{children}</div>
  );
};
