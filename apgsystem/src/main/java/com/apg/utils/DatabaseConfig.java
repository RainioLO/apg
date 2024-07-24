package com.apg.utils;

public class DatabaseConfig {
    public static final String url = "jdbc:mysql://localhost:3306/apg?createDatabaseIfNotExist=true&useSSL=true";
    public static String username = "root";
    public static String password = "admin1234";
    public static String driverClassName = "com.mysql.cj.jdbc.Driver";

    public static String getTomcatName (String name){
        return "/apgsystem".concat(name);
    }

}
