// import List from "./List.jsx"
import { useState } from "react";
import {v4 as uuid} from "uuid";
function Todo(){
    let [tasks,setTasks]=useState([{name:"sample task",id:uuid(),done:false}]);
    let [newtask,setNewtask]=useState("")
    function Task(event){
        setNewtask(event.target.value)    
    }
    function addTask(){
        setTasks([...tasks,{name:newtask,id:uuid(),done:false}]);
        setNewtask("");
        
    }
    let taskDone=(id)=>{
        let newtasks=tasks.map(item=>{
            if(item.id==id) return ({...item,done:!item.done})
            else return item;
            
        })
        setTasks(newtasks);
    }
    let deleteTask=(id)=>{
        
        let prev=tasks.filter((task)=>task.id!=id);
        console.log(prev)
        setTasks(prev);
       
    }
    let doneStyle={textDecoration:"line-through"};
    function Button({ onClick, children }) {
        return (
          <button onClick={e => {
            e.stopPropagation();
            onClick();
          }}>
            {children}
          </button>
        );
      }

    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="enter your task here" onChange={Task} value={newtask}></input>
            &nbsp;&nbsp;
            <button onClick={addTask}>Add</button>
            
            <p>List:</p>
                <ul>
                {tasks.map(item=>(
                        
                        !item.done ?(
                        <li key={item.id} onClick={()=>taskDone(item.id)}>{item.name}
                        <Button onClick={()=>deleteTask(item.id)}>delete</Button>
                        </li>
                        )
                        :
                        (
                          <li key={item.id} onClick={()=>taskDone(item.id)} style={doneStyle}>{item.name}
                        <Button onClick={()=>deleteTask(item.id)}>delete</Button> 
                          </li>
                        )
                        
            ))}
                </ul>    

        </div>
    )
}
export default Todo;