import type { FC, MouseEventHandler } from 'react';
import { Children } from '../types';

const btnStyles =
  'bg-primary hover:bg-green-700 text-white px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed';

const Button: FC<
  {
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  } & Partial<Children> & {
      type?: HTMLButtonElement['type'];
    }
> = ({ disabled, type = 'button', children, onClick }) => {
  return (
    <button
      type={type}
      className={btnStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
