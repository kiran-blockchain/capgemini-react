import { useState } from "react"

const Textbox = (props) => {
    const userObj = {
        username: "",
        password:"",
        age:"",
        gender:""//radiobutton

    };
    const [user, updateDetails] = useState(userObj)

    const updateUserDetails = (e) => {
        console.log(e.target.value);
        let tempuser = { ...user };
        tempuser[e.target.name] = e.target.value // identifying the generic control
        updateDetails(tempuser)//state updation
        props.update(tempuser)
    }
    return (
        <div className="row">
            <div class="mb-3">
                <label for="formGroupExampleInput"
                    class="form-label">User Name</label>
                <input type="text" class="form-control"
                    id="formGroupExampleInput"
                    name="username"
                    onChange={updateUserDetails}
                    placeholder="Enter user name" />
            </div>
            <div class="mb-3">
                <label for="password"
                    class="form-label">Password</label>
                <input type="password" class="form-control"
                    id="password"
                    name="password"
                    onChange={updateUserDetails}
                    placeholder="Enter Password" />
            </div>
            <div class="mb-3">
                <label for="password"
                    class="form-label">Age</label>
                <input type="text" class="form-control"
                    id="age"
                    name="age"
                    onChange={updateUserDetails}
                    placeholder="Enter Age" />
                    
            </div>
            <div class="col-sm-3">
            <label for="password"
                    class="form-label">Gender</label>
                    
                <input type="radio" name="gender" value="M"  onChange={updateUserDetails}/> Male
                <input type="radio" name="gender" value="F"  onChange={updateUserDetails}/> Female
                <input type="radio" name="gender" value="O"  onChange={updateUserDetails}/> Other
            </div>
            <h4>{JSON.stringify(user)}</h4>


        </div>
    )
}

export default Textbox