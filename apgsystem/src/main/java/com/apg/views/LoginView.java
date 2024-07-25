package com.apg.views;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.login.LoginOverlay;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route("login")
@PageTitle("Login APG System")
@AnonymousAllowed
@CssImport("./styles/shared-styles.css")
public class LoginView extends Div implements BeforeEnterObserver {

    LoginOverlay loginForm = new LoginOverlay();

    public LoginView() {
        buildUI();
    }

    private void buildUI() {
        setSizeFull();
        setClassName("login-screen");
        loginForm.setTitle("Login");
        loginForm.setDescription("APG Internal System");

        FlexLayout centeringLayout = new FlexLayout();
        centeringLayout.setSizeFull();
        centeringLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        centeringLayout.setAlignItems(FlexComponent.Alignment.CENTER);
        loginForm.getElement().getThemeList().add("dark");
        loginForm.setForgotPasswordButtonVisible(false);
        loginForm.setAction("login");
        loginForm.setOpened(true);
        loginForm.getElement().setAttribute("no-autofocus", "");
        centeringLayout.add(loginForm);
        add(centeringLayout);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent beforeEnterEvent) {
        if(beforeEnterEvent.getLocation()
                .getQueryParameters()
                .getParameters()
                .containsKey("error")) {
            loginForm.setError(true);
        }
    }
}
