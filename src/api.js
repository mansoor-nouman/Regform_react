import axios from "axios";

export function Userdetails(data)
{
    return axios.post("http://regformnode.herokuapp.com/Registration",data)
}

export function GetResult(){
    return axios.get(`http://regformnode.herokuapp.com/Result`)
}

export function Deleteuser(id){
    return axios.delete(`http://regformnode.herokuapp.com/Delete/${id}`)
}
