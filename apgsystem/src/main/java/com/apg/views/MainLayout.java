package com.apg.views;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.accordion.Accordion;
import com.vaadin.flow.component.accordion.AccordionPanel;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterListener;
import com.vaadin.flow.server.VaadinServletRequest;
import com.vaadin.flow.theme.lumo.LumoUtility;
import org.quartz.SchedulerException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

import java.util.ArrayList;
import java.util.List;

import static com.apg.utils.DatabaseConfig.getTomcatName;

public class MainLayout extends AppLayout implements BeforeEnterListener {

    private static final String LOGOUT_SUCCESS_URL = "/login";

    private Accordion accordion;
    private List<AccordionPanel> panels = new ArrayList<>();

    public MainLayout() throws SchedulerException {
        addClassName("vaadin-app-layout");
        createHeader();
        createDrawer();
    }

    private void createHeader() {
        H3 logo = new H3("APG System | Hello " + "Admin" + " !");
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
        AccordionPanel attnRecordPanel = accordion.add("Customer Record",
                createContent(
                        createStyledAnchor(getTomcatName("/attendance"), "Monthly Attendance")));
        attnRecordPanel.setOpened(false);
        panels.add(attnRecordPanel);

        // Out-for-Work Section
        AccordionPanel outForWorkPanel = accordion.add("Rental Charge/ Deposit",
                createContent(
                        createStyledAnchor(getTomcatName("/out-work"), "Apply for out-for-work"),
                        createStyledAnchor(getTomcatName("/out-work/history"), "Application History"),
                        createStyledAnchor(getTomcatName("/out-work/calendar"), "Out-for-Work Calendar")));
        outForWorkPanel.setOpened(false);
        panels.add(outForWorkPanel);

        // Attendance Approval List Section
        AccordionPanel approvalPanel = accordion.add("Invoice/ Statement",
                createContent(
                        createStyledAnchor(getTomcatName("/approve-attn"), "Attendance Approval")));
        approvalPanel.setOpened(false);
        panels.add(approvalPanel);

        AccordionPanel hrToolPanel = accordion.add("Delivery Order",
                createContent(
                        createStyledAnchor(getTomcatName("/upload/reports"), "Upload Reports"),
                        createStyledAnchor(getTomcatName("/hr-generator"), "Report Generator")));
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

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        closeAllPanels();
    }

    private void closeAllPanels() {
        for (AccordionPanel panel : panels) {
            panel.setOpened(false);
        }
    }


}
