import React from 'react';
import SortingBtn from "./SortingBtn";


export default function TableHeader({sortUser}) {
    const font = {
        fontSize: 20,
    }
    
    return (
    <thead className="thead text-light border-dark border-5">
            <tr>
                <th> Something? </th>
                <SortingBtn text="First Name" field="fName" onClick={sortUser} />   
                <SortingBtn text="Last Name" field="lName" onClick={sortUser} />  
                <SortingBtn text="Phone" field="phone" onClick={sortUser} />  
                <SortingBtn text="Email" field="email" onClick={sortUser} />  
       </tr>
    </thead>
    )
}

{/* <tr>
<th scope="col" className="border-end border-dark border-3 text-center bg-secondary" style={font}> Image  </th>
<th onClick={() => sortUser("fName")} scope="col" className="border-end border-dark border-3 text-center bg-dark" style ={font}>First Name</th>
<th onClick={() => sortUser("lName")} scope="col" className="border-end border-dark border-3 text-center bg-secondary" style ={font}>Last Name</th>
<th onClick={() => sortUser("phone")} scope="col" className="border-end border-dark border-3 text-center bg-dark" style ={font}>Phone #</th>
<th onClick={() => sortUser("email")} scope="col" className="border-end border-dark border-3 text-center bg-secondary" style ={font}>Email</th>
</tr> */}