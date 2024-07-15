import React from "react";
import Navbar from "../component/Navbar";
import { useFormik } from "formik";
import {Reset} from "../schema/ResetPassword.js"
import { Resetpassword} from "../ApiEndPoints/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({setButtonClick}) => {
    const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema:Reset,
    onSubmit: async (values) => {
        const res=await Resetpassword(values)
        if (res.success) {
            toast.success(res.message);
            setButtonClick("Login");
            navigate("/authenticate")
          } else {
            toast.error(res.message);
          }

    },
  });
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-700 flex-grow flex justify-center items-center">
        <div className="w-1/3 py-8 bg-blue-100 dark:bg-gray-800 rounded text-black dark:text-white">
          <div className="text-center mb-5 font-bold">Reset Password</div>
          <form
            className="max-w-sm mx-auto"
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <div className="relative z-0 mb-3">
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="relative z-0 mb-5">
              <input
                type="password"
                name="confirmPassword"
                placeholder=""
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Confirm Password
              </label>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
