import React from 'react'
import './style.css'
import TaskForm from './taskForm'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleChange } from './store/actions';

function Todo() {
  const PRIORITY = {
    LOW: 'LOW',
    HIGHT: 'HIGHT'
  }

  const { tasks } = useSelector(state => state)
  const dispatch = useDispatch()

  const lowTasks = [...filterTasks(PRIORITY.LOW, false), ...filterTasks(PRIORITY.LOW, true)]

  const hightTasks = [...filterTasks(PRIORITY.HIGHT, false), ...filterTasks(PRIORITY.HIGHT, true)]

  function filterTasks(priority, checked) {
    return tasks.filter(task => task.priority === priority && task.checked === checked).map(task => <Task 
    key={task.id.toString()} 
    task={task} 
    onTaskDelete={onTaskDelete} 
    onTaskClick={onTaskClick} />)
  }

  function onFormSubmit({ text, priority }) {
    dispatch(addTask(text, priority))
  }

  function onTaskDelete(id) {
    dispatch(deleteTask(id))
  }

  function onTaskClick(id) {
    dispatch(toggleChange(id))
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