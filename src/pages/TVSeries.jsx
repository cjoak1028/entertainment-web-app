import { useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";

const TVSeries = ({ contentData }) => {
  const tvSeriesData = useMemo(() => {
    return (
      contentData?.filter((content) => content.category === "TV Series") || []
    );
  }, [contentData]);

  const TVSeriesContent = () => {
    return <ContentGridSection title="TV Series" contentData={tvSeriesData} />;
  };

  return (
    <>
      <SearchBar />
      <TVSeriesContent />
    </>
  );
};

export default TVSeries;
