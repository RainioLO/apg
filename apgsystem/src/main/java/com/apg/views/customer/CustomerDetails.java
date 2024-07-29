package com.apg.views.customer;

import com.apg.views.MainLayout;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterListener;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;
import org.aspectj.lang.annotation.Before;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@PermitAll
@PageTitle("APG | Customer Details")
@Route(value = "customer-details", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class CustomerDetails extends EditCustomer implements BeforeEnterListener {

    private static String detailsCustomerID;
    private static String detailsCustomerName;

    public CustomerDetails() {
        setWidth("1000px");
        setMargin(true);
        addClassName("edit-customer-view");
        setAlignItems(Alignment.STRETCH);
        buildUI();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        Map<String, List<String>> params = event.getLocation().getQueryParameters().getParameters();
        detailsCustomerID = extractParam(params, "customerID").orElse("");
        detailsCustomerName = extractParam(params, "chinName").orElse("");
    }

    @Override
    public void configureTop() {
        super.configureTop();  // Call the superclass method if you want to retain its functionality
        header.setText("APG - Customer List");
    }

    private Optional<String> extractParam(Map<String, List<String>> params, String paramName) {
        return params.containsKey(paramName) ? Optional.of(params.get(paramName).get(0)) : Optional.empty();
    }

    private ResultSet getCustomerList(Connection conn, String detailsCustomerID, String detailsCustomerName) throws SQLException {
        String tableName = "customer_table";
        String query = "SELECT * FROM " + tableName +
                " WHERE customerID = ? AND chinName = ?" +
                " ORDER BY addDate DESC";
        // Using try-with-resources to ensure the PreparedStatement is closed after use
        try (PreparedStatement pstmt = conn.prepareStatement(query)) {
            // Set the parameters for the prepared statement
            pstmt.setString(1, detailsCustomerID);
            pstmt.setString(2, detailsCustomerName);
            // Execute the query and return the result set
            return pstmt.executeQuery();
        } // The PreparedStatement is automatically closed here due to try-with-resources
    }


}
