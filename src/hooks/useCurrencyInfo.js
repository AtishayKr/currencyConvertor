import { useEffect } from "react";
import { useState } from "react";


function UseCurrencyInfo(currency) {
    
    const [data, setData] = useState({});
    const uri = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(()=>{
        fetch(uri)
        .then( (res) => res.json())
        .then((res) => setData(res[currency]));
    }, [currency])

    // console.log(data);
    return data;
}

export default UseCurrencyInfo;