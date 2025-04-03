import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Used to redirect after login

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "customer" && password === "eventzen") {
            localStorage.setItem("authenticated", "true"); // Save login status
            navigate("/home"); // Redirect to home page
        } else {
            alert("Invalid username or password. Try again.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1><strong>EVENTZEN</strong></h1>
            <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "200px" }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "200px" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ padding: "10px", width: "220px", background: "blue", color: "white", border: "none", cursor: "pointer" }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
