import axios from "axios";
import express from "express";
import cors from "cors";
import config, { coinApiKey, port } from "./config.js";
import { coinApi, data, tickers } from "./data.js";
import { coinApiRatesData, connectToDB, rapidApiOptions, rapidApiRatesData, ratesSchemaData } from "./helpers.js";
import { create } from "./service/rates.service.js";
import { registerRoutes } from "./routes/index.js";
import errorMiddleware from "./middleware/error.middleware.js";

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
//         'X-CoinAPI-Key': coinApiKey
//     }
// })
// .then(function (response) {
//     // console.log(response.data);
//     const data = response.data
//     const toDb = ratesSchemaData(data, coinApiRatesData(tickers, data))
//     create(toDb)
//     // console.log('data to db---',toDb)
// }).catch(function (error) {
//     console.error(error);
// });




app.get('/', (req, res) => {
    res.json({
      message: 'Hello World',
    });
});

registerRoutes(app)

connectToDB();

app.use(errorMiddleware)

app.use((_req, res) => {
    res.status(404).json({
      message: 'Not found!, read the API documentation to find your way',
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
});