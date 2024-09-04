import logo from "../assets/logo.svg";
import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import tvIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";

const Header = () => {
  return (
    <header className="p-8 h-screen min-h-[600px]">
      <div className="h-full w-24 bg-container rounded-[20px] flex flex-col items-center py-8 gap-[4.7rem]">
        <img src={logo} className="w-8" />
        <nav>
          <ul className="flex flex-col items-center gap-10">
            <li>
              <img src={homeIcon} />
            </li>
            <li>
              <img src={moviesIcon} />
            </li>
            <li>
              <img src={tvIcon} />
            </li>
            <li>
              <img src={bookmarkIcon} />
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex items-end">
          <img
            src={avatar}
            className="rounded-full w-10 h-10 border-solid border border-on-container"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
