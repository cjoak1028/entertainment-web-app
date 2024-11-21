import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header.jsx";
import Home from "@/app/routes/Home.jsx";
import Movies from "@/app/routes/Movies.jsx";
import TVSeries from "@/app/routes/TVSeries.jsx";
import Bookmarks from "@/app/routes/Bookmarks.jsx";
import { getContents } from "@/features/catalog/api/get-contents.js";

function App() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      const contents = await getContents();
      setContents(contents);
    };

    fetchContents();
  }, []);

  return (
    <div className="flex flex-row bg-surface h-screen md:flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto custom-scroll-bar py-7 md:py-0 md:pb-4">
        <Routes>
          <Route path="/" element={<Home contents={contents} />} />
          <Route path="/movies" element={<Movies contents={contents} />} />
          <Route path="/tv" element={<TVSeries contents={contents} />} />
          <Route
            path="/bookmarks"
            element={<Bookmarks contents={contents} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
