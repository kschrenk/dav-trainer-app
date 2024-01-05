import { Section } from '../../../shared-ui/Section';
import { Card, Container, Heading } from '../../../shared-ui';
import { FileUpload } from '../../../components/file/file-upload';
import { FileDelete } from '../../../components/file/file-delete';
import { revalidateTag } from 'next/cache';
import { IUploadedFile } from '../../../components/file/types';

const TAG_FILES = 'files';

// @TODO move to lib/file
async function getFiles(): Promise<IUploadedFile[]> {
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
      <FileUpload onFileUploaded={reloadFiles} files={files} />
      <Section>
        <Card>
          <Heading tag="h2">Alle hochgeladenen Dateien</Heading>
          <ul>
            {files?.map((file) => (
              <li key={file.filename}>
                <div className="flex justify-between">
                  <span>{`${file.id} ${file.originalname}`}</span>
                  <FileDelete id={file.id} onFileDeleted={reloadFiles} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </Container>
  );
}
