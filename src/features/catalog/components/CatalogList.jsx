import CatalogItem from "@/features/catalog/components/CatalogItem";
import { useBookmarks } from "@/contexts/BookmarksContext";

const CatalogList = ({ categoryTitle, catalogItems, isTrending }) => {
  const { bookmarks } = useBookmarks();

  const isBookmarked = (contentId) => {
    return bookmarks.has(contentId);
  };

  return (
    <section className="px-9 md:px-6 sm:px-4 py-5 sm:py-3">
      <h2 className="heading-lg mb-8 sm:mb-4">{categoryTitle}</h2>
      <ul
        className={`${
          isTrending
            ? "flex flex-row overflow-x-auto gap-10 sm:gap-4 -mr-9 md:-mr-6 sm:-mr-4"
            : "grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-7 sm:gap-x-4 gap-y-8 md:gap-y-6 sm:gap-y-4"
        }`}
      >
        {catalogItems.map((item, index) => (
          <li key={index}>
            <CatalogItem
              catalogItem={item}
              isTrending={isTrending}
              isBookmarked={isBookmarked(item._id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogList;
