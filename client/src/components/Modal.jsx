import React, { useEffect, useState } from 'react'
import { Close } from '../assets/icons/svg'

const Modal = ({ data, setData }) => {
    const [open, setOpen] = useState(false);
    
    // close modal and empty data
    const close = () => {
        setOpen(false)
        setData(null)
    }

    // if data is filled open modal
    useEffect(() => {
        if (data !== null) setOpen(true)

        // return () => {
        //     setData(null)
        // }
    }, [data, setData])

  return (
    <div className={`modal ${open ? "show" : ""}`}>
        <div className="header">
            <span>Exchange</span>
            <Close onClick={() => close()} />
        </div>
        <div className="body">
            <div className="data">
                <div className="key">Date & Time</div>
                <div className="value">{new Date(data?.createdAt).toLocaleString()}</div>
            </div>
            <div className="data">
                <div className="key">Status</div>
                <div className="value"><span className="status"></span> <span className="text">Approved</span></div>
            </div>
            <div className="data">
                <div className="key">From </div>
                <div className="value">{data?.currencyFrom}</div>
            </div>
            <div className="data">
                <div className="key">To</div>
                <div className="value">{data?.currencyTo}</div>
            </div>
            <div className="data">
                <div className="key">Amount</div>
                <div className="value">$35.50  <span>{data?.currencyFrom} 0.000419169</span></div>
            </div>
            <div className="data">
                <div className="key">Total Amount</div>
                <div className="value">$37  <span>{data?.currencyFrom} 0.000419169</span></div>
            </div>
        </div>
        <div className="footer">
            <button type="button" onClick={() => close()}>Close</button>
        </div>
    </div>
  )
}

export default Modal