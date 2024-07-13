import React from 'react'
import Navbar from '../component/Navbar'
import axios from "axios"
import {useFormik} from "formik"

const Authentication = () => {
    const formik=useFormik({
        initialValues: {
          username: "",
          email:"",
          password: "",
        },
        onSubmit: async (values) => {
            const res= await axios.post("http://localhost:8000/signup",
                {
                    userName:values.username,
                    email:values.email,
                    password:values.password,
                })
        },
      });
  return (
    <div>
      <Navbar/>
      <form onSubmit={formik.handleSubmit}>
      <input type="text"
      name='username'
      value={formik.username}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder='username'
       />
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
       <button type='submit' className='bg-gray-200 p-2'>sign in</button>

      </form>
    </div>
  )
}

export default Authentication
