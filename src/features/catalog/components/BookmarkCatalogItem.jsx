import { useState, useEffect } from "react";
import { postBookmarks } from "@/features/catalog/api/post-bookmarks.js";
import { deleteBookmark } from "@/features/catalog/api/delete-bookmarks.js";

const BookmarkCatalogItem = ({ contentId, isInitBookmarked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(isInitBookmarked);
  }, [isInitBookmarked]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBookmark = async () => {
    try {
      if (isBookmarked) {
        await deleteBookmark(contentId);
      } else {
        await postBookmarks(contentId);
      }
      // Only update state if the operation succeeds
      setIsBookmarked(!isBookmarked);
    } catch (err) {
      console.error("Failed to update bookmark:", err);
    }
  };

  return (
    <div
      className={` rounded-full w-8 h-8 flex justify-center items-center cursor-pointer ${
        isHovered ? "bg-on-container" : "bg-surface/50 group-hover:bg-surface"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleBookmark}
    >
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          className={`${isHovered ? "stroke-surface" : "stroke-on-container"} ${
            isBookmarked && "fill-on-container"
          }`}
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BookmarkCatalogItem;
