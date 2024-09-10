import { useMemo } from "react";
import BookmarkButton from "./BookmarkButton.jsx";
import ContentLabel from "./ContentLabel.jsx";

const TrendingContent = ({ contentData }) => {
  const trendingData = useMemo(() => {
    return contentData?.filter((content) => content.isTrending) || [];
  }, [contentData]);

  return (
    <div>
      <h2 className="heading-lg mb-6">Trending</h2>
      <ul className="flex flex-row overflow-x-scroll gap-10">
        {trendingData.map((contentInfo, index) => (
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
    <div
      className="w-[29.375rem] h-[14.375rem] bg-cover bg-center rounded-lg p-6 pt-4 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${thumbnail.trending.large})`,
      }}
    >
      <div className="flex flex-row justify-end">
        <BookmarkButton />
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

export default TrendingContent;
