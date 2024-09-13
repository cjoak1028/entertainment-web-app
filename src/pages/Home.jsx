import SearchBar from "../components/SearchBar.jsx";
import TrendingContent from "../components/TrendingContent.jsx";
import RecommendedContent from "../components/RecommendedContent.jsx";

const Home = ({ contentData }) => {
  return (
    <>
      <SearchBar />
      <TrendingContent contentData={contentData} />
      <RecommendedContent contentData={contentData} />
    </>
  );
};

export default Home;
