import { useMemo } from "react";
import BookmarkButton from "./BookmarkButton.jsx";
import ContentLabel from "./ContentLabel.jsx";
import ContentSection from "./ContentSection.jsx";

const RecommendedContent = ({ contentData }) => {
  const recommendedData = useMemo(() => {
    return contentData?.filter((content) => !content.isTrending) || [];
  }, [contentData]);
  return (
    <ContentSection title="Recommended for you">
      <ul className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-7 sm:gap-x-4 gap-y-8 md:gap-y-6 sm:gap-y-4">
        {recommendedData.map((contentInfo, index) => (
          <li key={index}>
            <Content info={contentInfo} />
          </li>
        ))}
      </ul>
    </ContentSection>
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
        isGrid={true}
        year={year}
        category={category}
        rating={rating}
        title={title}
      />
    </div>
  );
};

export default RecommendedContent;
