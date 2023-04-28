import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';





const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/register",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>

        </div>
    );
};

export default PrivateRoute;