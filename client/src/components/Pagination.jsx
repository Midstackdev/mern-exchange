import React from 'react'
import { ArrowLeft, ArrowRight } from '../assets/icons/svg';

const Pagination = ({ meta, setPage }) => {

    const handleClick = (page) => {
        setPage(page);
    }

    return (
    <div className="pagination">
        <nav aria-label="pagination">
            <ul className="pagination">
                <li className={`${meta.page === 1 && "hide"}`}>
                    <button onClick={() => handleClick(meta.page - 1)} disabled={meta.page === 1}>
                        <ArrowLeft/>
                        <span>Previous</span>
                    </button>
                </li>
                {
                    [...Array(meta.lastPage).keys()].map(a=>a+1).map((p, i) => (
                        <li key={i}>
                            <button className={`${meta.page === p && "active"}`} onClick={() => handleClick(p)}>{p}</button>
                        </li>
                    ))
                }
                {/* <li>
                    <button onClick={handleClick}>...</button>
                </li> */}
                <li className={`${meta.page === meta.lastPage && "hide"}`}>
                    <button onClick={() => handleClick(meta.page + 1)} disabled={meta.page === meta.lastPage}>
                        <span>Next</span>
                        <ArrowRight/>
                    </button>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Pagination