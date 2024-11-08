import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";

const HomePage = () => {
  return (
    <SearchCatalog>
      <CatalogList
        categoryTitle="Trending"
        category="trending"
        isGrid={false}
      />

      <CatalogList
        categoryTitle="Recommended for you"
        category="recommended"
        isGrid={true}
      />
    </SearchCatalog>
  );
};

export default HomePage;
