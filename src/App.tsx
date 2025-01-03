import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-amber-100 min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}
