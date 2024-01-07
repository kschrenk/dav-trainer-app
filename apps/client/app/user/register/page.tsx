'use client';

import { FormEvent } from 'react';
import { Form, Input, SubmitButton } from '../../../components/Form';
import { Container, Heading, Section } from '../../../shared-ui';

export default function RegisterPage() {
  const register = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
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
            >
              E-Mail
            </Input>
            <Input type="text" placeholder={'Max'} required>
              Vorname
            </Input>
            <Input type="text" placeholder={'Mustermann'} required>
              Nachname
            </Input>
            <Input type="password" autoComplete="new-password" required>
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
