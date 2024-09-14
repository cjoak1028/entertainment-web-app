import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";

function App() {
  const [contentData, setContentData] = useState([]);

  //TODO: Create custom hook and handle all states
  useEffect(() => {
    async function fetchContentData(path) {
      try {
        const response = await fetch(path);

        if (!response.ok) {
          throw new Error(`Reponse status: ${response.status}`);
        }

        const data = await response.json();
        setContentData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContentData("/data.json");
  }, []);

  return (
    <div className="flex flex-row bg-surface h-screen md:flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto custom-scroll-bar py-7 md:py-0 md:pb-4">
        <Routes>
          <Route path="/" element={<Home contentData={contentData} />} />
          <Route
            path="/movies"
            element={<Movies contentData={contentData} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
