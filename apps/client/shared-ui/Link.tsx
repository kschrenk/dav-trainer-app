import NextLink from 'next/link';
import type { FC } from 'react';
import { Children } from '../types';

const stylesDefault = ['hover:underline'];
const stylesUnderline = [
  'underline',
  'underline-offset-4',
  'hover:text-gray-500',
];
const isUnderline = (textDecoration: string | undefined) => {
  return textDecoration === 'underline';
};

export const Link: FC<
  Children & { href: string; textDecoration?: 'underline' | 'none' }
> = ({ children, href, textDecoration = 'none' }) => {
  return (
    <NextLink
      href={href}
      className={
        isUnderline(textDecoration)
          ? stylesUnderline.join(' ')
          : stylesDefault.join(' ')
      }
    >
      {children}
    </NextLink>
  );
};
