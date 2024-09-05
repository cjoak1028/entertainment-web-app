import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-row bg-surface h-screen md:flex-col">
      <Header />
      <main className="flex-1 py-16 md:pt-0 overflow-auto custom-scroll-bar">
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
