/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.ccat.nba_service.controllers;

import com.asset.ccat.nba_service.defines.Defines;
import com.asset.ccat.nba_service.defines.ErrorCodes;
import com.asset.ccat.nba_service.logger.CCATLogger;
import com.asset.ccat.nba_service.models.requests.*;
import com.asset.ccat.nba_service.models.responses.BaseResponse;
import com.asset.ccat.nba_service.models.shared.ServiceInfo;
import com.asset.ccat.nba_service.services.*;
import org.apache.logging.log4j.ThreadContext;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.security.sasl.AuthenticationException;
import java.net.InetAddress;
import java.util.List;

/**
 * @author Mahmoud Shehab
 */
@RestController
@RequestMapping(Defines.ContextPaths.TIBCO_GIFTS)
public class TIBCOGiftsController {


    private final Environment environment;


    private final TibcoNbaGiftsService tibcoNbaGiftsService;



    private final SendSmsGiftService sendSmsService;

    public TIBCOGiftsController(Environment environment, TibcoNbaGiftsService tibcoNbaGiftsService, SendSmsGiftService sendSmsService) {
        this.environment = environment;
        this.tibcoNbaGiftsService = tibcoNbaGiftsService;
        this.sendSmsService = sendSmsService;
    }

    @RequestMapping(value = Defines.WEB_ACTIONS.GET_ALL, method = RequestMethod.POST)
    public BaseResponse<List<GiftModel>> getAllGifts(@RequestBody SubscriberRequest subscriberRequest) throws AuthenticationException, Exception {
        ThreadContext.put("sessionId", subscriberRequest.getSessionId());
        ThreadContext.put("requestId", subscriberRequest.getRequestId());
        List<GiftModel> response = tibcoNbaGiftsService.getAllTibcoGifts(subscriberRequest);
        CCATLogger.INTERFACE_LOGGER.debug("IP => " + InetAddress.getLocalHost().getHostAddress() + environment.getProperty("server.port"));
        return new BaseResponse<>(ErrorCodes.SUCCESS.SUCCESS,
                "success", 0, new ServiceInfo(InetAddress.getLocalHost().getHostAddress(), environment.getProperty("server.port")),
                response);
    }


    @RequestMapping(value = Defines.ContextPaths.ACCEPT, method = RequestMethod.POST)
    public BaseResponse acceptGift(@RequestBody AcceptGiftRequest acceptGiftRequest) throws AuthenticationException, Exception {
        ThreadContext.put("sessionId", acceptGiftRequest.getSessionId());
        ThreadContext.put("requestId", acceptGiftRequest.getRequestId());
        tibcoNbaGiftsService.redeemOffer(acceptGiftRequest);
        CCATLogger.INTERFACE_LOGGER.info("IP => " + InetAddress.getLocalHost().getHostAddress() + environment.getProperty("server.port"));
        return new BaseResponse<>(ErrorCodes.SUCCESS.SUCCESS,
                "success", 0, new ServiceInfo(InetAddress.getLocalHost().getHostAddress(), environment.getProperty("server.port")),
                null);
    }

    @RequestMapping(value = Defines.ContextPaths.SEND, method = RequestMethod.POST)
    public BaseResponse sendSMSOffer(@RequestBody SendGiftRequest sendGiftRequest) throws AuthenticationException, Exception {
        ThreadContext.put("sessionId", sendGiftRequest.getSessionId());
        ThreadContext.put("requestId", sendGiftRequest.getRequestId());
        tibcoNbaGiftsService.sendSMSGift(sendGiftRequest);
        CCATLogger.INTERFACE_LOGGER.info("IP => " + InetAddress.getLocalHost().getHostAddress() + environment.getProperty("server.port"));
        return new BaseResponse<>(ErrorCodes.SUCCESS.SUCCESS,
                "success", 0, new ServiceInfo(InetAddress.getLocalHost().getHostAddress(), environment.getProperty("server.port")),
                null);
    }
}
