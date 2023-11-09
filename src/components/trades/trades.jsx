import "./trades.css";
import { useState } from "react";
import { TRADES } from "../../services/tradeService";
import harel from "../../assets/images/harel.png";
import morenew from "../../assets/images/morenew.png";
import kesem from "../../assets/images/kesem.png";
import psagot from "../../assets/images/psagot.png";
import tachlit from "../../assets/images/tachlit.png";
import kesem125 from "../../assets/images/kesem125.png";
import kesemBankim from "../../assets/images/kesemBankim.png";

const Trades = () => {
  const [trades, setTrades] = useState(TRADES);
  const [selectedTrades, setSelectedTrades] = useState([TRADES[0]]);
  const [selectedTradeIndex, setSelectedTradeIndex] = useState(0);

  const images = [
    psagot,
    morenew,
    morenew,
    tachlit,
    harel,
    kesem,
    kesem,
    kesem,
    kesem125,
    kesemBankim,
    kesemBankim,
  ];

  const tradesNames = trades.map((item) => item.stock);
  const tradesNamesToDisplay = [...new Set(tradesNames)];

  const selectStock = (event) => {
    const stockName = event.target.value;
    const tradeIndex = trades.findIndex((item) => item.stock == stockName);
    setSelectedTradeIndex(tradeIndex);
    const filteredTrades = trades.filter((item) => item.stock == stockName);
    setSelectedTrades(filteredTrades);
  };

  const profitPercent = (
    <span style={{ marginRight: "unset" }}>
      {selectedTrades.map((trade) => (
        <span key={trade.tradeId}>
          {(100 * (trade.sell / trade.buy - 1)).toFixed(2)}%
        </span>
      ))}
    </span>
  );

  return (
    <div className="trades">
      <p>:עסקאות שביצעתי בחודשים האחרונים</p>
      <div style={{ marginBottom: "40px" }}>
        <select
          onChange={selectStock}
          style={{ padding: "6px", fontSize: "18px" }}
        >
          {tradesNamesToDisplay.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
          ;
        </select>
      </div>
      <img
        src={images[selectedTradeIndex]}
        style={{
          width: images[selectedTradeIndex] == kesem125 ? "45%" : "50%",
        }}
      />

      <div className="profit"> תשואה:{profitPercent}</div>
    </div>
  );
};

export default Trades;
