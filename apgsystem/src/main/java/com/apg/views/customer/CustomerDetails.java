package com.apg.views.customer;

import com.apg.data.CustomerStatus;
import com.apg.utils.DatabaseConfig;
import com.apg.views.MainLayout;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterListener;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;
import org.aspectj.lang.annotation.Before;

import java.math.BigDecimal;
import java.sql.*;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@PermitAll
@PageTitle("APG | Customer Details")
@Route(value = "customer-details", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class CustomerDetails extends VerticalLayout implements BeforeEnterListener {

    private static String detailsCustomerID;
    private static String detailsCustomerName;

    HorizontalLayout top = new HorizontalLayout();

    protected TextField customerIDField = new TextField();
    protected TextField chinNameField = new TextField();
    protected TextField engNameField = new TextField();
    // Nature box
    protected ComboBox<String> natureBox = new ComboBox<>("Nature");
    protected TextField contactPersonField = new TextField();
    protected TextField contactNumberField = new TextField();
    protected TextArea addressArea = new TextArea();
    protected NumberField depositField = new NumberField();
    protected TextArea remarkArea = new TextArea();
    protected ComboBox<String> statusBox = new ComboBox<>("Customer Status");
    protected DatePicker addDatePicker = new DatePicker();
    protected H3 header = new H3(); //header 3

    private static String customerID = "NA";
    private static LocalDate addDate = LocalDate.now();
    private static String chinName = "NA";
    private static String engName = "NA";
    private static String nature = "NA";
    private static String contactPerson = "NA";
    private static String contactNumber = "NA";
    private static String address = "NA";
    private static Double deposit = 0d;
    private static String remark = "NA";
    private CustomerStatus status = CustomerStatus.ACTIVE;
    
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


    private Optional<String> extractParam(Map<String, List<String>> params, String paramName) {
        return params.containsKey(paramName) ? Optional.of(params.get(paramName).get(0)) : Optional.empty();
    }

    private ResultSet getCustomerList(Connection conn, String detailsCustomerID, String detailsCustomerName) throws SQLException {
        String tableName = "customer_table";
        String query = "SELECT * FROM " + tableName +
                " WHERE customerID = ? AND chinName = ?" +
                " LIMIT 1";
        // Using try-with-resources to ensure the PreparedStatement is closed after use
        try (PreparedStatement pstmt = conn.prepareStatement(query)) {
            // Set the parameters for the prepared statement
            pstmt.setString(1, detailsCustomerID);
            pstmt.setString(2, detailsCustomerName);
            // Execute the query and return the result set
            return pstmt.executeQuery();
        } // The PreparedStatement is automatically closed here due to try-with-resources
    }

    protected void buildUI() {
        configureTop();
        System.out.println("Setting the information ......");
        setInformation();
        System.out.println(detailsCustomerID + ": " + detailsCustomerName);
        System.out.println("Information set ......");
        configureCustomerInfo();
        System.out.println("Customer ID: " + customerID);
        buildView();
    }

    protected void configureTop() {
        header.setText("APG - Customer Details");
        header.setWidth("100%");
        top.setDefaultVerticalComponentAlignment(Alignment.CENTER);
        top.add(header);
    }

    protected void buildView() {
        add(top);

        HorizontalLayout row1 = new HorizontalLayout();
        row1.setSizeFull();
        row1.add(customerIDField, statusBox, addDatePicker);
        row1.setFlexGrow(1, customerIDField, statusBox, addDatePicker);

        HorizontalLayout row2 = new HorizontalLayout();
        row2.setSizeFull();
        row2.add(chinNameField, engNameField);
        row2.setFlexGrow(1, chinNameField, engNameField);

        HorizontalLayout row3 = new HorizontalLayout();
        row3.setSizeFull();
        row3.add(natureBox, depositField);
        row3.setFlexGrow(1, natureBox, depositField);

        HorizontalLayout row4 = new HorizontalLayout();
        row4.setSizeFull();
        row4.add(contactPersonField, contactNumberField);
        row4.setFlexGrow(1, contactPersonField, contactNumberField);

        HorizontalLayout row5 = new HorizontalLayout();
        row5.setSizeFull();
        row5.add(addressArea);
        row5.setFlexGrow(1, addressArea);

        HorizontalLayout row6 = new HorizontalLayout();
        row6.setSizeFull();
        remarkArea.setWidth("50%");
        row6.add(remark);
//        row6.setFlexGrow(1, remark);

        add(row1, row2, row3, row4, row5, row6);
    }

    protected void configureCustomerInfo() {
        configureCustomerID();
        configureAddDate();
        configureChinName();
        configureEngName();
        configureNature();
        configureContactPerson();
        configureContactNumber();
        configureAddress();
        configureDeposit();
        configureRemarks();
        configureStatus();
    }

    private void setInformation(){
        try (Connection conn = DriverManager.getConnection(DatabaseConfig.url, DatabaseConfig.username, DatabaseConfig.password)) {
            ResultSet customerInfo = getCustomerList(conn, detailsCustomerID, detailsCustomerName);
            System.out.println(customerInfo.first());
            if (customerInfo.next()) {  // Ensure there is a record to read !!!
                customerID = customerInfo.getString("customerID");
                addDate = customerInfo.getDate("addDate").toLocalDate();
                chinName = customerInfo.getString("chinName");
                engName = customerInfo.getString("engName");
                nature = customerInfo.getString("nature");
                contactPerson = customerInfo.getString("contactPerson");
                contactNumber = customerInfo.getString("contactNumber");
                address = customerInfo.getString("address");
                deposit = customerInfo.getDouble("deposit");
                remark = customerInfo.getString("remark");
                status = CustomerStatus.fromDescription(customerInfo.getString("status"));
            } else {
                throw new SQLException("No data found for provided details.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void configureStatus() {
        statusBox.setLabel("Status of Customer");
        statusBox.setItems(Arrays.stream(CustomerStatus.values()).map(e -> e.getDescription()).collect(Collectors.toList()));
        statusBox.setPlaceholder("Please select a status");
        statusBox.setReadOnly(true);
        statusBox.setValue(status.getDescription());
    }

    protected void configureRemarks() {
        remarkArea.setLabel("Remarks");
        remarkArea.setMaxLength(150);
        remarkArea.setValueChangeMode(ValueChangeMode.EAGER);
        remarkArea.addValueChangeListener(e -> { // Listener , change of the word count
            e.getSource().setHelperText(e.getValue().length() + "/" + 140);
        });
        remarkArea.setPlaceholder("If any ...");
        remarkArea.setReadOnly(true);
        remarkArea.setValue(remark);
    }

    protected void configureDeposit() {
        depositField.setLabel("Assigned Deposit HKD$");
        depositField.setMin(0); // Set minimum value to 0
        depositField.setPlaceholder("Enter deposit amount");
        depositField.setReadOnly(true);
        depositField.setValue(deposit);
    }

    protected void configureAddress() {
        addressArea.setLabel("Address of Customer");
        addressArea.setMaxLength(150);
        addressArea.setValueChangeMode(ValueChangeMode.EAGER);
        addressArea.addValueChangeListener(e -> { // Listener , change of the word count
            e.getSource().setHelperText(e.getValue().length() + "/" + 140);
        });
        addressArea.setRequiredIndicatorVisible(true);
        addressArea.setRequired(true);
        addressArea.setPlaceholder("Type address here ...");
        addressArea.setReadOnly(true);
        addressArea.setValue(address);
    }

    protected void configureContactNumber() {
        contactNumberField.setLabel("Contact Number");
        contactNumberField.setRequired(true);
        contactNumberField.setRequiredIndicatorVisible(true);
        contactNumberField.setReadOnly(true);
        contactNumberField.setValue(contactNumber);
    }

    protected void configureContactPerson() {
        contactPersonField.setLabel("Contact Person");
        contactPersonField.setRequired(true);
        contactPersonField.setRequiredIndicatorVisible(true);
        contactPersonField.setReadOnly(true);
        contactPersonField.setValue(contactPerson);
    }

    protected void configureNature() {
        natureBox.setLabel("Nature of Customer");
        natureBox.setItems("Engineering", "Science", "Medical", "Beverage");
        natureBox.setPlaceholder("Please select a nature");
        natureBox.setReadOnly(true);
        natureBox.setValue(nature);
    }


    protected void configureEngName() {
        engNameField.setLabel("Customer Chinese Name");
        engNameField.setRequired(true);
        engNameField.setRequiredIndicatorVisible(true);
        engNameField.setReadOnly(true);
        engNameField.setValue(engName);

    }

    protected void configureChinName() {
        chinNameField.setLabel("Customer Chinese Name");
        chinNameField.setRequired(true);
        chinNameField.setRequiredIndicatorVisible(true);
        chinNameField.setReadOnly(true);
        chinNameField.setValue(chinName);
    }

    protected void configureAddDate() {
        addDatePicker.setLabel("Join Date");
        addDatePicker.setValue(LocalDate.now());
        addDatePicker.setRequired(true);
        addDatePicker.setRequiredIndicatorVisible(true);
        addDatePicker.setReadOnly(true);
        addDatePicker.setValue(addDate);
    }

    protected void configureCustomerID() {
        customerIDField.setLabel("Customer ID");
        customerIDField.setWidth("min-content");
        customerIDField.setReadOnly(true);
        customerIDField.setValue(customerID);
    }






}
