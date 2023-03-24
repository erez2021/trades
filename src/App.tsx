import "./App.css";
import Trades from "./components/trades/trades";
import Header from "./components/header/header";
import About from "./components/about/about";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("trades");
  const setPage = (page: any) => {
    setSelectedPage(page);
  };

  return (
    <div className="App">
      <Header onSetPage={setPage} />
      {selectedPage == "about" && <About />}
      {selectedPage == "trades" && <Trades />}
    </div>
  );
}

export default App;
