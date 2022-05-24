import Exchange from "./components/Exchange";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Table from "./components/Table";



function App() {
  return (
    <div className="app">
      <div className="top">
        <Exchange/>
      </div>
      <div className="down">
        <h1>History</h1>
        <Filter/>
        <Table/>
        <Pagination/>
      </div>
      <div className="feedback">
        Exchange submitted.
      </div>
    </div>
  );
}

export default App;
