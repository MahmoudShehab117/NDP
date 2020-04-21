/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.container;

import com.asset.eir.core.tasks.MonitorTask;
import com.asset.eir.core.cache.PropertiesCache;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import com.asset.eir.core.managers.TPSManager;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author hanan.ayman
 */
@Component
public class ThreadPoolContainer {

    private ScheduledExecutorService executor;
    @Autowired
    MonitorTask monitorTask;
    @Autowired
    PropertiesCache propertiesCache;

    @Autowired
    private ScheduledThreadPoolExecutor scheduledThreadPoolExecuter;

    @Autowired
    TPSManager tPSManager;

    public ThreadPoolContainer() {
    }

    public void initializeThreadPool() {
        Integer period = Integer.parseInt(propertiesCache.getGeneral()
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.CONFIGURATIONS)
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.MONITORING_TASK_PERIODIC));
        executor = Executors.newSingleThreadScheduledExecutor();
        executor.scheduleAtFixedRate(monitorTask, 1, period, TimeUnit.SECONDS);
        EIRLogger.info("start TPSCount reset scheduled Thread");
        scheduledThreadPoolExecuter.scheduleAtFixedRate(() -> {
            tPSManager.getTPSCount().getAndSet(0);
        }, 1, 1, TimeUnit.SECONDS);
    }

    public void shutdownThreadPool() {
        executor.shutdown();
        try {
            executor.awaitTermination(Integer.MAX_VALUE, TimeUnit.DAYS);
        } catch (InterruptedException ex) {
            EIRLogger.error("Exception in ThreadPoolContainer while closing monitor", ex);
        }

        scheduledThreadPoolExecuter.shutdown();
        try {
            scheduledThreadPoolExecuter.awaitTermination(Long.MAX_VALUE, TimeUnit.DAYS);
        } catch (InterruptedException ex) {
            EIRLogger.error("Exception in ThreadPoolContainer while closing monitor", ex);
        }

    }

    public ScheduledExecutorService getExecutor() {
        return executor;
    }

    public void setExecutor(ScheduledExecutorService executor) {
        this.executor = executor;
    }
}
