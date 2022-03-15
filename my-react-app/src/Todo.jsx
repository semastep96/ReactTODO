import React, { useState } from 'react'
import helpers from './helpers';
import './style.css'
import TaskForm from './taskForm'
import Task from './Task'

function Todo() {
  const PRIORITY = {
    LOW: 'LOW',
    HIGHT: 'HIGHT'
  }

  const [tasks, setTasks] = useState([])

  const lowTasks = tasks.filter(task => task.priority === PRIORITY.LOW).map(task => <Task key={task.id.toString()} task={task} onTaskDelete={onTaskDelete} onTaskClick={onTaskClick} />)
  const hightTasks = tasks.filter(task => task.priority === PRIORITY.HIGHT).map(task => <Task key={task.id.toString()} task={task} onTaskDelete={onTaskDelete} onTaskClick={onTaskClick} />)


  function onFormSubmit(task) {
    task.id = helpers.getNextId(tasks)
    setTasks([...tasks, task])
  }

  function onTaskDelete(id) {
    const tasksAfterDelete = tasks.filter(task => task.id !== id)
    setTasks(tasksAfterDelete)
  }

  function onTaskClick(id) {
    function checkedTaskToBottom() {
      const tempArr = []
      const _tasks = tasks.map(task => {
        if (task.id === id) {
          task.checked = !task.checked
          if (task.checked === true) {
            tempArr.push(task)
          }
        }
        return task
      }).filter(task => task.id != id || task.checked === false)

      return [..._tasks, ...tempArr]
    }

    const newTasks = checkedTaskToBottom()

    setTasks(newTasks)
  }

  return (
    <div className='todo'>
      <TaskForm placeholder='Добавить важных дел' onFormSubmit={onFormSubmit} priority={PRIORITY.HIGHT}/>
      <div className="task-сontainer">{hightTasks}</div>
      <TaskForm placeholder='Добавить делишек' onFormSubmit={onFormSubmit} priority={PRIORITY.LOW}/>
      <div className="task-сontainer">{lowTasks}</div>
    </div>
  );
}

export default Todo