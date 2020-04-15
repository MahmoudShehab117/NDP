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
public class BaseResponse<T> {

    private String statusCode;
    private String statusDescription;

    private T responsePayLoad;

    public BaseResponse() {

    }

    public BaseResponse(String statusCode, String statusDescription, T responsePayLoad) {
        this.statusCode = statusCode;
        this.statusDescription = statusDescription;
        this.responsePayLoad = responsePayLoad;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getStatusDescription() {
        return statusDescription;
    }

    public void setStatusDescription(String statusDescription) {
        this.statusDescription = statusDescription;
    }

    public T getResponsePayLoad() {
        return responsePayLoad;
    }

    public void setResponsePayLoad(T responsePayLoad) {
        this.responsePayLoad = responsePayLoad;
    }

}
