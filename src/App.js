import logo from "./logo.svg";
import "./App.css";

import Search from "./Search";
import CurrentDay from "./CurrentDay";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentDay city="New York" temp="21" />
    </div>
  );
}

export default App;
