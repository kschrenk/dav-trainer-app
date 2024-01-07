'use client';

import { FormEvent, useState } from 'react';
import { Form, Input, SubmitButton } from '../../../components/Form';
import { Container, Heading, Section } from '../../../shared-ui';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = { email, name, lastname, password };

    const response = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('🚀 ~ file: page.tsx:16 ~ register ~ data:', data);
  };

  return (
    <Container>
      <Section>
        <Heading tag="h1">Registrierung</Heading>
        <p className="mb-6">
          Bitte geben Sie Ihre Daten ein, um sich zu registrieren.
        </p>
        <div className="max-w-lg">
          <Form onSubmit={register}>
            <Input
              type="email"
              required
              placeholder="musterman@email.de"
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            >
              E-Mail
            </Input>
            <Input
              type="text"
              placeholder={'Max'}
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            >
              Vorname
            </Input>
            <Input
              type="text"
              placeholder={'Mustermann'}
              required
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            >
              Nachname
            </Input>
            <Input
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            >
              Passwort
            </Input>
            <Input type="password" autoComplete="new-password" required>
              Passwort bestätigen
            </Input>
            <SubmitButton>Registrieren</SubmitButton>
          </Form>
        </div>
      </Section>
    </Container>
  );
}
