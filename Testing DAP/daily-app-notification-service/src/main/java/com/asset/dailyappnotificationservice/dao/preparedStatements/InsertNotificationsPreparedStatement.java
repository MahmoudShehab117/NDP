package com.asset.dailyappnotificationservice.dao.preparedStatements;

import com.asset.dailyappnotificationservice.logger.DailyAppLogger;
import com.asset.dailyappnotificationservice.models.NotificationModel;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class InsertNotificationsPreparedStatement implements BatchPreparedStatementSetter {

    List<NotificationModel> notifications;

    public InsertNotificationsPreparedStatement(List<NotificationModel> notifications) {
        this.notifications = notifications;
    }

    @Override
    public void setValues(PreparedStatement ps, int i) throws SQLException {
        try {
            int j = 1;
            NotificationModel notificationModel = notifications.get(i);

            ps.setString(j++, notificationModel.getNotificationHeader());
            ps.setString(j++, notificationModel.getNotificationDetails());
            ps.setInt(j++, notificationModel.getNotificationType());           
            ps.setInt(j++, notificationModel.getActionDone());
            ps.setString(j++, notificationModel.getCheckSum());       
            ps.setInt(j++, notificationModel.getDataId());
            ps.setString(j++, notificationModel.getDataName());
        } catch (Exception ex) {
            DailyAppLogger.ERROR_LOGGER.error("PREPARING-STATEMENT-EXCEPTION notifications cannot be inserted");
            DailyAppLogger.DEBUG_LOGGER.error("PREPARING-STATEMENT-EXCEPTION notifications cannot be inserted");
        }

    }

    @Override
    public int getBatchSize() {
        return notifications.size();
    }
}
