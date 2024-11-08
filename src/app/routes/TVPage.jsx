import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";

const TVPage = () => {
  return (
    <SearchCatalog>
      <CatalogList categoryTitle="TV Series" category="tv" isGrid={true} />
    </SearchCatalog>
  );
};

export default TVPage;
