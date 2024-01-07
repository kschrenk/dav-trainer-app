'use client';

import { FC } from 'react';
import { ShoppingBag } from '../../shared-ui/Icons';

const AddToBasket: FC = () => {
  return (
    <div>
      <ShoppingBag className="w-6 h-6" />
    </div>
  );
};

export { AddToBasket };
