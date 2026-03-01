import { useContext, useState } from "react";
import { Context } from "../../../ContextApi/SetContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "./SocialLogin/SocialLogin";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { loginUser } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const [email, setEmail] = useState("");
  
  const auth = getAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          alert("Login Successful");

          // JWT token generate
          axios
            .post(
              "https://bd-calling-first-project-backend.vercel.app/jwt",
              { email },
              { withCredentials: true },
            )
            .then(async () => {
              // Admin check
              const res = await axios.get(
                `https://bd-calling-first-project-backend.vercel.app/admin/check-admin?email=${email}`,
                { withCredentials: true },
              );

              if (res.data.isAdmin) {
                navigate("/admin", { replace: true });
              } else {
                navigate("/dashboard", { replace: true });
              }
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert("Login failed!");
      });
  };

  const handleResetPassword = () => {
    if (!email) return alert("Please enter your email first");
    sendPasswordResetEmail(auth, email)
      .then(() => alert("Password reset email sent! Check your inbox."))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4CB] px-4 ">
      <div className="bg-white shadow-2xl mt-24 rounded-2xl w-3/4 max-w-md py-20 px-10 lg:mb-10">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Log In
        </h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-gray-900"
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

        {/* Forgot Password */}
        <p
          onClick={handleResetPassword}
          className="text-sm text-purple-600 mt-3 cursor-pointer hover:underline text-center"
        >
          Forgot Password?
        </p>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;