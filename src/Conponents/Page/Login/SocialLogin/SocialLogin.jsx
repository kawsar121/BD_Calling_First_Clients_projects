import React, { useContext } from "react";
import { Context } from "../../../../ContextApi/SetContext";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(Context);
  const navigate = useNavigate()
  // Google login
      const googleLogin = ()=>{
        googleSignIn()
        .then(result =>{
          console.log(result.user)
          navigate('/'); 
        })
        .catch(err=>{
          console.log(err.message)
        })
      }
  return (
    <div>
      <button
        onClick={googleLogin}
        className="bg-blue-400 text-white rounded-sm mt-2 px-2 py-2 flex items-center justify-center mx-32 whitespace-nowrap"
      >
        Google SignIn
      </button>
    </div>
  );
};

export default SocialLogin;
