import { apiKey } from "./apiKey";

export const getAPOD = async selectedDate => {
  const url = "https://api.nasa.gov/planetary/apod?";
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() - 1;
  const day = date.getDate();
  const timeStamp = selectedDate ? selectedDate : `${year}-${month}-${day}`;
  try {
    const response = await fetch(
      `${url}api_key=${apiKey}&date=${timeStamp}&hd=false`
    );
    return response.json();
  } catch (error) {
    throw Error(error.message);
  }
};