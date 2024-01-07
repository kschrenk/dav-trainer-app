import './global.css';
import { Container } from '../shared-ui';
import Link from 'next/link';
import { UserIcon } from '../shared-ui/Icons';

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
              <div className="flex">
                <div>
                  <Link href={'/'}>
                    <h1>DAV</h1>
                  </Link>
                </div>
                <div className="flex w-full pl-6 justify-end items-center">
                  <Link href={'/user/profile'}>
                    <UserIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Container>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
