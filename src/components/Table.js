import React from 'react'

export default function Table(props) {
    return <div className="container">
        <table className="table table-striped border border-dark border-5">{props.children}</table>
        </div>
}
