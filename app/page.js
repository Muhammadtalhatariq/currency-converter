"use client";
import React, { useState } from "react";
import InputBox from "@/Components/InputBox";
import useCurrencyinfo from "@/Hooks/currencyconverterinfo";
const page = () => {
  const [amount, setamount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(From);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(From);
    setConvertAmount(amount);
    setamount(convertAmount);
  };

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <h1 className="text-white text-5xl font-bold">Currency Converter</h1>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 backdrop-blur-sm rounded-lg p-5  bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={From}
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {From.toUpperCase()} to {to.toLowerCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
