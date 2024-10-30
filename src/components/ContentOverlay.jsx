import PlayButton from "/assets/icon-play.svg";

const ContentOverlay = () => {
  return (
    <div className="absolute group-hover:flex hidden justify-center items-center h-full w-full bg-black/50 left-0 top-0 z-5">
      <div className="rounded-full bg-on-container/25 flex items-center p-2 cursor-pointer w-28">
        <img src={PlayButton} alt="play button" />
        <p className="heading-xs text-on-containe w-3/4 text-center">Play</p>
      </div>
    </div>
  );
};

export default ContentOverlay;
