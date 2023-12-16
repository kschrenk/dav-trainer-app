import { Container, Link } from '../shared-ui';
import { Card } from '../shared-ui/Card';
import { Section } from '../shared-ui/Section';

export default async function Index() {
  return (
    <Container>
      <Section>
        <Card>
          <h2 className="font-bold text-lg mb-4">Kurse</h2>
          <Link textDecoration="underline" href={'/course'}>
            Zur Übersicht
          </Link>
        </Card>
      </Section>
    </Container>
  );
}
