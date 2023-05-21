import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "./Routes/Routes";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </>
);
