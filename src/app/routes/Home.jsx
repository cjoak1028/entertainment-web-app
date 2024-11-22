import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import { BookmarksProvider } from "@/contexts/BookmarksContext";

const HomePage = ({ contents }) => {
  const [trendingContents, setTrendingContents] = useState([]);
  const [recommendedContents, setRecommendedContents] = useState([]);

  useEffect(() => {
    const { trendingContents, recommendedContents } = contents.reduce(
      (acc, item) => {
        if (item.isTrending) {
          acc.trendingContents.push(item);
        } else {
          acc.recommendedContents.push(item);
        }
        return acc;
      },
      { trendingContents: [], recommendedContents: [] }
    );

    setTrendingContents(trendingContents);
    setRecommendedContents(recommendedContents);
  }, [contents]);

  return (
    <SearchCatalog>
      <BookmarksProvider>
        <CatalogList
          categoryTitle="Trending"
          catalogItems={trendingContents}
          isTrending={true}
        />
        <CatalogList
          categoryTitle="Recommended for you"
          catalogItems={recommendedContents}
          isTrending={false}
        />
      </BookmarksProvider>
    </SearchCatalog>
  );
};

export default HomePage;
