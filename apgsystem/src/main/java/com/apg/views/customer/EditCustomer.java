package com.apg.views.customer;

import com.apg.data.CustomerStatus;
import com.apg.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
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

import java.time.LocalDate;
import java.util.Random;

@PermitAll
@PageTitle("APG | Edit Customer")
@Route(value = "add-customer", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class EditCustomer extends VerticalLayout {

    HorizontalLayout top = new HorizontalLayout();

    private TextField customerID = new TextField();
    private TextField chinName = new TextField();
    private TextField engName = new TextField();
    // Nature box
    private ComboBox<String> nature = new ComboBox<>("Nature");
    private TextField contactPerson = new TextField();
    private TextField contactNumber = new TextField();
    private TextArea address = new TextArea();
    private NumberField deposit = new NumberField ();
    private TextArea remark = new TextArea();
    private ComboBox<CustomerStatus> status = new ComboBox<CustomerStatus>("Customer Status");
    private DatePicker addDate = new DatePicker();

    private Button saveButton = new Button("Save");

    public EditCustomer(){
//        setSizeFull();
        setWidth("1000px");
        setMargin(true);
        addClassName("edit-customer-view");
        setAlignItems(Alignment.STRETCH);
        buildUI();
    }

    private void buildUI(){
        configureTop();
        configureCustomerInfo();
        buildView();
    }

    private void configureTop() {
        H3 header = new H3(); //header 3
        header.setText("APG Edit Customer");
        header.setWidth("100%");
        top.setDefaultVerticalComponentAlignment(Alignment.CENTER);
        top.add(header);
    }

    private void buildView(){
        add(top);

        HorizontalLayout row1 = new HorizontalLayout();
        row1.setSizeFull();
//        customerID.setWidth("33%");
//        status.setWidth("33%");
//        addDate.setWidth("33%");
        row1.add(customerID, status, addDate);
        row1.setFlexGrow(1, customerID, status,addDate);

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
//        remark.setWidth("50%");
        row6.add(remark);
        row6.setFlexGrow(1, remark);

        HorizontalLayout row7 = new HorizontalLayout();
        row7.setSizeFull();
        row7.add(createSaveButton());

        add(row1, row2, row3, row4, row5, row6, row7);
    }

    private HorizontalLayout createSaveButton(){
        saveButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);
        saveButton.addClassName("cursor-pointer");
        HorizontalLayout button = new HorizontalLayout();
        button.setSizeFull();
        button.add(saveButton);
        button.setJustifyContentMode(FlexComponent.JustifyContentMode.END);
        return button;
    }

    private void configureCustomerInfo(){
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

    private void configureStatus(){
        status.setLabel("Status of Customer");
        status.setItems(CustomerStatus.values());
        status.setPlaceholder("Please select a status");
    }

    private void configureRemarks(){
        remark.setLabel("Remarks");
        remark.setMaxLength(150);
        remark.setValueChangeMode(ValueChangeMode.EAGER);
        remark.addValueChangeListener(e -> { // Listener , change of the word count
            e.getSource().setHelperText(e.getValue().length() + "/" + 140);
        });
        remark.setPlaceholder("If any ...");
    }

    private void configureDeposit(){
        deposit.setLabel("Assigned Deposit HKD$");
        deposit.setMin(0); // Set minimum value to 0
        deposit.setPlaceholder("Enter deposit amount");
    }

    private void configureAddress(){
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

    private void configureContactNumber(){
        contactNumber.setLabel("Contact Number");
        contactNumber.setRequired(true);
        contactNumber.setRequiredIndicatorVisible(true);
    }

    private void configureContactPerson(){
        contactPerson.setLabel("Contact Person");
        contactPerson.setRequired(true);
        contactPerson.setRequiredIndicatorVisible(true);
    }

    private void configureNature(){
        nature.setLabel("Nature of Customer");
        nature.setItems("Engineering", "Science", "Medical", "Beverage");
        nature.setPlaceholder("Please select a nature");
    }


    private void configureEngName(){
        engName.setLabel("Customer Chinese Name");
        engName.setRequired(true);
        engName.setRequiredIndicatorVisible(true);
    }

    private void configureChinName(){
        chinName.setLabel("Customer Chinese Name");
        chinName.setRequired(true);
        chinName.setRequiredIndicatorVisible(true);
    }

    private void configureAddDate(){
        addDate.setLabel("Join Date");
        addDate.setValue(LocalDate.now());
        addDate.setRequired(true);
        addDate.setRequiredIndicatorVisible(true);
    }

    private void configureCustomerID(){
        customerID.setLabel("Customer ID");
        customerID.setWidth("min-content");
        customerID.setReadOnly(true);
        customerID.setValue(generateCustomerID());
    }

    private String generateCustomerID() {
        Random random = new Random();
        String alphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder("APG");
        // Add the first character as a digit (0-9)
        sb.append(random.nextInt(10));
        // Add remaining 6 alphanumeric characters
        for (int i = 1; i < 7; i++) {
            int index = random.nextInt(alphaNumericString.length()); // Correct index range
            char randomChar = alphaNumericString.charAt(index);
            sb.append(randomChar);
        }
        return sb.toString();
    }









}
