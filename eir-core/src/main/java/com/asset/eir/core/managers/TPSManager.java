/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.managers;

import com.asset.eir.core.cache.PropertiesCache;
import com.asset.eir.core.defines.Defines;
import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author marwa.elshawarby
 */
@Component
public class TPSManager {

    @Autowired
    PropertiesCache propertiesCache;

    private AtomicInteger TPSCount;
    private ConcurrentHashMap<String, AtomicInteger> transactionSuccessFailCount;
    private ArrayList<String> requestsTypeList;

    public TPSManager() {
        this.TPSCount = new AtomicInteger();
        this.transactionSuccessFailCount = new ConcurrentHashMap<>();
        requestsTypeList = new ArrayList<>();
    }

    public void init() {

        this.transactionSuccessFailCount.put(Defines.NTRADefines.TOTAL_REQUESTS, new AtomicInteger(0));
        this.transactionSuccessFailCount.put(Defines.NTRADefines.REJECTED_REQUESTS, new AtomicInteger(0));

        String serviceType = propertiesCache.getGeneral().
                get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.CONFIGURATIONS).
                get(Defines.NTRADefines.SERVICE_TYPE);
        if (serviceType.equals(Defines.NTRADefines.SERVICE_NAME)) {
            requestsTypeList.add(Defines.RequestType.whiteListRequest.name());
            requestsTypeList.add(Defines.RequestType.whiteListPairRequest.name());
            requestsTypeList.add(Defines.RequestType.blackListRequest.name());
            requestsTypeList.add(Defines.RequestType.blackListPairRequest.name());
            requestsTypeList.add(Defines.RequestType.msisdnInquiryRequest.name());
        } else if (serviceType.equals(Defines.VFEDefines.SERVICE_NAME)) {
            requestsTypeList.add(Defines.RequestType.tripletChangeRequest.name());
        }

        for (String request : requestsTypeList) {
            this.transactionSuccessFailCount.put(request, new AtomicInteger(0));
            this.transactionSuccessFailCount.put(request + Defines.NTRADefines.SUCCESS_COUNTER_SUFFIX, new AtomicInteger(0));
            this.transactionSuccessFailCount.put(request + Defines.NTRADefines.FAILED_COUNTER_SUFFIX, new AtomicInteger(0));
        }
    }

    public AtomicInteger getTPSCount() {
        return TPSCount;
    }

    public void setTPSCount(AtomicInteger TPSCount) {
        this.TPSCount = TPSCount;
    }

    public ConcurrentHashMap<String, AtomicInteger> getTransactionSuccessFailCount() {
        return transactionSuccessFailCount;
    }

    public void setTransactionSuccessFailCount(ConcurrentHashMap<String, AtomicInteger> transactionSuccessFailCount) {
        this.transactionSuccessFailCount = transactionSuccessFailCount;
    }

    public ArrayList<String> getRequestsTypeList() {
        return requestsTypeList;
    }

    public void setRequestsTypeList(ArrayList<String> requestsTypeList) {
        this.requestsTypeList = requestsTypeList;
    }

}
