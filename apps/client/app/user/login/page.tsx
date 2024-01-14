'use client';

import { FormEvent, useState } from 'react';
import { Form, Input, SubmitButton } from '../../../components/Form';
import { Container, Link, Section } from '../../../shared-ui';
import { setCookie } from 'cookies-next';
import { COOKIE_AUTH } from '../../../constants';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = { username: email, password };

    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      setCookie(COOKIE_AUTH, data.access_token);
      router.push('/user/profile');
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <Section>
          <div className="mx-auto max-w-xl p-12 shadow bg-white">
            <h1 className="text-center">Login</h1>
            <div className="max-w-lg mt-6">
              <Form onSubmit={handleLogin}>
                <Input
                  type="email"
                  required
                  placeholder="E-Mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                >
                  E-Mail
                </Input>
                <Input
                  type="password"
                  required
                  placeholder="Passwort"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                >
                  Passwort
                </Input>
                <div className="flex items-center gap-8 pt-8">
                  <SubmitButton>Login</SubmitButton>
                  <Link href={'/user/register'}>Jetzt registrieren</Link>
                </div>
              </Form>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
