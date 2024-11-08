import MovieIcon from "@/features/catalog/assets/icon-category-movie.svg";
import TvIcon from "@/features/catalog/assets/icon-category-tv.svg";
import DotDivider from "@/components/ui/DotDivider";
import BookmarkCatalogItem from "@/features/catalog/components/BookmarkCatalogItem";
import PlayMedia from "@/features/catalog/components/PlayMedia";

const CatalogGridView = ({ mediaItems }) => {
  return (
    <ul className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-7 sm:gap-x-4 gap-y-8 md:gap-y-6 sm:gap-y-4">
      {mediaItems.map((item, index) => (
        <li key={index}>
          <CatalogItem mediaItem={item} />
        </li>
      ))}
    </ul>
  );
};

const CatalogItem = ({ mediaItem }) => {
  const { year, category, rating, title, thumbnail } = mediaItem;

  return (
    <>
      <div
        className="h-[10.875rem] p-4 bg-cover bg-center rounded-lg mb-3 group relative"
        style={{
          backgroundImage: `url(${thumbnail.regular.large})`,
        }}
      >
        <div className="flex flex-row justify-end relative z-10">
          <BookmarkCatalogItem />
        </div>
        <div className="absolute group-hover:flex hidden justify-center items-center h-full w-full bg-black/50 left-0 top-0 z-5">
          <PlayMedia />
        </div>
      </div>
      <div>
        <p className="body-sm opacity-75 mb-3 sm:mb-2 flex">
          <span>{year}</span>
          <DotDivider />
          <span className="flex items-center">
            <img
              className="inline-block mr-[0.375rem] sm:w-[0.625rem]"
              src={category === "Movie" ? MovieIcon : TvIcon}
            />
            {category}
          </span>
          <DotDivider />
          <span>{rating}</span>
        </p>
        <h2 className="heading-xs">{title}</h2>
      </div>
    </>
  );
};

export default CatalogGridView;
