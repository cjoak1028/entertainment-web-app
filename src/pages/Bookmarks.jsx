import { useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";

const Bookmarks = ({ contentData }) => {
  const bookmarkedMoviesData = useMemo(() => {
    return (
      contentData?.filter(
        (content) => content.category === "Movie" && content.isBookmarked
      ) || []
    );
  }, [contentData]);

  const bookmarkedTVData = useMemo(() => {
    return (
      contentData?.filter(
        (content) => content.category === "TV Series" && content.isBookmarked
      ) || []
    );
  }, [contentData]);

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
