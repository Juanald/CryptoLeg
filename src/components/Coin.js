import React from "react";
import { useNavigate } from "react-router-dom";

const CoinComponent = (props) => {
  const navigate = useNavigate();

  const {
    name,
    symbol,
    price,
    btcPrice,
    change,
    marketCap,
    iconUrl,
    coinrankingUrl,
    color,
  } = props.data;

  const handleGraph = () => {
    // Populate a graph component being handed the sparkline data, coin name, and analytics.
    // navigate("/graph", { state: { coinData: props.data } });
    navigate("/graph", {
      state: { sparkline: props.data.sparkline, name: name, color: color },
    });
  };

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <img
        src={iconUrl}
        alt={`${name} icon`}
        style={{ width: "50px", height: "50px" }}
      />
      <h2 className="font-bold">
        {name} ({symbol})
      </h2>
      <p>Price: ${Math.round(price * 100) / 100} USD</p>
      <p>BTC Price: {btcPrice}</p>
      <p>Change: {change}%</p>
      <p>Market Cap: ${marketCap.toLocaleString()}</p>

      <div className="">
        <button
          style={{ backgroundColor: color }}
          className="text-white font-bold py-2 px-4 my-2 rounded crypto-button active:scale-95"
        >
          <a href={coinrankingUrl} target="_blank" rel="noopener noreferrer">
            Coin Ranking
          </a>
        </button>
        <button
          style={{ backgroundColor: color }}
          className="block text-white font-bold py-2 px-4 my-2 rounded crypto-button active:scale-95"
          onClick={handleGraph}
        >
          Get a Real Time Graph
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default CoinComponent;
