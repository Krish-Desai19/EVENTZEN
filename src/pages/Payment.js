import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const venueName = new URLSearchParams(location.search).get("venue");

    const handlePayment = async () => {
        try {
            console.log("Fetching venue details...");
            
            // Step 1: Fetch all venues
            const response = await fetch("http://localhost:9091/api/venues");
            if (!response.ok) {
                console.error("Failed to fetch venues.");
                alert("Error fetching venues.");
                return;
            }

            const venues = await response.json();
            console.log("Venues fetched:", venues);

            // Step 2: Find the venue by name
            const venue = venues.find(v => v.name === venueName);
            if (!venue) {
                console.error("Venue not found:", venueName);
                alert("Venue not found.");
                return;
            }

            console.log("Selected Venue:", venue);

            // Step 3: Check if venue is already booked
            if (venue.booked) {
                alert("The venue has already been booked.");
                return;
            }

            // Step 4: Send booking request
            const bookResponse = await fetch(`http://localhost:9091/api/venues/${venue.id}/book`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
            });

            if (bookResponse.ok) {
                alert("Thank you for booking with us, you have booked the venue.");
                navigate("/venues"); // Redirect to venues page
            } else {
                const errorMessage = await bookResponse.text();
                console.error("Failed to book venue:", errorMessage);
                alert("Failed to book venue: " + errorMessage);
            }
        } catch (error) {
            console.error("Error booking venue:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Payment Page</h2>
            <p>You are booking: <strong>{venueName}</strong></p>
            <p>This is a demo payment page. No actual payment will be processed.</p>
            <button 
                onClick={handlePayment} 
                style={{ padding: "10px", fontSize: "16px", backgroundColor: "blue", color: "white" }}
            >
                Proceed to Pay
            </button>
        </div>
    );
}

export default Payment;
