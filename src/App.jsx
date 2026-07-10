import "./App.css";
import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <div className="app">
      <div className="page">

        <Hero />

        <HomeContent />

      </div>
    </div>
  );
}

export default App;