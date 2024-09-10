const BookmarkButton = () => {
  return (
    <div className="bg-container/50 rounded-full w-8 h-8 flex justify-center items-center group hover:bg-on-container">
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          className="stroke-on-container group-hover:stroke-surface"
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BookmarkButton;
