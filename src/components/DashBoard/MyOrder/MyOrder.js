import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [myOrders, setMyOrders] = useState();
    console.log(myOrders);

    useEffect(() => {
        fetch(`https://tevliy-sever.vercel.app/myOrders/${email}`)
            .then(res => res.json())
            .then(result => setMyOrders(result))
    }, [setMyOrders]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure , you want to delete")
        if (proceed) {
            const url = `https://tevliy-sever.vercel.app/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        swal("Delete Success", {
                            icon: "success",
                        });
                        const remainingOrder = myOrders.filter(user => user._id !== id);
                        setMyOrders(remainingOrder);
                    }
                });
        }
    }
    return (
        <Container>
            {(!myOrders || !myOrders.length) ?
                <div className="text-center p-5">
                    <h1 >No Order found</h1>
                    <Link as={Link} to='/tours'><Button>Find Tours</Button></Link>
                </div>
                : <Table striped borderless hover className='text-center'>
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map(myOrder =>

                                <tr>
                                    <td><img src={myOrder?.image} alt="order img" /> </td>
                                    <td><h4>{myOrder?.title}</h4></td>
                                    <td><Button onClick={() => handleDelete(myOrder._id)}>Cancel</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            }
        </Container>
    );
};

export default MyOrder;