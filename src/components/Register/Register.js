import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm, useWatch } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'

const Register = () => {
    const { user, registerUser, setUser, setIsLoading, signInWithGoogle } = useFirebase();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const history = useHistory();
    const onSubmit = data => {
        setIsLoading(true);
        setUser(data.user);
        registerUser(data.email, data.password, location, history);

    };
    //handle google sing in
    //handle google sing in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <label>Name</label><br />
                <input {...register("name", { required: true })} />
                {errors.name?.type === 'required' &&
                    (<p>Name is required</p>)
                }

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
                <h5>or</h5>
                <Button className='btn-style' onClick={handleGoogleSignIn}>Google sign in</Button>
            </div>
        </div>
    );
};

export default Register;