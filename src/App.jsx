import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TrendingContent from "./components/TrendingContent";

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
      <main className="flex-1 py-16 md:pt-0 overflow-auto custom-scroll-bar">
        <SearchBar />
        <TrendingContent contentData={contentData} />
      </main>
    </div>
  );
}

export default App;
