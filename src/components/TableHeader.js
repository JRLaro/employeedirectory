import React from 'react'

export default function TableHeader() {
    const font = {
        fontSize: 20,
        // opacity: 0.9
}
    
    return (
    <thead className="thead text-light border-dark border-5">
        <tr>
                <th scope="col" className="border-end border-dark border-3 text-center bg-secondary" style={font}> Image  </th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-dark" style ={font}>First Name</th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-secondary" style ={font}>Last Name</th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-dark" style ={font}>Phone #</th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-secondary" style ={font}>Email</th>
        </tr>
    </thead>
    )
}

