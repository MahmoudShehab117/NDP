/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;

import java.util.List;

/**
 *
 * @author khaled.osman
 */
public class BlacklistPairsRequest extends BaseRequest {

    private String IMEI;
    private String reason;
    private String colour;
    private List<String> lockedIMSIList;

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

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

    @Override
    public String toString() {
        return "WhitelistPairsRequest{" + "identifier=" + IMEI + ", lockedIMSIList=" + lockedIMSIList + '}';
    }

}
