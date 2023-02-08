const Checkbox = (props) => {

    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox"
            name={props.checkboxConfig.name} 
            id="inlineCheckbox1" 
            value={props.checkboxConfig.value}
            onChange={props.checkboxConfig.select}/>
                <label className="form-check-label" for="inlineCheckbox1">{props.checkboxConfig.text}</label>
        </div>
    )
}
