import React from "react";
import Employee from "../components/Employee";
import Header from "../components/Header";
import TableHeader from "../components/TableHeader";
import Table from "./Table";
import SearchBar from "./SearchBar";

function Main({ users }) {
    // const usersCopy = [...users ]
    return (
        <div>
            <Header />
            <SearchBar />
            <br></br>
            <Table>
                <TableHeader />
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




