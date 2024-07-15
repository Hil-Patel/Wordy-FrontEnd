import axios from 'axios';
import { useFormik } from 'formik';
import {SignUp} from "../schema/SignUpSchema"
import {SignUpApi} from "../ApiEndPoints/index.js"
import { toast } from 'react-toastify';

const AuthenticationSignUp = ({ setOpenPage,setLoading }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema:SignUp,
    onSubmit: async (values) => {
      setLoading(true)
      const res=await SignUpApi(values)
      setLoading(false)
      if(res.success){
        toast.success(res.message)
        setOpenPage("Login")
      }
      else{
        toast.error(res.message)
      }
    },
  });

  return (
    
    <div className='w-1/2 my-auto'>
      <div className="text-center mb-5 font-bold">SIGN UP</div>
      <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="relative z-0 mb-3">
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            htmlFor="username"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
             Username
          </label>
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="relative z-0 mb-3">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="relative z-0 mb-3">
          <input
            type="password"
            name="password"
            placeholder=''
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="relative z-0 mb-5">
          <input
            type="password"
            name="confirmpassword"
            placeholder=''
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="confirmpassword"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Confirm password
          </label>
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.confirmpassword}</div>
          ) : null}
        </div>
        <div className="flex items-center mb-3 text-xs">
          Already have Account?{' '}
          <div
            className="text-blue-800 dark:text-blue-400 ml-2 cursor-pointer"
            onClick={() => {
              setOpenPage('Login');
            }}
          >
            Login
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AuthenticationSignUp;
