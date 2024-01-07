import type { ChangeEvent, FC, ReactNode } from 'react';
import { Children } from '../../types';

type BaseProps = {
  placeholder?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

type EmailProps = {
  type: 'email';
  autoComplete?: string;
};

type TextProps = {
  type: 'text';
};

type PasswordProps = {
  type: 'password';
  autoComplete?: string;
};

type InputProps = BaseProps & (TextProps | PasswordProps | EmailProps);

const defaultStyles = 'border-b p-2';

export const Input: FC<Children & InputProps> = ({
  children,
  type,
  ...props
}) => {
  let component: ReactNode;

  switch (type) {
    case 'email':
      component = <input type={type} className={defaultStyles} {...props} />;
      break;
    case 'password':
      component = <input type={type} className={defaultStyles} {...props} />;
      break;
    default:
      component = <input type={type} className={defaultStyles} {...props} />;
  }

  return (
    <label className="flex flex-col">
      <span className="mb-1 text-sm font-bold">{children}</span>
      {component}
    </label>
  );
};
