import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import { BookmarksProvider } from "@/contexts/BookmarksContext";

const MoviesPage = ({ contents }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = contents.filter((item) => item.category === "Movie");
    setMovies(movies);
  }, [contents]);

  // TODO: Create custom hook ??

  return (
    <SearchCatalog>
      <BookmarksProvider>
        <CatalogList
          categoryTitle="Movies"
          catalogItems={movies}
          isTrending={false}
        />
      </BookmarksProvider>
    </SearchCatalog>
  );
};

export default MoviesPage;
