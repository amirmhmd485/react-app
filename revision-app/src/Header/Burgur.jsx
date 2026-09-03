import "../CSS/Burgur.css"
export default function Burgur({click}){
    return (
        <div className="burgur-icon" onClick={click}>
            <span></span>
            <span className="mid"></span>
            <span></span>
        </div>
    )
}