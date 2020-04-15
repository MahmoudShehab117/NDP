/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.defines;

/**
 *
 * @author mahmoud.shehab
 */
public class ErrorCodes {

    public final static class SUCCESS {

        public final static Integer SUCCESS_CODE = 0;
    }

    public final static class ERROR {

        public final static Integer UNKNOWN_ERROR = -100;
        public final static Integer NO_TEMPLATES_FOUND = -101;
        public final static Integer HLR_PGW_FAILED = -102;
        public final static Integer HLR_PGW_TIMEOUT = -103;
        public final static Integer PARAMETER_IS_EMPTY_OR_NULL = -104;
        public final static Integer NOT_AUTHORIZED = -105;
        public final static Integer UNPARSABLE_RESPONSE = -106;
        public final static Integer UNREACHABLE_WEBSERVICE = -110;

        public final static Integer REQUEST_MAX_LIMIT_REACHED = -112;
        
        public final static Integer UNKNOWN_REQUEST_TYPE = -111;

    }

    public final static class ERROR_PARAMS {

        public final static Integer IMEI = -107;
        public final static Integer COLOR = -108;
        public final static Integer LOCKED_IMSI_LIST = -109;
        public final static Integer MSISDN = -112;
    }
}
