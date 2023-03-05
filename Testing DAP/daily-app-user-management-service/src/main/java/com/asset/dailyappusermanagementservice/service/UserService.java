package com.asset.dailyappusermanagementservice.service;

import com.asset.dailyappusermanagementservice.configurations.Properties;
import com.asset.dailyappusermanagementservice.database.dao.imp.ProfileDaoImp;
import com.asset.dailyappusermanagementservice.database.dao.imp.UsersDaoImp;
import com.asset.dailyappusermanagementservice.defines.Defines;
import com.asset.dailyappusermanagementservice.defines.ErrorCodes;
import com.asset.dailyappusermanagementservice.exception.UserManagementException;
import com.asset.dailyappusermanagementservice.logger.DailyAppLogger;
import com.asset.dailyappusermanagementservice.models.responses.LoginResponse;
import com.asset.dailyappusermanagementservice.models.responses.user.GetAllUsersResponse;
import com.asset.dailyappusermanagementservice.models.user.UserModel;
import com.asset.dailyappusermanagementservice.models.user.UserProfileModel;
import com.asset.dailyappusermanagementservice.security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {
    @Autowired
    Properties properties;

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @Autowired
    UsersDaoImp usersDaoImp;

    @Autowired
    private ProfileDaoImp profileDaoImp;

    @Autowired
    LdapService ldapService;

    public LoginResponse login(String name, String password) throws UserManagementException {
        long startTime = System.currentTimeMillis();
        LoginResponse resp;
        if (properties.getLdapAuthenticationFlag()) {
            DailyAppLogger.DEBUG_LOGGER.info("Start integration with LDAP with ntAccount[" + name + "] and password [***]");
            DailyAppLogger.INFO_LOGGER.info("Start integration with LDAP with ntAccount[" + name + "] and password [***]");
            ldapService.authenticateUser(name, password);
            DailyAppLogger.DEBUG_LOGGER.info("Integration with LDAP done successfully in " + (System.currentTimeMillis() - startTime) + " msec");
            DailyAppLogger.INFO_LOGGER.info("Integration with LDAP done successfully in " + (System.currentTimeMillis() - startTime) + " msec");

        }

        UserModel user;
        user = retrieveUserByName(name);
        DailyAppLogger.DEBUG_LOGGER.info("Login with user [" + user + "]");
        DailyAppLogger.DEBUG_LOGGER.debug("Generating token for user");
        String authToken = generateToken(user);

        resp = new LoginResponse();
        resp.setUser(user);
        resp.setToken(authToken);
        return resp;
    }

    private String generateToken(UserModel userModel) throws UserManagementException {
        final String token = jwtTokenUtil.generateToken(userModel);
        return token;
    }

    public Integer createUser(UserModel userModel) throws UserManagementException {
        DailyAppLogger.DEBUG_LOGGER.debug("user to be added: {} ", userModel);
        DailyAppLogger.DEBUG_LOGGER.debug("Checking username uniqueness...");
        if (usersDaoImp.retrieveUserByUsername(userModel.getUsername()) != null)
        {
            DailyAppLogger.DEBUG_LOGGER.debug("Username Should be Unique");
            DailyAppLogger.ERROR_LOGGER.error("Username Should be Unique");
            throw new UserManagementException(ErrorCodes.ERROR.USERNAME_SHOULD_BE_UNIQUE, Defines.SEVERITY.ERROR);
        }

        Integer id = usersDaoImp.createUser(userModel);
        if (id.equals(0) || id == null)
            throw new UserManagementException(ErrorCodes.ERROR.DATABASE_ERROR, Defines.SEVERITY.ERROR);
        return id;
    }

    public GetAllUsersResponse retrieveUsers() throws UserManagementException {
        List<UserModel> users = usersDaoImp.retrieveUsers();
        if (users == null || users.isEmpty()) {
            DailyAppLogger.DEBUG_LOGGER.error("No users were found");
            DailyAppLogger.ERROR_LOGGER.error("No users were found");
            throw new UserManagementException(ErrorCodes.ERROR.NO_USERS_FOUND, Defines.SEVERITY.ERROR);
        }
        DailyAppLogger.DEBUG_LOGGER.debug("Done retrieving # {} users", users.size());
        return new GetAllUsersResponse(users);
    }

    public UserModel retrieveUserByName(String userName) throws UserManagementException {
        UserModel user = usersDaoImp.retrieveUserByUsername(userName);
        if (user == null) {
            DailyAppLogger.DEBUG_LOGGER.error("User not found");
            throw new UserManagementException(ErrorCodes.ERROR.USER_NOT_FOUND, Defines.SEVERITY.ERROR);
        }
        UserProfileModel userProfile = profileDaoImp.get(user.getProfileId());
        if (userProfile.getIsActive() == 0) {
            DailyAppLogger.DEBUG_LOGGER.error("profile not active");
            throw new UserManagementException(ErrorCodes.ERROR.PROFILE_NOT_ACTIVE, Defines.SEVERITY.ERROR);

        }
        user.setProfileModel(userProfile);
        return user;
    }

    public UserModel retrieveUserById(Integer id) throws UserManagementException {
        UserModel user = usersDaoImp.retrieveUserById(id);
        if (user == null) {
            DailyAppLogger.DEBUG_LOGGER.debug("cannot find user id");
            DailyAppLogger.ERROR_LOGGER.error("cannot find user id");
            throw new UserManagementException(ErrorCodes.ERROR.USER_NOT_FOUND, Defines.SEVERITY.ERROR);
        }
        UserProfileModel userProfile = profileDaoImp.get(user.getProfileId());
        user.setProfileModel(userProfile);
        DailyAppLogger.DEBUG_LOGGER.info(user);
        return user;
    }

    public Integer updateUser(Integer id, UserModel updatedUser) throws UserManagementException {
        DailyAppLogger.DEBUG_LOGGER.debug("Updating user #id=" + id);
        UserModel user = usersDaoImp.retrieveUserById(id);
        if (user == null) {
            DailyAppLogger.DEBUG_LOGGER.error("User Is Not Found id = " + id);
            DailyAppLogger.ERROR_LOGGER.error("User Is Not Found id = " + id);
            throw new UserManagementException(ErrorCodes.ERROR.USER_NOT_FOUND, Defines.SEVERITY.ERROR);
        }
        DailyAppLogger.INFO_LOGGER.info("pre-updated user = {}", user);
        DailyAppLogger.INFO_LOGGER.info("updated user = {}", updatedUser);

        DailyAppLogger.DEBUG_LOGGER.debug("Checking Username Uniqueness...");
        UserModel checkedUser = usersDaoImp.retrieveUserByUsername(updatedUser.getUsername());
        if (checkedUser != null && !checkedUser.getUserId().equals(user.getUserId()))
        {
            DailyAppLogger.DEBUG_LOGGER.debug("!-------Username Should be Unique-----!");
            DailyAppLogger.ERROR_LOGGER.error("Username Should be Unique");
            throw new UserManagementException(ErrorCodes.ERROR.USERNAME_SHOULD_BE_UNIQUE, Defines.SEVERITY.ERROR);
        }

        return usersDaoImp.updateUser(updatedUser, id);
    }

    public void deleteUser(Integer id) throws UserManagementException {
        UserModel user = usersDaoImp.retrieveUserById(id);
        if (user == null) {
            DailyAppLogger.DEBUG_LOGGER.debug("User Is Not Found");
            DailyAppLogger.ERROR_LOGGER.error("User Is Not Found");
            throw new UserManagementException(ErrorCodes.ERROR.USER_NOT_FOUND, Defines.SEVERITY.ERROR);
        }
        usersDaoImp.deleteUser(id);
        DailyAppLogger.DEBUG_LOGGER.debug("User {} {} is deleted", user.getUsername(), user.getUserId());
    }

    public void clearUsers() {
        usersDaoImp.clearUsers();
    }

    public Boolean isUserExists(Integer userId) throws UserManagementException {
        DailyAppLogger.DEBUG_LOGGER.debug("Checking if user with ID[" + userId + "] exists in DB");
        return usersDaoImp.findUser(userId) > 0;
    }

    public Integer retrieveUsersByProfileId(Integer profileId) throws UserManagementException {
        DailyAppLogger.DEBUG_LOGGER.debug("Retrieving users with profile ID [" + profileId + "]");
        return usersDaoImp.retrieveUsersByProfileId(profileId);
    }


}
