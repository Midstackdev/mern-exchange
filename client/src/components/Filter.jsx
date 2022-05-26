import React from 'react'
import { Calender } from '../assets/icons/svg'
import { filters } from '../dummyData'
import Select from './Select'

const Filter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="filter">
        <form onSubmit={handleSubmit}>
            <div className="formInput">
                <label htmlFor="">From date</label>
                <input type="date" placeholder='Select' />
                {/* <Calender className="icon"/> */}
            </div>
            <div className="formInput">
                <label htmlFor="">To date</label>
                <input type="date" placeholder='Today' />
                {/* <Calender className="icon"/> */}
            </div>
            <Select title="Type" data={filters} />
            <div className="formInput">
                <button type="submit">Filter</button>
            </div>
        </form>
    </div>
  )
}

export default Filter