import "../CSS/About.css"
import "../CSS/Container.css"
import Abouthead from "./Abouthead.jsx"
import Crud from "./Crud.jsx"
import { useState } from "react"
export default function About(){
    const [task , setTask] = useState([]);
    const [taskName , setTaskName] = useState("");
    function ChangeTaskName(e) {
        setTaskName(e.target.value);
    }
    function addTask(){
        let obj = {
            id:task.length + 1,
            name:taskName
        }
        let newTask = [...task];
        newTask.push(obj);
        setTask(newTask);
        setTaskName("");
    }
    function deletetask(id){
        let newTask = [...task];
        newTask = newTask.filter((task) => task.id !== id);
        setTask(newTask);
    }
    function editTask(id){
        let value = prompt("Enter Edit Value")
        let newTask = [...task];
        newTask.map((task) => {
            if(task.id === id){
                task.name = value;
            }
        })
        setTask(newTask);
    }
    const tasksList = task.map((task) => {
        return <Crud key = {task.id} taskName={task.name} deleteTask={() => deletetask(task.id)} editTask={() => editTask(task.id)}/>
    })
    return(
        <div className="about">
            <div className="container">
                <Abouthead taskName = {taskName} changeTaskName={ChangeTaskName} addTask={addTask}/>
                {tasksList}
            </div>
        </div>
    )
}