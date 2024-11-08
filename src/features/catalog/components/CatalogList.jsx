import CatalogItem from "@/features/catalog/components/CatalogItem";

const CatalogList = ({ mediaItems, isGrid }) => {
  return (
    <ul
      className={`${
        isGrid
          ? "grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-7 sm:gap-x-4 gap-y-8 md:gap-y-6 sm:gap-y-4"
          : "flex flex-row overflow-x-auto gap-10 sm:gap-4 -mr-9 md:-mr-6 sm:-mr-4"
      }`}
    >
      {mediaItems.map((item, index) => (
        <li key={index}>
          <CatalogItem mediaItem={item} isGrid={isGrid} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
