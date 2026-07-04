import "./App.css";

import LaunchScreen from "./components/LaunchScreen";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <LaunchScreen />

      <div className="app">
        <div className="page">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;