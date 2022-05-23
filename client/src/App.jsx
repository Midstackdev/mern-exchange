import Exchange from "./components/Exchange";
import Filter from "./components/Filter";



function App() {
  return (
    <div className="app">
      <div className="top">
        <Exchange/>
      </div>
      <div className="down">
        <h1>History</h1>
        <Filter/>
      </div>
    </div>
  );
}

export default App;
