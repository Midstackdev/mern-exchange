import Exchange from "./components/Exchange";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import axios from 'axios';
import { useEffect, useState } from "react";

axios.defaults.baseURL = 'http://localhost:5000/api/';


function App() {

  const [history, setHistory] = useState([])
  const [meta, setMeta] = useState({ lastPage: 1})
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getTransactions = async() => {
        try {
            const { data }  = await axios.get(`/transaction?${filter && `${filter}&`}page=${page}`)
            setHistory(data.data)
            setMeta(data.meta)
        } catch (error) {
            console.log(error)  
        }
    }
    getTransactions()
  }, [page, filter])

  return (
    <div className="app">
      <div className="top">
        <Exchange/>
      </div>
      <div className="down">
        <h1>History</h1>
        <Filter setFilter={setFilter} setPage={setPage}/>
        <Table history={history} />
        <Pagination meta={meta} setPage={setPage} />
      </div>
      <div className="feedback">
        Exchange submitted.
      </div>
    </div>
  );
}

export default App;
