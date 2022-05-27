import mongoose from "mongoose";
import config from './config.js'

/**
 * Creating a connecion to mongoDB Server
 * @returns A mongoDb connection Instance
 */
const connectToDB = async() => {

    try {
        const connect = await  mongoose.connect(config.mongoUri)
        console.info('mongo connected');
        return connect
    } catch (error) {
        console.info('mongo error', error);
        process.exit(1);
    }
}

/**
 * Remodel our Api Rates response to correspond to the data we need for rates Schema
 * @param {*} tickers 
 * @param {*} data 
 * @returns 
 */
const rapidApiRatesData = (tickers, data) => {
    let rates = []
    for (let ticker of tickers) {
        // console.log(ticker)
        
        for (let rate in data.rates) {
            if(rate === ticker) {
                rates.push({ ticker: rate, rate: data.rates[rate]})
                // console.log(rates)
                // console.log(data.rates[rate])
            }
        }
        
    }
    
    return rates;
}

/**
 * A genearic options for making rapid Api calls
 * @param {*} param0 
 * @returns 
 */
const rapidApiOptions = ({ method, endpoint, params }) => {
    return {
        method: method,
        url: `https://${config.rapidApiHost}/${endpoint}`,
        params: {output: 'JSON', ...params},
        headers: {
            'X-RapidAPI-Host': config.rapidApiHost,
            'X-RapidAPI-Key': config.rapidApiKey
        }
    };
}

/**
 * Remodel rates Api response fron CoinApi to the data we need for our schema
 * @param {*} tickers 
 * @param {*} data 
 * @returns 
 */
const coinApiRatesData = (tickers, data) => {
    const filtered = data.rates.filter((item) =>
        tickers.some(ticker => ticker === item.asset_id_quote)
    )

    const mapped = filtered.map((item) => {
        return {
            ticker: item.asset_id_quote,
            ...item
        }
    })

    return mapped;
}

/**
 * create the object type we need for out rates Schema
 * @param {*} data 
 * @param {*} rates 
 * @returns 
 */
const ratesSchemaData = (data, rates) => {
    const toDb = {};

    toDb['base'] = data.base ?? data.asset_id_base
    toDb['timeAt'] = data.updated ?? Date.now()
    toDb['rates'] = rates

    return toDb;
}

export {
    connectToDB,
    rapidApiRatesData,
    rapidApiOptions,
    coinApiRatesData,
    ratesSchemaData
} 