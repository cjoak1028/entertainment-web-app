import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";

const TVPage = ({ contents }) => {
  const [tvSeries, setTVSeries] = useState([]);

  useEffect(() => {
    const tvSeries = contents.filter((item) => item.category === "TV Series");
    setTVSeries(tvSeries);
  }, [contents]);
  return (
    <SearchCatalog>
      <CatalogList
        categoryTitle="TV Series"
        catalogItems={tvSeries}
        isTrending={false}
      />
    </SearchCatalog>
  );
};

export default TVPage;
