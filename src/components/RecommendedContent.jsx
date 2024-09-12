import { useMemo } from "react";
import BookmarkButton from "./BookmarkButton.jsx";
import ContentLabel from "./ContentLabel.jsx";

const RecommendedContent = ({ contentData }) => {
  const recommendedData = useMemo(() => {
    return contentData?.filter((content) => !content.isTrending) || [];
  }, [contentData]);
  return (
    <section className="px-9 md:px-6 sm:px-4 py-5 sm:py-3">
      <h2 className="heading-lg mb-8 sm:mb-4">Recommended for you</h2>
      <ul className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-7 sm:gap-x-4 gap-y-8 md:gap-y-6 sm:gap-y-4">
        {recommendedData.map((contentInfo, index) => (
          <li key={index}>
            <Content info={contentInfo} />
          </li>
        ))}
      </ul>
    </section>
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
