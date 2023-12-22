import { Children } from '../../types';
import { FC } from 'react';

export const Heading: FC<Children & { tag: 'h1' | 'h2' }> = ({
  children,
  tag,
}) => {
  switch (tag) {
    case 'h1':
      return <h1 className="font-bold text-3xl mb-6">{children}</h1>;
    case 'h2':
      return <h2 className="font-bold text-lg mb-4">{children}</h2>;
  }
};
