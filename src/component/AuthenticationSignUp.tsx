import axios from "axios";
import { useFormik } from "formik";
import { SignUp } from "../schema/SignUpSchema";
import {
  SignUpApi,
  preVerifyEmail,
  verifyEmail,
} from "../ApiEndPoints/index.js";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationSignUp = ({ setOpenPage, setLoading }) => {
  const [EmailVerified, setEmailVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: SignUp,
    onSubmit: async (values) => {
      setLoading(true);
      const res = await SignUpApi(values);
      if (res.success) {
        toast.success(res.message);
        setOpenPage("Login");
      } else {
        toast.error(res.message);
      }
      setLoading(false);
    },
  });

  const handleVerifyEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    const ress = await verifyEmail(formik.values.email);
    if (ress.success) {
      if (ress.data.verified) {
        setEmailVerified(true);
        toast.success(ress.data.message);

      } else {
        const res = await preVerifyEmail(formik.values.email);
        if (res.success) {
          if (res.data.verified) {
            setEmailVerified(true);
            toast.success(res.data.message);
          } else {
            toast.success(res.data.message);
            navigate("/verify-Email");
          }
        } else {
          toast.error(res.message);
        }
      }
    }else {
      toast.error(ress.message);
    }

    setLoading(false);
  };

  const checkEmail = async () => {
    const res = await verifyEmail(formik.values.email);
    if (res.success) {
      if (res.data.verified) {
        setEmailVerified(true);
        toast.success(res.data.message);
      }
    } else {
      toast.error(res.message);
    }
  };
  useEffect(() => {
    if (formik.values.email && !formik.errors.email) {
      console.log("caught");

      setLoading(true);
      checkEmail();
      setLoading(false);
    }
  }, []);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-1/2 my-auto">
      <div className="text-xl text-center mb-5 font-bold">SIGN UP</div>
      <form
        className="max-w-sm mx-auto"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div className="relative z-0 mb-3">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            disabled={EmailVerified}
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
          ) : EmailVerified ? (
            <div className="text-xs text-green-500">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#29ff37" }}
                className="mr-1 mt-1"
              />
              Email is verified
            </div>
          ) : (
            <div className="text-xs text-red-500">
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: "#ff0000" }}
                className="mr-1 mt-1"
              />
              Email is not verified
            </div>
          )}
        </div>
        <div className="relative z-0 mb-3">
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              EmailVerified ? null : "cursor-not-allowed"
            } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=""
            disabled={!EmailVerified}
          />
          <label
            htmlFor="username"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Username
          </label>
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.username}
            </div>
          ) : null}
        </div>
        <div className="relative z-0 mb-3">
          <input
            type={showPassword?"text":"password"}
            name="password"
            placeholder=""
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              EmailVerified ? null : "cursor-not-allowed"
            } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            disabled={!EmailVerified}
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
          <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1 mt-4 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 focus:outline-none"
              >
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </button>
        </div>
        <div className="relative z-0 mb-5">
          <input
            type={showConfirmPassword?"text":"password"}
            name="confirmpassword"
            placeholder=""
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              EmailVerified ? null : "cursor-not-allowed"
            } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            disabled={!EmailVerified}
          />
          <label
            htmlFor="confirmpassword"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Confirm password
          </label>
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.confirmpassword}
            </div>
          ) : null}
          <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-0 top-1 mt-4 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 focus:outline-none"
              >
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </button>
        </div>
        <div className="flex items-center mb-3 text-xs">
          Already have Account?{" "}
          <div
            className="text-blue-800 dark:text-blue-400 ml-2 cursor-pointer"
            onClick={() => {
              setOpenPage("Login");
            }}
          >
            Login
          </div>
        </div>
        <button
          type="submit"
          className={`${
            EmailVerified ? "block" : "hidden"
          } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          Sign Up
        </button>
        <button
          onClick={(e) => {
            handleVerifyEmail(e);
          }}
          className={`${
            EmailVerified ? "hidden" : "block"
          } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default AuthenticationSignUp;
