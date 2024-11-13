import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import {
  getBookmarkedMovies,
  getBookmarkedTV,
} from "@/features/catalog/api/get-contents.js";

const BookmarksPage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedTV, setBookmarkedTV] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      const bookmarkedMovies = await getBookmarkedMovies();
      const bookmarkedTV = await getBookmarkedTV();
      setBookmarkedMovies(bookmarkedMovies || []);
      setBookmarkedTV(bookmarkedTV || []);
    };

    fetchContents();
  }, []);

  return (
    <SearchCatalog>
      <CatalogList
        categoryTitle="Bookmarked Movies"
        catalogItems={bookmarkedMovies}
        isTrending={false}
      />
      <CatalogList
        categoryTitle="Bookmarked TV Series"
        catalogItems={bookmarkedTV}
        isTrending={false}
      />
    </SearchCatalog>
  );
};

export default BookmarksPage;
