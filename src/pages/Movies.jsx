import { useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";

const Movies = ({ contentData }) => {
  const moviesData = useMemo(() => {
    return contentData?.filter((content) => content.category === "Movie") || [];
  }, [contentData]);

  const MoviesContent = () => {
    return <ContentGridSection title="Movies" contentData={moviesData} />;
  };

  return (
    <>
      <SearchBar />
      <MoviesContent />
    </>
  );
};

export default Movies;
