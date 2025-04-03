package com.eventzen.backend.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder  // <-- ADD THIS
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String location;
    private int capacity;
    private boolean isBooked;  // New field to track booking status

    @ManyToOne
    @JoinColumn(name = "vendor_id")
    @JsonIgnoreProperties("venues")  // Prevents infinite loop when fetching venues
    private Vendor vendor;
}
