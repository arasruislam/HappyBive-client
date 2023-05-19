import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "./Routes/Routes";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
