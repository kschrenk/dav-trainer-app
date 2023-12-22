'use client';

import { Section } from '../../../shared-ui/Section';
import { ArrowPath, Card, Container, Heading } from '../../../shared-ui';
import { useEffect, useRef, useState } from 'react';

interface IUploadedFile {
  id: number;
  fieldname: string;
  originalname: string;
  size: number;
  filename: string;
  path: string;
}

const btnStyles =
  'bg-primary hover:bg-green-700 text-white px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed';

export default function Index() {
  const [files, setFiles] = useState<IUploadedFile[]>([]);
  const [uploadedFile, setUploadedFile] = useState<IUploadedFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/file')
      .then((resp) => resp.json())
      .then((data) => {
        setFiles(data);
      });
  }, [uploadedFile]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      setIsLoading(false);
    } else {
      alert(
        `Error: ${jsonResponse.error} / Message: ${jsonResponse.message}/ Status: ${jsonResponse.statusCode}}`
      );
      setIsLoading(false);
    }
  };

  const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    if (id) {
      const resp = await fetch(`http://localhost:3000/api/file/${id}`, {
        method: 'DELETE',
      });
      if (resp.ok) {
        alert('Datei wurde gelöscht');
        setFiles((prevState) =>
          prevState.filter((file) => file.id !== parseInt(id))
        );
      } else {
        alert('Datei konnte nicht gelöscht werden');
      }
    }
  };

  return (
    <Container>
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
                    ref={ref}
                    type="file"
                    id="file"
                    name="file"
                    className="mb-6"
                  />
                  <div>
                    <button
                      type="submit"
                      className={btnStyles}
                      disabled={isLoading || ref?.current?.files?.length === 0}
                    >
                      <span className="flex">
                        {isLoading && (
                          <ArrowPath className="animate-spin mr-2 -ml-2" />
                        )}
                        Hochladen
                      </span>
                    </button>
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
                  <p>{uploadedFile.path}</p>
                  <button
                    className={btnStyles}
                    onClick={() => console.log('🚀', 'do sth.')}
                  >
                    Jetzt speichern?
                  </button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </Section>
      <Section>
        <Card>
          <Heading tag="h2">Alle hochgeladenen Dateien</Heading>
          <ul>
            {files.map((file) => (
              <li key={file.filename}>
                <div className="flex justify-between">
                  <span>{file.originalname}</span>
                  <button data-id={file.id} onClick={onDelete}>
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </Container>
  );
}
