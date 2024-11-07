lklkpackage com.ust.wastebin_service.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "bins")
public class Bin {
    @Id
    private String id;  
    private String binId; 
    private Location location; 
    private Address address; 
    private Double fillLevel; 
    private String type; 
    private Boolean alerts; 

    @Data
    public static class Location {
        private Double latitude;
        private Double longitude;
    }

    @Data
    public static class Address {
        private String street;
        private String city;
        private String state;
        private String zipCode;
    }
}
