/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.aspects;

import com.asset.eir.core.logger.EIRLogger;
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
public class TrackTimeAspect {

//    @Around("execution(* com.asset.esp.ws.*.*.*(..))")
//    public void around(ProceedingJoinPoint joinPoint) throws Throwable {
//        long startTime = System.currentTimeMillis();
//        joinPoint.proceed();
//        long timeTaken = System.currentTimeMillis() - startTime;
//        ESPLogger.info(" Time Taken by " + joinPoint + " is " + timeTaken + "ms");
//    }
    @Around("@annotation(com.asset.eir.core.annotations.TrackTime)")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        Object object = joinPoint.proceed();
        long timeTaken = System.currentTimeMillis() - startTime;
        EIRLogger.info("Time Taken by " + joinPoint.getSignature().getName() + " is " + timeTaken + "ms");
        return object;
    }
}
