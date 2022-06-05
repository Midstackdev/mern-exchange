import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from '../assets/icons/svg';

const Pagination = ({ meta, setPage }) => {
    const [section, setSection] = useState(0)
    const [sections, setSections] = useState(0)
    const [pages, setPages] = useState([])
    const [lastPage, setLastPage] = useState(0)
    const NUMBERS_PER_SECTION = 3

    const handleClick = (page) => {
        setPage(page);
    }
    
    const firstPageOfSection = (section) => {
        return (section - 1) * NUMBERS_PER_SECTION + 1
    }

    const goFowardASection = () => {
        handleClick(firstPageOfSection(section + 1))
    }
    
    const goBackASection = () => {
        handleClick(firstPageOfSection(section - 1))
    }

    useEffect(() => {
        const range = (start, end) => {
            let length = end - start + 1;
            return Array.from({ length }, (_, idx) => idx + start);
        };

        setSection(Math.ceil(meta?.page / NUMBERS_PER_SECTION))
    
    
        setSections(Math.ceil(meta?.lastPage / NUMBERS_PER_SECTION))

        setLastPage(() => {
            let lastPage = ((section - 1) * NUMBERS_PER_SECTION) + NUMBERS_PER_SECTION

            if(section === sections) {
                lastPage = meta.lastPage
            }
            return lastPage
        })
        
        setPages(range((section - 1) * NUMBERS_PER_SECTION + 1, lastPage))

    }, [meta?.page, meta?.lastPage, section, lastPage, sections])

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
                    section > 1 && (
                        <>
                            <li>
                                <button onClick={() => handleClick(1)}>1</button>
                            </li> 
                            <li>
                                <button onClick={goBackASection}>...</button>
                            </li>
                        </>
                    )
                }
                {
                    pages?.map((p, i) => (
                        <li key={i}>
                            <button className={`${meta.page === p && "active"}`} onClick={() => handleClick(p)}>{p}</button>
                        </li>
                    ))
                }
                {
                    section < sections && (
                        <>
                            <li>
                                <button onClick={goFowardASection}>...</button>
                            </li>
                            <li>
                                <button onClick={() => handleClick(meta.lastPage)}>{meta.lastPage}</button>
                            </li> 
                        </>
                    )
                }
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