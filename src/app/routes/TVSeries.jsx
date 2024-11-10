import { useState, useEffect } from "react";
import SearchMedia from "@/features/media/components/SearchMedia.jsx";
import MediaList from "@/features/media/components/MediaList.jsx";
import { getTVSeries } from "@/features/media/api/get-contents.js";

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
    <SearchMedia>
      <MediaList
        categoryTitle="TV Series"
        mediaItems={TVSeries}
        isTrending={false}
      />
    </SearchMedia>
  );
};

export default TVPage;
