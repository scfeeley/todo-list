import { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){
    if(!newItem){
      alert("Enter an item");
      return;
    }
    const item ={
      id:Math.floor(Math.random()*1000),
      value: newItem
    };
    
    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id){
    const newList = items.filter(item => item.id !== id);
    setItems(newList);
  }

  function clearList(){
    setItems([]);
  }

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <input type='text' placeholder='add item ...' value={newItem} 
      onChange={e => setNewItem(e.target.value)}/>
      <button onClick ={addItem}> + </button>
      <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>{item.value}<button onClick= {() => deleteItem(item.id)}> X </button></li>
        );

      })}
      </ul>
      <button onClick={clearList}>Clear</button>
</div>
  );
}

export default App;
