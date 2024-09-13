import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar></Navbar>
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
