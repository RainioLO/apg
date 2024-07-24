//package com.apg.views;
//
//import com.vaadin.flow.component.UI;
//import com.vaadin.flow.component.html.Anchor;
//import com.vaadin.flow.component.html.Div;
//import com.vaadin.flow.component.html.Span;
//import com.vaadin.flow.component.login.AbstractLogin;
//import com.vaadin.flow.component.login.LoginOverlay;
//import com.vaadin.flow.component.notification.Notification;
//import com.vaadin.flow.router.BeforeEnterEvent;
//import com.vaadin.flow.router.BeforeEnterObserver;
//import com.vaadin.flow.router.PageTitle;
//import com.vaadin.flow.router.Route;
//import com.vaadin.flow.server.auth.AnonymousAllowed;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.context.SecurityContextHolder;
//
//@Route("login")
//@PageTitle("Login | APG Internal System")
//@AnonymousAllowed
//public class LoginView extends Div implements BeforeEnterObserver {
//
//    LoginOverlay login = new LoginOverlay(); // Instantiate LoginForm to capture username and password
//
//    public LoginView() {
//        addClassName("login-view");
//        setupLoginOverlay();
//        add(login);
//    }
//
//    private void setupLoginOverlay() {
//        login.setTitle("Login");
//        login.setDescription("APG | Internal System");
//        login.getElement().getThemeList().add("dark");
//        login.setOpened(true);
//        login.setForgotPasswordButtonVisible(false);
//        login.getElement().setAttribute("no-autofocus", "");
//    }
//
//    @Override
//    public void beforeEnter(BeforeEnterEvent event) {
//        if (event.getLocation().getQueryParameters().getParameters().containsKey("error")) {
//            login.setError(true);
//            Notification.show("Login failed, please try again.", 3000, Notification.Position.MIDDLE);
//        }
//    }
//
//}
