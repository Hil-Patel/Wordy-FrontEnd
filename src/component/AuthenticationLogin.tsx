import { useFormik } from "formik";
import axios from "axios";
import { Login } from "../schema/LogInSchema.js";
import { LogInApi,ForgetPassword } from "../ApiEndPoints/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthenticationLogin = ({ setOpenPage ,setToken,token}) => {
  const navigate =useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Login,
    onSubmit: async (values) => {
      const res = await LogInApi(values);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    },
  });

  const handleForgetPassword=async()=>{
    console.log(formik.values.email);
    
    if(formik.values.email){
      const res=await ForgetPassword(formik.values.email)
      if (res.success) {
        toast.success(res.message)
        setToken(res.resetPasswordToken)
        navigate(`/reset/${token}`)
      }
      else{
        toast.error(res.message)
      }
    }
    else{
      toast.error("Email is required")
    }
  }
  return (
    <div className="w-1/2 my-auto">
      <div className="text-center mb-5 font-bold">LOG IN</div>
      <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`bg-gray-50 border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="name@flowbite.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            placeholder="******"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`bg-gray-50 border ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center mb-3 ">
            Don't have Account?{" "}
            <div
              className="text-blue-400 ml-2 cursor-pointer"
              onClick={() => {
                setOpenPage("SignUp");
              }}
            >
              Sign Up
            </div>
          </div>
          <div className="mr-2 text-blue-400 cursor-pointer" onClick={()=>{handleForgetPassword()}}>Forget Password?</div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthenticationLogin;
