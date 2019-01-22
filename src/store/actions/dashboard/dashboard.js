import axios from "axios";
import { UPDATE_DASHBOARD_TABLE, UPDATE_DASHBOARD_CHART } from "../../types";

const rax = require("retry-axios");
const axiosRetry = axios.create();

axiosRetry.defaults = {
  raxConfig: {
    instance: axiosRetry,
    retryDelay: 5000,
  },
};
const interceptorId = rax.attach(axiosRetry);

const companiesSymbol = companies => {
  let symbol = [];
  companies.map((company, index) => {
    symbol.push(company.symbol);
  });
  return symbol;
};

export const fetchDashboard = companies => async dispatch => {
  companies.map(company => {
    dispatch(fetchAdditionalTableAndChart(company));
  });
};

//Fetches one data at a time
//Update both the table and chart simultaneoulsy
export const fetchAdditionalTableAndChart = company => async dispatch => {
  const symbol = company.symbol;
  const link = `/api/stock/quote?symbol="${symbol}"`;
  try {
    const response = await axiosRetry.get(link);
    console.log(response);
    if (response.data.status === "failed") {
      return setTimeout(() => {
        dispatch(fetchAdditionalTableAndChart(company));
      }, 60000);
    }
    const price = response.data.message["Global Quote"]["05. price"];
    const tableData = [
      company.name,
      response.data.message["Global Quote"]["04. low"],
      response.data.message["Global Quote"]["03. high"],
      response.data.message["Global Quote"]["10. change percent"],
      price,
    ];
    dispatch({
      type: UPDATE_DASHBOARD_TABLE,
      payload: tableData,
    });
    const priceInt = parseFloat(price) || 0;
    dispatch({
      type: UPDATE_DASHBOARD_CHART,
      payload: { company: company.name, price: priceInt },
    });
  } catch (error) {
    console.log(error);
  }
};

// export const updateChart = (company, price) => async dispatch => {
//   const symbols = companiesSymbol(companies);
//   console.log("From fetch Dashboard chart", symbols);
//   const symbolText = symbols
//     .map(symbol => {
//       // Wrap each element of the dates array with quotes
//       return '"' + symbol + '"';
//     })
//     .join(",");
//   console.log(symbolText);
//   try {
//     const res = await axios.get(`/api/stock/batch?symbols=[${symbolText}]`);
//     if (res.data.status === "failed") throw new Error();
//     const quote = res.data.message["Stock Quotes"];

//     //     How data should be arranged for stock
//     //  [ ["x", "dogs", "cats", "parrots"],
//     //    ["Date(2015-9-2)", 0, 0, 0] ]

//     let chartData = [];
//     //setting the company names
//     let companyNames = ["x"];
//     companies.map(company => companyNames.push(company.name));
//     //Till here we are just pushing the company name to chart Data array
//     chartData.push(companyNames);

//     //from here we are pushing actual stock data in the array
//     const chartStockData = [];
//     //at first pushing the date
//     const timestamp = quote[0]["4. timestamp"];
//     const time = timestamp.substr(timestamp.length - 8);
//     chartStockData.push(time);

//     //pushing the stock
//     quote.map(singleQuote => {
//       chartStockData.push(singleQuote["2. price"]);
//     });

//     chartData.push(chartStockData);

//     dispatch({
//       type: UPDATE_DASHBOARD_CHART,
//       payload: chartData,
//     });
//     console.log(chartData);
//   } catch (error) {
//     console.log(error);
//   }
// };
