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
public class Defines {

    public static class VFEDefines {

        //soap WS defines
        public static final String NAMESPACE_URI = "http://www.apertio.com/pgw/trigger";
        public static final String LOCATION_URI = "/vod/ws";
        public static final String SERVLET_URI_MAPPING = "/vod/ws/*";
        public static final String WSDL_NAME = "VodInterfaceWS";
        public static final String XSD_PATH = "xsd/PGW_TS_trigger.xsd";
        public static final String CALL_NTRA_LOCALPART = "trigger";

        //trigger request defines
        public static final String TRIGGER_IMSI_STRING = "imsi";
        public static final String TRIGGER_IMEISV_STRING = "IMEISV";
        public static final String TRIGGER_BASIC_MSISDN_STRING = "basicMsisdn";
        public static final String TRIGGER_DN_DELIMITER_STRING = ",";

        //change triplet model defines
        public static final String TRIPLET_CHANGE_TYPE_STRING = "tripletChangeType";
        public static final String TRIPLET_MSISDN_STRING = "MSISDN";
        public static final String TRIPLET_IMEISV_BEFORE_STRING = "IMEISVBefore";
        public static final String TRIPLET_IMEISV_AFTER_STRING = "IMEISVAfter";
        public static final String TRIPLET_IMSI_STRING = "IMSI";

    }

    public static class NTRADefines {

        public static final String NTRA_CONTROLLER_PATH = "/NTRAInterfaces";
        public static final String WHITE_LIST_IMEI_PATH = "/WhitelistIMEI";
        public static final String WHITE_LIST_PAIR_PATH = "/WhitelistPairs";
        public static final String LOGIN_PATH = "/login";
        public static final String PASSWORD_PATH = "/password";
        public static final String PASSWORD_E_PATH = "/encrypt";
        public static final String PASSWORD_D_PATH = "/decrypt";
        public static final String BLACK_LIST_IMEI_PATH = "/BlacklistIMEI";
        public static final String BLACK_LIST_PAIRS_PATH = "/BlacklistPairs";
        public static final String MSISDN_INQUIRY_PATH = "/GetMSISDNStatus";

        //change triplet model defines
        public static final String TRIPLET_CHANGE_TYPE_STRING = "tripletChangeType";
        public static final String TRIPLET_MSISDN_STRING = "MSISDN";
        public static final String TRIPLET_IMEISV_BEFORE_STRING = "IMEISVBefore";
        public static final String TRIPLET_IMEISV_AFTER_STRING = "IMEISVAfter";
        public static final String TRIPLET_IMSI_STRING = "IMSI";

        //Request Parameters
        public static final String IMEI = "IMEI";
        public static final String COLOUR = "colour";
        public static final String LOCKED_IMSI_LIST = "lockedIMSIList";
        public static final String MSISDN = "msisdn";

        //Transaction Management Defines
        public static final String MAX_REQUESTS_PER_SEC = "maxRequestPerSec";
        public static final String TOTAL_REQUESTS = "totalRequests";
        public static final String REJECTED_REQUESTS = "rejectedRequests";

    }

    public static class NTRA_GENERAL_PROPERTIES_KEYS {

        public static final String CONFIGURATIONS = "configurations";
        public static final String URLS = "urls";
        public static final String PARAMS = "params";
        public static final String RESPONSES = "responses";
        public static final String SOAP_REQUESTS_TEMPLATES_PATH = "soapRequetsTemplatesPath";
        public static final String CONNECTION_TIMEOUT = "connectionTimeout";

    }

    public static class NTRA_REQUEST_PARAM_NAMES {

        public static final String MSISDN = "SubscriptionID";
        public static final String USSD_PARAMS = "USSDParams";
        public static final String CHANNEL = "channel";
    }

    public static enum RequestType {
        whiteListRequest,
        blackListRequest,
        whiteListPairRequest,
        blackListPairRequest,
        msisdnInquiryRequest,
        tripletChangeRequest

    }

    public static enum ResponseType {

        msisdnInquiryResponse,

    }

    public static enum ChangeTripletModificationType {
        add,
        replace
    }

    public static class RequestsPlaceHolders {

        public final static String IMEI = "$imei$";
        public final static String COLOUR = "$colour$";
        public final static String IMSI = "$imsi$";
        public final static String REASON = "$reason$";
    }

    public static class Security {

        public final static String SECURITY_PREFIX = "NTRA";
        public final static String USERNAME = "USERNAME";
        public final static String PRFIX = "PRFIX";

    }

}
