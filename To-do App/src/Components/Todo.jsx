import React from "react";
import { useState } from "react";
import del from '../assets/delete.png';


function Todo() {
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState([]);

  let addItem = () => {
    let copyList = [...list];
    copyList.push(inputText);
    setList(copyList);
  };

  let handleInput = (e) => {
    setInputText(e.target.value);
  };

  let delItem = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  return (
    <div className="bg-white place-self-center w-4/5 max-w-md flex-col p-4 min-h-[550px] rounded-xl">
      <div className="flex items-center my-4 gap-2">
        <h1 className="text-3xl font-bold">To-do List</h1>
      </div>
      <div className="flex items-center mt-3 bg-gray-100 rounded-md flex-wrap">
        <input onChange={handleInput} type="text" className="bg-transparent border-0 outline-none flex-1 h-14 pl-4 placeholder:text-slate-600" placeholder="Add Task" />
        <button onClick={addItem} className="border-none rounded bg-orange-600 text-sm w-fit p-5 h-14 text-white font-medium cursor-pointer">Add Item</button>
      </div>
      <div>
        <ul>
          {list.map((data, index) => {
            return (
              <li key={index}>
                {data} <button onClick={delItem}><img src={del} alt="" width={'20px'} height={'20px'} /></button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
