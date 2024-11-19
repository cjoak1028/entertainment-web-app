import { useState } from "react";
import { postBookmark } from "@/features/catalog/api/post-bookmark.js";

const BookmarkCatalogItem = ({ contentId }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const bookmarkContent = async () => {
    const res = await postBookmark(contentId);
    console.log(res);
  };

  return (
    <div
      className={` rounded-full w-8 h-8 flex justify-center items-center cursor-pointer ${
        isHovered ? "bg-on-container" : "bg-surface/50 group-hover:bg-surface"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={bookmarkContent}
    >
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          className={` ${isHovered ? "stroke-surface" : "stroke-on-container"}`}
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BookmarkCatalogItem;
