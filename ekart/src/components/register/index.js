import { useState } from "react"
import axios from 'axios';

const Register = () => {
    //define your post object
    const userObj = {
        "name": "",
        "gender": "",
        "address": "",
        "number": "",
        "emailId": "",
        "user": {
            "username": "",
            "password": ""
        }

    }
    //set your state
    const [user, setUserDetails] = useState(userObj);

    //collect the data from the page
    const updateUser = (e) => {
        let tempuser = { ...user };
        if (e.target.name == 'username') {
            tempuser.user.username = e.target.value;

        } else if (e.target.name == 'password') {
            tempuser.user.password = e.target.value;
        }
        else {
            tempuser[e.target.name] = e.target.value;
        }
        setUserDetails(tempuser);
    }
    // Save the data to the databse by calling the api
    const saveUser = ()=>{
        console.log(user);
        axios.post('/api/...',user).then(result=>{
            console.log(result);
        }).catch((ex)=>{
            console.log(ex);
        });
    }

    return <div className="mt-5">
        <div class="row mb-3">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="name" name="name" 
            onChange={updateUser} />
            </div>
        </div>
        <div class="row mb-3">
            <label for="gender" class="col-sm-2 col-form-label">Gender</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="gender" name="gender"
                onChange={updateUser} />
            </div>
        </div>
        <div class="row mb-3">
            <label for="address" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="address" name="address" onChange={updateUser} />
            </div>
        </div>
        <div class="row mb-3">
            <label for="number" class="col-sm-2 col-form-label">Number</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="number" name="number" 
                onChange={updateUser} />
            </div>
        </div>
        <div class="row mb-3">
            <label for="emailId" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="emailId" name="emailId" 
                onChange={updateUser} />
            </div>
        </div>
        <div class="row mb-3">
            <label for="username" class="col-sm-2 col-form-label">UserName</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="username" name="username"
                onChange={updateUser} />

            </div>
        </div>
        <div class="row mb-3">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="password" name="password"
                onChange={updateUser} />
            </div>
        </div>

        <button type="button" class="btn btn-primary" onClick={saveUser}>Register</button>
    </div>
}

export default Register;