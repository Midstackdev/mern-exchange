import Exchange from "./components/Exchange";
import Filter from "./components/Filter";
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
      </div>
    </div>
  );
}

export default App;
