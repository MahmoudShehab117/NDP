/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.tasks;

import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.managers.TPSManager;
import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author hanan.ayman
 */
@Component
public class MonitorTask implements Runnable {

    @Autowired
    TPSManager tPSManager;

    @Override
    public void run() {
        EIRLogger.monitor("##################################################################################");
        EIRLogger.monitor("Start Monitoring ...... ");
        ConcurrentHashMap<String, AtomicInteger> transactionSuccessFailCount = tPSManager.getTransactionSuccessFailCount();

        EIRLogger.monitor("The Count of total requests is : " + transactionSuccessFailCount.get(Defines.NTRADefines.TOTAL_REQUESTS));
        EIRLogger.monitor("The Count of rejected requests is : " + transactionSuccessFailCount.get(Defines.NTRADefines.REJECTED_REQUESTS));
        ArrayList<String> requests = tPSManager.getRequestsTypeList();
        for (String request : requests) {
            EIRLogger.monitor("The statistics of " + request + " requests:");
            EIRLogger.monitor("     Total = [" + transactionSuccessFailCount.get(request) + "]");
            EIRLogger.monitor("     Success = [" + transactionSuccessFailCount.get(request + Defines.NTRADefines.SUCCESS_COUNTER_SUFFIX) + "]");
            EIRLogger.monitor("     Failed = [" + transactionSuccessFailCount.get(request + Defines.NTRADefines.FAILED_COUNTER_SUFFIX) + "]");
        }

        EIRLogger.monitor("End Monitoring ...... ");
        EIRLogger.monitor("##################################################################################");
    }

}
