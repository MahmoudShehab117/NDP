package com.asset.dailyappbackendservice.security;

import com.asset.dailyappbackendservice.cache.MessageCache;
import com.asset.dailyappbackendservice.defines.Defines;
import com.asset.dailyappbackendservice.defines.ErrorCodes;
import com.asset.dailyappbackendservice.logger.DailyAppLogger;
import com.asset.dailyappbackendservice.service.RefreshConfigServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.*;

@Configuration
public class ResourceServerConfig {

    private final ArrayList<String> AUTH_WHITELIST = new ArrayList<>(Arrays.asList(
            // -- Login
            Defines.ContextPaths.LOGIN
    ));
    private final String REFRESH_PATH = Defines.ContextPaths.REFRESH_PATH;
    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @Autowired
    MessageCache messageCache;
    @Autowired
    RefreshConfigServerService RestService;

    @Bean
    public GlobalFilter globalFilter() {
        return (exchange, chain) -> {
            boolean permit = AUTH_WHITELIST.stream().anyMatch(path -> path.equals(exchange.getRequest().getPath().toString()));

            if (!permit) {
                if (exchange.getRequest().getHeaders().get("Authorization") == null) {
                    DailyAppLogger.DEBUG_LOGGER.debug(" not token ");
                    DailyAppLogger.ERROR_LOGGER.error(" not token ");

                    return NotAuthorizedResponse(exchange);
                }
                String AuthorizationToken = exchange.getRequest().getHeaders().get("Authorization").get(0);
                Boolean validation = jwtTokenUtil.validateToken.test(AuthorizationToken);
                if (!validation) {
                    DailyAppLogger.DEBUG_LOGGER.debug("token not valid ");
                    DailyAppLogger.ERROR_LOGGER.error("token not valid ");
                    return NotAuthorizedResponse(exchange);

                }
            }
            if (REFRESH_PATH.equals(exchange.getRequest().getPath().toString())){
                DailyAppLogger.DEBUG_LOGGER.debug("if url refresh config service  ");
                String refreshResponse=  RestService.refreshConfigServers();
                return  refreshActuatorResponse(exchange,refreshResponse);
            }

            return chain.filter(exchange);
        };
    }

    private Mono<Void> NotAuthorizedResponse(ServerWebExchange exchange) {
        ServerHttpResponse serverHttpResponse = exchange.getResponse();
        serverHttpResponse.setStatusCode(HttpStatus.OK);
        int error = ErrorCodes.ERROR.USER_NOT_AUTHORIZED;
        String message = messageCache.getErrorMsg(error);
        int severity =  Defines.SEVERITY.ERROR;
        byte[] response = ("{\"statusCode\":" + error + ",\"statusMessage\":\"" + message + " \",\"severity\": " + severity + " }").getBytes(StandardCharsets.UTF_8);
        DataBuffer buffer = exchange.getResponse().bufferFactory().wrap(response);
        return exchange.getResponse().writeWith(Flux.just(buffer));
    }
    private Mono<Void> refreshActuatorResponse(ServerWebExchange exchange,String refreshResponse) {
        ServerHttpResponse serverHttpResponse = exchange.getResponse();
        serverHttpResponse.setStatusCode(HttpStatus.OK);
        int responseOk = ErrorCodes.SUCCESS.SUCCESS;
        String message = messageCache.getSuccessMsg(responseOk);
        String traceId = UUID.randomUUID().toString();
        byte[] response = ("{\"statusCode\":" + responseOk + ",\"statusMessage\":\"" + message + " \",\"traceId\": " +
                "\""+ traceId + "\""+ " ,\"payload\": " + refreshResponse + " }").getBytes(StandardCharsets.UTF_8);
        DataBuffer buffer = exchange.getResponse().bufferFactory().wrap(response);
        return exchange.getResponse().writeWith(Flux.just(buffer));
    }

}
