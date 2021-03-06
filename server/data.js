export const data = {
  valid: true,
  updated: 1653602404,
  base: 'USD',
  rates: {
    AED: 3.6732,
    AFN: 88.505,
    ALL: 112.5555,
    AMD: 447.1925,
    ANG: 1.80322,
    AOA: 419.66778,
    ARS: 119.44387,
    AUD: 1.40927,
    AWG: 1.8,
    AZN: 1.7,
    BAM: 1.82556,
    BBD: 2.02023,
    BCH: 0.005446178144487106,
    BDT: 87.99296,
    BGN: 1.82494,
    BHD: 0.37702,
    BIF: 2017.1,
    BMD: 1,
    BND: 1.37444,
    BOB: 6.88871,
    BRL: 4.77064,
    BSD: 1.00051,
    BTC: 0.000033936428923882626,
    BTG: 0.0474158368895211,
    BWP: 12.06941,
    BZD: 2.01679,
    CAD: 1.27692,
    CDF: 2005.6,
    CHF: 0.95868,
    CLP: 825.53,
    CNH: 6.76711,
    CNY: 6.7611,
    COP: 3923.716,
    CRC: 673.47337,
    CUC: 1,
    CUP: 25.75,
    CVE: 103.305,
    CZK: 23.01645,
    DASH: 0.017088174982911822,
    DJF: 177.729,
    DKK: 6.9318,
    DOP: 55.253,
    DZD: 145.5243,
    EGP: 18.60303,
    EOS: 0.8051529790660226,
    ETB: 51.5425,
    ETH: 0.0005460154522372983,
    EUR: 0.93199,
    FJD: 2.15491,
    GBP: 0.79331,
    GEL: 2.84,
    GHS: 7.7505,
    GIP: 0.79331,
    GMD: 54.0525,
    GNF: 8830.45,
    GTQ: 7.67719,
    GYD: 209.33177,
    HKD: 7.8491,
    HNL: 24.511,
    HRK: 7.02195,
    HTG: 112.56103,
    HUF: 364.29,
    IDR: 14610.83,
    ILS: 3.349,
    INR: 77.528,
    IQD: 1460.05,
    IRR: 42302.1,
    ISK: 128.6765,
    JMD: 154.69384,
    JOD: 0.70905,
    JPY: 127.098,
    KES: 116.68085,
    KGS: 79.505,
    KHR: 4060.2,
    KMF: 445.8973,
    KRW: 1260.303,
    KWD: 0.30581,
    KYD: 0.8338,
    KZT: 425.18066,
    LAK: 13060.65,
    LBP: 1515.40375,
    LKR: 360.17931,
    LRD: 152,
    LSL: 15.761,
    LTC: 0.015543638765835083,
    LYD: 4.77525,
    MAD: 9.88999,
    MDL: 19.06041,
    MKD: 57.51121,
    MMK: 1852.4225,
    MOP: 8.08901,
    MUR: 43.10633,
    MVR: 15.43575,
    MWK: 816.54,
    MXN: 19.7639,
    MYR: 4.3982,
    MZN: 63.833,
    NAD: 15.751,
    NGN: 415.241,
    NIO: 35.762,
    NOK: 9.5372,
    NPR: 124.14711,
    NZD: 1.54339,
    OMR: 0.38509,
    PAB: 1.00051,
    PEN: 3.66,
    PGK: 3.5152,
    PHP: 52.405,
    PKR: 202.51,
    PLN: 4.2901,
    PYG: 6850.90955,
    QAR: 3.6412,
    RON: 4.60593,
    RSD: 109.5555,
    RUB: 64.55,
    RWF: 1026.05,
    SAR: 3.75067,
    SBD: 8.12393,
    SCR: 13.56209,
    SDG: 455.525,
    SEK: 9.8552,
    SGD: 1.37271,
    SLL: 12815.65,
    SOS: 583.05,
    SRD: 21.02455,
    SVC: 8.75432,
    SZL: 15.751,
    THB: 34.2347,
    TJS: 12.43042,
    TMT: 3.51,
    TND: 3.04165,
    TOP: 2.31157,
    TRY: 16.3197,
    TTD: 6.78651,
    TWD: 29.37045,
    TZS: 2327.1,
    UAH: 29.41598,
    UGX: 3696.99585,
    USD: 1,
    UYU: 40.04624,
    UZS: 11050.55,
    VND: 23211.15,
    XAF: 612.23351,
    XAG: 0.04540501271340356,
    XAU: 0.0005403842672524431,
    XCD: 2.70269,
    XLM: 8.00640512409928,
    XOF: 613.53,
    XRP: 2.1715526601520088,
    YER: 250.2625,
    ZAR: 15.6967,
    ZMW: 17.2094
  }
}

export const tickers = ['BTC', 'ETH', 'LTC', 'XRP', 'USD', 'EUR', 'GBP', 'CAD'];

const toDb = {
    base: "USD",
    rates: [
        {
            ticker: "USD",
            rate: 1
        },
        {
            ticker: "BTC",
            rate: 1
        }
    ],
    timeAt:1609256822
}

export const coinApi = {
    asset_id_base: 'BTC',
    rates: [
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '$ADS',
        rate: 191002.6496072562
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '$ANRX',
        rate: 2800448.631227199
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '$CINU',
        rate: 12456443536540890000
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '$PAC',
        rate: 33251679.584122393
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '0X',
        rate: 77913.92237098252
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '100X',
        rate: 29720847342156.63
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: 'ETH',
        rate: 9970.711924839461
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '18C',
        rate: 12180182.310182149
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '1EARTH',
        rate: 3421013.7851120145
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: 'CAD',
        rate: 7131.108991082463
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '1GOLD',
        rate: 419.81522207709196
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '1INCH',
        rate: 32158.298129733063
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: 'LTC',
        rate: 100361501.03275368
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: '1INCH3S',
        rate: 2461.760875065543
      },
      {
        time: '2022-05-27T02:24:44.2000000Z',
        asset_id_quote: 'EUR',
        rate: 9704.288574665774
      },
    ]
}

// console.log('no-keys---', Object.assign({}, tickers))

// console.log('with keys----', tickers.reduce((a, v) => ({...a, [v]:v}), {}))

// const toDb = ratesSchemaData(data, rapidApiRatesData(tickers, data))
// console.log(toDb)

// const options = rapidApiOptions({ method: 'GET', endpoint: 'rates', params: { base: 'USD'} })
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

// const getRateAndUpdate = async() => {
//   await Promise.all(
//     tickers.map((ticker) => {
//       axios.get(`https://rest.coinapi.io/v1/exchangerate/${ticker}?invert=false`, {
//         headers: {
//           'X-CoinAPI-Key': coinApiKey
//         }
//       })
//       .then(function (response) {
//         // console.log(response.data);
//         const data = response.data
//         const toDb = ratesSchemaData(data, coinApiRatesData(tickers, data))
//         update(ticker, toDb)
//         // console.log('data to db---',toDb)
//         console.log(ticker)
//       }).catch(function (error) {
//           console.error(error);
//       });
//     })
//   )
// }

// await getRateAndUpdate()