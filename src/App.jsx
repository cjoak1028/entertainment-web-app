import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-row bg-surface h-screen md:flex-col">
      <Header />
      <main className="flex-1 py-8 overflow-auto custom-scroll-bar">
        <h1>main section</h1>
      </main>
    </div>
  );
}

export default App;
