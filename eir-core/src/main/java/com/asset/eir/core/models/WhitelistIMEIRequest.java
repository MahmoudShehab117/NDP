/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;

/**
 *
 * @author mahmoud.shehab
 */
public class WhitelistIMEIRequest extends BaseRequest {

    private String IMEI;
    private String colour;
   

    public String getIMEI() {
        return IMEI;
    }

    public void setIMEI(String IMEI) {
        this.IMEI = IMEI;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    @Override
    public String toString() {
        return "WhitelistIMEIRequest{" + "IMEI=" + IMEI + ", colour=" + colour + '}';
    }

}
