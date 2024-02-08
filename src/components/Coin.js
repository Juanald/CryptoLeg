import React from "react";

const CoinComponent = (props) => {
  const {
    name,
    symbol,
    price,
    btcPrice,
    change,
    marketCap,
    volume4h,
    iconUrl,
    coinrankingUrl,
    color,
  } = props.data;

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
      <p>Price: ${price}</p>
      <p>BTC Price: {btcPrice}</p>
      <p>Change: {change}%</p>
      <p>Market Cap: ${marketCap}</p>
      <p>4h Volume: {volume4h}</p>

      <div>
        <button
          style={{ backgroundColor: color }}
          className="text-white font-bold py-2 px-4 my-2 rounded crypto-button"
        >
          <a href={coinrankingUrl} target="_blank" rel="noopener noreferrer">
            Coin Ranking
          </a>
        </button>
      </div>
    </div>
  );
};

export default CoinComponent;
