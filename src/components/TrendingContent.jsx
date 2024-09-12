import { useMemo } from "react";
import BookmarkButton from "./BookmarkButton.jsx";
import ContentLabel from "./ContentLabel.jsx";
import ContentSection from "./ContentSection.jsx";

const TrendingContent = ({ contentData }) => {
  const trendingData = useMemo(() => {
    return contentData?.filter((content) => content.isTrending) || [];
  }, [contentData]);

  return (
    <ContentSection title="Trending">
      <ul className="flex flex-row overflow-x-auto gap-10 sm:gap-4 -mr-9 md:-mr-6 sm:-mr-4">
        {trendingData.map((contentInfo, index) => (
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
    <div
      className="w-[29.375rem] sm:w-60 h-[14.375rem] sm:h-[8.75rem] bg-cover bg-center rounded-lg p-6 pt-4 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${thumbnail.trending.large})`,
      }}
    >
      <div className="flex flex-row justify-end">
        <BookmarkButton />
      </div>
      <ContentLabel
        isGrid={false}
        year={year}
        category={category}
        rating={rating}
        title={title}
      />
    </div>
  );
};

export default TrendingContent;
