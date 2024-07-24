package com.apg.views.customer;

import com.apg.views.MainLayout;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import jakarta.annotation.security.PermitAll;

@AnonymousAllowed
@PageTitle("APG | Customer List")
@Route(value = "", layout = MainLayout.class)
public class CustomerList extends VerticalLayout {

    public CustomerList(){
        add(header());
    }

    private H3 header() {
        H3 header = new H3("Customer List");
        header.setWidth("100%");
        return header;
    }


}
