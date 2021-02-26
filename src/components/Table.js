import React from 'react'

export default function Table(props) {
    return <div className="container">
        <table className="table bg-light border-dark border-5">{props.children}</table>
        </div>
}
