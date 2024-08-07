import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const amountNumber = Number(amount);
    if (!isNaN(amountNumber) && currencyInfo[to]) {
      setConvertedAmount(amountNumber * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, swap]);

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onAmountChange={(amount) => setTo(amount)}
                selectCurrency={to}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                amountDisable
              />
            </div>
            <div
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Converted {from.toUpperCase()} to {to.toUpperCase()}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
