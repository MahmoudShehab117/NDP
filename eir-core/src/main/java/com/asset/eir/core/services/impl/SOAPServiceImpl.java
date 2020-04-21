/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services.impl;

import com.asset.eir.core.annotations.FullStack;
import com.asset.eir.core.cache.PropertiesCache;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.models.HttpResponseModel;
import com.asset.eir.core.utils.WebUtil;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.asset.eir.core.services.SOAPService;
import java.net.SocketTimeoutException;

/**
 *
 * @author mahmoud.shehab
 */
@Service
public class SOAPServiceImpl implements SOAPService {

    @Autowired
    WebUtil webUtil;

    @Autowired
    PropertiesCache propertiesCache;

    @Override
    @FullStack
    public HttpResponseModel sendSoapPostRequest(HttpRequestModel httpRequestModel) throws EIRException {
        URL url;
        DataOutputStream out = null;
        InputStream inputStream = null;
        HttpResponseModel httpResponseModel = null;
        Integer timeout = Integer.parseInt(propertiesCache.getGeneral()
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.CONFIGURATIONS)
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.CONNECTION_TIMEOUT));
        try {
            url = new URL(httpRequestModel.getUrl());
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoInput(true);
            connection.setDoOutput(true);
            connection.setUseCaches(false);
            connection.setDefaultUseCaches(false);
            connection.setReadTimeout(timeout);
            out = new DataOutputStream(connection.getOutputStream());
            out.writeBytes(httpRequestModel.getRequestBody());
            out.flush();
            out.close();
            inputStream = connection.getInputStream();

            Integer statusCode = connection.getResponseCode();

            httpResponseModel = webUtil.parseToHttpResponseModel(inputStream, statusCode);

        } catch (MalformedURLException ex) {
            EIRLogger.info("MalformedURLException occured");
            EIRLogger.error("MalformedURLException occured", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Unknown error");
        } catch (SocketTimeoutException ex) {
            EIRLogger.info("SocketTimeoutException occured");
            EIRLogger.error("SocketTimeoutException occured", ex);
            throw new EIRException(ErrorCodes.ERROR.HLR_PGW_TIMEOUT,
                    "Unknown error");
        } catch (ProtocolException ex) {
            EIRLogger.info("ProtocolException occured");
            EIRLogger.error("ProtocolException occured", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Unknown error");
        } catch (IOException ex) {
            EIRLogger.info("IOException occured");
            EIRLogger.error("IOException occured", ex);
            throw new EIRException(ErrorCodes.ERROR.UNREACHABLE_WEBSERVICE,
                    "Unknown error");
        } catch (EIRException ex) {
            EIRLogger.info("EIRException occured");
            EIRLogger.error("EIRException occured", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Unknown error");
        }
        return httpResponseModel;
    }

}
