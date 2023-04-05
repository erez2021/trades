import "./index.css";
import { useState } from "react";
import { INDEXES } from "../../services/indexService";
import bankim from "../../assets/images/bankim.png";
import telAviv from "../../assets/images/telAviv.png";

const Index = () => {
  const [indexes, setIndexes] = useState(INDEXES);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const indexesNames = indexes.map((item) => item.stock);
  const indexesNamesToDisplay = [...new Set(indexesNames)];

  const images = [telAviv, bankim];

  const selectStock = (event) => {
    const stockName = event.target.value;
    const tradeIdx = indexes.findIndex((item) => item.stock == stockName);
    setSelectedIndex(tradeIdx);
  };

  return (
    <div className="index">
      <p>:ביצועי מדדים מובילים בתקופה המקבילה</p>
      <div style={{ marginBottom: "40px" }}>
        <select onChange={selectStock} style={{ padding: "4px" }}>
          {indexesNamesToDisplay.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
          ;
        </select>
      </div>
      <img src={images[selectedIndex]} style={{ width: "50%" }} />

      <div className="profit">
        {" "}
        {indexes[selectedIndex].profit}% <span> :תשואה</span>
      </div>
    </div>
  );
};

export default Index;
