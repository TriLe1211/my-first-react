import React from 'react';
import PropTypes, { func } from 'prop-types';
import classNames from 'classnames';
import './style.scss'

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
  onResetAll: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
  onResetAll: null
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  return (
    <div>
      <ul className='todo-list'>
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={classNames('todo-item', {
              'completed': todo.status === 'completed'
            })}
            onClick={() => handleTodoClick(todo, index)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;