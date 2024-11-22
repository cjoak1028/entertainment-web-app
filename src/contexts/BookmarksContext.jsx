import { createContext, useContext, useState, useEffect } from "react";
import { getBookmarks } from "@/features/catalog/api/get-bookmarks";

// Create a context
const BookmarksContext = createContext();

// Provide the context
export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(new Set());

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const fetchedBookmarks = await getBookmarks();
        setBookmarks(new Set(fetchedBookmarks));
      } catch (err) {
        console.error(err);
      }
    };
    fetchBookmarks();
  }, []);

  return (
    <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
};

// Hook to use the context
export const useBookmarks = () => useContext(BookmarksContext);
