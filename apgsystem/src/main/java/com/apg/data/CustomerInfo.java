package com.apg.data;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerInfo {

    private String customerID;
    private LocalDate addDate;
    private String chinName;
    private String engName;
    private String nature;
    private String contactPerson;
    private String contactNumber;
    private String address;
    private String deposit;
    private String remark;
    private CustomerStatus status;

}
