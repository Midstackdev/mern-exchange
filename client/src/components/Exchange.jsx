import React from 'react'
import { crytos, fiats } from '../dummyData'
import Select from './Select'

const Exchange = () => {
  return (
    <div className="exchange">
        <h1>Exchange</h1>
        <div className="toolbar">
          <Select title="Currency from" data={crytos} />
          <div className="formInput">
            <label htmlFor="">Amount</label>
            <input type="text" placeholder='1' />
          </div>
          <span className="equals">=</span>
          <Select title="Currency to" data={fiats} />
          <div className="formInput">
            <label htmlFor="">Amount</label>
            <input type="text" placeholder='1' />
          </div>
          <button className="save">Save</button>
        </div>
    </div>
  )
}

export default Exchange