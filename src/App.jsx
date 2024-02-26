import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [list, setTodoList] = useState([
    { id: uuidv4(), title: '리액트를 배워봅시다.' },
    { id: uuidv4(), title: '노드를 배워봅시다.' },
  ]);
  const [title, setTitle] = useState('');

  const handleTitleAddClick = (event) => {
    setTitle(event.target.value);
  };

  const handleListAddClick = () => {
    if (title !== '') {
      const newList = {
        id: uuidv4(),
        title,
      };
      setTodoList([...list, newList]);
      setTitle('');
    } else {
      alert('제목을 작성해주세요!');
    }
  };
  return (
    <>
      <div className='addBox'>
        <input type='text' value={title} onChange={handleTitleAddClick} />
        <button className='addButton' onClick={handleListAddClick}>
          추가하기
        </button>
      </div>
      <h1> Todo List</h1>
      <div className='listContainer'>
        {list.map((item) => (
          <div className='listBox' key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
