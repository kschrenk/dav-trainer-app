import { Section } from '../../../shared-ui/Section';
import { Card, Container, Heading } from '../../../shared-ui';
import { IUploadedFile, FileUpload } from './file-upload';
import { FileDelete } from './file-delete';
import { revalidateTag } from 'next/cache';

const TAG_FILES = 'files';

async function getFiles(): Promise<
  Pick<IUploadedFile, 'filename' | 'originalname' | 'id'>[]
> {
  const res = await fetch('http://localhost:3000/api/file', {
    next: { tags: [TAG_FILES] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Index() {
  const files = await getFiles();

  async function reloadFiles() {
    'use server';
    revalidateTag(TAG_FILES);
  }

  return (
    <Container>
      <FileUpload onFileUploaded={reloadFiles} />
      <Section>
        <Card>
          <Heading tag="h2">Alle hochgeladenen Dateien</Heading>
          <ul>
            {files?.map((file) => (
              <li key={file.filename}>
                <div className="flex justify-between">
                  <span>{file.originalname}</span>
                  <FileDelete id={file.id} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </Container>
  );
}
