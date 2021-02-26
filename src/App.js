import React, { useState, useEffect }from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import {getUsers} from "./utils/API";
import { mapUsers } from "./utils/mapUsers";
import { sortUser } from "./utils/sortUsers";
import { filterUsers } from "./utils/filterUsers";


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //runs the API (get) function 
    getUsers()
      .then((userList) => {
        const mappedUserList = mapUsers(userList);
        setUsers(mappedUserList)
    })
  }, [])
  return (
    <div className="App">
      <Main users={ users } />
    </div>
  );
}

export default App;
