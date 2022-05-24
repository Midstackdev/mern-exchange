import { Btc, Cad, Eth, Eur, Gbp, Ltc, Usd, Xrp } from "./assets/icons/svg";

export const crytos = [
    {
        ticker: 'BTC',
        name: 'Bitcoin',
        img: <Btc/>
    },
    {
        ticker: 'ETH',
        name: 'Ethereum',
        img: <Eth/>
    },
    {
        ticker: 'XRP',
        name: 'Ripple',
        img: <Xrp/>
    },
    {
        ticker: 'LTC',
        name: 'Litecoin',
        img: <Ltc/>
    },
]

export const fiats = [
    {
        ticker: 'USD',
        name: 'American Dollar',
        img: <Usd/>
    },
    {
        ticker: 'EUR',
        name: 'Euro',
        img: <Eur/>
    },
    {
        ticker: 'GBP',
        name: 'Pound sterling',
        img: <Gbp/>
    },
    {
        ticker: 'CAD',
        name: 'Canadian Dollar',
        img: <Cad/>
    },
]

export const filters = [
    {
        ticker: '1',
        name: 'All',
    },
    {
        ticker: '2',
        name: 'Live Price',
    },
    {
        ticker: '3',
        name: 'Exchanged',
    },
]
export const history = [
    {
        id: '1',
        date: '22/01/2022  20:55',
        currencyFrom: 'Bitcoin',
        amountFrom: '1',
        currencyTo: 'USD',
        amountTo: '48.000,00',
        type: 'Live Price'
    },
    {
        id: '2',
        date: '22/01/2022  15:45',
        currencyFrom: 'Bitcoin',
        amountFrom: '1',
        currencyTo: 'EUR',
        amountTo: '48.000,00',
        type: 'Exchanged'
    },
    {
        id: '3',
        date: '22/01/2022  12:35',
        currencyFrom: 'Bitcoin',
        amountFrom: '1',
        currencyTo: 'GBP',
        amountTo: '48.000,00',
        type: 'Exchanged'
    },
    {
        id: '4',
        date: '22/01/2022  09:25',
        currencyFrom: 'Ripple',
        amountFrom: '1',
        currencyTo: 'EUR',
        amountTo: '48.000,00',
        type: 'Live Price'
    },
    
]