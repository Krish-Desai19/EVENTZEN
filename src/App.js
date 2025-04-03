import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";  // Home.js (with uppercase H)
import About from "./pages/About";
import Venues from "./pages/Venues";
import Payment from "./pages/Payment"; // Import Payment page

function PrivateRoute({ children }) {
    return localStorage.getItem("authenticated") === "true" ? children : <Navigate to="/" />;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
                <Route path="/venues" element={<PrivateRoute><Venues /></PrivateRoute>} />
                <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />  {/* Added Payment Route */}
            </Routes>
        </Router>
    );
}

export default App;
