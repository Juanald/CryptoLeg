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
  console.log(name);

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
      <h2>
        {name} ({symbol})
      </h2>
      <p>Price: ${price}</p>
      <p>BTC Price: {btcPrice}</p>
      <p>Change: {change}%</p>
      <p>Market Cap: ${marketCap}</p>
      <p>4h Volume: {volume4h}</p>

      <div>
        <a href={coinrankingUrl} target="_blank" rel="noopener noreferrer">
          Coin Ranking
        </a>
      </div>
    </div>
  );
};

export default CoinComponent;
