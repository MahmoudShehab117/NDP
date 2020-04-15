/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.aspects;

import com.asset.eir.core.logger.EIRLogger;
import java.util.Date;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author mahmoud.shehab
 */
@Aspect
@Configuration
public class FullStackAspect {

    @Around("@annotation(com.asset.eir.core.annotations.FullStack)")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        EIRLogger.info("Start calling " + joinPoint.getSignature().getName());
        Object args[] = joinPoint.getArgs();
        Object object = joinPoint.proceed();
        long timeTaken = System.currentTimeMillis() - startTime;
        EIRLogger.info("Time Taken by " + joinPoint.getSignature().getName() + " is [" + timeTaken + "] ms");
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Arguments passes to ").append(joinPoint.getSignature().getName()).append(" are ");
        for (Object arg : args) {
            stringBuilder.append(arg + " ");
        }
        EIRLogger.info(stringBuilder.toString());
        return object;
    }
}
