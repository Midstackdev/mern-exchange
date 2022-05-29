import React, { useState } from 'react'
import { crytos, fiats } from '../dummyData'
import Select from './Select'

const Exchange = () => {
  const [option, setOption] = useState(null)
  
  return (
    <div className="exchange">
        <h1>Exchange</h1>
        <div className="toolbar">
          <Select title="Currency from" data={crytos} setOption={setOption} name="type"/>
          <div className="formInput">
            <label htmlFor="">Amount</label>
            <input type="text" placeholder='Enter the amount' />
          </div>
          <span className="equals">=</span>
          <Select title="Currency to" data={fiats} setOption={setOption} name="type"/>
          <div className="formInput">
            <label htmlFor="">Amount</label>
            <input type="text" placeholder='Enter the amount' />
          </div>
          <button className="save">Save</button>
        </div>
    </div>
  )
}

export default Exchange