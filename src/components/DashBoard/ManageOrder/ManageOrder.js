import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const MangeOrder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [orders, setOrders] = useState();
    console.log(orders);

    useEffect(() => {
        fetch(`https://intense-ravine-02304.herokuapp.com/orders`)
            .then(res => res.json())
            .then(result => setOrders(result))
    }, [setOrders]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure , you want to delete")
        if (proceed) {
            const url = ` https://intense-ravine-02304.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        swal("Delete Success", {
                            icon: "success",
                        });
                        const remainingOrder = orders.filter(user => user._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }
    return (
        <Container>
            {(!orders?.length) ? <div className='text-center p-5'>  <Spinner animation="border" /></div> :
                (!orders || !orders?.length) ?
                    <div className="text-center p-5">
                        <h1 >No Order found</h1>
                        <Link as={Link} to='/tours'><Button>Find Tours</Button></Link>
                    </div> :

                    <Table striped borderless hover className='text-center'>
                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(myOrder =>

                                    <tr>
                                        <td><img src={myOrder?.image} alt="order img" /> </td>
                                        <td><h4>{myOrder?.title}</h4></td>
                                        <td><h4>{myOrder?.email}</h4></td>
                                        <td><h4>{myOrder?.status}</h4></td>
                                        <td><Button onClick={() => handleDelete(myOrder._id)}>Delete</Button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
            }
        </Container>
    );
};

export default MangeOrder;