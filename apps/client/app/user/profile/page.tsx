import { revalidateTag } from 'next/cache';
import { Logout } from '../../../components';
import { Container, Heading, Link, Section } from '../../../shared-ui';
import { getUser } from './actions';
import { TAG_USER } from '../../../constants';

export default async function ProfilePage() {
  const user = await getUser();

  async function refetchUser() {
    'use server';
    revalidateTag(TAG_USER);
  }

  return (
    <Container>
      <Section>
        <div className="mb-12">
          <Heading tag="h1">Mein Profil</Heading>
          {user && 'username' in user ? (
            <div className="flex flex-col gap-4">
              <pre>{JSON.stringify(user)}</pre>
              <div>
                <Logout onLogout={refetchUser} />
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-4">Bitte loggen Sie sich ein.</p>
              <div className="flex gap-4">
                <Link href={'/user/login'}>Zur Anmeldung</Link>
              </div>
            </div>
          )}
        </div>
      </Section>
    </Container>
  );
}
