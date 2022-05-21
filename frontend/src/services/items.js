const API_URL = 'http://localhost:3001';

export const getItemsByParam = async (param) => {
  try {
    const response = await fetch(`${API_URL}/api/items/search/${param}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
