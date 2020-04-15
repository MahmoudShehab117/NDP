/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services;

import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.models.BaseResponse;
import com.asset.eir.core.models.BaseRequest;

/**
 *
 * @author mahmoud.shehab
 */
public interface MainService {

    public BaseResponse sendSOAPRequest(BaseRequest requestModel, Defines.RequestType requestType) throws EIRException;

    public BaseResponse sendHTTPGetRequest(BaseRequest requestModel, Defines.RequestType requestType) throws EIRException;

    public BaseResponse sendHTTPPostRequest(BaseRequest requestModel, Defines.RequestType requestType) throws EIRException;
}
