import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className=' bg-gray-800 text-white min-h-screen'>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};