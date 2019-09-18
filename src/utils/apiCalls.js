const apiKey = process.env.VUE_APP_API_KEY;

export const getAPOD = async selectedDate => {
  const url = 'https://api.nasa.gov/planetary/apod?';
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
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

export const getMonthsAPOD = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const startDate = `${year}-${month}-1`;
  const timeStamp = `${year}-${month}-${day}`;
  const fullMonthUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${timeStamp}`;
  try {
    const response = await fetch(fullMonthUrl);
    return response.json();
  } catch (error) {
    throw Error(error.message);
  }
};
