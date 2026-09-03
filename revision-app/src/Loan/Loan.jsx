import LoanHead from "./LoanHead.jsx"
import "../CSS/Loan.css"
import Input from "../Landing/Input.jsx"
import { useState } from "react";
import Btn from "./Btn.jsx"
import Modal from "./Modal.jsx"
export default function Loan(){
    const [form , setForm] = useState({
        Name:"",
        Email:"",
        Password:"",
        Age:"",
        isStudent : false
    })
    const [exit , setExit] = useState({
        isExit:"",
        paragraph : ""
    });
    function HandleNameChange(e){
        setForm({...form , Name:e.target.value})
    }
    function HandleEmailChange(e){
        setForm({...form , Email:e.target.value})
    }
    function HandlePasswordChange(e){
        setForm({...form , Password:e.target.value})
    }
    function HandleCheckBoxChange(e){
        setForm({...form , isStudent:e.target.checked})
    }
    function HandleAgeChange(e){
        setForm({...form , Age:e.target.value})
    }
    function validateName(e){
        let regExp = /[a-zA-Z]/ig;
        if(e.key.match(regExp) || e.key == "Backspace" || e.key == "tab"){
            return e.key;
        }
        else{
            e.preventDefault();
        }
    }
    function validateAge(e){
        let regExp = /[0-9]/ig;
        if(e.key.match(regExp) || e.key == "Backspace" || e.key == "tab"){
            return e.key;
        }
        else{
            e.preventDefault();
        }
    }
    function checkForm(){
        if(form.Name.length < 2 || form.Name.length > 20){
            setExit({isExit:"full" , paragraph:"The Name Must me more than 2 and less than 10 character"})
        }
        else if(form.Password.length < 8){
            setExit({isExit:"full" , paragraph:"The Password Must be More than 8 character"})
        }
        else if(form.Age > 100 || form.Age < 20){
            setExit({isExit:"full" , paragraph:"The Age Has A Error"})
        }
        else{
            setForm({Name:"" , Password:"" , Age:"" , Email:"" , isStudent:false})
            console.log(form)
        }
    }
    function PrintData(e){
        checkForm();
        e.preventDefault();
    }
    function reset(){
        setExit({isExit:"full exit" , paragraph:""})
    }
    const InputProps = [
        { Name:"Name" , type : "text" , id:"n" , value :form.Name ,Change:HandleNameChange , defaultbehave:validateName},
        { Name:"Email" , type : "email" , id:"e" , value :form.Email ,Change:HandleEmailChange},
        { Name:"Password" , type : "password" , id:"p" , value :form.Password ,Change:HandlePasswordChange},
        { Name:"Age" , type : "text" , id:"a" , value :form.Age ,Change:HandleAgeChange , defaultbehave:validateAge},
        { Name:"is Student" , type : "checkbox" , id:"c" , checked :form.isStudent ,Change:HandleCheckBoxChange}
    ]
    const showInputs = InputProps.map((input , index) => {
        return (
                input.type === "checkbox" ? 
                    <Input key = {index} Name = {input.Name} type = {input.type}  id = {input.id} checked = {input.checked} Change = {input.Change}/>
                        :
                    <Input key={index} Name = {input.Name} type = {input.type}  id = {input.id} value = {input.value} Change = {input.Change} defaultbehave={input.defaultbehave}/>
        )
    })
    let checkClass = (form.Name == "" || form.Email == "" || form.Password == "" || form.Age =="") ? "disabled":"";
    return (
        <form action="">
            <LoanHead />
            {showInputs}
            <Btn isClass={checkClass} click={PrintData}/>
            <Modal isExit = {exit.isExit} para={exit.paragraph} click={reset}/>
        </form>
    );
}