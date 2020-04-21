/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.utils;

import com.asset.eir.core.annotations.FullStack;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.managers.TPSManager;
import com.asset.eir.core.models.BaseResponse;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.regex.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author mahmoud.shehab
 */
@Component
public class EIRUtil {

    @Autowired
    TPSManager tPSManager;

    @FullStack
    public String replaceMultibleValue(String template, List<String> values, String placeHolder) {
        String result = "";
        if (!values.isEmpty()) {
            String subString = template.substring(template.indexOf("$startRepeat$") + 13,
                    template.indexOf("$endRepeat$"));
            StringBuilder stringBuilder = new StringBuilder();

            for (String value : values) {
                String tmp = subString.replace(placeHolder, value);
                stringBuilder.append(tmp);
            }
            result = template
                    .replace("$endRepeat$", "")
                    .replace("$startRepeat$", "")
                    .replace(subString, stringBuilder.toString());

        }
        return result;
    }

    @FullStack
    public String replaceNullableValue(String template, String value, String placeHolder) {
        String result = "";
        if (value == null || "".equals(value)) {
            result = Pattern.compile("\\$startNullable\\$.*endNullable\\$").matcher(template).replaceAll("");
        } else {
            String subString = template.substring(template.indexOf("$startNullable$") + 15,
                    template.indexOf("$endNullable$"));
            StringBuilder stringBuilder = new StringBuilder();

            String tmp = subString.replace(placeHolder, value);
            stringBuilder.append(tmp);

            result = template
                    .replace("$endNullable$", "")
                    .replace("$startNullable$", "")
                    .replace(subString, stringBuilder.toString());

        }
        return result;
    }

    public void countTotalRequestPerType(String requestType) {
        ConcurrentHashMap<String, AtomicInteger> transactionSuccessFailCount = tPSManager.getTransactionSuccessFailCount();
        transactionSuccessFailCount.get(requestType).getAndIncrement();
        tPSManager.setTransactionSuccessFailCount(transactionSuccessFailCount);

    }

    public void checkBaseResponseValue(BaseResponse baseResponse, String requestType) {
        ConcurrentHashMap<String, AtomicInteger> transactionSuccessFailCount = tPSManager.getTransactionSuccessFailCount();
        if (baseResponse.getStatusCode().equals(ErrorCodes.SUCCESS.SUCCESS_CODE.toString())) {
            transactionSuccessFailCount.get(requestType + "_Success").getAndIncrement();
        } else {
            transactionSuccessFailCount.get(requestType + "_Fail").getAndIncrement();
        }
        tPSManager.setTransactionSuccessFailCount(transactionSuccessFailCount);
    }

    public void countTotalFailedRequestPerType(String requestType) {
        ConcurrentHashMap<String, AtomicInteger> transactionSuccessFailCount = tPSManager.getTransactionSuccessFailCount();
        transactionSuccessFailCount.get(requestType + "_Fail").getAndIncrement();
        tPSManager.setTransactionSuccessFailCount(transactionSuccessFailCount);
    }

    public String generateRequestId(String requestType) {
        return requestType + java.time.LocalDate.now() + Math.random();
    }

    public String getRequestTypeFromURI(String URI) {
//        int index = URI.lastIndexOf("/");
//        int lenght = URI.length();
//        return URI = URI.substring(index + 1, lenght);
          if(URI.contains(Defines.NTRADefines.WHITE_LIST_IMEI_PATH)){
              return Defines.RequestType.whiteListRequest.name();
          }
          else if(URI.contains(Defines.NTRADefines.WHITE_LIST_PAIR_PATH)){
              return Defines.RequestType.whiteListPairRequest.name();
          }
          else if(URI.contains(Defines.NTRADefines.BLACK_LIST_IMEI_PATH)){
              return Defines.RequestType.blackListRequest.name();
          }
          else if(URI.contains(Defines.NTRADefines.BLACK_LIST_PAIRS_PATH)){
              return Defines.RequestType.blackListPairRequest.name();
          }
          else if(URI.contains(Defines.NTRADefines.MSISDN_INQUIRY_PATH)){
              return Defines.RequestType.msisdnInquiryRequest.name();
          }
//          else if(URI.contains(Defines.VFEDefines.TRIGGER_BASIC_MSISDN_STRING)){
//              return Defines.RequestType.tripletChangeRequest.name();
//          }
          return "";
    }
}
