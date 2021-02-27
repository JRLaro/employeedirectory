import React from 'react'

export default function SortingBtn({ text, field, onClick }) {
    const cursor = {
        cursor: "pointer"
}
    return (
       
        <th className="text-center" style={cursor} onClick={() => onClick(field)}>
            {text} <i class="fas fa-sort-amount-down-alt"></i>
            </th>
         
    )
}
