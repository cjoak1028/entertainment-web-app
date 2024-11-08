import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";

const MoviesPage = () => {
  return (
    <SearchCatalog>
      <CatalogList categoryTitle="Movies" category="movies" isGrid={true} />
    </SearchCatalog>
  );
};

export default MoviesPage;
