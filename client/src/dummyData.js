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