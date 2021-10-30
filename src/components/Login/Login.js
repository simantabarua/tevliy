import { signInWithPopup } from '@firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const { signInUsingGoogle, setUser } = useAuth();
    //handle google sing in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_url);
                setUser(result.user);
                console.log(result.user);

                swal("Google Sign In Success", {
                    icon: "success",
                });
            })
            .catch(err =>
                swal("Something went wrong!", `${err.message}`, "error")

            );
    }
    return (
        <div>
            <h2>login</h2>
            <Button onClick={handleGoogleSignIn}>Google sign in</Button>
        </div>
    );
};

export default Login;