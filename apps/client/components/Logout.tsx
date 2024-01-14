'use client';

import { deleteCookie, hasCookie } from 'cookies-next';
import { FC } from 'react';
import { COOKIE_AUTH } from '../constants';

type Props = { onLogout: () => void };

const Logout: FC<Props> = ({ onLogout }) => {
  const handleLogout = () => {
    if (!hasCookie(COOKIE_AUTH)) {
      console.error('No auth cookie');
      return;
    }

    deleteCookie(COOKIE_AUTH);
    onLogout();
  };

  return (
    <button
      className="bg-primary text-white rounded py-1 px-3"
      onClick={handleLogout}
    >
      Abmelden
    </button>
  );
};

export { Logout };
