import { useState, useEffect } from "react";
import SearchMedia from "@/features/media/components/SearchMedia.jsx";
import MediaList from "@/features/media/components/MediaList.jsx";
import {
  getTrendingContents,
  getRecommendedContents,
} from "@/features/media/api/get-contents.js";

const HomePage = () => {
  const [trendingContents, setTrendingContents] = useState([]);
  const [recommendedContents, setRecommendedContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      const trendingContents = await getTrendingContents();
      const recommendedContents = await getRecommendedContents();
      setTrendingContents(trendingContents || []);
      setRecommendedContents(recommendedContents || []);
    };

    fetchContents();
  }, []);

  return (
    <SearchMedia>
      <MediaList
        categoryTitle="Trending"
        mediaItems={trendingContents}
        isTrending={true}
      />
      <MediaList
        categoryTitle="Recommended for you"
        mediaItems={recommendedContents}
        isTrending={false}
      />
    </SearchMedia>
  );
};

export default HomePage;
