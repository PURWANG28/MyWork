import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function FetchApiTable(props) {
    const [Data, setdata] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/albums")
                .then((res) => res.json())
                .then((Response) => {
                    setdata(Response)
                })
        },);
    })

    return (
        <>
            <Table variant='dark' striped>
                <thead>

                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                </thead>
                <tbody>
                    {
                        Data.map((item, index) => {
                            return (<tr>

                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>

                            </tr>)

                        })
                    }</tbody>
            </Table>
        </>
    );
}

export default FetchApiTable;