package com.apg.views;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.login.LoginForm;
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
public class LoginView extends FlexLayout implements BeforeEnterObserver {

    LoginForm loginForm = new LoginForm();

    public LoginView() {
        buildUI();
    }

    private void buildUI() {
        setSizeFull();
        setClassName("login-screen");

        // layout to center login form when there is sufficient screen space
        FlexLayout centeringLayout = new FlexLayout();
        centeringLayout.setSizeFull();
        centeringLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        centeringLayout.setAlignItems(FlexComponent.Alignment.CENTER);
        loginForm.setAction("login");
        centeringLayout.add(loginForm);

        // information text about logging in
//        Component loginInformation = buildLoginInformation();
//        add(loginInformation);

        add(centeringLayout);
    }

//    private Component buildLoginInformation() {
//        VerticalLayout loginInformation = new VerticalLayout();
//        loginInformation.setClassName("login-information");
//
//        H1 loginInfoHeader = new H1("Login Information");
//        loginInfoHeader.setWidth("100%");
//        Span loginInfoText = new Span(
//                "Log in as \"admin\" to have full access. Log in with any " +
//                        "other username to have read-only access. For all " +
//                        "users, the password is same as the username.");
//        loginInfoText.setWidth("100%");
//        loginInformation.add(loginInfoHeader);
//        loginInformation.add(loginInfoText);
//
//        return loginInformation;
//    }

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
