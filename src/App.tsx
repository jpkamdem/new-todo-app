import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-background-color min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}
