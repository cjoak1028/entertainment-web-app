export const getCatalogItemsByCategory = async (category) => {
  try {
    let filteredData;
    const response = await fetch("/data.json");

    if (!response.ok) {
      throw new Error(`Reponse status: ${response.status}`);
    }

    const data = await response.json();

    if (category === "trending") {
      filteredData = data.filter((item) => item.isTrending);
    } else if (category === "recommended") {
      filteredData = data.filter((item) => !item.isTrending);
    } else if (category === "movies") {
      filteredData = data.filter((item) => item.category === "Movie");
    } else if (category === "tv") {
      filteredData = data.filter((item) => item.category === "TV Series");
    } else if (category === "bookmarks") {
      filteredData = data.filter((item) => item.isBookmarked);
    }

    return filteredData;
  } catch (error) {
    console.error(error);
  }
};
