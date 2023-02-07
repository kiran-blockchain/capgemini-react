import { isContentEditable } from "@testing-library/user-event/dist/utils";


const Dropdown = (props)=>{

const onOptionSelect = (e)=>{
    props.dropdown.selected(e.target.value);
}
const bindOptions = ()=>{
    return props.dropdown.dataList.map((item,index)=>{
        return (
            <option value={item.value}>{item.text}</option>
        )
    })
}
    return(
        <div className="form-group">
            <select className={props.dropdown.className} 
            name={
                props.dropdown.name
            } onChange={onOptionSelect}>
                <option value="">Please Select</option>
                {bindOptions()}
            </select>
        </div>
    )
}

export default Dropdown;