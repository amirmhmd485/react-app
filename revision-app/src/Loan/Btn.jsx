import "../CSS/Btn.css"
export default function Btn({isClass , click}){
    return (
        <button className={ isClass === "disabled" ? "btn disabled" : "btn"} onClick={click}>Submit</button>
    );
}