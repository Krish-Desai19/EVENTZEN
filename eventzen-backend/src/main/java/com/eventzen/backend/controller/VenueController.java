package com.eventzen.backend.controller;

import com.eventzen.backend.model.Venue;
import com.eventzen.backend.repository.VenueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/venues")
@RequiredArgsConstructor
public class VenueController {
    private final VenueRepository venueRepository;

    @GetMapping
    public ResponseEntity<?> getAllVenues() {
        try {
            List<Venue> venues = venueRepository.findAll();
            if (venues.isEmpty()) {
                return ResponseEntity.status(404).body("No venues found.");
            }
            return ResponseEntity.ok(venues);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching venues: " + e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addVenue(@RequestBody Venue venue) {
        try {
            Venue savedVenue = venueRepository.save(venue);
            return ResponseEntity.ok(savedVenue);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error saving venue: " + e.getMessage());
        }
    }

    // API to mark a venue as booked
    @PutMapping("/{id}/book")
    public ResponseEntity<?> bookVenue(@PathVariable Long id) {
        try {
            Optional<Venue> optionalVenue = venueRepository.findById(id);
            if (optionalVenue.isEmpty()) {
                return ResponseEntity.status(404).body("Venue not found.");
            }

            Venue venue = optionalVenue.get();
            if (venue.isBooked()) {
                return ResponseEntity.status(400).body("The venue has already been booked.");
            }

            venue.setBooked(true); // Mark as booked
            venueRepository.save(venue);
            return ResponseEntity.ok("Thank you for booking with us, you have booked the venue.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error booking venue: " + e.getMessage());
        }
    }
}
