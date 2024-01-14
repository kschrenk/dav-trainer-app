'use client';

import { FormEvent, useState } from 'react';
import { Form, Input, SubmitButton } from '../../../components/Form';
import { Container, Section } from '../../../shared-ui';
import { User } from '../../../types';

export default function LoginPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    const data: User = await response.json();
    setUser(data);
    // @TODO: Cookie is not set correctly in browser
  };

  return (
    <Container>
      <Section>
        <h1>Login</h1>
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
            <SubmitButton>Login</SubmitButton>
          </Form>
        </div>
      </Section>
      {user ? (
        <div>
          <pre>{JSON.stringify(user)}</pre>
        </div>
      ) : null}
    </Container>
  );
}
