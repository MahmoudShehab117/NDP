package com.asset.dailyappnotificationservice.dao.extractors;

import com.asset.dailyappnotificationservice.defines.DatabaseStructs;
import com.asset.dailyappnotificationservice.defines.Defines;
import com.asset.dailyappnotificationservice.defines.ErrorCodes;
import com.asset.dailyappnotificationservice.exceptions.NotificationsException;
import com.asset.dailyappnotificationservice.logger.DailyAppLogger;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.ConcurrentHashMap;

public class KeysExtractor implements ResultSetExtractor<ConcurrentHashMap<Integer, String>>
{
    private String modelType;
    ConcurrentHashMap<Integer, String> keysMap;

    public KeysExtractor(String modelType) {
        this.modelType = modelType;
    }

    @Override
    public ConcurrentHashMap<Integer, String> extractData(ResultSet rs) throws SQLException, DataAccessException
    {
        try {
            keysMap = new ConcurrentHashMap<>();
            while (rs.next())
            {
                if(modelType.equals(DatabaseStructs.MODEL_TYPE.SERVICE_CLASS))
                    keysMap.put(rs.getInt(DatabaseStructs.SERVICE_CLASS.SERVICE_CLASS_KEY),
                            rs.getString(DatabaseStructs.SERVICE_CLASS.SERVICE_CLASS_NAME));

                else if(modelType.equals(DatabaseStructs.MODEL_TYPE.TARIFF_MODEL))
                    keysMap.put(rs.getInt(DatabaseStructs.TARIFF_MODEL.TARIFF_MODEL_KEY),
                            rs.getString(DatabaseStructs.TARIFF_MODEL.TARIFF_MODEL_NAME));

                else if(modelType.equals(DatabaseStructs.MODEL_TYPE.PRICE_GROUP))
                    keysMap.put(rs.getInt(DatabaseStructs.PRICE_GROUP.PRICE_GROUP_KEY),
                            rs.getString(DatabaseStructs.PRICE_GROUP.PRICE_GROUP_NAME));

                else if(modelType.equals(DatabaseStructs.MODEL_TYPE.RATE_PLAN))
                    keysMap.put(rs.getInt(DatabaseStructs.RATE_PLAN.RATE_PLAN_KEY),
                            rs.getString(DatabaseStructs.RATE_PLAN.RATE_PLAN_NAME));
            }
            return keysMap;
        }catch (Exception ex){
            DailyAppLogger.ERROR_LOGGER.error(">>>>>> Model {} Keys Extraction Exception <<<<<<<", modelType);
            DailyAppLogger.DEBUG_LOGGER.error(">>>>>> Model {} Keys Extraction Exception <<<<<<<", modelType);
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_MAPPING_ERROR, Defines.SEVERITY.FATAL);
        }
    }
}
