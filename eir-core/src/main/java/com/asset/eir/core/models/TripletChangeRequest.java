/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;

import com.asset.eir.core.defines.Defines;

/**
 *
 * @author marwa.elshawarby
 */
public class TripletChangeRequest extends BaseRequest {

    private Defines.ChangeTripletModificationType tripletChangeType;
    private String MSISDN;
    private String IMEISVBefore;
    private String IMEISVAfter;
    private String IMSI;

    public Defines.ChangeTripletModificationType getTripletChangeType() {
        return tripletChangeType;
    }

    public void setTripletChangeType(Defines.ChangeTripletModificationType tripletChangeType) {
        this.tripletChangeType = tripletChangeType;
    }

    public String getMSISDN() {
        return MSISDN;
    }

    public void setMSISDN(String MSISDN) {
        this.MSISDN = MSISDN;
    }

    public String getIMEISVBefore() {
        return IMEISVBefore;
    }

    public void setIMEISVBefore(String IMEISVBefore) {
        this.IMEISVBefore = IMEISVBefore;
    }

    public String getIMEISVAfter() {
        return IMEISVAfter;
    }

    public void setIMEISVAfter(String IMEISVAfter) {
        this.IMEISVAfter = IMEISVAfter;
    }

    public String getIMSI() {
        return IMSI;
    }

    public void setIMSI(String IMSI) {
        this.IMSI = IMSI;
    }

    @Override
    public String toString() {
        return "TripletChangeRequest{" + "tripletChangeType=" + tripletChangeType + ", MSISDN=" + MSISDN + ", IMEISVBefore=" + IMEISVBefore + ", IMEISVAfter=" + IMEISVAfter + ", IMSI=" + IMSI + '}';
    }

}
