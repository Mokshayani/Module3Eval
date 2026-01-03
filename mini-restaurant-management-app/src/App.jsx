import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
    return (
      <Routes>
        <Route path="/admin/restaurants/update/:id" element={
          <PrivateRoute role="admin">
            <UpdateRestaurant />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="/customer/dashboard" element={
          <PrivateRoute role="customer">
            <CustomerDashboard />
          </PrivateRoute>
        } />
      </Routes>
    );
}

export default App;