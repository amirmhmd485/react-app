import "../CSS/Form.css"
import Input from "./Input.jsx"
import {useState} from "react"
export default function Form(){
    function HandleNameChange(event){
        setFormData({...formData , Name:event.target.value})
    }
    function HandleStudentChange(event){
        setFormData({...formData , isStudent:event.target.checked})
    }
    function HandleEmailChange(event){
        setFormData({...formData , Email:event.target.value})
    }
    function HandlePasswordChange(event){
        setFormData({...formData , Password:event.target.value})
    }
    function HandleSubmit(event){
        event.preventDefault()
        console.log(formData)
        setFormData({Name:"" , Email:"" , Password:"" , isStudent:false})
    }
    const [formData , setFormData] = useState({
        Name: "",
        Email: "",
        Password: "",
        isStudent: false
    });
    const inputProps = [
        {i:0,Name: 'Name', type: 'text', id: 'name' ,value : formData.Name , Change:HandleNameChange},
        {i:1,Name: 'Email', type: 'email', id: 'email', value : formData.Email, Change:HandleEmailChange},
        {i:2,Name: 'Password', type: 'password', id: 'pass', value : formData.Password, Change:HandlePasswordChange},
        {i:3,Name: 'is Student', type: 'checkbox', id: 'std', checked : formData.isStudent, Change:HandleStudentChange},
    ]
    const Inputs = inputProps.map((inputProp) => {
        return (
            inputProp.type === "checkbox" ? 
                    <Input key= {inputProp.i} Name={inputProp.Name} type={inputProp.type} id={inputProp.id} checked={inputProp.checked} Change={inputProp.Change}/> 
                :
                    <Input key= {inputProp.i} Name={inputProp.Name} type={inputProp.type} id={inputProp.id} value={inputProp.value} Change={inputProp.Change}/>
        );
    })
    return (
        <form onSubmit={HandleSubmit}>
            {Inputs}
            <div className="input">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}