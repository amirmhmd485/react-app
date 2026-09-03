export default function Input({Name , type , id , value , checked , Change , defaultbehave}){
    return (
        <div className="input">
            <label htmlFor={id}>{Name}:</label>
            {type === "checkbox" ? 
                <input type={type} id={id} checked={checked} onChange={Change}/> 
                    :
                <input type={type} id={id} value={value} onChange={Change} onKeyDown={defaultbehave}/>}
        </div>
    );
}