import { Container, Heading, Link, Section } from '../../../shared-ui';

// @TODO: Implement me
export default function Page({ params }: { params: { id: string } }) {
  return (
    <Container>
      <Section>
        <Heading tag="h1">Kurs: {params.id}</Heading>
        <div className="mb-2">
          <Link href="/course">Zurück</Link>
        </div>
      </Section>
      <Section>
        <p>Alle Details</p>
      </Section>
    </Container>
  );
}
