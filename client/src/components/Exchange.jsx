import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { crytos, fiats } from '../dummyData'
import Select from './Select'

const Exchange = ({ socket, setSuccess }) => {
  const [amountFrom, setAmountFrom] = useState(0.00)
  const [amountTo, setAmountTo] = useState(0.00)
  const [currencyFrom, setCurrencyFrom] = useState('')
  const [currencyTo, setCurrencyTo] = useState('')
  const [type, setType] = useState('')
  const [option, setOption] = useState(null)
  const [rates, setRates] = useState([])

  const currencies = useMemo(() => {
    let all = [...crytos, ...fiats]
    if(currencyTo) {
      all = all.filter((item) => item.ticker !== currencyTo)
    }
    return all;
  }, [currencyTo]) 
  
  const filteredCurrencies = useMemo(() => {
    let filtered = currencies.filter((item) => item.ticker !== currencyFrom)
    return filtered;
  }, [currencies, currencyFrom]) 

  useEffect(() => {
    if(option && option?.id === 'currencyFrom') {
      setCurrencyFrom(option?.option?.ticker)
    }else {
      setCurrencyTo(option?.option?.ticker)
    }
  
    // return () => {
      
    // }
  }, [option])

  useEffect(() => {
    const getBaseRate = async() => {
      try {
        const { data } = await axios.get(`/rate/${currencyFrom}`)
        setRates(data.rates)
      } catch (error) {
        console.log(error)
      }
    }
    currencyFrom && getBaseRate()
  }, [currencyFrom])

  useEffect(() => {
    if(currencyFrom && amountFrom && currencyTo) {
      const chosen = rates.find(rate => rate.ticker === currencyTo)
      // console.log(chosen)
      setAmountTo(Math.floor((amountFrom * chosen.rate) * 10000) / 10000)
    }
  }, [currencyFrom, amountFrom, currencyTo, rates])

  useEffect(() => {
    if(crytos.some((item) => item.ticker === currencyFrom)) {
      setType('live')
    }else {
      setType('exchange')
    }
  }, [currencyFrom])

  const handleSubmit = async() => {
    if(!currencyFrom || !currencyTo || amountTo === 0) {
      alert('You must fill all input fields')
      return
    }
    const form = {
      currencyFrom,
      amountFrom,
      currencyTo,
      amountTo,
      type
    }
    try {
      const {data} = await axios.post(`/transaction/`, form)
      if(data) {
        socket.current.emit('sendData', data)
      }
      setSuccess(true)
      // console.log(data)
      setAmountFrom(0)
      setAmountTo(0)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="exchange">
        <h1>Exchange</h1>
        <div className="toolbar">
          <Select title="Currency from" data={currencies} setOption={setOption} id="currencyFrom"/>
          <div className="formInput">
            <label htmlFor="">Amount</label>
            <input type="number" placeholder='Enter the amount' value={amountFrom} onChange={e => setAmountFrom(e.target.value)}/>
          </div>
          <span className="equals">=</span>
          <Select title="Currency to" data={filteredCurrencies} setOption={setOption} id="currencyTo"/>
          <div className="formInput">
            <label htmlFor="">Amount</label>
            <input type="number" placeholder='Enter the amount' value={amountTo} onChange={e => setAmountTo(e.target.value)} disabled/>
          </div>
          <button type="button" className="save" onClick={handleSubmit}>Save</button>
        </div>
    </div>
  )
}

export default Exchange