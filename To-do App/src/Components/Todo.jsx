import { useState } from 'react';
import '../index.css';

function Todo() {
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState([]);
  let [editIndex, setEditIndex] = useState(null); 
  let [editText, setEditText] = useState("");

  let addItem = () => {
    if (inputText.trim()) {
      let copyList = [...list];
      copyList.push(inputText);
      setList(copyList);
      setInputText(""); 
    }
  };

  let handleInput = (e) => {
    setInputText(e.target.value);
  };

  let delItem = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
 
    if (editIndex === index) {
      setEditIndex(null);
      setEditText("");
    }
  };

  let startEditing = (index) => {
    setEditIndex(index);
    setEditText(list[index]);
  };

  let handleEditInput = (e) => {
    setEditText(e.target.value);
  };

  let saveEdit = () => {
    if (editText.trim()) {
      let copyList = [...list];
      copyList[editIndex] = editText;
      setList(copyList);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <div className={'h-screen w-full bg-gray-800 text-gray-800 flex items-center justify-center'}>
      <div className={'p-6 rounded-lg max-w-md w-full bg-gray-100'}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-center">Todo App</h1>
        </div>
        <div className="flex mb-4 gap-2">
          <input
            value={inputText}
            onChange={handleInput}
            type="text"
            className={'p-2 w-full rounded-lg border border-gray-300 bg-white text-black'}
            placeholder="Enter new item"
          />
          <button
            onClick={addItem}
            className={'p-2 w-max rounded-lg text-white bg-orange-600'}
          >
            Add
          </button>
        </div>
        <ul>
          {list.map((data, index) => (
            <li key={index} className={'flex justify-between items-center mb-2 p-2 rounded-lg bg-gray-200'}>
              {editIndex === index ? (
                <>
                  <input
                    value={editText}
                    onChange={handleEditInput}
                    type="text"
                    className={'p-2 rounded-lg border border-gray-300 bg-white text-black'}
                  />
                  <button
                    onClick={saveEdit}
                    className={'px-2 py-1 rounded-lg text-white bg-orange-600 focus:outline-none focus:ring-2 focus:ring-green-500'}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    className={'px-2 py-1 rounded-lg text-white bg-orange-600 focus:outline-none focus:ring-2 focus:ring-gray-500'}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {data}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => delItem(index)}
                      className={'px-2 py-1 rounded-lg text-white bg-orange-600'}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => startEditing(index)}
                      className={'px-2 py-1 rounded-lg text-white bg-orange-600'}
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
