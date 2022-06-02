import React, { useEffect, useState } from 'react'
import { filters } from '../dummyData'
import Select from './Select'

const Filter = ({ setFilter, setPage }) => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [type, setType] = useState('')
    const [option, setOption] = useState(null)

    // Removes all empty object values
    const removeEmpty = (obj) => {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== ''));
    }

    // create query string to filter data from the database
    const handleSubmit = (e) => {
        e.preventDefault()
        const params = removeEmpty({ from, to, type })
        setFilter(new URLSearchParams((params)).toString())
        setPage(1)
    }

    // sets the selected option to a type value for the query string 
    useEffect(() => {
        if(option) {
            if(option.option.ticker === 'all') {
                setTo('')
                setFrom('')
            }
            setType(option.option.ticker)
        }
    }, [option])

  return (
    <div className="filter">
        <form onSubmit={handleSubmit}>
            <div className="formInput">
                <label htmlFor="">From date</label>
                <input type="date" placeholder='Select' onChange={e => setFrom(e.target.value)}/>
                {/* <Calender className="icon"/> */}
            </div>
            <div className="formInput">
                <label htmlFor="">To date</label>
                <input type="date" placeholder='Today' onChange={e => setTo(e.target.value)}/>
                {/* <Calender className="icon"/> */}
            </div>
            <Select title="Type" data={filters} setOption={setOption} id="type"/>
            <div className="formInput">
                <button type="submit">Filter</button>
            </div>
        </form>
    </div>
  )
}

export default Filter