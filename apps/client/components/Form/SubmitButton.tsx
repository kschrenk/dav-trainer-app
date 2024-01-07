import type { FC } from 'react';
import { Children } from '../../types';

const SubmitButton: FC<Children> = ({ children }) => {
  return (
    <div className="mt-4">
      <button
        type={'submit'}
        className="bg-primary text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    </div>
  );
};

export { SubmitButton };
