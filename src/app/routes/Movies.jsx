import { useState, useEffect } from "react";
import SearchMedia from "@/features/media/components/SearchMedia.jsx";
import MediaList from "@/features/media/components/MediaList.jsx";
import { getMovies } from "@/features/media/api/get-contents.js";

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
    <SearchMedia>
      <MediaList
        categoryTitle="Movies"
        mediaItems={movies}
        isTrending={false}
      />
    </SearchMedia>
  );
};

export default MoviesPage;
