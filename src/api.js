import axios from "axios";

export function Userdetails(data)
{
    return axios.post("https://regformnode.herokuapp.com/Registration",data)
}

export function GetResult(){
    return axios.get(`https://regformnode.herokuapp.com/Result`)
}

export function Deleteuser(id){
    return axios.delete(`https://regformnode.herokuapp.com/Delete/${id}`)
}
