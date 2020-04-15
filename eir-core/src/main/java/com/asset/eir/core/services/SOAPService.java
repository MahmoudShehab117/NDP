/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services;

import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.models.HttpResponseModel;

/**
 *
 * @author mahmoud.shehab
 */
public interface SOAPService {

    public HttpResponseModel sendSoapPostRequest(HttpRequestModel httpRequestModel) throws EIRException;

}
