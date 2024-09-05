import searchIcon from "../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div
      className={
        "bg-surface-container flex flex-row items-center gap-6 pr-9 md:px-6 sm:px-4 sm:py-6 sm:gap-4"
      }
    >
      <button>
        <img
          className="sm:w-6"
          src={searchIcon}
          alt="icon depicting a magnifying glass"
        />
      </button>
      <input
        className="flex-1 w-full outline-none bg-surface heading-md placeholder:text-on-surface/50 caret-primary py-[0.875rem] sm:py-2 focus:border-b border-outline"
        type="text"
        placeholder={"Search for movies or TV series"}
      />
    </div>
  );
};

export default SearchBar;
