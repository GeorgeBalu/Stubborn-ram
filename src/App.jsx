import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <div className="page">
        <Hero />
      </div>
    </div>
  );
}

export default App;