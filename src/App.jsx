import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "@/app/routes/HomePage.jsx";
import MoviesPage from "@/app/routes/MoviesPage.jsx";
import TVPage from "@/app/routes/TVPage.jsx";
import BookmarksPage from "@/app/routes/BookmarksPage.jsx";

function App() {
  return (
    <div className="flex flex-row bg-surface h-screen md:flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto custom-scroll-bar py-7 md:py-0 md:pb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv" element={<TVPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
