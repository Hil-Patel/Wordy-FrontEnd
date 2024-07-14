import axios from "axios";

const base_url="http://localhost:8000"

export const LogInApi= async(values)=>{
    try {
        const res = await axios.post(base_url+"/login", {
          email: values.email,
          password: values.password,
        });
        return {success:true,data:res.data};
      } catch (error) {
        return {success:false,message:error.message};
      }
}

export const SignUpApi= async(values)=>{
    try {
        const res = await axios.post(base_url+"/signup", {
            userName: values.username,
            email: values.email,
            password: values.password,
          });
        return {success:true,data:res.data};
      } catch (error) {
        return {success:false,message:error.message};
      }
}

export const ForgetPassword=async(values)=>{
    try {
        const res=await axios.post(base_url+"/forget",{
            email:values.email,
        })
        return {success:true,data:res.data}
    } catch (error) {
        return {success:false,message:error.message}
    }
}