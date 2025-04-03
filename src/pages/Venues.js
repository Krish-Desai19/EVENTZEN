import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Venues() {
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9091/api/venues")
            .then((response) => response.json())
            .then((data) => {
                // Remove duplicates by checking unique names
                const uniqueVenues = [];
                const seenNames = new Set();

                data.forEach(venue => {
                    if (!seenNames.has(venue.name)) {
                        seenNames.add(venue.name);
                        uniqueVenues.push(venue);
                    }
                });

                setVenues(uniqueVenues);
            })
            .catch((error) => console.error("Error fetching venues:", error));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Available Venues</h1>
            {venues.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {venues.map((venue) => (
                        <li key={venue.id} style={{ marginBottom: "15px" }}>
                            {venue.isBooked ? (  // ✅ Fixed field name
                                <span style={{ color: "gray", fontSize: "18px" }}>
                                    <strong>{venue.name}</strong> - {venue.location} (Capacity: {venue.capacity}) 
                                    <span style={{ color: "red", marginLeft: "10px" }}>(Booked)</span>
                                </span>
                            ) : (
                                <Link 
                                    to={`/payment?venue=${encodeURIComponent(venue.name)}`} 
                                    style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}
                                >
                                    <strong>{venue.name}</strong> - {venue.location} (Capacity: {venue.capacity})
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No venues available.</p>
            )}
        </div>
    );
}

export default Venues;
