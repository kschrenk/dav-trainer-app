import { Section } from '../../../shared-ui/Section';
import { Card, Container, Heading } from '../../../shared-ui';
import { FileUpload } from '../../../components/file/file-upload';
import { FileDelete } from '../../../components/file/file-delete';
import { TAG_FILES, getFiles } from '../../../lib/file';
import { revalidateTag } from 'next/cache';
import { TAG_COURSES } from '../../../lib/course';

export default async function Index() {
  const files = await getFiles();

  async function refetchFiles() {
    'use server';
    revalidateTag(TAG_FILES);
  }

  async function refetchCourses() {
    'use server';
    revalidateTag(TAG_COURSES);
  }

  return (
    <Container>
      <FileUpload
        refetchCourses={refetchCourses}
        onFileUploaded={refetchFiles}
        files={files}
      />
      <Section>
        <Card>
          <Heading tag="h2">Alle hochgeladenen Dateien</Heading>
          <ul>
            {files?.map((file) => (
              <li key={file.filename}>
                <div className="flex justify-between">
                  <span>{`${file.id} ${file.originalname}`}</span>
                  <FileDelete id={file.id} onFileDeleted={refetchFiles} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </Container>
  );
}
