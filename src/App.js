import { useState } from "react";

import "./App.css";

import Search from "./components/Search";
import DigimonList from "./components/DigimonList";

function App() {
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <div className="divContainer">
        <Search setError={setError} />
        <DigimonList error={error} />
      </div>
    </div>
  );
}

export default App;
