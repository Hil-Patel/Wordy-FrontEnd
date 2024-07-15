import { useFormik } from "formik";
import axios from "axios";
import { Login } from "../schema/LogInSchema.js";
import { LogInApi, ForgetPassword } from "../ApiEndPoints/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthenticationLogin = ({ setOpenPage, setToken, token }) => {
  const navigate = useNavigate();
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

  const handleForgetPassword = async () => {
    console.log(formik.values.email);

    if (formik.values.email) {
      const res = await ForgetPassword(formik.values.email);
      if (res.success) {
        toast.success(res.data.message);
        setToken(res.data.resetPasswordToken);
        localStorage.setItem("ResetToken",res.data.resetPasswordToken)
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error("Email is required");
    }
  };
  return (
    <div className="w-1/2 my-auto">
      <div className="text-center mb-5 font-bold">LOG IN</div>
      <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="relative z-0 mb-3">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="relative z-0 mb-5">
          
          <input
            type="password"
            name="password"
            placeholder=""
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
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center mb-3 ">
            Don't have Account?{" "}
            <div
              className="text-blue-800 dark:text-blue-400 ml-2 cursor-pointer"
              onClick={() => {
                setOpenPage("SignUp");
              }}
            >
              Sign Up
            </div>
          </div>
          <div
            className="mr-2 text-blue-800 dark:text-blue-400 cursor-pointer"
            onClick={() => {
              handleForgetPassword();
            }}
          >
            Forget Password?
          </div>
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
