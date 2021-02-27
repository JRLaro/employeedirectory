import React from 'react'

export default function SortingBtn({ text, field, onClick }) {
    return (
        <th onClick={() => onClick(field)}>
            {text}
        </th>
    )
}

//sortUser(field) - line 5