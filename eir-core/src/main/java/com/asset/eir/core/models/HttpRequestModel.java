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
public class HttpRequestModel {

    private String url;
    private String requestBody;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getRequestBody() {
        return requestBody;
    }

    public void setRequestBody(String requestBody) {
        this.requestBody = requestBody;
    }

    @Override
    public String toString() {
        return "HttpRequestModel{" + "url=" + url + ", requestBody=" + requestBody + '}';
    }

}
