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
      setClicked(true);
      setCoins(data.data.coins);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <button
          class="m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded active:scale-95"
          onClick={getCoinData}
        >
          Get Crypto Data
        </button>
      </div>
      <div className="flex flex-wrap flex-col justify-center">
        {clicked
          ? coins.map((coinData) => {
              return <Coin data={coinData}></Coin>; // YOU HAVE TO RETURN IT!!!
            })
          : null}
      </div>
    </>
  );
}
