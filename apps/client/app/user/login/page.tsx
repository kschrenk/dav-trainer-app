'use client';

import { FormEvent, useState } from 'react';
import { Form, Input, SubmitButton } from '../../../components/Form';
import { Container, Section } from '../../../shared-ui';

export default function LoginPage() {
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

    const data = await response.json();
    // {access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…MzNn0.e74DoYfYTBhVmcnzEiYemMKzNjWzf_4I5V5aUBrOjJo'}
    console.log('🚀 ~ file: page.tsx:16 ~ register ~ data:', data);
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
    </Container>
  );
}
