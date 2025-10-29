import { useContext } from "react";
import { Context } from "../../../ContextApi/SetContext";

const Profile = () => {
  const { user, loading } = useContext(Context);
  console.log(user);
  if (loading) {
    return <p>Loading......</p>;
  }
  return (
    <div className="min-h-screen mt-24">
      <div className=" flex flex-col bg-pink-400 mx-56 my-28 p-20 ">
        {/* <img src={user?.photoURL || "photo not found"} alt="" srcset="" /> */}
        <h2 className="text-center text-3xl font-semibold text-purple-600 border-b-2">User Profile</h2>
        <p className="ml-5 mt-5"> <span className="text-xl font-semibold">Name :</span> {user?.displayName || "No display name"}</p>
        <p className="ml-5 mt-4"><span className="text-xl font-semibold">Email Adress :</span> {user?.email}</p>
         <p className="ml-5 mt-4"><span className="text-xl font-semibold">Created Time :</span> {user.metadata.creationTime}</p>  
         <button className="bg-blue-400 mx-auto mt-9 px-5 py-2 rounded-xl">Updated Profile</button>
      </div>
    </div>
  );
};

export default Profile;
