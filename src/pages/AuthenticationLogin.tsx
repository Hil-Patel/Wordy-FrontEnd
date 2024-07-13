import React from 'react'
import Navbar from '../component/Navbar'
import { useFormik } from 'formik';
import axios from 'axios';

const AuthenticationLogin = () => {
    const formik=useFormik({
        initialValues: {
          email:"",
          password: "",
        },
        onSubmit: async (values) => {
            const res= await axios.post("http://localhost:8000/login",
                {
                    email:values.email,
                    password:values.password,
                })
        },
      });
  return (
    <div>
      <Navbar/>
      <form onSubmit={formik.handleSubmit}>
       <input type="email"
      name='email'
      value={formik.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder='email'
       />
       <input type="text"
      name='password'
      value={formik.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder='password'
       />
       <button type='submit' className='bg-gray-200 p-2'>log in</button>

      </form>
    </div>
  )
}

export default AuthenticationLogin
