import { useState, useEffect } from "react";

import CatalogItem from "@/features/catalog/components/CatalogItem";
import { getCatalogItemsByCategory } from "@/features/catalog/api/getCatalogItems";

const CatalogList = ({ categoryTitle, category, isGrid }) => {
  const [catalogItems, setCatalogItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getCatalogItemsByCategory(category);
      setCatalogItems(items || []);
    };

    fetchData();
  }, [category]);

  return (
    <section className="px-9 md:px-6 sm:px-4 py-5 sm:py-3">
      <h2 className="heading-lg mb-8 sm:mb-4">{categoryTitle}</h2>
      <ul
        className={`${
          isGrid
            ? "grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-7 sm:gap-x-4 gap-y-8 md:gap-y-6 sm:gap-y-4"
            : "flex flex-row overflow-x-auto gap-10 sm:gap-4 -mr-9 md:-mr-6 sm:-mr-4"
        }`}
      >
        {catalogItems.map((item, index) => (
          <li key={index}>
            <CatalogItem mediaItem={item} isGrid={isGrid} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogList;
