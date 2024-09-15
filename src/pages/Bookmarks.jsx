import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";
import useFilteredData from "../hooks/useFilteredData.jsx";

const Bookmarks = ({ contentData }) => {
  const bookmarkedMoviesData = useFilteredData(contentData, {
    category: "Movie",
    isBookmarked: true,
  });

  const bookmarkedTVData = useFilteredData(contentData, {
    category: "TV Series",
    isBookmarked: true,
  });

  const BookmarkedMovies = () => {
    return (
      <ContentGridSection
        title="Bookmarked Movies"
        contentData={bookmarkedMoviesData}
      />
    );
  };

  const BookmarkedTVSeries = () => {
    return (
      <ContentGridSection
        title="Bookmarked TV Series"
        contentData={bookmarkedTVData}
      />
    );
  };

  return (
    <>
      <SearchBar />
      <BookmarkedMovies />
      <BookmarkedTVSeries />
    </>
  );
};

export default Bookmarks;
