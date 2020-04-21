/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services.impl;

import com.asset.eir.core.cache.MessagesCache;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.services.HTTPService;
import java.util.Map;
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

    @Autowired
    private MessagesCache messagesCache;

    @Override
    public Map<String, String> sendHttpGetRequest(HttpRequestModel requestModel) throws EIRException {

        EIRLogger.info("Start Sending HTTP Get Request");
        EIRLogger.debug("Start Sending HTTP Get Request");
        try {
            String url = requestModel.getUrl();
            ResponseEntity<Map> responseEntity = restTemplate.getForEntity(url, Map.class);
            EIRLogger.debug("Recieved HTTP response entity:" + responseEntity.toString());
            EIRLogger.info("HTTP Request Sent Successfully!");

            HttpStatus responseStatus = responseEntity.getStatusCode();
            Map<String, String> responseBody = responseEntity.getBody();
            if (!responseStatus.equals(HttpStatus.OK)) {
                EIRException ex = new EIRException(ErrorCodes.ERROR.HTTP_REQUEST_FAILED,
                        messagesCache.getErrorMsg(ErrorCodes.ERROR.HTTP_REQUEST_FAILED));
                EIRLogger.debugError("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name());
                EIRLogger.info("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name());
                EIRLogger.error("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name(), ex);
                EIRLogger.interfacesError("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name());
                throw ex;
            }
            return responseBody;
        } catch (RestClientException ex) {
            EIRLogger.debugError("RestClientException Occured!");
            EIRLogger.info("RestClientException Occured!");
            EIRLogger.error("RestClientException Occured!", ex);
            EIRLogger.interfacesError("RestClientException Occured, " + ex.getMessage());

            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, ex);
        }
    }

    @Override
    public Map<String, String> sendHttpPostRequest(HttpRequestModel requestModel) throws EIRException {

        EIRLogger.info("Start Sending HTTP Post Request");
        EIRLogger.debug("Start Sending HTTP Post Request");
        try {
            String url = requestModel.getUrl();
            String body = requestModel.getRequestBody();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<String> request = new HttpEntity<>(body, headers);
            EIRLogger.debug("Sent HTTP request entity" + request.toString());

            ResponseEntity<Map> responseEntity = restTemplate.postForEntity(url, request, Map.class);
            EIRLogger.debug("Recieved HTTP response entity:" + responseEntity.toString());

            EIRLogger.info("HTTP post Request Sent Successfully!");

            HttpStatus responseStatus = responseEntity.getStatusCode();
            Map<String, String> responseBody = responseEntity.getBody();
            if (!responseStatus.equals(HttpStatus.OK)) {

                EIRException ex = new EIRException(ErrorCodes.ERROR.HTTP_REQUEST_FAILED,
                        messagesCache.getErrorMsg(ErrorCodes.ERROR.HTTP_REQUEST_FAILED));
                EIRLogger.debugError("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name());
                EIRLogger.info("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name());
                EIRLogger.error("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name(), ex);
                EIRLogger.interfacesError("HTTP Request Returned with status code: " + responseStatus.value() + "-" + responseStatus.name());
                throw ex;
            }
            return responseBody;
        } catch (RestClientException ex) {
            EIRLogger.debugError("RestClientException Occured!");
            EIRLogger.info("RestClientException Occured!");
            EIRLogger.error("RestClientException Occured!", ex);
            EIRLogger.interfacesError("RestClientException Occured, " + ex.getMessage());

            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, ex);
        }
    }

    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

}
