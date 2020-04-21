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
@ConfigurationProperties
public class PropertiesCache {

    private final Map<String, Map<String, String>> general = new HashMap<>();

    public Map<String, Map<String, String>> getGeneral() {
        return general;
    }

}
