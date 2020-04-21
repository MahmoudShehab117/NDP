/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.validator;

import com.asset.eir.core.annotations.FullStack;
import com.asset.eir.core.cache.MessagesCache;
import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.models.BlacklistIMEIRequest;
import com.asset.eir.core.models.BlacklistPairsRequest;
import com.asset.eir.core.models.MsisdnInquiryRequest;
import com.asset.eir.core.models.TripletChangeRequest;
import com.asset.eir.core.models.WhitelistIMEIRequest;
import com.asset.eir.core.models.WhitelistPairsRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Validator;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;

/**
 *
 * @author hanan.ayman
 */
@Component
public class CustomValidator implements Validator {

    @Autowired
    MessagesCache messagesCache;

    @Override
    public boolean supports(Class clazz) {
        return WhitelistIMEIRequest.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object o, Errors errors) {
        if (o instanceof WhitelistIMEIRequest) {
            validateWhitelistRequest(errors);
        } else if (o instanceof WhitelistPairsRequest) {
            validateWhitelistPairsRequest(errors);
        } else if (o instanceof TripletChangeRequest) {
            validateTripletChangeRequest((TripletChangeRequest) o, errors);
        } else if (o instanceof BlacklistIMEIRequest) {
            validateBlacklistRequest(errors);
        } else if (o instanceof BlacklistPairsRequest) {
            validateBlacklistPairsRequest(errors);
        } else if (o instanceof MsisdnInquiryRequest) {
            validateMsisdnInquiryRequest(errors);
        }
    }

    @FullStack
    private void validateWhitelistRequest(Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.IMEI, "", ErrorCodes.ERROR.IMEI.toString());
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.COLOUR, "", ErrorCodes.ERROR.COLOR.toString());
    }

    @FullStack
    private void validateWhitelistPairsRequest(Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.IMEI, "", ErrorCodes.ERROR.IMEI.toString());
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.LOCKED_IMSI_LIST, "", ErrorCodes.ERROR.LOCKED_IMSI_LIST.toString());
    }

    @FullStack
    private void validateTripletChangeRequest(TripletChangeRequest request, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.VFEDefines.TRIPLET_CHANGE_TYPE_STRING, ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL.toString());

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.VFEDefines.TRIPLET_MSISDN_STRING, ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL.toString());
        if (!errors.hasFieldErrors(Defines.VFEDefines.TRIPLET_MSISDN_STRING)) {

            try {
                Long.parseLong(request.getMSISDN());
            } catch (NumberFormatException e) {
                errors.reject(ErrorCodes.ERROR.INVALID_MSISDN.toString());
            }

            if (request.getMSISDN().length() != Defines.VFEDefines.MSISDN_LENGTH || !request.getMSISDN().startsWith(Defines.VFEDefines.MSISDN_PREFIX)) {
                errors.reject(ErrorCodes.ERROR.INVALID_MSISDN.toString());
            }
        }

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.VFEDefines.TRIPLET_IMSI_STRING, ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL.toString());
        if (!errors.hasFieldErrors(Defines.VFEDefines.TRIPLET_IMSI_STRING)) {

            try {
                Long.parseLong(request.getIMSI());
            } catch (NumberFormatException e) {
                errors.reject(ErrorCodes.ERROR.INVALID_IMSI.toString());
            }

            if (request.getIMSI().length() > Defines.VFEDefines.IMSI_MAX_LENGTH) {
                errors.reject(ErrorCodes.ERROR.INVALID_IMSI.toString());
            }
        }
        if (request.getTripletChangeType() != null) {
            switch (request.getTripletChangeType()) {
                case add:
                    ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.VFEDefines.TRIPLET_IMEISV_AFTER_STRING, ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL.toString());
                    break;
                case replace:
                    ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.VFEDefines.TRIPLET_IMEISV_BEFORE_STRING, ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL.toString());
                    ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.VFEDefines.TRIPLET_IMEISV_AFTER_STRING, ErrorCodes.ERROR.PARAMETER_IS_EMPTY_OR_NULL.toString());
                    break;
                default:
                    errors.reject(ErrorCodes.ERROR.UNKNOWN_REQUEST_TYPE.toString());
                    break;
            }
        }

        if (!errors.hasFieldErrors(Defines.VFEDefines.TRIPLET_IMEISV_BEFORE_STRING)
                && request.getIMEISVBefore() != null
                && !request.getIMEISVBefore().isEmpty()) {

            try {
                Long.parseLong(request.getIMEISVBefore());
            } catch (NumberFormatException e) {
                errors.reject(ErrorCodes.ERROR.INVALID_IMEISV_BEFORE.toString());
            }

            if (request.getIMEISVBefore().length() != Defines.VFEDefines.IMEISV_LENGTH) {
                errors.reject(ErrorCodes.ERROR.INVALID_IMEISV_BEFORE.toString());
            }
        }

        if (!errors.hasFieldErrors(Defines.VFEDefines.TRIPLET_IMEISV_AFTER_STRING)
                && request.getIMEISVAfter() != null
                && !request.getIMEISVAfter().isEmpty()) {

            try {
                Long.parseLong(request.getIMEISVAfter());
            } catch (NumberFormatException e) {
                errors.reject(ErrorCodes.ERROR.INVALID_IMEISV_AFTER.toString());
            }

            if (request.getIMEISVAfter().length() != Defines.VFEDefines.IMEISV_LENGTH) {
                errors.reject(ErrorCodes.ERROR.INVALID_IMEISV_AFTER.toString());
            }
        }
    }

    private void validateBlacklistRequest(Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.IMEI, "", ErrorCodes.ERROR.IMEI.toString());
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.COLOUR, "", ErrorCodes.ERROR.COLOR.toString());
    }

    private void validateBlacklistPairsRequest(Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.IMEI, "", ErrorCodes.ERROR.IMEI.toString());
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.LOCKED_IMSI_LIST, "", ErrorCodes.ERROR.LOCKED_IMSI_LIST.toString());
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.COLOUR, "", ErrorCodes.ERROR.COLOR.toString());
    }

    private void validateMsisdnInquiryRequest(Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, Defines.NTRADefines.MSISDN, "", ErrorCodes.ERROR.MSISDN.toString());
    }
}
