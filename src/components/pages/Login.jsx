import React, { useState } from 'react'
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/validationSchema';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { logInApi } from '../../APIs/AuthApi';

const Login = () => {
    const [password, setPassword] = useState(false)
    const [change, setChange] = useState('password')
    const [Loading, setLoading] = useState(false)

    const handleShow = () => {
        setPassword((prev) => !prev)
        if (change == 'text') setChange('password')
        else setChange('text')
    }
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const initialValues = formValues
    const validationSchema = loginSchema
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, action) => {
            setLoading(true)
            try {
                const { data } = await logInApi(values)
                toast.success(data.message)
            } catch (error) {
                console.log(error, 'Login failed');
                toast.error(error.response.data.message)
            }
            action.resetForm();
            console.log('before reset')
            setLoading(false)
        }
    })

    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div className="w-full bg-slate-600 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-300 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md border-none outline-none" />
                        {errors.email && touched.email ? (
                            <span className="text-red-600 text-sm">{errors.email}</span>
                        ) : null}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <div className='w-full flex justify-between items-center px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600'>
                            <input
                                type={change}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full  outline-none" />
                            <p className='hover:cursor-pointer' onClick={handleShow}>
                                {
                                    password ? <FaEye size={'20px'} /> : <FaEyeLowVision size={'20px'} />
                                }
                            </p>
                        </div>
                        {errors.password && touched.password ? (
                            <span className="text-red-600 text-sm">{errors.password}</span>
                        ) : null}
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                        {Loading ? <Loader /> : 'Sign in'}
                    </button>
                </form>
                <p className="flex justify-center gap-2 text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to="/SignUp" >  <span className="underline dark:text-gray-800">
                        Sign up
                    </span>  </Link>
                </p>
            </div>
        </div>

    )
}

export default Login