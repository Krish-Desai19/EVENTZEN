package com.eventzen.backend.config;

import com.eventzen.backend.model.Venue;
import com.eventzen.backend.model.Vendor;
import com.eventzen.backend.repository.VenueRepository;
import com.eventzen.backend.repository.VendorRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader {

    private final VenueRepository venueRepository;
    private final VendorRepository vendorRepository;

    @PostConstruct
    public void loadData() {
        // Create sample vendor
        Vendor vendor1 = Vendor.builder()
                .name("Elite Caterers")
                .serviceType("Catering")
                .build();
        vendorRepository.save(vendor1);

        // Create sample venue linked to the vendor
        Venue venue1 = Venue.builder()
                .name("Grand Hall")
                .location("Downtown")
                .capacity(500)
                .vendor(vendor1)
                .build();
        venueRepository.save(venue1);
    }
}
