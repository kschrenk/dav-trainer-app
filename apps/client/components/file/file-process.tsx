import { ChangeEvent, FC, useState } from 'react';
import { File } from '../../types';
import { processFile } from '../../lib/file';
import { Button } from '../../shared-ui';

type FileProcessProps = {
  files: File[];
  onFileProcessed: () => void;
};

const FileProcess: FC<FileProcessProps> = ({ files, onFileProcessed }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileSelected = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value === '0') {
      setSelectedFile(null);
    } else {
      setSelectedFile(value);
    }
  };

  const onFileProcess = async (id: string) => {
    const data = await processFile(id);
    alert(data.message);
    if (!data.error) {
      setSelectedFile(null);
      onFileProcessed();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form>
        <select className="hover:cursor-pointer" onChange={handleFileSelected}>
          <option value={'0'} selected={!selectedFile}>
            Bitte auswählen
          </option>
          {files.map((file) => (
            <option
              key={file.id}
              value={file.id}
              selected={file.id.toString() === selectedFile}
            >
              {file.originalname}
            </option>
          ))}
        </select>
      </form>
      <div>
        <Button
          disabled={!selectedFile}
          onClick={() => {
            if (!selectedFile) {
              return console.error('No file selected');
            }

            onFileProcess(selectedFile);
          }}
        >
          Datei verarbeiten
        </Button>
      </div>
    </div>
  );
};

export { FileProcess };
