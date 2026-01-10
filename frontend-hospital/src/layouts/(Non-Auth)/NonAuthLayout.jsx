import { Outlet } from "react-router-dom";

export default function NonAuthLayout() {
  return (
    <div className="bg-red-700 w-full min-h-screen flex justify-center items-center">
      {/* Navbar Kalo Ada */}
      <Outlet />
    </div>
  );
}
