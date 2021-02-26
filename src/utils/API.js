import axios from "axios";


function getUsers () {
    return axios.get("https://randomuser.me/api/?results=10")
        .then((res) =>  res.data.results)
        .catch((err)=> console.log(err));
}

export {getUsers};