'use client';

import { Course } from '../../../types';

type BookingCode = Course['bookingCode'];

export function useAddToBasket() {
  const addToBasket = (bookingCode: BookingCode) => {
    console.log('🚀', bookingCode);
  };

  return {
    addToBasket,
  };
}
