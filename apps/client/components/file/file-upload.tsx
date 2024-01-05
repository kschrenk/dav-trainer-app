'use client';

import { Section } from '../../shared-ui/Section';
import { ArrowPath, Button, Card, Heading, Link } from '../../shared-ui';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { IUploadedFile } from './types';
import { FileProcess } from './file-process';

type FileUploadProps = {
  onFileUploaded?: () => void;
  refetchCourses: () => void;
  files: IUploadedFile[];
};

const FileUpload: FC<FileUploadProps> = ({
  refetchCourses,
  onFileUploaded,
  files,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  // @TODO move to lib/file
  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

  // @TODO move to lib/file
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const resp = await fetch('http://localhost:3000/api/file/upload', {
      method: 'POST',
      body: formData,
    });

    type JSONResponse = {
      data?: IUploadedFile;
      message?: string;
      error?: Array<{ message: string }>;
      statusCode: number;
    };
    const jsonResponse: JSONResponse = await resp.json();

    if (resp.ok) {
      alert(jsonResponse.message);
      onFileUploaded && onFileUploaded();
      setIsLoading(false);
      (document.getElementById('file') as HTMLInputElement).value = '';
    } else {
      alert(
        `Error: ${jsonResponse.error} / Message: ${jsonResponse.message}/ Status: ${jsonResponse.statusCode}}`
      );
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <Heading tag="h1">Kurse</Heading>
      <span className="block mb-4">
        <Link href={'/course'}>Zurück</Link>
      </span>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <Heading tag="h2">Neue Liste hochladen</Heading>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="file">Datei auswählen</label>
              <input
                type="file"
                id="file"
                name="file"
                className="mb-6"
                onChange={onFileSelected}
                accept=".xlsx"
              />
              <div>
                <Button type="submit" disabled={isLoading || !fileSelected}>
                  <span className="flex">
                    {isLoading && (
                      <ArrowPath className="animate-spin mr-2 -ml-2" />
                    )}
                    Hochladen
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </Card>
        <Card>
          <Heading tag="h2">Liste übertragen</Heading>
          <FileProcess files={files} onFileProcessed={refetchCourses} />
        </Card>
      </div>
    </Section>
  );
};

export { FileUpload };
