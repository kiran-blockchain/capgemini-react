import { isContentEditable } from "@testing-library/user-event/dist/utils";


const Dropdown = (props)=>{

const onOptionSelect = (e)=>{
    props.selected(e.target.value);
}
const bindOptions = ()=>{
    return props.dataList.map((item,index)=>{
        return (
            <option value={item.value}>{item.text}</option>
        )
    })
}
    return(
        <div className="form-group">
            <select className="form-control" name="country" onChange={onOptionSelect}>
                <option value="">Please Select</option>
                {bindOptions()}
            </select>
        </div>
    )
}

export default Dropdown;