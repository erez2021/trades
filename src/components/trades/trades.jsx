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
  const [selectedTrades, setSelectedTrades] = useState([]);
  const [selectedTradeIndex, setSelectedTradeIndex] = useState(0);

  const images = [psagot, harel, more, tachlit, kesem];

  const tradesNames = trades.map((item) => item.stock);
  const tradesNamesToDisplay = [...new Set(tradesNames)];

  const selectStock = (event) => {
    const stockName = event.target.value;
    const tradeIndex = trades.findIndex((item) => item.stock == stockName);
    setSelectedTradeIndex(tradeIndex);
    const filteredTrades = trades.filter((item) => item.stock == stockName);
    console.log(filteredTrades);
    setSelectedTrades(filteredTrades);
  };

  const profitPercent = (
    <ul>
      {selectedTrades.map((trade) => (
        <div key={trade.tradeId}>
          {(100 * (trade.sell / trade.buy - 1)).toFixed(2)}%
        </div>
      ))}
    </ul>
  );

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
      <img src={images[selectedTradeIndex]} style={{ width: "60%" }} />

      <div className="profit">Profit: {profitPercent}</div>
    </div>
  );
};

export default Trades;
