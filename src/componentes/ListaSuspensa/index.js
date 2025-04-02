import './ListaSuspensa.css'
const ListaSuspensa = (props, evento) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={props => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.item.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa;
