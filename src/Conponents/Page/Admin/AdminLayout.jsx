import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBox, FaUsers, FaMoneyBill, FaShoppingCart } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-black text-white hidden md:block">
        <div className="p-6 text-xl font-bold border-b border-gray-700">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <NavLink to="/admin" end className="block p-3 rounded hover:bg-gray-800"><FaHome /> Dashboard</NavLink>
          <NavLink to="/admin/orders" className="block p-3 rounded hover:bg-gray-800"><FaShoppingCart /> Orders</NavLink>
          <NavLink to="/admin/payments" className="block p-3 rounded hover:bg-gray-800"><FaMoneyBill /> Payments</NavLink>
          <NavLink to="/admin/products" className="block p-3 rounded hover:bg-gray-800"><FaBox /> Products</NavLink>
          <NavLink to="/admin/users" className="block p-3 rounded hover:bg-gray-800"><FaUsers /> Users</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6"><Outlet /></main>
    </div>
  );
};

export default AdminLayout;