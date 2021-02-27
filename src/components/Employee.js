import React from 'react';

export default function Employee({ userList }) {
    const imgRound = {
        borderRadius: "50%",
        border: [5, "solid","#555"]
    }
    const font = {
    fontSize:20
}

    return (
        <tbody className="border border-dark border-5 table">
            <td> <img style={imgRound} width="65" height="65" alt={`${userList.fName} pic`} src={userList.image}></img></td>
            <td style={font} className="text-center">{userList.fName} </td>
            <td style={font} className="text-center">{userList.lName}</td>
            <td style={font} className="text-center">{userList.phone}</td>
            <td style={font} className="text-center"> <a href={userList.email}> {userList.email}  </a></td>
        </tbody>
    )
}
