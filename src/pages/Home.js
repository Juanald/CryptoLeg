import React from "react";
import { useState } from "react";
import Coin from "../components/Coin";

const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bcc09af50amsh3ee7c05739dce7cp1aa2fcjsn7bf6d66f82d6",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [coins, setCoins] = useState();

  // Get the coin data
  async function getCoinData() {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(coins);
      setClicked(true);
      setCoins(data.data.coins);
      //   coins = coins.map((coinData, index) => {
      //     <Coin key={index} data={coinData}></Coin>;
      //   });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button onClick={getCoinData} id="api-button">
        Get Latest Crypto Data Here
      </button>
      {clicked
        ? coins.map((coinData) => {
            return <Coin data={coinData}></Coin>; // YOU HAVE TO RETURN IT!!!
          })
        : null}
    </>
  );
}
