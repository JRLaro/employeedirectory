import React, { useState, useEffect }from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {getUsers} from "./utils/API";
import { mapUsers } from "./utils/mapUsers";
import SearchBar from "./components/SearchBar"


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((userList) => {
        const mappedUserList = mapUsers(userList);
        setUsers(mappedUserList)
    })
  }, [])
  return (
    <div className="App">
      <Main users={ users }/>
    </div>
  );
}

export default App;
