'use client';

import { Section } from '../../shared-ui/Section';
import { ArrowPath, Button, Card, Heading } from '../../shared-ui';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

export interface IUploadedFile {
  id: number;
  fieldname: string;
  originalname: string;
  size: number;
  filename: string;
  path: string;
}

type FileUploadProps = {
  onFileUploaded?: () => void;
};

const FileUpload: FC<FileUploadProps> = ({ onFileUploaded }) => {
  const [uploadedFile, setUploadedFile] = useState<IUploadedFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

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
      setUploadedFile(jsonResponse.data ?? null);
      onFileUploaded && onFileUploaded();
      setIsLoading(false);
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
      <Card>
        <div className="grid grid-cols-2">
          <div>
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
          </div>
          <div>
            <Heading tag="h2">Hochgeladene Datei</Heading>
            {uploadedFile && (
              <div>
                <p>{uploadedFile.originalname}</p>
                <p>{uploadedFile.size}</p>
                <p>{uploadedFile.filename}</p>
                <p className="mb-4">{uploadedFile.path}</p>
                <Button onClick={() => console.log('revalidate cache')}>
                  Jetzt speichern?
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Section>
  );
};

export { FileUpload };
