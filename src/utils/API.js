import axios from "axios";

// this gets users from API - * whatever number is specified 
function getUsers () {
    return axios.get("https://randomuser.me/api/?results=10")
        .then((res) =>  res.data.results)
        .catch((err)=> console.log(err));
}

export {getUsers};