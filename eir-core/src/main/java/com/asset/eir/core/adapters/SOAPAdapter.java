/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.adapters;

import com.asset.eir.core.annotations.FullStack;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.models.BaseRequest;
import com.asset.eir.core.models.BaseResponse;
import com.asset.eir.core.models.HttpRequestModel;
import com.asset.eir.core.models.HttpResponseModel;
import java.io.InputStream;
import org.springframework.stereotype.Component;

/**
 *
 * @author mahmoud.shehab
 */
public interface SOAPAdapter {

    public BaseResponse handleSoapRequest(BaseRequest baseRequest, Defines.RequestType requestType) throws EIRException;

    @FullStack
    public HttpRequestModel parseBaseRequestToSOAPRequest(BaseRequest baseRequest, Defines.RequestType requestType) throws EIRException;

    @FullStack
    public String generateRequest(BaseRequest baseRequest, Defines.RequestType requestType) throws EIRException;

    @FullStack
    public BaseResponse parseSOAPResponseToBaseResponse(HttpResponseModel httpResponseModel) throws EIRException;

}
