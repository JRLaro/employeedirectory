import React from 'react';

export default function Employee({ user }) {
    const imgRound = {
        borderRadius: "50%",
        border: [5, "solid","#555"]
    }
    const font = {
    fontSize:20
}

    return (
        <tbody className="border border-dark border-5 table">
            <td> <img style={imgRound} width="65" height="65" alt={user.fName} src={user.image}></img></td>
            <td style={font} className="text-center">{user.fName} </td>
            <td style={font} className="text-center">{user.lName}</td>
            <td style={font} className="text-center">{user.phone}</td>
            <td style={font} className="text-center"> <a href={user.email}> {user.email}  </a></td>
        </tbody>
    )
}
