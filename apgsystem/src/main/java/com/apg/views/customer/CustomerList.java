package com.apg.views.customer;

import com.apg.utils.DatabaseConfig;
import com.apg.views.MainLayout;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.QueryParameters;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;
import org.hibernate.annotations.processing.SQL;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static com.apg.utils.DatabaseConfig.getTomcatName;


@PermitAll
@PageTitle("APG | Customer List")
@Route(value = "", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class CustomerList extends VerticalLayout {

    private Grid<String[]> grid = new Grid<>(String[].class);;
    private TextField searchField = new TextField();
//    private Button searchButton = new Button("Search");

    public CustomerList() throws SQLException {
        setupComponents();
    }

    private void setupComponents() throws SQLException {
        setupSearchBar();
        setupGrid();
//        setSizeFull();
        setWidth("1400px");
        setPadding(false);
        setMargin(true);
        add(grid, backButton());
        setFlexGrow(1, grid);
        getStyle().set("overflow", "auto"); // Ensures the whole component is scrollable if content overflows
    }

    private void setupGrid() {
        updateGrid();
    }

    private void updateGrid() {
            try (Connection conn = DriverManager.getConnection(DatabaseConfig.url, DatabaseConfig.username, DatabaseConfig.password)) {

                ResultSet customerRecord = getCustomerList(conn, searchField.getValue());

                List<String[]> itemsList = new ArrayList<>();

                while (customerRecord.next()) {
                    String[] item = new String[5];
                    item[0] = customerRecord.getString("customerID");
                    item[1] = customerRecord.getString("chinName");
                    item[2] = customerRecord.getString("addDate"); // Assuming 'Alias' is 'login_name'
                    item[3] = customerRecord.getString("nature");
                    item[4] = customerRecord.getString("status");
                    itemsList.add(item);
                }

                // Clear the grid and add new items
                grid.removeAllColumns();
                grid.setItems(itemsList); // This will be empty if no data is found

                grid.addColumn(items -> items[0]).setHeader("Customer ID").setWidth("250px").setFlexGrow(0);
                grid.addColumn(items -> items[1]).setHeader("Customer Name").setWidth("250px").setFlexGrow(0);
                grid.addColumn(items -> items[2]).setHeader("Join Date").setWidth("250px").setFlexGrow(0);
                grid.addColumn(items -> items[3]).setHeader("Nature").setWidth("250px").setFlexGrow(0);
                grid.addColumn(items -> items[4]).setHeader("Status").setWidth("250px").setFlexGrow(0);

                grid.setSelectionMode(Grid.SelectionMode.SINGLE);
                grid.addItemDoubleClickListener(event -> {
                    String[] selectedItem = event.getItem();
                    // Prepare navigation with parameters
                    QueryParameters queryParams = QueryParameters.simple(Map.of(
                            "id", selectedItem[0],
                            "name", selectedItem[1]
                    ));
                    // Navigate to 'customer-details' view with parameters
                    UI.getCurrent().navigate("customer-details", queryParams);
                });

            } catch (SQLException e) {
                // Clear the grid if there's an error
                grid.removeAllColumns();
                grid.setItems(new ArrayList<>()); // Ensure the grid is empty
            }
        }

    private ResultSet getCustomerList(Connection conn, String filter) throws SQLException {
        String tableName = "customer_table";
        String query = "SELECT customerID, addDate, chinName, engName, " +
                "nature, contactPerson, contactNumber, address, deposit, remark, status FROM " + tableName;

        if (filter != null && !filter.trim().isEmpty()) {
            query += " WHERE customerID LIKE ? OR chinName LIKE ? OR status LIKE ?";
        }
        query += " ORDER BY addDate DESC";

        PreparedStatement pstmt = conn.prepareStatement(query);
        if (filter != null && !filter.trim().isEmpty()) {
            pstmt.setString(1, "%" + filter + "%");
            pstmt.setString(2, "%" + filter + "%");
            pstmt.setString(3, "%" + filter + "%");
        }
        return pstmt.executeQuery();
    }

    private void setupSearchBar() {
        searchField.setPlaceholder("Search customer ...");
        searchField.setClearButtonVisible(true);
        searchField.setPrefixComponent(new Icon(VaadinIcon.SEARCH));
        searchField.setValueChangeMode(ValueChangeMode.EAGER);
        searchField.addValueChangeListener(e -> updateGrid());

//        searchButton.addClickListener(e -> updateGrid());

        HorizontalLayout searchLayout = new HorizontalLayout(searchField);
        searchLayout.setWidthFull();
        searchLayout.setAlignItems(Alignment.BASELINE);
        add(searchLayout);
    }

    private HorizontalLayout backButton() {
        Button back = new Button("Back", click -> {
            UI.getCurrent().getPage().setLocation(getTomcatName("/"));
        });
        back.addClassName("cursor-pointer");

        HorizontalLayout buttons = new HorizontalLayout();
        buttons.add(back);
        buttons.setWidthFull();
        buttons.setAlignItems(FlexComponent.Alignment.END);
        buttons.setJustifyContentMode(JustifyContentMode.END);
        return buttons;
    }








}


