import './App.css';
import SearchBar from "./SearchBar";
import {useState} from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []}); //java script object
  
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData = (item) => {
    let items = data['items'];
    item.id = items.length;  
    items.push(item);
    setData({items: items});
    console.log(data);
  }; //add item into the data


  return (
    <div className="container">
      <div className = "row mt-3"> <ItemsDisplay items = {data['items']}/>
      </div>
      <div className = "row mt-3"> <SearchBar updateSearchParams = {updateFilters}/>
      </div>
      <div className = "row mt-3"> <AddItem addItem = {addItemToData}/></div>
    </div>
  );
}


export default App;
