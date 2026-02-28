import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaShoppingBag, FaMoneyBill } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-xl font-bold border-b">KB Dashboard</div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/dashboard"
            end
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-100"
          >
            <FaUser /> Overview
          </NavLink>

          <NavLink
            to="/dashboard/orders"
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-100"
          >
            <FaShoppingBag /> Orders
          </NavLink>

          <NavLink
            to="/dashboard/payments"
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-100"
          >
            <FaMoneyBill /> Payment History
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
