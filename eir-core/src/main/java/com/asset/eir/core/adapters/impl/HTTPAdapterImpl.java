/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.adapters.impl;

import com.asset.eir.core.adapters.HTTPAdapter;
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

    @Override
    public BaseResponse handleHttpGetRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        EIRLogger.info("Start handling HTTP get request for request type " + requestType.name());
        LinkedHashMap<String, String> parameters = getRequestParameters(requestModel, requestType);
        HttpRequestModel request = parseHttpGetRequestModel(parameters, requestType);
        Map<String, String> httpResponse = httpService.sendHttpGetRequest(request);
        BaseResponse baseResponse = parseHttpResponseModel(httpResponse, requestType);
        return baseResponse;

    }

    @Override
    public BaseResponse handleHttpPostRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        EIRLogger.info("Start handling HTTP post request for request type " + requestType.name());
        LinkedHashMap<String, String> parameters = getRequestParameters(requestModel, requestType);
        HttpRequestModel request = parseHttpPostRequestModel(parameters, requestType);
        Map<String, String> httpResponse = httpService.sendHttpPostRequest(request);
        BaseResponse baseResponse = parseHttpResponseModel(httpResponse, requestType);
        return baseResponse;
    }

    @Override
    public HttpRequestModel parseHttpGetRequestModel(LinkedHashMap<String, String> parameters, RequestType requestType) throws EIRException {

        EIRLogger.info("Start Parsing Base Request Model to HTTP request Model");

        HttpRequestModel httpRequest = new HttpRequestModel();

        String url = propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.URLS).get(requestType.name());
        if (url == null || url.isEmpty() || url.equals("")) {
            EIRException ex = new EIRException(ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL, "Request URL is null");
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

        EIRLogger.info("Finsihed Parsing Base Request Model to HTTP request Model");

        return httpRequest;
    }

    @Override
    public HttpRequestModel parseHttpPostRequestModel(LinkedHashMap<String, String> parameters, RequestType requestType) throws EIRException {

        EIRLogger.info("Start Parsing Base Request Model to HTTP request Model");
        HttpRequestModel httpRequest = new HttpRequestModel();
        JSONObject jsonObject = new JSONObject();

        try {
            String url = propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.URLS).get(requestType.name());
            if (url == null || url.isEmpty() || url.equals("")) {
                EIRException ex = new EIRException(ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL, "Request URL is null");
                EIRLogger.info("Request URL is missing");
                EIRLogger.error("Request URL is missing", ex);
                throw ex;
            }

            httpRequest.setUrl(url);
            for (String parameter : parameters.keySet()) {
                jsonObject.put(parameter, parameters.get(parameter));
            }
            httpRequest.setRequestBody(jsonObject.toString());
            EIRLogger.info("Finsihed Parsing Base Request Model to HTTP request Model");
            return httpRequest;
        } catch (JSONException ex) {
            EIRLogger.info("Error occured while creating request body");
            EIRLogger.error("Error occured while creating request body", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Unknown error");
        }
    }

    @Override
    public BaseResponse parseHttpResponseModel(Map<String, String> responseMap, RequestType requestType) {

        EIRLogger.info("Start parsing HTTP Response to BaseRespose");
        EIRLogger.info(responseMap.toString());

        switch (requestType) {
            case msisdnInquiryRequest:
                BaseResponse<Map> msisdnInquiryResponse = new BaseResponse<>();
                String requiredResponseString = propertiesCache.getGeneral()
                        .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.RESPONSES)
                        .get(Defines.ResponseType.msisdnInquiryResponse.name());
                if (requiredResponseString != null) {
                    String requiredResponseList[] = requiredResponseString.split(",");
                    Map<String, String> filteredResponseMap = new HashMap<>();
                    for (String paramName : requiredResponseList) {
                        filteredResponseMap.put(paramName, responseMap.get(paramName));
                    }
                    msisdnInquiryResponse.setResponsePayLoad(filteredResponseMap);
                } else {
                    msisdnInquiryResponse.setResponsePayLoad(responseMap);
                }
                EIRLogger.info("returned response map: " + msisdnInquiryResponse.getResponsePayLoad().toString());
                msisdnInquiryResponse.setStatusCode("00");
                msisdnInquiryResponse.setStatusDescription("success");
                EIRLogger.info("Finished parsing  HTTP Response to msisdnInquiryResponse");
                return msisdnInquiryResponse;
            case tripletChangeRequest:
                BaseResponse tripletChangeResponse = new BaseResponse();

                String statusCode = responseMap.get("statusCode");
                String statusDesc = responseMap.get("statusDescription");

                if (statusCode == null || statusDesc == null) {
                    EIRLogger.info("Error occured while Parsing response ");
                }
                tripletChangeResponse.setStatusCode(statusCode);
                tripletChangeResponse.setStatusDescription(statusDesc);
                EIRLogger.info("Finished parsing  HTTP Response to tripletChangeRespose");
                return tripletChangeResponse;

            default:
                EIRLogger.info("No matching response for parsing, returning default Base Response ");
                return new BaseResponse();
        }
    }

    LinkedHashMap<String, String> getRequestParameters(BaseRequest requestModel, RequestType requestType) {
//        HashMap<String, String> parametersMap = new HashMap<>();
        LinkedHashMap<String, String> parametersMap = new LinkedHashMap<>();
        String parameters = null;
        if (propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.PARAMS) != null) {
            parameters = propertiesCache.getGeneral().get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.PARAMS).get(requestType.name());
            if (parameters != null) {
                parametersMap.putAll(webUtil.getParametersMap(parameters));
            }
        }

        switch (requestType) {
            case msisdnInquiryRequest:
                MsisdnInquiryRequest msisdnInquiryRequest = (MsisdnInquiryRequest) requestModel;
                parametersMap.put(Defines.NTRA_REQUEST_PARAM_NAMES.MSISDN, msisdnInquiryRequest.getMsisdn());
                break;

            case tripletChangeRequest:
                TripletChangeRequest tripletChangeRequest = (TripletChangeRequest) requestModel;
                parametersMap.put(Defines.NTRADefines.TRIPLET_CHANGE_TYPE_STRING, tripletChangeRequest.getTripletChangeType().name());
                parametersMap.put(Defines.NTRADefines.TRIPLET_MSISDN_STRING, tripletChangeRequest.getMSISDN());
                parametersMap.put(Defines.NTRADefines.TRIPLET_IMEISV_BEFORE_STRING, tripletChangeRequest.getIMEISVBefore());
                parametersMap.put(Defines.NTRADefines.TRIPLET_IMEISV_AFTER_STRING, tripletChangeRequest.getIMEISVAfter());
                parametersMap.put(Defines.NTRADefines.TRIPLET_IMSI_STRING, tripletChangeRequest.getIMSI());
                break;
        }
        return parametersMap;
    }
}
