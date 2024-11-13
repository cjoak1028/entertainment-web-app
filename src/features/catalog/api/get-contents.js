import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getContents = async () => {
  try {
    const res = await axios.get(`${apiUrl}/catalog`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getTrendingContents = async () => {
  try {
    const contents = await getContents();
    return contents.filter((content) => content.isTrending);
  } catch (error) {
    console.error(error);
  }
};

export const getRecommendedContents = async () => {
  try {
    const contents = await getContents();
    return contents.filter((content) => !content.isTrending);
  } catch (error) {
    console.error(error);
  }
};

export const getMovies = async () => {
  try {
    const contents = await getContents();
    return contents.filter((content) => content.category === "Movie");
  } catch (error) {
    console.error(error);
  }
};

export const getTVSeries = async () => {
  try {
    const contents = await getContents();
    return contents.filter((content) => content.category === "TV Series");
  } catch (error) {
    console.error(error);
  }
};

export const getBookmarkedMovies = async () => {
  try {
    const contents = await getContents();
    return contents.filter(
      (content) => content.isBookmarked && content.category === "Movie"
    );
  } catch (error) {
    console.error(error);
  }
};

export const getBookmarkedTV = async () => {
  try {
    const contents = await getContents();
    return contents.filter(
      (content) => content.isBookmarked && content.category === "TV Series"
    );
  } catch (error) {
    console.error(error);
  }
};
