/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author mahmoud.shehab
 */
public class PassManagementModel extends BaseRequest {

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
