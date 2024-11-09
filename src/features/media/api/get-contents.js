export const getContents = async () => {
  try {
    const response = await fetch("/data.json");

    if (!response.ok) {
      throw new Error(`Reponse status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
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
