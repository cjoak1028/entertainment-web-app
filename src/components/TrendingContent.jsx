import { useMemo } from "react";

const TrendingContent = ({ contentData }) => {
  const trendingData = useMemo(() => {
    return contentData?.filter((content) => content.isTrending) || [];
  }, [contentData]);

  return (
    <div>
      <ul>
        {trendingData.map((content, index) => (
          <li key={index}>{content.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingContent;
