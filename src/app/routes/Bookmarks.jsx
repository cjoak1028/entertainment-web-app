import { useState, useEffect } from "react";
import SearchMedia from "@/features/media/components/SearchMedia.jsx";
import MediaList from "@/features/media/components/MediaList.jsx";
import {
  getBookmarkedMovies,
  getBookmarkedTV,
} from "@/features/media/api/get-contents.js";

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
    <SearchMedia>
      <MediaList
        categoryTitle="Bookmarked Movies"
        mediaItems={bookmarkedMovies}
        isGrid={true}
      />
      <MediaList
        categoryTitle="Bookmarked TV Series"
        mediaItems={bookmarkedTV}
        isGrid={true}
      />
    </SearchMedia>
  );
};

export default BookmarksPage;
