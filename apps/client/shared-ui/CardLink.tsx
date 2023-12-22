import type { ComponentPropsWithoutRef, FC } from 'react';
import { Children } from '../types';
import NextLink from 'next/link';
import { concatClasses } from '../helpers';
import { Card } from './Card';

interface CardElements {
  Link: typeof Link;
}

const defaultStyles =
  'text-blue-400 before:absolute before:content-[""] before:inset-0 before:z-1';

const Link: FC<ComponentPropsWithoutRef<typeof NextLink>> = ({
  className,
  ...props
}) => {
  return (
    <NextLink className={concatClasses(defaultStyles, className)} {...props}>
      {props.children}
    </NextLink>
  );
};

export const CardLink: FC<Children> & CardElements = ({ children }) => {
  return <Card className="relative hover:bg-gray-100">{children}</Card>;
};

CardLink.Link = Link;
