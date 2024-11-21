import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";

const BookmarksPage = ({ contents }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedTV, setBookmarkedTV] = useState([]);

  useEffect(() => {}, []);

  return (
    <SearchCatalog>
      {bookmarkedMovies.length > 0 && (
        <CatalogList
          categoryTitle="Bookmarked Movies"
          catalogItems={bookmarkedMovies}
          isTrending={false}
        />
      )}
      {bookmarkedTV.length > 0 && (
        <CatalogList
          categoryTitle="Bookmarked TV Series"
          catalogItems={bookmarkedTV}
          isTrending={false}
        />
      )}
    </SearchCatalog>
  );
};

export default BookmarksPage;
