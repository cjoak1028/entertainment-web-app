import MovieIcon from "@/features/catalog/assets/icon-category-movie.svg";
import TvIcon from "@/features/catalog/assets/icon-category-tv.svg";
import DotDivider from "@/components/ui/DotDivider";
import BookmarkCatalogItem from "@/features/catalog/components/BookmarkCatalogItem";
import PlayMedia from "@/features/catalog/components/PlayMedia";

const CatalogItem = ({ mediaItem, isGrid }) => {
  const { year, category, rating, title, thumbnail } = mediaItem;

  return (
    <>
      <div
        className={`p-4 bg-cover bg-center rounded-lg mb-3 group relative ${
          isGrid
            ? "h-[10.875rem]"
            : "w-[29.375rem] sm:w-60 h-[14.375rem] sm:h-[8.75rem] flex flex-col justify-between"
        }`}
        style={{
          backgroundImage: `url(${
            isGrid ? thumbnail.regular.large : thumbnail.trending.large
          })`,
        }}
      >
        <div className="flex flex-row justify-end relative z-10">
          <BookmarkCatalogItem />
        </div>
        {!isGrid && (
          <div className="relative z-0">
            <div>
              <p className="body-md opacity-75 mb-3 sm:mb-2 flex">
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
              <h2 className="heading-sm">{title}</h2>
            </div>
          </div>
        )}

        <div className="absolute group-hover:flex hidden justify-center items-center h-full w-full bg-black/50 left-0 top-0 z-5">
          <PlayMedia />
        </div>
      </div>
      {isGrid && (
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
      )}
    </>
  );
};

export default CatalogItem;
