/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.adapters.impl;

import com.asset.eir.core.adapters.SOAPAdapter;
import com.asset.eir.core.annotations.FullStack;
import com.asset.eir.core.cache.PropertiesCache;
import com.asset.eir.core.cache.SOAPRequestsCache;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.models.BaseRequest;
import com.asset.eir.core.models.BaseResponse;
import com.asset.eir.core.models.BlacklistIMEIRequest;
import com.asset.eir.core.models.BlacklistPairsRequest;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.models.HttpResponseModel;
import com.asset.eir.core.models.WhitelistIMEIRequest;
import com.asset.eir.core.models.WhitelistPairsRequest;
import com.asset.eir.core.services.SOAPService;
import com.asset.eir.core.utils.EIRUtil;
import com.asset.eir.core.utils.WebUtil;
import java.io.InputStream;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

/**
 *
 * @author mahmoud.shehab
 */
@Component
public class SOAPAdapterImpl implements SOAPAdapter {

    @Autowired
    SOAPService httpService;

    @Autowired
    WebUtil webUtil;

    @Autowired
    EIRUtil eIRUtil;

    @Autowired
    SOAPRequestsCache sOAPRequestsCache;

    @Autowired
    PropertiesCache propertiesCache;

    @Override
    public BaseResponse handleSoapRequest(BaseRequest baseRequest, Defines.RequestType requestType) throws EIRException {

        HttpRequestModel httpRequestModel = parseBaseRequestToSOAPRequest(baseRequest, requestType);
        HttpResponseModel httpResponseModel = httpService.sendSoapPostRequest(httpRequestModel);
        BaseResponse baseResponse = parseSOAPResponseToBaseResponse(httpResponseModel);
        return baseResponse;
    }

    @Override
    @FullStack
    public HttpRequestModel parseBaseRequestToSOAPRequest(BaseRequest baseRequest, Defines.RequestType requestType) throws EIRException {

        String requestString = generateRequest(baseRequest, requestType);

        HttpRequestModel httpRequestModel = new HttpRequestModel();
        httpRequestModel.setUrl(propertiesCache.getGeneral()
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.URLS)
                .get(requestType.name()));
        httpRequestModel.setRequestBody(requestString);
        return httpRequestModel;
    }

    @Override
    @FullStack
    public String generateRequest(BaseRequest baseRequest, Defines.RequestType requestType) throws EIRException {
        String request = sOAPRequestsCache.getSoapRequestsCache()
                .get(requestType.name());

        String requestResult = "";
        switch (requestType) {
            case whiteListRequest: {
                WhitelistIMEIRequest whitelistIMEIRequest = (WhitelistIMEIRequest) baseRequest;
                requestResult = request
                        .replace(Defines.RequestsPlaceHolders.IMEI, whitelistIMEIRequest.getIMEI())
                        .replace(Defines.RequestsPlaceHolders.COLOUR, whitelistIMEIRequest.getColour());
                break;
            }
            case whiteListPairRequest: {
                WhitelistPairsRequest whitelistPairsRequest = (WhitelistPairsRequest) baseRequest;
                requestResult = request
                        .replace(Defines.RequestsPlaceHolders.IMEI, whitelistPairsRequest.getIMEI());

                requestResult = eIRUtil.replaceMultibleValue(requestResult,
                        whitelistPairsRequest.getLockedIMSIList(),
                        Defines.RequestsPlaceHolders.IMSI);
                break;
            }
            case blackListRequest: {
                BlacklistIMEIRequest blacklistIMEIRequest = (BlacklistIMEIRequest) baseRequest;
                requestResult = request
                        .replace(Defines.RequestsPlaceHolders.IMEI, blacklistIMEIRequest.getIMEI())
                        .replace(Defines.RequestsPlaceHolders.COLOUR, blacklistIMEIRequest.getColour());

                requestResult = eIRUtil.replaceNullableValue(requestResult,
                        blacklistIMEIRequest.getReason(),
                        Defines.RequestsPlaceHolders.REASON);
                break;
            }
            case blackListPairRequest: {
                BlacklistPairsRequest blacklistPairsRequest = (BlacklistPairsRequest) baseRequest;
                requestResult = request
                        .replace(Defines.RequestsPlaceHolders.IMEI, blacklistPairsRequest.getIMEI())
                        .replace(Defines.RequestsPlaceHolders.COLOUR, blacklistPairsRequest.getColour());

                requestResult = eIRUtil.replaceNullableValue(requestResult,
                        blacklistPairsRequest.getReason(),
                        Defines.RequestsPlaceHolders.REASON);
                requestResult = eIRUtil.replaceMultibleValue(requestResult,
                        blacklistPairsRequest.getLockedIMSIList(),
                        Defines.RequestsPlaceHolders.IMSI);
                break;
            }
            default:
                throw new EIRException(ErrorCodes.ERROR.UNKNOWN_REQUEST_TYPE);
        }
        return requestResult;
    }

    @Override
    @FullStack
    public BaseResponse parseSOAPResponseToBaseResponse(HttpResponseModel httpResponseModel) throws EIRException {
        BaseResponse baseCoreResponse = new BaseResponse();
        try {
            EIRLogger.info("Start parse response");

            Integer statusCode = httpResponseModel.getStatusCode();
            String response = httpResponseModel.getResponse();
            if (statusCode == HttpStatus.OK.value()) {
                if (response.contains("result=\"success\"")) {
                    baseCoreResponse.setStatusCode(ErrorCodes.SUCCESS.SUCCESS_CODE.toString());
                    baseCoreResponse.setStatusDescription("Success");
                } else {
                    throw new EIRException(ErrorCodes.ERROR.UNPARSABLE_RESPONSE);
                }
            } else {
                throw new EIRException(ErrorCodes.ERROR.HLR_PGW_FAILED, statusCode.toString());
            }

            EIRLogger.info("Finish parse response successfully");
        } catch (EIRException ex) {
            EIRLogger.info("Exception in parse response" + ex.getMessage());
            EIRLogger.error("Unknown Exception ", ex);
            throw ex;
        } catch (Exception ex) {
            EIRLogger.info("Exception in parse response" + ex.getMessage());
            EIRLogger.error("Unknown Exception ", ex);
            throw new EIRException(ErrorCodes.ERROR.UNPARSABLE_RESPONSE,
                    "Exception in parse response");
        }
        return baseCoreResponse;
    }

}
