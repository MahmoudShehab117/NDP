/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.services.impl;

import com.asset.eir.core.adapters.HTTPAdapter;
import com.asset.eir.core.adapters.SOAPAdapter;
import com.asset.eir.core.defines.Defines.RequestType;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.services.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.asset.eir.core.models.BaseResponse;
import com.asset.eir.core.models.BaseRequest;

/**
 *
 * @author mahmoud.shehab
 */
@Service
public class MainServiceImpl implements MainService {

    @Autowired
    SOAPAdapter sOAPAdapter;

    @Autowired
    private HTTPAdapter hTTPAdapter;

    @Override
    public BaseResponse sendSOAPRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        BaseResponse response = sOAPAdapter.handleSoapRequest(requestModel, requestType);
        return response;

    }

    @Override
    public BaseResponse sendHTTPGetRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        BaseResponse response = hTTPAdapter.handleHttpGetRequest(requestModel, requestType);
        return response;
    }

    @Override
    public BaseResponse sendHTTPPostRequest(BaseRequest requestModel, RequestType requestType) throws EIRException {

        BaseResponse response = hTTPAdapter.handleHttpPostRequest(requestModel, requestType);
        return response;
    }

    public HTTPAdapter gethTTPAdapter() {
        return hTTPAdapter;
    }

    public void sethTTPAdapter(HTTPAdapter hTTPAdapter) {
        this.hTTPAdapter = hTTPAdapter;
    }

}
