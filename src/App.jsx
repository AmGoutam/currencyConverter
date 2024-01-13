import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [from, setForm] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(Number(0));
  const [convertedAmount, setConvertedAmount] = useState(null);

  const data = useCurrencyInfo(from);
  const options = Object.keys(data);
  // convert Currency
  const convert = () => {
    if (amount === 0) {
      alert("Please fill amount");
      console.log(amount === 0);
    } else {
      setConvertedAmount(amount * data[to]);
    }
  };
  // Swap
  const swap = () => {
    console.log("click");
    setForm(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <>
      <div className="h-screen bg-slate-800 flex justify-center items-center font-mono">
        <div className="bg-white w-1/3 shadow p-2 p-">
          <h1 className="text-center text-3xl">Currency Converter</h1>
          <div className="flex gap-4 flex-col">
            <div>
              <label
                htmlFor=""
                className="block font-medium leading-6 text-gray-900 text-xl"
              >
                Form
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Amount"
                  value={amount === 0 ? "" : amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    value={from}
                    onChange={(e) => setForm(e.target.value)}
                  >
                    {options.map((element) => (
                      <option key={element} value={element}>
                        {element}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-blue-400 text-white py-1 px-4"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div>
              <label
                htmlFor=""
                className="block font-medium leading-6 text-gray-900 text-xl"
              >
                To
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Amount"
                  disabled={true}
                  value={convertedAmount === 0 ? "" : convertedAmount}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    {options.map((element) => (
                      <option key={element} value={element}>
                        {element}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center text-2xl">
            <button
              className="text-white py-2 bg-blue-400 w-full h-full"
              onClick={convert}
            >
              Convert
            </button>
          </div>
          <div className="mt-5 text-center text-2xl text-white py-2 bg-blue-400 w-full h-full">
            <p>
              {amount === 0 ? "" : amount} {from} = {convertedAmount} {to}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
