import SearchCatalog from "../../features/catalog/components/SearchCatalog.jsx";
import CatalogGridView from "../../features/catalog/components/CatalogGridView.jsx";
import CatalogRowView from "../../features/catalog/components/CatalogRowView.jsx";
import useFilteredData from "../../hooks/useFilteredData.jsx";
import SectionLayout from "../../components/layouts/SectionLayout.jsx";

const Home = ({ contentData }) => {
  const trendingData = useFilteredData(contentData, { isTrending: true });
  const recommendedData = useFilteredData(contentData, { isTrending: false });

  return (
    <>
      <SearchCatalog />
      <SectionLayout title="Trending">
        <CatalogRowView mediaItems={trendingData} />
      </SectionLayout>
      <SectionLayout title="Recommended for you">
        <CatalogGridView mediaItems={recommendedData} />
      </SectionLayout>
    </>
  );
};

export default Home;
