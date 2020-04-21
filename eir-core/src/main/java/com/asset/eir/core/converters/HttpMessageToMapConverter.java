/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.converters;

import com.asset.eir.core.logger.EIRLogger;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;

/**
 *
 * @author marwa.elshawarby
 */
public class HttpMessageToMapConverter extends AbstractHttpMessageConverter<Map> {
    
    public HttpMessageToMapConverter() {
        super(new MediaType("text"));
    }
    
    @Override
    protected boolean supports(Class<?> clazz) {
        return Map.class.isAssignableFrom(clazz);
    }
    
    @Override
    protected Map readInternal(Class<? extends Map> clazz, HttpInputMessage inputMessage)
            throws IOException, HttpMessageNotReadableException {
        try {
            String requestBody = toString(inputMessage.getBody());
            Map<String, String> responseMap = new HashMap<String, String>();
            String[] keyValuePairs;
            String response;
            int length = requestBody.length();
            
            response = requestBody.substring(requestBody.indexOf('=') + 1, length);
            keyValuePairs = response.split("&");
            
            for (String pair : keyValuePairs) {
                if (pair.isEmpty() || pair.equals("")) {
                    continue;
                }
                String[] entry = pair.split("=");
                responseMap.put(entry[0].trim(), entry[1].trim());
            }
            return responseMap;
        } catch (IOException | HttpMessageNotWritableException ex) {
            EIRLogger.info("Error Occured in HTTP message converter");
            EIRLogger.error("Error Occured in HTTP message converter", ex);
            throw ex;
        }
        
    }
    
    @Override
    protected void writeInternal(Map map, HttpOutputMessage outputMessage)
            throws IOException, HttpMessageNotWritableException {
        
        try (OutputStream outputStream = outputMessage.getBody()) {
            String body = map.toString();
            outputStream.write(body.getBytes());
            
        } catch (IOException | HttpMessageNotWritableException ex) {
            EIRLogger.info("Error Occured in HTTP message converter");
            EIRLogger.error("Error Occured in HTTP message converter", ex);
            throw ex;
        }
    }
    
    private static String toString(InputStream inputStream) {
        Scanner scanner = new Scanner(inputStream, "UTF-8");
        return scanner.useDelimiter("\\A").next();
    }
}
