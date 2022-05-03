
import { useState } from 'react';
import './App.css';
import PagePne from './PagePne';
import PageTwo from './PageTwo';

const arr = [
  {
    id: 1,
    name: 'Asan',
    age: 23,
    city: 'Bishkek',
  },
  {
    id: 2,
    name: 'Uson',
    age: 29,
    city: 'Osh',
  },
  {
    id: 3,
    name: 'Aibek',
    age: 34,
    city: 'Talas',
  },
]


function App() {

  const [array, setArray] = useState(arr)
 
  function DeleteHandler(s){
    const newArray = array.filter((elem)=>{
      if(elem.id !== s){
        console.log(elem);
        return elem
      }
    })
    setArray(newArray)
  }

  function addHandler(obj){
    console.log(obj);
    setArray(prev=>[...prev, obj])
  }
  function inpData(data){
    console.log(data);
    setArray(prev=>[...prev,data])
  }

  return (
    <div className="App">
      <div>
          <PageTwo onInpData={inpData}/>
      </div>
      {array.map((el)=>{
        return (
          <PagePne onDeleteHandler={DeleteHandler}
            onAddHandler={addHandler}
           id={el.id} key={el.id} name={el.name} age={el.age} city={el.city} />
        )
      })}
    </div>
  );
}

export default App;
