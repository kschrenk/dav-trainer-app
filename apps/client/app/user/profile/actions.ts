'use server';
import { cookies } from 'next/headers';
import { COOKIE_AUTH, TAG_USER } from '../../../constants';

export async function getUser(): Promise<
  { username: string } | { message: string; statusCode: number }
> {
  const cookiesList = cookies();
  const authCookie = cookiesList.get(COOKIE_AUTH);

  const response = await fetch('http:localhost:3000/api/profile', {
    headers: {
      authorization: `Bearer ${authCookie?.value}`,
    },
    next: { tags: [TAG_USER] },
  });

  return response.json();
}
