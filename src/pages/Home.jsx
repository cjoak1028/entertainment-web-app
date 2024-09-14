import { useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ContentGridSection from "../components/ContentGridSection.jsx";
import ContentRowSection from "../components/ContentRowSection.jsx";

const Home = ({ contentData }) => {
  const trendingData = useMemo(() => {
    return contentData?.filter((content) => content.isTrending) || [];
  }, [contentData]);

  const recommendedData = useMemo(() => {
    return contentData?.filter((content) => !content.isTrending) || [];
  }, [contentData]);

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
