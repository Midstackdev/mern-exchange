import React from 'react'
import { ArrowLeft, ArrowRight } from '../assets/icons/svg';

const Pagination = () => {
    const handleClick = () => {
        console.log('The link was clicked.');
    }

    return (
    <div className="pagination">
        <nav aria-label="pagination">
            <ul className="pagination">
                <li>
                    <button onClick={handleClick}>
                        <ArrowLeft/>
                        <span>Previous</span>
                    </button>
                </li>
                <li>
                    <button className="active" onClick={handleClick}>1</button>
                </li>
                <li>
                    <button onClick={handleClick}>2</button>
                </li>
                <li>
                    <button onClick={handleClick}>3</button>
                </li>
                <li>
                    <button onClick={handleClick}>...</button>
                </li>
                <li>
                    <button onClick={handleClick}>15</button>
                </li>
                <li>
                    <button onClick={handleClick}>
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