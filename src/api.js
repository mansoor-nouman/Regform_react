import axios from "axios";

export function Userdetails(data)
{
    return axios.post("http://localhost:5000/Registration",data)
}

export function GetResult(){
    return axios.get(`http://localhost:5000/Result`)
}

export function Deleteuser(id){
    return axios.delete(`http://localhost:5000/Delete/${id}`)
}