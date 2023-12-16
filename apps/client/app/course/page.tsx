import { Card } from '../../shared-ui/Card';
import { Section } from '../../shared-ui/Section';
import { Link } from '../../shared-ui/Link';
import { Container } from '../../shared-ui';
import { Navigation } from '../../components';

export default async function Index() {
  return (
    <Container>
      <Section>
        <h1 className="font-bold text-3xl mb-4">Kurse</h1>
        <Card>
          <Link href={'/course/upload'}>Neue Liste hochladen</Link>
        </Card>
      </Section>
      <Section>
        <Card>
          <h2 className="font-bold text-lg mb-4">Übersicht</h2>
        </Card>
      </Section>
      <Navigation>
        <Link href="/">Zurück zur Startseite</Link>
      </Navigation>
    </Container>
  );
}
