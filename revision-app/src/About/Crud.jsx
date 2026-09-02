import "../CSS/Crud.css"
export default function About({taskName, deleteTask, editTask}){
    return (
        <div className="cruds">
            <div className="left">
                <h2>{taskName}</h2>
            </div>
            <div className="right">
                <button className="btn-edit" onClick = {editTask}>Edit</button>
                <button className="btn-delete" onClick = {deleteTask}>Delete</button>
            </div>
        </div>
    )
}