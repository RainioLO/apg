package com.apg.views.deposit;

import com.apg.views.MainLayout;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;

@PermitAll
@PageTitle("APG | Register Deposit")
@Route(value = "register-deposit", layout = MainLayout.class)
@CssImport("./styles/styles.css")
public class RegisterDeposit extends VerticalLayout {








}
