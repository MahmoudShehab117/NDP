package com.asset.dailyappbackendservice.security;

import com.asset.dailyappbackendservice.logger.DailyAppLogger;
import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.function.Function;
import java.util.function.Predicate;

@Component
public class JwtTokenUtil {

    Predicate<String> tokenExpiration = (token) -> {
        Date expiration = getClaimFromToken(token, Claims::getExpiration);
        return expiration.before(new Date());
    };
    private Function<String, Claims> getAllClaimsFromToken = (token) -> Jwts.parser()
            .setSigningKey("DAILY_APP_2021")
            .parseClaimsJws(token)
            .getBody();
    Predicate<String> validateToken = (token) -> {
        try {
            token = token.substring(7);
            if (tokenExpiration.test(token)) {
                DailyAppLogger.DEBUG_LOGGER.debug("token expired");
                return false;
            }
        } catch (Exception ex) {
            DailyAppLogger.DEBUG_LOGGER.debug("an error occurred : " + ex.getMessage());
            DailyAppLogger.DEBUG_LOGGER.info("an error occurred ");
            DailyAppLogger.ERROR_LOGGER.error("Failed to validate Token " + ex.getMessage(), ex);
            return false;
        }
        return true;
    };

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken.apply(token);
        return claimsResolver.apply(claims);
    }


}
