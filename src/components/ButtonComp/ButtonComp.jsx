import './ButtonComp.css';
export default function ButtonComp({onSelect, label}){
    
    return(
        <div>
            <button onClick={onSelect} className='txtbutton'>{label}</button>
        </div>
    )
}