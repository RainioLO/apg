package com.apg.views.warehouse;

import com.apg.views.MainLayout;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;

@Route(value = "", layout = MainLayout.class)
@PermitAll
public class InventoryView extends HorizontalLayout {

    public InventoryView(){
        add(header());
    }

    private H3 header() {
        H3 header = new H3("APG System");
        header.setWidth("100%");
        return header;
    }
}
