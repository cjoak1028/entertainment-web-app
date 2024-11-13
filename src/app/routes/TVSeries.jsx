import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import { getTVSeries } from "@/features/catalog/api/get-contents.js";

const TVPage = () => {
  const [TVSeries, setTVSeries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const TVSeries = await getTVSeries();
      setTVSeries(TVSeries || []);
    };

    fetchMovies();
  }, []);
  return (
    <SearchCatalog>
      <CatalogList
        categoryTitle="TV Series"
        mediaItems={TVSeries}
        isTrending={false}
      />
    </SearchCatalog>
  );
};

export default TVPage;
