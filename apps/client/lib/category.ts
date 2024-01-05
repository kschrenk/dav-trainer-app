// @TODO: Make it real
export async function getCategories() {
  // const response = await fetch('http://localhost:3000/api/category');
  // return response.json();

  return [
    { id: '1', name: 'sportklettern' },
    { id: '2', name: 'winter-alpin' },
    { id: '3', name: 'skischule' },
  ];
}
