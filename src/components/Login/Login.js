import { signInWithPopup } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { user, signInWithGoogle, setUser, signInUser, setIsLoading } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userData, setUserData] = useState({});
    //handle google sing in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    //email sign in
    const onSubmit = data => {
        setUserData(data);
        signInUser(data.email, data.password, location, history)
    }

    return (
        <div>
            <Container className="p-5">
                <h1 className="mb-5">Please Sign in to Continue</h1>
                <form onClick={handleSubmit(onSubmit)}>
                    <label>Email</label><br />
                    <input type='email' {...register("email", {
                        required: true,
                    })} />
                    {errors.email &&
                        (<p>Email is required</p>)
                    }

                    <label>password</label>
                    <input type='password' {...register("password", { required: true, minLength: 6 })} />
                    {errors.password && (
                        <p >Password must be 6 characters long </p>
                    )}

                    <input className='btn-style' type="submit" value="Register" />
                </form>
                <div className='text-center'>

                    <Button onClick={handleGoogleSignIn}>Google sign in</Button>
                    <p>or</p>
                    <Link as={Link} to='/register'> <Button >Register</Button></Link>
                </div>
            </Container>
        </div>
    );
};

export default Login;