import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authenticated"); // Remove login status
        navigate("/"); // Redirect to login
    };

    return (
        <nav style={{ background: "#333", padding: "10px", textAlign: "center" }}>
            <Link to="/home" style={navLinkStyle}>Home</Link>
            <Link to="/about" style={navLinkStyle}>About</Link>
            <Link to="/venues" style={navLinkStyle}>Venues</Link>
            <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
        </nav>
    );
}

const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px"
};

const logoutButtonStyle = {
    marginLeft: "20px",
    padding: "8px 12px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
};

export default Navbar;
