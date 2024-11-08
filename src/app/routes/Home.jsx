import SearchCatalog from "@/features/catalog/components/SearchCatalog.jsx";
import CatalogList from "@/features/catalog/components/CatalogList.jsx";
import useFilteredData from "@/hooks/useFilteredData.jsx";
import SectionLayout from "@/components/layouts/SectionLayout.jsx";

const Home = ({ contentData }) => {
  const trendingData = useFilteredData(contentData, { isTrending: true });
  const recommendedData = useFilteredData(contentData, { isTrending: false });

  return (
    <>
      <SearchCatalog>
        <SectionLayout title="Trending">
          <CatalogList mediaItems={trendingData} isGrid={false} />
        </SectionLayout>
        <SectionLayout title="Recommended for you">
          <CatalogList mediaItems={recommendedData} isGrid={true} />
        </SectionLayout>
      </SearchCatalog>
    </>
  );
};

export default Home;
