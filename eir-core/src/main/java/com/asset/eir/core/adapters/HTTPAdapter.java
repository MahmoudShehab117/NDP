/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.adapters;

import com.asset.eir.core.defines.Defines.RequestType;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.models.BaseRequest;
import com.asset.eir.core.models.BaseResponse;
import com.asset.eir.core.models.HttpRequestModel;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 *
 * @author marwa.elshawarby
 */
public interface HTTPAdapter {

    public BaseResponse handleHttpGetRequest(BaseRequest requestModel, RequestType requestType) throws EIRException;

    public BaseResponse handleHttpPostRequest(BaseRequest requestModel, RequestType requestType) throws EIRException;

    public HttpRequestModel parseHttpGetRequestModel(LinkedHashMap<String, String> parameters, RequestType requestType) throws EIRException;

    public HttpRequestModel parseHttpPostRequestModel(LinkedHashMap<String, String> parameters, RequestType requestType) throws EIRException;

    public BaseResponse parseHttpResponseModel(Map<String, String> responseMap, RequestType requestType);
}
