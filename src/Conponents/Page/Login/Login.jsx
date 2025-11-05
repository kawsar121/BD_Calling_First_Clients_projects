import { useContext } from "react";
import { Context } from "../../../ContextApi/SetContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser,googleSignIn } = useContext(Context);
  const location = useLocation();
  // console.log('login',location)
  const navigate = useNavigate();
     const from = location.state?.from?.pathname || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const singInData = { email, password };
    console.log(singInData);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          alert("you are logIn");
          const users = {email:email}
          axios.post('https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app//jwt', users, {withCredentials:true})
          .then(result=>{
            console.log(result.data)
          })
        }
        // navigate(from)
        navigate(from, { replace: true }); 
      })
      .catch((error) => {
        console.log(error);
      });
      
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4CB] px-4 ">
      <div className="bg-white shadow-2xl mt-24 rounded-2xl w-3/4 max-w-md py-20 px-10 lg:mb-10">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-gray-900 "
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-gray-900"
            />
          </div>

          <div className="pt-2">
            <input
              type="submit"
              value="Sign In"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md cursor-pointer transition duration-300"
            />
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
