import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";
import useFilteredData from "../hooks/useFilteredData.jsx";

const Movies = ({ contentData }) => {
  const moviesData = useFilteredData(contentData, { category: "Movie" });

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
