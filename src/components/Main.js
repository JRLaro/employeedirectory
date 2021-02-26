import React, {useState} from "react";
import Employee from "../components/Employee";
import Header from "../components/Header";
import TableHeader from "../components/TableHeader";
import Table from "./Table";
import SearchBar from "./SearchBar";

function Main({ users }) {
    const [userList, setUserList] = useState(users);

    // function that sorts the information
    const sortUser = (sortBy) => {
        const usersCopy = [...users];
        const sortedList = sortUser(usersCopy, sortBy);
        setUserList(sortedList);
      };

    // function that filters the data
    const filterUser = (sortBy) => {
        const usersCopy = [...users];
        const filteredList = filterUsers(usersCopy, searchBy);
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
                filerUser={filterUsers}
            />
            <br></br>
            <Table>
                <TableHeader 
                    sortUser={sortUser}
                />
                    {users.map((user) => (
                        <Employee
                            user={user}
                            key={user.uuid}
                        />
                    ))}
            </Table>
        </div>

    )
};

export default Main;




