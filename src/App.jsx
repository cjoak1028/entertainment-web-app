import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "@/app/routes/Home.jsx";
import Movies from "@/app/routes/Movies.jsx";
import TVSeries from "@/app/routes/TVSeries.jsx";
import Bookmarks from "@/app/routes/Bookmarks.jsx";

function App() {
  return (
    <div className="flex flex-row bg-surface h-screen md:flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto custom-scroll-bar py-7 md:py-0 md:pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVSeries />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
