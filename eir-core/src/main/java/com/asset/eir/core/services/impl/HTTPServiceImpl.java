/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services.impl;

import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.services.HTTPService;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author marwa.elshawarby
 */
@Service
public class HTTPServiceImpl implements HTTPService {

    @Autowired
    @Qualifier(value = "getRestTemplate")
    private RestTemplate restTemplate;

    @Override
    public Map<String, String> sendHttpGetRequest(HttpRequestModel requestModel) throws EIRException {

        EIRLogger.info("Start Sending HTTP Get Request");
        try {
            String url = requestModel.getUrl();
            ResponseEntity<Map> responseEntity = restTemplate.getForEntity(url, Map.class);
            EIRLogger.info("HTTP Request Sent Successfully!");

            HttpStatus responseStatus = responseEntity.getStatusCode();
            Map<String, String> responseBody = responseEntity.getBody();
            if (!responseStatus.equals(HttpStatus.OK)) {
                EIRException ex = new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, "Unknown error");
                EIRLogger.info("Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.toString());
                EIRLogger.error("Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.toString(), ex);
                throw ex;
            }
            return responseBody;
        } catch (RestClientException ex) {
            EIRLogger.info("RestClientException Occured!");
            EIRLogger.error("RestClientException Occured!", ex);

            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Unknown error");
        }
    }

    @Override
    public Map<String, String> sendHttpPostRequest(HttpRequestModel requestModel) throws EIRException {

        EIRLogger.info("Start Sending HTTP Post Request");
        try {
            String url = requestModel.getUrl();
            String body = requestModel.getRequestBody();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<String> request = new HttpEntity<>(body, headers);

            ResponseEntity<Map> responseEntity = restTemplate.postForEntity(url, request, Map.class);

            EIRLogger.info("HTTP post Request Sent Successfully!");

            HttpStatus responseStatus = responseEntity.getStatusCode();
            Map<String, String> responseBody = responseEntity.getBody();
            if (!responseStatus.equals(HttpStatus.OK)) {

                EIRException ex = new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, "Unknown Error");
                EIRLogger.info("Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.toString());
                EIRLogger.error("Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.toString(), ex);

                throw ex;
            }
            return responseBody;
        } catch (RestClientException ex) {
            EIRLogger.info("RestClientException Occured!");
            EIRLogger.error("RestClientException Occured!", ex);

            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Unknown error");
        }
    }

    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

}
