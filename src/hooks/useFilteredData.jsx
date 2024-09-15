import { useMemo } from "react";

// Returns filtered content data that matches all criteria in the filters object
const useFilteredData = (contentData, filters) => {
  return useMemo(() => {
    return (
      contentData?.filter((content) =>
        Object.entries(filters).every(([key, value]) => content[key] === value)
      ) || []
    );
  }, [contentData, filters]);
};

export default useFilteredData;
