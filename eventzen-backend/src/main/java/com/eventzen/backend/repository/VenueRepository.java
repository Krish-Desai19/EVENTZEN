package com.eventzen.backend.repository;

import com.eventzen.backend.model.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
    
    @Transactional
    default void bookVenue(Long id) {
        Venue venue = findById(id).orElseThrow(() -> new RuntimeException("Venue not found"));
        if (!venue.isBooked()) {
            venue.setBooked(true);
            save(venue);
        } else {
            throw new RuntimeException("Venue is already booked");
        }
    }
}
