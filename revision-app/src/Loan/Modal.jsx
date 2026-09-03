import "../CSS/Modal.css"
export default function Modal({isExit , para , click}){
    return (
        <div className={isExit} onClick={click}>
            <div className="info">
                <p>{para}</p>
            </div>
        </div>
    );
}