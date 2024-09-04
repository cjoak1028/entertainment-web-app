import logo from "../assets/logo.svg";
import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import tvIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";

const Header = () => {
  return (
    <header className="p-8 h-screen min-h-[37.5rem] md:p-6 md:h-fit md:min-h-0 sm:p-0">
      <div className="h-full w-24 bg-container rounded-[20px] flex flex-col items-center py-8 gap-[4.7rem] md:flex-row md:h-fit md:w-full md:p-5 md:justify-between md:gap-0 sm:p-4">
        <img src={logo} className="w-8 sm:w-6" />
        <nav>
          <ul className="flex flex-col items-center gap-10 md:flex-row md:gap-8 sm:gap-6">
            <li>
              <img src={homeIcon} className="h-5 sm:h-4" />
            </li>
            <li>
              <img src={moviesIcon} className="h-5 sm:h-4" />
            </li>
            <li>
              <img src={tvIcon} className="h-5 sm:h-4" />
            </li>
            <li>
              <img src={bookmarkIcon} className="h-5 sm:h-4" />
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex items-end md:flex-none">
          <img
            src={avatar}
            className="rounded-full w-10 h-10 border-solid border border-on-container md:w-8 md:h-8 sm:w-6 sm:h-6"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
