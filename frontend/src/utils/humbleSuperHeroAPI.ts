import axios from "axios";

const URL = "http://localhost:4000/superheroes";

// POST request to create a new superhero
export const postSuperheroes = async (
  name: string,
  superPower: string,
  humilityScore: number
) => {
  try {
    const response = await axios.post(URL, {
      name,
      superPower,
      humilityScore,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting superhero:", error);
    throw error;
  }
};

// GET request to fetch superheroes
export const getSuperheroes = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching superheroes:", error);
    throw error;
  }
};
