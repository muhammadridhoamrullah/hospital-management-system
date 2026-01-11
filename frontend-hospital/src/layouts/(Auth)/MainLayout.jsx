import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-green-700 w-full min-h-screen flex justify-center items-center">
      {/* Navbar */}
      <Outlet />
    </div>
  );
}
