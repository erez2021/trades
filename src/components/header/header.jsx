import { useState } from "react";
import { SECTIONS } from "../../services/navigationService";
const Header = (props) => {
  const [selectedPage, setSelectedPage] = useState("trades");
  const selectPage = (page) => {
    setSelectedPage(page);
    props.onSetPage(page);
  };

  return (
    <div className="flex header">
      <div className="full-width">
        {SECTIONS.map((item) => (
          <span
            key={item.title}
            className={
              selectedPage == item.selectedPage ? "selected" : "" + "span"
            }
            onClick={() => selectPage(item.selectedPage)}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
