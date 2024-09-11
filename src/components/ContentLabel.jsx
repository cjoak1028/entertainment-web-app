import MovieIcon from "/assets/icon-category-movie.svg";
import TvIcon from "/assets/icon-category-tv.svg";

const ContentLabel = ({ year, category, rating, title }) => {
  return (
    <div>
      <p className="body-md opacity-75 mb-3 sm:mb-2 flex">
        <span>{year}</span>
        <DotSeparator />
        <span className="flex items-center">
          <img
            className="inline-block mr-[0.375rem]"
            src={category === "Movie" ? MovieIcon : TvIcon}
          />
          {category}
        </span>
        <DotSeparator />
        <span>{rating}</span>
      </p>
      <h2 className="heading-sm">{title}</h2>
    </div>
  );
};

const DotSeparator = () => {
  return (
    <span className="w-[3px] h-[3px] bg-on-container/75 rounded-full mx-2 self-center"></span>
  );
};

export default ContentLabel;
