/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.adapters.impl;

import com.asset.eir.core.adapters.HTTPAdapter;
import com.asset.eir.core.cache.MessagesCache;
import com.asset.eir.core.cache.PropertiesCache;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.Defines.RequestType;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.models.BaseRequest;
import com.asset.eir.core.models.BaseResponse;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.models.MsisdnInquiryRequest;
import com.asset.eir.core.models.TripletChangeRequest;
import com.asset.eir.core.services.HTTPService;
import com.asset.eir.core.utils.WebUtil;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author marwa.elshawarby
 */
@Component
public class HTTPAdapterImpl implements HTTPAdapter {

    @Autowired
    private PropertiesCache propertiesCache;

    @Autowired
    private HTTPService httpService;

    @Autowired
    private WebUtil webUtil;

    @Autowired
    private MessagesCache messagesCache;

    @Override
    public BaseResponse handleHttpGetRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        EIRLogger.info("Start handling HTTP get request for request type " + requestType.name());
        EIRLogger.debug("Start handling HTTP get request for request type " + requestType.name());
        LinkedHashMap<String, String> parameters = getRequestParameters(requestModel, requestType);
        HttpRequestModel request = parseHttpGetRequestModel(parameters, requestType);
        Map<String, String> httpResponse = httpService.sendHttpGetRequest(request);
        BaseResponse baseResponse = parseHttpResponseModel(httpResponse, requestType);
        EIRLogger.info("Finished handling HTTP get request for request type " + requestType.name());
        EIRLogger.debug("Finished handling HTTP get request for request type " + requestType.name());
        return baseResponse;

    }

    @Override
    public BaseResponse handleHttpPostRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        EIRLogger.info("Start handling HTTP post request for request type " + requestType.name());
        EIRLogger.debug("Start handling HTTP post request for request type " + requestType.name());
        LinkedHashMap<String, String> parameters = getRequestParameters(requestModel, requestType);
        HttpRequestModel request = parseHttpPostRequestModel(parameters, requestType);
        Map<String, String> httpResponse = httpService.sendHttpPostRequest(request);
        BaseResponse baseResponse = parseHttpResponseModel(httpResponse, requestType);
        EIRLogger.info("Finished handling HTTP post request for request type " + requestType.name());
        EIRLogger.debug("Finished handling HTTP post request for request type " + requestType.name());
        return baseResponse;
    }

    @Override
    public HttpRequestModel parseHttpGetRequestModel(LinkedHashMap<String, String> parameters, RequestType requestType) throws EIRException {

        EIRLogger.info("Start Parsing Base Request Model to HTTP Get Method request Model");
        EIRLogger.debug("Start Parsing Base Request Model to HTTP Get Method request Model");

        HttpRequestModel httpRequest = new HttpRequestModel();

        String url = propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.URLS).get(requestType.name());
        EIRLogger.debug("URL read from properties file:" + url);

        if (url == null || url.isEmpty() || url.equals("")) {
            EIRException ex = new EIRException(ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL, messagesCache.getErrorMsg(ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL));
            EIRLogger.debugError("Request URL is missing");
            EIRLogger.info("Request URL is missing");
            EIRLogger.error("Request URL is missing", ex);
            throw ex;
        }

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(url);
        for (String parameter : parameters.keySet()) {
            builder = builder.queryParam(parameter, parameters.get(parameter));
        }

        String uriBuilder = builder.build().toUriString();

        httpRequest.setUrl(uriBuilder);
        EIRLogger.debug("HTTP Request URL:" + uriBuilder);

        EIRLogger.debug("Finsihed Parsing Base Request Model to HTTP Get Method request Model");
        EIRLogger.info("Finsihed Parsing Base Request Model to HTTP Get Method request Model");

        return httpRequest;
    }

    @Override
    public HttpRequestModel parseHttpPostRequestModel(LinkedHashMap<String, String> parameters, RequestType requestType) throws EIRException {

        EIRLogger.info("Start Parsing Base Request Model to HTTP PostMethod request Model");
        EIRLogger.debug("Start Parsing Base Request Model to HTTP PostMethod request Model");

        HttpRequestModel httpRequest = new HttpRequestModel();
        JSONObject jsonObject = new JSONObject();

        try {
            String url = propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.URLS).get(requestType.name());
            EIRLogger.debug("URL read from properties file:" + url);
            if (url == null || url.isEmpty() || url.equals("")) {
                EIRException ex = new EIRException(ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL, messagesCache.getErrorMsg(ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL));
                EIRLogger.debugError("Request URL is missing");
                EIRLogger.info("Request URL is missing");
                EIRLogger.error("Request URL is missing", ex);
                throw ex;
            }

            httpRequest.setUrl(url);
            for (String parameter : parameters.keySet()) {
                jsonObject.put(parameter, parameters.get(parameter));
            }
            EIRLogger.debug("HTTP Request body:\n" + jsonObject.toString());
            httpRequest.setRequestBody(jsonObject.toString());
            EIRLogger.debug("Finsihed Parsing Base Request Model to HTTP PostMethod request Model");
            EIRLogger.info("Finsihed Parsing Base Request Model to HTTP PostMethod request Model");
            return httpRequest;
        } catch (JSONException ex) {
            EIRLogger.debugError("JSONException occured while creating HTTP request body");
            EIRLogger.info("JSONException occured while creating HTTP request body");
            EIRLogger.error("JSONException occured while creating HTTP request body", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, ex);
        }
    }

    @Override
    public BaseResponse parseHttpResponseModel(Map<String, String> responseMap, RequestType requestType) {

        EIRLogger.info("Start parsing HTTP Response to BaseRespose");
        EIRLogger.debug("Start parsing HTTP Response to BaseRespose");
        if (responseMap == null) {
            responseMap = new HashMap<>();
        }
        EIRLogger.debug("Recieved HTTP Response Map:\n" + responseMap.toString());

        switch (requestType) {
            case msisdnInquiryRequest:
                BaseResponse<Map> msisdnInquiryResponse = new BaseResponse<>();
                String requiredResponseString = propertiesCache.getGeneral()
                        .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.RESPONSES)
                        .get(Defines.ResponseType.msisdnInquiryResponse.name());
                EIRLogger.debug("Required HTTP Response Values read from properties file: " + requiredResponseString);
                if (requiredResponseString != null) {
                    String requiredResponseList[] = requiredResponseString.split(",");
                    Map<String, String> filteredResponseMap = new HashMap<>();
                    for (String paramName : requiredResponseList) {
                        if (!(responseMap.get(paramName) == null)) {
                            filteredResponseMap.put(paramName, responseMap.get(paramName));
                        } else {
                            EIRLogger.info("Recieved response doesn't contain required value: " + paramName);
                            EIRLogger.debug("Recieved response doesn't contain required values: " + paramName);
                            msisdnInquiryResponse.setStatusCode(ErrorCodes.ERROR.FAILED.toString());
                            msisdnInquiryResponse.setStatusDescription(messagesCache.getErrorMsg(ErrorCodes.ERROR.FAILED));
                            EIRLogger.debug("Finished parsing  HTTP Response to msisdnInquiryResponse");
                            EIRLogger.info("Finished parsing  HTTP Response to msisdnInquiryResponse");
                            return msisdnInquiryResponse;
                        }

                    }
                    msisdnInquiryResponse.setResponsePayLoad(filteredResponseMap);
                } else {
                    msisdnInquiryResponse.setResponsePayLoad(responseMap);
                }
                EIRLogger.debug("returned response map: " + msisdnInquiryResponse.getResponsePayLoad().toString());
                EIRLogger.info("returned response map: " + msisdnInquiryResponse.getResponsePayLoad().toString());
                msisdnInquiryResponse.setStatusCode(ErrorCodes.SUCCESS.SUCCESS_CODE.toString());
                msisdnInquiryResponse.setStatusDescription(messagesCache.getsuccessMsg(ErrorCodes.SUCCESS.SUCCESS_CODE));
                EIRLogger.debug("Finished parsing  HTTP Response to msisdnInquiryResponse");
                EIRLogger.info("Finished parsing  HTTP Response to msisdnInquiryResponse");
                return msisdnInquiryResponse;
            case tripletChangeRequest:
                BaseResponse tripletChangeResponse = new BaseResponse();

                String statusCode = responseMap.get("statusCode");
                String statusDesc = responseMap.get("statusDescription");

                if (statusCode == null || statusDesc == null) {
                    EIRLogger.debug("Error occured while Parsing response ");
                    EIRLogger.info("Error occured while Parsing response ");
                }
                tripletChangeResponse.setStatusCode(statusCode);
                tripletChangeResponse.setStatusDescription(statusDesc);
                EIRLogger.debug("Finished parsing  HTTP Response to tripletChangeRespose");
                EIRLogger.info("Finished parsing  HTTP Response to tripletChangeRespose");
                return tripletChangeResponse;

            default:
                EIRLogger.debug("No matching response for parsing, returning default Base Response ");
                EIRLogger.info("No matching response for parsing, returning default Base Response ");
                return new BaseResponse();
        }
    }

    LinkedHashMap<String, String> getRequestParameters(BaseRequest requestModel, RequestType requestType) {

        EIRLogger.info("Start getting HTTP request parameters");
        EIRLogger.debug("Start getting HTTP request parameters");

        LinkedHashMap<String, String> parametersMap = new LinkedHashMap<>();
        String parameters;
        if (propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.PARAMS) != null) {
            parameters = propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.PARAMS).get(requestType.name());
            if (parameters != null) {
                parametersMap.putAll(webUtil.getParametersMap(parameters));
            }
        }

        switch (requestType) {
            case msisdnInquiryRequest:
                EIRLogger.debug("Start getting msisdn inquiry request parameters");
                MsisdnInquiryRequest msisdnInquiryRequest = (MsisdnInquiryRequest) requestModel;
                parametersMap.put(Defines.NTRA_REQUEST_PARAM_NAMES.MSISDN, msisdnInquiryRequest.getMsisdn());
                break;

            case tripletChangeRequest:
                EIRLogger.debug("Start getting triplet change  request parameters");
                TripletChangeRequest tripletChangeRequest = (TripletChangeRequest) requestModel;
                parametersMap.put(Defines.NTRADefines.TRIPLET_CHANGE_TYPE_STRING, tripletChangeRequest.getTripletChangeType().name());
                parametersMap.put(Defines.NTRADefines.TRIPLET_MSISDN_STRING, tripletChangeRequest.getMSISDN());
                parametersMap.put(Defines.NTRADefines.TRIPLET_IMEISV_BEFORE_STRING, tripletChangeRequest.getIMEISVBefore());
                parametersMap.put(Defines.NTRADefines.TRIPLET_IMEISV_AFTER_STRING, tripletChangeRequest.getIMEISVAfter());
                parametersMap.put(Defines.NTRADefines.TRIPLET_IMSI_STRING, tripletChangeRequest.getIMSI());
                break;
        }
        EIRLogger.debug("HTTP request parameters map:\n" + parametersMap.toString());
        EIRLogger.info("Finished getting HTTP request parameters");
        EIRLogger.debug("Finished getting HTTP request parameters");

        return parametersMap;
    }
}
