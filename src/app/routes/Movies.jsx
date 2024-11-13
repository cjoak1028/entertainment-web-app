import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import { getMovies } from "@/features/catalog/api/get-contents.js";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies || []);
    };

    fetchMovies();
  }, []);

  return (
    <SearchCatalog>
      <CatalogList
        categoryTitle="Movies"
        catalogItems={movies}
        isTrending={false}
      />
    </SearchCatalog>
  );
};

export default MoviesPage;
