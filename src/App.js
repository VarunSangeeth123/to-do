import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Head from "./component/Head";

function App() {
  const [newitem, setNewItem] = useState("");
  const [list, addList] = useState(()=>JSON.parse((localStorage.getItem("todos")))|| []);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(list));
  },[list])

  function addItem() {
    let a = [...list];
    let ob = {
      name: newitem,
      check: false,
    };
    a.push(ob);
    addList(a);
  }

  function delItem(ind) {
    console.log(ind);
    let amd = list;
    amd.splice(ind, 1);
    addList([...amd]);
  }

  function check(val, ind) {
    console.log(val, ind);

    list[ind].check = val;

    addList([...list]);
  }

  return (
    <div className="App">

      
      <Head val={"Todo-List"}></Head>

      <input
      className="textbox"
        type="text"
        placeholder="Add List.."
        value={newitem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>

      <button className="btn" onClick={() => addItem()}>ADD</button>

      <ul className="abc">
        {list.map((el, i) => (
          <li key={i}>
            {!el.check ? el.name : <span className="str">{el.name}</span>}{" "}
            &nbsp;{" "}
            <input
              type="checkbox"
              onChange={(e) => check(e.target.checked, i)}
            ></input>{" "}
            &nbsp;{" "}
            <span className="link" onClick={() => delItem(i)}>
              del
            </span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
