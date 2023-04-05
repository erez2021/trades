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
          className={selectedPage == "trades" ? "selected" : "" + "span"}
          onClick={() => selectPage("trades")}
        >
          העסקאות שלי
        </span>
        <span
          className={selectedPage == "index" ? "selected" : "" + "span"}
          onClick={() => selectPage("index")}
        >
          ביצועי מדדים
        </span>
        <span
          className={selectedPage == "about" ? "selected" : "" + "span"}
          onClick={() => selectPage("about")}
        >
          אודות
        </span>
      </div>
    </div>
  );
};

export default Header;
