import React, { useState } from 'react'
import addIcon from './img/add-icon.png'

function TaskForm({placeholder = 'Добавить дел', onFormSubmit, priority}) {
  const [task, setTask] = useState({})

  function onInputChange(e) {
    const text = e.target.value.trim()
    if (!text) return
    setTask({
      text: e.target.value.trim(),
      priority,
    })
  }

  return (
    <form className="todo_form" onSubmit={e => {
      e.preventDefault()
      e.target.reset()
      if (!task.text) return
      onFormSubmit(task)
    }}>
      <h2 className="header">{priority}</h2>
      <div className="form-element">
        <input className="todo_input" type="text" placeholder={placeholder} onChange={onInputChange}/>
        <button className="btn btn-add"><img src={addIcon} alt="add icon" className="icon icon-add"/></button>
      </div>
    </form>
  );
}

export default TaskForm