/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;

import java.util.List;

/**
 *
 * @author mahmoud.shehab
 */
public class WhitelistPairsRequest extends BaseRequest {

    private String IMEI;
    private List<String> lockedIMSIList;
    private String authToken;

    public String getIMEI() {
        return IMEI;
    }

    public void setIMEI(String IMEI) {
        this.IMEI = IMEI;
    }

    public List<String> getLockedIMSIList() {
        return lockedIMSIList;
    }

    public void setLockedIMSIList(List<String> lockedIMSIList) {
        this.lockedIMSIList = lockedIMSIList;
    }

    public String getAuthToken() {
        return authToken;
    }

    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }

    @Override
    public String toString() {
        return "WhitelistPairsRequest{" + "IMEI=" + IMEI + ", lockedIMSIList=" + lockedIMSIList + ", authToken=" + authToken + '}';
    }
    
}
