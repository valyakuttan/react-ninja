import React from 'react'

function Todos ({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className='collection-item blue-text' key={todo.id}>
          <span onClick={(e) => {
            deleteTodo(todo.id)
          }}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className='center green-text'> Nothing Left!!</p>
  )
  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos
