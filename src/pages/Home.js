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
  let coins = [];

  // Get the coin data
  async function getCoinData() {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      coins = data.data.coins;
      console.log(coins);
      setClicked(true);
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
            <Coin data={coinData}></Coin>;
          })
        : null}
    </>
  );
}
