import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import { BookmarksProvider } from "@/contexts/BookmarksContext";

const TVPage = ({ contents }) => {
  const [tvSeries, setTVSeries] = useState([]);

  useEffect(() => {
    const tvSeries = contents.filter((item) => item.category === "TV Series");
    setTVSeries(tvSeries);
  }, [contents]);

  return (
    <SearchCatalog>
      <BookmarksProvider>
        <CatalogList
          categoryTitle="TV Series"
          catalogItems={tvSeries}
          isTrending={false}
        />
      </BookmarksProvider>
    </SearchCatalog>
  );
};

export default TVPage;
