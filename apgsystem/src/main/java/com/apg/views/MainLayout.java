package com.apg.views;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.accordion.Accordion;
import com.vaadin.flow.component.accordion.AccordionPanel;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.server.VaadinServletRequest;
import com.vaadin.flow.theme.lumo.LumoUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

import java.util.ArrayList;
import java.util.List;

import static com.apg.utils.DatabaseConfig.getTomcatName;

@CssImport("./styles/styles.css")
public class MainLayout extends AppLayout {
    private static final String LOGOUT_SUCCESS_URL = "/";
    private Accordion accordion;
    private List<AccordionPanel> panels = new ArrayList<>();

    public MainLayout()  {
        addClassName("vaadin-app-layout");
        createHeader();
        createDrawer();
    }

    private void createHeader() {

        H3 logo = new H3("APG Internal System | Hello ADMIN" + " !");

        logo.addClassNames(
                LumoUtility.FontSize.LARGE, // raw CSS default theme
                LumoUtility.Margin.MEDIUM);

        Button logout = new Button("Logout", click -> {
            UI.getCurrent().getPage().setLocation(LOGOUT_SUCCESS_URL);
            SecurityContextLogoutHandler logoutHandler = new SecurityContextLogoutHandler();
            logoutHandler.logout(
                    VaadinServletRequest.getCurrent().getHttpServletRequest(), null,
                    null);
        });
        logout.addClassName("cursor-pointer");

        Button home = new Button("Home", click -> {
            UI.getCurrent().getPage().setLocation(LOGOUT_SUCCESS_URL);
        });
        home.addClassName("cursor-pointer");
        DrawerToggle toggle = new DrawerToggle();
        toggle.addClassName("cursor-pointer");
        HorizontalLayout header = new HorizontalLayout(toggle, home, logo, logout); //DrawerToggle is the menu button toggles the sidebar
        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.expand(logo); // make the logo take up all the extra space in the layout
        header.setWidthFull();
        header.addClassNames(
                LumoUtility.Padding.Vertical.NONE,
                LumoUtility.Padding.Horizontal.MEDIUM);
        addToNavbar(header); //add to the top of the app
    }

    private void createDrawer() {
        accordion = new Accordion();

        // Attendance Record Section
        AccordionPanel attnRecordPanel = accordion.add("Warehouse",
                createContent(
                        createStyledAnchor(getTomcatName("/"), "Stock in Vehicle")));
        attnRecordPanel.setOpened(false);
        panels.add(attnRecordPanel);

        // Out-for-Work Section
        AccordionPanel outForWorkPanel = accordion.add("Delivery",
                createContent(
                        createStyledAnchor(getTomcatName("/"), "Delivery Record"), // recorded as daily with different car
                        createStyledAnchor(getTomcatName("/"), "Delivery Order"), // all order
                        createStyledAnchor(getTomcatName("/"), "Delivery Statistics")));
        outForWorkPanel.setOpened(false);
        panels.add(outForWorkPanel);

        AccordionPanel approvalPanel = accordion.add("Customer Information",
                createContent(
                        createStyledAnchor(getTomcatName("/"), "Customer List"),
                        createStyledAnchor(getTomcatName("/new-customer"), "New Customer"),
                        createStyledAnchor(getTomcatName("/register-deposit"), "Register Deposit"), //obtain after delivery packed with DN
                        createStyledAnchor(getTomcatName("/"), "Monthly Document"),
                        createStyledAnchor(getTomcatName("/"), "Cylinder On Hand")
                        // export the monthly document (statement + invoice) of all customer, calculate the cylinder rental
                )); // export the monthly document (statement + invoice) of all customer
        approvalPanel.setOpened(false);
        panels.add(approvalPanel);

        AccordionPanel hrToolPanel = accordion.add("Other function",
                createContent(
                        createStyledAnchor(getTomcatName("/"), "Upload Reports"),
                        createStyledAnchor(getTomcatName("/"), "Report Generator")));
        hrToolPanel.setOpened(false);
        panels.add(hrToolPanel);

        // Add the accordion to the drawer
        accordion.close();
        addToDrawer(accordion);
        setDrawerOpened(true);
    }

    private VerticalLayout createContent(Anchor... anchors) {
        VerticalLayout content = new VerticalLayout();
        content.setPadding(false);
        content.setSpacing(false);
        for (Anchor anchor : anchors) {
            anchor.addClassName("accordion-option");
            content.add(anchor);
        }
        return content;
    }

    private Anchor createStyledAnchor(String href, String text) {
        Anchor anchor = new Anchor(href, text);
        // Class name will apply the CSS styles
        anchor.addClassName("accordion-option");
        return anchor;
    }
}
