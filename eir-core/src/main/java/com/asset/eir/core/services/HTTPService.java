/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services;

import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.models.HttpRequestModel;
import java.util.Map;

/**
 *
 * @author marwa.elshawarby
 */
public interface HTTPService {

    public Map<String, String> sendHttpGetRequest(HttpRequestModel requestModel) throws EIRException;

    public Map<String, String> sendHttpPostRequest(HttpRequestModel requestModel) throws EIRException;

}
