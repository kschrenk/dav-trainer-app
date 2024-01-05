import './global.css';
import { Container } from '../shared-ui';
import Link from 'next/link';

export const metadata = {
  title: 'DAV - Deutscher Alpenverein',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <main>
          <div className="py-6 mb-6 border-b">
            <Container>
              <Link href={'/'}>
                <h1>DAV</h1>
              </Link>
            </Container>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
