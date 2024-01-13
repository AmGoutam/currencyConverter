import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const URl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  useEffect(() => {
    fetch(URl)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.log(err));
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
