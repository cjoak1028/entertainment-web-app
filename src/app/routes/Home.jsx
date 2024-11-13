import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import {
  getTrendingContents,
  getRecommendedContents,
} from "@/features/catalog/api/get-contents.js";

const HomePage = () => {
  const [trendingContents, setTrendingContents] = useState([]);
  const [recommendedContents, setRecommendedContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      const trendingContents = await getTrendingContents();
      const recommendedContents = await getRecommendedContents();
      setTrendingContents(trendingContents || []);
      setRecommendedContents(recommendedContents || []);
    };

    fetchContents();
  }, []);

  return (
    <SearchCatalog>
      <CatalogList
        categoryTitle="Trending"
        mediaItems={trendingContents}
        isTrending={true}
      />
      <CatalogList
        categoryTitle="Recommended for you"
        mediaItems={recommendedContents}
        isTrending={false}
      />
    </SearchCatalog>
  );
};

export default HomePage;
