import { Container, Heading } from '../shared-ui';
import { CardLink, Section } from '../shared-ui';

export default async function Index() {
  return (
    <Container>
      <Section>
        <div className="grid grid-cols-2 gap-4">
          <CardLink>
            <Heading tag="h2">Profil</Heading>
            <CardLink.Link href="/user/profile">Zur Übersicht</CardLink.Link>
          </CardLink>
          <CardLink>
            <Heading tag="h2">Kurse</Heading>
            <CardLink.Link href="/course">Zur Übersicht</CardLink.Link>
          </CardLink>
        </div>
      </Section>
    </Container>
  );
}
