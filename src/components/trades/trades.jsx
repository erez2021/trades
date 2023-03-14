import { useState } from "react";
import { TRADES } from "../../services/tradeService";
import harel from "../../assets/images/harel.png";
import more from "../../assets/images/more.png";
import kesem from "../../assets/images/kesem.png";
import psagot from "../../assets/images/psagot.png";
import tachlit from "../../assets/images/tachlit.png";

const images = { harel: harel, more, kesem, psagot, tachlit };
const Trades = () => {
  const [trades, setTrades] = useState(TRADES);
  const [selectedTradeIndex, setSelectedTradeIndex] = useState(0);

  const images = [psagot, harel, more, tachlit, kesem];

  const tradesNames = trades.map((item) => item.stock);
  const tradesNamesToDisplay = [...new Set(tradesNames)];

  const selectStock = (event) => {
    const stockName = event.target.value;
    const tradeIndex = trades.findIndex((item) => item.stock == stockName);
    console.log(tradeIndex);
    setSelectedTradeIndex(tradeIndex);
  };

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <select onChange={selectStock} style={{ padding: "4px" }}>
          {tradesNamesToDisplay.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
          ;
        </select>
      </div>
      <div>
        <img src={images[selectedTradeIndex]} style={{ width: "50%" }} />
      </div>
    </div>
  );
};

export default Trades;
