import { useContext } from "react";
import { Context } from "../../../ContextApi/SetContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signUpUser } = useContext(Context);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = form.profile.value;
    const singUpData = { name, email, password, profile };
    console.log(singUpData);
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          alert("SuccessFully SignUp Complete");
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
      
    
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400  to-pink-400 px-4 ">
      <div className="bg-white mt-24 shadow-2xl rounded-2xl w-3/4 max-w-md p-8 mb-10">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="url"
              name="profile"
              placeholder="https://example.com/profile.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-gray-900"
            />
          </div>

          <div>
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
              value="Sign Up"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md cursor-pointer transition duration-300"
            />
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
