import { useMemo } from "react";
import BookmarkButton from "./BookmarkButton.jsx";
import ContentLabel from "./ContentLabel.jsx";

const RecommendedContent = ({ contentData }) => {
  const recommendedData = useMemo(() => {
    return contentData?.filter((content) => !content.isTrending) || [];
  }, [contentData]);
  return (
    <div className="mb-10 mr-8">
      <h2 className="heading-lg mb-8 sm:mb-4">Recommended for you</h2>
      <ul className="grid grid-cols-4 gap-x-10 gap-y-8">
        {recommendedData.map((contentInfo, index) => (
          <li key={index}>
            <Content info={contentInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = ({ info }) => {
  const { year, category, rating, title, thumbnail } = info;

  return (
    <div>
      <div
        className="h-[10.875rem] p-4 bg-cover bg-center rounded-lg mb-3"
        style={{
          backgroundImage: `url(${thumbnail.regular.large})`,
        }}
      >
        <div className="flex flex-row justify-end">
          <BookmarkButton />
        </div>
      </div>
      <ContentLabel
        year={year}
        category={category}
        rating={rating}
        title={title}
      />
    </div>
  );
};

export default RecommendedContent;
