const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchFoodImages = async (query = "food") => {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await res.json();
  return data.photos;
};