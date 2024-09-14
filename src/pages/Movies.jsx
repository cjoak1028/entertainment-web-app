import { useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ContentSection from "../components/ContentSection.jsx";
import ContentGrid from "../components/ContentGrid.jsx";

const Movies = ({ contentData }) => {
  const moviesData = useMemo(() => {
    return contentData?.filter((content) => content.category === "Movie") || [];
  }, [contentData]);
  return (
    <>
      <SearchBar />
      <ContentSection title="Movies">
        <ContentGrid contentData={moviesData} />
      </ContentSection>
    </>
  );
};

export default Movies;
