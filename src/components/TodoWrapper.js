import React, { useEffect, useState } from 'react'
import FormCreate from './FormCreate'
import EditForm from './EditForm'
import Todo from './Todo'

const TodoWrapper = () => {
    const [todo,setTodo] = useState([])
    useEffect(()=>{
        const save = JSON.parse(localStorage.getItem('todo'))||[]
        setTodo(save)
    },[])

    const createTask = (task)=>{
        const newTodo = [...todo,{id:Date.now(),text:task,isEditing:false,completed:false}]
        setTodo(newTodo)
        localStorage.setItem('todo',JSON.stringify(newTodo))
        console.log(newTodo);
    }
    const deleteTask = (id) =>{
        console.log("delete clicked");
        const newTodo = todo.filter(t=>t.id!==id)
        localStorage.setItem('todo',JSON.stringify(newTodo))
        setTodo(newTodo)
    }

    const toggleComplete = (id)=>{
        console.log("toggle clicekd");
        const newTodo = todo.map(t=> t.id===id?{...t,completed:!t.completed}:t)
            setTodo(newTodo)
            localStorage.setItem('todo',JSON.stringify(newTodo))
    }

    const editToggle = (id)=>{
        console.log("edit togglke cicked");
        const newTodo = todo.map(t=>t.id===id?{...t,isEditing:!t.isEditing}:t)
        
        setTodo(newTodo)
    }

    const EditTask = (value,id)=>{
    const newTodo = todo.map(t=>t.id === id?{...t,text:value,isEditing:!t.isEditing}:t)
    setTodo(newTodo)
    localStorage.setItem('todo',JSON.stringify(newTodo))
    }
    const clearingStorage = () =>{
        setTodo([]);
        localStorage.clear()
    }
  return (
    <div className='container'>
    <button type="button" class="btn btn-outline-danger" onClick={clearingStorage}>Clear Entire storage</button>
    <div className="TodoWrapper">
            <h1>Checklist items</h1>
            <div>
               <FormCreate createTask={createTask}/>
               {todo.length==0 ? <h2>No items yet </h2>:''}
                {
                    todo?.map((task)=>{
                        // console.log(task.isEditing);
                        return task.isEditing?(<EditForm task={task} EditTask={EditTask}/>):(<Todo 
                            key={task.id}
                            task={task}
                            deleteTask ={deleteTask}
                            editToggle={editToggle}
                            toggleComplete={toggleComplete}                      
                            />)
                    })
                }
            </div>
            
    </div>
            
    </div>
  )
}

export default TodoWrapper