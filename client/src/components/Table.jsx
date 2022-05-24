import React, { useState } from 'react'
import { SortDown, SortUp } from '../assets/icons/svg';
import { history } from '../dummyData'

const Table = () => {

    const [sorted, setSorted] = useState(false)

    const SortIcon = () => (
        <>
        { !sorted ? <SortDown/> : <SortUp/> }
        </>
    )

    const handleSort = () => {
        setSorted(!sorted)
    }
  return (
    <div className="table">
        <table>
            <thead>
                <tr>
                    <th><span onClick={handleSort}><SortIcon/></span> Date & Time</th>
                    <th><span onClick={handleSort}><SortIcon/></span> Currency From</th>
                    <th><span onClick={handleSort}><SortIcon/></span> Amount 1</th>
                    <th><span onClick={handleSort}><SortIcon/></span> Currency To</th>
                    <th><span onClick={handleSort}><SortIcon/></span> Amount 2</th>
                    <th><span onClick={handleSort}><SortIcon/></span> Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map(item => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.currencyFrom}</td>
                            <td>{item.amountFrom}</td>
                            <td>{item.currencyTo}</td>
                            <td>{item.amountTo}</td>
                            <td className={`type ${item.type !== 'Exchanged' ? "live" : ""}`}>{item.type}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table