import { Container, Link, Section } from '../../../shared-ui';

export default function ProfilePage() {
  return (
    <Container>
      <Section>
        <div className="mb-12">
          <h1>Mein Profil</h1>
        </div>
        <div className="flex gap-4">
          <Link href={'/user/login'}>Zum Login</Link>
          <Link href={'/user/register'}>Jetzt registrieren</Link>
        </div>
      </Section>
    </Container>
  );
}
