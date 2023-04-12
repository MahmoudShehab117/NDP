/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.ccat.gateway.services;

import com.asset.ccat.gateway.defines.Defines;
import com.asset.ccat.gateway.defines.ErrorCodes;
import com.asset.ccat.gateway.exceptions.GatewayException;
import com.asset.ccat.gateway.logger.CCATLogger;
import com.asset.ccat.gateway.models.requests.LoginRequest;
import com.asset.ccat.gateway.models.responses.LoginWrapperModel;
import com.asset.ccat.gateway.proxy.UserManagementServiceProxy;
import com.asset.ccat.rabbitmq.models.TxLoginModel;
import com.asset.rabbitmq.client.util.RabbitmqUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author assem.hassan
 */
@Component
public class UserService {

    @Autowired
    private RabbitmqUtil rabbitmqUtil;

    @Autowired
    UserManagementServiceProxy userManagementServiceProxy;


    public LoginWrapperModel userLogin(LoginRequest loginRequest) throws GatewayException {
        LoginWrapperModel response = userManagementServiceProxy.userLogin(loginRequest);
        TxLoginModel txLoginModel = new TxLoginModel();
        txLoginModel.setUserID(response.getUser().getUserId());
        txLoginModel.setMachineName(response.getUser().getMachineName());
        //TODO add domain name to login req
        txLoginModel.setDomainName(null);
        txLoginModel.setMessage(response.getUser().getUserDisplayName() + " Logged in Successfully. ");
        enqueueTxLogin(txLoginModel);

        return response;
    }


    public void enqueueTxLogin(TxLoginModel txLoginModel) throws GatewayException {
        try {
            CCATLogger.DEBUG_LOGGER.debug("Start enqueuing tx_login to rabbitmq");
            rabbitmqUtil.publishMsgToQueue(Defines.RABBIT_MQ.EXCHANGE_NAME, Defines.RABBIT_MQ.TX_LOGIN_QUEUE, txLoginModel);
            CCATLogger.DEBUG_LOGGER.debug("Finished enqueuing tx_login");
        } catch (Throwable ex) {
            CCATLogger.DEBUG_LOGGER.error("Failed to enqueue tx_login with error: " + ex.getMessage());
            CCATLogger.ERROR_LOGGER.error("Failed to enqueue tx_login", ex);
//            throw new GatewayException(ErrorCodes.ERROR.LOG_TX_LOGIN_FAILED, Defines.SEVERITY.ERROR);
        }
    }
}
