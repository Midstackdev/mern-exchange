import axios from "axios";
import express from "express";
import cors from "cors";
import config, { port } from "./config.js";
import { coinApi, data, tickers } from "./data.js";
import { coinApiRatesData, connectToDB, rapidApiOptions, rapidApiRatesData, ratesSchemaData } from "./helpers.js";

const MINIMUM_DELAY = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// const options = rapidApiOptions({ method: 'GET', endpoint: 'rates', params: { base: 'USD'} })
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

// axios.get('https://rest.coinapi.io/v1/exchangerate/BTC?invert=false', {
//     headers: {
//         'X-CoinAPI-Key': 'B0908FDF-F270-468F-A9B4-A4851866B6AC'
//     }
// })
// .then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });


// const toDb = ratesSchemaData(coinApi, coinApiRatesData(tickers, coinApi))
const toDb = ratesSchemaData(coinApi, rapidApiRatesData(tickers, data))
console.log(toDb)

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World',
    });
});

connectToDB();

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
});