const API_URL = 'http://localhost:3001/api/items';

export const getItemsByParam = async (param) => {
  try {
    const response = await fetch(`${API_URL}/search/${param}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getItemDetails = async (itemId) => {
  try {
    const response = await fetch(`${API_URL}/${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}