import React, {useState, useEffect} from "react";
import {Userdetails, GetResult, Deleteuser} from "./api";
import { useHistory } from "react-router-dom";

function Registration(){
    let [userName, setuserName] = useState("");
      let [email, setuserEmail] = useState("");
     let [userMob, setuserMob] = useState("");
     let [jobType,setjobType] = useState("");
     let [prefLocation, setprefLocation] = useState("");
     let [userDob, setuserDob] = useState("");
     let[profilePic, setprofilePic] = useState("");
     let [userDetails, setuserData] = useState([]);
     let history = useHistory();
    async function getData(){
        let users = await GetResult();
        setuserData(users.data)
    }
    useEffect(() => {
        getData();
    },[userDetails.length])
    let userdata = {userName, userMob, jobType, email, prefLocation, userDob};
return (
    <>
    <form className="forms" onSubmit = {async (e) => {
        e.preventDefault();
        await Userdetails(userdata);
        setuserName("");
        setuserEmail("");
        setuserMob("");
        setjobType("");
        setprefLocation("");
        setuserDob("");
        setprofilePic("");
        history.push('/');
    }}>
    <fieldset>
     <legend>Registration</legend>
     <div class="container">
         <div class="row">
         <div class="col-6">
     <div class="form-group">
         <label for="fname">Fullname:</label>&emsp;
        <input type="text" name="fname" class="form-control" placeholder="User Name" required value={userName} 
        onChange={(e) => {
        setuserName(e.target.value);
        }}/>
        </div><br/>
     <div class="form-group ">
     <label for="mobile">Mobile</label>&emsp;
        <input type="tel" name="mobile" class="form-control" placeholder="Mobile" pattern="[0-9]{10}" required value={userMob} 
        onChange={(e) => {
        setuserMob(e.target.value);
        }}/><small>format: 1234567890</small>
        </div>
        <h5>Job type</h5>
        <div class="form-check form-check-inline">
        <label class="form-check-label" for="inlineCheckbox1">Full time</label>
        <input class="form-check-input" type="radio" id="inlineCheckbox1" name="jobType" value="Full time"
        onChange={(e) => {
            setjobType(e.target.value);
            }}/> &ensp;
                <label class="form-check-label" for="inlineCheckbox2">Part time</label>
                <input class="form-check-input" type="radio" id="inlineCheckbox2" name="jobType" value="Part time"
                onChange={(e) => {
                    setjobType(e.target.value);
                    }}/> &ensp;
        <label class="form-check-label" for="inlineCheckbox3">Consultant</label>
        <input class="form-check-input" type="radio" id="inlineCheckbox3" name="jobType" value="Consultant"
        onChange={(e) => {
            setjobType(e.target.value);
            }} />
        </div>
        </div>
        </div><br/>
        <div class="col-6">
        <div class="input-group form-group">
     <label for="email">Email</label>&emsp;
        <input type="email" name="email" class="form-control" placeholder="Email" required value={email} 
        onChange={(e) => {
            setuserEmail(e.target.value);
        }}/>
        </div><br/>
        <div class="input-group form-group">
        <label for="location">Preferred Location</label>&emsp;
  <input list="locations" name="location" id="browser" value={prefLocation}
  onChange={(e)=>{
      setprefLocation(e.target.value);
  }}/>
  <datalist id="locations">
    <option value="Chennai"/>
    <option value="Bangalore"/>
    <option value="Hyderabad"/>
    <option value="Mumbai"/>
    <option value="Gurugram"/>
  </datalist>
  </div><br/>
     <div class="input-group form-group">
     <label for="DOB">DOB</label> &emsp;
        <input type="date" name="DOB" class="form-control" required value={userDob} 
        onChange={(e) => {
            setuserDob(e.target.value);
        }}/>
        </div><br/>
        <label for="Profile">Profile pic</label>&emsp;
        <div class="input-group form-group">
        <input type="file" id="myFile" name="Profile"  value = {profilePic}
        onChange={(e) => {
            setprofilePic(e.target.value);
        }}
        />
        </div><br/>
        <div class="form-group">
            <input type="submit" value="Register" class="btn float-center btn-warning" />
        </div>
        </div>
        </div>
    </fieldset>
   </form>
   <fieldset>
     <legend>Userdata</legend>
     <div class="table-responsive">
            <table class = "table table-bordered tbl" id = "dataTable" width = "100%" cellspacing="0">
                <thead>
                  <th>Name</th>
                  <th>Mobile No.</th>
                  <th>Job type</th>
                  <th>Preferred Location</th>
                  <th>D.O.B</th>
                  <th>Actions</th>
              </thead>
              <tbody>
                { userDetails.map((user, index) =>
                    <tr>
                        <td>{user.userName}</td>
                        <td>{user.userMob}</td>
                        <td>{user.jobType}</td>
                        <td>{user.prefLocation}</td>
                        <td>{user.userDob}</td>
                        <td>
                        <button type="button" className="btn btn-danger" onClick={async()=>{
                            await Deleteuser(user._id);
                            history.push('/');
                        }}>Delete</button>
                        </td>
                    </tr>
                    )
                }
                </tbody>
                </table>
            </div>
      </fieldset>
   </>
)
}
export default Registration;