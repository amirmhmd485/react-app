import "../CSS/Abouthead.css"
export default function Abouthead({taskName , changeTaskName , addTask}){
    return (
        <div className="head">
            <input type="text" placeholder="Enter a task" value = {taskName} onChange = {changeTaskName}/>
            <button className="btn" onClick={addTask}>Add Task</button>
        </div>
    )
}