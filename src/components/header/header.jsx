import { useState } from "react";
const Header = (props) => {
  const [selectedPage, setSelectedPage] = useState("trades");
  const selectPage = (page) => {
    setSelectedPage(page);
    props.onSetPage(page);
  };

  return (
    <div className="flex header">
      <div className="full-width">
        <span
          className={selectedPage == "trades" ? "selected" : ""}
          onClick={() => selectPage("trades")}
        >
          Trades
        </span>
        <span
          className={selectedPage == "about" ? "selected" : ""}
          onClick={() => selectPage("about")}
        >
          About
        </span>
      </div>
    </div>
  );
};

export default Header;
