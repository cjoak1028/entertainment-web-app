import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";
import ContentRowSection from "../components/ContentRowSection.jsx";
import useFilteredData from "../hooks/useFilteredData.jsx";

const Home = ({ contentData }) => {
  const trendingData = useFilteredData(contentData, { isTrending: true });

  const recommendedData = useFilteredData(contentData, { isTrending: false });

  const TrendingContent = () => {
    return <ContentRowSection title="Trending" contentData={trendingData} />;
  };

  const RecommendedContent = () => {
    return (
      <ContentGridSection
        title="Recommended for you"
        contentData={recommendedData}
      />
    );
  };

  return (
    <>
      <SearchBar />
      <TrendingContent />
      <RecommendedContent />
    </>
  );
};

export default Home;
