import Exchange from "./components/Exchange";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import axios from 'axios';
import io from 'socket.io-client'
import { useEffect, useRef, useState } from "react";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/';


function App() {

  const [history, setHistory] = useState([])
  const [meta, setMeta] = useState({ lastPage: 1})
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const socket = useRef()

  // connect to out websocket and listen to update history 
  // when new data is added
  useEffect(() =>{
    socket.current = io(process.env.REACT_APP_SOCKET_URL || 'ws://localhost:5000')
    socket.current.on('updateData', data => {
      setHistory([data, ...history])
    })
  }, [history])

  // sets our success notification to flash for a few seconds
  useEffect(() => {
    let timer;
    if(success) {
      timer = setTimeout(() => {
         setSuccess(false) 
      }, 3000)
    }
    return () => clearTimeout(timer);
  }, [success])

  // gets our history of transactions, it add filters when they are set
  useEffect(() => {
    const getTransactions = async() => {
      setLoading(true)
        try {
            const { data }  = await axios.get(`/transaction?${filter && `${filter}&`}page=${page}`)
            setLoading(false)
            setHistory(data.data)
            setMeta(data.meta)
        } catch (error) {
            console.log(error)  
            setLoading(false)
        }
    }
    getTransactions()
  }, [page, filter])

  return (
    <div className="app">
      <div className="top">
        <Exchange socket={socket} setSuccess={setSuccess}/>
      </div>
      <div className="down">
        <h1>History</h1>
        <Filter setFilter={setFilter} setPage={setPage}/>
        <Table history={history} loading={loading}/>
        <Pagination meta={meta} setPage={setPage} />
      </div>
      {
        success && (
          <div className="feedback">
            Exchange submitted.
          </div>
        )
      }
    </div>
  );
}

export default App;
