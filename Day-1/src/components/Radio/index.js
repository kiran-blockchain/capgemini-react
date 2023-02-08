const Radio = (props)=>{
    const selectChoice =(e)=>{
        props.radio.selected(e.target.value);
    }
    return(
        <div className={props.radio.className}>
            {props.radio.dataList.map((item,index)=>{
                return(<>
                <input key={index}
                
                type="radio" 
                id={props.radio.name+index}
                name={props.radio.name} 
                value={item.value}
                onChange={selectChoice}
                />       
                <label class="form-check-label" key={props.radio.name+index}
                 for={props.radio.name+index}>{item.text}</label>
                </>)
            })}
        </div>
    )
}
export default Radio;