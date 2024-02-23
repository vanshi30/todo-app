import React, { useState } from 'react'

const EditForm = ({task,EditTask}) => {
    const [value,setValue]=useState(task.text)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        EditTask(value,task.id)
    }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} className="todo-input" placeholder='Update task'/>
        <button type='submit' className='todo-btn'>EDIT</button>
    </form>
  )
}

export default EditForm