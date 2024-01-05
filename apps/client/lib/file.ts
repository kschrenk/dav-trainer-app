import { IUploadedFile } from '../components/file/types';

export const TAG_FILES = 'files';

export async function getFiles(): Promise<IUploadedFile[]> {
  const res = await fetch('http://localhost:3000/api/file', {
    next: { tags: [TAG_FILES] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function processFile(id: string) {
  const response = await fetch(`http://localhost:3000/api/file/${id}/process`, {
    method: 'POST',
  });

  type JSONResponse = {
    error: boolean;
    message: string;
  };

  const jsonResponse: JSONResponse = await response.json();

  return jsonResponse;
}
