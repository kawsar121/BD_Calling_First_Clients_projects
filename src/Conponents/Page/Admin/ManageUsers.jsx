import { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("https://bd-calling-first-project-backend.vercel.app/admin/users", { withCredentials: true })
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => { fetchUsers(); }, []);

  const makeAdmin = (id) => {
    axios.patch(`https://bd-calling-first-project-backend.vercel.app/admin/users/${id}`, { role: "admin" }, { withCredentials: true })
      .then(() => fetchUsers());
  };

  const blockUser = (id) => {
    axios.patch(`https://bd-calling-first-project-backend.vercel.app/admin/users/${id}`, { blocked: true }, { withCredentials: true })
      .then(() => fetchUsers());
  };

  const deleteUser = (id) => {
    axios.delete(`https://bd-calling-first-project-backend.vercel.app/admin/users/${id}`, { withCredentials: true })
      .then(() => fetchUsers());
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      {users.map(user => (
        <div key={user._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <p><b>{user.name}</b></p>
            <p>{user.email}</p>
            <p>Role: {user.role || "user"}</p>
            <p>Status: {user.blocked ? "Blocked" : "Active"}</p>
          </div>
          <div className="flex gap-2">
            {!user.blocked && <button onClick={()=>blockUser(user._id)} className="px-3 py-1 bg-yellow-500 text-white rounded">Block</button>}
            {user.role !== "admin" && <button onClick={()=>makeAdmin(user._id)} className="px-3 py-1 bg-green-500 text-white rounded">Make Admin</button>}
            <button onClick={()=>deleteUser(user._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;