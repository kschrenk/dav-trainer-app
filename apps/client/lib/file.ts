async function processFile(id: string) {
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

export { processFile };
