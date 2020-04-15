/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.managers;

import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.Defines.RequestType;
import com.asset.eir.core.logger.EIRLogger;
import java.util.HashMap;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author marwa.elshawarby
 */
@Component
public class TPSManager {

    private AtomicInteger TPSCount;
    private HashMap<String, AtomicInteger> transactionSuccessFailCount;

    @Autowired
    private ScheduledThreadPoolExecutor scheduledThreadPoolExecuter;

    public TPSManager() {
        this.TPSCount = new AtomicInteger();
        this.transactionSuccessFailCount = new HashMap<>();
    }

    public void init() {

        EIRLogger.info("start TPSCount reset scheduled Thread");
        scheduledThreadPoolExecuter.scheduleAtFixedRate(() -> {
            TPSCount.getAndSet(0);
        }, 1, 1, TimeUnit.SECONDS);

        this.transactionSuccessFailCount.put(Defines.NTRADefines.TOTAL_REQUESTS, new AtomicInteger(0));
        this.transactionSuccessFailCount.put(Defines.NTRADefines.REJECTED_REQUESTS, new AtomicInteger(0));

        String[] requests = {RequestType.whiteListRequest.name(),
            RequestType.whiteListPairRequest.name(),
            RequestType.blackListRequest.name(),
            RequestType.blackListPairRequest.name(),
            RequestType.msisdnInquiryRequest.name()};

        for (String request : requests) {
            this.transactionSuccessFailCount.put(request, new AtomicInteger(0));
            this.transactionSuccessFailCount.put(request + "Success", new AtomicInteger(0));
            this.transactionSuccessFailCount.put(request + "Fail", new AtomicInteger(0));
        }
    }

    public AtomicInteger getTPSCount() {
        return TPSCount;
    }

    public void setTPSCount(AtomicInteger TPSCount) {
        this.TPSCount = TPSCount;
    }

    public HashMap<String, AtomicInteger> getTransactionSuccessFailCount() {
        return transactionSuccessFailCount;
    }

    public void setTransactionSuccessFailCount(HashMap<String, AtomicInteger> transactionSuccessFailCount) {
        this.transactionSuccessFailCount = transactionSuccessFailCount;
    }

}
