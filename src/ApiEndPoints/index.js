import axios from "axios";

const base_url="http://localhost:8000"

export const LogInApi= async(values)=>{
    try {
        const res = await axios.post(base_url+"/login", {
          email: values.email,
          password: values.password,
        });
        return {success:true,message:res.data.message};
      } catch (error) {
        return {success:false,message:error.response.data.message};
      }
}

export const SignUpApi= async(values)=>{
    try {
        const res = await axios.post(base_url+"/signup", {
            userName: values.username,
            email: values.email,
            password: values.password,
          });
        return {success:true,message:res.data.message};
      } catch (error) {
        return {success:false,message:error.response.data.message};
      }
}

export const ForgetPassword=async(values)=>{
    try {
        const res=await axios.post(base_url+"/forget",{
            email:values,
        })
        return {success:true,data:res.data}
    } catch (error) {
      console.log(error);
        return {success:false,message:error.response.data.message}
    }
}

export const Resetpassword=async(values)=>{
  try {
    const token = localStorage.getItem("ResetToken");
    localStorage.setItem("ResetToken","");
    const res=await axios.post(base_url+"/reset/"+token,{
      password:values.password
    })
    return {success:true,message:res.data.message};
  } catch (error) {
    return {success:false,message:error.response.data.message};
  }
}

export const preVerifyEmail=async(values)=>{
  try {
    localStorage.setItem("EmailToVerify",values.email)
    const res=await axios.post(base_url+"/",{
      email:values.email
    })
    return {success:true,data:res.data}
  } catch (error) {
    return {success:false,message:error.response.data.message}
  }
}
export const postVerifyEmail=async(otp)=>{
  try {
    const storedEmail =localStorage.getItem("EmailToVerify")
    const res=await axios.post(base_url+"/",{
      email:storedEmail,
      OTP:otp
    })
    return {success:true,message:res.data.message}
  } catch (error) {
    return {success:false,message:error.response.data.message}
  }
}