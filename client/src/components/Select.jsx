import React, { useEffect, useRef, useState } from 'react'
import { CaratDown } from '../assets/icons/svg'

const Select = ({ title, data, setOption, id }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const menuRef     = useRef(null);
    const menuBtnRef  = useRef(null);
  
    const optionsList = data
  
    const toggleOptions = () => {
      setIsOptionsOpen(!isOptionsOpen);
    };

    const close = () => {
      setIsOptionsOpen(false);
    }

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
          close();
      }
    }
  
    const setSelectedThenCloseDropdown = (option) => {
      const find = optionsList.find(item => item.ticker === option.ticker)
      setSelectedOption(find);
      setIsOptionsOpen(false);
    };
  
    const handleKeyDown = (index) => (e) => {
      switch (e.key) {
        case " ":
        case "SpaceBar":
        case "Enter":
          e.preventDefault();
          setSelectedThenCloseDropdown(index);
          break;
        default:
          break;
      }
    };
  
    const handleListKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setIsOptionsOpen(false);
          break;
        // case "ArrowUp":
        //   e.preventDefault();
        //   setSelectedOption(
        //     selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        //   );
        //   break;
        // case "ArrowDown":
        //   e.preventDefault();
        //   setSelectedOption(
        //     selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        //   );
        //   break;
        default:
          break;
      }
    };

    const DefaultOption = ({ option }) => (
      <div className="default">
        { option && 
          <span className="picked">
            {option.image ? <>{option?.img} {option?.ticker}</> : <>{option?.img} {option?.name}</>}
          </span> 
        }
        {!option && <span>Select</span>}
        <CaratDown/>
      </div>
    )

    useEffect(() => {
     setOption({id:id, option: {...selectedOption}}) 
    }, [selectedOption, setOption, id])

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside, true);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside, true);
      }
    }, [])

  return (
    <div className="select">
        <span>{title}</span>
        <div className="wrapper">
            <button
            ref={menuBtnRef}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
            className={isOptionsOpen ? "expanded" : ""}
            onClick={toggleOptions}
            onKeyDown={handleListKeyDown}
            >
            {selectedOption === null ? <DefaultOption/> : <DefaultOption option={selectedOption} />}
            </button>
            <ul
                className={`options ${isOptionsOpen ? "show" : ""}`}
                role="listbox"
                aria-activedescendant={optionsList[selectedOption]}
                tabIndex={-1}
                onKeyDown={handleListKeyDown}
                ref={menuRef}
            >
                {optionsList.map((option, index) => (
                    <li
                      key={index}
                      id={option}
                      role="option"
                      aria-selected={selectedOption !== null}
                      tabIndex={0}
                      onKeyDown={handleKeyDown(index)}
                      onClick={() => {
                          setSelectedThenCloseDropdown(option);
                      }}
                    >
                      {
                        option.img ?
                        <><>{option?.img}</> <span>{option.ticker} - {option.name}</span></> :
                        <span>{option.name}</span>
                      }
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Select