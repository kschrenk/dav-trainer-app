import Link from 'next/link';
import { Card } from '../shared-ui/Card';
import { Section } from '../shared-ui/Section';

export default async function Index() {
  return (
    <Section>
      <Card>
        <h2 className="font-bold text-lg mb-4">Datenblatt hochladen</h2>
        <Link href={'/test'}>Zum Upload</Link>
      </Card>
    </Section>
  );
}
