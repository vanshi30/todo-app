import React, { useState } from 'react'

const FormCreate = ({createTask}) => {
    const [value,setValue] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(value){
            createTask(value)
            console.log("this");
            const cancel = document.getElementById('input')
            cancel.value=''
            setValue('');
            console.log("this1");
        }
    }
  return (
    <form onSubmit={handleSubmit}  className="TodoForm" >
        <input id='input' type='text' onChange={e=>setValue(e.target.value)} className="todo-input" placeholder='What is the task today?'/>      
        <button type='submit'className='todo-btn'>CREATE TASK</button>
    </form>
  )
}

export default FormCreate