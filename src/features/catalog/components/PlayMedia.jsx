import PlayIcon from "../assets/icon-play.svg";

const PlayMedia = () => {
  return (
    <button className="rounded-full bg-on-container/25 flex items-center p-2 cursor-pointer w-28">
      <img src={PlayIcon} alt="play button" />
      <p className="heading-xs text-on-containe w-3/4 text-center">Play</p>
    </button>
  );
};

export default PlayMedia;
