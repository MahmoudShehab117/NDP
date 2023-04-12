package com.asset.ccat.nba_service.proxy.db;

import com.asset.ccat.nba_service.configurations.Properties;
import com.asset.ccat.nba_service.defines.ErrorCodes;
import com.asset.ccat.nba_service.exceptions.NBAException;
import com.asset.ccat.nba_service.logger.CCATLogger;
import com.asset.ccat.nba_service.models.requests.tibco.RedeemTibcoGiftRequest;
import com.asset.ccat.nba_service.models.requests.tibco.SendTibcoSMSRequest;
import com.asset.ccat.nba_service.models.responses.GetAllTibcoGiftsResponse;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;

import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;

@Repository
public class TibcoProxy {

    private final WebClient webClient;

    private final Properties properties;

    public TibcoProxy(WebClient webClient, Properties properties) {
        this.webClient = webClient;
        this.properties = properties;
    }

    public GetAllTibcoGiftsResponse getAllTibcoGifts(String URL) throws NBAException {
        GetAllTibcoGiftsResponse response ;
        try {
            CCATLogger.DEBUG_LOGGER.info("Start getAllTibcoGifts Get All Tibco Gifts URL : " + URL);
            Mono<GetAllTibcoGiftsResponse> responseAsync = webClient.get()
                    .uri(URL)
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .acceptCharset(StandardCharsets.UTF_8)
                    .retrieve()
                    .onStatus(httpStatus -> httpStatus.value() != HttpStatus.OK.value(),
                            error -> Mono.error(new NBAException(ErrorCodes.ERROR.TIBCO_NBA_UNREACHABLE, "Tibco Unreachable")))
                    .bodyToMono(new ParameterizedTypeReference<GetAllTibcoGiftsResponse>() {
                    }).log();

            response = responseAsync.block();
            CCATLogger.DEBUG_LOGGER.info("GetAllTibcoGifts Get All Tibco Gifts Ended Successfully ");

            return response;

        } catch (RuntimeException ex) {
            CCATLogger.DEBUG_LOGGER.info("Error while get All Tibco Gifts");
            CCATLogger.ERROR_LOGGER.error("Error while getting All Tibco Gifts ", ex);
            throw new NBAException(ErrorCodes.ERROR.TIBCO_NBA_UNREACHABLE, "Tibco Unreachable");
        }
    }

    public void redeemGift(RedeemTibcoGiftRequest redeemTibcoGiftRequest) throws NBAException {
        String URI = properties.getTibcoRedeemOfferUrl();
        try {
            CCATLogger.DEBUG_LOGGER.info("Start Redeeming Tibco Gift URL : " + URI);
             webClient.post()
                    .uri(URI)
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                     .acceptCharset(StandardCharsets.UTF_8)
                    .body(BodyInserters.fromValue(redeemTibcoGiftRequest))
                    .retrieve()
                     .onStatus(httpStatus -> httpStatus.value() != HttpStatus.OK.value(),
                             error -> Mono.error(new NBAException(ErrorCodes.ERROR.TIBCO_NBA_UNREACHABLE, "Tibco Unreachable")))
                     .bodyToMono(Object.class).log().block();
            CCATLogger.DEBUG_LOGGER.info("Redeeming Tibco Gift Ended Successfully ");

        } catch (RuntimeException ex) {
            CCATLogger.DEBUG_LOGGER.info("Error while Redeeming Tibco Gift");
            CCATLogger.ERROR_LOGGER.error("Error while Redeeming Tibco Gift ", ex);
            throw new NBAException(ErrorCodes.ERROR.TIBCO_NBA_UNREACHABLE, "Tibco Unreachable");
        }
    }


    public void sendSMSGift(SendTibcoSMSRequest sendTibcoSMSRequest) throws NBAException {
        String URI = properties.getTibcoSendSmsUrl();
        try {
            CCATLogger.DEBUG_LOGGER.info("Start Sending Tibco SMS Gift URL : " + URI);
            webClient.post()
                    .uri(URI)
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .acceptCharset(StandardCharsets.UTF_8)
                    .body(BodyInserters.fromValue(sendTibcoSMSRequest))
                    .retrieve()
                    .onStatus(httpStatus -> httpStatus.value() != HttpStatus.OK.value(),
                            error -> Mono.error(new NBAException(ErrorCodes.ERROR.TIBCO_NBA_UNREACHABLE, "Tibco Unreachable")))
                    .bodyToMono(Object.class).log().block();
            CCATLogger.DEBUG_LOGGER.info("Sending Tibco SMS Gift Ended Successfully ");

        } catch (RuntimeException ex) {
            CCATLogger.DEBUG_LOGGER.info("Error while Sending Tibco SMS Gift");
            CCATLogger.ERROR_LOGGER.error("Error while Sending Tibco SMS Gift ", ex);
            throw new NBAException(ErrorCodes.ERROR.TIBCO_NBA_UNREACHABLE, "Tibco Unreachable");
        }
    }


}
