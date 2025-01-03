import { Outlet } from "react-router-dom";
import DataContextProvider from "./components/DataContext";

export default function App() {
  return (
    <DataContextProvider>
      <div className="bg-background-color min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </DataContextProvider>
  );
}
