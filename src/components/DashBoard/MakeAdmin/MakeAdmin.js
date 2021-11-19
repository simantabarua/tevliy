import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/makeAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    swal(" Success", {
                        icon: "success",
                    });
                    history.push('/')
                }
            });


    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <label>Name</label><br />
                <input {...register("name", { required: true })} />
                {errors.name?.type === 'required' &&
                    (<p>Admin name is required</p>)
                }

                <label>Email</label><br />
                <input type='email' {...register("email", {
                    required: true,
                })} />
                {errors.email &&
                    (<p>Email is required</p>)
                }
                <input className='btn-style' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default MakeAdmin;