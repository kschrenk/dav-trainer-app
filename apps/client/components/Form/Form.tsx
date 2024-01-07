import { FC } from 'react';
import { Children } from '../../types';

type FormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: FC<Children & FormProps> = ({ children, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!onSubmit) return;
    onSubmit(event);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
