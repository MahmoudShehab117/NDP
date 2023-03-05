package com.asset.loggingService.constants;

public enum Queries {
    GET_ALL_SYSTEM_SETTING(88),
    UPDATE_SYSTEM_SETTING(91),
    TRANSACTION_LOGGING(77),
    SET_TX_USER_ACTIONS_DETAILS(83),
    GET_TRANSACTION_LOGGING(85),
    GET_ALL_GROUP(1),
    ADD_PROFILE(2),
    GET_PROFILE(3),
    GET_ALL_PROFILES(4),
    DELETE_PROFILE(5),
    UPDATE_PROFILE(6),
    UPDATE_PRICE_GROUP(7),
    GET_PRICE_GROUP_GROUPS(8),
    GET_ALL_SERVICE_CLASS(9),
    UPDATE_SERVICE_CLASS(10),
    GET_ALL_TARIFF_MODEL(11),
    UPDATE_TARIFF_MODEL(12),
    GET_PG_GROUP(30),
    UPDATE_PG_GROUP(31),
    update_PRICEGROUP(32),
    INSERT_PG_GROUP(33),
    GET_RATE_PLAN_BY_CODE(25),
    GET_ALL_RATE_PLANS(26),
    GET_ALL_RATE_PLAN_GROUPS(27),
    ADD_RATE_PLAN_GROUP(28),
    GET_RATE_PLAN_BY_KEY(29),
    UPDATE_RATE_PLAN_GROUP(34),
    UPDATE_RATE_PLAN(23),
    GET_PRICE_GROUP_GROUPS_ById(54),
    GET_RATE_PLAN_GROUP_BY_KEY(61),
    GET_RATE_PLAN_GROUPS_WITH_RP(62),
    UPDATE_RP_GROUP_KEY_IN_RATE_PLANE(65),
    GET_RATE_PLAN_GROUP_BY_ID_WITH_RATE_PLANS(64),
    REMOVE_RATE_PLAN_GROUP_KEY_FROM_RATE_PLAN(67),
    DELETE_PG_GROUP(70),
    SET_PG_GROUP_KEY_NULL_IN_PRICE_GROUP(71),
    DELETE_RATE_PLAN_GROUP(69),  GET_RATE_PLAN_KEYS(79),
    GET_SERVICE_CLASS_KEYS(80),
    GET_PRICE_GROUP_KEYS(81),
    GET_TARIFF_MODEL_KEYS(82),
    ADD_NOTIFICATION(84),
    GET_ACCOUNTS(86),
    GET_ALL_NOTIFICATIONS(89),
    EXPIRE_NOTIFICATION(90),
    GET_NOTIFICATION_BY_ID(92),
    RERTRIEVE_balances(35),
    RERTRIEVE_aggregation_data(36),
    RERTRIEVE_transaction_types_lookups(37),
    UPDATE_VALID_ENGINE_AGGREGATION(45),
    UPDATE_VALIDATION_ENGINE(46),
    INSERT_DAILY_DAILY_DATA_AGGREGATION(47),
    INSERT_CLOSING_DAILY_DATA_AGGREGATION(48),
    INSERT_NET_ADDS_DAILY_DATA_AGGREGATION(49),
    GET_AGGREGATION_DATA_BY_DAY(50),
    INSERT_AGGREGATED_DATA(74),
    GET_ALL_TRANSFER_ADJUSTMENT(66),
    INSERT_TRANSFER_DATA(68),
    RERTRIEVE_All_transaction_types_lookups(73),
    GET_PG_GROUP_KEY_BY_PG_KEY(75),
    ADD_PRIVILEGE(15),
    GET_PRIVILEGE(16),
    GET_ALL_PRIVILEGE(17),
    DELETE_PRIVILEGE(18),
    FIND_PRIVILEGE_BY_ID(19),
    UPDATE_PRIVILEGE(20),
    GET_COUNT_OF_PROFILES_PRIVILEGE(21),
    GET_ALL_USERS(24),
    GET_USER_BY_ID(40),
    Add_USER(41),
    UPDATE_USER(42),
    DELETE_USER_BY_ID(43),
    CLEAR_USERS(44),
    INSERT_DAILY_PROFILE_PRIVILEGES(51),
    FIND_PROFILE_IF_EXIST(52),
    deleteProfileFeaturesQuery(53),
    get_active_profile(55),
    FIND_PROFILE_NAME_IF_EXIST(72)

    ;

    public final int id;
    Queries(int id) {
    this.id= id;
    }
}
