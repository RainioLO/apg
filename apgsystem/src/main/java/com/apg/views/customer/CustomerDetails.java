package com.apg.views.customer;

import com.apg.data.CustomerStatus;
import com.apg.utils.DatabaseConfig;
import com.apg.views.MainLayout;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.*;
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

import static com.apg.utils.DatabaseConfig.getTomcatName;

@PermitAll
@PageTitle("APG | Customer Details")
@Route(value = "customer-details", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class CustomerDetails extends VerticalLayout implements BeforeEnterObserver {

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

    private Button backButton = new Button("Back");
    private Button editButton = new Button("Edit");
    private Button confirmButton = new Button("Confirm");
    private Button cancelButton = new Button("Cancel");

    private Button yesButton = new Button("Yes");

    public CustomerDetails() {
        setWidth("1000px");
        setMargin(true);
        addClassName("edit-customer-view");
        setAlignItems(Alignment.STRETCH);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        Map<String, List<String>> params = event.getLocation().getQueryParameters().getParameters();
        detailsCustomerID = extractParam(params, "id").orElse("");
        detailsCustomerName = extractParam(params, "name").orElse("");
        buildUI(); // set in the beforeEnter
    }


    private Optional<String> extractParam(Map<String, List<String>> params, String key) {
        if (params != null && params.containsKey(key) && !params.get(key).isEmpty()) {
            return Optional.of(params.get(key).get(0));
        }
        return Optional.empty();
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
        setInformation();
        configureCustomerInfo();
        configureButtons();
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
        row6.add(remarkArea);

        add(row1, row2, row3, row4, row5, row6, createButtons());
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

    private HorizontalLayout createButtons(){
        HorizontalLayout buttonLayout = new HorizontalLayout();
        buttonLayout.setSizeFull();
        buttonLayout.setAlignItems(FlexComponent.Alignment.END);
        buttonLayout.setJustifyContentMode(JustifyContentMode.END);
        buttonLayout.add(editButton, backButton, confirmButton, cancelButton);
        return  buttonLayout;
    }

    private void configureButtons(){
        setupFieldListeners();
        configureBackButton();
        configureEditButton();
        configureConfirmButton();
        configureCancelButton();
    }

    private void configureBackButton() {
        backButton.addClickListener(event -> {
            UI.getCurrent().getPage().setLocation(getTomcatName("/"));
        });
        backButton.addClassName("cursor-pointer");
    }

    private void configureEditButton(){
        editButton.addClassName("cursor-pointer");
        editButton.addClickListener(click -> editEvent());
    }

    private void configureConfirmButton(){
        confirmButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);
        confirmButton.setVisible(false);
        confirmButton.setEnabled(false);
        confirmButton.addClassName("cursor-pointer");
        confirmButton.addClickListener(click -> confirmEvent());
    }

    private void configureCancelButton(){
        cancelButton.setVisible(false);
        cancelButton.addClassName("cursor-pointer");
        cancelButton.addClickListener(event -> {
            UI.getCurrent().getPage().setLocation(getTomcatName("/"));
        });
    }

    private void confirmEvent(){
        // Create a new confirmation dialog
        Dialog confirmDialog = new Dialog();
        confirmDialog.setCloseOnEsc(false);
        confirmDialog.setCloseOnOutsideClick(false);

        // Create layout and components for the dialog
        VerticalLayout layout = new VerticalLayout();
        Text message = new Text("Are you sure you want to proceed?");
        yesButton.addClickListener(event -> {
            confirmDialog.close();
            editSaveAction(); // This method should handle what happens after confirmation
        });
        yesButton.setEnabled(false);
        yesButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);

        Button noButton = new Button("No", event -> confirmDialog.close());
        noButton.addThemeVariants(ButtonVariant.LUMO_ERROR);

        PasswordField passwordField = new PasswordField();
        HorizontalLayout passwordLayout = new HorizontalLayout();
        passwordField.setLabel("Password");
        passwordField.setPlaceholder("Password to process ....");
        passwordField.addValueChangeListener(event -> {
            yesButton.setEnabled("#@admin".equals(passwordField.getValue()));
        });
        passwordLayout.add(passwordField);

        HorizontalLayout buttons = new HorizontalLayout();
        buttons.add(yesButton, noButton);
        buttons.setSizeFull();
        buttons.setJustifyContentMode(JustifyContentMode.CENTER);

        layout.add(message, passwordLayout, buttons);
        layout.setDefaultHorizontalComponentAlignment(FlexComponent.Alignment.CENTER); //set the whole dialog center
        // Add layout to dialog
        confirmDialog.add(layout);
        // Open the dialog
        confirmDialog.open();
    }

    private void editSaveAction() {
        try {
            updateData();
        } catch (Exception e) {
            Notification notification = new Notification("Submission fail. Please check", 3000, Notification.Position.BOTTOM_STRETCH);
            notification.open();
            e.printStackTrace();
            return;
        }
        Notification notification = new Notification("Submitted Successfully", 3000, Notification.Position.BOTTOM_STRETCH);
        notification.open();
        // Schedule the reload to happen after the notification has had time to show
        UI currentUI = UI.getCurrent();
        currentUI.access(() -> {
            currentUI.setPollInterval(1300); // Set polling to trigger UI changes
            currentUI.addPollListener(event -> {
                currentUI.getPage().setLocation(getTomcatName("/"));
                currentUI.setPollInterval(-1); // Stop polling after reload
            });
        });
    }

    private void updateData() {
        String tableName = "customer_table";
        String updateSQL = "UPDATE `" + tableName + "` SET " +
                "`addDate` = ?, `chinName` = ?, `engName` = ?, `nature` = ?, `contactPerson` = ?, " +
                "`contactNumber` = ?, `address` = ?, `deposit` = ?, `remark` = ?, `status` = ? " +
                "WHERE `customerID` = ?;";

        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(updateSQL)) {
            setPreparedStatementParameters(pstmt);
            pstmt.setString(11, customerIDField.getValue()); // Assuming customerID is set last in the parameters
            int affectedRows = pstmt.executeUpdate();
            if (affectedRows == 0) {
                System.out.println("No rows updated, it might indicate no record with the specified customerID exists.");
            }
        } catch (SQLException e) {
            logError("Error updating data", e);
        }
    }

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DatabaseConfig.url, DatabaseConfig.username, DatabaseConfig.password);
    }

    private void setPreparedStatementParameters(PreparedStatement pstmt) throws SQLException {
        if (addDatePicker.getValue() != null) {
            pstmt.setDate(1, java.sql.Date.valueOf(addDatePicker.getValue()));
        } else {
            pstmt.setNull(1, java.sql.Types.DATE);
        }
        pstmt.setString(2, chinNameField.getValue());
        pstmt.setString(3, engNameField.getValue());
        pstmt.setObject(4, natureBox.getValue());
        pstmt.setObject(5, contactPersonField.getValue());
        pstmt.setString(6, contactNumberField.getValue());
        pstmt.setString(7, addressArea.getValue());
        pstmt.setBigDecimal(8, BigDecimal.valueOf(depositField.getValue()));
        pstmt.setString(9, remarkArea.getValue());
        pstmt.setString(10, statusBox.getValue());
    }

    private void logError(String message, Exception e) {
        System.err.println(message);
        e.printStackTrace();
        // Ideally, replace System prints with a logging framework like Log4j or SLF4J
    }

    private void editEvent(){
        enableField();
        backButton.setVisible(false);
        editButton.setVisible(false);
        confirmButton.setVisible(true);
        cancelButton.setVisible(true);
    }

    private void enableField(){
        statusBox.setReadOnly(false);
        addDatePicker.setReadOnly(false);
        chinNameField.setReadOnly(false);
        engNameField.setReadOnly(false);
        natureBox.setReadOnly(false);
        depositField.setReadOnly(false);
        contactPersonField.setReadOnly(false);
        contactNumberField.setReadOnly(false);
        addressArea.setReadOnly(false);
        remarkArea.setReadOnly(false);
    }

    private void setInformation(){ // mind the closing
        try (Connection conn = DriverManager.getConnection(DatabaseConfig.url, DatabaseConfig.username, DatabaseConfig.password)) {
            try (PreparedStatement stmt = conn.prepareStatement("SELECT * FROM customer_table WHERE customerID = ? AND chinName = ?")) {
                stmt.setString(1, detailsCustomerID); // need creation of statement object
                stmt.setString(2, detailsCustomerName);
                try (ResultSet customerInfo = stmt.executeQuery()) {
                    if (customerInfo.next()) {  // Correctly positioned to process the first row if exists
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
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void setupFieldListeners() {
        // Assuming status, chinName, engName, etc. are members of the form as TextField or similar inputs
        statusBox.addValueChangeListener(event -> updateConfirmButtonState());
        addDatePicker.addValueChangeListener(event -> updateConfirmButtonState());
        chinNameField.addValueChangeListener(event -> updateConfirmButtonState());
        engNameField.addValueChangeListener(event -> updateConfirmButtonState());
        natureBox.addValueChangeListener(event -> updateConfirmButtonState());
        depositField.addValueChangeListener(event -> updateConfirmButtonState());
        contactNumberField.addValueChangeListener(event -> updateConfirmButtonState());
        contactPersonField.addValueChangeListener(event -> updateConfirmButtonState());
        addressArea.addValueChangeListener(event -> updateConfirmButtonState());
        remarkArea.addValueChangeListener(event -> updateConfirmButtonState());
    }

    private void updateConfirmButtonState() {
        confirmButton.setEnabled(validateFields());
    }

    private boolean validateFields() {
        boolean result = false;
        result = isNotNullOrEmpty(statusBox.getValue()) &&
                isNotNullOrEmpty(addDatePicker.getValue()) &&
                isNotNullOrEmpty(chinNameField.getValue()) &&
                isNotNullOrEmpty(engNameField.getValue()) &&
                isNotNullOrEmpty(natureBox.getValue()) &&
                isNotNullOrEmpty(depositField.getValue()) &&
                isNotNullOrEmpty(contactNumberField.getValue()) &&
                isNotNullOrEmpty(contactPersonField.getValue()) &&
                isNotNullOrEmpty(addressArea.getValue());
        if (depositField.getValue() < 0) {
            result = false;
        }
        return result;
    }

    private boolean isNotNullOrEmpty(Object value) {
        if (value instanceof String) {
            return value != null && !((String) value).isEmpty();
        }
        return value != null; // Non-string values just check for null
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
