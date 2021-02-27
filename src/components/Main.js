import React, {useState} from "react";
import Employee from "../components/Employee";
import Header from "../components/Header";
import TableHeader from "../components/TableHeader";
import Table from "./Table";
import SearchBar from "./SearchBar";
import { sortUsers } from "../utils/sortUsers";
import { filterUsers } from "../utils/filterUsers";





function Main({ users }) {
    const [userList, setUserList] = useState(users);

    // function that sorts the information
    const sortUser = (sortBy) => {
        const usersCopy = [...users];
        const sortedList = sortUsers(usersCopy, sortBy);
        setUserList(sortedList);
      };

    // function that filters the data
    const filterUser = (searchBy) => {
        const usersCopy = [...users];
        const filteredList = filterUsers(usersCopy, searchBy);
        console.log(filteredList);
        setUserList(filteredList);
      };

// function that clears the information and returns to the initial state
    const clearUsers = () => {
        setUserList(users);
    };
    

    return (
        <div>
            <Header />
            <SearchBar 
                clearUsers={clearUsers}
                filterUser={filterUser}
            />
            <br />
            <Table>
                <TableHeader 
                    sortUser={sortUser}
                />
                    {userList.map((user) => (
                        <Employee
                            userList={user}
                            key={user.uuid}
                        />
                    ))}
            </Table>
        </div>

    )
};

export default Main;




