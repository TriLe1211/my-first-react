import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
TodoFeature.propTypes = {

};

function TodoFeature({ props }) {

  const initTodoList = [
    {
      id: 1,
      title: 'action 1',
      status: 'new'
    },
    {
      id: 2,
      title: 'action 2',
      status: 'new'
    }, {
      id: 3,
      title: 'action 3',
      status: 'completed'
    }, {
      id: 4,
      title: 'action 4',
      status: 'new'
    }
  ]

  const [todoList, setTodoList] = useState(initTodoList)
  const handleToDoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    }

    console.log(todo, index);
    setTodoList(newTodoList)
  }
  const resetAllStatus = () => {
    const newTodoList = todoList.map(todo => ({
      ...todo,
      status: 'new',
    }))
    setTodoList(newTodoList)
  }
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleToDoClick} />
      <div>
        <button onClick={(resetAllStatus)}>Reset</button>
      </div>
    </div>
  );
}

export default TodoFeature;