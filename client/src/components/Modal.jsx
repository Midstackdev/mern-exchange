import React, { useEffect, useState } from 'react'
import { Close } from '../assets/icons/svg'

const Modal = ({ data, setData }) => {
    const [open, setOpen] = useState(false);
    
    const close = () => {
        setOpen(false)
        setData(null)
    }

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
                <div className="value">08/11/2019 @ 14.21</div>
            </div>
            <div className="data">
                <div className="key">Status</div>
                <div className="value"><span className="status"></span> <span className="text">Approved</span></div>
            </div>
            <div className="data">
                <div className="key">From </div>
                <div className="value">Bitcoin</div>
            </div>
            <div className="data">
                <div className="key">To</div>
                <div className="value">USD</div>
            </div>
            <div className="data">
                <div className="key">Amount</div>
                <div className="value">$35.50  <span>BTC 0.000419169</span></div>
            </div>
            <div className="data">
                <div className="key">Total Amount</div>
                <div className="value">$37  <span>BTC 0.000419169</span></div>
            </div>
        </div>
        <div className="footer">
            <button type="button" onClick={() => close()}>Close</button>
        </div>
    </div>
  )
}

export default Modal