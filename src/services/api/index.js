import axios from "axios";

export async function getAllProducts() {
  try {
    const response = await axios.get("http://localhost:3000/produtos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function patchRating(data) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/produtos/${data.id}`,
      {
        rating: data.rating,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
