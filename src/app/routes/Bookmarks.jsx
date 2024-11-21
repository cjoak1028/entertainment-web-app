import { useState, useEffect } from "react";
import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import { getBookmarks } from "@/features/catalog/api/get-bookmarks.js";

const BookmarksPage = ({ contents }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedTV, setBookmarkedTV] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarks = await getBookmarks();
        setBookmarks(bookmarks);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookmarks();
  }, [contents]);

  useEffect(() => {
    const bookmarkSet = new Set(bookmarks);

    const { movies, tv } = contents.reduce(
      (acc, item) => {
        if (bookmarkSet.has(item._id) && item.category === "Movie") {
          acc.movies.push(item);
        } else if (bookmarkSet.has(item._id) && item.category === "TV Series") {
          acc.tv.push(item);
        }
        return acc;
      },
      { movies: [], tv: [] }
    );

    setBookmarkedMovies(movies);
    setBookmarkedTV(tv);
  }, [contents, bookmarks]);

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
