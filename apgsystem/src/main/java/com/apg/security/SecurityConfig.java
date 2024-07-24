//package com.apg.security;
//
//import com.apg.views.LoginView;
//import com.vaadin.flow.spring.security.VaadinWebSecurity;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.security.web.authentication.HttpStatusEntryPoint;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//import java.util.Collections;
//
//@EnableWebSecurity
//@Configuration
//public class SecurityConfig extends VaadinWebSecurity {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception { // any unauthenticated attempt to access a URL
//        // in the application will be redirected to the /login path
//        http
//                .authorizeHttpRequests(auth -> {
//                    auth.requestMatchers(
//                            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/images/*.png")).permitAll();
//                })
//                .formLogin(loginForm -> {
//                    loginForm.loginPage("/login").permitAll();
//                    loginForm.defaultSuccessUrl("/", true);
//                    loginForm.failureUrl("/");
//                })
//                .logout(logout -> logout.logoutSuccessUrl("/")).exceptionHandling(e -> {
//                    e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));
//                });
//        super.configure(http);
//        setLoginView(http, LoginView.class); // link http and the LoginView
//    }
//
//    @Bean
//    public UserDetailsService users() {
//        UserDetails user = User.builder().username("user").password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW").roles("USER").build();
//        UserDetails admin = User.builder().username("admin").password("{noop}admin1234").roles("ADMIN").build();
//        return new InMemoryUserDetailsManager(user, admin);
//    }
//
//}
