package com.apg.views.customer;

import com.apg.data.CustomerStatus;
import com.apg.utils.DatabaseConfig;
import com.apg.views.MainLayout;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinService;
import jakarta.annotation.security.PermitAll;

import java.math.BigDecimal;
import java.sql.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.Locale;
import java.util.Random;
import java.util.stream.Collectors;

import static com.apg.utils.DatabaseConfig.getTomcatName;

@PermitAll
@PageTitle("APG | New Customer")
@Route(value = "new-customer", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class EditCustomer extends VerticalLayout {

    HorizontalLayout top = new HorizontalLayout();

    protected TextField customerID = new TextField();
    protected TextField chinName = new TextField();
    protected TextField engName = new TextField();
    // Nature box
    protected ComboBox<String> nature = new ComboBox<>("Nature");
    protected TextField contactPerson = new TextField();
    protected TextField contactNumber = new TextField();
    protected TextArea address = new TextArea();
    protected NumberField deposit = new NumberField();
    protected TextArea remark = new TextArea();
    protected ComboBox<String> status = new ComboBox<>("Customer Status");
    protected DatePicker addDate = new DatePicker();

    private Button saveButton = new Button("Save");
    private Button backButton = new Button("Back");

    protected H3 header = new H3(); //header 3

    public EditCustomer() throws SQLException {
//        setSizeFull();
        setWidth("1000px");
        setMargin(true);
        addClassName("edit-customer-view");
        setAlignItems(Alignment.STRETCH);
        buildUI();
    }

    protected void buildUI() throws SQLException {
        configureTop();
        configureCustomerInfo();
        buildView();
    }

    protected void configureTop() {
        header.setText("APG - New Customer");
        header.setWidth("100%");
        top.setDefaultVerticalComponentAlignment(Alignment.CENTER);
        top.add(header);
    }

    protected void buildView() {
        add(top);

        HorizontalLayout row1 = new HorizontalLayout();
        row1.setSizeFull();
//        customerID.setWidth("33%");
//        status.setWidth("33%");
//        addDate.setWidth("33%");
        row1.add(customerID, status, addDate);
        row1.setFlexGrow(1, customerID, status, addDate);

        HorizontalLayout row2 = new HorizontalLayout();
        row2.setSizeFull();
//        chinName.setWidth("50%");
//        engName.setWidth("50%");
        row2.add(chinName, engName);
        row2.setFlexGrow(1, chinName, engName);

        HorizontalLayout row3 = new HorizontalLayout();
        row3.setSizeFull();
//        nature.setWidth("50%");
//        deposit.setWidth("50%");
        row3.add(nature, deposit);
        row3.setFlexGrow(1, nature, deposit);

        HorizontalLayout row4 = new HorizontalLayout();
        row4.setSizeFull();
//        contactPerson.setWidth("50%");
//        contactNumber.setWidth("50%");
        row4.add(contactPerson, contactNumber);
        row4.setFlexGrow(1, contactPerson, contactNumber);

        HorizontalLayout row5 = new HorizontalLayout();
        row5.setSizeFull();
//        address.setWidth("50%");
        row5.add(address);
        row5.setFlexGrow(1, address);

        HorizontalLayout row6 = new HorizontalLayout();
        row6.setSizeFull();
        remark.setWidth("50%");
        row6.add(remark);
//        row6.setFlexGrow(1, remark);

        HorizontalLayout row7 = new HorizontalLayout();
        row7.setSizeFull();
        row7.add(createButtons());

        add(row1, row2, row3, row4, row5, row6, row7);
    }

    protected HorizontalLayout createButtons() {
        saveButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);
        saveButton.addClassName("cursor-pointer");
        saveButton.addClickListener(e -> submitButtonEvent());
        saveButton.setEnabled(false);

        backButton.addClassName("cursor-pointer");
        backButton.addClickListener(event ->
                UI.getCurrent().navigate(getTomcatName("/"))
        );

        setupFieldListeners();
        HorizontalLayout button = new HorizontalLayout();
        button.setSizeFull();
        button.add(saveButton, backButton);
        button.setJustifyContentMode(FlexComponent.JustifyContentMode.END);
        return button;
    }

    protected boolean validateFields() {
        boolean result = false;
        result = isNotNullOrEmpty(status.getValue()) &&
                isNotNullOrEmpty(addDate.getValue()) &&
                isNotNullOrEmpty(chinName.getValue()) &&
                isNotNullOrEmpty(engName.getValue()) &&
                isNotNullOrEmpty(nature.getValue()) &&
                isNotNullOrEmpty(deposit.getValue()) &&
                isNotNullOrEmpty(contactNumber.getValue()) &&
                isNotNullOrEmpty(contactPerson.getValue()) &&
                isNotNullOrEmpty(address.getValue());
        if (deposit.getValue() < 0) {
            result = false;
        }
        return result;
    }

    protected void updateSaveButtonState() {
        saveButton.setEnabled(validateFields());
    }

    protected void setupFieldListeners() {
        // Assuming status, chinName, engName, etc. are members of the form as TextField or similar inputs
        status.addValueChangeListener(event -> updateSaveButtonState());
        addDate.addValueChangeListener(event -> updateSaveButtonState());
        chinName.addValueChangeListener(event -> updateSaveButtonState());
        engName.addValueChangeListener(event -> updateSaveButtonState());
        nature.addValueChangeListener(event -> updateSaveButtonState());
        deposit.addValueChangeListener(event -> updateSaveButtonState());
        contactNumber.addValueChangeListener(event -> updateSaveButtonState());
        contactPerson.addValueChangeListener(event -> updateSaveButtonState());
        address.addValueChangeListener(event -> updateSaveButtonState());
    }


    protected boolean isNotNullOrEmpty(Object value) {
        if (value instanceof String) {
            return value != null && !((String) value).isEmpty();
        }
        return value != null; // Non-string values just check for null
    }

    protected void configureCustomerInfo() throws SQLException {
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

    protected void submitButtonEvent() {
        try {
            insertDataToDataBase();

        } catch (Exception e) {
            Notification notification = new Notification("Submission fail. Please fill all required fields", 3000, Notification.Position.BOTTOM_STRETCH);
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
                currentUI.getPage().setLocation(getTomcatName("/new-customer"));
                currentUI.setPollInterval(-1); // Stop polling after reload
            });
        });

    }

    protected void insertDataToDataBase() {
        String tableName = "customer_table";
        String createTableSQL = "CREATE TABLE IF NOT EXISTS `" + tableName + "` (" +
                "`customerID` VARCHAR(255) NOT NULL," +
                "`addDate` DATE," +
                "`chinName` VARCHAR(255) NOT NULL," +
                "`engName` VARCHAR(255) NOT NULL," +
                "`nature` VARCHAR(255)," +
                "`contactPerson` VARCHAR(255) NOT NULL," +
                "`contactNumber` VARCHAR(255) NOT NULL," +
                "`address` VARCHAR(500)," +
                "`deposit` DECIMAL(10,2)," +
                "`remark` VARCHAR(500)," +
                "`status` VARCHAR(100) NOT NULL," +
                "PRIMARY KEY (`customerID`)," +
                "CHECK (`customerID` <> '')," +
                "CHECK (`chinName` <> '')," +
                "CHECK (`engName` <> '')," +
                "CHECK (`contactPerson` <> '')," +
                "CHECK (`contactNumber` <> '')," +
                "CHECK (`status` <> '')" +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

        String insertSQL = "INSERT INTO `" + tableName + "` (" +
                "`customerID`, `addDate`, `chinName`, `engName`, `nature`, `contactPerson`, " +
                "`contactNumber`, `address`, `deposit`, `remark`, `status`" +
                ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        try (Connection conn = DriverManager.getConnection(DatabaseConfig.url, DatabaseConfig.username, DatabaseConfig.password);
             Statement createStmt = conn.createStatement();
             PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
            createStmt.execute(createTableSQL);

            pstmt.setString(1, customerID.getValue());
            if (addDate.getValue() != null) {
                pstmt.setDate(2, java.sql.Date.valueOf(addDate.getValue()));
            } else {
                pstmt.setNull(2, java.sql.Types.DATE);
            }
            pstmt.setString(3, chinName.getValue());
            pstmt.setString(4, engName.getValue());
            pstmt.setObject(5, nature.getValue());
            pstmt.setObject(6, contactPerson.getValue());
            pstmt.setString(7, contactNumber.getValue());
            pstmt.setString(8, address.getValue());
            pstmt.setBigDecimal(9, BigDecimal.valueOf(deposit.getValue()));
            pstmt.setString(10, remark.getValue());
            pstmt.setString(11, status.getValue());

            pstmt.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Please fill all the required fields");
        }
    }

    protected void configureStatus() {
        status.setLabel("Status of Customer");
        status.setItems(Arrays.stream(CustomerStatus.values()).map(e -> e.getDescription()).collect(Collectors.toList()));
        status.setPlaceholder("Please select a status");
    }

    protected void configureRemarks() {
        remark.setLabel("Remarks");
        remark.setMaxLength(150);
        remark.setValueChangeMode(ValueChangeMode.EAGER);
        remark.addValueChangeListener(e -> { // Listener , change of the word count
            e.getSource().setHelperText(e.getValue().length() + "/" + 140);
        });
        remark.setPlaceholder("If any ...");
    }

    protected void configureDeposit() {
        deposit.setLabel("Assigned Deposit HKD$");
        deposit.setMin(0); // Set minimum value to 0
        deposit.setPlaceholder("Enter deposit amount");
    }

    protected void configureAddress() {
        address.setLabel("Address of Customer");
        address.setMaxLength(150);
        address.setValueChangeMode(ValueChangeMode.EAGER);
        address.addValueChangeListener(e -> { // Listener , change of the word count
            e.getSource().setHelperText(e.getValue().length() + "/" + 140);
        });
        address.setRequiredIndicatorVisible(true);
        address.setRequired(true);
        address.setPlaceholder("Type address here ...");
    }

    protected void configureContactNumber() {
        contactNumber.setLabel("Contact Number");
        contactNumber.setRequired(true);
        contactNumber.setRequiredIndicatorVisible(true);
    }

    protected void configureContactPerson() {
        contactPerson.setLabel("Contact Person");
        contactPerson.setRequired(true);
        contactPerson.setRequiredIndicatorVisible(true);
    }

    protected void configureNature() {
        nature.setLabel("Nature of Customer");
        nature.setItems("Engineering", "Science", "Medical", "Beverage");
        nature.setPlaceholder("Please select a nature");
    }


    protected void configureEngName() {
        engName.setLabel("Customer Chinese Name");
        engName.setRequired(true);
        engName.setRequiredIndicatorVisible(true);
    }

    protected void configureChinName() {
        chinName.setLabel("Customer Chinese Name");
        chinName.setRequired(true);
        chinName.setRequiredIndicatorVisible(true);
    }

    protected void configureAddDate() {
        addDate.setLabel("Join Date");
        addDate.setValue(LocalDate.now());
        addDate.setRequired(true);
        addDate.setRequiredIndicatorVisible(true);
    }

    protected void configureCustomerID() throws SQLException {
        customerID.setLabel("Customer ID");
        customerID.setWidth("min-content");
        customerID.setReadOnly(true);
        customerID.setValue(generateCustomerID());
    }

    protected String generateCustomerID() throws SQLException {

        try (Connection conn = DriverManager.getConnection(DatabaseConfig.url, DatabaseConfig.username, DatabaseConfig.password)) {
            Random random = new Random();
            String alphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            while (true) { // an infinite loop, exit when the
                StringBuilder sb = new StringBuilder("APG");
                // Add the first character as a digit (0-9)
                sb.append(random.nextInt(10));
                // Add remaining 6 alphanumeric characters
                for (int i = 1; i < 7; i++) {
                    int index = random.nextInt(alphaNumericString.length()); // Correct index range
                    char randomChar = alphaNumericString.charAt(index);
                    sb.append(randomChar);
                }
                String candidateID = sb.toString();
                if (usableId(conn, candidateID)) {
                    return candidateID; // Return the new ID if it's usable
                }
                // If not usable, the loop continues and generates a new candidate
            }
        }
    }

    private boolean usableId(Connection conn, String createdId) throws SQLException {
        String tableName = "customer_table";
        String query = "SELECT customerID FROM " + tableName + " WHERE customerID = ?";
        PreparedStatement pstmt = conn.prepareStatement(query);
        pstmt.setString(1, createdId);
        ResultSet rs = pstmt.executeQuery();
        boolean isUsable = !rs.next();
        pstmt.close();
        rs.close();
        return isUsable;
    }


}
