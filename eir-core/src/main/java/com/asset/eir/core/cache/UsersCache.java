/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.cache;

import java.util.HashMap;
import java.util.Map;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 *
 * @author mahmoud.shehab
 */
@Component
@ConfigurationProperties(prefix = "ntra")
public class UsersCache {

    private final Map<String, String> users = new HashMap<>();
    private final Map<String, String> sessionCache = new HashMap<>();

    public Map<String, String> getUsers() {
        return users;
    }

    public Map<String, String> getSessionCache() {
        return sessionCache;
    }

}
