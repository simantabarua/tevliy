import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [myOrders, setMyOrders] = useState();
    console.log(myOrders);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(result => setMyOrders(result))
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure , you want to delete")
        if (proceed) {
            const url = `http://localhost:5000/deleteOrder/${id}`
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
            {
                myOrders?.map(myOrder =>
                    <div>Order</div>
                )
            }
        </Container>
    );
};

export default MyOrder;