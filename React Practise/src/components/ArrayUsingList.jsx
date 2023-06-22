import React from 'react';
import { Table } from 'react-bootstrap';




// Nested List with Nested araay using map

function ArrayUsingList(props) {
    const Team = [
        {
            name: "Purwang",
            contact: 111,
            email: "Pb123",
            address: [{
                Hn: 74,
                area: "Radhanpur road",
                city: "mehsana"
            }]

        },

        {
            name: "Viral",
            contact: 222,
            email: "Vb123",
            address: [{
                Hn: 13,
                area: "Nani kadi",
                city: "kadi"
            }]
        },

        {
            name: "Vivek",
            contact: 333,
            email: "Vrb123",
            address: [{
                Hn: 14,
                area: "Akhbar nagar",
                city: "AMD"
            }]
        },


        {
            name: "Milan",
            contact: 444,
            email: "Mb123",
            address: [{
                Hn: 12,
                area: "Gopal nagar",
                city: "Kalol"
            }]
        }
    ]



    return (
        <div>
            <Table border={1} variant='dark' striped >
                <thead>
                    <td>Sr.no</td>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Email</td>
                    <td>Address</td>
                 
                </thead>
                <tbody>
                    {
                        Team.map((item, index) => {
                            return (<tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.contact}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table border={1} variant='dark' striped >
                                        {/* <thead >
                                        
                                            <td>House no</td>
                                            <td>Area</td>
                                            <td>City</td>
                                           
                                        </thead> */}

                                        <tbody>
                                            {
                                                item.address.map((data) => {
                                                    return<tr key={index}>
                                                        <td>{data.Hn}</td>
                                                        <td>{data.area}</td>
                                                        <td>{data.city}</td>
                                                    </tr>
                                                })
                                            }


                                        </tbody>
                                    </Table>
                                </td>

                            </tr>)

                        })
                    }
                </tbody>



            </Table>
        </div>
    );
}

export default ArrayUsingList;