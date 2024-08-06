package com.apg.utils;

public class DatabaseConfig {
    public static final String url = "jdbc:mysql:///apg?cloudSqlInstance=abstract-ring-431708-k3:asia-east2:apg-database&socketFactory=com.google.cloud.sql.mysql.SocketFactory";
    public static String username = "root";
    public static String password = "Admin@1234";
    public static String driverClassName = "com.mysql.cj.jdbc.Driver";

    public static String getTomcatName (String name){
        return "".concat(name);
    }

}
