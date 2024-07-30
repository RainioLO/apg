package com.apg.data;

public enum CustomerStatus {
    CONTACTED("Contacted"),
    ACTIVE("Active"),
    INACTIVE("Inactive"),
    SUSPENDED("Suspended");

    private final String description;

    CustomerStatus (String description){
        this.description = description;
    }

    // Getter to retrieve the description
    public String getDescription() {
        return description;
    }

    public static CustomerStatus fromDescription(String description) {
        for (CustomerStatus status : CustomerStatus.values()) {
            if (status.getDescription().equalsIgnoreCase(description)) {
                return status;
            }
        }
        throw new IllegalArgumentException("No constant with description " + description + " found");
    }
}
