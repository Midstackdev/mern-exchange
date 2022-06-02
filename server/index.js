import axios from "axios";
import express from "express";
import cors from "cors";
import config, { aMinuteMicroseconds, coinApiKey, delayInMunites, port } from "./config/index.js";
import { tickers } from "./data.js";
import { coinApiRatesData, ratesSchemaData } from "./helpers.js";
import { update } from "./service/rates.service.js";
import { registerRoutes } from "./routes/index.js";
import errorMiddleware from "./middleware/error.middleware.js";
import connectToDB from "./config/database.js";
import './socket/index.js'

const MINIMUM_DELAY = aMinuteMicroseconds * delayInMunites;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// this function goes through our set of ticker to update our rates in the db
// we set a delay of 5 sec for every request because out subcrition has limited concurrent calls 
async function refreshRates() {
  const promises = tickers.map((ticker, ix) => (
    new Promise(resolve =>
      setTimeout(async() => {
        axios.get(`https://rest.coinapi.io/v1/exchangerate/${ticker}?invert=false`, {
          headers: {
            'X-CoinAPI-Key': coinApiKey
          }
        })
        .then(function (response) {
          // console.log(response.data);
          const data = response.data
          const toDb = ratesSchemaData(data, coinApiRatesData(tickers, data))
          update(ticker, toDb)
          // console.log('data to db---',toDb)
          console.log(`${ticker} rates has been updated`)
          resolve(data);
        }).catch(function (error) {
            console.error(error);
        });
      }, ix * 5000) // delay every next item 5sec
    )));

  const result = await Promise.all(promises); // wait all
  console.log(result);
}


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

registerRoutes(app)

connectToDB();

// we create this function to make api requests to update our rates with a delay of 10 mins
let intervalid 
async function runRatesRefresher() {
    intervalid = setInterval(() => {
      refreshRates()
         
    }, MINIMUM_DELAY)  
}
// you can use this function like
runRatesRefresher()
// or stop the setInterval in any place by 
clearInterval(intervalid)

app.use(errorMiddleware)

app.use((_req, res) => {
    res.status(404).json({
      message: 'Not found!, read the API documentation to find your way',
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
});