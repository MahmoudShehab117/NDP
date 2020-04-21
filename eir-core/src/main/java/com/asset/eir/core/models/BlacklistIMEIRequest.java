/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;


/**
 *
 * @author khaled.osman
 */
public class BlacklistIMEIRequest extends BaseRequest {

    private String IMEI;
    private String colour;
    private String reason;

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

    @Override
    public String toString() {
        return "BlacklistIMEIRequest{" + "identifier=" + IMEI + ", colour=" + colour + ", reason=" + reason + '}';
    }

    
}
