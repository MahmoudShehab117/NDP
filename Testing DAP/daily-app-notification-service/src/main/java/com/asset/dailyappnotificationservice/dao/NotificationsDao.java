package com.asset.dailyappnotificationservice.dao;

import com.asset.dailyappnotificationservice.cache.PropertiesCache;
import com.asset.dailyappnotificationservice.constants.Queries;
import com.asset.dailyappnotificationservice.dao.extractors.KeysExtractor;
import com.asset.dailyappnotificationservice.dao.extractors.NotificationsExtractor;
import com.asset.dailyappnotificationservice.dao.preparedStatements.InsertNotificationsPreparedStatement;
import com.asset.dailyappnotificationservice.defines.DatabaseStructs;
import com.asset.dailyappnotificationservice.defines.Defines;
import com.asset.dailyappnotificationservice.defines.ErrorCodes;
import com.asset.dailyappnotificationservice.exceptions.NotificationsException;
import com.asset.dailyappnotificationservice.logger.DailyAppLogger;
import com.asset.dailyappnotificationservice.manager.NotificationsManager;
import com.asset.dailyappnotificationservice.models.NotificationModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;
import java.util.List;

@Component
public class NotificationsDao
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    PropertiesCache properties;

    public ConcurrentHashMap<Integer, String> getModelKeys(String modelType, Integer queryID) {
        try {
            String sqlQuery = NotificationsManager.queries.get(queryID);
            return jdbcTemplate.query(sqlQuery, new KeysExtractor(modelType));
        } catch (EmptyResultDataAccessException ex) {
            return null;
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public ConcurrentHashMap<Integer, String> getServiceClassKeys() {
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_SERVICE_CLASS_KEYS.id);
            return jdbcTemplate.query(sqlQuery, new KeysExtractor(DatabaseStructs.MODEL_TYPE.SERVICE_CLASS));
        } catch (EmptyResultDataAccessException ex) {
            return null;
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public ConcurrentHashMap<Integer, String> getTariffModelKeys() {
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_TARIFF_MODEL_KEYS.id); //Key, Name
            return jdbcTemplate.query(sqlQuery, new KeysExtractor(DatabaseStructs.MODEL_TYPE.TARIFF_MODEL));
        } catch (EmptyResultDataAccessException ex) {
            return null;
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public ConcurrentHashMap<Integer, String> getPriceGroupKeys() {
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_PRICE_GROUP_KEYS.id); //Key, Name
            return jdbcTemplate.query(sqlQuery, new KeysExtractor(DatabaseStructs.MODEL_TYPE.PRICE_GROUP));
        } catch (EmptyResultDataAccessException ex) {
            return null;
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public ConcurrentHashMap<Integer, String> getRatePlanKeys() {
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_RATE_PLAN_KEYS.id); //Key, Name
            return jdbcTemplate.query(sqlQuery, new KeysExtractor(DatabaseStructs.MODEL_TYPE.RATE_PLAN));
        } catch (EmptyResultDataAccessException ex) {
            return null;
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public void insertNotificationBatch(List<NotificationModel> notifications) {
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.ADD_NOTIFICATION.id);
            jdbcTemplate.batchUpdate(sqlQuery, new InsertNotificationsPreparedStatement(notifications));
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION notifications cannot be inserted");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION notifications cannot be inserted");
            ex.printStackTrace();
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public List<NotificationModel> getAllNotifications() {
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_ALL_NOTIFICATIONS.id);
            return jdbcTemplate.query(sqlQuery, new NotificationsExtractor(), properties.getNotificationLifetimeInDays());
        } catch (EmptyResultDataAccessException ex) {
            return null;
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION service classes keys cannot be retrieved");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public void expireNotification(NotificationModel notification){
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.EXPIRE_NOTIFICATION.id);
            jdbcTemplate.update(sqlQuery, notification.getNotificationType(), notification.getDataId());
        }catch(Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION notification cannot be expired");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION notification cannot be expired");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public NotificationModel getNotificationById(Integer notificationId){
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_NOTIFICATION_BY_ID.id);
            return jdbcTemplate.queryForObject(sqlQuery, new BeanPropertyRowMapper<>(NotificationModel.class), notificationId);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }catch(Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION notification cannot be expired");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION notification cannot be expired");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }

    public NotificationModel getNotificationByCheckSum(String checkSum){
        try {
            String sqlQuery = NotificationsManager.queries.get(Queries.GET_NOTIFICATION_BY_CHECK_SUM.id);
            return jdbcTemplate.queryForObject(sqlQuery, new BeanPropertyRowMapper<>(NotificationModel.class), checkSum);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }catch(Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("DATA-ACCESS-EXCEPTION notification cannot be expired");
            DailyAppLogger.DEBUG_LOGGER.error("DATA-ACCESS-EXCEPTION notification cannot be expired");
            throw new NotificationsException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        }
    }
}
