import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";
import useFilteredData from "../hooks/useFilteredData.jsx";

const TVSeries = ({ contentData }) => {
  const tvSeriesData = useFilteredData(contentData, { category: "TV Series" });

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
