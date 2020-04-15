/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;

/**
 *
 * @author marwa.elshawarby
 */
public class MsisdnInquiryResponse {

    String cellId;
    String lac;
    String mcc;
    String mnc;
    String text;
    String ageOfLI;
    String locationNumber;
    String subscriberStatus;
    String encoding;

    public MsisdnInquiryResponse() {
    }

    public MsisdnInquiryResponse(String cellId, String lac, String mcc, String mnc, String text, String ageOfLI, String locationNumber, String subscriberStatus, String encoding) {
        this.cellId = cellId;
        this.lac = lac;
        this.mcc = mcc;
        this.mnc = mnc;
        this.text = text;
        this.ageOfLI = ageOfLI;
        this.locationNumber = locationNumber;
        this.subscriberStatus = subscriberStatus;
        this.encoding = encoding;
    }

    public String getCellId() {
        return cellId;
    }

    public void setCellId(String cellId) {
        this.cellId = cellId;
    }

    public String getLac() {
        return lac;
    }

    public void setLac(String iac) {
        this.lac = iac;
    }

    public String getMcc() {
        return mcc;
    }

    public void setMcc(String mcc) {
        this.mcc = mcc;
    }

    public String getMnc() {
        return mnc;
    }

    public void setMnc(String mnc) {
        this.mnc = mnc;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAgeOfLI() {
        return ageOfLI;
    }

    public void setAgeOfLI(String ageOfLI) {
        this.ageOfLI = ageOfLI;
    }

    public String getLocationNumber() {
        return locationNumber;
    }

    public void setLocationNumber(String locationNumber) {
        this.locationNumber = locationNumber;
    }

    public String getSubscriberStatus() {
        return subscriberStatus;
    }

    public void setSubscriberStatus(String subscriberStatus) {
        this.subscriberStatus = subscriberStatus;
    }

    public String getEncoding() {
        return encoding;
    }

    public void setEncoding(String encoding) {
        this.encoding = encoding;
    }

}
