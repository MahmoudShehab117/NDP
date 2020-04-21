/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.exceptions;

public class EIRException extends Exception {

    protected Integer errorCode;
    protected String[] errorParamter;

    public EIRException() {
        super();
    }

    public EIRException(Integer errorCode) {
        this.errorCode = errorCode;
    }

    public EIRException(String message) {
        super(message);
    }

    public EIRException(Integer errorCode, String... errorParamter) {
        this.errorCode = errorCode;
        this.errorParamter = errorParamter;
    }

    public EIRException(Integer errorCode, Exception cause) {
        super(cause);
        this.errorCode = errorCode;
    }

    public Integer getErrorCode() {
        return errorCode;
    }

    public String[] getErrorParamter() {
        return errorParamter;
    }

}
