import removeIcon from './img/remove-icon.png'
import React, { useState } from 'react'


function Task({task, onTaskDelete, onTaskClick}) {
  const taskClass = task.checked ? "form-element form-element--checked" : "form-element"
  return (
    <div className={taskClass}>
      <label className="form-element_label">
      <input onClick={(event) => {
        event.stopPropagation();
        onTaskClick(task.id, event)
      }} type="checkbox" className="checkbox"/>
      <span className="checkbox-text">{task.text}</span>
      </label>
      <button className="btn btn-remove" onClick={() => {onTaskDelete(task.id)}}><img src={removeIcon} alt="remove icon" className="icon icon-remove"/></button>
    </div>
  );
}

export default Task