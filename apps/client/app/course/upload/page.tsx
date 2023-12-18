'use client';

import { Card } from '../../../shared-ui/Card';
import { Section } from '../../../shared-ui/Section';
import { Link } from '../../../shared-ui/Link';
import { Container, Heading } from '../../../shared-ui';
import { Navigation } from '../../../components';

export default function Index() {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log('🚀 ~ file: page.tsx:14 ~ onSubmit ~ formData:', formData);

    const resp = await fetch('http://localhost:3000/api/file/upload', {
      method: 'POST',
      body: formData,
    });

    if (resp.status === 201) {
      alert('Upload erfolgreich');
    } else {
      const jsonResponse: {
        error: string;
        message: string;
        statusCode: number;
      } = await resp.json();
      alert(
        `Error: ${jsonResponse.error} / Message: ${jsonResponse.message}/ Status: ${jsonResponse.statusCode}}`
      );
    }
  };

  return (
    <Container>
      <Section>
        <Heading tag="h1">Kurse</Heading>
        <Card>
          <Heading tag="h2">Neue Liste hochladen</Heading>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="file">Datei auswählen</label>
              <input type="file" id="file" name="file" className="mb-6" />
              <div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded"
                >
                  Hochladen
                </button>
              </div>
            </div>
          </form>
        </Card>
      </Section>
      <Navigation>
        <Link textDecoration="none" href="/">
          Startseite
        </Link>
        <span>{'‣'}</span>
        <Link textDecoration="none" href="/course">
          Kurse
        </Link>
      </Navigation>
    </Container>
  );
}
