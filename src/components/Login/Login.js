import { signInWithPopup } from '@firebase/auth';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const { signInUsingGoogle, setUser,  setIsLoading } = useAuth();
    //handle google sing in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                setIsLoading(true);
                setUser(result.user);
                history.push(redirect_url);
                swal("Google Sign In Success", {
                    icon: "success",
                });
            })
            .catch(err =>
                swal("Something went wrong!", `${err.message}`, "error")

            )
            .finally(() => {
                setIsLoading(false)
            })

    }
    return (
        <div>
            <Container className="text-center p-5">
                <h1 className="mb-5">Please Login to Continue</h1>
                <Button onClick={handleGoogleSignIn}>Google sign in</Button>
            </Container>
        </div>
    );
};

export default Login;