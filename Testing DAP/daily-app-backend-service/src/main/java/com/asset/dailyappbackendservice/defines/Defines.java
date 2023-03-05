package com.asset.dailyappbackendservice.defines;

public class Defines {

    public static class ContextPaths {
        public static final String LOGIN = "/user-management-service/login";
        public static final String REFRESH_PATH = "/config-service/actuator/refresh";
    }
    public static class SEVERITY {

        public static final Integer CLEAR = 0;
        public static final Integer VALIDATION = 1;
        public static final Integer ERROR = 2;
        public static final Integer FATAL = 3;
    }
}
