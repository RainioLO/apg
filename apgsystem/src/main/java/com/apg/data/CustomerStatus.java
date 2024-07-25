package com.apg.data;

public enum CustomerStatus {
    CONTACTED("Customer has been contacted"),
    ACTIVE("Customer account is active"),
    INACTIVE("Customer account is inactive"),
    SUSPENDED("Customer account is suspended");

    private final String description;

    CustomerStatus (String description){
        this.description = description;
    }

    // Getter to retrieve the description
    public String getDescription() {
        return description;
    }

}
