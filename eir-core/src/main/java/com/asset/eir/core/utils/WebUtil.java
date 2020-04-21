/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.utils;

import com.asset.eir.core.annotations.FullStack;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.models.HttpResponseModel;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.springframework.stereotype.Component;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

/**
 *
 * @author mahmoud.shehab
 */
@Component
public class WebUtil {

    @FullStack
    public String parseResponse(InputStream inputStream) throws EIRException {
        int ch;
        StringBuilder sb = new StringBuilder();
        try {
            while ((ch = inputStream.read()) != -1) {
                if ((char) ch != '\n') {
                    sb.append((char) ch);
                }
            }
        } catch (IOException ex) {
            EIRLogger.info(" Exception " + ex.getMessage());
            EIRLogger.error(" Unknown Exception ", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Parse Response Exception");
        } finally {
            try {
                inputStream.close();
            } catch (IOException ex) {
                EIRLogger.info("Exception while closing inputStream " + ex.getMessage());
                EIRLogger.error("Exception while closing inputStream ", ex);
                throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                        "Closing inputStream Exception");
            }
        }
        return sb.toString();
    }

    public NodeList parseResponseToXML(InputStream inputStream, String suffix)
            throws EIRException {
        NodeList nodesList = null;
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory
                    .newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputStream);
            doc.getDocumentElement().normalize();
            nodesList = doc.getElementsByTagName(suffix);
        } catch (Exception ex) {
            EIRLogger.info(" Exception " + ex.getMessage());
            EIRLogger.error(" Unknown Exception ", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Parse Response Exception");
        }
        return nodesList;
    }

    public HttpResponseModel parseToHttpResponseModel(InputStream in, Integer statusCode) throws EIRException {
        int ch;
        HttpResponseModel httpResponseModel = new HttpResponseModel();
        StringBuilder sb = new StringBuilder();
        try {
            while ((ch = in.read()) != -1) {
                if ((char) ch != '\n') {
                    sb.append((char) ch);
                }
            }
            httpResponseModel.setStatusCode(statusCode);
            httpResponseModel.setResponse(sb.toString());
        } catch (IOException ex) {
            EIRLogger.info("Exception " + ex.getMessage());
            EIRLogger.error("Unknown Exception ", ex);
            throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR,
                    "Parse Response Exception");
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException ex) {
                    EIRLogger.error("Unknown Exception ", ex);
                }
            }
        }
        return httpResponseModel;
    }

    @FullStack
    public HashMap<String, String> getParametersMap(String parameters) {

        HashMap<String, String> parametersMap = new HashMap<>();
        String[] parametersList = parameters.split(",");
        for (String pair : parametersList) {
            String[] entry = pair.split("@");
            parametersMap.put(entry[0], entry[1]);
        }
        return parametersMap;
    }

}
