/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.config;

import com.asset.eir.core.converters.HttpMessageToMapConverter;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author marwa.elshawarby
 */
@Configuration
public class coreConfig {

    @Bean
    public RestTemplate getRestTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        //Add my custom HTTP Message Converter to rest template
        HttpMessageConverter converter = new HttpMessageToMapConverter();
        restTemplate.getMessageConverters().add(converter);

        //Add JSON to map Converter
        MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
        jsonConverter.setObjectMapper(new ObjectMapper());
        restTemplate.getMessageConverters().add(jsonConverter);

        return restTemplate;
    }

    @Bean
    public ScheduledThreadPoolExecutor getScheduledThreadPoolExecutor() {
        return new ScheduledThreadPoolExecutor(1);
    }

}
