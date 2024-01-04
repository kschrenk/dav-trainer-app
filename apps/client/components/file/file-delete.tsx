'use client';

import { Trash } from '../../shared-ui/Icons';
import { FC } from 'react';

type FileDeleteProps = {
  id: number;
  onFileDeleted?: () => void;
};

const FileDelete: FC<FileDeleteProps> = ({ id, onFileDeleted }) => {
  const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    if (id) {
      const resp = await fetch(`http://localhost:3000/api/file/${id}`, {
        method: 'DELETE',
      });
      if (resp.ok) {
        alert('Datei wurde gelöscht');
        onFileDeleted && onFileDeleted();
      } else {
        alert('Datei konnte nicht gelöscht werden');
      }
    }
  };

  return (
    <button data-id={id} onClick={onDelete}>
      <Trash />
    </button>
  );
};

export { FileDelete };
