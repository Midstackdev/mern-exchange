import React, { useMemo, useState } from 'react'
import { SortDown, SortUp } from '../assets/icons/svg';
import Modal from './Modal';

const Table = ({ history, loading }) => {
    const [data, setData] = useState(null)
    const [sortConfig, setSortConfig] = useState({})
    
    // cache sorted data with memoize
    const sortedItems = useMemo(() => {
        let sortedData = [...history]

        if (sortConfig !== null) {
            sortedData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedData
    }, [history, sortConfig])

    // detrmine the sorted data direction to set direction icon
    const setIconDirection = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    }

    // set sort icon depending on sorted data direction
    const SortIcon = ({ name }) => (
        <>
        { setIconDirection(name) === 'ascending' ? <SortDown/> : <SortUp/> }
        </>
    )

    // detrmine sort key and direction for sortConfig to sort data
    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

  return (
    <>
    <div className="table">
        <table>
            <thead>
                <tr>
                    <th><span onClick={() => handleSort('createdAt')}><SortIcon name="createdAt"/></span> Date & Time</th>
                    <th><span onClick={() => handleSort('currencyFrom')}><SortIcon name="currencyFrom"/></span> Currency From</th>
                    <th><span onClick={() => handleSort('amountFrom')}><SortIcon name="amountFrom"/></span> Amount 1</th>
                    <th><span onClick={() => handleSort('currencyTo')}><SortIcon name="currencyTo"/></span> Currency To</th>
                    <th><span onClick={() => handleSort('amountTo')}><SortIcon name="amountTo"/></span> Amount 2</th>
                    <th><span onClick={() => handleSort('type')}><SortIcon name="type"/></span> Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedItems.length > 0 && sortedItems.map(item => (
                        <tr key={item._id}>
                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                            <td>{item.currencyFrom}</td>
                            <td>{item.amountFrom}</td>
                            <td>{item.currencyTo}</td>
                            <td>{item.amountTo}</td>
                            <td className={`type ${item.type !== 'exchange' ? "live" : ""}`}>{item.type === 'exchange' ? 'Exchanged' : 'Live Price'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {
            sortedItems.length === 0 && loading && (
                <div className="nodata"> Loading...</div>
            )
        }
        {
            sortedItems.length === 0 && !loading &&(
                <div className="nodata"> There is no data for this query</div>
            )
        }
    </div>
    <div className="transactions">
        {
            history.map(item => (
                <div className="item" key={item._id} onClick={() => setData(item)}>
                    <div className="currency">
                        <div className="">
                            {item.currencyFrom} &#x2192; {item.currencyTo}
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="amount">
                        Amount {item.currencyFrom} {item.amountFrom}
                    </div>
                </div>
            ))
        }
    </div>
    <Modal data={data} setData={setData}/>
    </>
  )
}

export default Table