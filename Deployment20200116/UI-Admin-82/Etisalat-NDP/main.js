(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/account/add-edit/add-edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/account/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/account/change-password/change-password.component.ts");
/* harmony import */ var _users_accounts_list_users_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-accounts-list/users-accounts-list.component */ "./src/app/account/users-accounts-list/users-accounts-list.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _add_edit_users_accounts_add_edit_users_accounts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-edit-users-accounts/add-edit-users-accounts.component */ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.ts");
/* harmony import */ var _signup_requests_signup_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup-requests/signup-requests.component */ "./src/app/account/signup-requests/signup-requests.component.ts");
/* harmony import */ var _shared_Pipes_users_username_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/Pipes/users-username-filter.pipe */ "./src/app/shared/Pipes/users-username-filter.pipe.ts");
/* harmony import */ var _shared_Pipes_users_status_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/Pipes/users-status-filter.pipe */ "./src/app/shared/Pipes/users-status-filter.pipe.ts");
/* harmony import */ var _shared_Pipes_users_activedirectory_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/Pipes/users-activedirectory-filter.pipe */ "./src/app/shared/Pipes/users-activedirectory-filter.pipe.ts");
/* harmony import */ var _shared_Pipes_users_businessentity_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/Pipes/users-businessentity-filter.pipe */ "./src/app/shared/Pipes/users-businessentity-filter.pipe.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__["AccountEditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], _users_accounts_list_users_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersAccountsListComponent"], _add_edit_users_accounts_add_edit_users_accounts_component__WEBPACK_IMPORTED_MODULE_10__["AddEditUsersAccountsComponent"], _signup_requests_signup_requests_component__WEBPACK_IMPORTED_MODULE_11__["SignupRequestsComponent"], _shared_Pipes_users_username_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["UsersUsernameFilter"], _shared_Pipes_users_status_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["UsersStatusFilter"], _shared_Pipes_users_activedirectory_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["UsersActiveDirectoryFilter"], _shared_Pipes_users_businessentity_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["UsersEntityFilter"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = /** @class */ (function (_super) {
    __extends(AccountService, _super);
    function AccountService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    AccountService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    // public getUser(): Observable<ApiResponse<User>> {
    //   let apiUrl = this.backendUrl + this.secureApi + Defines.API_ENDPOINTS.USER + Defines.API_ENDPOINTS.GET;
    //   console.log("ajskdjklasjdkjaksjdkllajskdjlkajsdjksjakldjklajskldjaksjdj  \n\n\n\n\n"+apiUrl);
    //   let obs: Observable<any> = this.http.post<ApiResponse<User>>
    //     (apiUrl, new ApiRequest(null, ""), this.httpOptions);
    //   return obs;
    // }
    AccountService.prototype.listUsersAccounts = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.listLdapUsers = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.LIST_LDAP;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.getUser = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.deleteUser = function (id) {
        console.log("delete user event starrted ---------");
        debugger;
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](id, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.getUserById = function (id) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](id, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.createUser = function (user) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.CREATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](user, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.updateUser = function (user) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](user, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.saveUser = function (user) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](user, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.saveMyProfile = function (user) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.MY_PROFILE + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](user, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.savePassword = function (password) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.UPDATE_PASSWORD;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](password, ""), this.httpOptions);
        return obs;
    };
    AccountService.prototype.getAllEntities = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.entity + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        return obs;
    };
    AccountService.prototype.getAllRoles = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.list;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    AccountService.prototype.validateEmail = function (email) {
        return email.match("^[A-z0-9._%+-]+@[A-z0-9.-]+\\.[A-z]{2,6}$").length > 0;
    };
    AccountService.prototype.validateMsisdn = function (msisdn) {
        return msisdn.match("[+]?[0][1][1|0|2|5][0-9]{8}").length > 0;
    };
    AccountService.prototype.validatePasswords = function (newPassword, newPasswordConfirm) {
        return newPassword != null && newPassword.length > 3;
    };
    AccountService.prototype.validateName = function (name) {
        return name != null && name.match("[A-z]+").length > 0;
    };
    AccountService.prototype.validateUsername = function (username) {
        return username != null && username.match("[A-z]+").length > 0;
    };
    AccountService.prototype.validateBoolean = function (boolean) {
        return boolean == true || boolean == false;
    };
    AccountService.prototype.getSignUpRequests = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.signupRequests;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        return obs;
    };
    AccountService.prototype.approveUser = function (user) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.USER + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.approve;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](user, ""), this.httpOptions);
        return obs;
    };
    AccountService.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccountService);
    return AccountService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkLWVkaXQtdXNlcnMtYWNjb3VudHMvYWRkLWVkaXQtdXNlcnMtYWNjb3VudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content \">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-6\">\r\n            <div class=\"page-title\">\r\n                Users Accounts\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\" *ngIf=\"tempUser != null\">\r\n        <div class=\"row mt-2\">\r\n            <div *ngIf=\"isEditMode() && signUpApproval\" class=\"col-10 text-left section-title\">Approve Account</div>\r\n            <div *ngIf=\"isEditMode() && !signUpApproval\" class=\"col-10 text-left section-title\">Edit Account</div>\r\n            <div *ngIf=\"!isEditMode() && !signUpApproval\" class=\"col-10 text-left section-title\">Add Account</div>\r\n            <div class=\"col-2\">\r\n                <label style=\"font-size: 16px; font-family:'robotomedium'; color: #464852;\"\r\n                    class=\"mr-1\">{{tempUser.isActive ? 'Active' : 'Inactive'}}</label>\r\n                <label class=\"switch\" for=\"isActiveCheck\">\r\n                    <input [(ngModel)]=\"tempUser.isActive\" class=\"checkbox\" type=\"checkbox\" id=\"isActiveCheck\" />\r\n                    <span class=\"slider\"></span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"userForm\" class=\"form-input\">\r\n            <form [formGroup]=\"userForm\">\r\n                <div class=\"row mt-4 pl-4\">\r\n                    <div class=\"col-3 pt-4 custom-checkbox\">\r\n                        <input formControlName=\"isLdapUser\" class=\"custom-control-input\" type=\"checkbox\"\r\n                            id=\"activeCheck\" (click)=\"clearUserNameControl()\" />\r\n                        <label class=\"custom-control-label\" for=\"activeCheck\">Active Directory User</label>\r\n                    </div>\r\n                    <div class=\"col-4 text-left form-selectbox\">\r\n                        <label class=\"form-input-label\">Username</label>\r\n                        <input *ngIf=\"!isEditMode() && !uf.isLdapUser.value\" class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.userName.errors && (uf.userName.touched || uf.userName.dirty) }\"\r\n                            formControlName=\"userName\" />\r\n                        <input *ngIf=\"isEditMode()\" class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.userName.errors && (uf.userName.touched || uf.userName.dirty) }\"\r\n                            formControlName=\"userName\" readonly />\r\n\r\n                            <div *ngIf=\"!isEditMode() && uf.isLdapUser.value && activeDirectoryUsers != null\">\r\n                                <p-dropdown [options]=\"activeDirectoryUsersSelectItems\" placeholder=\"Select User\"\r\n                                formControlName=\"userName\" [virtualScroll]=\"true\" [(ngModel)]=\"tempUser.userName\" itemSize=\"40\" [filter]=\"true\"></p-dropdown>\r\n                            <!-- <select formControlName=\"userName\" class=\"selectbox\" [ngClass]=\"{ 'invalid-input': uf.userName.errors && (uf.userName.touched || uf.userName.dirty) }\">\r\n                                <option *ngFor=\"let activeDirectoryUser of activeDirectoryUsers\"\r\n                                    value=\"{{activeDirectoryUser}}\">\r\n                                    {{activeDirectoryUser}}</option>\r\n                            </select> -->\r\n                            \r\n                        </div>\r\n                        <div *ngIf=\"uf.userName.errors && (uf.userName.touched || uf.userName.dirty)\">\r\n                            <div *ngIf=\"uf.userName.errors.required\" class=\"invalid-text\">Username is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"!signUpApproval && isEditMode() && !uf.isLdapUser.value\" class=\"col-4 text-left \">\r\n                        <label class=\"form-input-label\">Password</label>\r\n                        <input class=\"input\" type=\"password\"\r\n                            [ngClass]=\"{'invalid-input': uf.password.errors && (uf.password.touched || uf.password.dirty) }\"\r\n                            formControlName=\"password\" />\r\n                        <div *ngIf=\"uf.password.errors && (uf.password.touched || uf.password.dirty)\">\r\n                            <div *ngIf=\"uf.password.errors.pattern\" class=\"invalid-text\">New password should be a\r\n                                minimum of 7 letters and 1 character</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-3\">\r\n                        <div class=\"form-input form-selectbox\">\r\n                            <label class=\"form-input-label\">Business Entity</label>\r\n                            <select formControlName=\"entityId\" class=\"selectbox\"\r\n                                [ngClass]=\"{ 'invalid-input': uf.entityId.errors && (uf.entityId.touched || uf.entityId.dirty) }\"\r\n                                (change)=\"setTempUserBusinessEntity($event.target.value)\">\r\n                                <option *ngFor=\"let businessEntity of listBusinessEntities()\"\r\n                                    value=\"{{businessEntity.entityId}}\">\r\n                                    {{businessEntity.entityName}}</option>\r\n                            </select>\r\n                            <div class=\"form-selectbox-icon\"></div>\r\n                            <div *ngIf=\"uf.entityId.errors && (uf.entityId.touched || uf.entityId.dirty)\">\r\n                                <div *ngIf=\"uf.entityId.errors.required\" class=\"invalid-text\">Select a Business Entity\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4\">\r\n\r\n                    <div class=\"col-3 text-left \">\r\n                        <label class=\"form-input-label\">First Name</label>\r\n                        <input class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.fName.errors && (uf.fName.touched || uf.fName.dirty) }\"\r\n                            formControlName=\"fName\" />\r\n                        <div *ngIf=\"uf.fName.errors && (uf.fName.touched || uf.fName.dirty)\">\r\n                            <div *ngIf=\"uf.fName.errors.required\" class=\"invalid-text\">First name is required</div>\r\n                            <div *ngIf=\"!uf.fName.errors.required && uf.fName.errors.minlength\" class=\"invalid-text\">\r\n                                First name can't be less than 2 characters</div>\r\n                            <div *ngIf=\"!uf.fName.errors.required && !uf.fName.errors.minlength && uf.fName.errors.pattern\"\r\n                                class=\"invalid-text\">Invalid First Name</div>\r\n                            <div *ngIf=\"uf.fName.errors.maxlength\" class=\"invalid-text\">First name can't be more than 25\r\n                                characters\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-3 text-left \">\r\n                        <label class=\"form-input-label\">Last Name</label>\r\n                        <input class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.lName.errors && (uf.lName.touched || uf.lName.dirty) }\"\r\n                            formControlName=\"lName\" />\r\n                        <div *ngIf=\"uf.lName.errors && (uf.lName.touched || uf.lName.dirty)\">\r\n                            <div *ngIf=\"uf.lName.errors.required\" class=\"invalid-text\">Last name is required</div>\r\n                            <div *ngIf=\"!uf.lName.errors.required && uf.lName.errors.minlength\" class=\"invalid-text\">\r\n                                Last name can't be less than 2 characters</div>\r\n                            <div *ngIf=\"!uf.lName.errors.required && !uf.lName.errors.minlength && uf.lName.errors.pattern\"\r\n                                class=\"invalid-text\">Invalid Last Name</div>\r\n                            <div *ngIf=\"uf.lName.errors.maxlength\" class=\"invalid-text\">Last name can't be more than 25\r\n                                characters\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 text-left \">\r\n                        <label class=\"form-input-label\">Address</label>\r\n                        <input class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.address.errors && (uf.address.touched || uf.address.dirty) }\"\r\n                            formControlName=\"address\" />\r\n                        <div *ngIf=\"uf.address.errors && (uf.address.touched || uf.address.dirty)\">\r\n                            <div *ngIf=\"uf.address.errors.maxlength\" class=\"invalid-text\">Address must be less than 100\r\n                                characters\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 text-left \">\r\n                        <label class=\"form-input-label\">Email</label>\r\n                        <input class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.email.errors && (uf.email.touched || uf.email.dirty) }\"\r\n                            formControlName=\"email\" />\r\n                        <div *ngIf=\"uf.email.errors && (uf.email.touched || uf.email.dirty)\">\r\n                            <div *ngIf=\"uf.email.errors.required\" class=\"invalid-text\">Email is required</div>\r\n                            <div *ngIf=\"uf.email.errors.email\" class=\"invalid-text\">Email is not valid</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-3 text-left \">\r\n                        <label class=\"form-input-label\">Mobile</label>\r\n                        <input class=\"input\"\r\n                            [ngClass]=\"{ 'invalid-input': uf.msisdn.errors && (uf.msisdn.touched || uf.msisdn.dirty) }\"\r\n                            formControlName=\"msisdn\" />\r\n                        <div *ngIf=\"uf.msisdn.errors && (uf.msisdn.touched || uf.msisdn.dirty)\">\r\n                            <div *ngIf=\"uf.msisdn.errors.required\" class=\"invalid-text\">Mobile Number is required</div>\r\n                            <div *ngIf=\"uf.msisdn.errors.notValid\" class=\"invalid-text\">Mobile Number is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4 pl-4\">\r\n                    <div *ngIf=\"canAddFakeSenderFlag\" class=\"col-6 custom-checkbox\">\r\n                        <input formControlName=\"canAddFakeSender\" class=\"custom-control-input\" type=\"checkbox\"\r\n                            id=\"fakeSenderCheck\" />\r\n                        <label class=\"custom-control-label\" for=\"fakeSenderCheck\">Can Add Fake Sender</label>\r\n                    </div>\r\n                    <div class=\"col-4 custom-checkbox\">\r\n                        <input formControlName=\"needsApproval\" class=\"custom-control-input\" type=\"checkbox\"\r\n                            id=\"approvalCheck\" />\r\n                        <label class=\"custom-control-label\" for=\"approvalCheck\">Needs Approval</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-3\">\r\n                        <div class=\"text-left form-input form-selectbox\">\r\n                            <label class=\"form-input-label\">Role</label>\r\n                            <select *ngIf=\"this.tempUser\" formControlName=\"role\" class=\"selectbox\"\r\n                                (change)=\"setTempUserRole($event.target.value)\"\r\n                                [ngClass]=\"{ 'invalid-input': uf.role.errors && (uf.role.touched || uf.role.dirty) }\">\r\n                                <option *ngFor=\"let role of listRoles()\" value=\"{{role.id}}\">\r\n                                    {{role.label}}</option>\r\n                            </select>\r\n                            <div class=\"form-selectbox-icon\"></div>\r\n                            <div *ngIf=\"uf.role.errors && (uf.role.touched || uf.role.dirty)\">\r\n                                <div *ngIf=\"uf.role.errors.required\" class=\"invalid-text\">Select a Role</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-12 text-right\">\r\n\r\n                <button *ngIf=\"!isEditMode()\" class=\"button button-green mr-2 \" (click)=\"createUser()\">\r\n                    Save\r\n                </button>\r\n                <button *ngIf=\"isEditMode() && !signUpApproval\" class=\"button button-green mr-2 \"\r\n                    (click)=\"updateUser()\">\r\n                    Save\r\n                </button>\r\n                <button *ngIf=\"isEditMode() && signUpApproval && tempUser.signupStatus == pending\"\r\n                    class=\"button button-green mr-2 \" (click)=\"updateUser()\">\r\n                    Approve\r\n                </button>\r\n                <button class=\"button button-black \" (click)=\"cancel()\">\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddEditUsersAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUsersAccountsComponent", function() { return AddEditUsersAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_admin_view_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/admin-view-user-model */ "./src/app/shared/models/admin-view-user-model.ts");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var src_app_entity_entity_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entity/entity-service.service */ "./src/app/entity/entity-service.service.ts");
/* harmony import */ var src_app_roles_role_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/roles/role-manager.service */ "./src/app/roles/role-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddEditUsersAccountsComponent = /** @class */ (function () {
    function AddEditUsersAccountsComponent(accountService, entityService, roleService, router, route, formBuilder) {
        this.accountService = accountService;
        this.entityService = entityService;
        this.roleService = roleService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.activeDirectoryUsersSelectItems = new Array();
        this.businessEntities = new Array();
        this.roles = new Array();
        this.canAddFakeSenderFlag = false;
        //signup approval flag used for signup requests page
        this.signUpApproval = false;
        this.pending = _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SIGNUP_STATUS.PENDING;
    }
    AddEditUsersAccountsComponent.prototype.initUserForm = function () {
        this.userForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*(),.?\":{}|<>\\/]{8,}$")]],
            fName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA-Z][a-zA-Z .'-]+"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            lName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA-Z][a-zA-Z .'-]+"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            msisdn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, this.msisdnValidator]],
            entityId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            canAddFakeSender: [false],
            needsApproval: [true, { disabled: false }],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            isLdapUser: [false, { disabled: false }]
        });
    };
    AddEditUsersAccountsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("userId:" + this.userId);
        this.initUserForm();
        //if edit mode check if edit page is requested from signup approval 
        this.signUpApproval = this.route.snapshot.routeConfig.path == "user/approve/:id";
        console.log("###############Approval Flag###################");
        console.log(this.signUpApproval);
        console.log(this.route.snapshot.routeConfig.path);
        if (this.userId == null) {
            //this.userId = this.route.snapshot.queryParams.userId;
            this.userId = +this.route.snapshot.paramMap.get('id');
            console.log("###############user id###################");
            console.log(this.userId);
        }
        if (this.userId != null && this.userId !== 0) {
            this.accountService.getUserById(this.userId).subscribe(function (res) {
                _this.tempUser = res.responsePayload;
                if (_this.signUpApproval) {
                    _this.initSignUpApprovalRequest();
                }
                _this.userForm.setValue({
                    userName: _this.tempUser.userName,
                    password: null,
                    fName: _this.tempUser.fName,
                    lName: _this.tempUser.lName,
                    address: _this.tempUser.address,
                    email: _this.tempUser.email,
                    msisdn: _this.tempUser.msisdn,
                    entityId: _this.tempUser.entityId,
                    canAddFakeSender: _this.tempUser.canAddFakeSender,
                    needsApproval: _this.tempUser.needsApproval,
                    role: _this.tempUser.role,
                    isLdapUser: _this.tempUser.isLdapUser
                });
                _this.enableDisableNeedsApproval();
                _this.enableDisableActiveDirectoryUser();
                if (_this.tempUser.entityId !== null) {
                    _this.entityService.getEntity(_this.tempUser.entityId).subscribe(function (res) {
                        var entity = res.responsePayload;
                        console.log("entity.canAddFakeSenders ", entity.canAddFakeSenders);
                        _this.canAddFakeSenderFlag = entity.canAddFakeSenders;
                        _this.tempUser.isInternal = entity.isInternal;
                        _this.enableDisableCanAddFakeSender(entity.canAddFakeSenders);
                        setTimeout(function () { _this.listRoles(); });
                    });
                }
            });
        }
        else {
            this.tempUser = new src_app_shared_models_admin_view_user_model__WEBPACK_IMPORTED_MODULE_1__["AdminViewUser"]();
            this.tempUser.isActive = true;
            this.tempUser.isLdapUser = false;
            this.tempUser.needsApproval = false;
            this.tempUser.canAddFakeSender = false;
        }
        this.accountService.listLdapUsers().subscribe(function (res) {
            _this.activeDirectoryUsers = res.responsePayload;
            if (_this.activeDirectoryUsers) {
                _this.activeDirectoryUsers.forEach(function (user) {
                    debugger;
                    console.log(user);
                    _this.activeDirectoryUsersSelectItems.push({ label: user, value: user });
                });
                _this.activeDirectoryUsersSelectItems = JSON.parse(JSON.stringify(_this.activeDirectoryUsersSelectItems));
            }
        });
        this.entityService.getAllEntity().subscribe(function (res) {
            _this.businessEntities = res.responsePayload;
            console.log(_this.businessEntities);
        });
        this.roleService.getAllRoles().subscribe(function (res) {
            _this.roles = res.responsePayload;
        });
    };
    Object.defineProperty(AddEditUsersAccountsComponent.prototype, "uf", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddEditUsersAccountsComponent.prototype.listRoles = function () {
        var roles = Object.assign([], this.roles);
        console.log('list this.roles=>', this.roles);
        console.log('listroles=>', roles);
        if (!this.tempUser.isInternal) {
            for (var i = 0; i < roles.length; i++) {
                if (!roles[i].assignedToExtEntity || roles[i].assignedToExtEntity === null) {
                    roles.splice(i, 1);
                    i--;
                }
            }
        }
        return roles;
    };
    AddEditUsersAccountsComponent.prototype.listBusinessEntities = function () {
        var _this = this;
        var entities = Object.assign([], this.businessEntities);
        if (entities) {
            console.log(this.userForm);
            if (this.userForm.get('isLdapUser').value === false) {
                for (var i = 0; i < entities.length; i++) {
                    if (entities[i].isInternal) {
                        entities.splice(i, 1);
                        i--;
                    }
                }
            }
            if (this.userId !== 0) {
                if (this.tempUser.entityId != null && (entities.find(function (x) { return x.entityId == _this.tempUser.entityId; }) == null || entities.find(function (x) { return x.entityId == _this.tempUser.entityId; }) == undefined)) {
                    console.log(entities);
                    console.log(this.businessEntities);
                    var x = entities.findIndex(function (x) { return x.entityId != null; });
                    console.log(x);
                    if (x !== undefined && x !== -1 && x !== null) {
                        console.log(entities[x]);
                        this.setTempUserBusinessEntity(entities[x].entityId);
                    }
                }
            }
        }
        console.log('entities2', entities);
        console.log('business2', this.businessEntities);
        return entities;
    };
    AddEditUsersAccountsComponent.prototype.enableDisableNeedsApproval = function () {
        var enable = true;
        if (this.tempUser.role == src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].campaignAdminId) {
            enable = false;
            this.userForm.get('needsApproval').reset({ value: false, disabled: true });
            this.tempUser.needsApproval = false;
        }
        else {
            var lastValue = this.userForm.get('needsApproval').value;
            this.userForm.get('needsApproval').reset({ value: lastValue, disabled: false });
        }
        return enable;
    };
    AddEditUsersAccountsComponent.prototype.enableDisableActiveDirectoryUser = function () {
        if (this.signUpApproval) {
            this.userForm.get('isLdapUser').reset({ value: false, disabled: false });
        }
        else {
            this.userForm.get('isLdapUser').reset({ value: this.tempUser.isLdapUser, disabled: false });
        }
    };
    AddEditUsersAccountsComponent.prototype.enableDisableCanAddFakeSender = function (canAddFakeSender) {
        if (canAddFakeSender) {
            var lastValue = this.userForm.get('canAddFakeSender').value;
            this.userForm.get('canAddFakeSender').reset({ value: lastValue, disabled: false });
        }
        else {
            this.userForm.get('canAddFakeSender').reset({ value: false, disabled: true });
        }
    };
    AddEditUsersAccountsComponent.prototype.createUser = function () {
        var _this = this;
        this.accountService.scrollIfFormHasErrors(this.userForm);
        this.assignFormToUser();
        if (!this.userForm.invalid) {
            this.accountService.createUser(this.tempUser).subscribe(function (res) {
                if (res.responsePayload > 0) {
                    _this.router.navigate(["user/list"]);
                }
                console.log(res.responsePayload);
            });
        }
        else {
            this.accountService.markFormGroupTouched(this.userForm);
        }
    };
    AddEditUsersAccountsComponent.prototype.updateUser = function () {
        var _this = this;
        this.accountService.scrollIfFormHasErrors(this.userForm);
        this.assignFormToUser();
        if (!this.userForm.invalid) {
            if (this.signUpApproval) {
                this.approveUser();
            }
            else {
                this.accountService.updateUser(this.tempUser).subscribe(function (res) {
                    if (res.responsePayload > 0) {
                        _this.router.navigate(["user/list"]);
                    }
                });
            }
        }
        else {
            this.accountService.markFormGroupTouched(this.userForm);
        }
    };
    AddEditUsersAccountsComponent.prototype.cancel = function () {
        if (this.signUpApproval) {
            this.router.navigate(["requests"]);
        }
        else {
            this.router.navigate(["user/list"]);
        }
    };
    AddEditUsersAccountsComponent.prototype.assignFormToUser = function () {
        this.tempUser.userName = this.userForm.get('userName').value;
        console.log("username:", this.tempUser.userName);
        this.tempUser.password = this.userForm.get('password').value;
        this.tempUser.entityId = this.userForm.get('entityId').value;
        this.tempUser.fName = this.userForm.get('fName').value;
        this.tempUser.lName = this.userForm.get('lName').value;
        this.tempUser.address = this.userForm.get('address').value;
        this.tempUser.email = this.userForm.get('email').value;
        this.tempUser.msisdn = this.userForm.get('msisdn').value;
        this.tempUser.canAddFakeSender = this.userForm.get('canAddFakeSender').value;
        this.tempUser.needsApproval = this.userForm.get('needsApproval').value;
        this.tempUser.role = this.userForm.get('role').value;
        this.tempUser.isLdapUser = this.userForm.get('isLdapUser').value;
    };
    AddEditUsersAccountsComponent.prototype.addUser = function () {
        this.router.navigate(["user/add"]);
    };
    AddEditUsersAccountsComponent.prototype.isEditMode = function () {
        return this.tempUser.id != null;
    };
    AddEditUsersAccountsComponent.prototype.setTempUserRole = function (id) {
        this.tempUser.role = id;
        this.userForm.get("role").setValue(id);
        this.tempUser.roleLabel = this.roles.find(function (role) {
            return role.id == id;
        }).label;
        this.enableDisableNeedsApproval();
        console.log(this.tempUser.roleLabel);
    };
    AddEditUsersAccountsComponent.prototype.setTempUserBusinessEntity = function (id) {
        console.log("entity ID :" + id);
        var entity;
        this.tempUser.entityId = id;
        this.userForm.get("entityId").setValue(id);
        entity = this.businessEntities.find(function (entity) {
            return entity.entityId == id;
        });
        this.tempUser.entityName = entity.entityName;
        this.tempUser.isInternal = entity.isInternal;
        this.enableDisableCanAddFakeSender(entity.canAddFakeSenders);
        this.setTempUserRole(this.listRoles().find(function (x) { return x.id != null; }).id);
    };
    AddEditUsersAccountsComponent.prototype.clearUserNameControl = function () {
        if (this.userId === 0) {
            this.userForm.get('userName').reset('');
        }
    };
    /**start handle signup approval page */
    AddEditUsersAccountsComponent.prototype.initSignUpApprovalRequest = function () {
        //  this.tempUser.isLdapUser = false;
        this.tempUser.isActive = true;
    };
    AddEditUsersAccountsComponent.prototype.approveUser = function () {
        var _this = this;
        this.setApprovalStatus();
        this.accountService.approveUser(this.tempUser).subscribe(function (res) {
            if (res.errors.length > 0 || res.status != 0) {
                _this.tempUser.signupStatus = _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SIGNUP_STATUS.PENDING;
            }
            else {
                _this.router.navigate(["requests"]);
            }
        });
    };
    AddEditUsersAccountsComponent.prototype.setApprovalStatus = function () {
        this.tempUser.signupStatus = _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SIGNUP_STATUS.APPROVED;
    };
    /**end handle signup approval page */
    AddEditUsersAccountsComponent.prototype.msisdnValidator = function (control) {
        if (control.value == '') {
            control.setValue(null, { emitEvent: false });
        }
        if (control.value !== undefined && control.value !== null && (isNaN(control.value) || !control.value.match('[+]?[0][1][1|0|2|5][0-9]{8}'))) {
            return { 'notValid': true };
        }
        return null;
    };
    AddEditUsersAccountsComponent.prototype.passwordValidator = function (control) {
        if (control.value == '') {
            control.setValue(null, { emitEvent: false });
        }
        if (control.value !== undefined && control.value !== null && control.value.length < 5) {
            return { 'tooShort': true };
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AddEditUsersAccountsComponent.prototype, "userId", void 0);
    AddEditUsersAccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit-users-accounts',
            template: __webpack_require__(/*! ./add-edit-users-accounts.component.html */ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-users-accounts.component.css */ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], src_app_entity_entity_service_service__WEBPACK_IMPORTED_MODULE_7__["EntityServiceService"], src_app_roles_role_manager_service__WEBPACK_IMPORTED_MODULE_8__["RoleManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], AddEditUsersAccountsComponent);
    return AddEditUsersAccountsComponent;
}());



/***/ }),

/***/ "./src/app/account/add-edit/add-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/add-edit/add-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkLWVkaXQvYWRkLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/add-edit/add-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/account/add-edit/add-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user != null\" class=\"page-content account-edit\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">My Account</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section col-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label class=\"form-input-label\">First Name</label>\r\n        <div class=\"title-gray-dark\">{{user.fName}}</div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label class=\"form-input-label\">Last Name</label>\r\n        <div class=\"title-gray-dark\">{{user.lName}}</div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <div class=\"form-input\">\r\n      <form [formGroup]=\"userForm\">\r\n        <div class=\"row col-4\">\r\n          <label class=\"form-input-label\">Address</label>\r\n          <input class=\"input\" nfSpecialCharacters   [ngClass]=\"{ 'invalid-input': uf.address.errors && (uf.address.touched || uf.address.dirty) }\"\r\n          formControlName=\"address\" />\r\n          <div *ngIf=\"uf.address.errors && (uf.address.touched || uf.address.dirty)\">\r\n            <div *ngIf=\"uf.address.errors.maxlength\" class=\"invalid-text\">Address must be less than 100\r\n              characters</div>\r\n              <div *ngIf=\"!uf.address.errors.required && !!uf.address.errors.nfSpecialCharacters\" >Address Name Must be valid</div>\r\n\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row col-4\">\r\n          <label class=\"form-input-label\">Email</label>\r\n          <input   class=\"input\" [ngClass]=\"{ 'invalid-input': uf.email.errors && (uf.email.touched || uf.email.dirty) }\"\r\n          formControlName=\"email\" />\r\n          <div *ngIf=\"uf.email.errors && (uf.email.touched || uf.email.dirty)\">\r\n            <div *ngIf=\"uf.email.errors.required\" class=\"invalid-text\">Email is required</div>\r\n            <div *ngIf=\"uf.email.errors.email\" class=\"invalid-text\">Email is not valid</div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row col-4\">\r\n          <label class=\"form-input-label\">Mobile number</label>\r\n          <input   class=\"input\" [ngClass]=\"{ 'invalid-input': uf.msisdn.errors && (uf.msisdn.touched || uf.msisdn.dirty) }\"\r\n          formControlName=\"msisdn\" />\r\n          <div *ngIf=\"uf.msisdn.errors && (uf.msisdn.touched || uf.msisdn.dirty)\">\r\n            <div *ngIf=\"uf.msisdn.errors.required\" class=\"invalid-text\">Mobile Number is required</div>\r\n            <div *ngIf=\"uf.msisdn.errors.notValid\" class=\"invalid-text\">Mobile Number is invalid</div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <br />\r\n    <div class=\"row\">\r\n      <button class=\"button button-green mr-2 \" (click)=\"saveProfile()\">\r\n        Save\r\n      </button>\r\n      <button class=\"button button-black mr-2 \" (click)=\"cancel()\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/add-edit/add-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/add-edit/add-edit.component.ts ***!
  \********************************************************/
/*! exports provided: AccountEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditComponent", function() { return AccountEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent(accountService, router, formBuilder) {
        this.accountService = accountService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    AccountEditComponent.prototype.ngOnInit = function () {
        // this.accountService.getUser().subscribe(req => {
        //   this.user = req.responsePayload;
        //   this.tempUser = Object.assign({}, this.user);
        // });
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel));
        console.log(this.user);
        this.tempUser = Object.assign({}, this.user);
        this.userForm = this.formBuilder.group({
            address: [this.tempUser.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)]],
            email: [this.tempUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            msisdn: [this.tempUser.msisdn, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.msisdnValidator]]
        });
    };
    Object.defineProperty(AccountEditComponent.prototype, "uf", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AccountEditComponent.prototype.saveProfile = function () {
        var _this = this;
        if (this.userForm.errors === null) {
            this.assignFormToUser();
            if (this.userDataChanged()) {
                this.accountService.saveMyProfile(this.tempUser).subscribe(function (res) {
                    if (res.responsePayload > 0) {
                        localStorage.setItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel, JSON.stringify(_this.tempUser));
                        _this.router.navigate(['myprofile/view']);
                    }
                });
            }
            else {
                this.router.navigate(['myprofile/view']);
            }
        }
    };
    AccountEditComponent.prototype.cancel = function () {
        this.router.navigate(['myprofile/view']);
    };
    AccountEditComponent.prototype.msisdnValidator = function (control) {
        if (control.value == '') {
            control.setValue(null, { emitEvent: false });
        }
        if (control.value !== undefined && control.value !== null && (isNaN(control.value) || !control.value.match('[+]?[0][1][1|0|2|5][0-9]{8}'))) {
            return { 'notValid': true };
        }
        return null;
    };
    AccountEditComponent.prototype.assignFormToUser = function () {
        this.tempUser.address = this.userForm.get('address').value;
        this.tempUser.email = this.userForm.get('email').value;
        this.tempUser.msisdn = this.userForm.get('msisdn').value;
    };
    AccountEditComponent.prototype.userDataChanged = function () {
        return (this.tempUser.address != this.user.address
            || this.tempUser.email != this.user.email
            || this.tempUser.msisdn != this.user.msisdn);
    };
    AccountEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit',
            template: __webpack_require__(/*! ./add-edit.component.html */ "./src/app/account/add-edit/add-edit.component.html"),
            styles: [__webpack_require__(/*! ./add-edit.component.css */ "./src/app/account/add-edit/add-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AccountEditComponent);
    return AccountEditComponent;
}());



/***/ }),

/***/ "./src/app/account/change-password/change-password.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/change-password/change-password.component.html":
/*!************************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content account-edit\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">Change Password</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section col-12\">\r\n    <div class=\"form-input\">\r\n      <form [formGroup]=\"userForm\">\r\n        <div class=\"row col-4\">\r\n          <label class=\"form-input-label\">New Password</label>\r\n          <input class=\"input\" type=\"password\" [ngClass]=\"{'invalid-input': uf.newPassword.errors && (uf.newPassword.touched || uf.newPassword.dirty) }\"\r\n          formControlName=\"newPassword\"/>\r\n          <div *ngIf=\"uf.newPassword.errors && (uf.newPassword.touched || uf.newPassword.dirty)\">\r\n            <div *ngIf=\"uf.newPassword.errors.required\" class=\"invalid-text\">Password is required</div>\r\n            <div *ngIf=\"uf.newPassword.errors.pattern\" class=\"invalid-text\">Password should be a minimum of 7 letters and 1 character</div>\r\n          </div> \r\n        </div>\r\n        <br />\r\n        <div class=\"row col-4\">\r\n          <label class=\"form-input-label\">Confirm New Password</label>\r\n          <input class=\"input\" type=\"password\" [ngClass]=\"{'invalid-input': uf.confirmNewPassword.errors && (uf.confirmNewPassword.touched || uf.confirmNewPassword.dirty) }\"\r\n          formControlName=\"confirmNewPassword\"/> \r\n          <div *ngIf=\"uf.confirmNewPassword.errors && (uf.confirmNewPassword.touched || uf.confirmNewPassword.dirty)\">\r\n            <div *ngIf=\"uf.confirmNewPassword.errors.required\" class=\"invalid-text\">Password confirmation is required</div>  \r\n            <div *ngIf=\"uf.confirmNewPassword.errors.mustMatch\" class=\"invalid-text\">Passwords must match</div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    \r\n\r\n    <br />\r\n    <div class=\"row\">\r\n      <button class=\"button button-green mr-2 \" (click)=\"changePassword()\">\r\n        Save\r\n      </button>\r\n      <button class=\"button button-black mr-2 \" (click)=\"cancel()\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/change-password/change-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(accountService, router, formBuilder) {
        this.accountService = accountService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*(),.?\":{}|<>\\/]{8,}$")]],
            confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.passwordMatchingValidator('newPassword', 'confirmNewPassword')
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "uf", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.assignFormToPasswords();
        console.log(this.userForm.errors);
        if (!this.userForm.valid) {
            this.accountService.markFormGroupTouched(this.userForm);
            return;
        }
        this.accountService.savePassword(this.newPassword).subscribe(function (res) {
            _this.router.navigate(['myprofile/view']);
        });
    };
    ChangePasswordComponent.prototype.cancel = function () {
        this.router.navigate(['myprofile/view']);
    };
    ChangePasswordComponent.prototype.passwordMatchingValidator = function (newPassword, confirmNewPassword) {
        return function (formGroup) {
            var control = formGroup.controls[newPassword];
            var matchingControl = formGroup.controls[confirmNewPassword];
            if (control.value != matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    ChangePasswordComponent.prototype.passwordValidator = function (control) {
        if (control.value !== undefined && control.value !== null) {
            return { 'notValid': true };
        }
        return null;
    };
    ChangePasswordComponent.prototype.assignFormToPasswords = function () {
        this.newPassword = this.userForm.get('newPassword').value;
        this.confirmNewPassword = this.userForm.get('confirmNewPassword').value;
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/account/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/account/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/account/list/list.component.css":
/*!*************************************************!*\
  !*** ./src/app/account/list/list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/account/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/account/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"enableUpdatingUserData === false && user != null\" class=\"page-content account-list\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">My Account</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section col-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label class=\"form-input-label\">First Name</label>\r\n        <div class=\"title-gray-dark\">{{user.fName}}</div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label class=\"form-input-label\">Last Name</label>\r\n        <div class=\"title-gray-dark\">{{user.lName}}</div>\r\n      </div>\r\n      <br />\r\n      <div  class=\"col-12\">\r\n        <label class=\"form-input-label\">Address</label>\r\n        <div *ngIf=\"user.address != null\" class=\"title-gray-dark\">{{user.address}}</div>\r\n        <div *ngIf=\"user.address == null\" class=\"title-gray-dark\">N/A</div>\r\n      </div>\r\n      <br />\r\n      <div class=\"col-12\">\r\n        <label class=\"form-input-label\">Email</label>\r\n        <div class=\"title-gray-dark\">{{user.email}}</div>\r\n      </div>\r\n      <br />\r\n      <div class=\"col-12\">\r\n        <label class=\"form-input-label\">Mobile number</label>\r\n        <div class=\"title-gray-dark\">{{user.msisdn}}</div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <label class=\"form-input-label\">Business Entity Name</label>\r\n        <div class=\"title-gray-dark\">{{user.entityName}}</div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <a class=\"button button-green mr-2 \" (click)=\"goToUpdate()\">\r\n      Update\r\n    </a>\r\n    <a *ngIf=\"user.isLdapUser == false || user.isLdapUser == null\"class=\"button button-green mr-2 \" (click)=\"goToChangePassword()\">\r\n        Change Password\r\n      </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/account/list/list.component.ts ***!
  \************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.enableUpdatingUserData = false;
        // this.accountService.getUser().subscribe(req => {
        //   this.user = req.responsePayload;
        // });
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel));
    };
    AccountListComponent.prototype.goToUpdate = function () {
        this.router.navigate(["myprofile/edit"]);
    };
    AccountListComponent.prototype.goToChangePassword = function () {
        this.router.navigate(["account/change-password"]);
    };
    AccountListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/account/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/account/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/account/signup-requests/signup-requests.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/account/signup-requests/signup-requests.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2lnbnVwLXJlcXVlc3RzL3NpZ251cC1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/signup-requests/signup-requests.component.html":
/*!************************************************************************!*\
  !*** ./src/app/account/signup-requests/signup-requests.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" (click)=\"closeAllMenus()\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">\r\n        Signup Requests\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6 col-lg-12 text-right\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <div class=\"search-input\">\r\n            <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search\">\r\n            <i class=\"icon-search icon\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"usersAccounts\">\r\n    <div *ngIf=\"setFilteredUsersAccounts(usersAccounts | usernameFilter:filter)\"></div>\r\n    <div\r\n      *ngFor=\"let userAccount of filteredUsersAccounts | paginate: { itemsPerPage: perPage, currentPage: p }; let i = index\"\r\n      (click)=\"setExpandedUserId($event,userAccount)\" class=\"section animated faster fadeInUp row\">\r\n\r\n      <div class=\"col-12 text-left section-title\" *ngIf=\"(userAccount.id === rejectedUserId) && editRejectedUser\">\r\n        Edit Rejected User\r\n      </div>\r\n\r\n      <div class=\"col-2 heading-6 title-robotomedium pt-2 \">\r\n        <label class=\"title-normal\">{{userAccount.userName}}</label>\r\n      </div>\r\n      <div class=\"col-7 text-left \">\r\n        <label class=\"form-input-label\">Signup Status</label>\r\n        <div class=\"title-gray-dark\">{{userAccount.signupStatusName}}</div>\r\n      </div>\r\n\r\n      <div class=\"col-2 text-right\" *ngIf=\"userAccount.signupStatus == pending\">\r\n        <a (click)=\"dropDownMenu($event, userAccount)\" class=\"campaigns-item-actions-link\">\r\n          <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-4 test-right dropdown\" *ngIf=\"(dropDownUserId == userAccount.id) \r\n      && userAccount.signupStatus == pending\" [ngClass]=\"{'hide':!dropDown}\" (click)=\"$event.stopPropagation()\">\r\n        <ul class=\"list\">\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.APPROVE\" (successHandler)=\"approveUser(userAccount)\">\r\n            <span class=\"icon icon-settings\"></span>Approve</li>\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.APPROVE\" (successHandler)=\"rejectUser(userAccount)\">\r\n            <span class=\"icon icon-sms\"></span>Reject</li>\r\n        </ul>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\" *ngIf=\"userAccount.id === expandedUserId && showDetails\">\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">First Name</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.fName}}</div>\r\n        </div>\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Last Name</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.lName}}</div>\r\n        </div>\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Address</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.address}}</div>\r\n        </div>\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Email</label>\r\n          <div class=\"value\">{{userAccount.email}}</div>\r\n        </div>\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Mobile Number</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.msisdn}}</div>\r\n        </div>\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Request Status</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.signupStatusName}}</div>\r\n        </div>\r\n        <div *ngIf=\"rejectedUser\" class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Rejection Reason</label>\r\n          <div *ngIf=\"!editRejectedUser\" class=\"title-gray-dark\">{{userAccount.rejectionReason}}</div>\r\n          <input *ngIf=\"(userAccount.id === rejectedUserId) && editRejectedUser\"\r\n            [(ngModel)]=\"rejectedUser.rejectionReason\" class=\"input\" />\r\n          <div *ngIf=\"!rejectedUser.rejectionReason && saveButtonClicked\" class=\"invalid-feedback\">\r\n            Rejection Reason required\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"(userAccount.id === rejectedUserId) && editRejectedUser\">\r\n          <div class=\"row mt-5 pt-3 pb-2\">\r\n            <div class=\"col-12 justify-content-center text-right\">\r\n              <button (click)=\"saveRejectedUser(rejectedUser)\" class=\"button button-green mr-2 \">\r\n                Reject\r\n              </button>\r\n              <button (click)=\"cancel()\" class=\"button button-black mr-2\">\r\n                Cancel\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"filteredUsersAccounts.length == 0 && inialized\">\r\n      <div class=\"row mt-4 animated fadeIn fast\">\r\n        <div class=\"col-12 mt-4 text-center\">\r\n          <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n          <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Requests Found</b></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ngx-pagination\">\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/account/signup-requests/signup-requests.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/signup-requests/signup-requests.component.ts ***!
  \**********************************************************************/
/*! exports provided: SignupRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRequestsComponent", function() { return SignupRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupRequestsComponent = /** @class */ (function () {
    function SignupRequestsComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.usersAccounts = new Array();
        this.inialized = false;
        this.showDetails = true;
        //Pagination Filtering & Sorting
        this.p = 1;
        this.perPage = 4;
        this.defines = _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_CRUD;
        //lk signup status
        this.pending = _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SIGNUP_STATUS.PENDING;
    }
    SignupRequestsComponent.prototype.ngOnInit = function () {
        this.authorizationUrl = this.accountService.authorizationUrl;
        this.filteredUsersAccounts = this.usersAccounts;
        this.getSignUpRequests();
    };
    SignupRequestsComponent.prototype.getSignUpRequests = function () {
        var _this = this;
        this.accountService.getSignUpRequests().subscribe(function (res) {
            _this.usersAccounts = res.responsePayload;
            _this.inialized = true;
        });
    };
    SignupRequestsComponent.prototype.setExpandedUserId = function (event, user) {
        event.stopPropagation();
        this.dropDownClose();
        if (this.expandedUserId !== user.id) {
            this.expandedUserId = user.id;
            this.rejectedUserId = user.id;
            this.rejectedUser = JSON.parse(JSON.stringify(user));
            this.showDetails = true;
        }
    };
    SignupRequestsComponent.prototype.closeExpandedUserId = function () {
        this.expandedUserId = null;
        this.showDetails = false;
    };
    SignupRequestsComponent.prototype.dropDownMenu = function (event, user) {
        event.stopPropagation();
        if (!this.dropDown || this.dropDownUserId != user.id) {
            this.dropDownUserId = user.id;
            this.dropDown = true;
        }
        else {
            this.dropDown = false;
        }
    };
    SignupRequestsComponent.prototype.approveUser = function (user) {
        this.accountService.isSignupApproval = true;
        //this.router.navigate(["admin/addeditaccount"], { queryParams: { userId: user.id, approve: 1 } });
        this.router.navigateByUrl('user/approve/' + user.id);
    };
    SignupRequestsComponent.prototype.rejectUser = function (user) {
        //close details section
        //debugger;
        this.expandedUserId = user.id;
        this.showDetails = true;
        this.rejectedUserId = user.id;
        this.rejectedUser = JSON.parse(JSON.stringify(user));
        this.editRejectedUser = true;
        this.dropDownClose();
    };
    SignupRequestsComponent.prototype.dropDownClose = function () {
        this.dropDownUserId = null;
        this.dropDown = false;
    };
    SignupRequestsComponent.prototype.saveRejectedUser = function (user) {
        var _this = this;
        if (!user.rejectionReason) {
            this.saveButtonClicked = true;
        }
        else {
            user.signupStatus = _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SIGNUP_STATUS.REJECTED;
            this.accountService.approveUser(user).subscribe(function (res) {
                if (res.errors.length > 0 || res.status != 0) {
                    user.signupStatus = _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SIGNUP_STATUS.PENDING;
                }
                else {
                    _this.getSignUpRequests();
                    _this.rejectedUserId = null;
                    _this.editRejectedUser = false;
                }
            });
        }
    };
    SignupRequestsComponent.prototype.cancel = function () {
        this.rejectedUserId = null;
        this.editRejectedUser = false;
        this.saveButtonClicked = false;
    };
    SignupRequestsComponent.prototype.closeAllMenus = function () {
        this.closeExpandedUserId();
        this.dropDownClose();
    };
    SignupRequestsComponent.prototype.setFilteredUsersAccounts = function (filtered) {
        this.filteredUsersAccounts = filtered;
    };
    SignupRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-signup-requests',
            template: __webpack_require__(/*! ./signup-requests.component.html */ "./src/app/account/signup-requests/signup-requests.component.html"),
            styles: [__webpack_require__(/*! ./signup-requests.component.css */ "./src/app/account/signup-requests/signup-requests.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupRequestsComponent);
    return SignupRequestsComponent;
}());



/***/ }),

/***/ "./src/app/account/users-accounts-list/users-accounts-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/account/users-accounts-list/users-accounts-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-letter{\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50px;\r\n    color: rgb(126, 126, 126);\r\n    font-weight: 300;\r\n    font-size: 24px;\r\n    background-color: rgb(233, 233, 233);\r\n    text-align: center;\r\n    padding-top: 2px;\r\n}\r\n.status-active{\r\n    color: #a3d94e;\r\n    font-weight: 500;\r\n}\r\n.status-active-bullet{\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 6px;\r\n    color: rgba(126, 126, 126, 0);\r\n    background-color: #a3d94e;\r\n    text-align: center;\r\n    margin-left: -10px;\r\n    margin-top: 10px;\r\n}\r\n.status-inactive-bullet{\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 6px;\r\n    color: rgba(126, 126, 126, 0);\r\n    background-color: rgb(187, 187, 187);\r\n    text-align: center;\r\n    margin-left: -10px;\r\n    margin-top: 10px;\r\n}\r\n.status-inactive{\r\n    color: rgb(187, 187, 187);\r\n    font-weight: 500;\r\n}\r\n.filter-menu{\r\n    position: absolute;\r\n    z-index: 100;\r\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC91c2Vycy1hY2NvdW50cy1saXN0L3VzZXJzLWFjY291bnRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlDQUF5QztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdXNlcnMtYWNjb3VudHMtbGlzdC91c2Vycy1hY2NvdW50cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1sZXR0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuLnN0YXR1cy1hY3RpdmV7XHJcbiAgICBjb2xvcjogI2EzZDk0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnN0YXR1cy1hY3RpdmUtYnVsbGV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTI2LCAxMjYsIDEyNiwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkOTRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc3RhdHVzLWluYWN0aXZlLWJ1bGxldHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiByZ2JhKDEyNiwgMTI2LCAxMjYsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc3RhdHVzLWluYWN0aXZle1xyXG4gICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5maWx0ZXItbWVudXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/account/users-accounts-list/users-accounts-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/account/users-accounts-list/users-accounts-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content \" (click)=\"closeAllMenus()\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-3\">\r\n      <div class=\"page-title\">\r\n        Users Accounts\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-9 col-lg-12 text-right\">\r\n      <div class=\"row\">\r\n        <div class=\"col-3\">\r\n          <button (click)=\"showHideFilterMenu()\" class=\"button button-grey\">\r\n            <i class=\"fa fa-filter\" style=\"font-size:12px\"></i> Filter</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"filterMenuEnabled\" class=\"section filter-menu\">\r\n          <div class=\"row form-input form-selectbox\">\r\n            <label class=\"form-input-label\">Status</label>\r\n            <select class=\"selectbox\" [(ngModel)]=\"statusFilter\">\r\n              <option [ngValue]=\"null\">All</option>\r\n              <option [ngValue]=\"true\">Active</option>\r\n              <option [ngValue]=\"false\">Inactive</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\"></div>\r\n          </div>\r\n          <div class=\"row form-input form-selectbox form-input-margin\">\r\n            <label class=\"form-input-label\">Active Directory User</label>\r\n            <select class=\"selectbox\" [(ngModel)]=\"activeDirectoryUserFilter\">\r\n              <option [ngValue]=\"null\">All</option>\r\n              <option [ngValue]=\"true\">Yes</option>\r\n              <option [ngValue]=\"false\">No</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\"></div>\r\n          </div>\r\n          <div class=\"row form-input form-input-margin\">\r\n            <label class=\"form-input-label\">Business Entity</label>\r\n            <div class=\"search-input\">\r\n              <input [(ngModel)]=\"businessEntityToSearch\" type=\"text\" class=\"\"\r\n                placeholder=\"Filter By Business Entity Name\">\r\n              <i class=\"icon-search icon\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"search-input\">\r\n            <input [(ngModel)]=\"usernameToSearch\" type=\"text\" placeholder=\"Search By Username\">\r\n            <i class=\"icon-search icon\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-col-3\">\r\n          <button type=\"button\" ndpAuthorize [targetUrl]=\"authorizationUrl+defines.CREATE\" (successHandler)=\"addUser()\"\r\n            label=\"Create User Account\" class=\"button button-green\">Add User\r\n            Account</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"usersAccounts\" (click)=\"filterMenuEnabled = false\">\r\n    <div\r\n      *ngIf=\"setUsersToShow(usersAccounts | userentityFilter: businessEntityToSearch| usernameFilter: usernameToSearch| userStatusFilter: statusFilter | userActiveDirectoryFilter: activeDirectoryUserFilter)\">\r\n    </div>\r\n    <div\r\n      *ngFor=\"let userAccount of usersAccountsToShow | orderBy: key : reverse | paginate: { itemsPerPage: perPage, currentPage: p }; let i = index\"\r\n      class=\"section animated faster fadeInUp\" (click)=\"setExpandedUserId($event,userAccount.id)\">\r\n      <div class=\"row confirmDialog animated fadeIn faster\" *ngIf=\"deleteConfirm && (deletedId == userAccount.id)\">\r\n        <div class=\"col-12\">Are you sure you want to delete User <b>{{userAccount.userName}}</b> ?</div>\r\n        <div class=\"col-12 mt-2\">\r\n          <button class=\"button button-green mr-4\" (click)=\"deleteUser($event,userAccount)\">DELETE</button>\r\n          <button class=\"button button-black \" (click)=\"hideConfirmDelete($event)\">CANCEL</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1 text-left mt-2\">\r\n          <span class=\"user-letter\">{{getFirstLetter(userAccount.userName)}}</span>\r\n        </div>\r\n        <div class=\"col-2 text-left mt-3\">\r\n          <span class=\"title-normal\" style=\"word-wrap: break-word\">{{userAccount.userName | titlecase}}</span>\r\n        </div>\r\n        <div class=\"col-3 text-left mt-3\">\r\n          <span *ngIf=\"userAccount.isActive\" class=\"status-active-bullet\">.</span>\r\n          <span *ngIf=\"userAccount.isActive\" class=\"status-active\">Active</span>\r\n          <span *ngIf=\"!userAccount.isActive\" class=\"status-inactive-bullet\">.</span>\r\n          <span *ngIf=\"!userAccount.isActive\" class=\"status-inactive\">Inactive</span>\r\n        </div>\r\n        <div class=\"col-3 text-left \">\r\n          <label class=\"form-input-label\">Active Directory User</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.isLdapUser?'Yes':'No'}}</div>\r\n        </div>\r\n        <div class=\"col-2 text-left \">\r\n          <label class=\"form-input-label\">Business Entity Name</label>\r\n          <div class=\"title-gray-dark\">{{userAccount.entityName}}</div>\r\n        </div>\r\n        <div class=\"col-1 p-col-nogutter mt-3 text-right\">\r\n          <a (click)=\"dropDownMenu($event,userAccount)\" class=\"campaigns-item-actions-link\">\r\n            <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n          </a>\r\n        </div>\r\n        <div *ngIf=\"(dropDownUserId == userAccount.id)\" [ngClass]=\"{'hide':!dropDown}\" class=\"dropdown\" (click)=\"$event.stopPropagation();\">\r\n          <ul class=\"list\">\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+defines.UPDATE\" (successHandler)=\"editUser(userAccount)\"\r\n              [targetId]=\"userAccount.id\"><span class=\"icon icon-settings\"></span>Edit</li>\r\n\r\n            <li *ngIf=\"userAccount.id !=cachedUserAccountId\" ndpAuthorize [targetUrl]=\"authorizationUrl+defines.DELETE\"\r\n              [targetId]=\"userAccount.id\" (successHandler)=\"showConfirmDelete($event,userAccount)\"><span\r\n                class=\"icon icon-sms\"></span>Delete</li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"userAccount.id === expandedUserId\">\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">First Name</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.fName}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Last Name</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.lName}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Role</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.roleLabel}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Mobile Number</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.msisdn}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Needs Approval</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.needsApproval?'Yes':'No'}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Can Add Fake Sender</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.canAddFakeSender?'Yes':'No'}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Email</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.email}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Address</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.address}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Account Created By</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.createdByUserName}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Account Creation Date</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.creationDate | date:'dd MMM yyyy hh:mm:ss a'}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Account Last Modified By</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.lastModifiedByUserName}}</div>\r\n          </div>\r\n          <div class=\"col-3 text-left \">\r\n            <label class=\"form-input-label\">Account Last Modification Date</label>\r\n            <div class=\"title-gray-dark\">{{userAccount.lastModificationDate | date:'dd MMM yyyy hh:mm:ss a'}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"usersAccountsToShow.length == 0 && inialized\">\r\n      <div class=\"row mt-4 animated fadeIn fast\">\r\n        <div class=\"col-12 mt-4 text-center\">\r\n          <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n          <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Users Found</b></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ngx-pagination\">\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/account/users-accounts-list/users-accounts-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/account/users-accounts-list/users-accounts-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: UsersAccountsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAccountsListComponent", function() { return UsersAccountsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersAccountsListComponent = /** @class */ (function () {
    function UsersAccountsListComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.usersAccounts = new Array();
        this.usersAccountsToShow = null;
        this.inialized = false;
        this.deleteConfirm = false;
        //Pagination Filtering & Sorting
        this.p = 1;
        this.perPage = 10;
        //sorting
        this.key = 'fName';
        this.reverse = false;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_CRUD;
        this.cachedUserAccountId = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel)).id;
    }
    UsersAccountsListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    UsersAccountsListComponent.prototype.ngOnInit = function () {
        this.authorizationUrl = this.accountService.authorizationUrl;
        this.activeDirectoryUserFilter = null;
        this.statusFilter = null;
        this.listUsersAccounts();
    };
    UsersAccountsListComponent.prototype.listUsersAccounts = function () {
        var _this = this;
        this.accountService.listUsersAccounts().subscribe(function (res) {
            _this.usersAccounts = res.responsePayload;
            _this.inialized = true;
        });
    };
    UsersAccountsListComponent.prototype.addUser = function () {
        this.router.navigate(["user/add"]);
    };
    UsersAccountsListComponent.prototype.showHideFilterMenu = function () {
        this.filterMenuEnabled = !this.filterMenuEnabled;
    };
    UsersAccountsListComponent.prototype.setUsersToShow = function (usersToShow) {
        this.usersAccountsToShow = usersToShow;
        // console.log("usersToShow", this.usersAccountsToShow);
    };
    UsersAccountsListComponent.prototype.dropDownMenu = function (event, user) {
        console.log("dropDownMenudropDownMenu");
        event.stopPropagation();
        if (!this.dropDown || this.dropDownUserId != user.id) {
            this.dropDownUserId = user.id;
            this.dropDown = true;
        }
        else {
            this.dropDown = false;
        }
    };
    UsersAccountsListComponent.prototype.editUser = function (user) {
        //this.router.navigate(["admin/addeditaccount"],{queryParams: {userId: user.id}});
        this.router.navigateByUrl('user/edit/' + user.id);
    };
    UsersAccountsListComponent.prototype.deleteUser = function (event, user) {
        var _this = this;
        this.accountService.deleteUser(user.id).subscribe(function (res) {
            if (res.responsePayload > 0) {
                // let indexToDelete = this.usersAccounts.indexOf(user);
                // this.usersAccounts.splice(indexToDelete, 1);
                // indexToDelete = this.usersAccountsToShow.indexOf(user);
                // this.usersAccountsToShow.splice(indexToDelete, 1);
                _this.usersAccounts = _this.usersAccounts.filter(function (x) { return x.id !== user.id; });
            }
        });
    };
    UsersAccountsListComponent.prototype.showConfirmDelete = function (event, user) {
        //event.stopPropagation();
        this.deleteConfirm = true;
        this.deletedId = user.id;
    };
    UsersAccountsListComponent.prototype.hideConfirmDelete = function (event) {
        event.stopPropagation();
        this.deleteConfirm = false;
        this.deletedId = 0;
    };
    UsersAccountsListComponent.prototype.setExpandedUserId = function (event, userId) {
        event.stopPropagation();
        this.dropDownClose();
        if (userId === this.expandedUserId) {
            this.expandedUserId = null;
        }
        else {
            this.expandedUserId = userId;
        }
    };
    UsersAccountsListComponent.prototype.closeExpandedUserId = function () {
        this.expandedUserId = null;
    };
    UsersAccountsListComponent.prototype.dropDownClose = function () {
        this.dropDownUserId = null;
        this.dropDown = false;
    };
    UsersAccountsListComponent.prototype.closeAllMenus = function () {
        this.closeExpandedUserId();
        this.dropDownClose();
    };
    UsersAccountsListComponent.prototype.getFirstLetter = function (word) {
        return word.charAt(0).toUpperCase();
    };
    UsersAccountsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-users-accounts-list',
            template: __webpack_require__(/*! ./users-accounts-list.component.html */ "./src/app/account/users-accounts-list/users-accounts-list.component.html"),
            styles: [__webpack_require__(/*! ./users-accounts-list.component.css */ "./src/app/account/users-accounts-list/users-accounts-list.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersAccountsListComponent);
    return UsersAccountsListComponent;
}());



/***/ }),

/***/ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1wcm9maWxlcy9hcHAtcHJvZmlsZXMtYWRkLWVkaXQvYXBwLXByb2ZpbGVzLWFkZC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content \">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-6\">\r\n            <div class=\"page-title\">\r\n                Add App Profile\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-12 text-right\">\r\n            <div class=\"row\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\" *ngIf=\"appProfile != null\">\r\n        <div class=\"row mb-4\">\r\n            <div *ngIf=\"appProfile.appProfileId != null\" class=\"col-10 text-left section-title\">Edit App Profile</div>\r\n            <div *ngIf=\"appProfile.appProfileId == null\" class=\"col-10 text-left section-title\">Add App Profile</div>\r\n        </div>\r\n        <div class=\"form-input\">\r\n            <form [formGroup]=\"mainForm\">\r\n                <div class=\"row mb-4 form-input-margin\">\r\n                    <!-- <div *ngIf=\"appProfile.appProfileId != null\"   class=\"col-3 text-left\">\r\n          <label class=\"form-input-label\">Profile Id</label>\r\n          <input  class=\"input\" [(ngModel)]=\"appProfile.appProfileId\"  [ngModelOptions]=\"{standalone:true}\" readonly />\r\n        </div> -->\r\n                    <div class=\"col-3 text-left mb-4\">\r\n                        <label class=\"form-input-label\"> APP Profile Name</label>\r\n                        <input class=\"input\" nfSpecialCharacters   formControlName=\"appProfileName\" [ngClass]=\"{ 'invalid-input': f.appProfileName.errors && (f.appProfileName.touched || f.appProfileName.dirty) }\" />\r\n                        <div *ngIf=\"!!f.appProfileName.errors && (!!f.appProfileName.touched || !!f.appProfileName.dirty)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.appProfileName.errors.required\" class=\"invalid-text\">Profie Name is required</div>\r\n                            <div *ngIf=\"!!f.appProfileName.errors.duplicate\" class=\"invalid-text\">Profie Name already Exists</div>\r\n                            <div *ngIf=\"!!f.appProfileName.errors.maxlength\" class=\"invalid-text\">Profie Name  must not exceed 25\r\n                                characters</div>\r\n                            <div class=\"invalid-text\" *ngIf=\"!f.appProfileName.errors.required && !!f.appProfileName.errors.nfSpecialCharacters\" >Profile Name Must be valid</div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 text-left mb-4\">\r\n                        <label class=\"form-input-label\"> APP Profile Description</label>\r\n                        <input   class=\"input\" formControlName=\"description\" [ngClass]=\"{ 'invalid-input': f.description.errors && (f.description.touched || f.description.dirty) }\" />\r\n                        <div *ngIf=\"!!f.description.errors && (!!f.description.touched || !!f.description.dirty || !!f.description.value)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.description.errors.required\" class=\"invalid-text\">Profie Description is required</div>\r\n                            <div *ngIf=\"!!f.appProfileName.errors.maxlength\" class=\"invalid-text\">Profie Name  must not exceed 500\r\n                                characters</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-4 form-input-margin\">\r\n                    <div class=\"col-3 text-left mb-4\">\r\n                        <label class=\"form-input-label\">No Of Sessions</label>\r\n                        <input type=\"number\" class=\"input\" formControlName=\"numberOfSessions\" [ngClass]=\"{ 'invalid-input': f.numberOfSessions.errors && (f.numberOfSessions.touched || f.numberOfSessions.dirty) }\" />\r\n                        <div *ngIf=\"!!f.numberOfSessions.errors && (!!f.numberOfSessions.touched || !!f.numberOfSessions.dirty || !!f.numberOfSessions.value)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.numberOfSessions.errors.required\" class=\"invalid-text\">No Of Sessions is required</div>\r\n                            <div *ngIf=\"!!f.numberOfSessions.errors.min\" class=\"invalid-text\">No Of Sessions must be positive</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 text-left mb-4\">\r\n                        <label class=\"form-input-label\">Maximum Daily Quota</label>\r\n                        <input type=\"number\" class=\"input\" formControlName=\"maximumDailyQuota\" [ngClass]=\"{ 'invalid-input': f.maximumDailyQuota.errors && (f.maximumDailyQuota.touched || f.maximumDailyQuota.dirty) }\" />\r\n                        <div *ngIf=\"!!f.maximumDailyQuota.errors && (!!f.maximumDailyQuota.touched || !!f.maximumDailyQuota.dirty || !!f.maximumDailyQuota.value)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.maximumDailyQuota.errors.required\" class=\"invalid-text\">Max Daily Quota is required</div>\r\n                            <div *ngIf=\"!!f.maximumDailyQuota.errors.min\" class=\"invalid-text\">Max Daily Quota must be positive</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 text-left mb-4\">\r\n                        <label class=\"form-input-label\">Maximum throughput allowed</label>\r\n                        <input type=\"number\" class=\"input\" formControlName=\"maxThroughput\" [ngClass]=\"{ 'invalid-input': f.maxThroughput.errors && (f.maxThroughput.touched || f.maxThroughput.dirty) }\" />\r\n                        <div *ngIf=\"!!f.maxThroughput.errors && (!!f.maxThroughput.touched || !!f.maxThroughput.dirty || !!f.maxThroughput.value)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.maxThroughput.errors.required\" class=\"invalid-text\">Max Throughput is required</div>\r\n                            <div *ngIf=\"!!f.maxThroughput.errors.min\" class=\"invalid-text\">Max Throughput must be positive</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-2 form-input-margin\">\r\n                    <div class=\"col-3 text-left\">\r\n                        <div class=\"form-input form-input-timepicker\">\r\n                            <label class=\"form-input-label\">Time Window Start</label>\r\n                            <input formControlName=\"timeWindowStart\" [owlDateTimeTrigger]=\"dt_timeWindowStart\" [owlDateTime]=\"dt_timeWindowStart\" class=\"input\" placeholder=\"\" [ngClass]=\"{ 'invalid-input': f.timeWindowStart.errors && (f.timeWindowStart.touched || f.timeWindowStart.dirty)}\">\r\n                            <owl-date-time [pickerType]=\"'timer'\" #dt_timeWindowStart></owl-date-time>\r\n                            <div [owlDateTimeTrigger]=\"dt_timeWindowStart\" class=\"icon-calender-input icon-gray icon-1\"></div>\r\n                            <div *ngIf=\"!!f.timeWindowStart.errors && (!!f.timeWindowStart.touched || !!f.timeWindowStart.dirty)\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.timeWindowStart.errors.required\" class=\"invalid-text\">Time Widnow Start is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 text-left\">\r\n                        <div class=\"form-input form-input-timepicker\">\r\n                            <label class=\"form-input-label\">Time Widnow End</label>\r\n                            <input formControlName=\"timeWindowEnd\" [owlDateTimeTrigger]=\"dt_timeWindowEnd\" [owlDateTime]=\"dt_timeWindowEnd\" class=\"input\" placeholder=\"\" [ngClass]=\"{ 'invalid-input': f.timeWindowEnd.errors && (f.timeWindowEnd.touched || f.timeWindowEnd.dirty) }\">\r\n                            <owl-date-time [pickerType]=\"'timer'\" #dt_timeWindowEnd></owl-date-time>\r\n                            <div [owlDateTimeTrigger]=\"dt_timeWindowEnd\" class=\"icon-calender-input icon-gray icon-1\"></div>\r\n                            <div *ngIf=\"!!f.timeWindowEnd.errors && (!!f.timeWindowEnd.touched || !!f.timeWindowEnd.dirty)\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.timeWindowEnd.errors.required\" class=\"invalid-text\">Time Widnow End is required</div>\r\n                                <div *ngIf=\"!!f.timeWindowEnd.errors.mustBeAfter\" class=\"invalid-text\">Time Widnow End must be after Time Window Start</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-4 form-input-margin\">\r\n                    <div class=\"col-3 text-left mb-4\">\r\n                        <div class=\"custom-checkbox\" style=\"margin-top:50px; margin-left:30px;\">\r\n                            <input formControlName=\"requiresDeliveryReport\" type=\"checkbox\" class=\"custom-control-input\" id=\"delivery-report\" name=\"delivery-report\">\r\n                            <label class=\"custom-control-label\" for=\"delivery-report\">Requires a delivery report</label>\r\n                        </div>\r\n                        <div *ngIf=\"!!f.requiresDeliveryReport.errors && (!!f.requiresDeliveryReport.touched || !!f.requiresDeliveryReport.dirty)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.requiresDeliveryReport.errors.required\" class=\"invalid-text\">Requires a delivery report is required</div>\r\n                        </div>\r\n                        <!-- <label class=\"form-input-label\">Requires a delivery report</label>\r\n            <input class=\"input\" type=\"checkbox\" formControlName=\"requiresDeliveryReport\" /> -->\r\n                    </div>\r\n                    <div class=\"col-4 text-left mb-4\">\r\n                        <div class=\"custom-checkbox\" style=\"margin-top:50px; margin-left:30px;\">\r\n                            <input formControlName=\"canAddFakeSenders\" type=\"checkbox\" class=\"custom-control-input\" id=\"custom-senders\" name=\"custom-senders\">\r\n                            <label class=\"custom-control-label\" for=\"custom-senders\">ِAllow Custom Sender Names</label>\r\n                        </div>\r\n                        <div *ngIf=\"!!f.canAddFakeSenders.errors && (!!f.canAddFakeSenders.touched || !!f.canAddFakeSenders.dirty)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.canAddFakeSenders.errors.required\" class=\"invalid-text\">Allow Custom Sender Names is required</div>\r\n                        </div>\r\n                        <!-- <label class=\"form-input-label\">Can Add Fake Senders</label>\r\n            <input class=\"input\" type=\"checkbox\" formControlName=\"canAddFakeSenders\" /> -->\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n        <div class=\"col-12 text-center\">\r\n            <a *ngIf=\"appProfile.appProfileId == null\" class=\"button button-green mr-2 \" (click)=\"createAppProfile()\">\r\n        Create App Profile\r\n      </a>\r\n            <a *ngIf=\"appProfile.appProfileId != null\" class=\"button button-green mr-2 \" (click)=\"updateAppProfile()\">\r\n        Save App Profile\r\n      </a>\r\n            <a class=\"button button-black mr-2 \" style=\"color:#fff;\" (click)=\"cancel()\">\r\n        Cancel\r\n      </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AppProfilesAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProfilesAddEditComponent", function() { return AppProfilesAddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_app_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/app-profile-model */ "./src/app/shared/models/app-profile-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_profiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-profiles.service */ "./src/app/app-profiles/app-profiles.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppProfilesAddEditComponent = /** @class */ (function () {
    function AppProfilesAddEditComponent(appProfilesService, messageService, router, route, formBuilder) {
        this.appProfilesService = appProfilesService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    Object.defineProperty(AppProfilesAddEditComponent.prototype, "f", {
        get: function () { return this.mainForm.controls; },
        enumerable: true,
        configurable: true
    });
    AppProfilesAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appProfilesService.list().subscribe(function (template) {
            _this.appProfileNames = new Array();
            template.responsePayload.forEach(function (app) {
                _this.appProfileNames.push(app.appProfileName);
            });
            console.log('disallowedNames ', _this.appProfileNames);
        });
        this.mainForm = this.formBuilder.group({
            appProfileId: [null],
            appProfileName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25), this.nonDuplicte()]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500),]],
            maximumDailyQuota: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            timeWindowStart: [null],
            timeWindowEnd: [null],
            maxThroughput: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            numberOfSessions: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            requiresDeliveryReport: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            canAddFakeSenders: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, {
            validator: [this.greaterValidator('timeWindowEnd', 'timeWindowStart'),
                this.requiredValidator('timeWindowEnd', 'timeWindowStart'), this.requiredValidator('timeWindowStart', 'timeWindowEnd')]
        });
        if (this.appProfileID == null && sessionStorage.getItem('sessionAppProfileId') != null) {
            this.appProfileID = +sessionStorage.getItem('sessionAppProfileId');
            sessionStorage.removeItem('sessionAppProfileId');
        }
        if (this.appProfileID != null) {
            this.appProfile = new src_app_shared_models_app_profile_model__WEBPACK_IMPORTED_MODULE_1__["AppProfileModel"]();
            this.appProfile.appProfileId = this.appProfileID;
            this.appProfilesService.get(this.appProfile).subscribe(function (res) {
                _this.appProfile = res.responsePayload;
                debugger;
                _this.mainForm.setValue({
                    appProfileId: _this.appProfileID,
                    appProfileName: _this.appProfile.appProfileName,
                    description: _this.appProfile.description,
                    maximumDailyQuota: _this.appProfile.maximumDailyQuota,
                    timeWindowStart: _this.appProfile.timeWindowStart ? new Date(_this.appProfile.timeWindowStart) : null,
                    timeWindowEnd: _this.appProfile.timeWindowStart ? new Date(_this.appProfile.timeWindowEnd) : null,
                    maxThroughput: _this.appProfile.maxThroughput,
                    numberOfSessions: _this.appProfile.numberOfSessions,
                    requiresDeliveryReport: _this.appProfile.requiresDeliveryReport,
                    canAddFakeSenders: _this.appProfile.canAddFakeSenders,
                });
                //this.mainForm.setValidators(this.greaterValidator('timeWindowEnd', 'timeWindowStart'));
            });
            debugger;
            this.mainForm.get('appProfileName').clearValidators();
            this.mainForm.get('appProfileName').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            this.mainForm.get('appProfileName').markAsDirty();
        }
        else {
            this.appProfile = new src_app_shared_models_app_profile_model__WEBPACK_IMPORTED_MODULE_1__["AppProfileModel"]();
        }
    };
    AppProfilesAddEditComponent.prototype.nonDuplicte = function () {
        var _this = this;
        return function (control) {
            var found = false;
            if (_this.appProfileNames) {
                _this.appProfileNames.forEach(function (name) {
                    if (name.trim().toLowerCase() === control.value.trim().toLowerCase()) {
                        found = true;
                    }
                });
                if (found) {
                    return { 'duplicate': true };
                }
                return null;
            }
        };
    };
    AppProfilesAddEditComponent.prototype.checkBeforeDate = function () {
        var start = new Date(this.mainForm.get("timeWindowStart").value);
        var end = new Date(this.mainForm.get("timeWindowEnd").value);
        if (start >= end) {
            return false;
        }
        return true;
    };
    AppProfilesAddEditComponent.prototype.createAppProfile = function () {
        var _this = this;
        this.appProfilesService.scrollIfFormHasErrors(this.mainForm);
        for (var i in this.mainForm.controls) {
            if (this.mainForm.controls[i]) {
                this.mainForm.controls[i].markAsTouched();
            }
        }
        this.submitted = true;
        // console.log(this.appProfile);
        if (this.mainForm.invalid) {
            return;
        }
        this.appProfilesService.create(this.mainForm.value).subscribe(function (res) {
            if (res.status === 0) {
                _this.router.navigate(['appProfile']);
            }
        });
    };
    AppProfilesAddEditComponent.prototype.updateAppProfile = function () {
        var _this = this;
        this.appProfilesService.scrollIfFormHasErrors(this.mainForm);
        for (var i in this.mainForm.controls) {
            if (this.mainForm.controls[i]) {
                this.mainForm.controls[i].markAsTouched();
            }
        }
        this.submitted = true;
        if (this.mainForm.invalid) {
            return;
        }
        this.appProfilesService.update(this.mainForm.value).subscribe(function (res) {
            if (res.status === 0) {
                _this.router.navigate(['appProfile']);
            }
        });
    };
    AppProfilesAddEditComponent.prototype.greaterValidator = function (endControlName, startControlName) {
        return function (formGroup) {
            var control = formGroup.controls[endControlName];
            var matchingControl = formGroup.controls[startControlName];
            if (control.value !== null) {
                var options = { hour12: false };
                var startTime = new Date(control.value);
                var endTime = new Date(matchingControl.value);
                console.log('startTime => ', startTime.toLocaleTimeString('en-EG', options));
                console.log('endTime => ', endTime.toLocaleTimeString('en-EG', options));
                if (startTime.toLocaleTimeString('en-EG', options) <= endTime.toLocaleTimeString('en-EG', options)) {
                    control.setErrors({ mustBeAfter: true });
                }
                else {
                    var errors = control.errors;
                    if (errors && errors['mustBeAfter']) {
                        delete errors['mustBeAfter'];
                        if (Object.keys(errors).length === 0) {
                            errors = null;
                        }
                    }
                    control.setErrors(errors);
                }
            }
            return;
        };
    };
    AppProfilesAddEditComponent.prototype.requiredValidator = function (control1, control2) {
        return function (formGroup) {
            var control = formGroup.controls[control1];
            var matchingControl = formGroup.controls[control2];
            if (control.value != null && matchingControl.value == null) {
                matchingControl.markAsTouched();
                matchingControl.setErrors({ required: true });
            }
            else {
                var errors = matchingControl.errors;
                if (errors && errors['required']) {
                    delete errors['required'];
                    if (Object.keys(errors).length === 0) {
                        errors = null;
                    }
                }
                matchingControl.setErrors(errors);
            }
            return;
        };
    };
    AppProfilesAddEditComponent.prototype.cancel = function () {
        this.router.navigate(['appProfile']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AppProfilesAddEditComponent.prototype, "appProfileID", void 0);
    AppProfilesAddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-app-profiles-add-edit',
            template: __webpack_require__(/*! ./app-profiles-add-edit.component.html */ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./app-profiles-add-edit.component.css */ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_app_profiles_service__WEBPACK_IMPORTED_MODULE_3__["AppProfilesService"],
            src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__["NdpMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AppProfilesAddEditComponent);
    return AppProfilesAddEditComponent;
}());



/***/ }),

/***/ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/app-profiles/app-profiles-list/app-profiles-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-pagination {\r\n    text-align: center;\r\n}\r\n\r\n.item-title .id {\r\n    color: #464852;\r\n    margin-right: 60px;\r\n}\r\n\r\n.description-item-sender {\r\n    flex: 0 0 25%;\r\n    max-width: 25%; }\r\n\r\n/* \r\n    .dropdown {\r\n        position: absolute;\r\n        z-index: 500;\r\n        right: 5%;\r\n        margin-top: 15px;\r\n        padding: 5px 0px;\r\n        background: #fff;\r\n        color: #333;\r\n        border-radius: 5px;\r\n        box-shadow: 0 0 5px #a3d94e94;\r\n        bottom: -25px;\r\n    } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXByb2ZpbGVzL2FwcC1wcm9maWxlcy1saXN0L2FwcC1wcm9maWxlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUdBO0lBRUksYUFBYTtJQUNiLGNBQWMsRUFBRTs7QUFDcEI7Ozs7Ozs7Ozs7OztPQVlPIiwiZmlsZSI6InNyYy9hcHAvYXBwLXByb2ZpbGVzL2FwcC1wcm9maWxlcy1saXN0L2FwcC1wcm9maWxlcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS10aXRsZSAuaWQge1xyXG4gICAgY29sb3I6ICM0NjQ4NTI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcblxyXG4uZGVzY3JpcHRpb24taXRlbS1zZW5kZXIge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAyNSU7XHJcbiAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7IH1cclxuLyogXHJcbiAgICAuZHJvcGRvd24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA1MDA7XHJcbiAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNhM2Q5NGU5NDtcclxuICAgICAgICBib3R0b206IC0yNXB4O1xyXG4gICAgfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/app-profiles/app-profiles-list/app-profiles-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"dropDownClose()\" class=\"page-content groups\">\r\n  <div class=\"groups\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"p-col-5\">\r\n        <div class=\"page-title\">\r\n          App Profiles\r\n        </div>\r\n      </div>\r\n      <div class=\"p-col-7 col-lg-12 text-right\">\r\n        <div class=\"row\">\r\n          <div class=\"p-col-8\">\r\n            <div class=\"search-input\">\r\n              <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search By Profile Name\">\r\n              <i class=\"icon-search icon\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            <a ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE\" (successHandler)=\"editProfile(null)\" \r\n              class=\"button button-green\">\r\n              Add App Profile\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"appProfilesList\">\r\n      <div *ngIf=\"setFilteredAppProfileList(appProfilesList | appProfileAppProfileNameFilter:filter)\"></div>\r\n      <div class=\"campaigns-list\"\r\n        *ngFor=\"let appProfile of filteredAppProfileList | orderBy: key | paginate: { itemsPerPage: perPage, currentPage: p }; let i = index\">\r\n        <div *ngIf=\"(dropDownId === appProfile.appProfileId)\" [ngClass]=\"{'hide':!dropDown}\" class=\"dropdown\">\r\n          <ul class=\"list\">\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.UPDATE\" [targetId]=\"appProfile.appProfileId\"\r\n            (successHandler)=\"editProfile(appProfile.appProfileId)\" (click)=\"$event.stopPropagation();\"><span class=\"fas fa-edit\"></span>Edit\r\n            </li>\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.DELETE\" [targetId]=\"appProfile.appProfileId\"\r\n            (successHandler)=\"showConfirmDialog(appProfile)\" (click)=\"$event.stopPropagation();\"><span class=\"fas fa-trash\"></span>Delete</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"row confirmDialog animated fadeIn faster text-center\"\r\n          *ngIf=\"showConfirm && (selectedAppProfile.appProfileId == appProfile.appProfileId)\">\r\n          <div class=\"col-12\">Are you sure you want to delete <b>{{appProfile.appProfileName}}</b> profile ?</div>\r\n          <div class=\"col-12 mt-2\">\r\n            <button class=\"button button-green mr-4\" (click)=\"deleteProfile(appProfile.appProfileId)\">DELETE</button>\r\n            <button class=\"button button-black \" (click)=\"hideConfirm()\">CANCEL</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"canView\" class=\"campaigns-item no-gutters section animated faster fadeIn row no-gutters\">\r\n          <div class=\"item-title col-3 my-auto\">\r\n            <span class=\"heading-6 title-robotomedium pt-2\">\r\n              {{appProfile.appProfileName | titlecase}}\r\n            </span>\r\n            <div class=\"value\">\r\n              {{appProfile.description}}\r\n            </div>\r\n          </div>\r\n          <div class=\"campaigns-item-sender col-2\">\r\n            <div class=\"property\">\r\n              ID\r\n            </div>\r\n            <div class=\"value\">\r\n              {{appProfile.appProfileId}}\r\n            </div>\r\n          </div>\r\n          <div class=\"campaigns-item-sender col-2\">\r\n            <div class=\"property\">\r\n              Max Daily Quota\r\n            </div>\r\n            <div class=\"value\">\r\n              {{appProfile.maximumDailyQuota}}\r\n            </div>\r\n          </div>\r\n          <div class=\"campaigns-item-sender col-2\">\r\n            <div class=\"property\">\r\n              No Of Sessions\r\n            </div>\r\n            <div class=\"value\">\r\n              {{appProfile.numberOfSessions}}\r\n            </div>\r\n          </div>\r\n          <div class=\"col text-right my-auto\">\r\n            <a (click)=\"dropDownOpen(appProfile,$event)\" class=\"campaigns-item-actions-link\">\r\n              <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"filteredAppProfileList.length == 0 && inialized\">\r\n      <div class=\"row mt-4 animated fadeIn fast\">\r\n        <div class=\"col-12 mt-4 text-center\">\r\n          <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n          <div class=\"col-12 mt-4 page-title faded-grey\"><b>No App Profiles Found</b></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ngx-pagination\">\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/app-profiles/app-profiles-list/app-profiles-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppProfilesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProfilesListComponent", function() { return AppProfilesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_profiles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-profiles.service */ "./src/app/app-profiles/app-profiles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppProfilesListComponent = /** @class */ (function () {
    /*=============================*/
    function AppProfilesListComponent(appProfilesService, router, ndpMessageService, messageService) {
        this.appProfilesService = appProfilesService;
        this.router = router;
        this.ndpMessageService = ndpMessageService;
        this.messageService = messageService;
        this.inialized = false;
        /*=============================*/
        /* Pagination Filtering & Sorting*/
        this.p = 1;
        this.perPage = 4;
        /*FILTERING*/
        this.filter = '';
        /*SORTING*/
        this.key = 'appProfileName';
        this.reverse = true;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].API_CRUD;
    }
    AppProfilesListComponent.prototype.sort = function (key) {
        this.key = key;
    };
    AppProfilesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorizationUrl = this.appProfilesService.authorizationUrl;
        this.appProfilesService.list().subscribe(function (template) {
            if (template.status === 0) {
                _this.appProfilesList = template.responsePayload;
                _this.inialized = true;
                _this.filteredAppProfileList = _this.appProfilesList;
                _this.setAccessLevel();
            }
        });
    };
    AppProfilesListComponent.prototype.setAccessLevel = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].SESSION_KEYS.userModel));
        this.user.privilegeList.forEach(function (rolePrivilege) {
            switch (rolePrivilege.privilegeId) {
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].PRIVILEGES.APP_PROFILE.EDIT: {
                    _this.canEdit = true;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].PRIVILEGES.APP_PROFILE.LIST: {
                    _this.canView = true;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].PRIVILEGES.APP_PROFILE.DELETE: {
                    _this.canDelete = true;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].PRIVILEGES.APP_PROFILE.CREATE: {
                    _this.canCreate = true;
                    break;
                }
            }
        });
    };
    AppProfilesListComponent.prototype.dropDownOpen = function (appProfileModle, event) {
        this.dropDownClick = 0;
        this.selectedAppProfile = appProfileModle;
        this.dropDownId = appProfileModle.appProfileId;
        this.dropDown = true;
        event.stopPropagation();
    };
    AppProfilesListComponent.prototype.dropDownClose = function () {
        this.dropDownClick++;
        if (this.dropDown && this.dropDownClick > 1) {
            this.dropDown = false;
            this.dropDownId = null;
        }
    };
    AppProfilesListComponent.prototype.clickedOut = function (event) {
        this.dropDownClose();
    };
    AppProfilesListComponent.prototype.editProfile = function (appProfileId) {
        if (appProfileId != null) {
            sessionStorage.setItem('sessionAppProfileId', appProfileId + '');
        }
        this.router.navigate(['/addEditAppProfile']);
    };
    AppProfilesListComponent.prototype.deleteProfile = function (appProfileId) {
        var _this = this;
        this.appProfilesService.delete(this.selectedAppProfile).subscribe(function (resp) {
            if (resp.status === 0) {
                _this.appProfilesList = _this.appProfilesList.filter(function (x) { return x.appProfileId !== appProfileId; });
            }
        });
        this.dropDownClose();
        this.hideConfirm();
    };
    AppProfilesListComponent.prototype.showConfirmDialog = function (appProfile) {
        this.showConfirm = true;
        this.selectedAppProfile = appProfile;
    };
    AppProfilesListComponent.prototype.hideConfirm = function () {
        this.showConfirm = false;
    };
    // onConfirm() {
    //   this.deleteProfile();
    //   this.dropDownClose();
    //   this.messageService.clear('c');
    // }
    AppProfilesListComponent.prototype.onReject = function () {
        this.messageService.clear('c');
        this.dropDownClose();
    };
    AppProfilesListComponent.prototype.setFilteredAppProfileList = function (filtered) {
        this.filteredAppProfileList = filtered;
    };
    AppProfilesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-app-profiles-list',
            template: __webpack_require__(/*! ./app-profiles-list.component.html */ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./app-profiles-list.component.css */ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.css")]
        }),
        __metadata("design:paramtypes", [_app_profiles_service__WEBPACK_IMPORTED_MODULE_1__["AppProfilesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__["NdpMessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], AppProfilesListComponent);
    return AppProfilesListComponent;
}());



/***/ }),

/***/ "./src/app/app-profiles/app-profiles.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-profiles/app-profiles.module.ts ***!
  \*****************************************************/
/*! exports provided: AppProfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProfilesModule", function() { return AppProfilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_profiles_list_app_profiles_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-profiles-list/app-profiles-list.component */ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.ts");
/* harmony import */ var _app_profiles_add_edit_app_profiles_add_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-profiles-add-edit/app-profiles-add-edit.component */ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.ts");
/* harmony import */ var _app_profiles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-profiles.service */ "./src/app/app-profiles/app-profiles.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _shared_Pipes_appprofile_appprofilename_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/Pipes/appprofile-appprofilename-filter.pipe */ "./src/app/shared/Pipes/appprofile-appprofilename-filter.pipe.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppProfilesModule = /** @class */ (function () {
    function AppProfilesModule() {
    }
    AppProfilesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_profiles_list_app_profiles_list_component__WEBPACK_IMPORTED_MODULE_2__["AppProfilesListComponent"],
                _app_profiles_add_edit_app_profiles_add_edit_component__WEBPACK_IMPORTED_MODULE_3__["AppProfilesAddEditComponent"], _shared_Pipes_appprofile_appprofilename_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["AppProfileAppProfileNameFilter"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlNativeDateTimeModule"]
            ], providers: [
                _app_profiles_service__WEBPACK_IMPORTED_MODULE_4__["AppProfilesService"]
            ],
            exports: [_app_profiles_list_app_profiles_list_component__WEBPACK_IMPORTED_MODULE_2__["AppProfilesListComponent"], _app_profiles_add_edit_app_profiles_add_edit_component__WEBPACK_IMPORTED_MODULE_3__["AppProfilesAddEditComponent"]]
        })
    ], AppProfilesModule);
    return AppProfilesModule;
}());



/***/ }),

/***/ "./src/app/app-profiles/app-profiles.service.ts":
/*!******************************************************!*\
  !*** ./src/app/app-profiles/app-profiles.service.ts ***!
  \******************************************************/
/*! exports provided: AppProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProfilesService", function() { return AppProfilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppProfilesService = /** @class */ (function (_super) {
    __extends(AppProfilesService, _super);
    function AppProfilesService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        console.log("App Profile Service" + _this.backendUrl);
        return _this;
    }
    AppProfilesService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.appprofile;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    AppProfilesService.prototype.ngOnInit = function () {
    };
    AppProfilesService.prototype.list = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.appprofile + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](null, ""), this.httpOptions);
        return obs;
    };
    AppProfilesService.prototype.get = function (appProfileModel) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.appprofile + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](appProfileModel, ""), this.httpOptions);
        return obs;
    };
    AppProfilesService.prototype.create = function (appprofile) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.appprofile + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CREATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](appprofile, ""), this.httpOptions);
        return obs;
    };
    AppProfilesService.prototype.update = function (appprofile) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.appprofile + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](appprofile, ""), this.httpOptions);
        return obs;
    };
    AppProfilesService.prototype.delete = function (appprofile) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.appprofile + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](appprofile, ""), this.httpOptions);
        return obs;
    };
    AppProfilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppProfilesService);
    return AppProfilesService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ndp-spinner ></ndp-spinner>\r\n<div *ngIf=\"isAuthenticated ()\" class=\"p-col-12 p-md-12 p-col-nogutter\">\r\n    <ndp-header></ndp-header>\r\n</div>\r\n<div class=\"p-grid\" style=\"height: 100vh; padding-top: 8.99999vh; max-width: 100vw;\">\r\n    <div id=\"sidem\" *ngIf=\"isAuthenticated ()\" class=\"p-col-fixed p-col-nogutter largeM\" style=\"height: 100%;\">\r\n        <ndp-sidebar></ndp-sidebar>\r\n    </div>\r\n    <div class=\"p-col\">\r\n        <!--Current Page-->\r\n        <router-outlet></router-outlet>\r\n        <!--Status Messages-->\r\n        <ndp-message></ndp-message>\r\n        <!--Footer-->\r\n        <div *ngIf=\"isAuthenticated ()\" style=\"height: 10vh; text-align: center\">\r\n            <ndp-footer *ngIf=\"isAuthenticated ()\"></ndp-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--class=\"p-col-4 p-md-2 p-col-nogutter\"  class=\"p-col-8 p-md-10\"-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NDP';
        this.isAuthenticatedFlag = false;
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl);
    }
    AppComponent.prototype.isAuthenticated = function () {
        if (localStorage.getItem(_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SESSION_KEYS.authToken) === null
            || localStorage.getItem(_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SESSION_KEYS.authToken) === '') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpInterceptors, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptors", function() { return httpInterceptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _sms_templates_sms_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sms-templates/sms-templates.module */ "./src/app/sms-templates/sms-templates.module.ts");
/* harmony import */ var _group_group_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group/group.module */ "./src/app/group/group.module.ts");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general/general.module */ "./src/app/general/general.module.ts");
/* harmony import */ var _ndprouting_ndprouting_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ndprouting/ndprouting.module */ "./src/app/ndprouting/ndprouting.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _campaigns_campaigns_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./campaigns/campaigns.module */ "./src/app/campaigns/campaigns.module.ts");
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roles/roles.module */ "./src/app/roles/roles.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/loading-interceptor */ "./src/app/shared/interceptors/loading-interceptor.ts");
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/interceptors/auth-interceptor */ "./src/app/shared/interceptors/auth-interceptor.ts");
/* harmony import */ var _shared_interceptors_message_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/interceptors/message-interceptor */ "./src/app/shared/interceptors/message-interceptor.ts");
/* harmony import */ var _ndpspinner_ndpspinner_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ndpspinner/ndpspinner.module */ "./src/app/ndpspinner/ndpspinner.module.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _entity_entity_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./entity/entity.module */ "./src/app/entity/entity.module.ts");
/* harmony import */ var _sign_up_signup_signup_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sign-up/signup/signup.module */ "./src/app/sign-up/signup/signup.module.ts");
/* harmony import */ var _app_profiles_app_profiles_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-profiles/app-profiles.module */ "./src/app/app-profiles/app-profiles.module.ts");
/* harmony import */ var _smsc_smsc_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./smsc/smsc.module */ "./src/app/smsc/smsc.module.ts");
/* harmony import */ var _reports_reports_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./reports/reports.module */ "./src/app/reports/reports.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var httpInterceptors = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_14__["LoadingInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_message_interceptor__WEBPACK_IMPORTED_MODULE_16__["MessageInterceptor"], multi: true },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _general_general_module__WEBPACK_IMPORTED_MODULE_8__["GeneralModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
                _sms_templates_sms_templates_module__WEBPACK_IMPORTED_MODULE_6__["SmsTemplatesModule"],
                _group_group_module__WEBPACK_IMPORTED_MODULE_7__["GroupModule"],
                _ndprouting_ndprouting_module__WEBPACK_IMPORTED_MODULE_9__["NDPRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _campaigns_campaigns_module__WEBPACK_IMPORTED_MODULE_11__["CampaignsModule"],
                _roles_roles_module__WEBPACK_IMPORTED_MODULE_12__["RolesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ndpspinner_ndpspinner_module__WEBPACK_IMPORTED_MODULE_17__["NdpspinnerModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["DropdownModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_19__["AccountModule"],
                _entity_entity_module__WEBPACK_IMPORTED_MODULE_21__["EntityModule"],
                _sign_up_signup_signup_module__WEBPACK_IMPORTED_MODULE_22__["SignupModule"],
                _reports_reports_module__WEBPACK_IMPORTED_MODULE_25__["ReportModule"],
                _app_profiles_app_profiles_module__WEBPACK_IMPORTED_MODULE_23__["AppProfilesModule"], _smsc_smsc_module__WEBPACK_IMPORTED_MODULE_24__["SmscModule"]
            ],
            providers: [httpInterceptors, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            exports: [_general_general_module__WEBPACK_IMPORTED_MODULE_8__["GeneralModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-overlay-container {\r\n    position: fixed;\r\n    float: left !important;\r\n    z-index: 1000;\r\n}\r\n\r\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\r\n    opacity: 0.3 !important;\r\n    background: #000 !important;\r\n}\r\n\r\n.owl-dt-calendar-table .owl-dt-calendar-cell-selected {\r\n    color: rgba(255,255,255,.85);\r\n    background-color: #83c51b !important;\r\n}\r\n\r\n.fixed-row{\r\n    position: fixed;\r\n    z-index: 10;\r\n    width: 80%;\r\n    right: -240px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2FkZC1lZGl0LWNhbXBhaWduL2FkZC1lZGl0LWNhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYW1wYWlnbnMvYWRkLWVkaXQtY2FtcGFpZ24vYWRkLWVkaXQtY2FtcGFpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xyXG4gICAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vd2wtZHQtY2FsZW5kYXItdGFibGUgLm93bC1kdC1jYWxlbmRhci1jZWxsLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNjNTFiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXhlZC1yb3d7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICByaWdodDogLTI0MHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content campaign\">\r\n  <!-- <div style=\"position: fixed; bottom: 0; left: 0; width: 100%; background: #b17171; z-index: 999;\">\r\n    {{campaignForm.value|json}}\r\n    <br/>\r\n    {{scheduleFlag}} + {{campaignForm.invalid|json}} + {{sendInSpecificTime}}\r\n  </div> -->\r\n  <div class=\"campaigns\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <div *ngIf=\"mode==0\" class=\"page-title\">\r\n          Add New Campaign\r\n        </div>\r\n        <div *ngIf=\"mode==1\" class=\"page-title\">\r\n          Edit Campaign\r\n        </div>\r\n        <div *ngIf=\"mode==2\" class=\"page-title\">\r\n          Clone Campaign\r\n        </div>\r\n        <div *ngIf=\"!editAfterCampaignStart\" style=\"margin-top:10px;\">\r\n          <form [formGroup]=\"campaignForm\">\r\n            <label class=\"switch\">\r\n              <input formControlName=\"isInternal\" class=\"checkbox\" type=\"checkbox\" disabled/>\r\n              <span class=\"slider\"></span>\r\n            </label>\r\n            <label style=\"margin-left:10px; font-size: 16px; color: #464852;\">Internal Campaign</label>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-12 text-center campaign-steps\">\r\n        <div (click)=\"moveToSchedule()\" class=\"campaign-steps-item\">\r\n          <div class=\"campaign-steps-icon\">\r\n            <span class=\"icon-calender icon \"></span>\r\n          </div>\r\n          <div class=\"campaign-steps-text\">\r\n            Scheduling\r\n          </div>\r\n        </div>\r\n\r\n        <div (click)=\"moveToPace()\" class=\"campaign-steps-item\">\r\n          <div class=\"campaign-steps-icon\">\r\n            <span class=\"icon-clock icon \"></span>\r\n          </div>\r\n          <div class=\"campaign-steps-text\">\r\n            Sending Pace\r\n          </div>\r\n        </div>\r\n        <div (click)=\"moveToDials()\" class=\"campaign-steps-item\">\r\n          <div class=\"campaign-steps-icon\">\r\n            <span class=\"icon-users icon \"></span>\r\n          </div>\r\n          <div class=\"campaign-steps-text\">\r\n            Targeted Dials\r\n          </div>\r\n        </div>\r\n        <div (click)=\"moveToSMS()\" class=\"campaign-steps-item\">\r\n          <div class=\"campaign-steps-icon\">\r\n            <span class=\"icon-arrow icon sms\"></span>\r\n          </div>\r\n          <div class=\"campaign-steps-text\">\r\n            SMS Script\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3 my-auto  text-right\">\r\n        <form [formGroup]=\"campaignForm\" (ngSubmit)=\"onSubmit()\">\r\n          <button type=\"submit\" class=\"button button-green\">\r\n            Save Campaign\r\n          </button>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"section campaign-setting\">\r\n    <div class=\"row\">\r\n      <div class=\"col-5\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Campaign Name</label>\r\n            <input nfSpecialCharacters   class=\"input\" formControlName=\"name\"\r\n              [ngClass]=\"{ 'invalid-input': cf.name.errors && (cf.name.touched || cf.name.dirty || cf.name.value !== '') }\">\r\n            <div *ngIf=\"!!cf.name.errors && (!!cf.name.touched || !!cf.name.dirty || !!cf.name.value)\">\r\n              <div *ngIf=\"!!cf.name.errors.required\" class=\"invalid-text\">Campaign name is required</div>\r\n              <div *ngIf=\"!!cf.name.errors.minlength\" class=\"invalid-text\">Campaign name must be at least 10\r\n                characters</div>\r\n              <div *ngIf=\"!!cf.name.errors.maxlength\" class=\"invalid-text\">Campaign name must not exceed 25\r\n                characters</div>\r\n                <div class=\"invalid-text\" *ngIf=\"!cf.name.errors.required && !!cf.name.errors.nfSpecialCharacters\" >Campaign Name Must be valid</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!--<button class=\"button button-green\" type=\"submit\">Test</button>  -->\r\n      </div>\r\n\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-2\">\r\n        <form [formGroup]=\"campaignForm\">\r\n\r\n          <div class=\"form-input form-selectbox\">\r\n            <label class=\"form-input-label\">Priority</label>\r\n            <select formControlName=\"priority\" class=\"selectbox\">\r\n              <option value=\"1\">High</option>\r\n              <option value=\"2\" selected>Medium</option>\r\n              <option value=\"3\">Low</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-2 offset-1\">\r\n        <div class=\"form-input form-radiobtn\">\r\n          <div class=\"custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"sendNow\" name=\"radio\" (click)=\"setScheduled(false)\"\r\n              [checked]='!scheduleFlag'>\r\n            <label class=\"custom-control-label\" for=\"sendNow\">Send Now</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-2\">\r\n        <div class=\"form-input form-radiobtn\">\r\n          <div class=\"custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"scheduled\" name=\"radio\" (click)=\"setScheduled(true)\"\r\n              [checked]='scheduleFlag'>\r\n            <label class=\"custom-control-label\" for=\"scheduled\">Schedule for Later</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"scheduleFlag\" class=\"section\" #scheduleView id=\"scheduleView\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-left section-title\">\r\n        Scheduling\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"scheduleFlag\" class=\"row \">\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-3\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-timepicker \">\r\n            <label class=\"form-input-label\">Start date </label>\r\n            <input formControlName=\"startDate\" [owlDateTimeTrigger]=\"dt_start_date\" [owlDateTime]=\"dt_start_date\"\r\n              class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.startDate.errors && (cf.startDate.touched || cf.startDate.dirty || cf.startDate.value !== '')}\">\r\n            <owl-date-time [pickerType]=\"'calendar'\" [hour12Timer]=\"'true'\" #dt_start_date></owl-date-time>\r\n            <div [owlDateTimeTrigger]=\"dt_start_date\" class=\"icon-calender-input icon-gray icon-1\"></div>\r\n            <div\r\n              *ngIf=\"!!cf.startDate.errors && (!!cf.startDate.touched || !!cf.startDate.dirty || campaignForm.get('startDate').value !== '')\">\r\n              <div *ngIf=\"!!cf.startDate.errors.dateInvalid\" class=\"invalid-text\">Must be in the Future</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-3\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-timepicker\">\r\n            <label class=\"form-input-label\">Start time</label>\r\n            <input formControlName=\"startTime\" [owlDateTimeTrigger]=\"dt_start_time\" [owlDateTime]=\"dt_start_time\"\r\n              class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.startTime.errors && (cf.startTime.touched || cf.startTime.dirty || cf.startDate.value !== '')}\">\r\n            <owl-date-time [pickerType]=\"'timer'\" [hour12Timer]=\"'true'\" #dt_start_time></owl-date-time>\r\n            <div [owlDateTimeTrigger]=\"dt_start_time\" class=\"icon-time icon-gray icon-1\"></div>\r\n            <div\r\n              *ngIf=\"!!cf.startTime.errors && (!!cf.startTime.touched || !!cf.startTime.dirty || campaignForm.get('startDate').value !== '')\">\r\n              <div *ngIf=\"!!cf.startTime.errors.timeInvalid\" class=\"invalid-text\">Must be in the Future</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <form *ngIf=\"campaignForm.controls\" [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-timepicker\">\r\n            <label class=\"form-input-label\">End date</label>\r\n            <input [min]=\"2019-07-13\" formControlName=\"endDate\" [owlDateTimeTrigger]=\"dt_end_date\"\r\n              [owlDateTime]=\"dt_end_date\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.endDate.errors && (cf.endDate.touched || cf.endDate.dirty || cf.endDate.value !== null)}\">\r\n            <owl-date-time [pickerType]=\"'calendar'\" #dt_end_date></owl-date-time>\r\n            <div [owlDateTimeTrigger]=\"dt_end_date\" class=\"icon-calender-input icon-gray icon-1\"></div>\r\n            <div\r\n              *ngIf=\"!!cf.endDate.errors && (!!cf.endDate.touched || !!cf.endDate.dirty || campaignForm.get('endDate').value !== null )\">\r\n              <div *ngIf=\"!!cf.endDate.errors.mustBeAfter\" class=\"invalid-text\">Can't be before start date</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-timepicker\">\r\n            <label class=\"form-input-label\">End time</label>\r\n            <input   formControlName=\"endTime\" [owlDateTimeTrigger]=\"dt_end_time\" [owlDateTime]=\"dt_end_time\"\r\n              class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.endDate.errors && (cf.endDate.touched || cf.endDate.dirty || cf.endDate.value !== null)}\">\r\n            <owl-date-time [pickerType]=\"'timer'\" [hour12Timer]=\"'true'\" #dt_end_time></owl-date-time>\r\n            <div [owlDateTimeTrigger]=\"dt_end_time\" class=\"icon-time icon-gray icon-1\"></div>\r\n            <div\r\n              *ngIf=\"!!cf.endDate.errors && (!!cf.endDate.touched || !!cf.endDate.dirty || campaignForm.get('endDate').value !== null )\">\r\n              <div *ngIf=\"!!cf.endDate.errors.required\" class=\"invalid-text\">End Time is Required</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"scheduleFlag\" class=\"row \">\r\n      <div class=\"col-3\">\r\n        <form class=\"pt-5\">\r\n          <div class=\"custom-control custom-checkbox text-muted\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\"\r\n              [(ngModel)]=\"sendInSpecificTime\" (click)=\"toggleSendInSpecificTime()\"\r\n              [ngModelOptions]=\"{standalone: true}\">\r\n            <label class=\"custom-control-label\" for=\"customCheck\">Send SMS in specific\r\n              time</label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"sendInSpecificTime\" class=\"col-3\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-timepicker form-input-margin\">\r\n            <label class=\"form-input-label\">Sending Start time</label>\r\n            <input   formControlName=\"sendStartTime\" [owlDateTimeTrigger]=\"dt_specific_start_time\"\r\n              [owlDateTime]=\"dt_specific_start_time\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.sendStartTime.errors && (cf.sendStartTime.touched || cf.sendStartTime.dirty)}\">\r\n            <owl-date-time [pickerType]=\"'timer'\" [hour12Timer]=\"'true'\" #dt_specific_start_time></owl-date-time>\r\n            <div class=\"icon-time icon-gray icon-1\"></div>\r\n            <div *ngIf=\"!!cf.sendStartTime.errors && (!!cf.sendStartTime.touched || !!cf.sendStartTime.dirty)\">\r\n              <div *ngIf=\"!!cf.sendStartTime.errors.mustBeAfterTimeWindowStart\" class=\"invalid-text\">Can't be before app profile's time window start [{{entity.timeWindowStart | date :  \"hh:mm aa\" }}]\r\n              </div>\r\n              <div *ngIf=\"!!cf.sendStartTime.errors.required\" class=\"invalid-text\">Time to start sending SMS is required\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"!cf.sendStartTime.invalid\" class=\"campaign-sublabel\"> Time to start sending SMS </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"sendInSpecificTime\" class=\"col-3\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-timepicker form-input-margin\">\r\n            <label class=\"form-input-label\">Sending End time</label>\r\n            <input   formControlName=\"sendEndTime\" [owlDateTimeTrigger]=\"dt_specific_end_time\"\r\n              [owlDateTime]=\"dt_specific_end_time\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.sendEndTime.errors && (cf.sendEndTime.touched || cf.sendEndTime.dirty)}\">\r\n            <owl-date-time [pickerType]=\"'timer'\" [hour12Timer]=\"'true'\" #dt_specific_end_time></owl-date-time>\r\n            <div class=\"icon-time icon-gray icon-1\"></div>\r\n            <div *ngIf=\"!!cf.sendEndTime.errors && (!!cf.sendEndTime.touched || !!cf.sendEndTime.dirty)\">\r\n              <div *ngIf=\"!!cf.sendEndTime.errors.mustBeAfter\" class=\"invalid-text\">Can't be before sending start time</div>\r\n              <div *ngIf=\"!!cf.sendEndTime.errors.mustBeAfterTimeWindowEnd\" class=\"invalid-text\">Can't be after app profile's time window end [{{entity.timeWindowEnd | date :  \"hh:mm aa\" }}]</div>\r\n              <div *ngIf=\"!!cf.sendEndTime.errors.required\" class=\"invalid-text\">Time to stop sending SMS is Required\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"!cf.sendEndTime.invalid\" class=\"campaign-sublabel\">Time to stop sending SMS</div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\" #paceView id=\"paceView\">\r\n    <div class=\"row\">\r\n      <div class=\"col-8 text-left section-title\">\r\n        Sending Pace\r\n      </div>\r\n    </div>\r\n    <div class=\"row pl-4 mb-4\">\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-4 custom-checkbox\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"crit-flag\" name=\"critical\" (click)=\"toggleCritical()\"\r\n            formControlName=\"isCritical\">\r\n          <label class=\"custom-control-label\" for=\"crit-flag\">Critical Campaign</label>\r\n          <div class=\"campaign-sublabel \">\r\n            Give this campaign priority over my other campaigns\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"!editAfterCampaignStart\" class=\"col-4 custom-checkbox\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"open-flag\" name=\"open-ended\"\r\n            (click)=\"toggleIsOpenEnded()\" formControlName=\"isOpenEnded\">\r\n          <label class=\"custom-control-label\" for=\"open-flag\">Open Ended</label>\r\n          <div class=\"campaign-sublabel \">\r\n            Mark this campaign as open ended\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"campaignForm\">\r\n      <div class=\"row  pl-4\">\r\n        <div *ngIf=\"!editAfterCampaignStart\" class=\"col-4\">\r\n          <div class=\"form-input form-radiobtn \">\r\n            <div class=\"custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" id=\"1\" name=\"paceType\" value=\"1\"\r\n                formControlName=\"paceType\">\r\n              <label class=\"custom-control-label Pace-label\" for=\"1\">Maximum Throughput</label>\r\n              <div class=\"campaign-sublabel \">\r\n                SMS massages will be sent using the maximum throughout allowed\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"scheduleFlag && !cf.isOpenEnded.value\" class=\"col-4\">\r\n          <div class=\"form-input form-radiobtn \">\r\n            <div *ngIf=\"!editAfterCampaignStart\" class=\"custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" id=\"2\" name=\"paceType\" value=\"2\"\r\n                formControlName=\"paceType\">\r\n              <label class=\"custom-control-label Pace-label\" for=\"2\">Evenly Distributed</label>\r\n              <div class=\"campaign-sublabel \">\r\n                SMS will be divided evenly on the number of days of the campaign\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <div class=\"form-input form-radiobtn\">\r\n            <div class=\"custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" id=\"3\" name=\"paceType\" value=\"3\"\r\n                formControlName=\"paceType\">\r\n              <label class=\"custom-control-label Pace-label\" for=\"3\">Specific SMS Rate</label>\r\n              <div class=\"campaign-sublabel \">\r\n                Controls SMS Messages Sending Rate\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"!!(cf.paceType.value == 3)\" class=\"mt-4 pace-label\">\r\n            <div class=\"form-input\">\r\n              <label class=\"form-input-label\">SMS RATE</label>\r\n              <!--input formControlName=\"paceRate\" class=\"input\" placeholder=\"eg. 50\"-->\r\n              <input class=\"input\" formControlName=\"paceRate\" type=\"range\" style=\"width:100%;margin-bottom:10px;\"\r\n                min=\"1\" [max]=\"entity.maxThroughput\" step=\"1\" [value]=\"campaignForm.controls['paceRate'].value\">\r\n              <div class=\"campaign-sublabel \">\r\n                {{campaignForm.controls['paceRate'].value}} Messages/Second\r\n              </div>\r\n              <input   class=\"input\" formControlName=\"paceRate\" type=\"number\" min=\"1\"\r\n                [value]=\"campaignForm.controls['paceRate'].value\"\r\n                [ngClass]=\"{ 'invalid-input': cf.paceRate.errors && (cf.paceRate.touched || cf.paceRate.dirty || cf.paceRate.value !== null) }\">\r\n              <span\r\n                *ngIf=\"campaignForm.get('paceRate').errors && (campaignForm.get('paceRate').touched || campaignForm.get('paceRate').dirty)\">\r\n                <span *ngIf=\"!!cf.paceRate.errors.required\" class=\"invalid-text\">SMS rate is required</span>\r\n                <span *ngIf=\"!!cf.paceRate.errors.min\" class=\"invalid-text\">SMS rate can't be less than 1</span>\r\n                <span *ngIf=\"!!cf.paceRate.errors.max\" class=\"invalid-text\">SMS rate can't be more than entity's\r\n                  maximum</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div *ngIf=\"!editAfterCampaignStart\" class=\"section\" id=\"dials\" #dialView id=\"dialView\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-left section-title\">\r\n        Targeted Dials\r\n      </div>\r\n    </div>\r\n    <div class=\"row pl-4 \">\r\n      <div class=\"col-4\">\r\n        <div class=\"form-input form-radiobtn \">\r\n          <div class=\"custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"5\" name=\"dials\" [checked]='!fileFlag'\r\n              (click)=\"setFileFlag(false)\" [disabled]=\"!hasGroups\">\r\n            <label class=\"custom-control-label\" for=\"5\">Use Existing Group</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <div class=\"form-input form-radiobtn \">\r\n          <div class=\"custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"6\" name=\"dials\" [checked]='fileFlag'\r\n              (click)=\"setFileFlag(true)\">\r\n            <label class=\"custom-control-label\" for=\"6\">Import File</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"entity && entity.isLimited\" class=\"col-4\">\r\n        <label class=\"form-input-label\">Entity Balance</label>\r\n        <div class=\"title-gray-dark\">\r\n          {{entity.balance}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!fileFlag && groupsList\" class=\"row pl-3\">\r\n      <div class=\"col-4\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-selectbox form-input-margin\">\r\n            <label class=\"form-input-label\">Select Targeted Group</label>\r\n            <select formControlName=\"groupId\" class=\"selectbox\"\r\n              [ngClass]=\"{ 'invalid-input': cf.groupId.errors && (cf.groupId.touched || cf.groupId.dirty || cf.groupId.value !== null) }\">\r\n              <option *ngFor=\"let group of groupsList\" [ngValue]=\"group.groupId\">{{group.groupName}}</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\"></div>\r\n            <div\r\n              *ngIf=\"!!cf.groupId.errors && (!!cf.groupId.touched || !!cf.groupId.dirty || campaignForm.get('groupId').value !== null )\">\r\n              <div *ngIf=\"!!cf.groupId.errors.required\" class=\"invalid-text\">Targeted Group is required</div>\r\n              <div *ngIf=\"!!cf.groupId.errors.zeroDials\" class=\"invalid-text\">Targeted group has no dials</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"fileFlag\" class=\"row pl-3\">\r\n      <div *ngIf=\"fileType === null\" class=\"col-12 form-input-margin form-input-label mb-2\">\r\n        Select one format of CSV files\r\n      </div>\r\n      <div *ngIf=\"fileType !== null\" class=\"col-12 form-input-margin form-input-label mb-2\">\r\n        <span *ngIf=\"fileType !== null\" style=\"color:#a3d94e\"> Selected: {{fileTypes[fileType].label}}</span>\r\n      </div>\r\n      <div *ngFor=\"let fType of fileTypes\" class=\"col-4\">\r\n        <a (click)=\"activeFileType(fType.id)\" class=\"caption pointer\">\r\n          <div *ngIf=\"fileType !== fType.id\" class=\"caption-media\">\r\n            <span class=\"icon-paper icon-lg icon-gray\"></span>\r\n          </div>\r\n          <div *ngIf=\"fileType === fType.id\" class=\"caption-media\">\r\n            <span class=\"icon-paper icon-lg icon-green\">\r\n              <div class=\"position-relative\">\r\n                <span class=\"icon-checked checked-mark\"></span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n          <div class=\"caption-text caption-text-gutter title-small-muted\">\r\n            <div class=\"title-small title-robotomedium\">\r\n              {{fType.label}}\r\n            </div>\r\n            <div class=\"title-xsmall title-gray\">\r\n              {{fType.description}}\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"fileType === fType.id\">\r\n            <a (click)=\"downloadSample()\" class=\"fas fa-file-download pointer faded-grey\"\r\n              style=\" font-size: 2em; margin-left: 15px;\"></a>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <!--div class=\"col-12 title-medium text-center pt-5\">\r\n        Drop File to upload\r\n      </div-->\r\n      <div *ngIf=\"fileType !== null\" class=\"col-12 mt-4\">\r\n        <div *ngIf=\"fileUploaded\" class=\"row \">\r\n          <div class=\"col-12 text-center my-auto p-2\">\r\n            <b>{{ fileUploaded.relativePath }}</b><span (click)=\"clearUploadedFile()\"\r\n              class=\"fas fa-times pointer ml-4\"></span>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fileUploaded === null\">\r\n          <file-drop dropZoneLabel=\"Drop file to upload  \" dropZoneClassName=\"file-drop-zone\"\r\n            contentClassName=\"file-drop-content\" [showBrowseBtn]=\"true\" browseBtnClassName=\"button button-green ml-2\"\r\n            browseBtnLabel=\"Browse\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\"\r\n            (onFileLeave)=\"fileLeave($event)\">\r\n          </file-drop>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!editAfterCampaignStart\" class=\"section pb-5 \" id=\"sms\" #smsView id=\"smsView\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-left section-title\">\r\n        SMS Script\r\n      </div>\r\n    </div>\r\n    <div class=\"row pl-3\">\r\n      <div class=\"col-3\">\r\n        <div class=\"form-input form-radiobtn \">\r\n          <div class=\"custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"7\" name=\"sms\" [checked]=\"!smsTemplateFlag\"\r\n              (click)=\"setSmsTemplateFlag(false)\">\r\n            <label class=\"custom-control-label\" for=\"7\">New SMS Script</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <div class=\"form-input form-radiobtn \">\r\n          <div class=\"custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"8\" name=\"sms\" [checked]=\"smsTemplateFlag\"\r\n              (click)=\"setSmsTemplateFlag(true)\"\r\n              [disabled]=\"!smsTemplatesList || smsTemplatesList.length === 0 || !hasSmsTemplates\">\r\n            <label class=\"custom-control-label\" for=\"8\"> SMS Script From Template</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!smsTemplateFlag\" class=\"row \">\r\n      <div class=\"col-12\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-input-margin\">\r\n            <label class=\"form-input-label\">SMS Script</label>\r\n            <textarea autosize [minRows]=\"1\" [maxRows]=\"8\" formControlName=\"notificationText\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.notificationText.errors && (cf.notificationText.touched || cf.notificationText.dirty || cf.notificationText.value !== null) }\"\r\n              placeholder=\"Enter SMS Text\"></textarea>\r\n            <span style=\"font-size:12px;\"\r\n              [ngClass]=\"{'invalid-text': cf.notificationText.errors && (cf.notificationText.touched || cf.notificationText.dirty)}\">{{smsScriptLength}}\r\n              / {{smsMaxCharCount}} | {{smsCount}}</span>\r\n\r\n            <span style=\"margin-left: 10px;\"\r\n              *ngIf=\"campaignForm.get('notificationText').errors && (campaignForm.get('notificationText').touched || campaignForm.get('notificationText').dirty)\">\r\n              <span *ngIf=\"!!cf.notificationText.errors.required\" class=\"invalid-text\">SMS script is required</span>\r\n              <span *ngIf=\"!!cf.notificationText.errors.invalidPlaceholder\" class=\"invalid-text\">SMS script has invalid\r\n                placeholders {{invalidPlaceholders}}</span>\r\n              <span *ngIf=\"!!cf.notificationText.errors.minlength\" class=\"invalid-text\">SMS script must be at least 5\r\n                characters</span>\r\n              <span *ngIf=\"!!cf.notificationText.errors.maxlength\" class=\"invalid-text\">SMS script must not exceed 160\r\n                characters</span>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"smsTemplateFlag\" class=\"row \">\r\n      <div class=\"col-6\">\r\n        <form [formGroup]=\"campaignForm\">\r\n          <div class=\"form-input form-selectbox form-input-margin\">\r\n            <label class=\"form-input-label\">Choose SMS Template</label>\r\n            <select formControlName=\"notificationText\" class=\"selectbox\" (change)=\"setSmsTemplateFlag(false)\">\r\n              <option *ngFor=\"let sms of smsTemplatesList\" [ngValue]=\"sms.text\">{{sms.title}}</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"row \">\r\n      <div class=\"col-6\">\r\n        <div *ngIf=\"!canAddFakeSender\" class=\"form-input form-selectbox form-input-margin\">\r\n          <form [formGroup]=\"campaignForm\">\r\n            <label class=\"form-input-label\">Choose a Sender Name</label>\r\n            <select formControlName=\"senderName\" class=\"selectbox\"\r\n              [ngClass]=\"{ 'invalid-input': cf.senderName.errors && (cf.senderName.touched || cf.senderName.dirty || cf.senderName.value !== null) }\">\r\n              <option *ngFor=\"let sender of fakeSenders\" [ngValue]=\"sender.senderName\">{{sender.senderName}}</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\">\r\n            </div>\r\n            <div\r\n              *ngIf=\"!!cf.senderName.errors && (!!cf.senderName.touched || !!cf.senderName.dirty || campaignForm.get('senderName').value !== null)\">\r\n              <div *ngIf=\"!!cf.senderName.errors.required\" class=\"invalid-text\">Sender name is required</div>\r\n              \r\n            </div>\r\n\r\n           \r\n          </form>\r\n        </div>\r\n        <div *ngIf=\"canAddFakeSender\" class=\"form-input form-input-margin\">\r\n          <form [formGroup]=\"campaignForm\">\r\n            <label class=\"form-input-label\">Custom Sender Name</label>\r\n            <input nfSpecialCharacters   formControlName=\"senderName\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': cf.senderName.errors && (cf.senderName.touched || cf.senderName.dirty || cf.senderName.value !== null) }\"\r\n              placeholder=\"Type Custom Sender Name Here\" maxlength=\"11\">\r\n            <div *ngIf=\"!!cf.senderName.errors && (!!cf.senderName.touched || !!cf.senderName.dirty || campaignForm.get('senderName').value !== null)\">\r\n              <div *ngIf=\"!!cf.senderName.errors.required\" class=\"invalid-text\">Sender Name is required</div>\r\n              <div *ngIf=\"!cf.senderName.errors.required && !!cf.senderName.errors.nfSpecialCharacters\" >Sender Name Must be valid</div>\r\n\r\n              <div *ngIf=\"!!cf.senderName.errors.maxlength\" class=\"invalid-text\">Sender name must not exceed 25\r\n                characters</div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"entity != null && entity.canAddFakeSenders && user.canAddFakeSender\" class=\"col-3\">\r\n        <div class=\"custom-checkbox\" style=\"margin-top:50px; margin-left:30px;\">\r\n          <input [(ngModel)]=\"canAddFakeSender\" type=\"checkbox\" class=\"custom-control-input\" id=\"custom-sender\"\r\n            name=\"custom-sender\" (click)=\"toggleFakeSender()\" [checked]=\"canAddFakeSender\">\r\n          <label class=\"custom-control-label\" for=\"custom-sender\">ِAdd Custom Sender</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3 text-right\">\r\n        <button type=\"button\" (click)=\"show()\" style=\"margin-top:50px; margin-left:30px;\"\r\n          class=\"button button-green mr-3\">\r\n          Test SMS\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 \">\r\n    <div class=\"col-12 justify-content-center text-center\">\r\n      <form [formGroup]=\"campaignForm\" (ngSubmit)=\"onSubmit()\">\r\n        <button type=\"submit\" class=\"button button-green mr-3\">\r\n          Save Campaign\r\n        </button>\r\n        <button (click)=\"navigateBack()\" class=\"button button-grey mr-2 \">\r\n          Cancel Campaign\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddEditCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditCampaignComponent", function() { return AddEditCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/campaign-model */ "./src/app/shared/models/campaign-model.ts");
/* harmony import */ var src_app_campaigns_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/campaigns/campaign.service */ "./src/app/campaigns/campaign.service.ts");
/* harmony import */ var src_app_shared_models_file_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/file-model */ "./src/app/shared/models/file-model.ts");
/* harmony import */ var src_app_group_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/group/group.service */ "./src/app/group/group.service.ts");
/* harmony import */ var src_app_sms_templates_sms_templates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sms-templates/sms-templates.service */ "./src/app/sms-templates/sms-templates.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models/campaign-request-model */ "./src/app/shared/models/campaign-request-model.ts");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/models/entity-model */ "./src/app/shared/models/entity-model.ts");
/* harmony import */ var src_app_entity_entity_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/entity/entity-service.service */ "./src/app/entity/entity-service.service.ts");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _test_sms_test_sms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../test-sms/test-sms.component */ "./src/app/campaigns/test-sms/test-sms.component.ts");
/* harmony import */ var src_app_shared_models_test_sms_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/models/test-sms-model */ "./src/app/shared/models/test-sms-model.ts");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AddEditCampaignComponent = /** @class */ (function () {
    // CONSTRUCTOR
    function AddEditCampaignComponent(campaignService, groupService, smsTemplatesService, entityService, formBuilder, messageService, router, route, dialogService) {
        this.campaignService = campaignService;
        this.groupService = groupService;
        this.smsTemplatesService = smsTemplatesService;
        this.entityService = entityService;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        // PRIVILEGE BOOLEANS
        this.hasGroups = false;
        this.hasSmsTemplates = false;
        this.smsScriptLength = 0;
        this.smsMaxCharCount = 160;
        this.smsCount = 0;
        this.fileModel = new src_app_shared_models_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"];
        this.files = [];
        this.fileType = null;
        this.fileTypes = [
            { id: 0, label: 'Dials only', description: 'EX:012201515674', isActive: false },
            { id: 1, label: 'Dials with one value', description: 'EX:012201515674,Name', isActive: true },
            { id: 2, label: 'Dials with many values', description: 'EX:012201515674,Name, ...', isActive: false }
        ];
        this.sample0 = [
            { number: '01112345679' },
            { number: '01112345678' },
            { number: '01112345677' },
            { number: '01112345676' },
            { number: '01112345675' }
        ];
        this.sample1 = [
            { number: '01112345679', name: 'Ahmed' },
            { number: '01112345678', name: 'Shehab' },
            { number: '01112345677', name: 'Eslam' },
            { number: '01112345676', name: 'Mina' },
            { number: '01112345675', name: 'Abdalla' }
        ];
        this.sample2 = [
            { number: '01112345679', name: 'Name=Ahmed', prize: 'Prize=100' },
            { number: '01112345678', name: 'Name=Shehab', prize: 'Prize=200' },
            { number: '01112345677', name: 'Name=Eslam', prize: 'Prize=300' },
            { number: '01112345676', name: 'Name=Mina', prize: 'Prize=400' },
            { number: '01112345675', name: 'Name=Abdalla', prize: 'Prize=500' }
        ];
        this.csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '',
            decimalseparator: '.',
            showLabels: false,
            showTitle: false,
            useBom: true,
            noDownload: false,
        };
        this.canAddFakeSender = false;
        this.startDate = new Date;
        this.startTime = new Date;
        this.paceRate = 0;
        this.scheduleFlag = false;
        this.fileFlag = false;
        this.smsTemplateFlag = false;
        this.sendInSpecificTime = false;
        this.submitted = true;
        this.placeholders = [];
        this.editAfterCampaignStart = false;
    }
    AddEditCampaignComponent.prototype.show = function () {
        var _this = this;
        if (this.campaignForm.get('notificationText').value === null || this.campaignForm.get('notificationText').value === '') {
            this.messageService.addWarnings(['Please fill in the SMS details first']);
            this.moveToSMS();
            return;
        }
        var ref = this.dialogService.open(_test_sms_test_sms_component__WEBPACK_IMPORTED_MODULE_16__["TestSmsComponent"], {
            width: '40%',
            showHeader: false,
            data: {
                msg: this.campaignForm.get('notificationText').value
            }
        });
        ref.onClose.subscribe(function (s) {
            if (s) {
                var model = new src_app_shared_models_test_sms_model__WEBPACK_IMPORTED_MODULE_17__["TestSmsModel"]();
                model.admCampaignsModel = _this.campaignForm.value;
                var arabic = /[\u0600-\u06FF]/;
                if (arabic.test(model.admCampaignsModel.notificationText)) {
                    model.admCampaignsModel.language = 'AR';
                }
                model.dialWithParameters = s;
                _this.campaignService.testSms(model).toPromise().then(function (r) {
                    if (r.status === 0) {
                        _this.messageService.addInfo('Sent Test SMS to ' + s.split(',')[0]);
                    }
                    else {
                        _this.messageService.addWarnings(['Sending SMS Failed']);
                    }
                });
            }
        });
    };
    // AUTOSCROLL
    AddEditCampaignComponent.prototype.moveToSchedule = function () {
        this.scheduleView.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    };
    AddEditCampaignComponent.prototype.moveToPace = function () {
        this.paceView.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    };
    AddEditCampaignComponent.prototype.moveToDials = function () {
        this.dialView.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    };
    AddEditCampaignComponent.prototype.moveToSMS = function () {
        this.smsView.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    };
    // INTITIALIZE
    AddEditCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        // RESET VIEW
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        // INIT
        this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_11__["User"]();
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].SESSION_KEYS.userModel));
        this.setPrivilegeFlags();
        if (this.hasGroups) {
            this.retrieveGroups();
        }
        else {
            this.fileFlag = true;
        }
        if (this.hasSmsTemplates) {
            this.retrieveSmsTemplates();
        }
        this.retrieveFakeSenders();
        this.retrieveEntity();
        if (this.newCampaign == null) {
            this.newCampaign = new src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__["CampaignModel"]();
            this.newCampaign.paceType = '2';
            this.newCampaign.priority = 2; //1: High , 2:Medium , 3:Low
            this.newCampaign.isCritical = true;
            this.sendInSpecificTime = false;
        }
        this.campaignForm = this.formBuilder.group({
            campaignId: '',
            campaignType: [1],
            channel: [1],
            status: (this.user.needsApproval ? src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].CAMPAIGN_STATUS.PENDING : src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].CAMPAIGN_STATUS.APPROVED),
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(25), this.nonEmptyValidator()]],
            startDate: [new Date],
            endDate: [null],
            startTime: [new Date],
            endTime: [null],
            priority: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            isInternal: [true],
            isCritical: [false],
            paceType: ['1'],
            paceRate: [1],
            groupId: [null],
            notificationText: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.nonEmptyValidator()]],
            senderName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(25), this.nonEmptyValidator()]],
            sendStartTime: [null],
            sendEndTime: [null],
            language: ['EN'],
            isOpenEnded: false
        }, {
        // validator: this.greaterValidator('endDate', 'startDate')
        });
        this.route.paramMap.subscribe(function (params) {
            var campId = +params.get('id');
            if (campId) {
                if (_this.router.url.includes('campaigns/edit')) {
                    _this.mode = 1;
                }
                if (_this.router.url.includes('campaigns/clone')) {
                    _this.mode = 2;
                }
                _this.getCampaign(campId);
            }
            else {
                _this.mode = 0;
            }
        });
        // this.campaignForm.get('startDate').valueChanges.subscribe(val => {
        //   this.campaignForm.patchValue({
        //     startTime: this.combineDateTime(val, new Date())
        //   });
        // });
        // this.campaignForm.get('endDate').valueChanges.subscribe(val => {
        //   this.campaignForm.patchValue({
        //     endTime: this.combineDateTime(val, new Date())
        //   });
        // });
        if (this.mode !== 2) {
            this.campaignForm.get('startTime').valueChanges.subscribe(function (val) {
                _this.campaignForm.patchValue({ startDate: _this.combineDateTime(_this.campaignForm.get('startDate').value, val) });
            });
            this.campaignForm.get('endTime').valueChanges.subscribe(function (val) {
                _this.campaignForm.patchValue({ endDate: _this.combineDateTime(_this.campaignForm.get('endDate').value, val) });
            });
        }
        this.campaignForm.get('isInternal').valueChanges.subscribe(function (val) {
            if (val) {
                _this.setFileFlag(true);
            }
            else {
                _this.setFileFlag(false);
            }
        });
        this.campaignForm.controls.notificationText.valueChanges.subscribe(function (val) {
            if (val) {
                _this.smsScriptLength = val.length;
                var arabic = /[\u0600-\u06FF]/;
                _this.smsMaxCharCount = arabic.test(val) ? 80 : 160;
            }
            else {
                _this.smsScriptLength = 0;
            }
            _this.smsCount = (_this.smsScriptLength == 0) ? 0 : Math.trunc(_this.smsScriptLength / _this.smsMaxCharCount) + 1;
        });
    };
    AddEditCampaignComponent.prototype.setPrivilegeFlags = function () {
        var _this = this;
        if (this.user.privilegeList) {
            this.user.privilegeList.forEach(function (pr) {
                switch (pr.privilegeId) {
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].PRIVILEGES.GROUP.LIST:
                        _this.hasGroups = true;
                        break;
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].PRIVILEGES.SMSTEMPLATES.LIST:
                        _this.hasSmsTemplates = true;
                        break;
                }
            });
        }
    };
    // setAccessLevel() {
    //   this.user = JSON.parse(localStorage.getItem(Defines.SESSION_KEYS.userModel));
    //   if (this.user.privilegeList) {
    //     this.user.privilegeList.forEach(rolePrivilege => {
    //       switch (rolePrivilege.privilegeId) {
    //         case Defines.PRIVILEGES.CAMPAIGN.EDIT: {
    //           this.editAccessLevel = rolePrivilege.accessLevel;
    //           break;
    //         } case Defines.PRIVILEGES.CAMPAIGN.LIST: {
    //           this.listAccessLevel = rolePrivilege.accessLevel;
    //           break;
    //         } case Defines.PRIVILEGES.CAMPAIGN.DELETE: {
    //           this.deleteAccessLevel = rolePrivilege.accessLevel;
    //           break;
    //         } case Defines.PRIVILEGES.CAMPAIGN.CREATE: {
    //           this.canCreate = true;
    //           break;
    //         } case Defines.PRIVILEGES.CAMPAIGN.approve: {
    //           this.canApproveflag = true;
    //           break;
    //         }
    //       }
    //     }
    //     );
    //   }
    // }
    AddEditCampaignComponent.prototype.setDateValidator = function () {
        this.campaignForm.setValidators([this.greaterValidator('endDate', 'startDate'), this.greaterTimeValidator('sendEndTime', 'sendStartTime'), this.AppProfileTimeWindowValidator('sendEndTime', 'sendStartTime')]);
        // this.campaignForm.setValidators([this.AppProfileTimeWindowValidator('endDate', 'startDate'), this.AppProfileTimeWindowValidator('sendEndTime', 'sendStartTime')]);
        this.campaignForm.get('startDate').setValidators(this.dateRangeValidator(this.now()));
        this.campaignForm.get('startTime').setValidators(this.timeRangeValidator(this.campaignForm.get('startDate')));
    };
    AddEditCampaignComponent.prototype.clearDateValidator = function () {
        this.campaignForm.clearValidators();
        this.campaignForm.get('endDate').setErrors(null);
        this.campaignForm.patchValue({ endDate: null });
        this.campaignForm.get('startDate').clearValidators();
    };
    // LOAD CAMPAIGN
    AddEditCampaignComponent.prototype.getCampaign = function (campId) {
        var _this = this;
        var camp = new src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_10__["CampaignRequestModel"];
        camp.campaignModel = new src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__["CampaignModel"];
        camp.campaignModel.campaignId = campId;
        this.campaignService.get(camp).subscribe(function (response) { return _this.editCampaign(response.responsePayload); }, function (err) { return console.log(err); });
    };
    AddEditCampaignComponent.prototype.editCampaign = function (campaign) {
        var _this = this;
        this.campaignForm.patchValue({
            campaignId: campaign.campaignId,
            campaignType: campaign.campaignType,
            channel: campaign.channel,
            status: (this.user.needsApproval ? src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].CAMPAIGN_STATUS.PENDING : campaign.status),
            name: (this.mode === 1) ? campaign.name : '(CLONE) ' + campaign.name,
            startDate: (this.mode === 1) ? new Date(campaign.startDate) : new Date(),
            endDate: (this.mode === 1) ? ((campaign.endDate) ? new Date(campaign.endDate) : null) : null,
            startTime: (this.mode === 1) ? new Date(campaign.startDate) : new Date(),
            endTime: (this.mode === 1) ? ((campaign.endDate) ? new Date(campaign.endDate) : null) : null,
            priority: campaign.priority,
            isInternal: campaign.isInternal,
            isCritical: campaign.isCritical,
            paceType: campaign.paceType,
            paceRate: campaign.paceRate,
            groupId: campaign.groupId,
            notificationText: campaign.notificationText,
            senderName: campaign.senderName,
            sendStartTime: (this.mode === 1) ? ((campaign.sendStartTime) ? new Date(campaign.sendStartTime) : null) : null,
            sendEndTime: (this.mode === 1) ? ((campaign.sendEndTime) ? new Date(campaign.sendEndTime) : null) : null,
            language: campaign.language,
            isOpenEnded: campaign.isOpenEnded
        });
        this.editAfterCampaignStart = this.mode === 1 && (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].CAMPAIGN_STATUS.HANDLING
            || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].CAMPAIGN_STATUS.SMS_ENQUEUED
            || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_9__["Defines"].CAMPAIGN_STATUS.PAUSED);
        console.log('mode => ', this.mode);
        console.log('campaign status => ', campaign.status);
        console.log('editAfterCampaignStarts ==> ', this.editAfterCampaignStart);
        if (this.editAfterCampaignStart) {
            this.campaignForm.get('status').setValue(campaign.status);
        }
        if (this.entity != null && this.entity.canAddFakeSenders && this.user.canAddFakeSender) {
            setTimeout(function () { return _this.canAddFakeSender = true; });
        }
        this.setControlVals(campaign);
    };
    AddEditCampaignComponent.prototype.setControlVals = function (campaign) {
        this.setScheduled(true);
        if (campaign.sendStartTime !== null) {
            this.toggleSendInSpecificTime();
            this.sendInSpecificTime = true;
        }
    };
    Object.defineProperty(AddEditCampaignComponent.prototype, "cf", {
        get: function () { return this.campaignForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddEditCampaignComponent.prototype.getStartDate = function () {
        return this.campaignForm.controls['startDate'].value;
    };
    AddEditCampaignComponent.prototype.dateRangeValidator = function (min) {
        return function (control) {
            if (control.value) {
                var options = {};
                var controlDate = new Date(control.value);
                var now = new Date();
                controlDate.setHours(23);
                controlDate.setMinutes(59);
                controlDate.setSeconds(59);
                controlDate.setMilliseconds(9999);
                if (controlDate < now) {
                    return { 'dateInvalid': true };
                }
            }
            return null;
        };
    };
    AddEditCampaignComponent.prototype.timeRangeValidator = function (startDateControl) {
        return function (control) {
            if (control.value && startDateControl.value) {
                var startDate = new Date(startDateControl.value);
                var currentDate = new Date();
                console.log('startDate => ', startDate.toLocaleDateString('en-EG'));
                console.log('currentDate => ', currentDate.toLocaleDateString('en-EG'));
                if (startDate.toLocaleDateString('en-EG') === currentDate.toLocaleDateString('en-EG')) {
                    var options = { hour12: false };
                    var time = new Date(control.value);
                    var currentTime = new Date();
                    if (time.toLocaleTimeString('en-EG', options) < currentTime.toLocaleTimeString('en-EG', options)) {
                        return { 'timeInvalid': true };
                    }
                }
            }
            return null;
        };
    };
    AddEditCampaignComponent.prototype.nonEmptyValidator = function () {
        return function (control) {
            if (control.value) {
                var str = control.value;
                if (str.trim() === '') {
                    return { 'required': true };
                }
                return null;
            }
        };
    };
    AddEditCampaignComponent.prototype.toggleIsOpenEnded = function () {
        if (this.campaignForm.get('isOpenEnded').value == true) {
            this.campaignForm.get('isOpenEnded').setValue(false);
        }
        else if (this.campaignForm.get('isOpenEnded').value == false) {
            this.campaignForm.get('isOpenEnded').setValue(true);
            this.campaignForm.get('endDate').setValue(null);
            this.campaignForm.get('endTime').setValue(null);
        }
    };
    AddEditCampaignComponent.prototype.greaterValidator = function (endControlName, startControlName) {
        return function (formGroup) {
            var control = formGroup.controls[endControlName];
            var matchingControl = formGroup.controls[startControlName];
            if (control.value !== null) {
                if (control.value <= matchingControl.value) {
                    control.setErrors({ mustBeAfter: true });
                }
                else {
                    var errors = control.errors;
                    if (errors && errors['mustBeAfter']) {
                        delete errors['mustBeAfter'];
                    }
                    if (errors && Object.keys(errors).length === 0) {
                        errors = null;
                    }
                    control.setErrors(errors);
                }
            }
            return;
        };
    };
    AddEditCampaignComponent.prototype.greaterTimeValidator = function (endControlName, startControlName) {
        return function (formGroup) {
            var control = formGroup.controls[endControlName];
            var matchingControl = formGroup.controls[startControlName];
            if (control.value && matchingControl.value) {
                var options = { hour12: false };
                var endControlDate = new Date(control.value);
                var startControlDate = new Date(matchingControl.value);
                if (endControlDate.toLocaleTimeString('en-EG', options) <= startControlDate.toLocaleTimeString('en-EG', options)) {
                    control.setErrors({ mustBeAfter: true });
                }
                else {
                    var errors = control.errors;
                    if (errors && errors['mustBeAfter']) {
                        delete errors['mustBeAfter'];
                    }
                    if (errors && Object.keys(errors).length === 0) {
                        errors = null;
                    }
                    control.setErrors(errors);
                }
            }
            return;
        };
    };
    // AppProfileTimeWindowValidator(endControlName: string, startControlName: string): ValidatorFn {
    //   return (formGroup: FormGroup): ValidationErrors => {
    //     // debugger;
    //     const endControl = formGroup.controls[endControlName];
    //     const startControl = formGroup.controls[startControlName];
    //     if (this.sendInSpecificTime && (endControl.value !== null || startControl.value !== null)) {
    //       const startD = new Date(startControl.value);
    //       const timeWindowS = new Date(this.entity.timeWindowStart);
    //       const endD = new Date(endControl.value);
    //       const timeWindowE = new Date(this.entity.timeWindowEnd);
    //       console.log("Entity => ",this.entity);
    //       // console.log(startD.toLocaleTimeString() < timeWindowS.toLocaleTimeString() + " / " + timeWindowS.getHours() + " /" +  timeWindowE.getHours())
    //       if (startD.toLocaleTimeString() < timeWindowS.toLocaleTimeString() || startD.toLocaleTimeString() > timeWindowE.toLocaleTimeString()) {
    //         console.log('startD:',startD.toLocaleTimeString());
    //         console.log('timeWindiwS:',timeWindowS.toLocaleTimeString());
    //         console.log('timeWindiwE:',this.entity.timeWindowEnd);
    //         startControl.setErrors({ mustBeAfterTimeWindowStart: true });
    //       } if (endD.toLocaleTimeString() < timeWindowS.toLocaleTimeString() || endD.toLocaleTimeString() > timeWindowE.toLocaleTimeString()) {
    //         console.log('startD:',endD.toLocaleTimeString());
    //         console.log('timeWindiwS:',timeWindowS.toLocaleTimeString());
    //         console.log('timeWindiwE:',this.entity.timeWindowEnd);
    //         endControl.setErrors({ mustBeAfterTimeWindowEnd: true });
    //       } else {
    //         console.log("Violated3");
    //         endControl.setErrors({ mustBeAfterTimeWindowEnd: false });
    //       }
    //     }else{
    //       startControl.setErrors(null);
    //       endControl.setErrors(null);
    //     }
    //     return;
    //   };
    // }
    AddEditCampaignComponent.prototype.AppProfileTimeWindowValidator = function (endControlName, startControlName) {
        var _this = this;
        return function (formGroup) {
            var endControl = formGroup.controls[endControlName];
            var startControl = formGroup.controls[startControlName];
            if (_this.sendInSpecificTime && _this.entity) {
                var options = { hour12: false };
                if (startControl.value && _this.entity.timeWindowStart) {
                    var startControlDate = new Date(startControl.value);
                    startControlDate.setSeconds(0, 0);
                    var appProfileTimeWindowStart = new Date(_this.entity.timeWindowStart);
                    console.log('startControlDate => ', startControlDate.toLocaleTimeString('en-EG', options));
                    console.log('appProfileTimeWindowStart => ', appProfileTimeWindowStart.toLocaleTimeString('en-EG', options));
                    console.log('startControlDate < appProfileTimeWindowStart => ', startControlDate.toLocaleTimeString('en-EG', options) < appProfileTimeWindowStart.toLocaleTimeString('en-EG', options));
                    if (startControlDate.toLocaleTimeString('en-EG', options) < appProfileTimeWindowStart.toLocaleTimeString('en-EG', options)) {
                        startControl.setErrors({ mustBeAfterTimeWindowStart: true });
                    }
                    else {
                        var errors = startControl.errors;
                        if (errors && errors['mustBeAfterTimeWindowStart']) {
                            delete errors['mustBeAfterTimeWindowStart'];
                        }
                        if (errors && Object.keys(errors).length === 0) {
                            errors = null;
                        }
                        startControl.setErrors(errors);
                    }
                }
                if (endControl.value && _this.entity.timeWindowEnd) {
                    var endControlDate = new Date(endControl.value);
                    var appProfileTimeWindowEnd = new Date(_this.entity.timeWindowEnd);
                    endControlDate.setSeconds(0, 0);
                    console.log('endControlDate => ', endControlDate.toLocaleTimeString('en-EG', options));
                    console.log('appProfileTimeWindowEnd => ', appProfileTimeWindowEnd.toLocaleTimeString('en-EG', options));
                    console.log('endControlDate > appProfileTimeWindowEnd => ', endControlDate.toLocaleTimeString('en-EG', options) > appProfileTimeWindowEnd.toLocaleTimeString('en-EG', options));
                    if (endControlDate.toLocaleTimeString('en-EG', options) > appProfileTimeWindowEnd.toLocaleTimeString('en-EG', options)) {
                        endControl.setErrors({ mustBeAfterTimeWindowEnd: true });
                    }
                    else {
                        var errors = endControl.errors;
                        if (errors && errors['mustBeAfterTimeWindowEnd']) {
                            delete errors['mustBeAfterTimeWindowEnd'];
                        }
                        if (errors && Object.keys(errors).length === 0) {
                            errors = null;
                        }
                        endControl.setErrors(errors);
                    }
                }
            }
            return;
        };
    };
    // specificTimeValidator(endControlName: string, startControlName: string): ValidatorFn {
    //   return (formGroup: FormGroup): ValidationErrors => {
    //     const control = formGroup.controls[endControlName];
    //     const matchingControl = formGroup.controls[startControlName];
    //     if (this.sendInSpecificTime) {
    //       if (control.value <= matchingControl.value) {
    //         control.setErrors({ mustBeAfter: true });
    //       } else {
    //         control.setErrors(null);
    //       }
    //     } else {
    //       control.setErrors(null);
    //     }
    //     return;
    //   };
    // }
    AddEditCampaignComponent.prototype.onSubmit = function () {
        var _this = this;
        this.campaignService.scrollIfFormHasErrors(this.campaignForm);
        for (var i in this.campaignForm.controls) {
            if (this.campaignForm.controls[i]) {
                this.campaignForm.controls[i].markAsTouched();
            }
        }
        console.log('OnSubmit', this.campaignForm);
        /*let tempDate = this.combineDateTime(this.campaignForm.controls['startDate'].value, this.startTime);
        this.campaignForm.controls['startDate'].setValue(tempDate);
        tempDate = this.combineDateTime(this.campaignForm.controls['endDate'].value, this.endTime);
        this.campaignForm.controls['endDate'].setValue(tempDate);*/
        if (this.campaignForm.get('groupId').value && !this.fileFlag) {
            var campaignGroup = this.groupsList.filter(function (x) {
                return x.groupId === _this.campaignForm.get('groupId').value;
            });
            this.placeholders = (campaignGroup && campaignGroup[0].parameters != null) ? campaignGroup[0].parameters : [];
        }
        if (this.fileType !== 1) {
            this.checkPlaceholdersExist(this.campaignForm.get('notificationText').value);
        }
        if (this.cf['paceType'].value !== '3') {
            this.cf['paceRate'].setValue(this.entity.maxThroughput);
        }
        if (!this.sendInSpecificTime) {
            this.campaignForm.get('sendStartTime').setErrors(null);
            this.campaignForm.get('sendEndTime').setErrors(null);
        }
        if (this.mode !== 1) {
            var campaignRequest_1 = new src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_10__["CampaignRequestModel"];
            campaignRequest_1.campaignModel = new src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__["CampaignModel"];
            campaignRequest_1.campaignModel = this.campaignForm.value;
            if (this.fileFlag) {
                // Make sure we got the latest filetype before submitting
                this.fileModel.fileType = this.fileType;
                campaignRequest_1.fileRequestModel = new src_app_shared_models_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"];
                campaignRequest_1.fileRequestModel = this.fileModel;
                this.campaignForm.patchValue({ groupId: null });
                this.campaignForm.get('groupId').clearValidators();
            }
            else {
                this.campaignForm.get('groupId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.groupDialsSizeValidator(this.groupsList)]);
            }
            // Stop if form is invalid
            if (this.campaignForm.invalid) {
                return;
            }
            if (this.fileFlag) {
                campaignRequest_1.campaignModel.dialsFormat = this.fileType;
            }
            else {
                campaignRequest_1.campaignModel.dialsFormat = this.groupsList.find(function (x) { return x.groupId === campaignRequest_1.campaignModel.groupId; }).fileType;
            }
            campaignRequest_1.campaignModel.deliveryReport = this.entity.deliveryReport;
            if (this.entity) {
                if (this.entity.remainingDailyQuota <= 0) {
                    this.messageService.addWarnings(['Daily Quota Limit Reached']);
                }
            }
            var arabic = /[\u0600-\u06FF]/;
            if (arabic.test(this.campaignForm.get('notificationText').value)) {
                campaignRequest_1.campaignModel.language = 'AR';
            }
            this.campaignService.create(campaignRequest_1).subscribe(function (response) {
                console.log('CreateCampaign ', response.responsePayload);
                if (response.status === 0) {
                    _this.navigateBack();
                }
            });
        }
        else {
            var campaignRequest = new src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_10__["CampaignRequestModel"];
            campaignRequest.campaignModel = new src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__["CampaignModel"];
            campaignRequest.campaignModel = this.campaignForm.value;
            // Stop if form is invalid
            if (this.fileFlag) {
                campaignRequest.fileRequestModel = new src_app_shared_models_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"];
                campaignRequest.fileRequestModel = this.fileModel;
                this.campaignForm.patchValue({ groupId: null });
                this.campaignForm.get('groupId').clearValidators();
            }
            else {
                this.campaignForm.get('groupId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.groupDialsSizeValidator(this.groupsList)]);
            }
            if (this.editAfterCampaignStart) {
                if (this.campaignForm.get('endDate').invalid || this.campaignForm.get('endTime').invalid
                    || this.campaignForm.get('name').invalid || (this.scheduleFlag && (this.campaignForm.get('sendStartTime').invalid
                    || this.campaignForm.get('sendEndTime').invalid)) || this.campaignForm.get('paceRate').invalid) {
                    return;
                }
            }
            else {
                if (this.campaignForm.invalid) {
                    return;
                }
            }
            this.campaignService.update(campaignRequest).subscribe(function (response) {
                console.log('Update Campaign ', response.responsePayload);
                _this.navigateBack();
            });
        }
    };
    AddEditCampaignComponent.prototype.now = function () {
        var d = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
        return d;
    };
    AddEditCampaignComponent.prototype.setScheduled = function (flag) {
        this.scheduleFlag = flag;
        if (flag) {
            this.setDateValidator();
        }
        else {
            this.campaignForm.patchValue({
                startDate: new Date()
            });
            this.clearDateValidator();
        }
    };
    AddEditCampaignComponent.prototype.setFileFlag = function (flag) {
        this.fileFlag = flag;
        if (flag === true) {
            this.campaignForm.patchValue({ 'groupId': null });
            this.campaignForm.get('groupId').clearValidators();
        }
        else {
            this.campaignForm.get('groupId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.groupDialsSizeValidator(this.groupsList)]);
        }
    };
    AddEditCampaignComponent.prototype.setSmsTemplateFlag = function (flag) {
        this.smsTemplateFlag = flag;
    };
    AddEditCampaignComponent.prototype.toggleCritical = function () {
        this.newCampaign.isCritical = !this.newCampaign.isCritical;
    };
    AddEditCampaignComponent.prototype.toggleSendInSpecificTime = function () {
        // this.sendInSpecificTime = !this.sendInSpecificTime;
        if (!this.sendInSpecificTime) {
            this.campaignForm.get('sendStartTime').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
            this.campaignForm.get('sendEndTime').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
        }
        else {
            console.log("errors reset");
            this.campaignForm.get('sendStartTime').reset();
            this.campaignForm.get('sendStartTime').setErrors(null);
            this.campaignForm.get('sendEndTime').reset();
            this.campaignForm.get('sendEndTime').setErrors(null);
        }
    };
    AddEditCampaignComponent.prototype.combineDateTime = function (date, time) {
        if (date && time) {
            date.setHours(time.getHours());
            date.setMinutes(time.getMinutes());
            return date;
        }
    };
    AddEditCampaignComponent.prototype.activeFileType = function (id) {
        this.fileType = id;
        this.fileUploaded = null;
    };
    AddEditCampaignComponent.prototype.clearUploadedFile = function () {
        this.placeholders = this.placeholders.filter(function (x) { true; });
        this.fileType = null;
        this.fileUploaded = null;
    };
    AddEditCampaignComponent.prototype.dropped = function (event) {
        var _this = this;
        this.fileUploaded = event.files[0];
        if (event.files.length === 1) {
            if (this.fileUploaded.fileEntry.isFile) {
                var fileEntry = this.fileUploaded.fileEntry;
                fileEntry.file(function (file) {
                    // Access the real file
                    _this.fileModel.fileName = file.name;
                    _this.fileModel.fileType = _this.fileType;
                    var reader = _this.createFileReader(file);
                    reader.readAsText(file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = this.fileUploaded.fileEntry;
                console.log(this.fileUploaded.relativePath, fileEntry);
            }
        }
        else if (this.files.length > 1) {
            this.messageService.addWarnings(['Please Choose One File Only!']);
        }
    };
    AddEditCampaignComponent.prototype.checkPlaceholdersExist = function (smsScript) {
        this.invalidPlaceholders = "[";
        var smsScriptPlaceholders = [];
        var remainingSmsScript = smsScript == null ? "" : smsScript;
        var placeholder;
        var hasErrors = false;
        while (placeholder = remainingSmsScript.match("\{[A-Za-z0-9]+\}")) {
            if (this.placeholders[placeholder]) {
                console.log(placeholder);
            }
            else {
                hasErrors = true;
                this.invalidPlaceholders = this.invalidPlaceholders + placeholder + " ";
            }
            remainingSmsScript = remainingSmsScript.replace(placeholder, "");
        }
        var errors = this.campaignForm.get('notificationText').errors;
        if (hasErrors) {
            if (errors) {
                errors['invalidPlaceholder'] = true;
            }
            else {
                errors = { invalidPlaceholder: true };
            }
        }
        else {
            if (errors && errors['invalidPlaceholder']) {
                delete errors['invalidPlaceholder'];
                if (Object.keys(errors).length === 0) {
                    errors = null;
                }
            }
        }
        this.campaignForm.get('notificationText').setErrors(errors);
        this.invalidPlaceholders = this.invalidPlaceholders.substr(0, this.invalidPlaceholders.length - 1) + "]";
    };
    AddEditCampaignComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    AddEditCampaignComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    AddEditCampaignComponent.prototype.createFileReader = function (file) {
        var _this = this;
        this.placeholders = this.placeholders.filter(function (x) { ; });
        var text;
        var reader = new FileReader();
        reader.onloadend = (function () {
            text = reader.result;
            var textString = text.toString();
            var line;
            if (text.toString().indexOf('\n') > 1) {
                line = textString.substr(0, text.toString().indexOf('\n') + 1);
            }
            else {
                line = textString + '\n';
            }
            if (textString.trim() === '') {
                _this.messageService.addWarnings(["File is empty!"]);
                _this.fileUploaded = null;
                return null;
            }
            else if (!_this.checkForFileType(line)) {
                _this.messageService.addWarnings(["Uploaded File doesn't match the selected type!"]);
                _this.fileUploaded = null;
                return null;
            }
            var params = line.substring(line.indexOf(',') + 1);
            do {
                _this.placeholders['{' + params.substring(0, params.indexOf('=')) + '}'] = true;
                params = params.substring((params.indexOf(',') > 0) ? params.indexOf(',') + 1 : params.indexOf('\n'));
            } while (params.indexOf('\n') > 0);
            //const base64String = btoa(text.toString());
            var base64String = js_base64__WEBPACK_IMPORTED_MODULE_18__["Base64"].encode(text.toString());
            _this.fileModel.b64String = base64String;
            _this.messageService.addInfo('File uploaded successfully!');
        });
        return reader;
    };
    AddEditCampaignComponent.prototype.retrieveGroups = function () {
        var _this = this;
        this.groupService.list().subscribe(function (response) {
            _this.groupsList = response.responsePayload;
            _this.campaignForm.get('groupId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _this.groupDialsSizeValidator(_this.groupsList)]);
            _this.campaignForm.get('groupId').setValue(_this.campaignForm.get('groupId').value);
            if (!_this.groupsList) {
                _this.fileFlag = true;
            }
        });
    };
    AddEditCampaignComponent.prototype.retrieveSmsTemplates = function () {
        var _this = this;
        this.smsTemplatesService.listSmsTemplates().subscribe(function (response) {
            _this.smsTemplatesList = response.responsePayload;
            if (!_this.smsTemplatesList) {
                _this.smsTemplatesList = null;
            }
        });
    };
    AddEditCampaignComponent.prototype.retrieveFakeSenders = function () {
        var _this = this;
        this.campaignService.listSenders().subscribe(function (response) { return _this.fakeSenders = response.responsePayload; });
    };
    AddEditCampaignComponent.prototype.retrieveEntity = function () {
        var _this = this;
        this.entityService.getEntity(this.user.entityId).subscribe(function (response) {
            _this.entity = new src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_12__["EntityModel"]();
            _this.entity = response.responsePayload;
            if (_this.entity.remainingDailyQuota <= 0) {
                _this.messageService.addWarnings(['Daily Quota Limit Reached']);
            }
            _this.campaignForm.get('paceRate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(_this.entity.maxThroughput)]);
            console.log(_this.entity);
        });
    };
    AddEditCampaignComponent.prototype.assignGroup = function (id) {
        this.newCampaign.groupId = id;
        console.log('groupId = ' + this.newCampaign.groupId);
    };
    AddEditCampaignComponent.prototype.assignSmsTemplate = function (text) {
        this.newCampaign.notificationText = text;
    };
    AddEditCampaignComponent.prototype.assignSenderName = function (text) {
        this.newCampaign.senderName = text;
    };
    AddEditCampaignComponent.prototype.toggleFakeSender = function () {
        this.canAddFakeSender = !this.canAddFakeSender;
    };
    AddEditCampaignComponent.prototype.navigateBack = function () {
        this.router.navigate(['campaigns']);
    };
    AddEditCampaignComponent.prototype.downloadSample = function () {
        console.log('downloading sample');
        var f;
        if (this.fileType === 0) {
            f = new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_14__["AngularCsv"](this.sample0, 'Sample', this.csvOptions);
        }
        else if (this.fileType === 1) {
            f = new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_14__["AngularCsv"](this.sample1, 'Sample', this.csvOptions);
        }
        else {
            f = new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_14__["AngularCsv"](this.sample2, 'Sample', this.csvOptions);
        }
    };
    AddEditCampaignComponent.prototype.checkForFileType = function (line) {
        console.log("line", line);
        console.log("selected file type", this.fileModel.fileType);
        var numberOfComma = line.split(",").length - 1;
        console.log("numberOfComma ", numberOfComma);
        if (this.fileModel.fileType === 0 && numberOfComma === 0) {
            return true;
        }
        else if (this.fileModel.fileType === 1 && numberOfComma === 1) {
            return true;
        }
        else if (this.fileModel.fileType === 2 && numberOfComma >= 2) {
            return true;
        }
        else {
            return false;
        }
    };
    AddEditCampaignComponent.prototype.groupDialsSizeValidator = function (groupsList) {
        return function (control) {
            if (control.value && groupsList) {
                var x = groupsList.findIndex(function (x) { return x.groupId === control.value; });
                if (groupsList[x] && groupsList[x].dialsCount < 1) {
                    return { 'zeroDials': true };
                }
            }
            return null;
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scheduleView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddEditCampaignComponent.prototype, "scheduleView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paceView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddEditCampaignComponent.prototype, "paceView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddEditCampaignComponent.prototype, "dialView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('smsView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddEditCampaignComponent.prototype, "smsView", void 0);
    AddEditCampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit-campaign',
            template: __webpack_require__(/*! ./add-edit-campaign.component.html */ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_15__["DialogService"]],
            styles: [__webpack_require__(/*! ./add-edit-campaign.component.css */ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_campaigns_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"], src_app_group_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            src_app_sms_templates_sms_templates_service__WEBPACK_IMPORTED_MODULE_5__["SmsTemplatesService"], src_app_entity_entity_service_service__WEBPACK_IMPORTED_MODULE_13__["EntityServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_7__["NdpMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_15__["DialogService"]])
    ], AddEditCampaignComponent);
    return AddEditCampaignComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaign-details/campaign-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/campaigns/campaign-details/campaign-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9jYW1wYWlnbi1kZXRhaWxzL2NhbXBhaWduLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/campaigns/campaign-details/campaign-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/campaigns/campaign-details/campaign-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"campaign-details\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"campaign.isInternal || campaign.isCritical\" class=\"col-12 text-left mb-4\">\r\n      <label *ngIf=\"campaign.isCritical\" class=\"form-input-label mr-2 indicator indicator-red\">CRITICAL</label>\r\n      <label *ngIf=\"campaign.isInternal\" class=\"form-input-label indicator indicator-green\">INTERNAL</label>\r\n    </div>\r\n    <div class=\"text-left mb-4\" [ngClass]=\"{'col-4': campaign.statusMessage, 'col-8': !campaign.statusMessage}\">\r\n      <label class=\"form-input-label\">STATUS</label>\r\n      <div class=\"title-gray-dark\"><b>{{getStatusText()}}</b></div>\r\n    </div>\r\n    <div *ngIf=\"campaign.statusMessage\" class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">STATUS MESSAGE</label>\r\n      <div class=\"title-gray-dark\"><b>{{campaign.statusMessage}}</b></div>\r\n    </div>\r\n    <div class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">ENTITY</label>\r\n      <div class=\"title-gray-dark\"><b>{{campaign.entityName}}</b></div>\r\n    </div>\r\n    <div class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">CAMPAIGN STARTS</label>\r\n      <div class=\"title-gray-dark\">{{campaign.startDate | date :  \"dd MMMM yyyy hh:mm aa\"}}</div>\r\n    </div>\r\n    <div class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">CAMPAIGN ENDS</label>\r\n      <div *ngIf=\"campaign.endDate\" class=\"title-gray-dark\">{{campaign.endDate | date :  \"dd MMMM yyyy hh:mm aa\"}}\r\n      </div>\r\n      <div *ngIf=\"!campaign.endDate\" class=\"title-gray-dark\">Not Specified</div>\r\n    </div>\r\n    <div class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">CAMPAIGN CREATION TIME</label>\r\n      <div class=\"title-gray-dark\">{{campaign.creationTime | date :  \"dd MMMM yyyy hh:mm aa\"}}</div>\r\n    </div>\r\n    <div *ngIf=\"campaign\" class=\"col-12 mb-4\">\r\n      <div class=\"row\">\r\n        <div *ngIf=\"campaign.createdByUsername\" class=\"col-4 text-left \">\r\n          <label class=\"form-input-label\">CREATED BY</label>\r\n          <div class=\"title-gray-dark\">{{campaign.createdByUsername}}</div>\r\n        </div>\r\n        <div *ngIf=\"campaign.dialsFormat\" class=\"col-4 text-left \">\r\n          <label class=\"form-input-label\">DIALS FORMAT</label>\r\n          <div class=\"title-gray-dark\">{{getDialsFormat()}}</div>\r\n        </div>\r\n        <div *ngIf=\"campaign.groupName\" class=\"col-4 text-left \">\r\n          <label class=\"form-input-label\">TARGET GROUP</label>\r\n          <div class=\"title-gray-dark\">{{campaign.groupName}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"campaign\" class=\"col-12 mb-4\">\r\n      <div class=\"row\">\r\n        <div *ngIf=\"campaign.lastModifiedByUsername\" class=\"col-4 text-left \">\r\n          <label class=\"form-input-label\">LAST MODIFIED BY</label>\r\n          <div class=\"title-gray-dark\">{{campaign.lastModifiedByUsername}}</div>\r\n        </div>\r\n        <div *ngIf=\"campaign.lastModificationDate\" class=\"col-4 text-left \">\r\n          <label class=\"form-input-label\">LAST MODIFICATION DATE</label>\r\n          <div class=\"title-gray-dark\">{{campaign.lastModificationDate | date :  \"dd MMMM yyyy hh:mm aa\"}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">FAKE SENDER NAME</label>\r\n      <div class=\"title-gray-dark\"><b>{{campaign.senderName}}</b></div>\r\n    </div>\r\n    <div class=\"col-12 text-left mb-4\">\r\n      <label class=\"form-input-label\">SMS SCRIPT</label>\r\n      <div class=\"title-gray-dark\"><b>{{campaign.notificationText}}</b></div>\r\n    </div>\r\n    <div *ngIf=\"campaign.sendStartTime\" class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">SMS SENDING STARTS AT</label>\r\n      <div class=\"title-gray-dark\">{{campaign.sendStartTime | date :  \"hh:mm aa\"}}</div>\r\n    </div>\r\n    <div *ngIf=\"campaign.sendEndTime\" class=\"col-4 text-left mb-4\">\r\n      <label class=\"form-input-label\">SMS SENDING ENDS AT</label>\r\n      <div class=\"title-gray-dark\">{{campaign.sendEndTime | date :  \"hh:mm aa\"}}</div>\r\n    </div>\r\n    <div class=\"col-3 text-left\">\r\n      <label class=\"form-input-label\">Sending Pace</label>\r\n      <div class=\"title-gray-dark\">{{getPaceText()}}</div>\r\n    </div>\r\n    <div *ngIf=\"campaignStats\" class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div *ngIf=\"user.requiresDelivery && campaignStats.sent\" class=\"col-2 text-left \">\r\n          <label class=\"form-input-label\">SENT SMS</label>\r\n          <div class=\"title-gray-dark\">{{campaignStats.sent}}</div>\r\n        </div>\r\n        <div *ngIf=\"user.requiresDelivery && campaignStats.delivered\" class=\"col-2 text-left \">\r\n          <label class=\"form-input-label\">DELIVERED SMS</label>\r\n          <div class=\"title-gray-dark\">{{campaignStats.delivered}}</div>\r\n        </div>\r\n        <div *ngIf=\"user.requiresDelivery && campaignStats.failed\" class=\"col-2 text-left \">\r\n          <label class=\"form-input-label\">FAILED SMS</label>\r\n          <div class=\"title-gray-dark\">{{campaignStats.failed}}</div>\r\n        </div>\r\n        <div *ngIf=\"campaignStats.totalCount\" class=\"col-2 text-left \">\r\n          <label class=\"form-input-label\">TOTAL SMS</label>\r\n          <div class=\"title-gray-dark\">{{campaignStats.totalCount}}</div>\r\n        </div>\r\n        <div *ngIf=\"user.requiresDelivery && campaignStats.rate\" class=\"col-2 text-left \">\r\n          <label class=\"form-input-label\">SMS RATE</label>\r\n          <div class=\"title-gray-dark\">{{campaignStats.rate}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div *ngIf=\"!campaignStats\" class=\"row\">\r\n    <div class=\"col-12 text-center p-4\">\r\n      LOADING CAMPAIGN DETAILS\r\n    </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/campaigns/campaign-details/campaign-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/campaigns/campaign-details/campaign-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CampaignDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignDetailsComponent", function() { return CampaignDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/campaign-model */ "./src/app/shared/models/campaign-model.ts");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../campaign.service */ "./src/app/campaigns/campaign.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CampaignDetailsComponent = /** @class */ (function () {
    function CampaignDetailsComponent(campaignService) {
        this.campaignService = campaignService;
    }
    CampaignDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel));
        this.refreshData();
        this.intervalId = setInterval(function () { _this.refreshData(); }, 60000);
    };
    CampaignDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    CampaignDetailsComponent.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.campaignService.getStats(this.campaign.campaignId).subscribe(function (template) {
                    _this.campaignStats = template.responsePayload;
                });
                return [2 /*return*/];
            });
        });
    };
    CampaignDetailsComponent.prototype.getStatus = function (campaign) {
        var startDate = new Date(campaign.startDate);
        var endDate = new Date(campaign.endDate);
        var currentDate = new Date();
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.PAUSED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.PENDING) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.PENDING;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.PROCESSING) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.PROCESSING_FILE;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.READY && currentDate < startDate) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.FAILED || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.SNAPSHOT_FAILED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.FAILED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.HANDLING || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.SMS_ENQUEUED
            || (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.READY && currentDate >= startDate)) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.SUCCESS) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.FINISHED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_STATUS.ALL_MESSAGES_FAILED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.ALL_MESSAGES_FAILED;
        }
    };
    Object.defineProperty(CampaignDetailsComponent.prototype, "displayStatus", {
        get: function () {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS;
        },
        enumerable: true,
        configurable: true
    });
    CampaignDetailsComponent.prototype.getPaceText = function () {
        switch (+this.campaign.paceType) {
            case 1:
                return 'Maximum Throughput';
            case 2:
                return 'Distributed';
            case 3:
                return this.campaign.paceRate + ' Message / Second';
        }
    };
    CampaignDetailsComponent.prototype.getStatusText = function () {
        switch (this.getStatus(this.campaign)) {
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED:
                return 'Paused';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.PENDING:
                return 'Pending';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.PROCESSING_FILE:
                return 'Processing File';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED:
                return 'Scheduled';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING:
                return 'Running';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.FINISHED:
                return 'Finished';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.FAILED:
                return 'Failed';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].CAMPAIGN_DISPLAY_STATUS.ALL_MESSAGES_FAILED:
                return 'Failed';
        }
    };
    CampaignDetailsComponent.prototype.getDialsFormat = function () {
        switch (this.campaign.dialsFormat) {
            case 0:
                return 'Dials only';
            case 1:
                return 'Dials with name';
            case 2:
                return 'Dials with many values';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__["CampaignModel"])
    ], CampaignDetailsComponent.prototype, "campaign", void 0);
    CampaignDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-campaign-details',
            template: __webpack_require__(/*! ./campaign-details.component.html */ "./src/app/campaigns/campaign-details/campaign-details.component.html"),
            styles: [__webpack_require__(/*! ./campaign-details.component.css */ "./src/app/campaigns/campaign-details/campaign-details.component.css")]
        }),
        __metadata("design:paramtypes", [_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]])
    ], CampaignDetailsComponent);
    return CampaignDetailsComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaign-list/campaign-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/campaigns/campaign-list/campaign-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-pagination {\r\n\ttext-align: center;\r\n}\r\n\r\n.campaigns-item-progress .hours-numbers {\r\n\tfont-family: \"robotomedium\";\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n}\r\n\r\n.campaigns-item-title .id {\r\n\tcolor: #464852;\r\n}\r\n\r\n.filter-menu{\r\n    position: absolute;\r\n    z-index: 100;\r\n\tbox-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\r\n\tright:0;\r\n}\r\n\r\n/*\r\nSMS Edit Delete\r\n\r\n.dropdown { \r\n    position: absolute;\r\n    top: -15px;\r\n    z-index: 500;\r\n    right: -30px;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.dropdown .field {\r\n\twidth:300px; background:#a3d94e; color:#fff; padding:5px; border:none; cursor:pointer;\r\n\tfont-family:'lucida sans unicode',sans-serif; font-size:1em;\r\n\tborder:solid 1px #a3d94e;\r\n\t-webkit-transition: all .4s ease-in-out;\r\n\ttransition: all .4s ease-in-out;\r\n}\r\n.dropdown .field:hover {\r\n\tborder:solid 1px #fff;\r\n\t-moz-box-shadow:0 0 5px #999; -webkit-box-shadow:0 0 5px #999; box-shadow:0 0 5px #999\r\n}\r\n.dropdown>ul.list {\r\n\tposition:relative; \r\n\tz-index:999;\r\n\twidth:100px;\r\n\tmargin:0; padding:10px; list-style:none;\r\n\tbackground:#fff; color:#333;\r\n\t-moz-border-radius:5px; -webkit-border-radius:5px; border-radius:5px;\r\n\t-moz-box-shadow:0 0 5px #999; -webkit-box-shadow:0 0 5px #999; box-shadow:0 0 5px #999\r\n}\r\n.dropdown>ul.list li {\r\n\tpadding:10px;\r\n}\r\n.dropdown>ul.list li:hover {\r\n\tbackground:#a3d94e; color:#fff;border-radius: 50px;\r\n\tcursor: pointer;\r\n}\r\n.dropdown>ul.list li:last-child { border:none }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWduLWxpc3QvY2FtcGFpZ24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtDQUNmLHlDQUF5QztDQUN6QyxPQUFPO0FBQ1I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQXNDZ0QiLCJmaWxlIjoic3JjL2FwcC9jYW1wYWlnbnMvY2FtcGFpZ24tbGlzdC9jYW1wYWlnbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LXBhZ2luYXRpb24ge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbXBhaWducy1pdGVtLXByb2dyZXNzIC5ob3Vycy1udW1iZXJzIHtcclxuXHRmb250LWZhbWlseTogXCJyb2JvdG9tZWRpdW1cIjtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FtcGFpZ25zLWl0ZW0tdGl0bGUgLmlkIHtcclxuXHRjb2xvcjogIzQ2NDg1MjtcclxufVxyXG5cclxuLmZpbHRlci1tZW51e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5cdGJveC1zaGFkb3c6IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cdHJpZ2h0OjA7XHJcbn1cclxuXHJcbi8qXHJcblNNUyBFZGl0IERlbGV0ZVxyXG5cclxuLmRyb3Bkb3duIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5kcm9wZG93biAuZmllbGQge1xyXG5cdHdpZHRoOjMwMHB4OyBiYWNrZ3JvdW5kOiNhM2Q5NGU7IGNvbG9yOiNmZmY7IHBhZGRpbmc6NXB4OyBib3JkZXI6bm9uZTsgY3Vyc29yOnBvaW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6J2x1Y2lkYSBzYW5zIHVuaWNvZGUnLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxZW07XHJcblx0Ym9yZGVyOnNvbGlkIDFweCAjYTNkOTRlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5kcm9wZG93biAuZmllbGQ6aG92ZXIge1xyXG5cdGJvcmRlcjpzb2xpZCAxcHggI2ZmZjtcclxuXHQtbW96LWJveC1zaGFkb3c6MCAwIDVweCAjOTk5OyAtd2Via2l0LWJveC1zaGFkb3c6MCAwIDVweCAjOTk5OyBib3gtc2hhZG93OjAgMCA1cHggIzk5OVxyXG59XHJcbi5kcm9wZG93bj51bC5saXN0IHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcblx0ei1pbmRleDo5OTk7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0bWFyZ2luOjA7IHBhZGRpbmc6MTBweDsgbGlzdC1zdHlsZTpub25lO1xyXG5cdGJhY2tncm91bmQ6I2ZmZjsgY29sb3I6IzMzMztcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6NXB4OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6NXB4OyBib3JkZXItcmFkaXVzOjVweDtcclxuXHQtbW96LWJveC1zaGFkb3c6MCAwIDVweCAjOTk5OyAtd2Via2l0LWJveC1zaGFkb3c6MCAwIDVweCAjOTk5OyBib3gtc2hhZG93OjAgMCA1cHggIzk5OVxyXG59XHJcbi5kcm9wZG93bj51bC5saXN0IGxpIHtcclxuXHRwYWRkaW5nOjEwcHg7XHJcbn1cclxuLmRyb3Bkb3duPnVsLmxpc3QgbGk6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6I2EzZDk0ZTsgY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24+dWwubGlzdCBsaTpsYXN0LWNoaWxkIHsgYm9yZGVyOm5vbmUgfSovIl19 */"

/***/ }),

/***/ "./src/app/campaigns/campaign-list/campaign-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/campaigns/campaign-list/campaign-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #cont class=\"page-content home\" *ngIf=\"campaignsList\">\r\n  <div class=\"campaigns\">\r\n    <div *ngIf=\"initialized\" class=\"row no-gutters mb-4\">\r\n      <div class=\"col-xl-6 col-lg-12 p-0 mb-5 mb-xl-0\">\r\n        <div class=\"campaigns-tabs\">\r\n          <span (click)=\"setFilterStatus(displayStatus.ALL)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.ALL, 'pointer': status !== displayStatus.ALL}\">All</span>\r\n          <span (click)=\"setFilterStatus(displayStatus.RUNNING)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.RUNNING, 'pointer': status !== displayStatus.RUNNING}\">Running</span>\r\n          <span (click)=\"setFilterStatus(displayStatus.SCHEDULED)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.SCHEDULED, 'pointer': status !== displayStatus.SCHEDULED}\">Scheduled</span>\r\n          <span (click)=\"setFilterStatus(displayStatus.PENDING)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.PENDING, 'pointer': status !== displayStatus.PENDING}\">Pending</span>\r\n          <span (click)=\"setFilterStatus(displayStatus.PAUSED)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.PAUSED, 'pointer': status !== displayStatus.PAUSED}\">Paused</span>\r\n          <span (click)=\"setFilterStatus(displayStatus.FINISHED)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.FINISHED, 'pointer': status !== displayStatus.FINISHED}\">Finished</span>\r\n          <span (click)=\"setFilterStatus(displayStatus.FAILED)\" class=\"campaigns-tabs-link\"\r\n            [ngClass]=\"{'active' : status === displayStatus.FAILED, 'pointer': status !== displayStatus.FAILED}\">Failed</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-12 text-right\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"search-input\">\r\n              <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search By Name / ID\">\r\n              <i class=\"icon-search icon\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <!--(clickOutside)=\"closeDateFilter()\"-->\r\n        <div class=\"campaigns-filter text-right\">\r\n          <button (click)=\"toggleDateFilter()\" class=\"campaigns-filter-title button button-grey\"\r\n            [ngClass]=\"{'button-green': dateFilterStart || dateFilterEnd}\">\r\n            <i class=\"fa fa-filter\" style=\"font-size: 12px;\"></i>\r\n            Filter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"dateFilter\" class=\"mt-0 mb-2\">\r\n      <div class=\"section filter-menu\">\r\n        <div class=\"row\">\r\n          <div class=\"row text-left\">\r\n            <div class=\"col-6 form-input form-selectbox\">\r\n              <label class=\"form-input-label\">Start Date</label>\r\n              <input class=\"input\" [owlDateTimeTrigger]=\"dt_start_date\" [owlDateTime]=\"dt_start_date\"\r\n                [(ngModel)]=\"dateFilterStart\" (change)=\"adjustDate(dateFilterStart,false)\" placeholder=\"\">\r\n              <owl-date-time [pickerType]=\"'calendar'\" [hour12Timer]=\"'true'\" #dt_start_date></owl-date-time>\r\n            </div>\r\n            <div class=\"col-6 form-input form-selectbox\">\r\n              <label class=\"form-input-label\">End Date</label>\r\n              <input class=\"input\" [owlDateTimeTrigger]=\"dt_end_date\" [owlDateTime]=\"dt_end_date\"\r\n                [(ngModel)]=\"dateFilterEnd\" (change)=\"adjustDate(dateFilterEnd,true)\" placeholder=\"\">\r\n              <owl-date-time [pickerType]=\"'calendar'\" [hour12Timer]=\"'true'\" #dt_end_date></owl-date-time>\r\n            </div>\r\n            <div class=\"col-12 form-input form-selectbox\">\r\n              <label class=\"form-input-label\">Entity</label>\r\n              <select class=\"selectbox\" [(ngModel)]=\"entityFilter\">\r\n                <option [ngValue]=\"null\">All</option>\r\n                <option *ngFor=\"let entity of entitiesList()\" value=\"{{entity}}\">{{entity}}</option>\r\n              </select>\r\n              <div class=\"form-selectbox-icon\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"campaignsList\" class=\"animated fadeIn faster\">\r\n      <div\r\n        *ngIf=\"setFilteredCampaignsList(campaignsList | statusfilter:status | campaignNameFilter:filter | entityFilter:entityFilter | dateFilter:dateFilterStart:dateFilterEnd)\">\r\n      </div>\r\n      <div class=\"campaigns-list\"\r\n        *ngFor=\"let campaign of filteredCampaignsList| orderBy: key : reverse : true | paginate: { itemsPerPage: perPage, currentPage: p }\">\r\n        <div class=\"row confirmDialog animated fadeIn faster text-center\"\r\n          *ngIf=\"deleteConfirm && (deleteConfirmId == campaign.campaignId)\">\r\n          <div class=\"col-12\">Are you sure you want to delete <b>{{campaign.name}}</b> campaign?</div>\r\n          <div class=\"col-12 mt-2\">\r\n            <button class=\"button button-green mr-4\" (click)=\"delete(campaign)\">DELETE</button>\r\n            <button class=\"button button-black \" (click)=\"hideConfirmDelete()\">CANCEL</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"dropDownId == campaign.campaignId\" [ngClass]=\"{'hide':!dropDown}\"\r\n          class=\"dropdown animated flipInX faster\" (clickOutside)=\"hideDropDown()\">\r\n          <ul class=\"list\">\r\n            <li *ngIf=\"getStatus(campaign) === displayStatus.PENDING\" ndpAuthorize\r\n              [targetUrl]=\"authorizationUrl+ defines.APPROVE\" [targetId]=\"campaign.campaignId\"\r\n              (successHandler)=\"approveCampaign(campaign)\"><span class=\"fas fa-check-square\"></span>Approve</li>\r\n\r\n            <li *ngIf=\"(getStatus(campaign) === displayStatus.RUNNING \r\n                        || getStatus(campaign) === displayStatus.SCHEDULED)\" ndpAuthorize\r\n            [targetUrl]=\"authorizationUrl+ defines.PAUSE\" [targetId]=\"campaign.campaignId\"\r\n            (successHandler)=\"toggleCampaignPause(campaign)\">\r\n              <span class=\"fas fa-pause\"></span>Pause</li>\r\n\r\n            <li *ngIf=\"getStatus(campaign) === displayStatus.PAUSED\" ndpAuthorize\r\n            [targetUrl]=\"authorizationUrl+ defines.PAUSE\" [targetId]=\"campaign.campaignId\"\r\n            (successHandler)=\"toggleCampaignPause(campaign)\"><span\r\n                class=\"fas fa-play\"></span>Resume</li>\r\n\r\n            <li *ngIf=\"getStatus(campaign) !== displayStatus.FINISHED\r\n                && getStatus(campaign) !== displayStatus.FAILED\" ndpAuthorize\r\n              [targetUrl]=\"authorizationUrl+ defines.UPDATE\" [targetId]=\"campaign.campaignId\"\r\n              (successHandler)=\"editButtonClick(campaign.campaignId)\"><span class=\"fas fa-edit\"></span>Edit</li>\r\n\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE\"\r\n            (successHandler)=\"cloneButtonClick(campaign.campaignId)\"><span class=\"fas fa-clone\"></span>Clone</li>\r\n            \r\n            <li *ngIf=\"getStatus(campaign) !== displayStatus.RUNNING\" ndpAuthorize\r\n              [targetUrl]=\"authorizationUrl+ defines.DELETE\" [targetId]=\"campaign.campaignId\"\r\n              (successHandler)=\"confirmDelete(campaign.campaignId)\"><span class=\"fas fa-trash\"></span>Delete</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"campaigns-item animated fadeIn faster\">\r\n          <div (click)=\"showDetails($event, campaign)\" (clickOutside)=\"hideDetails()\" class=\"row no-gutters \"\r\n            [ngClass]=\"{ 'blur': deleteConfirm && (deleteConfirmId == campaign.campaignId)}\">\r\n            <div class=\"campaigns-item-status col-lg-2 col-xl-auto\">\r\n              <span class=\"icon-container\">\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.PENDING\" pTooltip=\"Pending\" tooltipPosition=\"right\"\r\n                  class=\"fas fa-exclamation icon pending\"></i>\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.PROCESSING_FILE\" style=\"left:0 !important;\"\r\n                  pTooltip=\"Processing File\" tooltipPosition=\"right\" class=\"fas fa-file-alt icon running\"></i>\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.PAUSED\" pTooltip=\"Paused\" tooltipPosition=\"right\"\r\n                  class=\"fas fa-pause icon paused\"></i>\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.SCHEDULED\" pTooltip=\"Scheduled\" tooltipPosition=\"right\"\r\n                  class=\"far fa-clock icon scheduled\"></i>\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.RUNNING\" pTooltip=\"Running\" tooltipPosition=\"right\"\r\n                  class=\"fas fa-play icon running\"></i>\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.FAILED\" pTooltip=\"Failed\" tooltipPosition=\"right\"\r\n                  class=\"fas fa-times icon pending\"></i>\r\n                <i *ngIf=\"getStatus(campaign) === displayStatus.FINISHED\" pTooltip=\"Finished\" tooltipPosition=\"right\"\r\n                  class=\"fas fa-check icon done\"></i>\r\n              </span>\r\n            </div>\r\n            <div class=\"campaigns-item-title col-lg-10 col-xl-auto mb-lg-4 mb-xl-0\">\r\n              <span class=\"title\">\r\n                {{campaign.name}}\r\n              </span>\r\n              <span class=\"id\">ID <span class=\"id-value\">{{campaign.campaignId}}</span> </span>\r\n\r\n              <span class=\"priority\">Priority<span class=\"priority-value\"\r\n                  [ngClass]=\"{'normal':campaign.priority == 1, 'medium':campaign.priority == 2, 'high':campaign.priority == 3}\">\r\n                  {{priorities[(campaign.priority)-1]}}</span></span>\r\n\r\n            </div>\r\n            <div class=\"campaigns-item-sender\">\r\n              <div class=\"property\">\r\n                Fake Sender\r\n              </div>\r\n              <div *ngIf=\"campaign.senderName !== null\" class=\"value\">\r\n                {{campaign.senderName}}\r\n              </div>\r\n              <div *ngIf=\"campaign.senderName === null\" class=\"value\">\r\n                <b style=\"color: #cc0000;\">UNASSIGNED</b>\r\n              </div>\r\n            </div>\r\n            <div class=\"campaigns-item-start\">\r\n              <div *ngIf=\"campaign.startDate !== null\" class=\"property\">\r\n                Start Date\r\n              </div>\r\n              <div class=\"value\">\r\n                {{campaign.startDate | date :  \"dd MMM yyyy\"}}\r\n              </div>\r\n            </div>\r\n            <div class=\"campaigns-item-end\">\r\n              <div *ngIf=\"campaign.endDate !== null\" class=\"property\">\r\n                End Date\r\n              </div>\r\n              <div class=\"value\">\r\n                {{campaign.endDate | date :  \"dd MMM yyyy\"}}\r\n              </div>\r\n            </div>\r\n            <div class=\"campaigns-item-progress my-auto\">\r\n              <ndp-campaign-progress [campaign]=\"campaign\"></ndp-campaign-progress>\r\n            </div>\r\n            <div class=\"campaigns-item-actions\">\r\n              <a (click)=\"showDropDown($event, campaign.campaignId)\" class=\"campaigns-item-actions-link\">\r\n                <i class=\"icon-dropdown-dots icon\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!-- CAMPAIGN DETAILS COMPONENT-->\r\n          <div *ngIf=\"detailedCampaignId === campaign.campaignId\" class=\"row mt-4\">\r\n            <div class=\"col-12\">\r\n              <ndp-campaign-details [campaign]=\"campaign\"></ndp-campaign-details>\r\n            </div>\r\n          </div>\r\n          <!-- END OF CAMPAIGN DETAILS COMPONENT-->\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"filteredCampaignsList.length === 0 && initialized\">\r\n        <div class=\"row mt-4 animated fadeIn fast\">\r\n          <div class=\"col-12 mt-4 text-center\">\r\n            <!-- <div class=\"col-12 mt-4 fas fa-frown fa-7x faded-grey\"></div> -->\r\n            <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Campaigns Found</b></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"filteredCampaignsList.length === 0 && !initialized\">\r\n        <div class=\"row mt-4 animated fadeIn fast\" style=\"height:100%;\">\r\n          <div class=\"col-12 mt-4 text-center\">\r\n            <!-- <div class=\"col-12 mt-4 fas fa-spinner fa-7x faded-grey\"></div> -->\r\n            <div class=\"col-12 mt-4 page-title faded-grey\"><b>Retrieving Campaigns</b></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ngx-pagination\">\r\n      <div class=\"form-input form-input-select form-selectbox itemsNum animate fadeInUp\">\r\n        <label class=\"form-input-label\">Item/Page</label>\r\n        <select [(ngModel)]=\"perPage\" (change)=\"resetPagination()\" class=\"paginSelect\">\r\n          <option>2</option>\r\n          <option>5</option>\r\n          <option>10</option>\r\n          <option>20</option>\r\n          <option>50</option>\r\n        </select>\r\n      </div>\r\n      <div *ngIf=\"campaignsList\" style=\"margin-left: 170px;\">\r\n        <pagination-controls *ngIf=\"perPage < campaignsList.length\" class=\"animate fadeInUp\" (pageChange)=\"p = $event\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/campaigns/campaign-list/campaign-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/campaigns/campaign-list/campaign-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CampaignListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignListComponent", function() { return CampaignListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../campaign.service */ "./src/app/campaigns/campaign.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/campaign-request-model */ "./src/app/shared/models/campaign-request-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CampaignListComponent = /** @class */ (function () {
    function CampaignListComponent(campaignService, router) {
        this.campaignService = campaignService;
        this.router = router;
        this.priorities = ['High', 'Medium', 'Low'];
        /*=============================*/
        /* Pagination Filtering & Sorting*/
        this.p = 1;
        this.perPage = 10;
        /*SORTING*/
        this.key = 'startDate';
        this.reverse = true;
        /*=============================*/
        this.deleteConfirm = false;
        this.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.ALL;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_CRUD;
        this.listAccessLevel = 0;
        this.editAccessLevel = 0;
        this.deleteAccessLevel = 0;
        this.canApproveflag = false;
        this.contextMenu = false;
        this.justOpened = false;
        this.progress = 30;
    }
    CampaignListComponent.prototype.setAccessLevel = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SESSION_KEYS.userModel));
        if (this.user.privilegeList) {
            this.user.privilegeList.forEach(function (rolePrivilege) {
                switch (rolePrivilege.privilegeId) {
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].PRIVILEGES.CAMPAIGN.EDIT: {
                        _this.editAccessLevel = rolePrivilege.accessLevel;
                        break;
                    }
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].PRIVILEGES.CAMPAIGN.LIST: {
                        _this.listAccessLevel = rolePrivilege.accessLevel;
                        break;
                    }
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].PRIVILEGES.CAMPAIGN.DELETE: {
                        _this.deleteAccessLevel = rolePrivilege.accessLevel;
                        break;
                    }
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].PRIVILEGES.CAMPAIGN.CREATE: {
                        _this.canCreate = true;
                        break;
                    }
                    case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].PRIVILEGES.CAMPAIGN.approve: {
                        _this.canApproveflag = true;
                        break;
                    }
                }
            });
        }
    };
    CampaignListComponent.prototype.setFilterStatus = function (s) {
        this.status = s;
    };
    CampaignListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CampaignListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialized = false;
        this.campaignsList = new Array();
        this.refreshData();
        this.intervalId = setInterval(function () { _this.refreshData(); }, 30000);
        this.filteredCampaignsList = this.campaignsList;
        this.authorizationUrl = this.campaignService.authorizationUrl;
    };
    CampaignListComponent.prototype.getAllEntities = function () {
        var _this = this;
        if (this.campaignsList) {
            console.log('list size', this.campaignsList.length);
            this.entitiesMap = new Map();
            this.campaignsList.forEach(function (camp) {
                _this.entitiesMap.set(camp.entityName, camp.entityName);
            });
            console.log('entities', this.entitiesMap.keys());
        }
    };
    CampaignListComponent.prototype.entitiesList = function () {
        return Array.from(this.entitiesMap.keys());
    };
    CampaignListComponent.prototype.canApprove = function () {
        return !this.user.needsApproval;
    };
    CampaignListComponent.prototype.ngOnDestroy = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    CampaignListComponent.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.campaignService.list().subscribe(function (templates) {
                    _this.campaignsList = templates.responsePayload;
                    _this.initialized = true;
                    _this.getAllEntities();
                    _this.setAccessLevel();
                    _this.setAccessLevels(_this.campaignsList);
                });
                return [2 /*return*/];
            });
        });
    };
    CampaignListComponent.prototype.setAccessLevels = function (campList) {
        var _this = this;
        if (campList) {
            campList.forEach(function (model) {
                if (model.createdBy === _this.user.id) {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.OWN) {
                        model.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.OWN) {
                        model.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.OWN) {
                        model.canView = true;
                    }
                }
                else if (model.entityId === _this.user.entityId) {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.ENTITY) {
                        model.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.ENTITY) {
                        model.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.ENTITY) {
                        model.canView = true;
                    }
                }
                else {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        model.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        model.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        model.canView = true;
                    }
                }
            });
        }
    };
    CampaignListComponent.prototype.resetPagination = function () {
        if (this.p > 1) {
            this.p = 1;
        }
    };
    CampaignListComponent.prototype.showDropDown = function (event, campaign) {
        this.dropDown = true;
        this.dropDownId = campaign;
        event.stopPropagation();
    };
    CampaignListComponent.prototype.hideDropDown = function () {
        this.dropDown = false;
        this.dropDownId = null;
        event.stopPropagation();
    };
    CampaignListComponent.prototype.showDetails = function (event, campaign) {
        debugger;
        if (this.dropDown !== false) {
            this.dropDown = false;
        }
        if (this.detailedCampaignId !== campaign.campaignId) {
            this.detailedCampaign = campaign;
            this.detailedCampaignId = campaign.campaignId;
        }
        else {
            this.hideDetails();
        }
        event.stopPropagation();
    };
    CampaignListComponent.prototype.hideDetails = function () {
        this.detailedCampaign = null;
        this.detailedCampaignId = null;
        event.stopPropagation();
    };
    CampaignListComponent.prototype.editButtonClick = function (campaignId) {
        this.router.navigate(['campaigns/edit', campaignId]);
    };
    CampaignListComponent.prototype.cloneButtonClick = function (campaignId) {
        this.router.navigate(['campaigns/clone', campaignId]);
    };
    CampaignListComponent.prototype.confirmDelete = function (id) {
        this.deleteConfirm = true;
        this.deleteConfirmId = id;
    };
    CampaignListComponent.prototype.hideConfirmDelete = function () {
        this.deleteConfirm = false;
        this.deleteConfirmId = null;
    };
    CampaignListComponent.prototype.delete = function (campaign) {
        var _this = this;
        var campaignRequest = new src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_4__["CampaignRequestModel"]();
        campaignRequest.campaignModel = campaign;
        this.deleteConfirm = false;
        this.campaignService.delete(campaignRequest).subscribe(function (template) {
            if (template.errors.length === 0) {
                _this.campaignsList = _this.campaignsList.filter(function (x) { return x.campaignId !== campaign.campaignId; });
                _this.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.ALL;
            }
        });
    };
    CampaignListComponent.prototype.getDuration = function (campaign) {
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PENDING) {
            return 'Pending';
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED) {
            return 'Paused';
        }
        var date1 = new Date();
        // const date2 = new Date(campaign.endDate);
        var date2 = new Date(campaign.startDate);
        if (date1 < date2) {
            var diffInMs = date2.getTime() - +date1.getTime();
            var diffInDays = diffInMs / 1000 / 60 / 60 / 24;
            var diffInHours = (diffInDays - Math.trunc(diffInDays)) * 24;
            var remainingMinutes = (diffInHours - Math.trunc(diffInHours)) * 60;
            return Math.trunc(diffInDays) + ' : ' + Math.trunc(diffInHours) + ' : ' + Math.round(remainingMinutes);
        }
    };
    CampaignListComponent.prototype.getStatus = function (campaign) {
        var startDate = new Date(campaign.startDate);
        var endDate = new Date(campaign.endDate);
        var currentDate = new Date();
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PENDING) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PENDING;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PROCESSING) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PROCESSING_FILE;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY && currentDate < startDate) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.FAILED || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SNAPSHOT_FAILED || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.ALL_MESSAGES_FAILED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.FAILED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.HANDLING || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SMS_ENQUEUED
            || (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY && currentDate >= startDate)) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SUCCESS) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.FINISHED;
        }
    };
    Object.defineProperty(CampaignListComponent.prototype, "displayStatus", {
        get: function () {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS;
        },
        enumerable: true,
        configurable: true
    });
    CampaignListComponent.prototype.toggleCampaignPause = function (campaign) {
        var s = this.getStatus(campaign);
        var campaignRequest = new src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_4__["CampaignRequestModel"]();
        campaignRequest.campaignModel = campaign;
        if (s === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING || s === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED) {
            campaignRequest.campaignModel.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED;
            this.campaignService.pause(campaignRequest).subscribe(function (template) {
                console.log('Pausing  ==> ', template.responsePayload);
                if (template.status === 200) {
                    campaign.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED;
                }
            });
        }
        else if (s === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED) {
            campaignRequest.campaignModel.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY;
            this.campaignService.pause(campaignRequest).subscribe(function (template) {
                console.log('Unpausing  ==> ', template.responsePayload);
                if (template.status === 200) {
                    campaign.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY;
                }
            });
        }
    };
    CampaignListComponent.prototype.approveCampaign = function (campaign) {
        campaign.status = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.APPROVED;
        var campaignRequest = new src_app_shared_models_campaign_request_model__WEBPACK_IMPORTED_MODULE_4__["CampaignRequestModel"]();
        campaignRequest.campaignModel = campaign;
        this.campaignService.approve(campaignRequest).subscribe(function (template) {
            console.log('Approve Campaign ', template.responsePayload);
        });
    };
    CampaignListComponent.prototype.setFilteredCampaignsList = function (filtered) {
        this.filteredCampaignsList = filtered;
    };
    CampaignListComponent.prototype.toggleDateFilter = function () {
        if (this.dateFilter) {
            this.dateFilter = !this.dateFilter;
        }
        else {
            this.dateFilter = true;
        }
    };
    CampaignListComponent.prototype.closeDateFilter = function (e) {
        if (this.dateFilter === true) {
            this.dateFilter = false;
            e.stopPropagation();
        }
    };
    CampaignListComponent.prototype.adjustDate = function (d, type) {
        if (d) {
            if (!type) {
                d.setHours(0);
                d.setMinutes(0);
                d.setSeconds(0);
            }
            else {
                d.setHours(23);
                d.setMinutes(59);
                d.setSeconds(59);
            }
        }
    };
    CampaignListComponent.prototype.getStatusText = function (campaign) {
        switch (this.getStatus(campaign)) {
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED:
                return 'Paused';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PENDING:
                return 'Pending';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PROCESSING_FILE:
                return 'Processing File';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED:
                return 'Scheduled';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING:
                return 'Running';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.FINISHED:
                return 'Finished';
            case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.FAILED:
                return 'Failed';
        }
    };
    CampaignListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-campaign-list',
            template: __webpack_require__(/*! ./campaign-list.component.html */ "./src/app/campaigns/campaign-list/campaign-list.component.html"),
            styles: [__webpack_require__(/*! ./campaign-list.component.css */ "./src/app/campaigns/campaign-list/campaign-list.component.css")]
        }),
        __metadata("design:paramtypes", [_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CampaignListComponent);
    return CampaignListComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaign-progress/campaign-progress.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/campaigns/campaign-progress/campaign-progress.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9jYW1wYWlnbi1wcm9ncmVzcy9jYW1wYWlnbi1wcm9ncmVzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/campaigns/campaign-progress/campaign-progress.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/campaigns/campaign-progress/campaign-progress.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  *ngIf=\"campaignStats && (getStatus(campaign) === displayStatus.RUNNING || getStatus(campaign) === displayStatus.PAUSED)\"\r\n  class=\"row no-gutters my-auto pl-0\">\r\n  <div class=\"col-9\">\r\n    <p-progressBar [showValue]=\"false\" [value]=\"getPercentage()\" [style]=\"{height:'20px', color:'#fff'}\">\r\n    </p-progressBar>\r\n  </div>\r\n  <div class=\"col-2 ml-2 my-auto\" style=\"font-size:12px;\"><b>{{getPercentage()}}%</b></div>\r\n</div>\r\n<div\r\n  *ngIf=\"!campaignStats && (getStatus(campaign) === displayStatus.RUNNING)\"\r\n  class=\"row no-gutters my-auto pl-0\">\r\n  <div class=\"col-9\">\r\n    <div class=\"caption-text\">\r\n      <div class=\"hours-numbers\">\r\n        In Progress\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"!campaignStats &&  (getStatus(campaign) === displayStatus.PAUSED)\"\r\n  class=\"row no-gutters my-auto pl-0\">\r\n  <div class=\"col-9\">\r\n    <div class=\"caption-text\">\r\n      <div class=\"hours-numbers\">\r\n        Paused\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"getStatus(campaign) === displayStatus.FINISHED && campaignStats && !campaign.isOpenEnded\" class=\"row no-gutters my-auto pl-0\">\r\n  <div class=\"col-9\">\r\n    <p-progressBar [showValue]=\"false\" [value]=\"getPercentage()\" [style]=\"{height:'20px', color:'#fff'}\">\r\n    </p-progressBar>\r\n  </div>\r\n  <div class=\"col-2 ml-2 my-auto\" style=\"font-size:12px;\"><b>{{getPercentage()}}%</b></div>\r\n</div>\r\n<div *ngIf=\"getStatus(campaign) === displayStatus.SCHEDULED\" class=\"caption\">\r\n  <div class=\"caption-media caption-media-gutter\">\r\n    <i class=\"icon-time icon icon-gray icon-meduim\"></i>\r\n  </div>\r\n  <div class=\"caption-text\">\r\n    <div class=\"hours-numbers\">\r\n      {{getDuration(campaign)}}\r\n    </div>\r\n    <div *ngIf=\"getStatus(campaign) === displayStatus.SCHEDULED && !daysflag\" class=\"hours-text\">\r\n      <span class=\"pr-3\">HOUR</span>\r\n      <span class=\"pr-4\">MIN</span>\r\n      <span class=\"\">SEC</span>\r\n    </div>\r\n    <div *ngIf=\"campaign.status === displayStatus.PENDING\" class=\"hours-text\">\r\n      <span class=\"pl-2\">Needs Approval</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/campaigns/campaign-progress/campaign-progress.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/campaigns/campaign-progress/campaign-progress.component.ts ***!
  \****************************************************************************/
/*! exports provided: CampaignProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignProgressComponent", function() { return CampaignProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/campaign-model */ "./src/app/shared/models/campaign-model.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaign.service */ "./src/app/campaigns/campaign.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CampaignProgressComponent = /** @class */ (function () {
    function CampaignProgressComponent(campaignService) {
        this.campaignService = campaignService;
        this.daysflag = true;
    }
    CampaignProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.refreshData();
        this.intervalId = setInterval(function () { _this.getDuration(_this.campaign); }, 1000);
        this.refreshData();
        this.statsInterval = setInterval(function () { _this.refreshData(); }, 60000);
    };
    CampaignProgressComponent.prototype.ngOnDestroy = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        if (this.statsInterval) {
            clearInterval(this.statsInterval);
        }
    };
    CampaignProgressComponent.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.getStatus(this.campaign) === this.displayStatus.RUNNING || this.displayStatus.FINISHED || this.displayStatus.PAUSED) {
                    this.campaignService.getStats(this.campaign.campaignId).subscribe(function (template) {
                        _this.campaignStats = template.responsePayload;
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    CampaignProgressComponent.prototype.getStatus = function (campaign) {
        var startDate = new Date(campaign.startDate);
        var endDate = new Date(campaign.endDate);
        var currentDate = new Date();
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PENDING) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PENDING;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PROCESSING) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.PROCESSING_FILE;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY && currentDate < startDate) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.FAILED || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SNAPSHOT_FAILED) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.FAILED;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.HANDLING || campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SMS_ENQUEUED
            || (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY && currentDate >= startDate)) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING;
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SUCCESS) {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS.FINISHED;
        }
    };
    Object.defineProperty(CampaignProgressComponent.prototype, "displayStatus", {
        get: function () {
            return src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_DISPLAY_STATUS;
        },
        enumerable: true,
        configurable: true
    });
    CampaignProgressComponent.prototype.getDuration = function (campaign) {
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PENDING) {
            return 'Pending';
        }
        if (campaign.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED) {
            return 'Paused';
        }
        var date1 = new Date();
        // const date2 = new Date(campaign.endDate);
        var date2 = new Date(campaign.startDate);
        if (date1 < date2) {
            var diffInMs = date2.getTime() - +date1.getTime();
            var diffInDays = diffInMs / 1000 / 60 / 60 / 24;
            var diffInHours = (diffInDays - Math.trunc(diffInDays)) * 24;
            if (Math.trunc(diffInDays) > 0) {
                this.daysflag = true;
                return 'In ' + Math.trunc(diffInDays) + ' Days';
            }
            this.daysflag = false;
            var remainingHours = (Math.floor((diffInMs / 1000) / 60 / 60)) % 24;
            var remainingMinutes = (Math.floor((diffInMs / 1000) / 60)) % 60;
            var remainingSeconds = (diffInMs / 1000) % 60;
            return (((Math.trunc(remainingHours) < 10) ? ('0' + Math.trunc(remainingHours)) : (Math.trunc(remainingHours))) + '    :    '
                + ((Math.trunc(remainingMinutes) < 10) ? ('0' + Math.trunc(remainingMinutes)) : (Math.trunc(remainingMinutes))) + '    :    '
                + ((Math.trunc(remainingSeconds) < 10) ? ('0' + Math.trunc(remainingSeconds)) : (Math.trunc(remainingSeconds))));
        }
    };
    CampaignProgressComponent.prototype.getProgress = function () {
        if (this.campaignStats) {
            return (this.campaignStats.sent + this.campaignStats.delivered) >= 0 ? (this.campaignStats.sent + this.campaignStats.delivered) : 0;
        }
    };
    CampaignProgressComponent.prototype.getTotal = function () {
        if (this.campaignStats) {
            return this.campaignStats.totalCount > 0 ? this.campaignStats.totalCount : 1;
        }
    };
    CampaignProgressComponent.prototype.getPercentage = function () {
        /*const d = new Date();
        if (this.campaign.endDate && d <= this.campaign.endDate && d >= this.campaign.startDate) {
          return Math.round((+d.getTime() - (+this.campaign.startDate)) / (+this.campaign.endDate - (+this.campaign.startDate)) * 100);
        } else {
          return 0;
        }*/
        if (this.campaignStats) {
            return Math.round((this.getProgress() / this.getTotal()) * 100);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_models_campaign_model__WEBPACK_IMPORTED_MODULE_1__["CampaignModel"])
    ], CampaignProgressComponent.prototype, "campaign", void 0);
    CampaignProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-campaign-progress',
            template: __webpack_require__(/*! ./campaign-progress.component.html */ "./src/app/campaigns/campaign-progress/campaign-progress.component.html"),
            styles: [__webpack_require__(/*! ./campaign-progress.component.css */ "./src/app/campaigns/campaign-progress/campaign-progress.component.css")]
        }),
        __metadata("design:paramtypes", [_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"]])
    ], CampaignProgressComponent);
    return CampaignProgressComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaign-stats/campaign-stats.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/campaigns/campaign-stats/campaign-stats.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9jYW1wYWlnbi1zdGF0cy9jYW1wYWlnbi1zdGF0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/campaigns/campaign-stats/campaign-stats.component.html":
/*!************************************************************************!*\
  !*** ./src/app/campaigns/campaign-stats/campaign-stats.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters mb-4\">\r\n  <div class=\"col-4 mb-2\">\r\n    <div class=\"col-12 campaigns-stats animated fadeIn faster\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-2 ml-1 campaigns-stats-status\">\r\n          <span class=\" icon-container blue\">\r\n            <i class=\"fas fa-play icon running\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-8 ml-2 my-auto\">\r\n          <span>Running</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div *ngIf=\"countsMap !== null\" class=\"col-12 p-2\" style=\"font-size: 40px; font-weight: 600;\">{{getRunning()}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4 pl-2 mb-2\">\r\n    <div class=\"col-12 campaigns-stats animated fadeIn faster\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-2 ml-1 campaigns-stats-status\">\r\n          <span class=\" icon-container red\">\r\n            <i class=\"fas fa-pause icon paused\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-8 ml-2 my-auto\">\r\n          <span>Paused</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 text-center\">\r\n        <div *ngIf=\"countsMap !== null\" class=\"col-12 p-2\" style=\"font-size: 40px; font-weight: 600;\">{{getPaused()}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4 pl-2 mb-2\">\r\n    <div class=\"col-12 campaigns-stats animated fadeIn faster\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-2 ml-1 campaigns-stats-status\">\r\n          <span class=\" icon-container green\">\r\n            <i class=\"fas fa-check icon done\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-8 ml-2 my-auto\">\r\n          <span>Finished</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div *ngIf=\"countsMap !== null\" class=\"col-12 p-2\" style=\"font-size: 40px; font-weight: 600;\">{{getDone()}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4 mb-2\">\r\n    <div class=\"col-12 campaigns-stats animated fadeIn faster\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-2 ml-1 campaigns-stats-status\">\r\n          <span class=\"icon-container yellow\">\r\n            <i class=\"far fa-clock icon scheduled\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-8 ml-2 my-auto\">\r\n          <span>Scheduled</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div *ngIf=\"countsMap !== null\" class=\"col-12 p-2\" style=\"font-size: 40px; font-weight: 600;\">{{getScheduled()}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4 pl-2 mb-2\">\r\n    <div class=\"col-12 campaigns-stats animated fadeIn faster\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-2 ml-1 campaigns-stats-status\">\r\n          <span class=\" icon-container darkred\">\r\n            <i class=\"fas fa-exclamation icon pending\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-8 ml-2 my-auto\">\r\n          <span>Pending</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 text-center\">\r\n        <div *ngIf=\"countsMap !== null\" class=\"col-12 p-2\" style=\"font-size: 40px; font-weight: 600;\">{{getPending()}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4 pl-2 mb-2\">\r\n    <div class=\"col-12 campaigns-stats animated fadeIn faster\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-2 ml-1 campaigns-stats-status\">\r\n          <span class=\" icon-container darkred\">\r\n            <i class=\"fas fa-times icon pending\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-8 ml-2 my-auto\">\r\n          <span>Failed</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 text-center\">\r\n        <div *ngIf=\"countsMap !== null\" class=\"col-12 p-2\" style=\"font-size: 40px; font-weight: 600;\">{{getFailed()}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/campaigns/campaign-stats/campaign-stats.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/campaigns/campaign-stats/campaign-stats.component.ts ***!
  \**********************************************************************/
/*! exports provided: CampaignStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignStatsComponent", function() { return CampaignStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../campaign.service */ "./src/app/campaigns/campaign.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CampaignStatsComponent = /** @class */ (function () {
    function CampaignStatsComponent(campaignService) {
        this.campaignService = campaignService;
    }
    CampaignStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refreshInterval == null) {
            this.refreshInterval = 15000;
        }
        this.refreshData();
        this.intervalId = setInterval(function () { _this.refreshData(); }, this.refreshInterval);
    };
    CampaignStatsComponent.prototype.ngOnDestroy = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    CampaignStatsComponent.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.subscription = this.campaignService.getCounts().subscribe(function (response) {
                    _this.countsMap = response.responsePayload;
                });
                return [2 /*return*/];
            });
        });
    };
    CampaignStatsComponent.prototype.getRunning = function () {
        if (this.countsMap) {
            var handling = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.HANDLING];
            var enqueued = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SMS_ENQUEUED];
            return (handling ? handling : 0) + (enqueued ? enqueued : 0);
        }
    };
    CampaignStatsComponent.prototype.getPending = function () {
        if (this.countsMap) {
            var pending = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PENDING];
            return (pending ? pending : 0);
        }
    };
    CampaignStatsComponent.prototype.getDone = function () {
        if (this.countsMap) {
            var success = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.SUCCESS];
            return (success ? success : 0);
        }
    };
    CampaignStatsComponent.prototype.getScheduled = function () {
        if (this.countsMap) {
            var ready = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.READY];
            return (ready ? ready : 0);
        }
    };
    CampaignStatsComponent.prototype.getPaused = function () {
        if (this.countsMap) {
            var paused = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.PAUSED];
            return (paused ? paused : 0);
        }
    };
    CampaignStatsComponent.prototype.getFailed = function () {
        if (this.countsMap) {
            var failed = this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.FAILED] + this.countsMap[src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].CAMPAIGN_STATUS.ALL_MESSAGES_FAILED];
            return (failed ? failed : 0);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CampaignStatsComponent.prototype, "refreshInterval", void 0);
    CampaignStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-campaign-stats',
            template: __webpack_require__(/*! ./campaign-stats.component.html */ "./src/app/campaigns/campaign-stats/campaign-stats.component.html"),
            styles: [__webpack_require__(/*! ./campaign-stats.component.css */ "./src/app/campaigns/campaign-stats/campaign-stats.component.css")]
        }),
        __metadata("design:paramtypes", [_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"]])
    ], CampaignStatsComponent);
    return CampaignStatsComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaign.service.ts":
/*!***********************************************!*\
  !*** ./src/app/campaigns/campaign.service.ts ***!
  \***********************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampaignService = /** @class */ (function (_super) {
    __extends(CampaignService, _super);
    function CampaignService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        console.log("Campaign Service" + _this.backendUrl);
        return _this;
    }
    CampaignService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    CampaignService.prototype.ngOnInit = function () {
    };
    CampaignService.prototype.list = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.get = function (campaign) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](campaign, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.create = function (campaign) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CREATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](campaign, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.delete = function (campaign) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](campaign, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.update = function (campaign) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](campaign, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.approve = function (campaign) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.approve;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](campaign, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.pause = function (campaign) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.PAUSE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](campaign, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.listSenders = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.B2BSENDERNAME + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.testSms = function (testSms) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.TEST_SMS;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](testSms, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.getCounts = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + '/counts';
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    CampaignService.prototype.getStats = function (n) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.CAMPAIGNS + '/stats';
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](n, ''), this.httpOptions);
        return obs;
    };
    CampaignService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CampaignService);
    return CampaignService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/campaigns/campaigns.module.ts":
/*!***********************************************!*\
  !*** ./src/app/campaigns/campaigns.module.ts ***!
  \***********************************************/
/*! exports provided: CampaignsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsModule", function() { return CampaignsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign-list/campaign-list.component */ "./src/app/campaigns/campaign-list/campaign-list.component.ts");
/* harmony import */ var _add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-campaign/add-edit-campaign.component */ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.ts");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaign.service */ "./src/app/campaigns/campaign.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var src_app_shared_Pipes_campaign_status_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/Pipes/campaign-status-filter.pipe */ "./src/app/shared/Pipes/campaign-status-filter.pipe.ts");
/* harmony import */ var _shared_Pipes_campaign_name_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/Pipes/campaign-name-filter.pipe */ "./src/app/shared/Pipes/campaign-name-filter.pipe.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _test_sms_test_sms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./test-sms/test-sms.component */ "./src/app/campaigns/test-sms/test-sms.component.ts");
/* harmony import */ var _campaign_stats_campaign_stats_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./campaign-stats/campaign-stats.component */ "./src/app/campaigns/campaign-stats/campaign-stats.component.ts");
/* harmony import */ var _campaign_details_campaign_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./campaign-details/campaign-details.component */ "./src/app/campaigns/campaign-details/campaign-details.component.ts");
/* harmony import */ var _campaign_progress_campaign_progress_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./campaign-progress/campaign-progress.component */ "./src/app/campaigns/campaign-progress/campaign-progress.component.ts");
/* harmony import */ var _shared_Pipes_campaign_date_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/Pipes/campaign-date-filter.pipe */ "./src/app/shared/Pipes/campaign-date-filter.pipe.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _shared_Pipes_campaign_entity_filter_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/Pipes/campaign-entity-filter.pipe */ "./src/app/shared/Pipes/campaign-entity-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var CampaignsModule = /** @class */ (function () {
    function CampaignsModule() {
    }
    CampaignsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_2__["CampaignListComponent"],
                _add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_3__["AddEditCampaignComponent"],
                src_app_shared_Pipes_campaign_status_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["CampaignStatusFilter"],
                _shared_Pipes_campaign_name_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["CampaignNameFilter"],
                _shared_Pipes_campaign_date_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["CampaignDateFilter"],
                _shared_Pipes_campaign_entity_filter_pipe__WEBPACK_IMPORTED_MODULE_26__["CampaignEntityFilter"],
                _test_sms_test_sms_component__WEBPACK_IMPORTED_MODULE_19__["TestSmsComponent"],
                _campaign_stats_campaign_stats_component__WEBPACK_IMPORTED_MODULE_20__["CampaignStatsComponent"],
                _campaign_details_campaign_details_component__WEBPACK_IMPORTED_MODULE_21__["CampaignDetailsComponent"],
                _campaign_progress_campaign_progress_component__WEBPACK_IMPORTED_MODULE_22__["CampaignProgressComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__["FileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__["DynamicDialogModule"],
                ngx_autosize__WEBPACK_IMPORTED_MODULE_24__["AutosizeModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"]
            ], providers: [_campaign_service__WEBPACK_IMPORTED_MODULE_4__["CampaignService"]],
            exports: [_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_2__["CampaignListComponent"], _add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_3__["AddEditCampaignComponent"], _campaign_stats_campaign_stats_component__WEBPACK_IMPORTED_MODULE_20__["CampaignStatsComponent"]],
            entryComponents: [
                _test_sms_test_sms_component__WEBPACK_IMPORTED_MODULE_19__["TestSmsComponent"]
            ]
        })
    ], CampaignsModule);
    return CampaignsModule;
}());



/***/ }),

/***/ "./src/app/campaigns/test-sms/test-sms.component.css":
/*!***********************************************************!*\
  !*** ./src/app/campaigns/test-sms/test-sms.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy90ZXN0LXNtcy90ZXN0LXNtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/campaigns/test-sms/test-sms.component.html":
/*!************************************************************!*\
  !*** ./src/app/campaigns/test-sms/test-sms.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-3\">\r\n  <div class=\"col-12\">\r\n    <form [formGroup]=\"smsTestForm\">\r\n      <div class=\"form-input\">\r\n        <label class=\"form-input-label\">Test SMS String</label>\r\n        <input class=\"input\" formControlName=\"dialWithParameters\" placeholder=\"01111111111,Placeholder=value,...\"\r\n          [ngClass]=\"{ 'invalid-input': fc.dialWithParameters.errors  && (fc.dialWithParameters.touched || fc.dialWithParameters.dirty)}\">\r\n      </div>\r\n      <div *ngIf=\"fc.dialWithParameters.errors  && (fc.dialWithParameters.touched || fc.dialWithParameters.dirty)\">\r\n        <div *ngIf=\"fc.dialWithParameters.errors.required\" class=\"invalid-text\">This field is required</div>\r\n        <div *ngIf=\"fc.dialWithParameters.errors.pattern\" class=\"invalid-text\">Invalid input format\r\n          [ex.\"01111111111,Placeholder=value,...\"]\r\n        </div>\r\n        <div *ngIf=\"fc.dialWithParameters.errors.invalidPlaceholder\" class=\"invalid-text\">Missing parameters in dial \r\n          {{invalidPlaceholders}}.\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!--<button class=\"button button-green\" type=\"submit\">Test</button>  -->\r\n  </div>\r\n</div>\r\n<div class=\"row p-2 mt-2\">\r\n  <div class=\"col-12\">\r\n    <button (click)=\"send()\" class=\"button button-green mr-2\">\r\n      Send Test SMS\r\n    </button>\r\n    <button (click)=\"close()\" class=\"button button-black\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/campaigns/test-sms/test-sms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/campaigns/test-sms/test-sms.component.ts ***!
  \**********************************************************/
/*! exports provided: TestSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSmsComponent", function() { return TestSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestSmsComponent = /** @class */ (function () {
    function TestSmsComponent(ref, config, formBuilder) {
        this.ref = ref;
        this.config = config;
        this.formBuilder = formBuilder;
    }
    TestSmsComponent.prototype.ngOnInit = function () {
        // msg: this.config.msg;
        this.smsText = this.config.data.msg;
        this.smsTestForm = this.formBuilder.group({
            dialWithParameters: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[+]?[0][1][1|0|2|5][0-9]{8}([,][A-z]+[=][0-9A-z\u0600-\u06FF]+)*')]]
        });
    };
    Object.defineProperty(TestSmsComponent.prototype, "fc", {
        get: function () {
            return this.smsTestForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TestSmsComponent.prototype.send = function () {
        console.log('sending test sms: ', this.smsTestForm.get('dialWithParameters').value);
        var placeholders = this.populatePlaceHolders(this.smsTestForm.controls['dialWithParameters'].value);
        this.invalidPlaceholders = this.checkPlaceholdersExist(this.smsText, placeholders, this.smsTestForm.get('dialWithParameters'));
        for (var i in this.smsTestForm.controls) {
            if (this.smsTestForm.controls[i]) {
                this.smsTestForm.controls[i].markAsTouched();
            }
        }
        if (this.smsTestForm.invalid) {
            console.log('form is invalid =>', this.smsTestForm);
            return;
        }
        this.ref.close(this.smsTestForm.get('dialWithParameters').value);
    };
    TestSmsComponent.prototype.close = function () {
        console.log('closing');
        this.ref.close();
    };
    TestSmsComponent.prototype.populatePlaceHolders = function (dial) {
        var placeholders = {};
        var line = dial + '\n';
        var params = line.substring(line.indexOf(',') + 1);
        do {
            placeholders['{' + params.substring(0, params.indexOf('=')) + '}'] = true;
            params = params.substring((params.indexOf(',') > 0) ? params.indexOf(',') + 1 : params.indexOf('\n'));
        } while (params.indexOf('\n') > 0);
        console.log('placeholders =>', placeholders);
        return placeholders;
    };
    TestSmsComponent.prototype.checkPlaceholdersExist = function (smsScript, placeholdersMap, formControl) {
        var invalidPlaceholders = "[";
        var remainingSmsScript = smsScript == null ? "" : smsScript;
        var placeholder;
        var hasErrors = false;
        while (placeholder = remainingSmsScript.match("\{[A-Za-z0-9]+\}")) {
            if (placeholdersMap[placeholder]) {
                console.log(placeholder + " hwhw");
            }
            else {
                hasErrors = true;
                if (!invalidPlaceholders.match(placeholder)) {
                    invalidPlaceholders = invalidPlaceholders + placeholder + " ";
                }
            }
            remainingSmsScript = remainingSmsScript.replace(placeholder, "");
        }
        var errors = formControl.errors;
        if (hasErrors) {
            if (errors) {
                errors['invalidPlaceholder'] = true;
            }
            else {
                errors = { invalidPlaceholder: true };
            }
        }
        else {
            if (errors && errors['invalidPlaceholder']) {
                delete errors['invalidPlaceholder'];
                if (Object.keys(errors).length === 0) {
                    errors = null;
                }
            }
        }
        formControl.setErrors(errors);
        if (hasErrors) {
            invalidPlaceholders = invalidPlaceholders.substr(0, invalidPlaceholders.length - 1) + "]";
        }
        else {
            invalidPlaceholders = "";
        }
        return invalidPlaceholders;
    };
    TestSmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-test-sms',
            template: __webpack_require__(/*! ./test-sms.component.html */ "./src/app/campaigns/test-sms/test-sms.component.html"),
            styles: [__webpack_require__(/*! ./test-sms.component.css */ "./src/app/campaigns/test-sms/test-sms.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogRef"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TestSmsComponent);
    return TestSmsComponent;
}());



/***/ }),

/***/ "./src/app/entity/entity-add-edit/entity-add-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/entity/entity-add-edit/entity-add-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback {\r\n     display: block !important; \r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXR5L2VudGl0eS1hZGQtZWRpdC9lbnRpdHktYWRkLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLHlCQUF5Qjs7QUFFOUIiLCJmaWxlIjoic3JjL2FwcC9lbnRpdHkvZW50aXR5LWFkZC1lZGl0L2VudGl0eS1hZGQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IFxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entity/entity-add-edit/entity-add-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/entity/entity-add-edit/entity-add-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content \">\r\n    <div *ngIf=\"modelToAdd != null\" class=\"business-entities-details\">\r\n        <div class=\"row no-gutters animated fadeInUp\">\r\n            <div class=\"col-5\">\r\n                <div class=\"page-title \">\r\n                    Business Entity\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"section animated fadeInUp\">\r\n\r\n            <div class=\"row my-auto\">\r\n                <div *ngIf=\"mode==1\" class=\"col-6 text-left section-title\">\r\n                    Edit Business Entity\r\n                </div>\r\n                <div *ngIf=\"mode==0\" class=\"col-6 text-left section-title\">\r\n                    Add Business Entity\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n                    <!-- Default switch -->\r\n\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n\r\n                    <!-- Default switch -->\r\n                    <span class=\"p-2\">{{modelToAdd.active ? 'Active' : 'Inactive'}}</span>\r\n                    <p-inputSwitch [(ngModel)]=\"modelToAdd.active\"></p-inputSwitch>\r\n                </div>\r\n            </div>\r\n            <form [formGroup]=\"mainForm\">\r\n                <div class=\"row mt-4 \">\r\n                    <div class=\"col-3 \">\r\n                        <div class=\"p-p\">\r\n                            <img src=\"./assets/img/buildingLogo.svg\" class=\"profile-pic\">\r\n                            <div class=\"edit\">\r\n                                <i class=\"fas fa-pencil-alt\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-5\">\r\n\r\n                        <div class=\"form-input form-input-timepicker \">\r\n                            <label class=\"form-input-label\">Business Entity Name </label>\r\n                            <input class=\"input\" nfSpecialCharacters formControlName=\"entityName\"\r\n                                [(ngModel)]=\"modelToAdd.entityName\" placeholder=\"\">\r\n                            <div *ngIf=\"submitted && !!f.entityName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.entityName.errors.required\">Entity Name is required</div>\r\n                                <div *ngIf=\"!f.entityName.errors.required && !!f.entityName.errors.nfSpecialCharacters\">\r\n                                    Entity Name Must be a valid username</div>\r\n                                <!-- <div *ngIf=\"!f.entityName.errors.required && !!f.entityName.errors.nfNoSpaces\">Spaces only not allowed</div> -->\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-3\">\r\n                        <div class=\"form-input form-selectbox \">\r\n                            <label class=\"form-input-label\">Business Entity Type</label>\r\n                            <!-- <select class=\"selectbox\">\r\n                          <option>Internal</option>\r\n                          <option selected>External</option>\r\n                          <option>...</option>\r\n                      </select> -->\r\n\r\n                            <p-dropdown formControlName=\"entityType\" [options]=\"entityType\" styleclass=\"form-selectbox\"\r\n                                [(ngModel)]=\"selectedrEntityType\">\r\n\r\n                                <ng-template let-type pTemplate=\"item\">\r\n                                    <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\r\n                                        <div style=\"font-size:14px;float:right;margin-top:4px\">{{type.label}}</div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-dropdown>\r\n                            <!-- <div class=\"form-selectbox-icon\">\r\n                      </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-5 \">\r\n                    <div class=\"col-3\">\r\n                        <div class=\"form-input form-input-timepicker \">\r\n                            <label type=\"number\" class=\"form-input-label\">Maximum Throughput/Second </label>\r\n                            <input class=\"input\" (change)=\"checkvalues()\" min=\"1\" formControlName=\"maxThroughput\"\r\n                                type=\"number\" [(ngModel)]=\"modelToAdd.maxThroughput\" placeholder=\"\">\r\n                            <div *ngIf=\"submitted && !!f.maxThroughput.errors && MaxThroughputValid\"\r\n                                class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.maxThroughput.errors.required\">Maximum Throughput is required</div>\r\n                            </div>\r\n                            <div *ngIf=\"submitted && !!f.maxThroughput.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.maxThroughput.errors.min\">Negative value and 0 not allowed </div>\r\n                            </div>\r\n\r\n\r\n                            <div *ngIf=\"submitted && !MaxThroughputValid \" class=\"invalid-feedback\">\r\n                                <div>Value must be less than app profile value </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                        <div class=\"form-input form-input-timepicker\">\r\n                            <label type=\"number\" class=\"form-input-label\">Maximum Daily Quota</label>\r\n                            <input class=\"input\" (change)=\"checkvalues()\" min=\"1\" formControlName=\"dailyQuota\"\r\n                                type=\"number\" [(ngModel)]=\"modelToAdd.dailyQuota\" placeholder=\"\">\r\n                            <div *ngIf=\"submitted && !!f.dailyQuota.errors && dailyQuotaValid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.dailyQuota.errors.required\">Daily Quote is required</div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"submitted && !!f.dailyQuota.errors \" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.dailyQuota.errors.min\">Negative value and 0 not allowed</div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"submitted && !dailyQuotaValid \" class=\"invalid-feedback\">\r\n                                <div>Value must be less than app profile value </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                        <div class=\"form-input form-selectbox \">\r\n                            <label class=\"form-input-label\"> APP profile</label>\r\n                            <!-- <select class=\"selectbox\">\r\n                          <option>...</option>\r\n                          <option selected>APP Accounts</option>\r\n                          <option>...</option>\r\n                      </select>\r\n                      <div class=\"form-selectbox-icon\">\r\n                      </div> -->\r\n\r\n                            <p-dropdown (onChange)=\"checkvalues()\" [options]=\"profileItems\" formControlName=\"appProfile\"\r\n                                placeholder=\"\" [(ngModel)]=\"modelToAdd.appProfileId\" filter=\"true\">\r\n\r\n                                <ng-template let-profile pTemplate=\"item\">\r\n                                    <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\r\n\r\n                                        <div style=\"font-size:14px;float:right;margin-top:4px\">{{profile.label}}</div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-dropdown>\r\n\r\n\r\n                            <div *ngIf=\"submitted && !!f.appProfile.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.appProfile.errors.required\">select App profile </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"submitted && !!f.appProfile.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!f.appProfile.errors.min\">select App profile </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"reportDeliveryValid\" class=\"col-3\">\r\n                        <label class=\"form-input-label\">Delivery Report</label>\r\n                        <div class=\"input\">\r\n                            <p-inputSwitch formControlName=\"deliveryReport\" [(ngModel)]=\"modelToAdd.deliveryReport\">\r\n                            </p-inputSwitch>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <form [formGroup]=\"balanceForm\">\r\n                <div class=\"row mt-5\">\r\n\r\n                    <div class=\"col-3\">\r\n                        <!-- <form class=\"pt-4\"> -->\r\n                        <div class=\"custom-control custom-checkbox text-muted caption-gutter-left-0\">\r\n                            <p-checkbox formControlName=\"isLimited\" [(ngModel)]=\"modelToAdd.isLimited\"\r\n                                label=\"Limited Account\" binary=\"true\">\r\n                            </p-checkbox>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"modelToAdd.isLimited\" class=\"col-3\">\r\n                        <div class=\"form-input form-input-timepicker \">\r\n                            <label class=\"form-input-label\">Balance </label>\r\n                            <!-- -->\r\n                            <input *ngIf=\"mode !== 1\" class=\"input\" formControlName=\"balance\"\r\n                                [(ngModel)]=\"modelToAdd.balance\" placeholder=\"\">\r\n                            <input *ngIf=\"mode == 1\" class=\"input\" formControlName=\"balance\"\r\n                                [(ngModel)]=\"modelToAdd.balance\" placeholder=\"\" readonly title=\"This balance is subject to live change if any campaigns belonging to ({{modelToAdd.entityName}}) are running at the moment, add/subtract any amount you need to modify in the below input.\">\r\n                            <div *ngIf=\"submitted && !!getBalanceControlls.balance.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!getBalanceControlls.balance.errors.required\">balance required</div>\r\n                                <!-- <div *ngIf=\"!!f.entityName.errors.nfNoSpaces\">Spaces only not allowed</div> -->\r\n                            </div>\r\n\r\n                            <div *ngIf=\"submitted && !!getBalanceControlls.balance.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!getBalanceControlls.balance.errors.min\">You cannot subtract more than the available balance\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                        <div *ngIf=\"mode == 1\" class=\"form-input form-input-timepicker \">\r\n                            <label class=\"form-input-label\">Balance To Add</label>\r\n                            <!-- -->\r\n                            <input class=\"input\" formControlName=\"balanceToAdd\" [(ngModel)]=\"modelToAdd.balanceToAdd\"\r\n                                placeholder=\"\" type=\"number\">\r\n                            <div *ngIf=\"submitted && !!getBalanceControlls.balanceToAdd.errors\"\r\n                                class=\"invalid-feedback\">\r\n                                <div *ngIf=\"!!getBalanceControlls.balanceToAdd.errors.required\">Balance to add can't be\r\n                                    empty</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-input form-input-timepicker \">\r\n                        <label class=\"form-input-label-dark\">Default SMS script </label>\r\n                        <input class=\"input\" [(ngModel)]=\"modelToAdd.smsScript\" placeholder=\"\">\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n    \r\n            </form>\r\n\r\n           \r\n\r\n            <div *ngIf=\"canAddFakeSenderValid\" class=\"row mt-5\">\r\n                <div class=\"col-3\">\r\n                    <button (click)=\"addfakeSender()\" class=\"button button-green mr-2 pr-4 pl-4\">\r\n                        Add Fake sender\r\n                    </button>\r\n                </div>\r\n\r\n                <!-- <div *ngIf=\"fakeSenderArray.length > 0\" class=\"col-3\">\r\n                    <button (click)=\"removeFakeSender()\" class=\"button button-black mr-2 pr-4 pl-4\">\r\n                        Remove\r\n                    </button>\r\n                </div> -->\r\n            </div>\r\n            <div *ngIf=\"fakesenderDuplicated\" class=\"invalid-feedback\">\r\n                <div>Duplicated Fake sender</div>\r\n            </div>\r\n            <div *ngFor=\"let fakeSender of fakeSenderArray; let i = index\" class=\"row mt-5\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-input form-input-timepicker \">\r\n                        <label class=\"form-input-label-dark\">Fake Sender </label>\r\n                        <input class=\"input\" (blur)=\"checkFakeSenderDuplication(fakeSender.fakeSenderName)\"\r\n                            [(ngModel)]=\"fakeSender.fakeSenderName\" placeholder=\"\" maxlength=\"11\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-input form-input-timepicker \">\r\n                        <label class=\"form-input-label-dark\"></label>\r\n                        <p-radioButton name=\"group1\" [value]=\"true\" label=\"Default\" [(ngModel)]=\"fakeSender.isDefault\"\r\n                            inputId=\"opt1\"></p-radioButton>\r\n                        <button (click)=\"removeSpecificSender(i)\" class=\"button button-black ml-2 pr-2 pl-2\">\r\n                            Remove\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-input form-input-timepicker \">\r\n                        <div class=\"form-input-label-dark mr-3\">Delegated Groups </div>\r\n                        <!-- <input class=\"input\" placeholder=\"8500000\"> -->\r\n                        <p-multiSelect styleClass=\"form-input mt-2\" [options]=\"groupsSlectItem\"\r\n                            [(ngModel)]=\"selectedGroups\"></p-multiSelect>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row mt-5 pt-3 pb-2\">\r\n                <div class=\"col-12 justify-content-center text-right\">\r\n                    <button (click)=\"saveEntity()\" class=\"button button-green mr-2 pr-4 pl-4\">\r\n                        Save\r\n                    </button>\r\n                    <button (click)=\"cancel()\" class=\"button button-black mr-2 pr-4 pl-4\">\r\n                        Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <!-- </form> -->\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/entity/entity-add-edit/entity-add-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/entity/entity-add-edit/entity-add-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EntityAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityAddEditComponent", function() { return EntityAddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity-service.service */ "./src/app/entity/entity-service.service.ts");
/* harmony import */ var src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/entity-model */ "./src/app/shared/models/entity-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_models_fake_sender_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/fake-sender-model */ "./src/app/shared/models/fake-sender-model.ts");
/* harmony import */ var src_app_shared_models_lk_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/lk-group */ "./src/app/shared/models/lk-group.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EntityAddEditComponent = /** @class */ (function () {
    function EntityAddEditComponent(entityService, route, formBuilder) {
        this.entityService = entityService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.selectedGroups = [];
        this.modelToAdd = new src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_2__["EntityModel"]();
        this.submitted = false;
        this.selectedrEntityType = "2";
        this.selectedProfile = 1;
        this.modelToEdit = new src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_2__["EntityModel"]();
        this.fakeSenderArray = new Array();
        this.fakesenderDuplicated = false;
        this.fakesenderEmpty = false;
        this.mode = 0;
        this.profilemap = new Map();
        this.dailyQuotaValid = true;
        this.MaxThroughputValid = true;
        this.reportDeliveryValid = true;
        this.canAddFakeSenderValid = true;
        this.allAppProfiles = new Array();
        this.profileItems = new Array();
    }
    Object.defineProperty(EntityAddEditComponent.prototype, "f", {
        get: function () { return this.mainForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAddEditComponent.prototype, "getBalanceControlls", {
        get: function () { return this.balanceForm.controls; },
        enumerable: true,
        configurable: true
    });
    EntityAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_7__["Defines"].SESSION_KEYS.userModel));
        this.mainForm = this.formBuilder.group({
            entityName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            entityType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            dailyQuota: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            appProfile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            maxThroughput: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            deliveryReport: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
        this.balanceForm = this.formBuilder.group({
            isLimited: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.modelToAdd.balance)]],
            balanceToAdd: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.groupsSlectItem = [];
        this.entityService.listGroup().subscribe(function (resp) {
            var groupListAllAuthorized = _this.entityService.accessGranted(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_7__["Defines"].PRIVILEGES.GROUP.LIST, src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_7__["Defines"].ACCESS_LEVELS.EVERYTHING);
            console.log("groupListAllAuthorized", groupListAllAuthorized);
            resp.responsePayload.forEach(function (group) {
                if (groupListAllAuthorized || (group.ownerEntity !== _this.modelToEdit.entityId && group.ownerEntity == _this.user.entityId)) {
                    _this.groupsSlectItem.push({ label: group.groupName, value: group.groupId });
                }
            });
            _this.groupsSlectItem = JSON.parse(JSON.stringify(_this.groupsSlectItem));
        });
        this.entityType = [
            { label: 'External', value: '2' },
            { label: 'Internal', value: '1' }
        ];
        this.mode = this.entityService.mode;
        this.entityService.getAllAppProfile().subscribe(function (res) {
            _this.allAppProfiles = res.responsePayload;
            _this.profileItems.push({ label: "select app profile ", value: -1 });
            _this.allAppProfiles.forEach(function (profile) {
                _this.profileItems.push({ label: profile.appProfileName, value: profile.appProfileId });
                _this.profilemap.set(profile.appProfileId, profile);
            });
            _this.profileItems = JSON.parse(JSON.stringify(_this.profileItems));
        });
        // let editModel = <EntityModel>this.entityService.popSessionObject(Defines.SESSION_KEYS.entityToEdit);
        if (this.mode == 1) {
            this.modelToAdd = this.entityService.modeltoEdit; //TODO ==> make this get from service live ( Service returns lot of unset fields (problem in DAO))
            this.modelToAdd.balanceToAdd = 0;
            this.selectedrEntityType = this.modelToAdd.isInternal ? "1" : "2";
            this.fakeSenderArray = this.modelToAdd.fakeSendrName;
            if (this.modelToAdd.groupList.length > 0)
                this.modelToAdd.groupList.forEach(function (element) {
                    _this.selectedGroups.push(element.groupId);
                });
        }
    };
    EntityAddEditComponent.prototype.saveEntity = function () {
        var _this = this;
        this.submitted = true;
        if (this.mainForm.invalid) {
            return;
        }
        if (this.fakesenderDuplicated)
            return;
        if (this.modelToAdd.isLimited != undefined && this.modelToAdd.isLimited && this.balanceForm.invalid) {
            return;
        }
        if (this.modelToAdd.dailyQuota > this.profilemap.get(this.modelToAdd.appProfileId).maximumDailyQuota) {
            this.dailyQuotaValid = false;
            return;
        }
        if (this.modelToAdd.maxThroughput > this.profilemap.get(this.modelToAdd.appProfileId).maxThroughput) {
            this.MaxThroughputValid = false;
            return;
        }
        console.log("console : ", this.selectedGroups);
        this.modelToAdd.groupList = [];
        // this.modelToAdd.groupList
        this.selectedGroups.forEach(function (element) {
            var tempgroup = new src_app_shared_models_lk_group__WEBPACK_IMPORTED_MODULE_6__["LkGroup"]("", element);
            _this.modelToAdd.groupList.push(tempgroup);
        });
        this.modelToAdd.fakeSendrName = this.fakeSenderArray;
        this.modelToAdd.isInternal = this.selectedrEntityType == "1";
        if (this.modelToAdd.active == undefined)
            this.modelToAdd.active = false;
        if (this.modelToAdd.isLimited == undefined)
            this.modelToAdd.isLimited = false;
        if (this.modelToAdd.deliveryReport == undefined)
            this.modelToAdd.deliveryReport = false;
        if (this.mode == 0) {
            this.entityService.addEntity(this.modelToAdd).subscribe(function (resp) {
                //debugger;
                console.log("response ", resp.responsePayload);
                if (resp.status == 0) {
                    _this.modelToAdd = new src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_2__["EntityModel"]();
                    _this.route.navigate(['/entity']);
                }
            });
        }
        else if (this.mode == 1) {
            if (this.initialBalance != this.modelToAdd.balance) {
                //this.balanceToAdd
            }
            this.entityService.editEntity(this.modelToAdd).subscribe(function (resp) {
                //debugger;
                if (resp.status == 0) {
                    _this.route.navigate(['/entity']);
                }
                console.log("response ", resp.responsePayload);
                // this.outputEntity.emit(this.modelToAdd);
            });
        }
    };
    EntityAddEditComponent.prototype.cancel = function () {
        if (this.mode == 0) {
            this.modelToAdd = new src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_2__["EntityModel"]();
            this.entityService.mode = 0;
            this.route.navigate(['/entity']);
        }
        else {
            this.modelToAdd = this.entityService.modeltoEdit;
            this.entityService.mode = 0;
            this.route.navigate(['/entity']);
            // this.outputEntity.emit(null);
        }
    };
    EntityAddEditComponent.prototype.addfakeSender = function () {
        if (this.fakeSenderArray.length == 0) {
            var temp = new src_app_shared_models_fake_sender_model__WEBPACK_IMPORTED_MODULE_5__["FakeSenderModel"]();
            temp.isDefault = true;
            this.fakeSenderArray.push(temp);
        }
        else {
            this.fakeSenderArray.push(new src_app_shared_models_fake_sender_model__WEBPACK_IMPORTED_MODULE_5__["FakeSenderModel"]());
        }
    };
    EntityAddEditComponent.prototype.removeFakeSender = function () {
        this.fakeSenderArray.splice(this.fakeSenderArray.length - 1, 1);
    };
    EntityAddEditComponent.prototype.removeSpecificSender = function (n) {
        if (this.fakeSenderArray[n].isDefault) {
            if (n - 1 > -1)
                this.fakeSenderArray[n - 1].isDefault = true;
            else if (n + 1 < this.fakeSenderArray.length)
                this.fakeSenderArray[n + 1].isDefault = true;
        }
        this.fakeSenderArray.splice(n, 1);
    };
    EntityAddEditComponent.prototype.checkFakeSenderDuplication = function (fakesender) {
        var count = 0;
        console.log("fakesender : ", fakesender);
        if (fakesender != undefined) {
            this.fakeSenderArray.forEach(function (element) {
                if (fakesender.toLowerCase().trim() == element.fakeSenderName.toLowerCase().trim()) {
                    count++;
                }
            });
            if (count > 1) {
                console.log(fakesender, "duplicated ");
                this.fakesenderDuplicated = true;
            }
            else {
                this.fakesenderDuplicated = false;
            }
        }
    };
    EntityAddEditComponent.prototype.checkvalues = function () {
        if (this.modelToAdd.appProfileId > 0) {
            if (this.modelToAdd.dailyQuota > this.profilemap.get(this.modelToAdd.appProfileId).maximumDailyQuota) {
                this.dailyQuotaValid = false;
            }
            else {
                this.dailyQuotaValid = true;
            }
            if (this.modelToAdd.maxThroughput > this.profilemap.get(this.modelToAdd.appProfileId).maxThroughput) {
                this.MaxThroughputValid = false;
            }
            else {
                this.MaxThroughputValid = true;
            }
            if (this.profilemap.get(this.modelToAdd.appProfileId).requiresDeliveryReport) {
                this.reportDeliveryValid = true;
            }
            else {
                this.reportDeliveryValid = false;
                this.modelToAdd.deliveryReport = false;
            }
        }
    };
    EntityAddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-entity-add-edit',
            template: __webpack_require__(/*! ./entity-add-edit.component.html */ "./src/app/entity/entity-add-edit/entity-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./entity-add-edit.component.css */ "./src/app/entity/entity-add-edit/entity-add-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_entity_service_service__WEBPACK_IMPORTED_MODULE_1__["EntityServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EntityAddEditComponent);
    return EntityAddEditComponent;
}());



/***/ }),

/***/ "./src/app/entity/entity-list/entity-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/entity/entity-list/entity-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-menu{\r\n    position: absolute;\r\n    z-index: 100;\r\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXR5L2VudGl0eS1saXN0L2VudGl0eS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlDQUF5QztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL2VudGl0eS9lbnRpdHktbGlzdC9lbnRpdHktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1tZW51e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entity/entity-list/entity-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/entity/entity-list/entity-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" (click)=\"dropDownClose()\">\r\n  <div class=\"row no-gutters mb-4\">\r\n    <div class=\"col-4\">\r\n      <div class=\"page-title\">\r\n        Business Entities\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <div class=\"row no-gutters my-auto\">\r\n        <div *ngIf=\"filterMenuEnabled\" class=\"section filter-menu\">\r\n          <div class=\"row form-input form-selectbox\">\r\n            <label class=\"form-input-label\">Entity Status</label>\r\n            <select class=\"selectbox\" [(ngModel)]=\"statusFilter\">\r\n              <option [ngValue]=\"null\">All</option>\r\n              <option [ngValue]=\"true\">Active</option>\r\n              <option [ngValue]=\"false\">Inactive</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\"></div>\r\n          </div>\r\n          <div class=\"row form-input form-selectbox form-input-margin\">\r\n            <label class=\"form-input-label\">Entity Type</label>\r\n            <select class=\"selectbox\" [(ngModel)]=\"typeFilter\">\r\n              <option value=\"all\">All</option>\r\n              <option value=\"internal\">Internal</option>\r\n              <option value=\"external\">External</option>\r\n            </select>\r\n            <div class=\"form-selectbox-icon\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-2 text-center\">\r\n          <button (click)=\"showHideFilterMenu()\" class=\"button button-grey\">\r\n            <i class=\"fa fa-filter\" style=\"font-size:12px\"></i> Filter</button>\r\n        </div>\r\n        <div class=\"col-8 text-right\">\r\n          <div class=\"search-input\">\r\n            <input [(ngModel)]=\"nameFilter\" type=\"text\" class=\"\" placeholder=\"Search By Entity Name\">\r\n            <i class=\"icon-search icon\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-2 text-right\">\r\n          <a ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE\"\r\n          (successHandler)=\"addEntity()\" class=\"button button-green\">Create Entity</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"allEntities\" (click)=\"filterMenuEnabled = false\">\r\n    <div\r\n      *ngIf=\"setFilteredEntities(allEntities | entitynameFilter:nameFilter | entityStatusFilter: statusFilter | entityTypeFilter: typeFilter)\">\r\n    </div>\r\n    <div class=\"campaigns-list\"\r\n      *ngFor=\"let Entity of filteredEntities | orderBy: key : reverse | paginate: { itemsPerPage: perPage, currentPage: p }; let i = index\">\r\n\r\n      <div *ngIf=\"(dropDownEntityId === Entity.entityId)\" [ngClass] = \"{'hide':!dropDown}\" class=\"dropdown\" style=\"z-index: 999;\" (click)=\"$event.stopPropagation();\">\r\n        <ul class=\"list\">\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.GET\" [targetId]=\"Entity.entityId\"\r\n          (successHandler)=\"viewEntity(Entity)\"><span class=\"fas fa-eye\"></span>Details</li>\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.UPDATE\" [targetId]=\"Entity.entityId\"\r\n          (successHandler)=\"editEntity(Entity)\"><span class=\"fas fa-edit\"></span>Edit</li>\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.DELETE\" [targetId]=\"Entity.entityId\"\r\n          (successHandler)=\"showConfirmDelete(Entity)\"><span class=\"fas fa-trash\"></span>Delete</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"row confirmDialog animated fadeIn faster\" *ngIf=\"deleteConfirm && (deletedId == Entity.entityId)\">\r\n        <div class=\"col-12\">Are you sure you want to delete entity <b>{{Entity.entityName}}</b> ?</div>\r\n        <div class=\"col-12 mt-2\">\r\n          <button class=\"button button-green mr-4\" (click)=\"deleteEntity(Entity)\">DELETE</button>\r\n          <button class=\"button button-black \" (click)=\"hideConfirmDelete()\">CANCEL</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"campaigns-item animated fadeIn faster\">\r\n        <div class=\"row no-gutters my-auto\">\r\n          <div class=\"col-3\">\r\n            <div class=\"title-small title-robotomedium\">\r\n              <span class=\"mr-4\"><img src=\"./assets/img/buildingLogo.svg\"></span>\r\n              {{Entity.entityName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2 text-left \">\r\n            <div *ngIf=\"Entity.active\" class=\"color-green pt-3\">\r\n              <i class=\"fas fa-circle mr-2 heading-8\"></i>\r\n              <span> Active</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!Entity.active\" class=\"color-red pt-3\">\r\n              <i class=\"fas fa-circle mr-2 heading-8\"></i>\r\n              <span> Inactive </span>\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-3 my-auto\">\r\n            <div class=\"property heading-8 color-gray\">\r\n              Entity Type\r\n            </div>\r\n            <div *ngIf=\"Entity.active\" class=\" value heading-7\">\r\n              {{Entity.isInternal ? \"Internal\" : \"External\"}}\r\n            </div>\r\n\r\n            <div *ngIf=\"!Entity.active\" class=\" value heading-7 color-dimmed\">\r\n              {{Entity.isInternal ? \"Internal\" : \"External\"}}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3 my-auto\">\r\n            <div class=\"property heading-8 color-gray\">\r\n              Maximum Daily Quota\r\n            </div>\r\n            <div *ngIf=\"Entity.active\" class=\"value heading-7\">\r\n              {{Entity.dailyQuota}}\r\n            </div>\r\n\r\n            <div *ngIf=\"!Entity.active\" class=\" value heading-7 color-dimmed\">\r\n              {{Entity.dailyQuota}}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-1 my-auto text-right\">\r\n            <a (click)=\"dropDownOpen($event,Entity)\" class=\"campaigns-item-actions-link\">\r\n              <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <ndp-entity-view *ngIf=\"showEditFlag &&   showEditId == Entity.entityId\" [viewmodel]=\"entitytoView\"\r\n          (action)=\"doAfterViewAction($event)\"></ndp-entity-view>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- <div *ngIf=\"showDetailsFlag && ShowDetailsSelectedId == Entity.entityId\">\r\n        <div class=\"ui-grid\">\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">Maximum throughput </div>\r\n              <div class=\"ui-grid-col-6\">{{Entity.quotaLimit}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">daily quota</div>\r\n              <div class=\"ui-grid-col-6\">{{Entity.dailyQuota}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">APP profile</div>\r\n              <div class=\"ui-grid-col-6\">{{Entity.appProfileName}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">Limited account</div>\r\n              <div class=\"ui-grid-col-6\">\r\n                <p-inputSwitch [(ngModel)]=\"Entity.isLimitid\"></p-inputSwitch>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid\">\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">Balance </div>\r\n              <div class=\"ui-grid-col-6\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">Delivery report</div>\r\n              <div class=\"ui-grid-col-6\">\r\n                <p-inputSwitch [(ngModel)]=\"Entity.deliveryReport\"></p-inputSwitch>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">created by</div>\r\n              <div class=\"ui-grid-col-6\"> {{Entity.creatorFName  + \" \" + Entity.creatorLName}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-3\">\r\n            <div class=\"ui-grid\">\r\n              <div class=\"ui-grid-col-6\">creation date</div>\r\n              <div class=\"ui-grid-col-6\">{{Entity.creationDate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    <div *ngIf=\"filteredEntities.length == 0 && inialized\">\r\n      <div class=\"row mt-4 animated fadeIn fast\">\r\n        <div class=\"col-12 mt-4 text-center\">\r\n          <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n          <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Entities Found</b></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ngx-pagination\">\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/entity/entity-list/entity-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/entity/entity-list/entity-list.component.ts ***!
  \*************************************************************/
/*! exports provided: EntityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityListComponent", function() { return EntityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity-service.service */ "./src/app/entity/entity-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityListComponent = /** @class */ (function () {
    function EntityListComponent(entityService, route) {
        this.entityService = entityService;
        this.route = route;
        this.filteredEntities = null;
        this.inialized = false;
        this.showDetailsFlag = false;
        this.ShowDetailsSelectedId = 0;
        this.showEditFlag = false;
        this.showEditId = 0;
        this.deleteConfirm = false;
        this.listAccessLevel = 0;
        this.editAccessLevel = 0;
        this.deleteAccessLevel = 0;
        /*=============================*/
        /* Pagination Filtering & Sorting*/
        this.p = 1;
        this.perPage = 5;
        /*SORTING*/
        this.key = 'entityId';
        this.reverse = true;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_CRUD;
    }
    EntityListComponent.prototype.ngOnInit = function () {
        this.authorizationUrl = this.entityService.authorizationUrl;
        this.statusFilter = null;
        this.typeFilter = 'all';
        this.allEntities = new Array();
        //this.filteredEntities = this.allEntities;
        this.entityService.mode = 0;
        this.entityService.modeltoEdit = null;
        this.setAccessLevel();
        console.log("Can create", this.canCreate);
        this.listEntity();
    };
    EntityListComponent.prototype.listEntity = function () {
        var _this = this;
        this.entityService.getAllEntity().subscribe(function (resp) {
            _this.allEntities = resp.responsePayload;
            _this.inialized = true;
            _this.allEntities.forEach(function (entity) {
                if (entity.createdBy === _this.user.id) {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.OWN) {
                        entity.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.OWN) {
                        entity.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.OWN) {
                        entity.canView = true;
                    }
                }
                else if (entity.creatorEntityId === _this.user.entityId) {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.ENTITY) {
                        entity.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.ENTITY) {
                        entity.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.ENTITY) {
                        entity.canView = true;
                    }
                }
                else {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        entity.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        entity.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        entity.canView = true;
                    }
                }
            });
        });
    };
    EntityListComponent.prototype.addEntity = function () {
        this.route.navigateByUrl('/entity/add');
    };
    EntityListComponent.prototype.showDetails = function (showdetialsId) {
        this.showDetailsFlag = true;
        this.ShowDetailsSelectedId = showdetialsId;
    };
    EntityListComponent.prototype.showHideFilterMenu = function () {
        this.filterMenuEnabled = !this.filterMenuEnabled;
    };
    EntityListComponent.prototype.setStatusFilter = function (statusToFilterBy) {
        switch (statusToFilterBy) {
            case "all":
                this.statusFilter = null;
                break;
            case "active":
                this.statusFilter = true;
                break;
            case "inactive":
                this.statusFilter = false;
                break;
        }
    };
    EntityListComponent.prototype.setTypeFilter = function (statusToFilterBy) {
        switch (statusToFilterBy) {
            case "all":
                this.typeFilter = 'all';
                break;
            case "internal":
                this.typeFilter = 'internal';
                break;
            case "external":
                this.typeFilter = 'external';
                break;
        }
    };
    EntityListComponent.prototype.dropDownOpen = function (event, entity) {
        event.stopPropagation();
        if (!this.dropDown || this.dropDownEntityId != entity.entityId) {
            this.dropDownEntityId = entity.entityId;
            this.dropDown = true;
        }
        else {
            this.dropDown = false;
        }
    };
    EntityListComponent.prototype.dropDownClose = function () {
        this.dropDownEntityId = null;
        this.dropDown = false;
    };
    EntityListComponent.prototype.editEntity = function (entity) {
        this.dropDownClose();
        // this.entitytoEdit = entity;
        // this.showEditFlag = true;
        // this.showEditId =  entity.entityId;
        // this.entityService.cacheSessionObject(Defines.SESSION_KEYS.entityToEdit, JSON.stringify(entity));
        this.entityService.setmodelTobeEdit(entity);
        this.route.navigate(['/entity/add']);
    };
    EntityListComponent.prototype.afterEditentity = function (outputEntity) {
        var _this = this;
        if (outputEntity != null) {
            console.log("output entity ", outputEntity);
            var tempEntities_1 = [];
            this.allEntities.forEach(function (entity) {
                if (entity.entityId == outputEntity.entityId) {
                    console.log("list before ", _this.allEntities);
                    tempEntities_1.push(outputEntity);
                    console.log("list after ", _this.allEntities);
                }
                else {
                    tempEntities_1.push(entity);
                }
            });
            console.log("list before ", this.allEntities);
            this.allEntities = tempEntities_1;
            console.log("list after ", this.allEntities);
        }
        this.showEditFlag = false;
        this.showEditId = null;
    };
    EntityListComponent.prototype.deleteEntity = function (inEntity) {
        var _this = this;
        this.dropDownClose();
        this.entityService.deleteEntity(inEntity.entityId).subscribe(function (resp) {
            if (resp.status === 0) {
                _this.allEntities = _this.allEntities.filter(function (x) { return x.entityId !== inEntity.entityId; });
            }
            else {
                _this.hideConfirmDelete();
            }
        });
    };
    EntityListComponent.prototype.viewEntity = function (entity) {
        this.dropDownClose();
        this.entitytoView = entity;
        this.showEditFlag = true;
        this.showEditId = entity.entityId;
    };
    EntityListComponent.prototype.doAfterViewAction = function ($event) {
        console.log("Action ", $event);
        if ($event == 1)
            this.editEntity(this.entitytoView);
        else if ($event == 2)
            this.showEditFlag = false;
    };
    EntityListComponent.prototype.showConfirmDelete = function (entity) {
        this.deleteConfirm = true;
        this.deletedId = entity.entityId;
    };
    EntityListComponent.prototype.hideConfirmDelete = function () {
        this.deleteConfirm = false;
        this.deletedId = 0;
    };
    EntityListComponent.prototype.setFilteredEntities = function (filtered) {
        this.filteredEntities = filtered;
    };
    EntityListComponent.prototype.setAccessLevel = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel));
        this.user.privilegeList.forEach(function (rolePrivilege) {
            switch (rolePrivilege.privilegeId) {
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].PRIVILEGES.ENTITY.EDIT: {
                    _this.editAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].PRIVILEGES.ENTITY.LIST: {
                    _this.listAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].PRIVILEGES.ENTITY.DELETE: {
                    _this.deleteAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].PRIVILEGES.ENTITY.CREATE: {
                    _this.canCreate = true;
                    break;
                }
            }
        });
    };
    EntityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-entity-list',
            template: __webpack_require__(/*! ./entity-list.component.html */ "./src/app/entity/entity-list/entity-list.component.html"),
            styles: [__webpack_require__(/*! ./entity-list.component.css */ "./src/app/entity/entity-list/entity-list.component.css")]
        }),
        __metadata("design:paramtypes", [_entity_service_service__WEBPACK_IMPORTED_MODULE_1__["EntityServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EntityListComponent);
    return EntityListComponent;
}());



/***/ }),

/***/ "./src/app/entity/entity-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entity/entity-service.service.ts ***!
  \**************************************************/
/*! exports provided: EntityServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityServiceService", function() { return EntityServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EntityServiceService = /** @class */ (function (_super) {
    __extends(EntityServiceService, _super);
    function EntityServiceService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        _this.mode = 0;
        return _this;
    }
    EntityServiceService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.entity;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    EntityServiceService.prototype.getAllEntity = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.entity + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    EntityServiceService.prototype.getEntity = function (id) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.entity + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](id, ''), this.httpOptions);
        return obs;
    };
    EntityServiceService.prototype.getAllAppProfile = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.appprofile + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    EntityServiceService.prototype.addEntity = function (entity) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.entity + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.CREATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](entity, ''), this.httpOptions);
        return obs;
    };
    EntityServiceService.prototype.editEntity = function (entity) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.entity + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](entity, ''), this.httpOptions);
        return obs;
    };
    EntityServiceService.prototype.deleteEntity = function (entityId) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.entity + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](entityId, ''), this.httpOptions);
        return obs;
    };
    EntityServiceService.prototype.listGroup = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_CRUD.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (list_) { return console.log('get List group: ' + list_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    EntityServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    EntityServiceService.prototype.setmodelTobeEdit = function (entity) {
        debugger;
        this.modeltoEdit = entity;
        this.mode = 1;
    };
    EntityServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EntityServiceService);
    return EntityServiceService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/entity/entity-view/entity-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/entity/entity-view/entity-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0eS9lbnRpdHktdmlldy9lbnRpdHktdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/entity/entity-view/entity-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/entity/entity-view/entity-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-content \"> -->\r\n<div class=\"business-entities-details\">\r\n    <div class=\"row no-gutters animated fadeIn faster\">\r\n        <div class=\"col-5\">\r\n            <div class=\"page-title \">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"animated fadeIn faster\">\r\n        <div class=\"row mt-4 \">\r\n            <div class=\"col-3 \">\r\n                <div class=\"p-p\">\r\n                    <img src=\"\" class=\"profile-pic\">\r\n                    <div class=\"edit\">\r\n                        <i class=\"fas fa-pencil-alt\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label\">Business Entity Name </label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.entityName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-input form-selectbox \">\r\n                    <label class=\"form-input-label\">Business Entity Type</label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"entityType \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5 \">\r\n            <div class=\"col-3\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label\">Maximum throughput/second </label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.maxThroughput\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-input form-input-timepicker\">\r\n                    <label class=\"form-input-label\">Maximum daily quota</label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.dailyQuota\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-input form-selectbox \">\r\n                    <label class=\"form-input-label\">Assigned APP profile</label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.appProfileName\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n                <label class=\"form-input-label\">Delivery Report</label>\r\n                <div class=\"input\">\r\n                    <p-inputSwitch [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.deliveryReport\"></p-inputSwitch>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row mt-5 \">\r\n            <div class=\"col-3\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label\"> Created By </label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"createdby\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-input form-input-timepicker\">\r\n                    <label class=\"form-input-label\"> Creation Date</label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"creationDate\">\r\n\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"modelToview.updatedFName !=null\" class=\"col-3\">\r\n                <div class=\"form-input form-selectbox \">\r\n                    <label class=\"form-input-label\">Entity last modified by</label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"updatedby\">\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"modelToview.updatedFName !=null\" class=\"col-3\">\r\n                <div class=\"form-input form-selectbox \">\r\n                    <label class=\"form-input-label\">Entity last modification date</label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"upddateDate\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-3\">\r\n                <p-checkbox [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.isLimitid\" label=\"Limited Account\"\r\n                    binary=\"true\"></p-checkbox>\r\n            </div>\r\n            <div *ngIf=\"modelToview.isLimitid\" class=\"col-3\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label\">Balance </label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"modelToview.balance\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"showFakeSender\" class=\"row mt-5\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label-dark\">Fake Senders </label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"fakesender\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label-dark\">Default SMS script </label>\r\n                    <input class=\"input\" [(ngModel)]=\"modelToview.smsScript\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"shwoDlegatedGroup\" class=\"row mt-5\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                    <label class=\"form-input-label-dark\">Delegated Groups </label>\r\n                    <input class=\"input\" [disabled]=\"'disabled'\" [(ngModel)]=\"groups\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5 pt-3 pb-2\">\r\n            <div class=\"col-12 justify-content-center text-right\">\r\n                <a (click)=\"editEntity()\" class=\"button button-green mr-2 pr-4 pl-4\">\r\n                    Edit\r\n                </a>\r\n                <a (click)=\"cancelEntity()\" class=\"button button-primary mr-2\">\r\n                    Cancel\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/entity/entity-view/entity-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/entity/entity-view/entity-view.component.ts ***!
  \*************************************************************/
/*! exports provided: EntityViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityViewComponent", function() { return EntityViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/entity-model */ "./src/app/shared/models/entity-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntityViewComponent = /** @class */ (function () {
    function EntityViewComponent() {
        this.actionTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fakesender = "";
        this.groups = "";
        this.createdby = "";
        this.updatedby = "";
        this.showFakeSender = false;
        this.shwoDlegatedGroup = false;
    }
    EntityViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entityType = this.modelToview.isInternal ? "Internal" : "external";
        this.modelToview.fakeSendrName.forEach(function (element) {
            _this.showFakeSender = true;
            if (element.isDefault) {
                _this.fakesender += element.fakeSenderName + " (*) , ";
            }
            else {
                _this.fakesender += element.fakeSenderName + ",";
            }
        });
        this.fakesender = this.fakesender.substring(0, this.fakesender.length - 1);
        this.modelToview.groupList.forEach(function (element) {
            _this.groups += element.groupName + ",";
            _this.shwoDlegatedGroup = true;
        });
        this.groups = this.groups.substring(0, this.groups.length - 1);
        this.createdby = this.modelToview.creatorFName + " " + this.modelToview.creatorLName;
        this.updatedby = this.modelToview.updatedFName != null ? this.modelToview.updatedFName + " " + this.modelToview.updatedLName : "";
        var creationDate_Date = new Date(this.modelToview.creationDate);
        this.creationDate = creationDate_Date.getDate() + "-" + (creationDate_Date.getMonth() + 1) + "-" + creationDate_Date.getFullYear();
        var update_Date = new Date(this.modelToview.updatedDate);
        debugger;
        this.upddateDate = update_Date.getDate() + "-" + (update_Date.getMonth() + 1) + "-" + update_Date.getFullYear();
    };
    EntityViewComponent.prototype.editEntity = function () {
        this.actionTaken.emit(1);
    };
    EntityViewComponent.prototype.cancelEntity = function () {
        this.actionTaken.emit(2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("viewmodel"),
        __metadata("design:type", src_app_shared_models_entity_model__WEBPACK_IMPORTED_MODULE_1__["EntityModel"])
    ], EntityViewComponent.prototype, "modelToview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("action"),
        __metadata("design:type", Object)
    ], EntityViewComponent.prototype, "actionTaken", void 0);
    EntityViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-entity-view',
            template: __webpack_require__(/*! ./entity-view.component.html */ "./src/app/entity/entity-view/entity-view.component.html"),
            styles: [__webpack_require__(/*! ./entity-view.component.css */ "./src/app/entity/entity-view/entity-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntityViewComponent);
    return EntityViewComponent;
}());



/***/ }),

/***/ "./src/app/entity/entity.module.ts":
/*!*****************************************!*\
  !*** ./src/app/entity/entity.module.ts ***!
  \*****************************************/
/*! exports provided: EntityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityModule", function() { return EntityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity-list/entity-list.component */ "./src/app/entity/entity-list/entity-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _entity_add_edit_entity_add_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entity-add-edit/entity-add-edit.component */ "./src/app/entity/entity-add-edit/entity-add-edit.component.ts");
/* harmony import */ var _entity_view_entity_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entity-view/entity-view.component */ "./src/app/entity/entity-view/entity-view.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_Pipes_entity_status_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/Pipes/entity-status-filter.pipe */ "./src/app/shared/Pipes/entity-status-filter.pipe.ts");
/* harmony import */ var _shared_Pipes_entity_type_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/Pipes/entity-type-filter.pipe */ "./src/app/shared/Pipes/entity-type-filter.pipe.ts");
/* harmony import */ var _shared_Pipes_entity_entityname_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/Pipes/entity-entityname-filter.pipe */ "./src/app/shared/Pipes/entity-entityname-filter.pipe.ts");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../general/general.module */ "./src/app/general/general.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var EntityModule = /** @class */ (function () {
    function EntityModule() {
    }
    EntityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_2__["EntityListComponent"], _entity_add_edit_entity_add_edit_component__WEBPACK_IMPORTED_MODULE_9__["EntityAddEditComponent"], _entity_view_entity_view_component__WEBPACK_IMPORTED_MODULE_10__["EntityViewComponent"], _shared_Pipes_entity_status_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["EntityStatusFilter"], _shared_Pipes_entity_type_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["EntityTypeFilter"], _shared_Pipes_entity_entityname_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["EntityEntityNameFilter"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__["InputSwitchModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__["RadioButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_15__["MultiSelectModule"],
                _general_general_module__WEBPACK_IMPORTED_MODULE_19__["GeneralModule"]
            ]
        })
    ], EntityModule);
    return EntityModule;
}());



/***/ }),

/***/ "./src/app/general/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/general/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/general/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/general/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/general/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/general/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/general/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/general/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/general/general.module.ts":
/*!*******************************************!*\
  !*** ./src/app/general/general.module.ts ***!
  \*******************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/general/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/general/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/general/sidebar/sidebar.component.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ndp_message_ndp_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ndp-message/ndp-message.component */ "./src/app/general/ndp-message/ndp-message.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-authorized/not-authorized.component */ "./src/app/general/not-authorized/not-authorized.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var GeneralModule = /** @class */ (function () {
    function GeneralModule() {
    }
    GeneralModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _ndp_message_ndp_message_component__WEBPACK_IMPORTED_MODULE_10__["NdpMessageComponent"], _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_14__["NotAuthorizedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__["SplitButtonModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_15__["OrderModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideModule"]
            ], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _ndp_message_ndp_message_component__WEBPACK_IMPORTED_MODULE_10__["NdpMessageComponent"]]
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ }),

/***/ "./src/app/general/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/general/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-menu{\r\n    right:0;\r\n}\r\n.dropdownH{\r\n\tright: 0px;\r\n    top: 30px;\r\n}\r\n.ui-menu { \r\n    position: absolute;\r\n    /* float: right; */\r\n    top: -15px;\r\n    z-index: 500;\r\n    right: -30px;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.ui-menu .field {\r\n\twidth:300px; background:#a3d94e; color:#fff; padding:5px; border:none; cursor:pointer;\r\n\tfont-family:'lucida sans unicode',sans-serif; font-size:1em;\r\n\tborder:solid 1px #a3d94e;\r\n\ttransition: all .4s ease-in-out;\r\n}\r\n.ui-menu .field:hover {\r\n\tborder:solid 1px #fff; box-shadow:0 0 5px #999\r\n}\r\n.ui-menu>ul.list {\r\n\tposition:relative; \r\n\tz-index:999;\r\n\twidth:100px;\r\n\tmargin:0; padding:10px; list-style:none;\r\n\tbackground:#fff; color:#333; border-radius:5px; box-shadow:0 0 5px #999\r\n}\r\n.ui-menu>ul.list li {\r\n\tpadding:10px;\r\n\t/*border-bottom: solid 1px #ccc;*/\r\n}\r\n.ui-menu>ul.list li:hover {\r\n\tbackground:#a3d94e; color:#fff;border-radius: 50px;\r\n\tcursor: pointer;\r\n}\r\n.ui-menu>ul.list li:last-child { border:none }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0FBQ1g7QUFDQTtDQUNDLFVBQVU7SUFDUCxTQUFTO0FBQ2I7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0NBQ0MsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGNBQWM7Q0FDckYsNENBQTRDLEVBQUUsYUFBYTtDQUMzRCx3QkFBd0I7Q0FFeEIsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyxxQkFBcUIsRUFDMEM7QUFDaEU7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZTtDQUN2QyxlQUFlLEVBQUUsVUFBVSxFQUN3QixpQkFBaUIsRUFDTDtBQUNoRTtBQUNBO0NBQ0MsWUFBWTtDQUNaLGlDQUFpQztBQUNsQztBQUNBO0NBQ0Msa0JBQWtCLEVBQUUsVUFBVSxDQUFDLG1CQUFtQjtDQUNsRCxlQUFlO0FBQ2hCO0FBQ0EsaUNBQWlDLFlBQVkiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1tZW51e1xyXG4gICAgcmlnaHQ6MDtcclxufVxyXG4uZHJvcGRvd25Ie1xyXG5cdHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnVpLW1lbnUgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnVpLW1lbnUgLmZpZWxkIHtcclxuXHR3aWR0aDozMDBweDsgYmFja2dyb3VuZDojYTNkOTRlOyBjb2xvcjojZmZmOyBwYWRkaW5nOjVweDsgYm9yZGVyOm5vbmU7IGN1cnNvcjpwb2ludGVyO1xyXG5cdGZvbnQtZmFtaWx5OidsdWNpZGEgc2FucyB1bmljb2RlJyxzYW5zLXNlcmlmOyBmb250LXNpemU6MWVtO1xyXG5cdGJvcmRlcjpzb2xpZCAxcHggI2EzZDk0ZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxufVxyXG4udWktbWVudSAuZmllbGQ6aG92ZXIge1xyXG5cdGJvcmRlcjpzb2xpZCAxcHggI2ZmZjtcclxuXHQtbW96LWJveC1zaGFkb3c6MCAwIDVweCAjOTk5OyAtd2Via2l0LWJveC1zaGFkb3c6MCAwIDVweCAjOTk5OyBib3gtc2hhZG93OjAgMCA1cHggIzk5OVxyXG59XHJcbi51aS1tZW51PnVsLmxpc3Qge1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuXHR6LWluZGV4Ojk5OTtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRtYXJnaW46MDsgcGFkZGluZzoxMHB4OyBsaXN0LXN0eWxlOm5vbmU7XHJcblx0YmFja2dyb3VuZDojZmZmOyBjb2xvcjojMzMzO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czo1cHg7IC13ZWJraXQtYm9yZGVyLXJhZGl1czo1cHg7IGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdC1tb3otYm94LXNoYWRvdzowIDAgNXB4ICM5OTk7IC13ZWJraXQtYm94LXNoYWRvdzowIDAgNXB4ICM5OTk7IGJveC1zaGFkb3c6MCAwIDVweCAjOTk5XHJcbn1cclxuLnVpLW1lbnU+dWwubGlzdCBsaSB7XHJcblx0cGFkZGluZzoxMHB4O1xyXG5cdC8qYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7Ki9cclxufVxyXG4udWktbWVudT51bC5saXN0IGxpOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiNhM2Q5NGU7IGNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnVpLW1lbnU+dWwubGlzdCBsaTpsYXN0LWNoaWxkIHsgYm9yZGVyOm5vbmUgfSJdfQ== */"

/***/ }),

/***/ "./src/app/general/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/general/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"row no-gutters \">\r\n    <div class=\"col-6\">\r\n      <a style=\"cursor: pointer\" class=\"sidemenu-toggle\" (click)=\"toggleMenu()\">\r\n        <i class=\"icon-menu icon\"></i>\r\n      </a>\r\n      <a routerLink=\"/home\" class=\"logo\">\r\n        <img src=\"./assets/img/etisalat.png\" alt=\"\">\r\n        <span class=\"logo-title\">Etisalat\r\n          <span class=\"title-gray\">Notification Delivery</span>\r\n        </span>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-6 text-right\">\r\n      <div class=\"header-menu\">\r\n        <!--div class=\"notification\">\r\n            <a href=\"#\" class=\"notification-link\">\r\n              <i class=\"icon-notification icon\"></i>\r\n            </a>\r\n            <span class=\"notification-badge\">20</span>\r\n          </div-->\r\n        <div *ngIf=\"userMenu\" class=\"dropdown dropdownH animated fadeInDown faster\" (clickOutside)=\"closeMenu($event)\">\r\n          <ul class=\"list\">\r\n            <li (click)=\"myAccount()\"><span class=\"fas fa-user\"></span>My Account</li>\r\n            <li (click)=\"logout()\"><span class=\"fas fa-sign-out-alt\"></span>Logout</li>\r\n          </ul>\r\n        </div>\r\n        \r\n        <div class=\"logged-user\">\r\n          <div class=\"caption\">\r\n            <div class=\"caption-text text-left caption-text-gutter\">\r\n              <div class=\"logged-user-welcome\">\r\n                Welcome,\r\n              </div>\r\n              <div class=\"logged-user-name\">\r\n                <span>{{user.fName | titlecase}} {{user.lName | titlecase}}</span>\r\n                <i (click)=\"openMenu()\" class=\"fas fa-chevron-down icon\" style=\"cursor:pointer;\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--<div class=\"setting pointer\">-->\r\n          <!--p-splitButton styleClass=\"ui-button-secondary\" icon=\"icon-settings\" [model]=\"items\"></p-splitButton-->\r\n          <!--<span class=\"icon fas fa-cog\"></span>\r\n        </div>-->\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/general/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login-service.service */ "./src/app/login/login-service.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.items = [];
        this.largeMenuFlag = true;
        this.userMenu = false;
        this.justOpened = false;
    }
    HeaderComponent.prototype.openMenu = function () {
        this.userMenu = true;
        this.justOpened = true;
        console.log('openingMenu');
    };
    HeaderComponent.prototype.closeMenu = function (e) {
        if (!this.justOpened) {
            this.userMenu = false;
            console.log('closingMenu');
        }
        this.justOpened = false;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel));
        console.log("user : " + this.user.fName);
        this.items = [
            {
                label: 'My Account', icon: 'pi pi-user', command: function () {
                    _this.myAccount();
                }
            },
            {
                label: 'Logout', icon: 'pi pi-sign-out', command: function () {
                    _this.logout();
                }
            },
        ];
    };
    HeaderComponent.prototype.myAccount = function () {
        this.router.navigate(['myprofile/view']);
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.loginservice.sendLogoutRequest().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err, caught) {
            //debugger;
            console.log("Error in doLogin ", err, caught);
            throw err;
        })).subscribe(function (authTokenModel) {
            localStorage.removeItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.authToken);
            localStorage.removeItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].SESSION_KEYS.userModel);
            _this.router.navigate(['login']);
        });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        var largeMenu = document.getElementsByClassName("sidemenu-large")[0];
        var pageContent = document.getElementsByClassName("page-content")[0];
        var sideMenuTitle = document.querySelectorAll(".sidemenu-link-title");
        var menuCont = document.getElementById('sidem');
        console.log("Large Menu", largeMenu);
        console.log("pageContent", pageContent);
        console.log("sideMenuTitle", sideMenuTitle);
        this.largeMenuFlag = !this.largeMenuFlag;
        // console.log(largeMenuFlag)
        if (this.largeMenuFlag == false) {
            for (var i = 0; i < sideMenuTitle.length; i++) {
                sideMenuTitle[i].classList.add("hide");
            }
            //pageContent.classList.add("sidemenu-active");
            largeMenu.classList.add("hide");
            largeMenu.classList.remove("show");
            menuCont.classList.add('smallM');
            menuCont.classList.remove('largeM');
        }
        else if (this.largeMenuFlag == true) {
            for (var i = 0; i < sideMenuTitle.length; i++) {
                sideMenuTitle[i].classList.remove("hide");
            }
            //pageContent.classList.remove("sidemenu-active");
            largeMenu.classList.add("show");
            largeMenu.classList.remove("hide");
            menuCont.classList.add('largeM');
            menuCont.classList.remove('smallM');
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ndp-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/general/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/general/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_login_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/general/ndp-message/ndp-message.component.css":
/*!***************************************************************!*\
  !*** ./src/app/general/ndp-message/ndp-message.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep button {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n:host ::ng-deep .custom-toast .ui-toast-message {\r\n  color: #ffffff;\r\n  background: #fc466b;\r\n  background: linear-gradient(to right, #3f5efb, #fc466b);\r\n}\r\n\r\n:host ::ng-deep .custom-toast .ui-toast-close-icon {\r\n  color: #ffffff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9uZHAtbWVzc2FnZS9uZHAtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUVuQix1REFBdUQ7QUFDekQ7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhbC9uZHAtbWVzc2FnZS9uZHAtbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjZmM0NjZiO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2Y1ZWZiLCAjZmM0NjZiKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjVlZmIsICNmYzQ2NmIpO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tdG9hc3QgLnVpLXRvYXN0LWNsb3NlLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/general/ndp-message/ndp-message.component.html":
/*!****************************************************************!*\
  !*** ./src/app/general/ndp-message/ndp-message.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-raised ui-button-rounded\">Success</button> -->\r\n\r\n<p-toast position=\"bottom-right\" ></p-toast>\r\n"

/***/ }),

/***/ "./src/app/general/ndp-message/ndp-message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/general/ndp-message/ndp-message.component.ts ***!
  \**************************************************************/
/*! exports provided: NdpMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpMessageComponent", function() { return NdpMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NdpMessageComponent = /** @class */ (function () {
    function NdpMessageComponent(primeNgMsgService, ndpMsgService) {
        this.primeNgMsgService = primeNgMsgService;
        this.ndpMsgService = ndpMsgService;
    }
    NdpMessageComponent.prototype.ngOnInit = function () {
        this.initMsgObservation();
    };
    NdpMessageComponent.prototype.initMsgObservation = function () {
        var _this = this;
        this.ndpMsgService.allMessages().subscribe(function (msgsArray) {
            console.log("Received new Messages ", msgsArray);
            _this.primeNgMsgService.addAll(msgsArray);
        });
    };
    NdpMessageComponent.prototype.onClose = function () { };
    NdpMessageComponent.prototype.showCustom = function () {
        this.primeNgMsgService.add({ key: 'custom', severity: 'info', summary: 'Custom Toast', detail: 'With a Gradient' });
    };
    NdpMessageComponent.prototype.showConfirm = function () {
        this.primeNgMsgService.clear();
        this.primeNgMsgService.addAll([{ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' },
            { key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceedddd' }]);
    };
    NdpMessageComponent.prototype.showSuccess = function () {
        this.primeNgMsgService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    NdpMessageComponent.prototype.onConfirm = function () {
        this.primeNgMsgService.clear('c');
    };
    NdpMessageComponent.prototype.onReject = function () {
        this.primeNgMsgService.clear('c');
    };
    NdpMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-message',
            template: __webpack_require__(/*! ./ndp-message.component.html */ "./src/app/general/ndp-message/ndp-message.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            styles: [__webpack_require__(/*! ./ndp-message.component.css */ "./src/app/general/ndp-message/ndp-message.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"], src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_2__["NdpMessageService"]])
    ], NdpMessageComponent);
    return NdpMessageComponent;
}());



/***/ }),

/***/ "./src/app/general/not-authorized/not-authorized.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/general/not-authorized/not-authorized.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvbm90LWF1dGhvcml6ZWQvbm90LWF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/general/not-authorized/not-authorized.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/general/not-authorized/not-authorized.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-12 \">\r\n    <img src=\"./assets/img/not-authorized.jpg\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/not-authorized/not-authorized.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/general/not-authorized/not-authorized.component.ts ***!
  \********************************************************************/
/*! exports provided: NotAuthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function() { return NotAuthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotAuthorizedComponent = /** @class */ (function () {
    function NotAuthorizedComponent() {
    }
    NotAuthorizedComponent.prototype.ngOnInit = function () {
    };
    NotAuthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-not-authorized',
            template: __webpack_require__(/*! ./not-authorized.component.html */ "./src/app/general/not-authorized/not-authorized.component.html"),
            styles: [__webpack_require__(/*! ./not-authorized.component.css */ "./src/app/general/not-authorized/not-authorized.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotAuthorizedComponent);
    return NotAuthorizedComponent;
}());



/***/ }),

/***/ "./src/app/general/sidebar/sidebar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/general/sidebar/sidebar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollbar {\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYmFyIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/general/sidebar/sidebar.component.html":
/*!********************************************************!*\
  !*** ./src/app/general/sidebar/sidebar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"text\" (click)=\"display = true\" pButton icon=\"pi pi-plus\" label=\"Show\"></button> -->\r\n\r\n<div class=\"sidemenu scrollbar\">\r\n  <div class=\"sidemenu-large show\">\r\n    <a *ngIf=\"checkUserCanAddCampaign()\" routerLink=\"campaigns/create\" ndpActiveLink class=\"button button-primary add-campaign\">\r\n      <i class=\"fas fa-plus icon\"></i>\r\n      <span class=\"text\">Add Campaign</span>\r\n    </a>\r\n    <ul class=\"sidemenu-list\">\r\n\r\n      <li *ngFor=\"let item of items | orderBy: key : reverse\" class=\"sidemenu-item\">\r\n        <a routerLink={{item.actionUrl}} class=\"sidemenu-link\" ndpActiveLink [activeClass]=\"'active'\">\r\n          <i class={{item.icon}}></i>\r\n          <span class=\"sidemenu-link-title\">{{item.label}}</span>\r\n        </a>\r\n      </li>\r\n\r\n      <span class=\"sidemenu-link\">\r\n        <i></i>\r\n        <span class=\"sidemenu-link-title\"></span>\r\n      </span>\r\n      <!-- <li class=\"sidemenu-item\">\r\n\r\n          <a routerLink=\"/campaigns\" ndpActiveLink [activeClass]=\"'active'\" class=\"sidemenu-link\">\r\n            <i class=\"icon-campaigns icon\"></i>\r\n            <span class=\"sidemenu-link-title\">Campaigns</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"sidemenu-item\">\r\n          <a routerLink=\"/groups\" class=\"sidemenu-link\" ndpActiveLink [activeClass]=\"'active'\">\r\n            <i class=\"icon-groups icon\"></i>\r\n            <span class=\"sidemenu-link-title\">Groups</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"sidemenu-item\">\r\n          <a routerLink=\"/smstemplates\" class=\"sidemenu-link\" ndpActiveLink [activeClass]=\"'active'\">\r\n            <span class=\"icon-sms icon sms\"></span>\r\n            <span class=\"sidemenu-link-title\">SMS Templates</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"sidemenu-item\">\r\n          <a href=\"#\" class=\"sidemenu-link\" ndpActiveLink [activeClass]=\"'active'\">\r\n            <span class=\"icon-report icon reports\"></span>\r\n            <span class=\"sidemenu-link-title\">Reports</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"sidemenu-item\">\r\n            <a href=\"/roles\" class=\"sidemenu-link\" ndpActiveLink [activeClass]=\"'active'\">\r\n              <span class=\"icon-report icon sms\"></span>\r\n              <span class=\"sidemenu-link-title\">Roles</span>\r\n            </a>\r\n          </li> -->\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/general/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        //sorting
        this.key = 'label';
        this.reverse = false;
        this.display = true;
    }
    SidebarComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        //debugger;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].SESSION_KEYS.userModel));
        this.items = this.user.menuItemModels;
        console.log("this is item menus => ", this.items);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        if (this.display == true) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    };
    SidebarComponent.prototype.checkUserCanAddCampaign = function () {
        var found = false;
        this.user.privilegeList.forEach(function (p) {
            if (p.privilegeId === 16) {
                found = true;
            }
        });
        return found;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/general/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/general/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/group/add-edit-group/add-edit-group.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/group/add-edit-group/add-edit-group.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2FkZC1lZGl0LWdyb3VwL2FkZC1lZGl0LWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/group/add-edit-group/add-edit-group.component.html":
/*!********************************************************************!*\
  !*** ./src/app/group/add-edit-group/add-edit-group.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content groups-details\">\r\n  <div class=\"groups\">\r\n    <div class=\"section\">\r\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"save()\">\r\n        <div class=\"row\">\r\n          <div *ngIf=\"!isCreate\" class=\"col-12 text-left section-title\">\r\n            Edit Group\r\n          </div>\r\n          <div *ngIf=\"isCreate\" class=\"col-12 text-left section-title\">\r\n            Create Group\r\n          </div>\r\n        </div>\r\n        <div class=\"row \">\r\n          <div class=\"col-4\">\r\n            <div *ngIf=\"group\" class=\"form-input\">\r\n              <label class=\"form-input-label\">Group Name</label>\r\n              <input nfSpecialCharacters   type=\"text\" pInputText formControlName=\"groupName\" [(ngModel)]=\"group.groupName\" />\r\n              <div class=\"invalid-text\" *ngIf=\"!profileForm.required && !!profileForm.nfSpecialCharacters\" >Field Must be valid</div>\r\n            <div *ngIf=\"!!pfc.groupName.errors && (!!pfc.groupName.touched || !!pfc.groupName.dirty || !!pfc.groupName.value)\">\r\n              <div *ngIf=\"!!pfc.groupName.errors.required\" class=\"invalid-text\">Group name is required</div>     \r\n              <div *ngIf=\"!!pfc.groupName.errors.maxlength\" class=\"invalid-text\">Group name must not exceed 25\r\n                characters</div>\r\n                <div class=\"invalid-text\" *ngIf=\"!profileForm.controls.groupName.errors.required && !!profileForm.controls.groupName.errors.nfSpecialCharacters\" >Group Name Must be valid</div>\r\n            </div>\r\n            \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row \">\r\n          <div class=\"col-12 title-medium title gutter-top\">\r\n            Select one format of CSV files\r\n          </div>\r\n        </div>\r\n        <div class=\"row \">\r\n          <div *ngFor=\"let fileType of fileTypes\" class=\"col-4\">\r\n            <div class=\"col-10\">\r\n              <a (click)=\"activeFileType(fileType.id)\"  class=\"caption pointer\">\r\n                <div *ngIf=\"!fileType.isActive\" class=\"caption-media\">\r\n                  <span class=\"icon-paper icon-lg icon-gray\"></span>\r\n                </div>\r\n                <div *ngIf=\"fileType.isActive\" class=\"caption-media\">\r\n                  <div>\r\n                    <span class=\"icon-paper icon-lg icon-green\">\r\n                      <div class=\"position-relative\">\r\n                        <span class=\"icon-checked checked-mark\"></span>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"caption-text caption-text-gutter title-small-muted\">\r\n                  <div class=\"title-small title-robotomedium\">\r\n                    {{fileType.label}}\r\n                  </div>\r\n                  <div class=\"title-xsmall title-gray\">\r\n                    {{fileType.description}}\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div *ngIf=\"fileType.isActive\" class=\"col-2\">\r\n              <a (click)=\"downloudSample()\" class=\"pi pi-cloud-download pointer\" style=\"font-size: 3em\"></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <file-drop dropZoneLabel=\"Drop File to upload\" dropZoneClassName=\"file-drop-zone\"\r\n          contentClassName=\"file-drop-content\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\"\r\n          (onFileLeave)=\"fileLeave($event)\" [showBrowseBtn]=\"true\" browseBtnClassName=\"button button-green ml-2\"\r\n          browseBtnLabel=\"Browse\">\r\n        </file-drop>\r\n        <div *ngIf=\"fileUploaded\" class=\"row \">\r\n          <div class=\"col-12 text-center my-auto p-2\">\r\n            <b>{{ fileUploaded.relativePath }}</b><span (click)=\"clearUploadedFile()\"\r\n              class=\"fas fa-times pointer ml-4\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-5 pt-3 pb-2\">\r\n          <div class=\"col-12 justify-content-center text-right\">\r\n            <button type=\"submit\" class=\"button button-green mr-2 \">\r\n              Save Group\r\n            </button>\r\n            <button (click)=\"cancel()\" class=\"button button-black mr-2\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/group/add-edit-group/add-edit-group.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/group/add-edit-group/add-edit-group.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEditGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditGroupComponent", function() { return AddEditGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/group-model */ "./src/app/shared/models/group-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group.service */ "./src/app/group/group.service.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var src_app_shared_models_file_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/file-model */ "./src/app/shared/models/file-model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var src_app_shared_services_lookups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/lookups.service */ "./src/app/shared/services/lookups.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddEditGroupComponent = /** @class */ (function () {
    function AddEditGroupComponent(route, routeLink, groupService, lookupsService, messageService, location) {
        this.route = route;
        this.routeLink = routeLink;
        this.groupService = groupService;
        this.lookupsService = lookupsService;
        this.messageService = messageService;
        this.location = location;
        this.fileModel = new src_app_shared_models_file_model__WEBPACK_IMPORTED_MODULE_5__["FileModel"];
        this.files = [];
        this.fileTypes = [];
        this.isCreate = true;
        this.csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '',
            decimalseparator: '.',
            showLabels: false,
            showTitle: false,
            useBom: true,
            noDownload: false,
        };
        this.submitted = false;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(25)])
        });
        this.sample0 = [
            { number: '01112345679' },
            { number: '01112345678' },
            { number: '01112345677' },
            { number: '01112345676' },
            { number: '01112345675' }
        ];
        this.sample1 = [
            { number: '01112345679', name: 'Ahmed' },
            { number: '01112345678', name: 'Asmaa' },
            { number: '01112345677', name: 'Yasmine' },
            { number: '01112345676', name: 'Hossam' },
            { number: '01112345675', name: 'Alaa' }
        ];
        this.sample2 = [
            { number: '01112345679', name: 'Name=Ahmed', prize: 'Prize=100' },
            { number: '01112345678', name: 'Name=Asmaa', prize: 'Prize=200' },
            { number: '01112345677', name: 'Name=Yasmine', prize: 'Prize=300' },
            { number: '01112345676', name: 'Name=Hossam', prize: 'Prize=400' },
            { number: '01112345675', name: 'Name=Alaa', prize: 'Prize=500' }
        ];
    }
    Object.defineProperty(AddEditGroupComponent.prototype, "pfc", {
        get: function () { return this.profileForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddEditGroupComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_7__["Defines"].SESSION_KEYS.userModel));
        if (this.route.snapshot.routeConfig.path == "groups/get/:id") {
            var id = +this.route.snapshot.paramMap.get('id');
            this.getGroup(id);
            this.isCreate = false;
        }
        else {
            this.group = new src_app_shared_models_group_model__WEBPACK_IMPORTED_MODULE_1__["GroupModel"];
        }
        this.loadFileTypes();
    };
    AddEditGroupComponent.prototype.activeFileType = function (id) {
        var _this = this;
        var isEditWithSameFileType = false;
        if (!this.isCreate) {
            if (this.group.fileType === id) {
                isEditWithSameFileType = true;
            }
        }
        if (this.isCreate || isEditWithSameFileType) {
            this.fileTypes.forEach(function (fileType) {
                if (fileType.id === id) {
                    fileType.isActive = true;
                    _this.fileModel.fileType = fileType.id;
                }
                else {
                    fileType.isActive = false;
                }
            });
        }
    };
    AddEditGroupComponent.prototype.loadFileTypes = function () {
        var _this = this;
        this.lookupsService.getfileTypes()
            .then(function (data) { return _this.setFileTypes(data.responsePayload); });
    };
    AddEditGroupComponent.prototype.setFileTypes = function (fileTypes) {
        this.fileTypes = fileTypes;
        this.activeFileType(0);
    };
    AddEditGroupComponent.prototype.getGroup = function (id) {
        var _this = this;
        this.groupService.get(id)
            .subscribe(function (response) {
            _this.group = response.responsePayload;
            _this.activeFileType(_this.group.fileType);
        });
    };
    AddEditGroupComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    AddEditGroupComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    AddEditGroupComponent.prototype.dropped = function (event) {
        var _this = this;
        this.fileUploaded = event.files[0];
        if (event.files.length == 1) {
            if (this.fileUploaded.fileEntry.isFile) {
                if (!this.fileUploaded.relativePath.includes(".csv", 0)) {
                    this.messageService.addWarnings(["Please Upload csv File!"]);
                    this.fileUploaded = null;
                    return;
                }
                var fileEntry = this.fileUploaded.fileEntry;
                fileEntry.file(function (file) {
                    if (file.size > 20 * 1024 * 1024) {
                        _this.messageService.addWarnings(["The file size should be <= 2 MB!"]);
                        _this.fileUploaded = null;
                        return;
                    }
                    _this.fileModel.fileName = file.name;
                    var reader = _this.createFileReader(file);
                    reader.readAsText(file);
                });
            }
            else {
                var fileEntry = this.fileUploaded.fileEntry;
            }
        }
        else if (this.files.length > 1) {
            this.messageService.addWarnings(["Please Upload One File!"]);
        }
    };
    AddEditGroupComponent.prototype.createFileReader = function (file) {
        var _this = this;
        var text;
        var reader = new FileReader();
        reader.onloadend = (function () {
            text = reader.result;
            var line;
            if (text.toString().indexOf('\n') > 1) {
                line = text.toString().substr(0, text.toString().indexOf('\n'));
            }
            else {
                line = text.toString();
            }
            if (text.toString().trim() === '') {
                _this.messageService.addWarnings(["File is empty!"]);
                _this.fileUploaded = null;
                return null;
            }
            else if (!_this.checkForFileType(line)) {
                _this.messageService.addWarnings(["Uplouded File is not matched with selected type!"]);
                _this.fileUploaded = null;
                return null;
            }
            var base64String = js_base64__WEBPACK_IMPORTED_MODULE_12__["Base64"].encode(text.toString());
            _this.fileModel.b64String = base64String;
            _this.messageService.addInfo("File uploaded successfully!");
        });
        return reader;
    };
    AddEditGroupComponent.prototype.downloudSample = function () {
        var _this = this;
        this.fileTypes.forEach(function (fileType) {
            if (fileType.isActive === true) {
                if (fileType.id === 0)
                    new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](_this.sample0, "Sample", _this.csvOptions);
                else if (fileType.id === 1)
                    new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](_this.sample1, "Sample", _this.csvOptions);
                else
                    new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](_this.sample2, "Sample", _this.csvOptions);
            }
        });
    };
    AddEditGroupComponent.prototype.save = function () {
        this.submitted = true;
        if (this.profileForm.valid) {
            if (this.fileUploaded !== undefined) {
                this.group.fileRequestModel = this.fileModel;
                if (!this.isCreate) {
                    this.updateGroup();
                }
                else {
                    this.createGroup();
                }
            }
            else {
                this.messageService.addError('File is mandatory!', '');
            }
        }
    };
    AddEditGroupComponent.prototype.createGroup = function () {
        var _this = this;
        this.group.createdBy = this.user.id;
        this.group.ownerEntity = this.user.entityId;
        this.group.groupStatus = 1;
        this.group.dialsCount = 0;
        this.groupService.create(this.group)
            .subscribe(function (response) {
            console.log(response.responsePayload);
            if (response.status === 0) {
                _this.routeLink.navigateByUrl('groups');
            }
        });
    };
    AddEditGroupComponent.prototype.updateGroup = function () {
        var _this = this;
        this.group.groupStatus = 1;
        this.groupService.update(this.group)
            .subscribe(function (response) {
            console.log(response.responsePayload);
            if (response.status === 0) {
                _this.routeLink.navigateByUrl('groups');
            }
        });
    };
    AddEditGroupComponent.prototype.cancel = function () {
        this.routeLink.navigateByUrl("groups");
    };
    AddEditGroupComponent.prototype.clearUploadedFile = function () {
        this.fileUploaded = undefined;
    };
    AddEditGroupComponent.prototype.checkForFileType = function (line) {
        console.log("line", line);
        console.log("selected file type", this.fileModel.fileType);
        var numberOfComma = line.split(",").length - 1;
        console.log("numberOfComma ", numberOfComma);
        if (this.fileModel.fileType === 0 && numberOfComma === 0) {
            return true;
        }
        else if (this.fileModel.fileType === 1 && numberOfComma === 1) {
            return true;
        }
        else if (this.fileModel.fileType === 2 && numberOfComma >= 2) {
            return true;
        }
        else {
            return false;
        }
    };
    AddEditGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit-group',
            template: __webpack_require__(/*! ./add-edit-group.component.html */ "./src/app/group/add-edit-group/add-edit-group.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-group.component.css */ "./src/app/group/add-edit-group/add-edit-group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
            src_app_shared_services_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"],
            src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__["NdpMessageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], AddEditGroupComponent);
    return AddEditGroupComponent;
}());



/***/ }),

/***/ "./src/app/group/group-list/group-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/group/group-list/group-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLWxpc3QvZ3JvdXAtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/group/group-list/group-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/group/group-list/group-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"hideDropDown()\" class=\"page-content\">\r\n  <div class=\"groups\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"p-col-5\">\r\n        <div class=\"page-title\">\r\n          Groups Of Dials\r\n        </div>\r\n      </div>\r\n      <div class=\"p-col-7 col-lg-12 text-right\">\r\n        <div class=\"row\">\r\n          <div class=\"p-col-8\">\r\n            <div class=\"search-input\">\r\n              <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search By Group Name\">\r\n              <i class=\"icon-search icon\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            <button type=\"button\" ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE\"\r\n              (successHandler)=\"create()\" label=\"Create Group\" class=\"button button-green\">Create Group</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"groups\">\r\n      <div *ngIf=\"setFilteredGroups(groups | groupNameFilter: filter)\"></div>\r\n      <div class=\"campaigns-list\"\r\n        *ngFor=\"let group of filteredGroups | paginate: { itemsPerPage: perPage, currentPage: p }\">\r\n\r\n        <div class=\"row confirmDialog animated fadeIn faster text-center\"\r\n          *ngIf=\"deleteConfirm && (deleteConfirmId == group.groupId)\">\r\n          <div class=\"col-12\">Are you sure you want to delete <b>{{selectedGroup.groupName}}</b> group?</div>\r\n          <div class=\"col-12 mt-2\">\r\n            <button class=\"button button-green mr-4\" (click)=\"onConfirm()\">DELETE</button>\r\n            <button class=\"button button-black \" (click)=\"onReject()\">CANCEL</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"(selectedGroup === group)\" [ngClass]=\"{'hide':!dropDown}\" class=\"dropdown animated flipInX faster\">\r\n          <ul class=\"list\">\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.UPDATE\" [targetId]=\"group.groupId\"\r\n              (successHandler)=\"update($event)\"><span class=\"fas fa-edit\"></span>Edit</li>\r\n\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.FAILED_DIALS\" [targetId]=\"group.groupId\"\r\n              (successHandler)=\"downloadFailedCSV(group)\"><span class=\"icon-arrow-right\"></span>Failed\r\n              Dials</li>\r\n            <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.DELETE\" [targetId]=\"group.groupId\"\r\n              (successHandler)=\"showConfirm()\"><span class=\"fas fa-trash\"></span>Delete\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"row campaigns-item no-gutters my-auto\">\r\n          <div class=\"col-4 my-auto\">\r\n            <span class=\"fas fa-user-friends color-gray title-small mr-3\"\r\n              style=\"font-size: 18px; margin-top: 10px; margin-bottom: 10px;\"></span>\r\n            <span class=\"heading-6 title-robotomedium\">{{group.groupName}}</span>\r\n          </div>\r\n          <div class=\"col-2 my-auto\">\r\n            <div *ngIf=\"group.dialsCount !== null && group.dialsCount > 0\" class=\"col-12 my-auto\">\r\n              <span class=\"mr-2\" style=\"font-size:14px; font-weight:600;\">{{group.dialsCount}}</span>\r\n              <span class=\"fas fa-phone color-green\" style=\"font-size: 14px;\"></span>\r\n            </div>\r\n            <div *ngIf=\"group.dialsCount === null || group.dialsCount === 0\" class=\"col-12 my-auto\">\r\n              <span class=\"mr-2\" style=\"font-size:14px; font-weight:600; color: #cc0000\">NO DIALS</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2 my-auto\">\r\n            <button *ngIf=\"group.dialsCount !== null || group.dialsCount > 0\" type=\"button\" label=\"Export Dials\"\r\n              class=\"button button-green\" ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.LIST_DIALS\"\r\n              [targetId]=\"group.groupId\" (successHandler)=\"downloadCSV(group)\"><span\r\n                class=\"icon-arrow-right mr-2\"></span>Export\r\n              Dials</button>\r\n          </div>\r\n          <div class=\"p-col-2 my-auto\">\r\n            <button ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.SEARCH_DIALS\" [targetId]=\"group.groupId\"\r\n              (successHandler)=\"sidenavOpened(group)\" type=\"button\" label=\"Export Dials\"\r\n              class=\"button button-green\"><span class=\"fas fa-search mr-2\"></span>Search for Dial</button>\r\n          </div>\r\n          <div class=\"col-1 my-auto text-right\">\r\n            <a (click)=\"dropDownOpen(group)\" class=\"campaigns-item-actions-link\">\r\n              <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"filteredGroups.length == 0\">\r\n    <div class=\"row mt-4 animated fadeIn fast\">\r\n      <div class=\"col-12 mt-4 text-center\">\r\n        <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n        <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Groups Found</b></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"groups\" class=\"ngx-pagination\">\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n<p-sidebar [showCloseIcon]=\"false\" [(visible)]=\"visibleSidebar\" [blockScroll]=\"true\" position=\"right\"\r\n  [style]=\"{padding:0}\" (onHide)=\"sidenavClosed()\">\r\n  <div class=\"container\" *ngIf=\"selectedGroup\">\r\n    <div class=\"row p-3\">\r\n      <div class=\"page-title mb-2\">\r\n        {{selectedGroup.groupName}}\r\n      </div>\r\n    </div>\r\n    <div class=\"row p-3\">\r\n      <div class=\"search-input\">\r\n        <input [(ngModel)]=\"msisdnSearch\" (change)=\"searchDials()\" type=\"text\" class=\"\"\r\n          placeholder=\"Start typing to retrieve dials\">\r\n        <a (click)=\"searchDials()\" class=\"icon-search icon\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row animated fadeIn faster\">\r\n      <div class=\"col-12\" *ngIf=\"groupMsisdnList\">\r\n        <div\r\n          *ngFor=\"let groupMsisdn of groupMsisdnList | paginate: { itemsPerPage: perDialsPage, currentPage: dialsPage }\"\r\n          class=\"title-medium\">\r\n\r\n          <div class=\"row no-gutters p-1 pl-2 pointer\" [ngClass]=\"{ 'highlighted' : groupMsisdn.msisdn === expandedMsisdn && showExtenedMsisdn,\r\n          'highlighter': !(groupMsisdn.msisdn === expandedMsisdn && showExtenedMsisdn)}\">\r\n            <div class=\"col-10 p-1 my-auto\" style=\"font-size: 14px;\">{{groupMsisdn.msisdn}}</div>\r\n            <div class=\"col-2 p-1 text-right my-auto\">\r\n              <a class=\"icon-delete\" (click)=\"openExpandMsisdn(groupMsisdn.msisdn)\"></a>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"groupMsisdn.msisdn === expandedMsisdn && showExtenedMsisdn\"\r\n            [ngClass]=\"{ 'highlighted' : groupMsisdn.msisdn === expandedMsisdn && showExtenedMsisdn}\">\r\n            <div class=\"  row pl-4 pr-1\">\r\n              <div style=\"font-size:12px;\">\r\n                Delete this record?\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-2 pl-2 pr-1 pb-2\">\r\n              <div class=\"col-12\">\r\n                <a (click)=\"deleteMsisdn()\" class=\"button button-green mr-2\" style=\"font-size: 12px; padding: 3px 10px;\r\n                border-radius: 15px !important;\">Yes</a>\r\n                <a (click)=\"cancelDeleteMsisdn()\" class=\"button button-grey\" style=\"font-size: 12px; padding: 3px 10px;\r\n                border-radius: 15px !important; color:#fff\">No</a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"groupMsisdnList\" class=\"ngx-pagination\">\r\n        <pagination-controls directionLinks=\"false\" autoHide=\"true\" (pageChange)=\"dialsPage = $event\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</p-sidebar>"

/***/ }),

/***/ "./src/app/group/group-list/group-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/group/group-list/group-list.component.ts ***!
  \**********************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../group.service */ "./src/app/group/group.service.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_models_group_msisdn_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/group-msisdn-model */ "./src/app/shared/models/group-msisdn-model.ts");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GroupListComponent = /** @class */ (function () {
    function GroupListComponent(groupService, ndpMessageService, router, messageService) {
        this.groupService = groupService;
        this.ndpMessageService = ndpMessageService;
        this.router = router;
        this.messageService = messageService;
        this.p = 1;
        this.perPage = 10;
        this.dialsPage = 1;
        this.perDialsPage = 10;
        this.visibleSidebar = false;
        this.csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '',
            decimalseparator: '.',
            showLabels: false,
            showTitle: false,
            useBom: true,
            noDownload: false,
        };
        this.csvFailedOptions = {
            fieldSeparator: '',
            quoteStrings: '',
            decimalseparator: '.',
            showLabels: false,
            showTitle: false,
            useBom: true,
            noDownload: false,
        };
        this.deleteConfirm = false;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].API_CRUD;
        this.listAccessLevel = 0;
        this.editAccessLevel = 0;
        this.deleteAccessLevel = 0;
        this.deleteDialsAccessLevel = 0;
        this.exportDialsAccessLevel = 0;
    }
    GroupListComponent.prototype.ngOnInit = function () {
        console.log("this.authorizationUrl = this.groupService.authorizationUrl => ", this.groupService.authorizationUrl);
        this.authorizationUrl = this.groupService.authorizationUrl;
        this.setAccessLevel();
        this.listGroup();
    };
    GroupListComponent.prototype.setAccessLevel = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].SESSION_KEYS.userModel));
        this.user.privilegeList.forEach(function (rolePrivilege) {
            switch (rolePrivilege.privilegeId) {
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].PRIVILEGES.GROUP.EDIT: {
                    _this.editAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].PRIVILEGES.GROUP.LIST: {
                    _this.listAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].PRIVILEGES.GROUP.DELETE: {
                    _this.deleteAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].PRIVILEGES.GROUP.CREATE: {
                    _this.canCreate = true;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].PRIVILEGES.GROUP.DELETE_DIALS: {
                    _this.deleteDialsAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
                case src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].PRIVILEGES.GROUP.EXPORT_DIALS: {
                    _this.exportDialsAccessLevel = rolePrivilege.accessLevel;
                    break;
                }
            }
        });
    };
    GroupListComponent.prototype.listGroup = function () {
        var _this = this;
        this.groupService.listGroupPromise().then(function (data) {
            _this.groups = new Array();
            _this.groups = data.responsePayload;
            _this.groups.forEach(function (group) {
                if (group.createdBy === _this.user.id) {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.OWN) {
                        group.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.OWN) {
                        group.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.OWN) {
                        group.canView = true;
                    }
                    if (_this.deleteDialsAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.OWN) {
                        group.canDeleteDials = true;
                    }
                    if (_this.exportDialsAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.OWN) {
                        group.canExport = true;
                    }
                }
                else if (group.ownerEntity === _this.user.entityId) {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.ENTITY) {
                        group.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.ENTITY) {
                        group.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.ENTITY) {
                        group.canView = true;
                    }
                    if (_this.deleteDialsAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.ENTITY) {
                        group.canDeleteDials = true;
                    }
                    if (_this.exportDialsAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.ENTITY) {
                        group.canExport = true;
                    }
                }
                else {
                    if (_this.editAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        group.canEdit = true;
                    }
                    if (_this.deleteAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        group.canDelete = true;
                    }
                    if (_this.listAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        group.canView = true;
                    }
                    if (_this.deleteDialsAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        group.canDeleteDials = true;
                    }
                    if (_this.exportDialsAccessLevel >= src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_8__["Defines"].ACCESS_LEVELS.EVERYTHING) {
                        group.canExport = true;
                    }
                }
            });
            _this.filteredGroups = _this.groups;
        });
    };
    GroupListComponent.prototype.deleteGroup = function () {
        var _this = this;
        var index = this.groups.findIndex(function (group) { return _this.selectedGroup.groupId === group.groupId; });
        var groupToDelete = this.groups[index];
        this.groupService.delete(this.selectedGroup.groupId).subscribe(function (resp) {
            if (resp.status === 0) {
                _this.groups = _this.groups.filter(function (x) { return x.groupId !== groupToDelete.groupId; });
            }
        });
        this.dropDownClose();
    };
    GroupListComponent.prototype.showConfirm = function (event) {
        debugger;
        this.deleteConfirm = true;
        this.deleteConfirmId = this.selectedGroup.groupId;
        event.stopPropagation();
    };
    GroupListComponent.prototype.onConfirm = function () {
        this.deleteConfirm = false;
        this.deleteConfirmId = null;
        this.deleteGroup();
        this.dropDownClose();
    };
    GroupListComponent.prototype.onReject = function () {
        this.deleteConfirm = false;
        this.deleteConfirmId = null;
        this.dropDownClose();
    };
    GroupListComponent.prototype.dropDownOpen = function (group) {
        console.log('opening', group);
        this.selectedGroup = group;
        this.dropDownId = group.groupId;
        this.dropDownClick = 0;
        this.dropDown = true;
    };
    GroupListComponent.prototype.dropDownClose = function () {
        this.selectedGroup = null;
        this.dropDown = false;
    };
    GroupListComponent.prototype.hideDropDown = function () {
        this.dropDownClick++;
        if (this.dropDown && this.dropDownClick > 1) {
            this.dropDown = false;
            this.dropDownId = null;
        }
    };
    GroupListComponent.prototype.update = function (event) {
        console.log("Anahooo");
        this.router.navigateByUrl('/groups/get/' + this.selectedGroup.groupId);
        event.stopPropagation();
    };
    GroupListComponent.prototype.create = function () {
        this.router.navigateByUrl('/groups/create');
    };
    GroupListComponent.prototype.sidenavOpened = function (group) {
        this.selectedGroup = group;
        this.visibleSidebar = true;
    };
    GroupListComponent.prototype.sidenavClosed = function () {
        this.selectedGroup = null;
        this.visibleSidebar = false;
        this.groupMsisdnList = null;
        this.msisdnSearch = null;
    };
    GroupListComponent.prototype.searchDials = function () {
        var _this = this;
        var requestModel = new src_app_shared_models_group_msisdn_model__WEBPACK_IMPORTED_MODULE_5__["GroupMsisdnModel"]();
        requestModel.groupId = this.selectedGroup.groupId;
        requestModel.msisdn = this.msisdnSearch;
        this.groupService.searchDials(requestModel).subscribe(function (response) { return _this.groupMsisdnList = response.responsePayload; });
    };
    GroupListComponent.prototype.openExpandMsisdn = function (expandedMsisdn) {
        this.expandedMsisdn = expandedMsisdn;
        this.showExtenedMsisdn = true;
    };
    GroupListComponent.prototype.cancelDeleteMsisdn = function () {
        this.expandedMsisdn = null;
        this.showExtenedMsisdn = false;
    };
    GroupListComponent.prototype.deleteMsisdn = function () {
        var requestModel = new src_app_shared_models_group_msisdn_model__WEBPACK_IMPORTED_MODULE_5__["GroupMsisdnModel"]();
        requestModel.groupId = this.selectedGroup.groupId;
        requestModel.msisdn = this.expandedMsisdn;
        this.groupService.deleteDial(requestModel).subscribe();
        var index;
        debugger;
        for (var _i = 0, _a = this.groupMsisdnList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.msisdn === this.expandedMsisdn) {
                index = this.groupMsisdnList.indexOf(entry);
            }
        }
        if (index != -1) {
            this.groupMsisdnList.splice(index, 1);
        }
        this.showExtenedMsisdn = false;
    };
    GroupListComponent.prototype.downloadCSV = function (group) {
        var _this = this;
        this.groupService.getAllDials(group.groupId).then(function (data) {
            return _this.downloud(group, data.responsePayload);
        });
    };
    GroupListComponent.prototype.downloadFailedCSV = function (group) {
        var _this = this;
        this.groupService.getAllFailedDials(group.groupId).then(function (data) { return _this.downloudFailedDials(group, data.responsePayload); });
    };
    GroupListComponent.prototype.downloud = function (group, exportedList) {
        console.log("List is =>", exportedList);
        if (exportedList != null && exportedList.length != 0) {
            exportedList.forEach(function (dial) {
                if (dial.parameters === null) {
                    delete dial["parameters"];
                }
            });
            new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](exportedList, group.groupName, this.csvOptions);
        }
        else {
            this.ndpMessageService.addWarnings(["There is no dials to export"]);
        }
    };
    GroupListComponent.prototype.downloudFailedDials = function (group, exportedList) {
        if (exportedList != null && exportedList.length != 0) {
            console.log("exportedList => ", exportedList);
            new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](exportedList, group.groupName, this.csvFailedOptions);
        }
        else {
            // this.ndpMessageService.addWarnings(["There is no dials to export"]);
        }
    };
    GroupListComponent.prototype.setFilteredGroups = function (filtered) {
        this.filteredGroups = filtered;
    };
    GroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-group-list',
            template: __webpack_require__(/*! ./group-list.component.html */ "./src/app/group/group-list/group-list.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
            styles: [__webpack_require__(/*! ./group-list.component.css */ "./src/app/group/group-list/group-list.component.css")]
        }),
        __metadata("design:paramtypes", [_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"], src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_2__["NdpMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], GroupListComponent);
    return GroupListComponent;
}());



/***/ }),

/***/ "./src/app/group/group.module.ts":
/*!***************************************!*\
  !*** ./src/app/group/group.module.ts ***!
  \***************************************/
/*! exports provided: GroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-group/add-edit-group.component */ "./src/app/group/add-edit-group/add-edit-group.component.ts");
/* harmony import */ var _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-list/group-list.component */ "./src/app/group/group-list/group-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _shared_Pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/Pipes/group-filter.pipe */ "./src/app/shared/Pipes/group-filter.pipe.ts");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var GroupModule = /** @class */ (function () {
    function GroupModule() {
    }
    GroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__["AddEditGroupComponent"], _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_3__["GroupListComponent"], _shared_Pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["GroupFilterPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [
                _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__["AddEditGroupComponent"],
                _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_3__["GroupListComponent"]
            ]
        })
    ], GroupModule);
    return GroupModule;
}());



/***/ }),

/***/ "./src/app/group/group.service.ts":
/*!****************************************!*\
  !*** ./src/app/group/group.service.ts ***!
  \****************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupService = /** @class */ (function (_super) {
    __extends(GroupService, _super);
    function GroupService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    GroupService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    GroupService.prototype.create = function (model) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.CREATE;
        console.log("model before create is => ", model);
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('create group: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.update = function (model) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.UPDATE;
        console.log("model before update is => ", model);
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('update group: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.get = function (id) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](id, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('get group by id: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.delete = function (id) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](id, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('delete group by id: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.list = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](null, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (list_) { return console.log('get List group: ' + list_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.listGroupPromise = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.LIST;
        return this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](null, ""), this.httpOptions).toPromise();
    };
    GroupService.prototype.searchDials = function (model) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS
            + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.SEARCH_DIALS;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (list_) { return console.log('get List dials: ' + list_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.getAllDials = function (model) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS
            + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.LIST_DIALS;
        return this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).toPromise();
    };
    GroupService.prototype.getAllFailedDials = function (model) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS
            + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.FAILED_DIALS;
        return this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).toPromise();
    };
    GroupService.prototype.deleteDial = function (model) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.GROUPS
            + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.DELETE_DIALS;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (list_) { return console.log('delete dial: ' + list_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    GroupService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupService);
    return GroupService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/home/home-page/home-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content home\">\r\n    <div class=\"campaigns\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"page-title\">\r\n                    System Overview\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"canListCampaigns()\" class=\"col-12 mt-4\">\r\n                <ndp-campaign-stats [refreshInterval]=\"15000\"></ndp-campaign-stats>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].SESSION_KEYS.userModel));
    };
    HomePageComponent.prototype.canListCampaigns = function () {
        var found = false;
        this.user.privilegeList.forEach(function (p) {
            if (p.privilegeId === 17) {
                found = true;
            }
        });
        return found;
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_campaigns_campaigns_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/campaigns/campaigns.module */ "./src/app/campaigns/campaigns.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_campaigns_campaigns_module__WEBPACK_IMPORTED_MODULE_5__["CampaignsModule"]
            ],
            exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/login/forget-password/forget-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/login/forget-password/forget-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback {\r\n     display: block;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssY0FBYzs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/forget-password/forget-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/login/forget-password/forget-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"page-content-container login\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 text-left\">\r\n                    <div class=\"row\">\r\n                        <img src=\"./assets/img/etisalat-logo01 copy.png\" class=\"ml-3\">\r\n                    </div>\r\n                    <div class=\"row mt-5\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"title-xlarge\">\r\n                                Account recovery\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <form [formGroup]=\"formGroup\">\r\n                        <div *ngIf=\"!statusResponse\" class=\"row\">\r\n\r\n                            <div class=\"col-7 mt-5\">\r\n                                <div class=\"form-input form-input-timepicker \">\r\n                                    <label class=\"form-input-label\">Email </label>\r\n                                    <input formControlName=\"mail\" class=\"input\" id=\"float-input\" type=\"text\" size=\"30\"\r\n                                        pInputText [(ngModel)]=\"email\">\r\n                                    <label *ngIf=\"statusResponse\" class=\"title-large\">{{statusResponse}}</label>\r\n                                    <div *ngIf=\"submitted && !!getformGroupControlls.mail.errors\"\r\n                                        class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"!!getformGroupControlls.mail.errors.required\">Please fill in the\r\n                                            missing fields</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n                    <div *ngIf=\"statusResponse\" class=\"row\">\r\n                        <div class=\"col-7 mt-5\">\r\n                            <label *ngIf=\"statusResponse\" class=\"title-large\">{{statusResponse}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-5\">\r\n                        <button *ngIf=\"!statusResponse\" (click)=\"forget()\" type=\"button\" label=\"Go login\"\r\n                            class=\"button-green button wide-button ml-2\">\r\n                            Submit\r\n                        </button>\r\n\r\n                        <button type=\"button\" (click)=\"back()\" class=\"button-green button wide-button ml-2\">\r\n                            Back\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <img src=\"./assets/img/login-img.svg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/forget-password/forget-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/login/forget-password/forget-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-service.service */ "./src/app/login/login-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(route, loginService, router, formBuilder) {
        this.route = route;
        this.loginService = loginService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    Object.defineProperty(ForgetComponent.prototype, "getformGroupControlls", {
        get: function () { return this.formGroup.controls; },
        enumerable: true,
        configurable: true
    });
    ForgetComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            mail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ForgetComponent.prototype.forget = function () {
        var _this = this;
        this.submitted = true;
        debugger;
        if (this.formGroup.invalid) {
            return;
        }
        this.loginService.forgot(this.email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err, caught) {
            //debugger;
            console.log("ERror in forget ", err, caught);
            throw err;
        })).subscribe(function (response) { return _this.statusResponse = response.statusMessage; });
    };
    ForgetComponent.prototype.back = function () {
        this.router.navigate(['login']);
    };
    ForgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ndp-forget',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/login/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/login/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/login/login-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/login/login-service.service.ts ***!
  \************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_models_login_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/login-request */ "./src/app/shared/models/login-request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginServiceService = /** @class */ (function (_super) {
    __extends(LoginServiceService, _super);
    function LoginServiceService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    //Not needed here
    LoginServiceService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.LOGIN;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    // public sendLoginRequest(uesrname: string, password: string): Observable<AuthToken> {
    //   //debugger;
    //   let apiUrl = this.backendUrl + this.nonSecureApi + Defines.API_ENDPOINTS.LOGIN;
    //   let obs: Observable<AuthToken> = this.http.post<AuthToken>(apiUrl, new LoginRequest(
    //     uesrname, password)
    //     , this.httpOptions).pipe(map((apiResponse: any) => new AuthToken(apiResponse.responsePayload.token, apiResponse.responsePayload.user)));
    //   //debugger;
    //   return obs;
    // }
    LoginServiceService.prototype.sendLoginRequest = function (uesrname, password) {
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.LOGIN;
        var obs = this.http.post(apiUrl, new _shared_models_login_request__WEBPACK_IMPORTED_MODULE_5__["LoginRequest"](uesrname, password), this.httpOptions);
        return obs;
    };
    LoginServiceService.prototype.sendLogoutRequest = function () {
        //debugger;
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.logout;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](null, ""), this.httpOptions);
        //.pipe(map((apiResponse: any) => new AuthToken(apiResponse.responsePayload.token, apiResponse.responsePayload.user)));
        //debugger;
        return obs;
    };
    LoginServiceService.prototype.forgot = function (email) {
        //debugger;
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.RESET + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.FORGOT;
        var result = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](email, ""), this.httpOptions);
        //.pipe(map((apiResponse: any) => new AuthToken(apiResponse.responsePayload.token, apiResponse.responsePayload.user)));
        //debugger;
        return result;
    };
    LoginServiceService.prototype.resetPassword = function (model) {
        //debugger;
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.RESET + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.RESET;
        var result = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](model, ""), this.httpOptions);
        return result;
    };
    LoginServiceService.prototype.resetExpiredPassword = function (model) {
        //debugger;
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.RESET + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.RESET_EXPIRED;
        var result = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](model, ""), this.httpOptions);
        return result;
    };
    LoginServiceService.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    LoginServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginServiceService);
    return LoginServiceService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/login/forget-password/forget-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/login/reset-password/reset-password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_expiry_password_reset_expiry_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-expiry-password/reset-expiry-password.component */ "./src/app/login/reset-expiry-password/reset-expiry-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"], _reset_expiry_password_reset_expiry_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetExpiryPassComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"], _reset_expiry_password_reset_expiry_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetExpiryPassComponent"]
            ],
            bootstrap: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n    /* margin-left: -230px; */\r\n}\r\n.form-input input {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(2.25rem + 2px);\r\n    border: 0px;\r\n    border-bottom: 1px solid #00000024;\r\n    transition: all 0.3s;\r\n    padding: 0px 2px;\r\n    background: transparent;\r\n}\r\nbody a {\r\n    color: #464852 !important;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtMjMwcHg7ICovXHJcbn1cclxuLmZvcm0taW5wdXQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyNDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgcGFkZGluZzogMHB4IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmJvZHkgYSB7XHJcbiAgICBjb2xvcjogIzQ2NDg1MiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page ml-4\">\r\n  <div class=\"login\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-left\">\r\n          <div class=\"row\">\r\n            <img [src]=\"etisalatLogo\" class=\"ml-3\">\r\n          </div>\r\n          <div class=\"row mt-5\">\r\n            <div class=\"col-12\">\r\n              <div class=\"title-medium-regular color-gray\">\r\n                Welcome To\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div class=\"title-xlarge\">\r\n                Etisalat Notification Delivery\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <form [formGroup]=\"loginForm\" (keydown)=\"keyDownFunction($event)\">\r\n            <div class=\"row\">\r\n              <div class=\"col-7 mt-5\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                  <label class=\"form-input-label\">Username </label>\r\n                  <input   nfSpecialCharacters class=\"input\" id=\"float-input\" type=\"text\" size=\"30\" pInputText\r\n                    [ngClass]=\"{ 'invalid-input': lf.userName.errors && (lf.userName.touched || lf.userName.dirty) }\"\r\n                    formControlName=\"userName\">\r\n                  <div class=\"invalid-text\" *ngIf=\"!!lf.userName.errors && (!!lf.userName.touched || !!lf.userName.dirty)\">\r\n                    <div *ngIf=\"!!lf.userName.errors.required\">Username is required</div>\r\n                    <div *ngIf=\"!lf.userName.errors.required && !!lf.userName.errors.nfSpecialCharacters\" >Username Must be valid</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-7 mt-3\">\r\n                <div class=\"form-input form-input-timepicker \">\r\n                  <label class=\"form-input-label\">Password </label>\r\n                  <input class=\"input\" id=\"float-input1\" type=\"password\" size=\"30\"\r\n                    [ngClass]=\"{ 'invalid-input': lf.password.errors && (lf.password.touched || lf.password.dirty) }\"\r\n                    formControlName=\"password\">\r\n                  <div class=\"icon-eye-password icon-gray title-xsmall icon-1 \"></div>\r\n                  <div *ngIf=\"!!lf.password.errors && (!!lf.password.touched || !!lf.password.dirty)\">\r\n                    <div *ngIf=\"!!lf.password.errors.required\" class=\"invalid-text\">Password is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 mt-3\">\r\n              <div class=\"form-checkbox custom-control custom-checkbox text-muted\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"remember\" [checked]=\"remember === true\" class=\"custom-control-input\"\r\n                  id=\"customCheck\" name=\"example1\">\r\n                <label class=\"custom-control-label\" style=\"font-size: 13px;padding-top: 3px;\"  for=\"customCheck\"> Remember me </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <div class=\"mt-3 title-small color-gray-dark\">\r\n                <a [routerLink]=\"['/forget-password']\" label=\"Forget\">\r\n                  Forgot password?\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-5\">\r\n            <button (click)=\"doLogin();\" type=\"submit\" label=\"Go login\" class=\"button-green button wide-button ml-2\">\r\n              Login\r\n            </button>\r\n            <button (click)=\"register();\" type=\"button\" label=\"Go Register\"\r\n              class=\"button-black button wide-button ml-2\">\r\n              Register\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <img [src]=\"loginImage\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-service.service */ "./src/app/login/login-service.service.ts");
/* harmony import */ var src_app_shared_models_auth_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/auth-token */ "./src/app/shared/models/auth-token.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, loginService, platformLocation, formBuilder, cookieService) {
        this.route = route;
        this.loginService = loginService;
        this.platformLocation = platformLocation;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.remember = false;
        if (localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SESSION_KEYS.authToken) != null && localStorage.getItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SESSION_KEYS.userModel) != null) {
            this.route.navigate(['home']);
        }
        this.loginImage = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].CONSTANTS.BASE_URL + 'assets/img/login-img.svg';
        // let baseUrl = document.getElementsByTagName("base")[0].href;
        console.log('baseHref ', src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].CONSTANTS.BASE_URL);
        console.log('platformLocation => ', this.platformLocation);
        this.etisalatLogo = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].CONSTANTS.BASE_URL + 'assets/img/etisalat-logo01 copy.png';
        // localStorage.removeItem(Defines.SESSION_KEYS.authToken);
        // localStorage.removeItem(Defines.SESSION_KEYS.userModel);
        this.loginForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
        });
        if (this.cookieService.check('usr') && this.cookieService.check('pas')) {
            this.loginForm.patchValue({
                userName: atob(atob(atob(this.cookieService.get('usr')))),
                password: atob(atob(this.cookieService.get('pas')))
            });
            this.remember = true;
        }
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            this.loginService.markFormGroupTouched(this.loginForm);
            return;
        }
        this.userName = this.loginForm.get('userName').value;
        this.password = this.loginForm.get('password').value;
        this.loginService.sendLoginRequest(this.userName, this.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err, caught) {
            console.log('Error in doLogin ', err, caught);
            throw err;
        })).subscribe(function (apiResponse) {
            console.log('apiResponse Received ==> ', apiResponse);
            if (apiResponse.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_RESPONSES.success) {
                var authToken = new src_app_shared_models_auth_token__WEBPACK_IMPORTED_MODULE_3__["AuthToken"](apiResponse.responsePayload.token, apiResponse.responsePayload.user);
                localStorage.setItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SESSION_KEYS.authToken, authToken.token);
                localStorage.setItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SESSION_KEYS.userModel, (JSON.stringify((authToken).user)));
                if (_this.remember === true) {
                    _this.cookieService.set('usr', btoa(btoa(btoa(_this.userName))));
                    _this.cookieService.set('pas', btoa(btoa(_this.password)));
                }
                else {
                    _this.cookieService.delete('usr');
                    _this.cookieService.delete('usr');
                }
                _this.route.navigate(['home']);
            }
            else if (apiResponse.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_RESPONSES.EXPIRED_PASSWORD) {
                var url = 'reset-expiry-password/' + apiResponse.responsePayload;
                _this.route.navigate([url]);
            }
            else {
                localStorage.removeItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SESSION_KEYS.authToken);
                localStorage.removeItem(src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].SESSION_KEYS.userModel);
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.route.navigate(['register']);
    };
    LoginComponent.prototype.forget = function () {
        this.route.navigate(['forget-password']);
    };
    Object.defineProperty(LoginComponent.prototype, "lf", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode === 13) {
            this.doLogin();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", src_app_shared_models_auth_token__WEBPACK_IMPORTED_MODULE_3__["AuthToken"])
    ], LoginComponent.prototype, "userAuthModel", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ndp-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            providers: [_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/reset-expiry-password/reset-expiry-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/login/reset-expiry-password/reset-expiry-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3Jlc2V0LWV4cGlyeS1wYXNzd29yZC9yZXNldC1leHBpcnktcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/reset-expiry-password/reset-expiry-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/login/reset-expiry-password/reset-expiry-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"page-content-container login\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 text-left\">\r\n                    <div class=\"row\">\r\n                        <img src=\"./assets/img/etisalat-logo01 copy.png\" class=\"ml-3\">\r\n                    </div>\r\n                    <div class=\"row mt-5\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"title-xlarge\">\r\n                                Reset Expired Password\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-7 mt-5\">\r\n                            <div class=\"form-input form-input-timepicker \">\r\n                                <label class=\"form-input-label\">Old password </label>\r\n                                <input class=\"input\" id=\"float-input\" type=\"password\" size=\"30\" pInputText\r\n                                    [(ngModel)]=\"model.oldPassword\">\r\n                            </div>\r\n                            <div class=\"form-input form-input-timepicker \">\r\n                                <label class=\"form-input-label\">New password </label>\r\n                                <input class=\"input\" id=\"float-input1\" type=\"password\" size=\"30\" pInputText\r\n                                    [(ngModel)]=\"model.password\">\r\n                            </div>\r\n                            <div class=\"form-input form-input-timepicker \">\r\n                                <label class=\"form-input-label\">Confirm new password </label>\r\n                                <input class=\"input\" id=\"float-input2\" type=\"password\" size=\"30\" pInputText\r\n                                    [(ngModel)]=\"confirmPassword\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"row\">\r\n\r\n                        <div>\r\n                            <button (click)=\"reset();\" type=\"button\" label=\"Go login\"\r\n                                class=\"button-green button wide-button ml-2\">\r\n                                Submit\r\n                            </button>\r\n                        </div>\r\n                        <div>\r\n                            <button (click)=\"goToLogin();\" type=\"button\" label=\"Go login\"\r\n                                class=\"button-green button wide-button ml-2\">\r\n                                Cancel\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <img src=\"./assets/img/login-img.svg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/reset-expiry-password/reset-expiry-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/login/reset-expiry-password/reset-expiry-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResetExpiryPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetExpiryPassComponent", function() { return ResetExpiryPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-service.service */ "./src/app/login/login-service.service.ts");
/* harmony import */ var src_app_shared_models_reset_password_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/reset-password-model */ "./src/app/shared/models/reset-password-model.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetExpiryPassComponent = /** @class */ (function () {
    function ResetExpiryPassComponent(route, loginService, activeRoute, messageService) {
        this.route = route;
        this.loginService = loginService;
        this.activeRoute = activeRoute;
        this.messageService = messageService;
        this.model = new src_app_shared_models_reset_password_model__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordModel"]();
    }
    ResetExpiryPassComponent.prototype.ngOnInit = function () {
        this.model.email = this.activeRoute.snapshot.paramMap.get('email');
    };
    ResetExpiryPassComponent.prototype.reset = function () {
        var _this = this;
        if (!this.model.password.match("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*(),.?\":{}|<>\\/]{8,}$")) {
            this.messageService.addWarnings(["Password should be a minimum of 7 letters and 1 character"]);
            return;
        }
        if (this.confirmPassword === this.model.password) {
            this.loginService.resetExpiredPassword(this.model).subscribe(function (response) {
                console.log("response =>", response);
                if (response.status === src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].API_RESPONSES.success) {
                    _this.goToLogin();
                }
                else {
                    _this.statusResponse = response.statusMessage;
                }
            });
        }
        else {
            this.messageService.addWarnings(["Password Not Matched"]);
        }
    };
    ResetExpiryPassComponent.prototype.goToLogin = function () {
        this.route.navigate(['login']);
    };
    ResetExpiryPassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-expiry-reset',
            template: __webpack_require__(/*! ./reset-expiry-password.component.html */ "./src/app/login/reset-expiry-password/reset-expiry-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-expiry-password.component.css */ "./src/app/login/reset-expiry-password/reset-expiry-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__["NdpMessageService"]])
    ], ResetExpiryPassComponent);
    return ResetExpiryPassComponent;
}());



/***/ }),

/***/ "./src/app/login/reset-password/reset-password.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/login/reset-password/reset-password.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/login/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"page-content-container login\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 text-left\">\r\n                    <div class=\"row\">\r\n                        <img src=\"./assets/img/etisalat-logo01 copy.png\" class=\"ml-3\">\r\n                    </div>\r\n                    <div class=\"row mt-5\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"title-xlarge\">\r\n                                Account recovery\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <form [formGroup]=\"formGroup\">\r\n                        <div *ngIf=\"!statusResponse\" class=\"row\">\r\n\r\n                            <div class=\"col-7 mt-5\">\r\n                                <div class=\"form-input form-input-timepicker \">\r\n                                    <label class=\"form-input-label\">Password </label>\r\n                                    <input formControlName=\"password\" class=\"input\" type=\"password\" id=\"float-input\"\r\n                                        size=\"30\" pInputText [(ngModel)]=\"model.password\">\r\n                                    <label *ngIf=\"statusResponse\" class=\"title-large\">{{statusResponse}}</label>\r\n                                    <div *ngIf=\"submitted && !!getformGroupControlls.password.errors\"\r\n                                        class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"!!getformGroupControlls.password.errors.required\">Please fill in the\r\n                                            missing fields</div>\r\n                                        <div *ngIf=\"!!getformGroupControlls.password.errors.pattern\">Password should be a minimum of 7 letters and 1 character</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-input form-input-timepicker \">\r\n                                    <label class=\"form-input-label\">Confirm password </label>\r\n                                    <input formControlName=\"confirmPassword\" class=\"input\" type=\"password\" id=\"float-input\"\r\n                                        size=\"30\" pInputText [(ngModel)]=\"confirmPassword\">\r\n                                    <label *ngIf=\"statusResponse\" class=\"title-large\">{{statusResponse}}</label>\r\n                                    <div *ngIf=\"submitted && !!getformGroupControlls.confirmPassword.errors\"\r\n                                        class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"!!getformGroupControlls.confirmPassword.errors.required\">Please fill\r\n                                            in the missing fields</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n                    <div *ngIf=\"statusResponse\" class=\"row\">\r\n                        <div class=\"col-7 mt-5\">\r\n                            <label *ngIf=\"statusResponse\" class=\"title-large\">{{statusResponse}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!statusResponse\" class=\"row mt-5\">\r\n                        <button (click)=\"reset();\" type=\"button\" label=\"Go login\"\r\n                            class=\"button-green button wide-button ml-2\">\r\n                            Submit\r\n                        </button>\r\n                    </div>\r\n                    <div *ngIf=\"statusResponse\" class=\"row mt-5\">\r\n                        <button (click)=\"goToLogin();\" type=\"button\" label=\"Go login\"\r\n                            class=\"button-green button wide-button ml-2\">\r\n                            Go To Login\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <img src=\"./assets/img/login-img.svg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-service.service */ "./src/app/login/login-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_models_reset_password_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/reset-password-model */ "./src/app/shared/models/reset-password-model.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetComponent = /** @class */ (function () {
    function ResetComponent(route, loginService, activeRoute, location, formBuilder, messageService) {
        this.route = route;
        this.loginService = loginService;
        this.activeRoute = activeRoute;
        this.location = location;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.model = new src_app_shared_models_reset_password_model__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordModel"]();
    }
    Object.defineProperty(ResetComponent.prototype, "getformGroupControlls", {
        get: function () {
            console.log("controler", this.formGroup.controls);
            return this.formGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    ResetComponent.prototype.ngOnInit = function () {
        this.model.email = this.activeRoute.snapshot.paramMap.get('email');
        this.model.resetCode = this.activeRoute.snapshot.paramMap.get('code');
        this.formGroup = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*(),.?\":{}|<>\\/]{8,}$")]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    ResetComponent.prototype.reset = function () {
        var _this = this;
        this.submitted = true;
        debugger;
        if (this.formGroup.invalid) {
            return;
        }
        if (this.confirmPassword === this.model.password) {
            this.loginService.resetPassword(this.model).subscribe(function (response) { return _this.statusResponse = response.statusMessage; });
        }
        else {
            this.messageService.addWarnings(["Password Not Matched"]);
        }
    };
    ResetComponent.prototype.goToLogin = function () {
        this.route.navigate(['login']);
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-reset',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/login/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/login/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__["NdpMessageService"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/ndprouting/ndprouting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ndprouting/ndprouting.module.ts ***!
  \*************************************************/
/*! exports provided: NDPRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NDPRoutingModule", function() { return NDPRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../group/group-list/group-list.component */ "./src/app/group/group-list/group-list.component.ts");
/* harmony import */ var _campaigns_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../campaigns/campaign-list/campaign-list.component */ "./src/app/campaigns/campaign-list/campaign-list.component.ts");
/* harmony import */ var _sms_templates_sms_template_list_sms_template_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sms-templates/sms-template-list/sms-template-list.component */ "./src/app/sms-templates/sms-template-list/sms-template-list.component.ts");
/* harmony import */ var _campaigns_add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../campaigns/add-edit-campaign/add-edit-campaign.component */ "./src/app/campaigns/add-edit-campaign/add-edit-campaign.component.ts");
/* harmony import */ var _general_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../general/not-authorized/not-authorized.component */ "./src/app/general/not-authorized/not-authorized.component.ts");
/* harmony import */ var _group_add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../group/add-edit-group/add-edit-group.component */ "./src/app/group/add-edit-group/add-edit-group.component.ts");
/* harmony import */ var _group_group_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../group/group.module */ "./src/app/group/group.module.ts");
/* harmony import */ var _account_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../account/list/list.component */ "./src/app/account/list/list.component.ts");
/* harmony import */ var _account_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../account/add-edit/add-edit.component */ "./src/app/account/add-edit/add-edit.component.ts");
/* harmony import */ var _entity_entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entity/entity-list/entity-list.component */ "./src/app/entity/entity-list/entity-list.component.ts");
/* harmony import */ var _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../account/change-password/change-password.component */ "./src/app/account/change-password/change-password.component.ts");
/* harmony import */ var _account_users_accounts_list_users_accounts_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../account/users-accounts-list/users-accounts-list.component */ "./src/app/account/users-accounts-list/users-accounts-list.component.ts");
/* harmony import */ var _entity_entity_add_edit_entity_add_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../entity/entity-add-edit/entity-add-edit.component */ "./src/app/entity/entity-add-edit/entity-add-edit.component.ts");
/* harmony import */ var _sign_up_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sign-up/register/register.component */ "./src/app/sign-up/register/register.component.ts");
/* harmony import */ var _account_add_edit_users_accounts_add_edit_users_accounts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../account/add-edit-users-accounts/add-edit-users-accounts.component */ "./src/app/account/add-edit-users-accounts/add-edit-users-accounts.component.ts");
/* harmony import */ var _login_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../login/forget-password/forget-password.component */ "./src/app/login/forget-password/forget-password.component.ts");
/* harmony import */ var _login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../login/reset-password/reset-password.component */ "./src/app/login/reset-password/reset-password.component.ts");
/* harmony import */ var _roles_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../roles/role-list/role-list.component */ "./src/app/roles/role-list/role-list.component.ts");
/* harmony import */ var _account_signup_requests_signup_requests_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../account/signup-requests/signup-requests.component */ "./src/app/account/signup-requests/signup-requests.component.ts");
/* harmony import */ var _smsc_smsc_list_smsc_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../smsc/smsc-list/smsc-list.component */ "./src/app/smsc/smsc-list/smsc-list.component.ts");
/* harmony import */ var _smsc_add_edit_smsc_add_edit_smsc_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../smsc/add-edit-smsc/add-edit-smsc.component */ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.ts");
/* harmony import */ var _app_profiles_app_profiles_list_app_profiles_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app-profiles/app-profiles-list/app-profiles-list.component */ "./src/app/app-profiles/app-profiles-list/app-profiles-list.component.ts");
/* harmony import */ var _app_profiles_app_profiles_add_edit_app_profiles_add_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../app-profiles/app-profiles-add-edit/app-profiles-add-edit.component */ "./src/app/app-profiles/app-profiles-add-edit/app-profiles-add-edit.component.ts");
/* harmony import */ var _reports_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../reports/report-page/report-page.component */ "./src/app/reports/report-page/report-page.component.ts");
/* harmony import */ var _roles_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../roles/add-edit-role/add-edit-role.component */ "./src/app/roles/add-edit-role/add-edit-role.component.ts");
/* harmony import */ var _login_reset_expiry_password_reset_expiry_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../login/reset-expiry-password/reset-expiry-password.component */ "./src/app/login/reset-expiry-password/reset-expiry-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { RoleManagerComponent } from '../roles/role-manager/role-manager.component';





var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'campaigns', component: _campaigns_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_6__["CampaignListComponent"] },
    { path: 'campaigns/create', component: _campaigns_add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_8__["AddEditCampaignComponent"] },
    { path: 'campaigns/edit/:id', component: _campaigns_add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_8__["AddEditCampaignComponent"] },
    { path: 'campaigns/clone/:id', component: _campaigns_add_edit_campaign_add_edit_campaign_component__WEBPACK_IMPORTED_MODULE_8__["AddEditCampaignComponent"] },
    { path: 'smstemplates', component: _sms_templates_sms_template_list_sms_template_list_component__WEBPACK_IMPORTED_MODULE_7__["SmsTemplateListComponent"] },
    { path: 'groups', component: _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_5__["GroupListComponent"] },
    { path: 'groups/get/:id', component: _group_add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_10__["AddEditGroupComponent"] },
    { path: 'groups/create', component: _group_add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_10__["AddEditGroupComponent"] },
    { path: 'roles', component: _roles_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_22__["RoleListComponent"] },
    { path: 'roles/create', component: _roles_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_29__["AddEditRoleComponent"] },
    { path: 'roles/edit/:id', component: _roles_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_29__["AddEditRoleComponent"] },
    { path: 'notauthorized', component: _general_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_9__["NotAuthorizedComponent"] },
    { path: 'myprofile/view', component: _account_list_list_component__WEBPACK_IMPORTED_MODULE_12__["AccountListComponent"] },
    { path: 'myprofile/edit', component: _account_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_13__["AccountEditComponent"] },
    { path: 'entity', component: _entity_entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_14__["EntityListComponent"] },
    { path: 'entity/add', component: _entity_entity_add_edit_entity_add_edit_component__WEBPACK_IMPORTED_MODULE_17__["EntityAddEditComponent"] },
    { path: 'user/list', component: _account_users_accounts_list_users_accounts_list_component__WEBPACK_IMPORTED_MODULE_16__["UsersAccountsListComponent"] },
    { path: 'account/change-password', component: _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"] },
    { path: 'register', component: _sign_up_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'user/edit/:id', component: _account_add_edit_users_accounts_add_edit_users_accounts_component__WEBPACK_IMPORTED_MODULE_19__["AddEditUsersAccountsComponent"] },
    { path: 'user/approve/:id', component: _account_add_edit_users_accounts_add_edit_users_accounts_component__WEBPACK_IMPORTED_MODULE_19__["AddEditUsersAccountsComponent"] },
    { path: 'user/add', component: _account_add_edit_users_accounts_add_edit_users_accounts_component__WEBPACK_IMPORTED_MODULE_19__["AddEditUsersAccountsComponent"] },
    { path: 'account/change-password', component: _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"] },
    { path: 'forget-password', component: _login_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgetComponent"] },
    { path: 'reset-password/:code/:email', component: _login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetComponent"] },
    { path: 'reset-expiry-password/:email', component: _login_reset_expiry_password_reset_expiry_password_component__WEBPACK_IMPORTED_MODULE_30__["ResetExpiryPassComponent"] },
    { path: 'requests', component: _account_signup_requests_signup_requests_component__WEBPACK_IMPORTED_MODULE_23__["SignupRequestsComponent"] },
    { path: 'appProfile', component: _app_profiles_app_profiles_list_app_profiles_list_component__WEBPACK_IMPORTED_MODULE_26__["AppProfilesListComponent"] },
    { path: 'addEditAppProfile', component: _app_profiles_app_profiles_add_edit_app_profiles_add_edit_component__WEBPACK_IMPORTED_MODULE_27__["AppProfilesAddEditComponent"] },
    { path: 'smsc', component: _smsc_smsc_list_smsc_list_component__WEBPACK_IMPORTED_MODULE_24__["SmscListComponent"] },
    { path: 'smsc/get/:id', component: _smsc_add_edit_smsc_add_edit_smsc_component__WEBPACK_IMPORTED_MODULE_25__["AddEditSmscComponent"] },
    { path: 'smsc/create', component: _smsc_add_edit_smsc_add_edit_smsc_component__WEBPACK_IMPORTED_MODULE_25__["AddEditSmscComponent"] },
    { path: 'reports', component: _reports_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_28__["ReportPageComponent"] }
];
// const extraOptions: ExtraOptions = { "useHash": true };
var extraOptions = { enableTracing: false, onSameUrlNavigation: 'reload', useHash: true };
var NDPRoutingModule = /** @class */ (function () {
    function NDPRoutingModule() {
    }
    NDPRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, extraOptions), _group_group_module__WEBPACK_IMPORTED_MODULE_11__["GroupModule"]
            ], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NDPRoutingModule);
    return NDPRoutingModule;
}());



/***/ }),

/***/ "./src/app/ndpspinner/ndp-spinner.service.ts":
/*!***************************************************!*\
  !*** ./src/app/ndpspinner/ndp-spinner.service.ts ***!
  \***************************************************/
/*! exports provided: NdpSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpSpinnerService", function() { return NdpSpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NdpSpinnerService = /** @class */ (function () {
    function NdpSpinnerService() {
        this.showSpinner = false;
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    NdpSpinnerService.prototype.getSpinnerState = function () {
        // //console.log("giSpinnerHw Returning Spinner State");
        return this.spinnerSubject.asObservable();
    };
    NdpSpinnerService.prototype.show = function () {
        // //console.log("giSpinnerHw show called");
        this.spinnerSubject.next(true);
    };
    NdpSpinnerService.prototype.hide = function () {
        // //console.log("giSpinnerHw hide called");
        this.spinnerSubject.next(false);
    };
    NdpSpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NdpSpinnerService);
    return NdpSpinnerService;
}());



/***/ }),

/***/ "./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.css":
/*!******************************************************************!*\
  !*** ./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".giSpinnerImg {\r\n  z-index: 9999;\r\n  margin-top: 10%;\r\n  width: 17% !important;\r\n  /* background-color:transparent; */\r\n}\r\n\r\n.rotating {\r\n    -webkit-animation: rotate 2s linear infinite;\r\n    animation: rotate 2s linear infinite;\r\n  }\r\n\r\n.giSpinner {\r\n    display: block;\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    z-index: 2000;\r\n    /*background-color: #3b5d432e; /* Black w/ opacity */\r\n    /*background-color: #212923bd;*/\r\n    color: #a3d94e;\r\n  }\r\n\r\n@-webkit-keyframes rotate {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@keyframes rotate {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n/*\r\nLoader\r\n*/\r\n\r\n.loader{\r\n  position: absolute;\r\n  top: 50%;\r\n  bottom: 50%;\r\n  right: 0;\r\n  left: 0;\r\n  margin: auto;\r\n  background-color: #ffffff57;\r\n  text-align: center;\r\n}\r\n\r\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 51px;\r\n  height: 51px;\r\n  margin: 6px;\r\n  border: 6px solid black;\r\n  border-radius: 50%;\r\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #a3d94e #00000003#00000003#00000003;;\r\n}\r\n\r\n.lds-ring div:nth-child(1) {\r\n  -webkit-animation-delay: -0.45s;\r\n          animation-delay: -0.45s;\r\n}\r\n\r\n.lds-ring div:nth-child(2) {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\r\n\r\n.lds-ring div:nth-child(3) {\r\n  -webkit-animation-delay: -0.15s;\r\n          animation-delay: -0.15s;\r\n}\r\n\r\n@-webkit-keyframes lds-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes lds-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*\r\nEnd Loader  \r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmRwc3Bpbm5lci9uZHAtc3Bpbm5lci9uZHAtc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0NBQWtDO0FBQ3BDOztBQUVBO0lBQ0ksNENBQTRDO0lBSTVDLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCwrQkFBK0I7SUFDL0IsY0FBYztFQUNoQjs7QUFHQTtJQUNFO01BS0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFLRSx5QkFBeUI7SUFDM0I7RUFDRjs7QUFmQTtJQUNFO01BS0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFLRSx5QkFBeUI7SUFDM0I7RUFDRjs7QUFFRjs7Q0FFQzs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNFQUE4RDtVQUE5RCw4REFBOEQ7RUFDOUQsaURBQWlEO0FBQ25EOztBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvbmRwc3Bpbm5lci9uZHAtc3Bpbm5lci9uZHAtc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpU3Bpbm5lckltZyB7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDE3JSAhaW1wb3J0YW50O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7ICovXHJcbn1cclxuXHJcbi5yb3RhdGluZyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5naVNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMzYjVkNDMyZTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyOTIzYmQ7Ki9cclxuICAgIGNvbG9yOiAjYTNkOTRlO1xyXG4gIH1cclxuXHJcblxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuLypcclxuTG9hZGVyXHJcbiovXHJcbi5sb2FkZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGJvdHRvbTogNTAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxkcy1yaW5nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG4ubGRzLXJpbmcgZGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTFweDtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2EzZDk0ZSAjMDAwMDAwMDMjMDAwMDAwMDMjMDAwMDAwMDM7O1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbkVuZCBMb2FkZXIgIFxyXG4qL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSpinnerFlag\" id=\"appSpinner\" class=\"giSpinner\">\r\n\r\n  <!-- <img id=\"appSpinner_img\" [src]=\"imgSrc\" class=\"giSpinnerImg rotating\" />\r\n  <div>\r\n    <strong style=\"margin-top:90%;color:#a3d94e\">Loading</strong>\r\n  </div> -->\r\n  <div class=\"loader\">\r\n    <div class=\"lds-ring\">\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.ts ***!
  \*****************************************************************/
/*! exports provided: NdpSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpSpinnerComponent", function() { return NdpSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ndp_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ndp-spinner.service */ "./src/app/ndpspinner/ndp-spinner.service.ts");
/* harmony import */ var src_app_shared_services_animation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/animation.service */ "./src/app/shared/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NdpSpinnerComponent = /** @class */ (function () {
    function NdpSpinnerComponent(spinnerService, animationUtil) {
        this.spinnerService = spinnerService;
        this.animationUtil = animationUtil;
    }
    NdpSpinnerComponent.prototype.ngOnInit = function () {
        var scope = this;
        function changeSpinnerFlag(flag) {
            // //console.log("giSpinnerHw Flag Changed " + flag)
            scope.showSpinnerFlag = flag;
        }
        this.spinnerService.getSpinnerState().subscribe(function (spinnerState) { return changeSpinnerFlag(spinnerState); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NdpSpinnerComponent.prototype, "imgSrc", void 0);
    NdpSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-spinner',
            template: __webpack_require__(/*! ./ndp-spinner.component.html */ "./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.html"),
            styles: [__webpack_require__(/*! ./ndp-spinner.component.css */ "./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.css")]
        }),
        __metadata("design:paramtypes", [_ndp_spinner_service__WEBPACK_IMPORTED_MODULE_1__["NdpSpinnerService"], src_app_shared_services_animation_service__WEBPACK_IMPORTED_MODULE_2__["AnimationService"]])
    ], NdpSpinnerComponent);
    return NdpSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/ndpspinner/ndpspinner.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ndpspinner/ndpspinner.module.ts ***!
  \*************************************************/
/*! exports provided: NdpspinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpspinnerModule", function() { return NdpspinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ndp_spinner_ndp_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ndp-spinner/ndp-spinner.component */ "./src/app/ndpspinner/ndp-spinner/ndp-spinner.component.ts");
/* harmony import */ var _ndp_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ndp-spinner.service */ "./src/app/ndpspinner/ndp-spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NdpspinnerModule = /** @class */ (function () {
    function NdpspinnerModule() {
    }
    NdpspinnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ndp_spinner_ndp_spinner_component__WEBPACK_IMPORTED_MODULE_2__["NdpSpinnerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_ndp_spinner_service__WEBPACK_IMPORTED_MODULE_3__["NdpSpinnerService"]],
            exports: [_ndp_spinner_ndp_spinner_component__WEBPACK_IMPORTED_MODULE_2__["NdpSpinnerComponent"]]
        })
    ], NdpspinnerModule);
    return NdpspinnerModule;
}());



/***/ }),

/***/ "./src/app/reports/report-page/report-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/reports/report-page/report-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nlabel {padding-right: 20px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnQtcGFnZS9yZXBvcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9yZXBvcnQtcGFnZS9yZXBvcnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxhYmVsIHtwYWRkaW5nLXJpZ2h0OiAyMHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/reports/report-page/report-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/reports/report-page/report-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n    <div class=\"groups\">\r\n        <div class=\" no-gutters\">\r\n            <div class=\"p-col-5\">\r\n                <div class=\"page-title\">\r\n                    Business Entities Usage Report\r\n                </div>\r\n            </div>\r\n            <div class=\"p-col-7 col-lg-12 text-right \">\r\n                <div class=\"row\">\r\n                    <label>Business Entities : </label>\r\n                    <p-multiSelect [options]=\"entityItems\" [(ngModel)]=\"reportRequestModel.entityModels\"></p-multiSelect>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <label> Date : </label>\r\n                    <p-calendar [(ngModel)]=\"reportRequestModel.dateRange\" selectionMode=\"range\" [inline]=\"true\"\r\n                        showButtonBar=\"true\"  [maxDate]=\"maxDateValue\"></p-calendar>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <button (click)=\"runReport()\" class=\"button button-green mr-2\">\r\n                        Run\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/reports/report-page/report-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/reports/report-page/report-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageComponent", function() { return ReportPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_entity_entity_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entity/entity-service.service */ "./src/app/entity/entity-service.service.ts");
/* harmony import */ var src_app_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/reports/reports.service */ "./src/app/reports/reports.service.ts");
/* harmony import */ var src_app_shared_models_ReportRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/ReportRequestModel */ "./src/app/shared/models/ReportRequestModel.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportPageComponent = /** @class */ (function () {
    function ReportPageComponent(entityService, reportsService, messageService) {
        this.entityService = entityService;
        this.reportsService = reportsService;
        this.messageService = messageService;
        this.entityItems = new Array();
        this.selectedEntityIds = []; //TODO selectedEntityIds ... to Array of Integers 
        this.maxDateValue = new Date();
        this.reportRequestModel = new src_app_shared_models_ReportRequestModel__WEBPACK_IMPORTED_MODULE_4__["ReportRequestModel"]();
    }
    ReportPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entityService.getAllEntity().subscribe(function (resp) {
            _this.allEntities = resp.responsePayload;
            if (_this.allEntities) {
                _this.allEntities.forEach(function (entity) {
                    _this.entityItems.push({ label: entity.entityName, value: entity.entityId });
                });
                _this.entityItems = JSON.parse(JSON.stringify(_this.entityItems));
            }
        });
    };
    ReportPageComponent.prototype.runReport = function () {
        debugger;
        if (this.reportRequestModel.entityModels.length > 0) {
            this.reportRequestModel.type = 1;
            this.reportsService.generateReport(this.reportRequestModel).subscribe(function (res) {
                var reportResponse = res.responsePayload;
                var fileContent = decodeURIComponent(Array.prototype.map.call(atob(decodeURIComponent(reportResponse.fileContent)), function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    debugger;
                }).join("")); /*reportResponse.fileContent*/ //atob(reportResponse.fileContent);
                var blob = new Blob(["\ufeff", fileContent], { type: 'text/csv' });
                file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, reportResponse.filename);
                //new AngularCsv(blob, "Sample", this.csvOptions);
            });
        }
        else {
            this.messageService.addWarnings(['Please select at least one business entity']);
        }
    };
    ReportPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-report-page',
            template: __webpack_require__(/*! ./report-page.component.html */ "./src/app/reports/report-page/report-page.component.html"),
            styles: [__webpack_require__(/*! ./report-page.component.css */ "./src/app/reports/report-page/report-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_entity_entity_service_service__WEBPACK_IMPORTED_MODULE_2__["EntityServiceService"], src_app_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"],
            src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__["NdpMessageService"]])
    ], ReportPageComponent);
    return ReportPageComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_page_report_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-page/report-page.component */ "./src/app/reports/report-page/report-page.component.ts");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_4__["ReportPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__["MultiSelectModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"]
            ],
            exports: [_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_4__["ReportPageComponent"]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/reports/reports.service.ts":
/*!********************************************!*\
  !*** ./src/app/reports/reports.service.ts ***!
  \********************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsService = /** @class */ (function (_super) {
    __extends(ReportsService, _super);
    function ReportsService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        _this.myHttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                'Content-Type': 'text/csv',
                observe: 'response',
                responseType: 'text/csv'
            })
        };
        return _this;
    }
    ReportsService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].API_ENDPOINTS.REPORTS;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    ReportsService.prototype.generateReport = function (model) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].API_ENDPOINTS.REPORTS + _shared_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].API_ENDPOINTS.GENERATE_REPORT;
        console.log("REPORT params before generation is =>  ", model);
        debugger;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_3__["ApiRequest"](model, ""), this.httpOptions);
        return obs;
    };
    ReportsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ReportsService);
    return ReportsService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/roles/add-edit-role/add-edit-role.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/roles/add-edit-role/add-edit-role.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkZC1lZGl0LXJvbGUvYWRkLWVkaXQtcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/add-edit-role/add-edit-role.component.html":
/*!******************************************************************!*\
  !*** ./src/app/roles/add-edit-role/add-edit-role.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content \">\r\n    <div class=\"roles-management\">\r\n        <div class=\"row no-gutters animated faster fadeInUp\">\r\n            <div class=\"col-6\">\r\n                <div class=\"page-title \">\r\n                    Role Management\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-9\">\r\n                    </div>\r\n                    <!--div class=\"col-3\">\r\n            <a class=\"button button-green\"> Save </a>\r\n          </div-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section animated fadeInUp\">\r\n            <div class=\"row\">\r\n                <div *ngIf=\"mode === 0\" class=\"col-6 text-left section-title\">\r\n                    Create Role\r\n                </div>\r\n                <div *ngIf=\"mode === 1\" class=\"col-6 text-left section-title\">\r\n                    Edit Role\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mt-2 \">\r\n\r\n                <div class=\"col-3\">\r\n                    <div class=\"form-input form-input-timepicker \">\r\n                        <label class=\"form-input-label\">Role Name </label>\r\n\r\n                        <input name=\"roleName\" class=\"input\"  maxlength=\"25\" nfSpecialCharacters   \r\n                            [ngClass]=\"{'invalid-input': found}\" [(ngModel)]=\" role.label\"\r\n                            (change)=\"roleCheck(role.label);\">\r\n                        <div *ngIf=\"found\" class=\"invalid-text\">Role Name Already Exists</div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-input form-input-timepicker \">\r\n                        <label class=\"form-input-label\">Role Description </label>\r\n                        <input class=\"input\" [(ngModel)]=\"role.descreption\"  maxlength=\"500\"  >\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\"></div>\r\n                <!--div class=\"col-3\">\r\n          <div class=\"color-gray-dark title-robotomedium heading-6\">Edit Roles</div>\r\n          <div>switch</div>\r\n        </div-->\r\n            </div>\r\n            <div *ngIf=\"privilegesList\" class=\"row mt-3\">\r\n                <div class=\"col-6 pb-4\" *ngFor=\"let privilege of privilegesList | orderBy: key : reverse \"\r\n                    style=\"border-bottom: 1px dashed #cecece;\">\r\n                    <div class=\"pt-4\">\r\n                        <div class=\"custom-control custom-checkbox text-muted\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"privilege.label\"\r\n                                [checked]=\"getPrivilegeCheck(privilege)\"\r\n                                (change)=\"onSelectPrivilege($event, privilege.id)\">\r\n                            <label class=\"custom-control-label\" [for]=\"privilege.label\">\r\n                                {{privilege.label}}\r\n                            </label>\r\n                            <div class=\"heading-8 color-gray\">\r\n                                {{privilege.descreption}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row pl-1\"> <!--*ngIf=\"checkPrivilegeActive(privilege.id)\"-->\r\n                        <div class=\"col-6\"\r\n                            *ngFor=\"let child of getPrivilageChildren(privilege) | orderBy: key : reverse\">\r\n                            <div class=\"sub-checkboxes\">\r\n                                <div class=\"pt-2 mb-1\">\r\n                                    <div class=\"custom-control custom-checkbox text-muted\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"child.label\"\r\n                                            [checked]=\"getPrivilegeCheck(child)\"\r\n                                            (change)=\"onSelectPrivilege($event, child.id)\">\r\n                                        <label class=\"custom-control-label\" style=\"font-size: 14px;\"\r\n                                            [for]=\"child.label\">\r\n                                            {{getPrivilageLabel(child.label) | titlecase}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row pl-1 mb-3\" *ngIf=\"checkPrivilegeActive(child.id) && child.needsAccessLevel\">\r\n                                <div class=\"col-3\">\r\n                                    <div class=\"sub-checkboxes\">\r\n                                        <div class=\"form-input form-radiobtn\">\r\n                                            <div class=\"custom-control custom-radio\">\r\n                                                <input type=\"radio\" class=\"custom-control-input\"\r\n                                                    [id]=\"'self' + child.id\" [name]=\"child.label\"\r\n                                                    (click)=\"setAccessLevel(1, child)\"\r\n                                                    [checked]=\"getAccessLevelRadio(1, child)\">\r\n                                                <label class=\"custom-control-label\"\r\n                                                    style=\"font-size: 12px; padding-top: 3px;\"\r\n                                                    [for]=\"'self' + child.id\">Self</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-3\">\r\n                                    <div class=\"form-input form-radiobtn\">\r\n                                        <div class=\" custom-control custom-radio\">\r\n                                            <input type=\"radio\" class=\"custom-control-input\" [id]=\"'entity' + child.id\"\r\n                                                [name]=\"child.label\" (click)=\"setAccessLevel(2, child)\"\r\n                                                [checked]=\"getAccessLevelRadio(2, child)\">\r\n                                            <label class=\"custom-control-label\"\r\n                                                style=\"font-size: 12px; padding-top: 3px;\"\r\n                                                [for]=\"'entity' + child.id\">Entity</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-3\">\r\n                                    <div class=\"form-input form-radiobtn\">\r\n                                        <div class=\"custom-control custom-radio\">\r\n                                            <input type=\"radio\" class=\"custom-control-input\" [id]=\"'all' + child.id\"\r\n                                                [name]=\"child.label\" (click)=\"setAccessLevel(3, child)\"\r\n                                                [checked]=\"getAccessLevelRadio(3, child)\">\r\n                                            <label class=\"custom-control-label\"\r\n                                                style=\"font-size: 12px; padding-top: 3px;\"\r\n                                                [for]=\"'all' + child.id\">Everyone</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5 pt-3 pb-2\">\r\n                <div class=\"col-12 justify-content-center text-right\">\r\n                    <button (click)=\"onClickSave()\" class=\"button button-green mr-2 pr-4 pl-4\">\r\n                        Save\r\n                    </button>\r\n                    <button (click)=\"onClickCancel()\" class=\"button button-black mr-2\">\r\n                        Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/roles/add-edit-role/add-edit-role.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/roles/add-edit-role/add-edit-role.component.ts ***!
  \****************************************************************/
/*! exports provided: AddEditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditRoleComponent", function() { return AddEditRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role-manager.service */ "./src/app/roles/role-manager.service.ts");
/* harmony import */ var src_app_shared_models_role_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/role-model */ "./src/app/shared/models/role-model.ts");
/* harmony import */ var src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/role-privilege-model */ "./src/app/shared/models/role-privilege-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEditRoleComponent = /** @class */ (function () {
    function AddEditRoleComponent(rolesService, router, route) {
        this.rolesService = rolesService;
        this.router = router;
        this.route = route;
        this.allRolesList = new Array();
        this.found = false;
        this.invalidLength = false;
        /*SORTING*/
        this.key = 'label';
        this.reverse = false;
        /*=============================*/
        this.mode = 0;
        this.descriptionError = "";
        this.nameError = "";
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]),
            roleDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)])
        });
    }
    AddEditRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.role = new src_app_shared_models_role_model__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]();
        this.role.isEditable = true;
        this.role.privilegeList = new Array();
        // Load All Available Privileges
        this.loadPrivileges();
        console.log('Privilage List Before Roles', this.role.privilegeList);
        console.log('getting roles');
        this.rolesService.getAllRoles().subscribe(function (roles) {
            _this.allRolesList = roles.responsePayload;
        });
        console.log('got roles', this.allRolesList);
        console.log('Privilage List After Roles', this.role.privilegeList);
        this.route.paramMap.subscribe(function (params) {
            var roleId = +params.get('id');
            console.log('url role ' + roleId);
            if (roleId) {
                _this.mode = 1;
                _this.getRole(roleId);
            }
            else {
                _this.mode = 0;
            }
        });
    };
    AddEditRoleComponent.prototype.roleCheck = function (s) {
        var _this = this;
        console.log('change ' + s);
        this.found = false;
        this.allRolesList.forEach(function (r) {
            if (r.label === s) {
                _this.found = true;
            }
        });
    };
    AddEditRoleComponent.prototype.validateLength = function (s, l) {
        if (l == 25) {
            if (s.length > l)
                this.nameError = "Role Name must not exceed " + l + " characters";
            else
                this.nameError = "";
        }
        else {
            if (s.length > l)
                this.descriptionError = "Role Description must not exceed " + l + " characters";
            else
                this.descriptionError = "";
        }
    };
    AddEditRoleComponent.prototype.getRole = function (roleId) {
        var _this = this;
        this.rolesService.getRole(roleId).subscribe(function (response) {
            _this.role = new src_app_shared_models_role_model__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]();
            _this.role = response.responsePayload;
            console.log('got role ', _this.role);
        });
    };
    AddEditRoleComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    AddEditRoleComponent.prototype.loadPrivileges = function () {
        var _this = this;
        this.rolesService.getAllPrivilege().subscribe(function (response) {
            _this.privilegesList = new Array();
            response.responsePayload.forEach(function (priv) {
                if (priv.isDefault) {
                    var rolePriv = new src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_3__["RolePrivilegeModel"](null, priv.id, 3);
                    _this.role.privilegeList.push(rolePriv);
                    if (priv.childList) {
                        priv.childList.forEach(function (child) {
                            var p = new src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_3__["RolePrivilegeModel"](null, child.id, 3);
                            _this.role.privilegeList.push(p);
                        });
                    }
                }
                else {
                    _this.privilegesList.push(priv);
                }
            });
            // this.privilegesList = response.responsePayload;
            console.log('new role is ', _this.role.privilegeList);
        });
    };
    AddEditRoleComponent.prototype.onSelectPrivilege = function (eventObject, pid) {
        var _this = this;
        if (this.role.privilegeList) {
            if (eventObject.target.checked) {
                var rolePrivilege = new src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_3__["RolePrivilegeModel"](null, pid, 1);
                this.role.privilegeList.push(rolePrivilege);
            }
            else {
                var par = this.privilegesList.findIndex(function (p) { return p.id === pid; });
                if (par !== -1) {
                    this.privilegesList[par].childList.forEach(function (obj) {
                        var child = _this.role.privilegeList.findIndex(function (p) { return p.privilegeId === obj.id; });
                        if (child !== -1) {
                            _this.role.privilegeList.splice(child, 1);
                        }
                    });
                }
                var index = this.role.privilegeList.findIndex(function (p) { return p.privilegeId === pid; });
                this.role.privilegeList.splice(index, 1);
            }
            console.log('Current Privilage List', this.role.privilegeList);
        }
    };
    AddEditRoleComponent.prototype.checkPrivilegeActive = function (pid) {
        if (this.role.privilegeList) {
            if (this.role.privilegeList.findIndex(function (p) { return p.privilegeId === pid; }) !== -1) {
                return true;
            }
        }
        return false;
    };
    AddEditRoleComponent.prototype.getPrivilageChildren = function (p) {
        return p.childList;
    };
    AddEditRoleComponent.prototype.getPrivilageLabel = function (s) {
        return s;
        // return s.substring(0, s.indexOf(' '));
    };
    AddEditRoleComponent.prototype.setAccessLevel = function (n, p) {
        if (this.role.privilegeList) {
            console.log('P to set ', p);
            var index = this.role.privilegeList.findIndex(function (i) { return i.privilegeId === p.id; });
            console.log('index ', index);
            this.role.privilegeList[index].accessLevel = n;
        }
    };
    AddEditRoleComponent.prototype.getPrivilegeCheck = function (p) {
        if (this.role.privilegeList) {
            var index = this.role.privilegeList.findIndex(function (i) { return i.privilegeId === p.id; });
            return (index !== -1);
        }
    };
    AddEditRoleComponent.prototype.getAccessLevelRadio = function (n, p) {
        if (this.role.privilegeList) {
            var index = this.role.privilegeList.findIndex(function (i) { return i.privilegeId === p.id; });
            return this.role.privilegeList[index].accessLevel === n;
        }
    };
    AddEditRoleComponent.prototype.onClickSave = function () {
        var _this = this;
        if (this.found) {
            return;
        }
        if (this.role.privilegeList.length > 0) {
            if (this.mode === 0) {
                this.rolesService.addRole(this.role).subscribe(function (response) {
                    console.log('Creating Role ', response.responsePayload);
                    _this.navigateBack();
                });
            }
            else {
                this.rolesService.editRole(this.role).subscribe(function (response) {
                    console.log('Updating Role ', response.responsePayload);
                    _this.navigateBack();
                });
            }
        }
        else {
            console.log('Select at least 1 privilage');
            alert('Select at least 1 privilage');
        }
    };
    AddEditRoleComponent.prototype.navigateBack = function () {
        this.router.navigate(['roles']);
    };
    AddEditRoleComponent.prototype.onClickCancel = function () {
        this.navigateBack();
    };
    AddEditRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit-role',
            template: __webpack_require__(/*! ./add-edit-role.component.html */ "./src/app/roles/add-edit-role/add-edit-role.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-role.component.css */ "./src/app/roles/add-edit-role/add-edit-role.component.css")]
        }),
        __metadata("design:paramtypes", [_role_manager_service__WEBPACK_IMPORTED_MODULE_1__["RoleManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddEditRoleComponent);
    return AddEditRoleComponent;
}());



/***/ }),

/***/ "./src/app/roles/add-edit/add-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/roles/add-edit/add-edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkZC1lZGl0L2FkZC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/add-edit/add-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/roles/add-edit/add-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p-scrollPanel [style]=\"{width: '100%', height: '400px'}\">\r\n<div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n                        <span class=\"ui-float-label\">\r\n                                <input id=\"float-input\" [(ngModel)]=\"editedRole.label\" type=\"text\" size=\"30\" pInputText>\r\n                                <label for=\"float-input\">label</label>\r\n                        </span>\r\n                </div>\r\n\r\n                <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n                        <span class=\"ui-float-label\">\r\n                                <input id=\"float-input\" [(ngModel)]=\"editedRole.descreption\" type=\"text\" size=\"30\"\r\n                                        pInputText>\r\n                                <label for=\"float-input\">descreption</label>\r\n                        </span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n                        <p-checkbox label=\"isEditable\" [(ngModel)]=\"editedRole.isEditable\" binary=\"true\"></p-checkbox>\r\n                </div>\r\n\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12\" *ngFor=\"let privilege of allPrivileges\">\r\n                <div class=\"ui-g-12\">\r\n                        <p-checkbox name=\"group2\" [value]=\"privilege.id\" [label]=\"privilege.label\"\r\n                                [(ngModel)]=\"selectedPrivileges\" inputId=\"privilege.id\"></p-checkbox>\r\n\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6 ui-lg-4\" *ngFor=\"let childPrivilege of privilege.childList\">\r\n\r\n                        <p-checkbox name=\"group2\" [value]=\"childPrivilege.id\"  [label]=\"childPrivilege.label\"\r\n                                [(ngModel)]=\"selectedPrivileges\" inputId=\"childPrivilege.id\"\r\n                                (onChange)=\"onSelectionChange($event, childPrivilege)\"></p-checkbox>\r\n\r\n                        <p-dropdown  (onChange)=\"changeLevel($event ,childPrivilege.id )\" [options]=\"levelselectItem\"    *ngIf=\"(rolePrivModelMap[childPrivilege.id])\"  [(ngModel)]=\"(rolePrivModelMap[childPrivilege.id]).level\">\r\n                               \r\n                                <ng-template let-level pTemplate>\r\n                                    <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\r\n                                        <div style=\"font-size:14px;float:right;margin-top:4px\">{{level.label}}</div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-dropdown> \r\n\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n                        <button pButton type=\"button\" label=\"Save\" (click)=\"saveRole()\" class=\"ui-button-rounded\"></button>  \r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n                        <button pButton type=\"button\" label=\"Cancel\" (click)=\"Cancel()\" class=\"ui-button-rounded\"></button>  \r\n                </div>\r\n        </div>\r\n        <!-- <button pButton type=\"button\" label=\"Save\" (click)=\"saveRole()\" class=\"ui-button-rounded\"></button> -->\r\n\r\n</div>\r\n\r\n</p-scrollPanel>"

/***/ }),

/***/ "./src/app/roles/add-edit/add-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/roles/add-edit/add-edit.component.ts ***!
  \******************************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_role_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/role-model */ "./src/app/shared/models/role-model.ts");
/* harmony import */ var src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/role-privilege-model */ "./src/app/shared/models/role-privilege-model.ts");
/* harmony import */ var _role_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role-manager.service */ "./src/app/roles/role-manager.service.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEditComponent = /** @class */ (function () {
    function AddEditComponent(roleServicer, messageService) {
        this.roleServicer = roleServicer;
        this.messageService = messageService;
        this.allPrivileges = new Array();
        this.accessLevelList = new Array();
        this.outputrole = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedPrivileges = [];
        this.rolePrivModelMap = {};
        this.getRolePrivilegeModel = function (privilegeId) {
            console.log("getPrivilegeModel");
            var rolePriv;
            rolePriv = this.editedRole.privilegeList.find(function (rp) { return rp.privilegeId == privilegeId; });
            console.log("Found Role Priv => ", rolePriv);
            return rolePriv;
        };
    }
    AddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mode == 0) {
            this.editedRole = new src_app_shared_models_role_model__WEBPACK_IMPORTED_MODULE_1__["RoleModel"]();
        }
        else {
            this.editedRole = Object.assign({}, this.inputRole);
            console.log("On Init");
            this.editedRole.privilegeList.forEach(function (rolePriv) {
                _this.selectedPrivileges.push(rolePriv.privilegeId);
                console.log("adding Role Priv =>", rolePriv);
                _this.rolePrivModelMap[rolePriv.privilegeId] = rolePriv;
            });
            //debugger;
            this.levelselectItem = [];
            this.levelselectItem.push({ label: "Select level", value: 0 });
            this.accessLevelList.forEach(function (level) {
                _this.levelselectItem.push({ label: level.label, value: level.id });
            });
            console.log("RolePrivModel Map =>", this.rolePrivModelMap);
        }
        //debugger;
    };
    AddEditComponent.prototype.prepareRolePrivilegeModelMap = function () {
    };
    AddEditComponent.prototype.editrow = function () {
        debugger;
        console.log("editedRole ==>> ", this.editedRole);
    };
    AddEditComponent.prototype.onSelectionChange = function (checked, privelegeMod) {
        console.log("Event", event);
        if (checked) {
            this.rolePrivModelMap[privelegeMod.id] = new src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_2__["RolePrivilegeModel"](this.editedRole.id, privelegeMod.id, null);
        }
        else {
            this.rolePrivModelMap[privelegeMod.id] = null;
        }
        console.log("selected priv", this.rolePrivModelMap);
    };
    AddEditComponent.prototype.isparent = function (privilegeId) {
        var parent = false;
        this.allPrivileges.forEach(function (privi) {
            if (privi.id == privilegeId) {
                parent = true;
            }
        });
        return parent;
    };
    AddEditComponent.prototype.saveRole = function () {
        var _this = this;
        this.editedRole.privilegeList = [];
        var isvalid = true;
        this.selectedPrivileges.forEach(function (rolePriv) {
            //debugger;
            if (_this.isparent(rolePriv)) {
                _this.editedRole.privilegeList.push(new src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_2__["RolePrivilegeModel"](_this.editedRole.id, _this.rolePrivModelMap[rolePriv].privilegeId, null));
            }
            else {
                if (_this.rolePrivModelMap[rolePriv].level == null || _this.rolePrivModelMap[rolePriv].level == 0) {
                    _this.messageService.addWarnings(["Please select privilege level "]);
                    isvalid = false;
                }
                else {
                    _this.editedRole.privilegeList.push(new src_app_shared_models_role_privilege_model__WEBPACK_IMPORTED_MODULE_2__["RolePrivilegeModel"](_this.editedRole.id, _this.rolePrivModelMap[rolePriv].privilegeId, _this.rolePrivModelMap[rolePriv].level));
                }
            }
            console.log("adding Role Priv =>", rolePriv);
        });
        //debugger;
        if (this.editedRole.label == null || this.editedRole.label == "") {
            this.messageService.addWarnings(["Please enter role label "]);
            isvalid = false;
        }
        if (this.mode == 1 && isvalid) {
            //debugger;
            console.log("edited role ", this.editedRole);
            this.roleServicer.editRole(this.editedRole).subscribe(function (resp) {
                //debugger;
                console.log("set output params ");
                _this.outputrole.emit(_this.editedRole);
            });
        }
        else if (this.mode == 0 && isvalid) {
            //debugger;
            this.roleServicer.addRole(this.editedRole).subscribe(function (resp) {
                //debugger;
                console.log("inserted Id", resp.responsePayload);
                _this.editedRole.id = resp.responsePayload;
                _this.outputrole.emit(_this.editedRole);
            });
        }
    };
    AddEditComponent.prototype.Cancel = function () {
        this.isCanceled.emit(1);
    };
    AddEditComponent.prototype.changeLevel = function (event, privilegeId) {
        //debugger;
        this.rolePrivModelMap[privilegeId].level = event.value;
        console.log("test : " + event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("rolemodel"),
        __metadata("design:type", src_app_shared_models_role_model__WEBPACK_IMPORTED_MODULE_1__["RoleModel"])
    ], AddEditComponent.prototype, "inputRole", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("privilegeList"),
        __metadata("design:type", Object)
    ], AddEditComponent.prototype, "allPrivileges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("mode"),
        __metadata("design:type", Number)
    ], AddEditComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("accessLevelList"),
        __metadata("design:type", Object)
    ], AddEditComponent.prototype, "accessLevelList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("outputrole"),
        __metadata("design:type", Object)
    ], AddEditComponent.prototype, "outputrole", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("isCanceled"),
        __metadata("design:type", Object)
    ], AddEditComponent.prototype, "isCanceled", void 0);
    AddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit',
            template: __webpack_require__(/*! ./add-edit.component.html */ "./src/app/roles/add-edit/add-edit.component.html"),
            styles: [__webpack_require__(/*! ./add-edit.component.css */ "./src/app/roles/add-edit/add-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_role_manager_service__WEBPACK_IMPORTED_MODULE_3__["RoleManagerService"], src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__["NdpMessageService"]])
    ], AddEditComponent);
    return AddEditComponent;
}());



/***/ }),

/***/ "./src/app/roles/role-list/role-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/roles/role-list/role-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGUtbGlzdC9yb2xlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roles/role-list/role-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/roles/role-list/role-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" (click)=\"onHideDropDown()\" *ngIf=\"allRolesList\">\r\n\r\n  <div class=\"row no-gutters mb-4\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">\r\n        Roles Management\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6 col-lg-12 text-right\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <div class=\"search-input\">\r\n            <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search By Role Name\">\r\n            <i class=\"icon-search icon\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE_ROLE\"\r\n            (successHandler)=\"onCreateButtonClick()\" class=\"button button-green\">Create Role</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"allRolesList\">\r\n    <div *ngIf=\"setFilteredRolesList(allRolesList | roleLabelFilter:filter)\"></div>\r\n    <div class=\"campaigns-list\"\r\n      *ngFor=\"let role of filteredRolesList | orderBy: key : reverse | paginate: { itemsPerPage: perPage, currentPage: p }; let i = index\">\r\n      <div class=\"row confirmDialog animated fadeIn faster\" *ngIf=\"deleteConfirm && (deleteConfirmId == role.id)\">\r\n        <div class=\"col-12\">Are you sure you want to delete <b>{{role.label}}</b> role ?</div>\r\n        <div class=\"col-12 mt-2\">\r\n          <button class=\"button button-green mr-4\" (click)=\"delete(role)\">DELETE</button>\r\n          <button class=\"button button-black \" (click)=\"hideConfirmDelete()\">CANCEL</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"(dropDownId === role.id)\" [ngClass]=\"{'hide':!dropDown}\"  class=\"dropdown animated flipInX faster\">\r\n        <ul class=\"list\">\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.UPDATE_ROLE\" [targetId]=\"role.id\"\r\n            (successHandler)=\"onEditButtonClick(role.id)\"><span class=\"fas fa-edit\"></span>Edit</li>\r\n          <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.DELETE_ROLE\" [targetId]=\"role.id\"\r\n            (successHandler)=\"onDeleteButtonClick(role.id)\"><span class=\"fas fa-trash\"></span>Delete</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"row campaigns-item no-gutters my-auto\">\r\n        <div class=\"col-3\">\r\n          <div class=\"heading-6 title-robotomedium pt-2\">\r\n            {{role.label}}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <div class=\"color-gray heading-7\">Description</div>\r\n          <div class=\"heading-7\">{{role.descreption}}</div>\r\n        </div>\r\n        <div class=\"col-4 pt-2\">\r\n\r\n          <span class=\"color-green ml-1\">\r\n            {{role.userCount}} Users\r\n          </span>\r\n        </div>\r\n        <div class=\"col-1 my-auto text-right\">\r\n          <a (click)=\"onShowDropDown(role.id)\" class=\"campaigns-item-actions-link pointer\">\r\n            <i class=\"icon-dropdown-dots icon icon-lg color-dimmed\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"filteredRolesList.length == 0 && inialized\">\r\n      <div class=\"row mt-4 animated fadeIn fast\">\r\n        <div class=\"col-12 mt-4 text-center\">\r\n          <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n          <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Roles Found</b></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ngx-pagination\">\r\n      <div class=\"form-input form-input-select form-selectbox itemsNum animate fadeInUp\">\r\n        <label class=\"form-input-label\">Item/Page</label>\r\n        <select [(ngModel)]=\"perPage\" (change)=\"resetPagination()\" class=\"paginSelect\">\r\n          <option>2</option>\r\n          <option>5</option>\r\n          <option>10</option>\r\n          <option>20</option>\r\n          <option>50</option>\r\n        </select>\r\n      </div>\r\n      <div *ngIf=\"allRolesList\" style=\"margin-left: 170px;\">\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/role-list/role-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/roles/role-list/role-list.component.ts ***!
  \********************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role-manager.service */ "./src/app/roles/role-manager.service.ts");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(roleService, router, messageService) {
        this.roleService = roleService;
        this.router = router;
        this.messageService = messageService;
        this.allRolesList = new Array();
        this.filteredRolesList = null;
        this.inialized = false;
        /* Pagination Filtering & Sorting*/
        this.p = 1;
        this.perPage = 5;
        /*SORTING*/
        this.key = 'startDate';
        this.reverse = true;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD;
    }
    RoleListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    RoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.filteredRolesList = this.allRolesList;
        this.authorizationUrl = this.roleService.authorizationUrl;
        this.roleService.getAllRoles().subscribe(function (roles) {
            _this.allRolesList = roles.responsePayload;
            _this.inialized = true;
        });
    };
    RoleListComponent.prototype.onCreateButtonClick = function () {
        this.router.navigate(['roles/create']);
    };
    RoleListComponent.prototype.onEditButtonClick = function (roleId) {
        console.log("Hi from onClick");
        this.router.navigate(['roles/edit', roleId]);
    };
    RoleListComponent.prototype.onDeleteButtonClick = function (roleId) {
        this.deleteConfirm = true;
        this.deleteConfirmId = roleId;
    };
    RoleListComponent.prototype.hideConfirmDelete = function () {
        this.deleteConfirm = false;
        this.deleteConfirmId = null;
    };
    RoleListComponent.prototype.delete = function (role) {
        var _this = this;
        this.deleteConfirm = false;
        if (role.userCount > 0) {
            this.messageService.addError('Delete Failed', 'Cannot delete a role that has assigned users');
            return;
        }
        this.roleService.deleteRole(role.id).subscribe(function (template) {
            if (template.status === 0) {
                _this.allRolesList = _this.allRolesList.filter(function (x) { return x.id !== role.id; });
            }
        });
    };
    RoleListComponent.prototype.onShowDropDown = function (role) {
        this.dropDownClick = 0;
        this.dropDown = true;
        this.dropDownId = role;
    };
    RoleListComponent.prototype.onHideDropDown = function () {
        this.dropDownClick++;
        if (this.dropDown && this.dropDownClick > 1) {
            this.dropDown = false;
        }
    };
    RoleListComponent.prototype.resetPagination = function () {
        if (this.p > 1) {
            this.p = 1;
        }
    };
    RoleListComponent.prototype.setFilteredRolesList = function (filtered) {
        this.filteredRolesList = filtered;
    };
    RoleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/roles/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.css */ "./src/app/roles/role-list/role-list.component.css")]
        }),
        __metadata("design:paramtypes", [_role_manager_service__WEBPACK_IMPORTED_MODULE_1__["RoleManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_2__["NdpMessageService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/roles/role-manager.service.ts":
/*!***********************************************!*\
  !*** ./src/app/roles/role-manager.service.ts ***!
  \***********************************************/
/*! exports provided: RoleManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagerService", function() { return RoleManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleManagerService = /** @class */ (function (_super) {
    __extends(RoleManagerService, _super);
    function RoleManagerService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    RoleManagerService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    RoleManagerService.prototype.getAllRoles = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.list;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    RoleManagerService.prototype.getRole = function (id) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.get;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](id, ''), this.httpOptions);
        return obs;
    };
    RoleManagerService.prototype.deleteRole = function (id) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.deleterole;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](id, ''), this.httpOptions);
        return obs;
    };
    RoleManagerService.prototype.getAllPrivilege = function () {
        //debugger;
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.loadPrivilege;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ''), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    RoleManagerService.prototype.getAllLevel = function () {
        //debugger;
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.getaccesslevel;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    RoleManagerService.prototype.editRole = function (role) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.editrole;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](role, ''), this.httpOptions);
        return obs;
    };
    RoleManagerService.prototype.addRole = function (role) {
        //debugger;
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.ROLES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.insertrole;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](role, ""), this.httpOptions);
        // .pipe(map((apiResponse: any) => new ApiResponse()));
        return obs;
    };
    RoleManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleManagerService);
    return RoleManagerService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/roles/role-manager/role-manager.component.css":
/*!***************************************************************!*\
  !*** ./src/app/roles/role-manager/role-manager.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGUtbWFuYWdlci9yb2xlLW1hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roles/role-manager/role-manager.component.html":
/*!****************************************************************!*\
  !*** ./src/app/roles/role-manager/role-manager.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"page-content\">\r\n        <button pButton type=\"button\" (click) = \"shwoAddRole()\" label=\"Add Role\" class=\"ui-button-rounded\"></button>\r\n        <p-table #dt  *ngIf =\"!addRoleFlag\"   [rowExpandMode]= \"'single'\" [columns]=\"cols\" [value]=\"rolesList\" dataKey=\"id\" [paginator]=\"true\" [rows]=\"10\">\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th style=\"width: 3em\"></th>\r\n                    <th *ngFor=\"let col of columns\">\r\n                        {{col.header}}\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n                <tr>\r\n                    <td>\r\n                        <a href=\"#\" [pRowToggler]=\"rowData\">\r\n                            <i (click) = \"expandRow(rowData , expanded)\"  [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td *ngFor=\"let col of columns\">\r\n                        <div *ngIf=\"col.header == 'IS_EDITABLE'; then thenBlock else elseBlock\"></div>\r\n                        <ng-template #thenBlock>\r\n                            <p-checkbox [(ngModel)]=\"rowData[col.field]\" [disabled]=\"'disabled'\" binary=\"true\"></p-checkbox>\r\n                        </ng-template>\r\n                        <ng-template #elseBlock>\r\n                            {{rowData[col.field]}}\r\n                        </ng-template>\r\n        \r\n        \r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        \r\n            <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                    <td [attr.colspan]=\"columns.length + 1\">\r\n                        \r\n                       <ndp-add-edit *ngIf=\"editRoleFlag\" [rolemodel]=\"editedRole\" (outputrole) =\"editrole($event,dt)\"  (isCanceled)=\"cancelEdit()\" [privilegeList]=\"allPrivileges\"  [accessLevelList]=\"accessLevelList\" [mode]=\"1\"></ndp-add-edit>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        \r\n        </p-table>\r\n        \r\n        <ndp-add-edit *ngIf =\"addRoleFlag\" [rolemodel]=\"editedRole\" [privilegeList]=\"allPrivileges\" [accessLevelList]=\"accessLevelList\"  (isCanceled)=\"cancelAdd()\" (outputrole) =\"addrole($event)\" [mode]=\"0\"></ndp-add-edit>\r\n        \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/role-manager/role-manager.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/roles/role-manager/role-manager.component.ts ***!
  \**************************************************************/
/*! exports provided: RoleManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagerComponent", function() { return RoleManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role-manager.service */ "./src/app/roles/role-manager.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleManagerComponent = /** @class */ (function () {
    //targetPrivilege: PrivilegeModel[];
    function RoleManagerComponent(roleService) {
        this.roleService = roleService;
        this.rolesList = new Array();
        this.accessLevelList = new Array();
        this.addRoleFlag = false;
        this.editRoleFlag = false;
        this.selectedCategories = [];
        this.allPrivileges = new Array();
        //  this.rolesList.push({ label: 'Select Item', value: -1});
    }
    RoleManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'label', header: 'LABEL' },
            { field: 'descreption', header: 'DESCREPTION' },
            { field: 'isEditable', header: 'IS_EDITABLE' },
        ];
        this.roleService.getAllRoles().subscribe(function (roles) {
            console.log("role Received ==> ", roles.responsePayload);
            _this.rolesList = roles.responsePayload;
            _this.roleService.getAllPrivilege().subscribe(function (privilege) {
                //debugger;
                console.log("privilege ==> " + privilege.responsePayload);
                _this.allPrivileges = privilege.responsePayload;
            });
        });
        this.roleService.getAllLevel().subscribe(function (levels) {
            console.log("role Received ==> ", levels.responsePayload);
            _this.accessLevelList = levels.responsePayload;
        });
    };
    RoleManagerComponent.prototype.editrole = function ($event, tabel) {
        //debugger;
        this.rowexpanded = false;
        //debugger;
        console.log("$event", $event);
        this.editrole = $event;
        this.editedRole.label = $event.label;
        this.editedRole.descreption = $event.descreption;
        this.editedRole.isEditable = $event.isEditable;
        this.editedRole.privilegeList = $event.privilegeList;
        this.editedRole.id = $event.id;
        console.log("this.editrole", this.editrole);
        this.addRoleFlag = true;
        //debugger;
        this.addRoleFlag = false;
    };
    RoleManagerComponent.prototype.expandRow = function (role, expanded) {
        //debugger;
        this.rowexpanded = expanded;
        console.log("expanded  :", expanded);
        this.editedRole = role;
        // Object.assign({}, role);
        this.editRoleFlag = !expanded;
    };
    RoleManagerComponent.prototype.shwoAddRole = function () {
        this.addRoleFlag = true;
    };
    RoleManagerComponent.prototype.addrole = function ($event) {
        //debugger;
        this.addRoleFlag = false;
        this.rolesList.push($event);
    };
    RoleManagerComponent.prototype.cancelAdd = function () {
        this.addRoleFlag = true;
    };
    RoleManagerComponent.prototype.cancelEdit = function () {
    };
    RoleManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-role-manager',
            template: __webpack_require__(/*! ./role-manager.component.html */ "./src/app/roles/role-manager/role-manager.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rowExpansionTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(-10%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./role-manager.component.css */ "./src/app/roles/role-manager/role-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_role_manager_service__WEBPACK_IMPORTED_MODULE_1__["RoleManagerService"]])
    ], RoleManagerComponent);
    return RoleManagerComponent;
}());



/***/ }),

/***/ "./src/app/roles/roles.module.ts":
/*!***************************************!*\
  !*** ./src/app/roles/roles.module.ts ***!
  \***************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _role_manager_role_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-manager/role-manager.component */ "./src/app/roles/role-manager/role-manager.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/picklist.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_picklist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/roles/add-edit/add-edit.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/roles/role-list/role-list.component.ts");
/* harmony import */ var _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-edit-role/add-edit-role.component */ "./src/app/roles/add-edit-role/add-edit-role.component.ts");
/* harmony import */ var _shared_Pipes_role_label_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/Pipes/role-label-filter.pipe */ "./src/app/shared/Pipes/role-label-filter.pipe.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_15__["RoleListComponent"], _role_manager_role_manager_component__WEBPACK_IMPORTED_MODULE_2__["RoleManagerComponent"], _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_6__["AddEditComponent"], _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_16__["AddEditRoleComponent"], _shared_Pipes_role_label_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["RoleLabelFilter"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_14__["OrderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_4__["PickListModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__["ScrollPanelModule"]
            ]
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/appprofile-appprofilename-filter.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/Pipes/appprofile-appprofilename-filter.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: AppProfileAppProfileNameFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProfileAppProfileNameFilter", function() { return AppProfileAppProfileNameFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppProfileAppProfileNameFilter = /** @class */ (function () {
    function AppProfileAppProfileNameFilter() {
    }
    AppProfileAppProfileNameFilter.prototype.transform = function (appProfiles, name) {
        if (appProfiles == null || name == null || name.length < 3) {
            return appProfiles;
        }
        var filtered = [];
        for (var i = 0; i < appProfiles.length; i++) {
            var appProfile = appProfiles[i];
            if (appProfile.appProfileName != null && appProfile.appProfileName.toLowerCase().includes(name.toLowerCase())) {
                filtered.push(appProfile);
            }
        }
        return filtered;
    };
    AppProfileAppProfileNameFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'appProfileAppProfileNameFilter'
        })
    ], AppProfileAppProfileNameFilter);
    return AppProfileAppProfileNameFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/campaign-date-filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/Pipes/campaign-date-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: CampaignDateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignDateFilter", function() { return CampaignDateFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CampaignDateFilter = /** @class */ (function () {
    function CampaignDateFilter() {
    }
    CampaignDateFilter.prototype.transform = function (campaigns, dateStart, dateEnd) {
        var filtered = [];
        if (campaigns != null) {
            if (!dateStart && !dateEnd) {
                console.log("\n\n\n\n\n!dateStart && !dateEnd\n\n\n\n");
                return campaigns;
            }
            else if (dateStart && !dateEnd) {
                console.log("\n\n\n\n\ndateStart && !dateEnd\n\n\n\n");
                filtered = [];
                for (var i = 0; i < campaigns.length; i++) {
                    var c = campaigns[i];
                    if (c.startDate) {
                        var d = new Date(c.startDate);
                        if (d >= dateStart
                        //d.getDate() === dateStart.getDate()
                        //&& d.getMonth() === dateStart.getMonth()
                        //&& d.getFullYear() === dateStart.getFullYear()
                        ) {
                            filtered.push(c);
                        }
                    }
                }
                return filtered;
            }
            else if (!dateStart && dateEnd) {
                filtered = [];
                for (var i = 0; i < campaigns.length; i++) {
                    var c = campaigns[i];
                    console.log("\n\n\n\n\n\nEND DATE\n\n\n\n", c.endDate, c.name);
                    if (c.endDate) {
                        var d = new Date(c.endDate);
                        if (d <= dateEnd
                        // d.getDate() === dateEnd.getDate()
                        // && d.getMonth() === dateEnd.getMonth()
                        // && d.getFullYear() === dateEnd.getFullYear()
                        ) {
                            filtered.push(c);
                        }
                    }
                }
                return filtered;
            }
            else if (dateStart && dateEnd) {
                filtered = [];
                for (var i = 0; i < campaigns.length; i++) {
                    var c = campaigns[i];
                    if (c.startDate && c.endDate) {
                        var d1 = new Date(c.startDate);
                        var d2 = new Date(c.endDate);
                        if (d1 >= dateStart && d2 <= dateEnd) {
                            filtered.push(c);
                        }
                    }
                }
                return filtered;
            }
        }
    };
    CampaignDateFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'dateFilter'
        })
    ], CampaignDateFilter);
    return CampaignDateFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/campaign-entity-filter.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/Pipes/campaign-entity-filter.pipe.ts ***!
  \*************************************************************/
/*! exports provided: CampaignEntityFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignEntityFilter", function() { return CampaignEntityFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CampaignEntityFilter = /** @class */ (function () {
    function CampaignEntityFilter() {
    }
    CampaignEntityFilter.prototype.transform = function (campaigns, entity) {
        var filtered = [];
        if (campaigns != null) {
            if (!entity) {
                return campaigns;
            }
            else {
                for (var i = 0; i < campaigns.length; i++) {
                    var c = campaigns[i];
                    if (c.entityName === entity) {
                        filtered.push(c);
                    }
                }
                return filtered;
            }
        }
    };
    CampaignEntityFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'entityFilter'
        })
    ], CampaignEntityFilter);
    return CampaignEntityFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/campaign-name-filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/Pipes/campaign-name-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: CampaignNameFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignNameFilter", function() { return CampaignNameFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CampaignNameFilter = /** @class */ (function () {
    function CampaignNameFilter() {
    }
    CampaignNameFilter.prototype.transform = function (campaigns, name) {
        var numbers = new RegExp(/^[0-9]+$/);
        var filtered = [];
        if (campaigns != null && name != null && numbers.test(name)) {
            for (var i = 0; i < campaigns.length; i++) {
                var c = campaigns[i];
                if (c.campaignId.toString().includes(name)) {
                    filtered.push(c);
                }
            }
            return filtered;
        }
        if (campaigns == null || name == null || name.length < 3) {
            return campaigns;
        }
        for (var i = 0; i < campaigns.length; i++) {
            var campaign = campaigns[i];
            if (campaign.name != null && campaign.name.toLowerCase().includes(name.toLowerCase())) {
                filtered.push(campaign);
            }
        }
        return filtered;
    };
    CampaignNameFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'campaignNameFilter'
        })
    ], CampaignNameFilter);
    return CampaignNameFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/campaign-status-filter.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/Pipes/campaign-status-filter.pipe.ts ***!
  \*************************************************************/
/*! exports provided: CampaignStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignStatusFilter", function() { return CampaignStatusFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    Ahmed El-Shinawy
    Campaign Status Filter
*/


var CampaignStatusFilter = /** @class */ (function () {
    function CampaignStatusFilter() {
    }
    CampaignStatusFilter.prototype.transform = function (campaigns, status) {
        if (status === _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.ALL) {
            return campaigns;
        }
        var filtered = [];
        for (var i = 0; i < campaigns.length; i++) {
            var campaign = campaigns[i];
            if (this.getStatus(campaign) === status) {
                filtered.push(campaign);
            }
        }
        return filtered;
    };
    CampaignStatusFilter.prototype.getStatus = function (campaign) {
        // Running, Paused, Done, Scheduled
        var startDate = new Date(campaign.startDate);
        var endDate = new Date(campaign.endDate);
        var currentDate = new Date();
        if (campaign.status === _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_STATUS.PAUSED) {
            return _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.PAUSED;
        }
        if (campaign.status === _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_STATUS.PENDING) {
            return _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.PENDING;
        }
        if (campaign.status === _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_STATUS.READY && currentDate < startDate) {
            return _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.SCHEDULED;
        }
        if (campaign.status === _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_STATUS.FAILED ||
            campaign.status === _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_STATUS.ALL_MESSAGES_FAILED) {
            return _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.FAILED;
        }
        if (campaign.status !== _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_STATUS.SUCCESS) {
            return _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.RUNNING;
        }
        else {
            return _static_defines__WEBPACK_IMPORTED_MODULE_1__["Defines"].CAMPAIGN_DISPLAY_STATUS.FINISHED;
        }
        // if (currentDate < startDate) {
        //   return Defines.CAMPAIGN_DISPLAY_STATUS.SCHEDULED;
        // } else if (currentDate >= startDate && currentDate <= endDate) {
        //   return Defines.CAMPAIGN_DISPLAY_STATUS.RUNNING;
        // } else {
        //   return Defines.CAMPAIGN_DISPLAY_STATUS.FINISHED;
        // }
    };
    CampaignStatusFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'statusfilter'
        })
    ], CampaignStatusFilter);
    return CampaignStatusFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/entity-entityname-filter.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/Pipes/entity-entityname-filter.pipe.ts ***!
  \***************************************************************/
/*! exports provided: EntityEntityNameFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityEntityNameFilter", function() { return EntityEntityNameFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntityEntityNameFilter = /** @class */ (function () {
    function EntityEntityNameFilter() {
    }
    EntityEntityNameFilter.prototype.transform = function (entities, name) {
        if (name == null || name.length < 3) {
            return entities;
        }
        var filtered = [];
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.entityName != null && entity.entityName.toLowerCase().includes(name.toLowerCase())) {
                filtered.push(entity);
            }
        }
        return filtered;
    };
    EntityEntityNameFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'entitynameFilter'
        })
    ], EntityEntityNameFilter);
    return EntityEntityNameFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/entity-status-filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/Pipes/entity-status-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: EntityStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStatusFilter", function() { return EntityStatusFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntityStatusFilter = /** @class */ (function () {
    function EntityStatusFilter() {
    }
    EntityStatusFilter.prototype.transform = function (entities, status) {
        if (status == null) {
            return entities;
        }
        var filtered = [];
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.active == status) {
                filtered.push(entity);
            }
        }
        return filtered;
    };
    EntityStatusFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'entityStatusFilter'
        })
    ], EntityStatusFilter);
    return EntityStatusFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/entity-type-filter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/Pipes/entity-type-filter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: EntityTypeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTypeFilter", function() { return EntityTypeFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntityTypeFilter = /** @class */ (function () {
    function EntityTypeFilter() {
    }
    EntityTypeFilter.prototype.transform = function (entities, type) {
        if (type == 'all') {
            return entities;
        }
        var filtered = [];
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.isInternal && type == 'internal') {
                filtered.push(entity);
            }
            if (!entity.isInternal && type == 'external') {
                filtered.push(entity);
            }
        }
        return filtered;
    };
    EntityTypeFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'entityTypeFilter'
        })
    ], EntityTypeFilter);
    return EntityTypeFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/group-filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/Pipes/group-filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: GroupFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFilterPipe", function() { return GroupFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupFilterPipe = /** @class */ (function () {
    function GroupFilterPipe() {
    }
    GroupFilterPipe.prototype.transform = function (groups, filter) {
        if (!groups || !filter || filter.length < 3) {
            return groups;
        }
        return groups.filter(function (group) { return group.groupName.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
    };
    GroupFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupNameFilter'
        })
    ], GroupFilterPipe);
    return GroupFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/role-label-filter.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/Pipes/role-label-filter.pipe.ts ***!
  \********************************************************/
/*! exports provided: RoleLabelFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleLabelFilter", function() { return RoleLabelFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoleLabelFilter = /** @class */ (function () {
    function RoleLabelFilter() {
    }
    RoleLabelFilter.prototype.transform = function (roles, label) {
        if (roles == null || label == null || label.length < 3) {
            return roles;
        }
        var filtered = [];
        for (var i = 0; i < roles.length; i++) {
            var role = roles[i];
            if (role.label != null && role.label.toLowerCase().includes(label.toLowerCase())) {
                filtered.push(role);
            }
        }
        return filtered;
    };
    RoleLabelFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'roleLabelFilter'
        })
    ], RoleLabelFilter);
    return RoleLabelFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/smsc-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/Pipes/smsc-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: SmscFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmscFilterPipe", function() { return SmscFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmscFilterPipe = /** @class */ (function () {
    function SmscFilterPipe() {
    }
    SmscFilterPipe.prototype.transform = function (smsc, filter) {
        if (!smsc || !filter || filter.length < 3) {
            return smsc;
        }
        return smsc.filter(function (s) { return s.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
    };
    SmscFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'smscNameFilter'
        })
    ], SmscFilterPipe);
    return SmscFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/smstemplate-titletext-filter.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/Pipes/smstemplate-titletext-filter.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: SmstemplateTitletextFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmstemplateTitletextFilter", function() { return SmstemplateTitletextFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmstemplateTitletextFilter = /** @class */ (function () {
    function SmstemplateTitletextFilter() {
    }
    SmstemplateTitletextFilter.prototype.transform = function (templates, titletext) {
        if (templates == null || titletext == null || titletext.length < 3) {
            return templates;
        }
        var filtered = [];
        for (var i = 0; i < templates.length; i++) {
            var template = templates[i];
            if ((template.title != null && template.title.toLowerCase().includes(titletext.toLowerCase()))
                || (template.text != null && template.text.toLowerCase().includes(titletext.toLowerCase()))) {
                filtered.push(template);
            }
        }
        return filtered;
    };
    SmstemplateTitletextFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'smstemplateTitletextFilter'
        })
    ], SmstemplateTitletextFilter);
    return SmstemplateTitletextFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/users-activedirectory-filter.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/Pipes/users-activedirectory-filter.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: UsersActiveDirectoryFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersActiveDirectoryFilter", function() { return UsersActiveDirectoryFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersActiveDirectoryFilter = /** @class */ (function () {
    function UsersActiveDirectoryFilter() {
    }
    UsersActiveDirectoryFilter.prototype.transform = function (users, status) {
        if (status == null) {
            return users;
        }
        var filtered = [];
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.isLdapUser == status) {
                filtered.push(user);
            }
        }
        return filtered;
    };
    UsersActiveDirectoryFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userActiveDirectoryFilter'
        })
    ], UsersActiveDirectoryFilter);
    return UsersActiveDirectoryFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/users-businessentity-filter.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/Pipes/users-businessentity-filter.pipe.ts ***!
  \******************************************************************/
/*! exports provided: UsersEntityFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEntityFilter", function() { return UsersEntityFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersEntityFilter = /** @class */ (function () {
    function UsersEntityFilter() {
    }
    UsersEntityFilter.prototype.transform = function (users, businessEntityName) {
        if (businessEntityName == null || businessEntityName.length < 3) {
            return users;
        }
        var filtered = [];
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.entityName != null && user.entityName.toLowerCase().includes(businessEntityName.toLowerCase())) {
                filtered.push(user);
            }
        }
        return filtered;
    };
    UsersEntityFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userentityFilter'
        })
    ], UsersEntityFilter);
    return UsersEntityFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/users-status-filter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/Pipes/users-status-filter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: UsersStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersStatusFilter", function() { return UsersStatusFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersStatusFilter = /** @class */ (function () {
    function UsersStatusFilter() {
    }
    UsersStatusFilter.prototype.transform = function (users, status) {
        if (status == null) {
            return users;
        }
        var filtered = [];
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.isActive == status) {
                filtered.push(user);
            }
        }
        return filtered;
    };
    UsersStatusFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userStatusFilter'
        })
    ], UsersStatusFilter);
    return UsersStatusFilter;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/users-username-filter.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/Pipes/users-username-filter.pipe.ts ***!
  \************************************************************/
/*! exports provided: UsersUsernameFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUsernameFilter", function() { return UsersUsernameFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersUsernameFilter = /** @class */ (function () {
    function UsersUsernameFilter() {
    }
    UsersUsernameFilter.prototype.transform = function (users, username) {
        if (users == null || username == null || username.length < 3) {
            return users;
        }
        var filtered = [];
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.userName != null && user.userName.toLowerCase().includes(username.toLowerCase())) {
                filtered.push(user);
            }
        }
        return filtered;
    };
    UsersUsernameFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'usernameFilter'
        })
    ], UsersUsernameFilter);
    return UsersUsernameFilter;
}());



/***/ }),

/***/ "./src/app/shared/directives/active-link.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/active-link.directive.ts ***!
  \************************************************************/
/*! exports provided: ActiveLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveLinkDirective", function() { return ActiveLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActiveLinkDirective = /** @class */ (function () {
    function ActiveLinkDirective(htmlElement) {
        this.htmlElement = htmlElement;
    }
    ActiveLinkDirective.prototype.onClick = function () {
        this.addStyle(this.activeClass);
    };
    ActiveLinkDirective.prototype.addStyle = function (style) {
        // this.htmlElement.nativeElement.style.backgroundColor = "red";
        var elementsWithClass = document.querySelectorAll('.' + style);
        elementsWithClass.forEach(function (e) {
            return e.classList.remove('active');
        });
        this.htmlElement.nativeElement.classList.add(style);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActiveLinkDirective.prototype, "activeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveLinkDirective.prototype, "onClick", null);
    ActiveLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ndpActiveLink]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ActiveLinkDirective);
    return ActiveLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/app-hover.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/app-hover.directive.ts ***!
  \**********************************************************/
/*! exports provided: AppHoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHoverDirective", function() { return AppHoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHoverDirective = /** @class */ (function () {
    function AppHoverDirective(htmlElement) {
        this.htmlElement = htmlElement;
    }
    AppHoverDirective.prototype.onMouseEnter = function () {
        console.log("Mouse Entered");
        this.highlightElement(this.hoverColor);
    };
    AppHoverDirective.prototype.onMouseLeave = function () {
        console.log("Mouse Left");
        this.highlightElement(null);
    };
    AppHoverDirective.prototype.highlightElement = function (color) {
        this.htmlElement.nativeElement.style.backgroundColor = color;
        this.htmlElement.nativeElement.classList.add("active");
        console.log(this.htmlElement.nativeElement.classList);
        console.log(this.htmlElement.nativeElement.className);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AppHoverDirective.prototype, "hoverColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppHoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppHoverDirective.prototype, "onMouseLeave", null);
    AppHoverDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ndpAppHover]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppHoverDirective);
    return AppHoverDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/ndp-authorize.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/ndp-authorize.directive.ts ***!
  \**************************************************************/
/*! exports provided: NdpAuthorizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpAuthorizeDirective", function() { return NdpAuthorizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization.service */ "./src/app/shared/services/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NdpAuthorizeDirective = /** @class */ (function () {
    function NdpAuthorizeDirective(authService, htmlElement) {
        this.authService = authService;
        this.htmlElement = htmlElement;
        this.successHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NdpAuthorizeDirective.prototype.onclick = function ($event) {
        var _this = this;
        // console.log("clickkkkkkkkkkkkkkkkkkkkk ", $event);
        $event.preventDefault();
        this.authService.authorizeRequest(this.targetUrl, this.targetId)
            .then(function (successData) {
            if (successData.status === 0) {
                console.log("Success Return ", successData);
                _this.successHandler.emit();
                console.log("successHandler");
            }
        })
            .catch(function (err) {
            console.log("Authorization Failed");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NdpAuthorizeDirective.prototype, "targetUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NdpAuthorizeDirective.prototype, "targetId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('successHandler'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NdpAuthorizeDirective.prototype, "successHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NdpAuthorizeDirective.prototype, "onclick", null);
    NdpAuthorizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ndpAuthorize]'
        }),
        __metadata("design:paramtypes", [_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NdpAuthorizeDirective);
    return NdpAuthorizeDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/ndp-button.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/ndp-button.directive.ts ***!
  \***********************************************************/
/*! exports provided: NdpButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpButtonDirective", function() { return NdpButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NdpButtonDirective = /** @class */ (function () {
    function NdpButtonDirective(htmlElement) {
        this.htmlElement = htmlElement;
    }
    NdpButtonDirective.prototype.ngOnInit = function () {
        // console.log("hwhwhw");
        // console.log("This Html Element =>", this.htmlElement);
        // let classList: DOMTokenList = this.htmlElement.nativeElement.classList;
        // console.log("Element ClassList => ", classList);
        // classList.forEach((value: string, key: number, parent: DOMTokenList) => {
        //   console.log("Removing " + value);
        //   // this.htmlElement.nativeElement.classList.remove(value)
        // });
        // this.htmlElement.nativeElement.classList.add(this.buttonClass);
    };
    NdpButtonDirective.prototype.ngAfterViewChecked = function () {
        var _this = this;
        console.log("hwhwhw");
        console.log("This Html Element =>", this.htmlElement);
        var classList = this.htmlElement.nativeElement.classList;
        console.log("Element ClassList => ", classList);
        classList.forEach(function (value, key, parent) {
            console.log("Removing " + value);
            _this.htmlElement.nativeElement.classList.remove(value);
        });
        this.buttonClass.forEach(function (className) {
            _this.htmlElement.nativeElement.classList.add(className);
        });
        classList = this.htmlElement.nativeElement.classList;
        console.log(classList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NdpButtonDirective.prototype, "buttonClass", void 0);
    NdpButtonDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ndpButton]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NdpButtonDirective);
    return NdpButtonDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/required.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/required.directive.ts ***!
  \*********************************************************/
/*! exports provided: RequiredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDirective", function() { return RequiredDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * This validator works like "required" but it does not allow whitespace either
 *
 * @export
 * @class RequiredDirective
 * @implements {Validator}
 */
var RequiredDirective = /** @class */ (function () {
    function RequiredDirective() {
    }
    RequiredDirective_1 = RequiredDirective;
    RequiredDirective.prototype.validate = function (control) {
        // let isWhitespace = (control.value || '').trim().length === 0;
        // let isValid = !isWhitespace;
        // return isValid ? null : {required: true};
        return null;
    };
    var RequiredDirective_1;
    RequiredDirective = RequiredDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ndpRequired]",
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: RequiredDirective_1, multi: true }]
        })
    ], RequiredDirective);
    return RequiredDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/special-characters.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/directives/special-characters.directive.ts ***!
  \*******************************************************************/
/*! exports provided: SpecialCharactersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialCharactersDirective", function() { return SpecialCharactersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpecialCharactersDirective = /** @class */ (function () {
    function SpecialCharactersDirective() {
    }
    SpecialCharactersDirective_1 = SpecialCharactersDirective;
    SpecialCharactersDirective.prototype.validate = function (control) {
        var pattern = new RegExp("^[!@#$%^&*(),.?:{}|<>]+$");
        var isAlphapetic = pattern.test(control.value);
        console.log("pattern" + isAlphapetic);
        // let isValid = !isAlphapetic;
        return !isAlphapetic ? null : { nfSpecialCharacters: true };
    };
    var SpecialCharactersDirective_1;
    SpecialCharactersDirective = SpecialCharactersDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[nfSpecialCharacters]",
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: SpecialCharactersDirective_1, multi: true }]
        })
    ], SpecialCharactersDirective);
    return SpecialCharactersDirective;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/auth-interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth-interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(route) {
        this.route = route;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.doPrework(req);
        var handleObs;
        handleObs = next.handle(this.interceptedRequest);
        return handleObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.doPostwork(response);
            }
        }));
    };
    AuthInterceptor.prototype.doPrework = function (req) {
        this.interceptedRequest = req.clone();
        if (!req.url.includes(_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].API_ENDPOINTS.LOGIN)) {
            this.interceptedRequest.body
                = new _models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](req.body.request, _static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].CONSTANTS.tokenPrefix + localStorage.getItem(_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].SESSION_KEYS.authToken));
        }
        else {
            // console.log('Request is Login, no token involved');
        }
    };
    AuthInterceptor.prototype.doPostwork = function (resp) {
        if (resp.body) {
            var apiResponse = resp.body;
            if (apiResponse.status === _static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].B2B_CODES.InvalidUserOrpassword
                || apiResponse.status === _static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].B2B_CODES.authenticationError) {
                localStorage.removeItem(_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].SESSION_KEYS.authToken);
                localStorage.removeItem(_static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].SESSION_KEYS.userModel);
                this.route.navigate(['/login']);
            }
            else if (apiResponse.status === _static_defines__WEBPACK_IMPORTED_MODULE_5__["Defines"].B2B_CODES.authorizationError) {
                // this.route.navigate(['/notauthorized']);
            }
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/loading-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/loading-interceptor.ts ***!
  \************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/catchError */ "./node_modules/rxjs-compat/_esm5/operators/catchError.js");
/* harmony import */ var src_app_ndpspinner_ndp_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ndpspinner/ndp-spinner.service */ "./src/app/ndpspinner/ndp-spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(spinnerService) {
        this.spinnerService = spinnerService;
        this.loadingExemptedUrls = [
            '/campaign/counts',
            '/campaign/list',
            '/campaign/stats'
        ];
    }
    LoadingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.doPrework(req);
        var handleObs;
        handleObs = next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (errorResponse, caught) {
            console.log('Caught error ', errorResponse);
            _this.spinnerService.hide();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResponse);
        }));
        return handleObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.doPostwork(response);
            }
        }));
    };
    LoadingInterceptor.prototype.doPrework = function (req) {
        if (!this.isExemptedUrl(req.url)) {
            this.spinnerService.show();
        }
        else {
            //==== NO Loading Will Happen =========
        }
    };
    LoadingInterceptor.prototype.doPostwork = function (resp) {
        this.spinnerService.hide();
    };
    LoadingInterceptor.prototype.isExemptedUrl = function (url) {
        return this.loadingExemptedUrls.some(function (exempted) { return url.includes(exempted); });
    };
    LoadingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_ndpspinner_ndp_spinner_service__WEBPACK_IMPORTED_MODULE_5__["NdpSpinnerService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/message-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/message-interceptor.ts ***!
  \************************************************************/
/*! exports provided: MessageInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageInterceptor", function() { return MessageInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _models_api_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/api-response */ "./src/app/shared/models/api-response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageInterceptor = /** @class */ (function () {
    function MessageInterceptor(messageService) {
        this.messageService = messageService;
    }
    ;
    MessageInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.doPrework(req);
        var handleObs;
        handleObs = next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (errorResponse, caught) {
            console.log("Exception for Req=> ", req, "Exception => ", caught);
            _this.handleErrorResponse(errorResponse, caught);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorResponse);
        }));
        return handleObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.doPostwork(response);
            }
        }));
    };
    MessageInterceptor.prototype.doPrework = function (req) {
        console.log('Message Intercepter Prework');
    };
    MessageInterceptor.prototype.doPostwork = function (resp) {
        console.log("Response => ", resp);
        console.log("Is response ApiResponse =>" + (resp.body instanceof _models_api_response__WEBPACK_IMPORTED_MODULE_6__["ApiResponse"]));
        if (resp.body) {
            var apiResponse = resp.body;
            // if (apiResponse.errors && apiResponse.errors.length > 0) {
            //     this.messageService.addErrors(apiResponse.errors);
            // }
            if (apiResponse.extraInfo && apiResponse.extraInfo.length > 0) {
                this.messageService.addInfos(apiResponse.extraInfo);
            }
            else if (apiResponse.warnings && apiResponse.warnings.length > 0) {
                this.messageService.addWarnings(apiResponse.warnings);
            }
            else if (apiResponse.status == _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_RESPONSES.success) {
                // if (apiResponse.statusMessage && apiResponse.statusMessage.length > 0) {
                //     console.log("statusMessage",apiResponse.statusMessage);
                //     // this.messageService.addSuccess(apiResponse.statusMessage);
                // }
            }
            else {
                this.messageService.addError(apiResponse.status.toString(), apiResponse.statusMessage);
            }
        }
    };
    MessageInterceptor.prototype.handleErrorResponse = function (errorResponse, caught) {
        console.log("errorResponse=>", errorResponse);
        if (errorResponse.status == 0) {
            this.messageService.addError(errorResponse.status.toString(), "Backend-System un-reachable!");
        }
        else if (errorResponse.status == 401) {
            this.messageService.addError(errorResponse.status.toString(), "User is not Authorized");
        }
        else {
            this.messageService.addError(errorResponse.status.toString(), errorResponse.statusText);
        }
        console.log('Message Intercepter ErrorResponse', errorResponse);
    };
    MessageInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_5__["NdpMessageService"]])
    ], MessageInterceptor);
    return MessageInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/models/ReportRequestModel.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/ReportRequestModel.ts ***!
  \*****************************************************/
/*! exports provided: ReportRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRequestModel", function() { return ReportRequestModel; });
var ReportRequestModel = /** @class */ (function () {
    function ReportRequestModel() {
        this.entityModels = [];
    }
    ReportRequestModel.prototype.ngOnInit = function () {
        this.dateRange[1].setDate((new Date()).getDate());
    };
    return ReportRequestModel;
}());



/***/ }),

/***/ "./src/app/shared/models/admin-view-user-model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/admin-view-user-model.ts ***!
  \********************************************************/
/*! exports provided: AdminViewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewUser", function() { return AdminViewUser; });
var AdminViewUser = /** @class */ (function () {
    function AdminViewUser() {
    }
    return AdminViewUser;
}());



/***/ }),

/***/ "./src/app/shared/models/api-request.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/api-request.ts ***!
  \**********************************************/
/*! exports provided: ApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequest", function() { return ApiRequest; });
var ApiRequest = /** @class */ (function () {
    function ApiRequest(payload, jwtToken) {
        this.request = payload;
        this.authorization = jwtToken;
    }
    return ApiRequest;
}());



/***/ }),

/***/ "./src/app/shared/models/api-response.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/api-response.ts ***!
  \***********************************************/
/*! exports provided: ApiResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponse", function() { return ApiResponse; });
var ApiResponse = /** @class */ (function () {
    function ApiResponse() {
    }
    return ApiResponse;
}());



/***/ }),

/***/ "./src/app/shared/models/app-profile-model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/app-profile-model.ts ***!
  \****************************************************/
/*! exports provided: AppProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProfileModel", function() { return AppProfileModel; });
var AppProfileModel = /** @class */ (function () {
    function AppProfileModel() {
    }
    return AppProfileModel;
}());



/***/ }),

/***/ "./src/app/shared/models/auth-token.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/auth-token.ts ***!
  \*********************************************/
/*! exports provided: AuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return AuthToken; });
var AuthToken = /** @class */ (function () {
    function AuthToken(token, user) {
        this.token = token;
        this.user = user;
    }
    return AuthToken;
}());



/***/ }),

/***/ "./src/app/shared/models/authorization-request-model.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/authorization-request-model.ts ***!
  \**************************************************************/
/*! exports provided: AuthorizationRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationRequestModel", function() { return AuthorizationRequestModel; });
var AuthorizationRequestModel = /** @class */ (function () {
    function AuthorizationRequestModel(url, targetObjectId) {
        this.url = url;
        this.targetObjectId = targetObjectId;
        this.targetUrl = url;
        this.objectId = targetObjectId;
    }
    return AuthorizationRequestModel;
}());



/***/ }),

/***/ "./src/app/shared/models/campaign-model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/campaign-model.ts ***!
  \*************************************************/
/*! exports provided: CampaignModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModel", function() { return CampaignModel; });
var CampaignModel = /** @class */ (function () {
    function CampaignModel() {
        this.admFiles = new Array();
    }
    return CampaignModel;
}());



/***/ }),

/***/ "./src/app/shared/models/campaign-request-model.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/models/campaign-request-model.ts ***!
  \*********************************************************/
/*! exports provided: CampaignRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRequestModel", function() { return CampaignRequestModel; });
var CampaignRequestModel = /** @class */ (function () {
    function CampaignRequestModel() {
    }
    return CampaignRequestModel;
}());



/***/ }),

/***/ "./src/app/shared/models/entity-model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/entity-model.ts ***!
  \***********************************************/
/*! exports provided: EntityModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityModel", function() { return EntityModel; });
var EntityModel = /** @class */ (function () {
    function EntityModel() {
        this.isLimited = true;
        this.deliveryReport = true;
        this.isInternal = false;
        this.active = true;
        this.groupList = new Array();
    }
    return EntityModel;
}());



/***/ }),

/***/ "./src/app/shared/models/fake-sender-model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/fake-sender-model.ts ***!
  \****************************************************/
/*! exports provided: FakeSenderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeSenderModel", function() { return FakeSenderModel; });
var FakeSenderModel = /** @class */ (function () {
    function FakeSenderModel() {
    }
    return FakeSenderModel;
}());



/***/ }),

/***/ "./src/app/shared/models/file-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/file-model.ts ***!
  \*********************************************/
/*! exports provided: FileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());



/***/ }),

/***/ "./src/app/shared/models/group-model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/group-model.ts ***!
  \**********************************************/
/*! exports provided: GroupModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModel", function() { return GroupModel; });
var GroupModel = /** @class */ (function () {
    function GroupModel() {
    }
    return GroupModel;
}());



/***/ }),

/***/ "./src/app/shared/models/group-msisdn-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/group-msisdn-model.ts ***!
  \*****************************************************/
/*! exports provided: GroupMsisdnModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMsisdnModel", function() { return GroupMsisdnModel; });
var GroupMsisdnModel = /** @class */ (function () {
    function GroupMsisdnModel() {
    }
    return GroupMsisdnModel;
}());



/***/ }),

/***/ "./src/app/shared/models/lk-group.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/lk-group.ts ***!
  \*******************************************/
/*! exports provided: LkGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LkGroup", function() { return LkGroup; });
var LkGroup = /** @class */ (function () {
    function LkGroup(name, id) {
        this.groupId = id;
        this.groupName = name;
    }
    return LkGroup;
}());



/***/ }),

/***/ "./src/app/shared/models/login-request.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/login-request.ts ***!
  \************************************************/
/*! exports provided: LoginRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
var LoginRequest = /** @class */ (function () {
    function LoginRequest(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginRequest;
}());



/***/ }),

/***/ "./src/app/shared/models/reset-password-model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/reset-password-model.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return ResetPasswordModel; });
var ResetPasswordModel = /** @class */ (function () {
    function ResetPasswordModel() {
    }
    return ResetPasswordModel;
}());



/***/ }),

/***/ "./src/app/shared/models/role-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/role-model.ts ***!
  \*********************************************/
/*! exports provided: RoleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModel", function() { return RoleModel; });
var RoleModel = /** @class */ (function () {
    function RoleModel() {
    }
    return RoleModel;
}());



/***/ }),

/***/ "./src/app/shared/models/role-privilege-model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/role-privilege-model.ts ***!
  \*******************************************************/
/*! exports provided: RolePrivilegeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePrivilegeModel", function() { return RolePrivilegeModel; });
var RolePrivilegeModel = /** @class */ (function () {
    function RolePrivilegeModel(roleId, privId, accessLevel) {
        this.roleId = roleId;
        this.privilegeId = privId;
        this.accessLevel = accessLevel;
    }
    RolePrivilegeModel.prototype.equals = function (object) {
    };
    return RolePrivilegeModel;
}());



/***/ }),

/***/ "./src/app/shared/models/smsc-account-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/smsc-account-model.ts ***!
  \*****************************************************/
/*! exports provided: SmscAccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmscAccountModel", function() { return SmscAccountModel; });
var SmscAccountModel = /** @class */ (function () {
    function SmscAccountModel() {
    }
    return SmscAccountModel;
}());



/***/ }),

/***/ "./src/app/shared/models/test-sms-model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/test-sms-model.ts ***!
  \*************************************************/
/*! exports provided: TestSmsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSmsModel", function() { return TestSmsModel; });
var TestSmsModel = /** @class */ (function () {
    function TestSmsModel() {
    }
    return TestSmsModel;
}());



/***/ }),

/***/ "./src/app/shared/models/user-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user-model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/services/animation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/animation.service.ts ***!
  \******************************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnimationService = /** @class */ (function () {
    function AnimationService() {
    }
    AnimationService.prototype.fadeOutElement = function (elementName, animationTime) {
        if (!animationTime) {
            animationTime = 2000;
        }
        var hwhwTime = animationTime;
        var elementToAnimate;
        elementToAnimate = document.getElementById(elementName);
        //console.log("Animating Div " + elementToAnimate + ", Duration:" + animationTime);
        // keyframes
        elementToAnimate.animate({ opacity: ['1', '0'] }, { duration: animationTime + 1, iterations: 1 });
    };
    AnimationService.prototype.fadeInElement = function (elementName, animationTime) {
        if (!animationTime) {
            animationTime = 2000;
        }
        var elementToAnimate = document.getElementById(elementName);
        //console.log(document.getElementById(elementName));
        // keyframes
        elementToAnimate.animate({ opacity: ['0', '1'] }, { duration: animationTime, iterations: 1 });
    };
    AnimationService.prototype.rotateElementInfinitely = function (divName, fullRotationTime) {
        if (!fullRotationTime) {
            fullRotationTime = 2000;
        }
        var divToRotate = document.getElementById(divName);
        //console.log(document.getElementById(divName));
        // keyframes
        divToRotate.animate({ transform: ['rotate(0deg)', 'rotate(360deg)'] }, { duration: fullRotationTime, iterations: Infinity });
    };
    AnimationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AnimationService);
    return AnimationService;
}());



/***/ }),

/***/ "./src/app/shared/services/authorization.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/authorization.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var _models_authorization_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/authorization-request-model */ "./src/app/shared/models/authorization-request-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthorizationService = /** @class */ (function (_super) {
    __extends(AuthorizationService, _super);
    function AuthorizationService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    AuthorizationService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.AUTHORIZATION;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    AuthorizationService.prototype.authorizeRequest = function (targetUrl, targetId) {
        var apiUrl = this.backendUrl + this.secureApi + _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.AUTHORIZATION
            + _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.AUTHORIZE;
        var authRequest = new _models_authorization_request_model__WEBPACK_IMPORTED_MODULE_5__["AuthorizationRequestModel"](targetUrl, targetId);
        return this.http.post(apiUrl, new _models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](authRequest, ""), this.httpOptions).toPromise();
    };
    AuthorizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthorizationService);
    return AuthorizationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/services/base-service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base-service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BaseService = /** @class */ (function () {
    function BaseService(httpClient) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
            })
        };
        this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl;
        this.secureApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].secureApiUrl;
        this.nonSecureApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].nonSecureApiUrl;
        this.authorizationUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendContext; // to be completed by each service
        this.http = httpClient;
        this.initAuthorizationUrl();
    }
    BaseService.prototype.ngOnInit = function () {
        console.log("hwhwhwhhwhwhwhhwhwhwhhwhwhwhhwhwhwh");
        // this.initAuthorizationUrl();
    };
    BaseService.prototype.scrollToError = function () {
        // let invalidFields = [].slice.call(document.getElementsByClassName('ng-invalid'))
        // if (invalidFields && invalidFields.length > 0) {
        //    invalidFields[0].focus();
        // }
    };
    BaseService.prototype.accessGranted = function (privId, accessLevel) {
        var currentUser = JSON.parse(localStorage.getItem(_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].SESSION_KEYS.userModel));
        debugger;
        console.log("privId in ==> ", privId, "accessLevel In => ", accessLevel);
        if (currentUser != null) {
            return currentUser.privilegeList.some(function (rolePriv) {
                console.log("Role Priv", rolePriv);
                if (rolePriv.privilegeId == privId && rolePriv.accessLevel == accessLevel) {
                    console.log("Found Priv and Access Level");
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        else {
            console.log("User not logged in");
            return false;
        }
        return false;
    };
    BaseService.prototype.cacheSessionObject = function (key, object) {
        try {
            if (key && object) {
                sessionStorage.setItem(key, object);
            }
            else {
                throw "Invalid input used " + { "key": key, "object": object };
            }
        }
        catch (err) {
            console.log("failed to save object [" + key + "] to session!", err);
        }
    };
    BaseService.prototype.popSessionObject = function (key) {
        try {
            if (key) {
                var obj = sessionStorage.getItem(key);
                if (obj) {
                    obj = JSON.parse(obj);
                    sessionStorage.removeItem(key);
                    return obj;
                }
                else {
                    return null;
                }
            }
            else {
                throw "Null Key";
            }
        }
        catch (err) {
            console.log("failed to save object [" + key + "] to session!", err);
        }
        return null;
    };
    BaseService.prototype.scrollIfFormHasErrors = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, form.invalid];
                    case 1:
                        _a.sent();
                        this.scrollToError();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log("Could not scroll to erroneous field ", err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/lookups.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/lookups.service.ts ***!
  \****************************************************/
/*! exports provided: LookupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsService", function() { return LookupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/api-request */ "./src/app/shared/models/api-request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LookupsService = /** @class */ (function (_super) {
    __extends(LookupsService, _super);
    function LookupsService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    LookupsService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.LOOKUPS;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    LookupsService.prototype.getfileTypes = function () {
        var apiUrl = this.backendUrl + this.secureApi + _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.LOOKUPS
            + _static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.FILE_TYPES;
        return this.http.post(apiUrl, new _models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ""), this.httpOptions).toPromise();
    };
    LookupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LookupsService);
    return LookupsService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/services/ndp-message.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/ndp-message.service.ts ***!
  \********************************************************/
/*! exports provided: NdpMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NdpMessageService", function() { return NdpMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NdpMessageService = /** @class */ (function () {
    // private infoObserver: any;
    // private warningObserver: any;
    // private successObserver: any;
    function NdpMessageService() {
        console.log("all arrays initialized");
        this.intitalizeObservables();
    }
    NdpMessageService.prototype.intitalizeObservables = function () {
        var _this = this;
        this.messagesObservable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            console.log("Observer ===>", observer);
            _this.messagesObserver = observer;
        });
        // this.infoObservable = Observable.create(observer => {
        //   this.infoObserver = observer;
        // });
        // this.successObservable = Observable.create(observer => {
        //   this.successObserver = observer;
        // });
        // this.warningObservable = Observable.create(observer => {
        //   this.warningObserver = observer;
        // });
    };
    NdpMessageService.prototype.allMessages = function () {
        return this.messagesObservable;
    };
    // getWarningMessages(): Observable<Array<Message>> {
    //   return this.warningObservable;
    // }
    // getInfoMessages(): Observable<Array<Message>> {
    //   return this.infoObservable;
    // }
    // getSuccessMessages(): Observable<Array<Message>> {
    //   return this.successObservable;
    // }
    NdpMessageService.prototype.addError = function (msgSummary, msgDetail) {
        var errorMessages = new Array();
        errorMessages.push({
            severity: _static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].MSG_SEVERITY.error,
            summary: msgSummary,
            detail: msgDetail,
            life: 10000
        });
        console.log("Emmitting errorMessages", errorMessages);
        this.messagesObserver.next(errorMessages);
    };
    NdpMessageService.prototype.addErrors = function (messages) {
        var errorMessages = new Array();
        messages.forEach(function (msg) { return errorMessages.push({
            severity: _static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].MSG_SEVERITY.error,
            summary: msg,
            detail: undefined,
            life: 10000
        }); });
        this.messagesObserver.next(errorMessages);
    };
    NdpMessageService.prototype.addWarnings = function (messages) {
        var warnings = new Array();
        messages.forEach(function (msg) { return warnings.push({
            severity: _static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].MSG_SEVERITY.warn,
            summary: msg,
            detail: undefined,
            life: 10000
        }); });
        this.messagesObserver.next(warnings);
    };
    NdpMessageService.prototype.addInfos = function (messages) {
        var infoMsgs = new Array();
        messages.forEach(function (msg) { return infoMsgs.push({
            severity: _static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].MSG_SEVERITY.success,
            summary: msg,
            detail: undefined,
            life: 3000
        }); });
        this.messagesObserver.next(infoMsgs);
    };
    NdpMessageService.prototype.addInfo = function (message) {
        var infoMsgs = new Array();
        infoMsgs.push({
            severity: _static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].MSG_SEVERITY.success,
            summary: message,
            detail: undefined,
            life: 3000
        });
        this.messagesObserver.next(infoMsgs);
    };
    NdpMessageService.prototype.addSuccess = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        var successMsgs = new Array();
        messages.forEach(function (msg) { return successMsgs.push({
            severity: _static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].MSG_SEVERITY.success,
            summary: msg,
            detail: undefined,
            life: 3000
        }); });
        this.messagesObserver.next(successMsgs);
    };
    NdpMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NdpMessageService);
    return NdpMessageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_app_hover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/app-hover.directive */ "./src/app/shared/directives/app-hover.directive.ts");
/* harmony import */ var _directives_active_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/active-link.directive */ "./src/app/shared/directives/active-link.directive.ts");
/* harmony import */ var _services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _directives_ndp_button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/ndp-button.directive */ "./src/app/shared/directives/ndp-button.directive.ts");
/* harmony import */ var _directives_special_characters_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/special-characters.directive */ "./src/app/shared/directives/special-characters.directive.ts");
/* harmony import */ var _directives_required_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/required.directive */ "./src/app/shared/directives/required.directive.ts");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authorization.service */ "./src/app/shared/services/authorization.service.ts");
/* harmony import */ var _directives_ndp_authorize_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/ndp-authorize.directive */ "./src/app/shared/directives/ndp-authorize.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { NdpButtonDirective } from './directives/ndp-button.directive';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_directives_special_characters_directive__WEBPACK_IMPORTED_MODULE_6__["SpecialCharactersDirective"], _directives_required_directive__WEBPACK_IMPORTED_MODULE_7__["RequiredDirective"], _directives_app_hover_directive__WEBPACK_IMPORTED_MODULE_2__["AppHoverDirective"], _directives_active_link_directive__WEBPACK_IMPORTED_MODULE_3__["ActiveLinkDirective"],
                _directives_ndp_button_directive__WEBPACK_IMPORTED_MODULE_5__["NdpButtonDirective"], _directives_ndp_authorize_directive__WEBPACK_IMPORTED_MODULE_9__["NdpAuthorizeDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _directives_special_characters_directive__WEBPACK_IMPORTED_MODULE_6__["SpecialCharactersDirective"], _directives_required_directive__WEBPACK_IMPORTED_MODULE_7__["RequiredDirective"], _directives_app_hover_directive__WEBPACK_IMPORTED_MODULE_2__["AppHoverDirective"], _directives_active_link_directive__WEBPACK_IMPORTED_MODULE_3__["ActiveLinkDirective"], _directives_ndp_button_directive__WEBPACK_IMPORTED_MODULE_5__["NdpButtonDirective"],
                _directives_ndp_authorize_directive__WEBPACK_IMPORTED_MODULE_9__["NdpAuthorizeDirective"]
            ],
            providers: [_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_4__["NdpMessageService"], _services_authorization_service__WEBPACK_IMPORTED_MODULE_8__["AuthorizationService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/static/defines.ts":
/*!******************************************!*\
  !*** ./src/app/shared/static/defines.ts ***!
  \******************************************/
/*! exports provided: Defines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Defines", function() { return Defines; });
var Defines = /** @class */ (function () {
    function Defines() {
    }
    Defines.CONSTANTS = {
        "tokenPrefix": "Bearer ",
        "BASE_URL": document.getElementsByTagName("base")[0].href + '/'
    };
    Defines.API_ENDPOINTS = {
        "LOGIN": '/user/login',
        "CAMPAIGNS": '/campaign',
        "AUTHORIZATION": '/authorization',
        "AUTHORIZE": '/checkAuthority',
        "B2BSENDERNAME": '/sendername',
        "USER": '/user',
        "MY_PROFILE": '/myprofile',
        "GROUPS": '/groups',
        "DIALS_URL": '/dials',
        "FAILED_DIALS_URL": '/failedDials',
        "ROLES": '/roles',
        "list": '/getrole',
        "loadPrivilege": "/loadprivilege",
        "editrole": "/editrole",
        "insertrole": "/insertrole",
        "deleterole": "/deleterole",
        "get": "/getonerole",
        "logout": "/user/logout",
        "SMSTEMPLATES": '/smstemplates',
        "LIST": '/list',
        "LIST_LDAP": '/listldap',
        "CREATE": '/create',
        "GET": '/get',
        "UPDATE": '/update',
        "UPDATE_PASSWORD": '/updatepassword',
        "DELETE": '/delete',
        "getaccesslevel": '/getaccesslevel',
        "entity": '/entity',
        "appprofile": "/appprofile",
        "REGISTRATION": '/registration',
        "SIGNUP": '/signup',
        "RESET": '/resetPassword',
        "RESET_EXPIRED": '/resetExpiryPassword',
        "FORGOT": '/forgot',
        "checkUsernameExists": '/checkUsernameExists',
        'checkEmailExists': '/checkEmailExists',
        'signupRequests': '/signupRequests',
        'approve': '/approve',
        'SMSC': '/smscaccounts',
        'listgroup': '/listgroup',
        'LOOKUPS': '/lookups',
        'FILE_TYPES': '/fileTypes',
        'TEST_SMS': '/testsms',
        'PAUSE': '/pause',
        'REPORTS': '/reports',
        "GENERATE_REPORT": '/generateReport'
    };
    Defines.API_CRUD = {
        "LIST": '/list',
        "GET": '/get',
        "UPDATE": '/update',
        "CREATE": '/create',
        "DELETE": '/delete',
        'PAUSE': '/pause',
        'TEST_SMS': '/testsms',
        'FAILED_DIALS': '/failedDials',
        'LIST_DIALS': '/listDials',
        'DELETE_DIALS': '/deleteDials',
        'APPROVE': '/approve',
        'SEARCH_DIALS': '/getDials',
        'CREATE_ROLE': '/insertrole',
        'UPDATE_ROLE': '/editrole',
        'DELETE_ROLE': '/deleterole'
    };
    Defines.API_RESPONSES = {
        "success": 0,
        "EXPIRED_PASSWORD": 112,
        "generalSystemError": 999
    };
    /*PrimeNG message severities*/
    Defines.MSG_SEVERITY = {
        'success': 'success',
        'error': 'error',
        'warn': 'warn',
        'info': 'info'
    };
    Defines.SESSION_KEYS = {
        'userModel': 'userModel',
        'authToken': 'authToken',
        'entityToEdit': 'entityToEdit'
    };
    Defines.B2B_CODES = {
        "InvalidUserOrpassword": 99,
        "authenticationError": 103,
        "authorizationError": 104
    };
    Defines.SIGNUP_STATUS = {
        "PENDING": 1,
        "APPROVED": 2,
        "REJECTED": 3
    };
    Defines.CAMPAIGN_STATUS = {
        'PENDING': 1,
        'APPROVED': 2,
        'PROCESSING': 3,
        'READY': 4,
        'SUCCESS': 5,
        'FAILED': 6,
        'PROCESSING_GROUP': 7,
        'SNAPSHOT_FAILED': 8,
        'DELETED': 9,
        'HANDLING': 10,
        'SMS_ENQUEUED': 11,
        'PAUSED': 12,
        'ALL_MESSAGES_FAILED': 13
    };
    Defines.CAMPAIGN_DISPLAY_STATUS = {
        'PENDING': 1,
        'SCHEDULED': 2,
        'RUNNING': 3,
        'FINISHED': 4,
        'PAUSED': 5,
        'ALL': 6,
        'FAILED': 7,
        'PROCESSING_FILE': 8,
        'ALL_MESSAGES_FAILED': 9
    };
    Defines.ACCESS_LEVELS = {
        'OWN': 1,
        'ENTITY': 2,
        'EVERYTHING': 3
    };
    Defines.PRIVILEGES = {
        'APP_PROFILE': {
            'GET': 123,
            'CREATE': 122,
            'EDIT': 124,
            'DELETE': 125,
            'LIST': 121,
        },
        'CAMPAIGN': {
            'GET': 171,
            'CREATE': 16,
            'EDIT': 172,
            'DELETE': 170,
            'LIST': 17,
            'approve': 192,
        },
        'ENTITY': {
            'GET': 9,
            'CREATE': 10,
            'EDIT': 11,
            'DELETE': 12,
            'LIST': 14,
        },
        'GROUP': {
            'GET': 4,
            'CREATE': 5,
            'EDIT': 6,
            'DELETE': 7,
            'LIST': 13,
            'DELETE_DIALS': 163,
            'EXPORT_DIALS': 162
        },
        'SMSTEMPLATES': {
            'LIST': 21
        }
    };
    return Defines;
}());



/***/ }),

/***/ "./src/app/sign-up/register/register.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sign-up/register/register.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sign-up/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sign-up/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" >\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">\r\n        Register\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-left section-title\">\r\n        Sign Up Request\r\n      </div>\r\n    </div>\r\n    <form *ngIf=\"formInitComplete\" [formGroup]=\"form\" (ngSubmit)=\"submitUser()\">\r\n      <div class=\"row \">\r\n        <div class=\"col-6\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Username</label>\r\n            <input nfSpecialCharacters   [(ngModel)]=\"user.userName\" required class=\"input\" placeholder=\"Enter Username\" formControlName=\"userName\" maxlength=\"25\"/>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.controls.userName.invalid && (form.controls.userName.touched || form.controls.userName.dirty)\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.userName.errors?.required\">\r\n              User name required\r\n            </div>\r\n            <div *ngIf=\"form.controls.userName.errors?.pattern\">\r\n              Invalid user name\r\n            </div>\r\n            <div *ngIf=\"!form.controls.userName.errors.required && !!form.controls.userName.errors.nfSpecialCharacters\" >UserName Must be valid</div>\r\n\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-6\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">First Name</label>\r\n            <input nfSpecialCharacters   [(ngModel)]=\"user.fName\" required class=\"input\" placeholder=\"Enter First Name\" formControlName=\"fName\" maxlength=\"25\" />\r\n          </div>\r\n\r\n          <div *ngIf=\"form.controls.fName.invalid && (form.controls.fName.touched || form.controls.fName.dirty)\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.fName.errors?.required\">\r\n              First Name required\r\n            </div>\r\n            <div *ngIf=\"form.controls.fName.errors?.pattern\">\r\n              Invalid First Name\r\n            </div>\r\n            <div *ngIf=\"!form.controls.fName.errors.required && !!form.controls.fName.errors.nfSpecialCharacters\" >First Name Must be valid</div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Last Name</label>\r\n            <input nfSpecialCharacters   [(ngModel)]=\"user.lName\" required class=\"input\" placeholder=\"Enter Last Name\" formControlName=\"lName\" maxlength=\"25\"/>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.controls.lName.invalid && (form.controls.lName.touched || form.controls.lName.dirty)\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.lName.errors?.required\">\r\n              Last name required\r\n            </div>\r\n            <div *ngIf=\"form.controls.lName.errors?.pattern\">\r\n              Invalid Last name\r\n            </div>\r\n            <div *ngIf=\"!form.controls.lName.errors.required && !!form.controls.lName.errors.nfSpecialCharacters\" >Last Name Must be valid</div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Address</label>\r\n            <input [(ngModel)]=\"user.address\"  class=\"input\" placeholder=\"Enter Address\" formControlName=\"address\" maxlength=\"100\"/>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Email</label>\r\n            <input nfSpecialCharacters   [(ngModel)]=\"user.email\" required class=\"input\" placeholder=\"Enter Email\" formControlName=\"email\" maxlength=\"100\"/>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.controls.email.invalid && (form.controls.email.touched || form.controls.email.dirty)\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.email.errors?.required; else InvalidEmail\">\r\n              Email required\r\n            </div>\r\n            <ng-template #InvalidEmail>\r\n              Invalid Email\r\n            </ng-template>\r\n          </div>\r\n          <div *ngIf=\"!form.controls.email.errors?.required && !!form.controls.email.errors?.nfSpecialCharacters\" >Email Must be valid</div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Mobile Number</label>\r\n            <input nfSpecialCharacters   [(ngModel)]=\"user.msisdn\" required class=\"input\" placeholder=\"Enter Mobile Number\" formControlName=\"msisdn\" maxlength=\"11\"/>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.controls.msisdn.invalid && (form.controls.msisdn.touched || form.controls.msisdn.dirty)\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.msisdn.errors?.required\">\r\n              Mobile Number required\r\n            </div>\r\n            <div *ngIf=\"form.controls.msisdn.errors?.pattern\">\r\n              Invalid Mobile Number\r\n            </div>\r\n            <div *ngIf=\"!form.controls.msisdn.errors.required && !!form.controls.msisdn.errors.nfSpecialCharacters\" >Mobile Number Must be valid</div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-5 pt-3 pb-2\">\r\n        <div class=\"col-12 justify-content-center text-right\">\r\n          <button  type=\"submit\" [disabled]=\"!form.valid\" class=\"button button-green mr-2 \">\r\n            Save\r\n          </button>\r\n          <button (click)=\"cancel()\" class=\"button button-black mr-2\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sign-up/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-up/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(signUpService, router, formbuilder) {
        this.signUpService = signUpService;
        this.router = router;
        this.formbuilder = formbuilder;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.formInitComplete = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RegisterComponent.prototype.initForm = function () {
        this.formInitComplete = false;
        this.form = this.formbuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9_.-]{1,24}$')]],
            fName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z][a-zA-Z .'-]{1,24}$")]],
            lName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z][a-zA-Z .'-]{1,24}$")]],
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            msisdn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[+]?[0][1][1|0|2|5][0-9]{8}')]]
        });
        this.formInitComplete = true;
    };
    RegisterComponent.prototype.checkUsernameExists = function (username) {
        this.signUpService.checkUsernameExists(username).subscribe(function (res) {
            if (res.errors.length > 0 || res.status != 0)
                return true;
            return false;
        });
    };
    RegisterComponent.prototype.checkEmailExists = function (email) {
        this.signUpService.checkEmailExists(email).subscribe(function (res) {
            if (res.errors.length > 0 || res.status != 0)
                return true;
            return false;
        });
    };
    RegisterComponent.prototype.submitUser = function () {
        var _this = this;
        this.signUpService.createUser(this.user).subscribe(function (user) {
            console.log("Create user ==> ", user.responsePayload);
            if (user.status == 0)
                _this.router.navigateByUrl('login');
        });
    };
    RegisterComponent.prototype.validateUser = function () {
        var _this = this;
        this.signUpService.checkUsernameExists(this.user.userName).subscribe(function (username) {
            if (username.errors.length > 0 || username.status != 0) {
                console.log(username.errors.length);
                return false;
            }
            else {
                _this.signUpService.checkEmailExists(_this.user.email).subscribe(function (email) {
                    if (email.errors.length > 0 || email.status != 0) {
                        console.log(email.errors.length);
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/sign-up/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/sign-up/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignUpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-up/sign-up.service.ts ***!
  \********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpService = /** @class */ (function (_super) {
    __extends(SignUpService, _super);
    function SignUpService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    //Not Needed here
    SignUpService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.SIGNUP;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    SignUpService.prototype.createUser = function (user) {
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.REGISTRATION + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.SIGNUP;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](user, ""), this.httpOptions);
        return obs;
    };
    SignUpService.prototype.checkUsernameExists = function (username) {
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.REGISTRATION + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.checkUsernameExists;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](username, ""), this.httpOptions);
        return obs;
    };
    SignUpService.prototype.checkEmailExists = function (email) {
        var apiUrl = this.backendUrl + this.nonSecureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.REGISTRATION + _shared_static_defines__WEBPACK_IMPORTED_MODULE_2__["Defines"].API_ENDPOINTS.checkEmailExists;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](email, ""), this.httpOptions);
        return obs;
    };
    SignUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignUpService);
    return SignUpService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sign-up/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sign-up/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/register.component */ "./src/app/sign-up/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/sms-templates/add-edit-sms/add-edit-sms.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/sms-templates/add-edit-sms/add-edit-sms.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntcy10ZW1wbGF0ZXMvYWRkLWVkaXQtc21zL2FkZC1lZGl0LXNtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sms-templates/add-edit-sms/add-edit-sms.component.html":
/*!************************************************************************!*\
  !*** ./src/app/sms-templates/add-edit-sms/add-edit-sms.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/sms-templates/add-edit-sms/add-edit-sms.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sms-templates/add-edit-sms/add-edit-sms.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddEditSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSmsComponent", function() { return AddEditSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddEditSmsComponent = /** @class */ (function () {
    function AddEditSmsComponent() {
    }
    AddEditSmsComponent.prototype.ngOnInit = function () {
    };
    AddEditSmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit-sms',
            template: __webpack_require__(/*! ./add-edit-sms.component.html */ "./src/app/sms-templates/add-edit-sms/add-edit-sms.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-sms.component.css */ "./src/app/sms-templates/add-edit-sms/add-edit-sms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddEditSmsComponent);
    return AddEditSmsComponent;
}());



/***/ }),

/***/ "./src/app/sms-templates/sms-template-list/sms-template-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/sms-templates/sms-template-list/sms-template-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirmDialog{\r\n    width: 95.2%;\r\n    margin-left: -10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc21zLXRlbXBsYXRlcy9zbXMtdGVtcGxhdGUtbGlzdC9zbXMtdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Ntcy10ZW1wbGF0ZXMvc21zLXRlbXBsYXRlLWxpc3Qvc21zLXRlbXBsYXRlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtRGlhbG9ne1xyXG4gICAgd2lkdGg6IDk1LjIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sms-templates/sms-template-list/sms-template-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/sms-templates/sms-template-list/sms-template-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"hideDropDown()\" class=\"page-content sms-template\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6\">\r\n      <div class=\"page-title\">\r\n        SMS Templates\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6 col-lg-12 text-right\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <div\r\n            *ngIf=\"smsTemplateList && smsTemplateList.length > 1 && createTemplate === false && editTemplate === false\"\r\n            class=\"search-input\">\r\n            <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search by SMS Name/Script\">\r\n            <i class=\"icon-search icon\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE\" (successHandler)=\"createSms()\"\r\n            class=\"button button-green\">Create Template</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"createTemplate\" class=\"section animated fadeIn faster\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-left section-title\">\r\n        Create SMS Template\r\n      </div>\r\n    </div>\r\n    <div class=\"row \">\r\n      <div class=\"col-4\">\r\n\r\n        <form [formGroup]=\"smsForm\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">Template Name</label>\r\n            <input formControlName=\"title\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': sf.title.errors && (sf.title.touched || sf.title.dirty) }\" />\r\n            <div *ngIf=\"smsForm.get('title').errors && (smsForm.get('title').touched || smsForm.get('title').dirty)\">\r\n              <div *ngIf=\"!!sf.title.errors.required\" class=\"invalid-text\">Template name is required</div>\r\n              <div *ngIf=\"!!sf.title.errors.minlength\" class=\"invalid-text\">Template name must be at least 5\r\n                characters</div>\r\n              <div *ngIf=\"!!sf.title.errors.maxlength\" class=\"invalid-text\">Template name must not exceed 25\r\n                characters</div>\r\n              <div *ngIf=\"!!sf.title.errors.smsExists\" class=\"invalid-text\">This Template Name Already Exists</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-4 \">\r\n      <div class=\"col-12\">\r\n\r\n        <form [formGroup]=\"smsForm\">\r\n          <div class=\"form-input\">\r\n            <label class=\"form-input-label\">SMS Script</label>\r\n            <textarea autosize [minRows]=\"1\" [maxRows]=\"8\" formControlName=\"text\" class=\"input\"\r\n              [ngClass]=\"{ 'invalid-input': sf.text.errors && (sf.text.touched || sf.text.dirty) }\"></textarea>\r\n            <span style=\"font-size:12px;\"\r\n              [ngClass]=\"{'invalid-text': sf.text.errors && (sf.text.touched || sf.text.dirty)}\">{{smsScriptLength}}\r\n              / 160</span>\r\n            <span style=\"margin-left: 10px;\"\r\n              *ngIf=\"smsForm.get('text').errors && (smsForm.get('text').touched || smsForm.get('text').dirty)\">\r\n              <span *ngIf=\"!!sf.text.errors.required\" class=\"invalid-text\">SMS script is required</span>\r\n              <span *ngIf=\"!!sf.text.errors.minlength\" class=\"invalid-text\">SMS script must be at least 5\r\n                characters</span>\r\n              <span *ngIf=\"!!sf.text.errors.maxlength\" class=\"invalid-text\">SMS script must not exceed 160\r\n                characters</span>\r\n            </span>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5 pt-3 pb-2\">\r\n      <div class=\"col-12 justify-content-center text-right\">\r\n        <button (click)=\"saveSms(editableTemplate)\" class=\"button button-green mr-2 \">\r\n          Save Template\r\n        </button>\r\n        <button (click)=\"cancel(null)\" class=\"button button-black mr-2\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"smsTemplateList\">\r\n    <div *ngIf=\"setFilteredList(smsTemplateList | smstemplateTitletextFilter:filter)\"></div>\r\n    <div *ngIf=\"createTemplate === false\">\r\n      <div\r\n        *ngFor=\"let template of filteredList | orderBy: key : reverse : true | paginate: { itemsPerPage: perPage, currentPage: p }; let i = index\"\r\n        class=\"section animated fadeInUp faster\">\r\n        <div class=\"row no-gutters confirmDialog animated fadeIn faster text-center\"\r\n          *ngIf=\"deleteConfirm && (deleteConfirmId == template.id)\">\r\n          <div class=\"col-12\">Are you sure you want to delete <b>{{template.title}}</b> SMS Template?</div>\r\n          <div class=\"col-12 mt-2\">\r\n            <button class=\"button button-green mr-4\" (click)=\"deleteSms(template)\">DELETE</button>\r\n            <button class=\"button button-black \" (click)=\"hideConfirmDelete()\">CANCEL</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"template.id !== editableTemplateId\"\r\n          [ngClass]=\"{ 'blur': deleteConfirm && (deleteConfirmId == template.id)}\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 text-left campaign-text\">\r\n              {{template.title}}\r\n            </div>\r\n            <div *ngIf=\"createTemplate === false\" class=\"col-6 text-right\">\r\n              <a (click)=\"dropDownOpen(template)\" class=\"campaigns-item-actions-link\">\r\n                <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n              </a>\r\n            </div>\r\n            <div *ngIf=\"dropDownSmsId === template.id\" [ngClass]=\"{'hide':!dropDown}\"  class=\"dropdown animated flipInX faster\">\r\n              <ul class=\"list\">\r\n                <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.UPDATE\" [targetId]=\"template.id\"\r\n                  (successHandler)=\"editSms(template)\"><span class=\"fas fa-edit\"></span>Edit</li>\r\n                <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.DELETE\" [targetId]=\"template.id\"\r\n                  (successHandler)=\"confirmDelete(template.id)\"><span class=\"fas fa-trash\"></span>Delete</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-1\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-input\">\r\n                <label class=\"form-input-label\">Template ID</label>\r\n                <div class=\"title-gray-dark\"> {{template.id}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-1\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-input\">\r\n                <label class=\"form-input-label\">SMS Script</label>\r\n                <div class=\"title-gray-dark\"> {{template.text}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"(template.id === editableTemplateId) && editTemplate\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 text-left section-title\">\r\n              Edit SMS Template\r\n            </div>\r\n          </div>\r\n          <div class=\"row \">\r\n            <div class=\"col-4\">\r\n              <form [formGroup]=\"smsForm\">\r\n                <div class=\"form-input\">\r\n                  <label class=\"form-input-label\">Template Name</label>\r\n                  <input formControlName=\"title\" class=\"input\"\r\n                    [ngClass]=\"{ 'invalid-input': sf.title.errors && (sf.title.touched || sf.title.dirty || sf.title.value !== '') }\" />\r\n                  <div\r\n                    *ngIf=\"smsForm.get('title').errors && (smsForm.get('title').touched || smsForm.get('title').dirty || smsForm.get('title').value !== '')\">\r\n                    <div *ngIf=\"!!sf.title.errors.required\" class=\"invalid-text\">Template name is required</div>\r\n                    <div *ngIf=\"!!sf.title.errors.minlength\" class=\"invalid-text\">Template name must be at least 5\r\n                      characters</div>\r\n                    <div *ngIf=\"!!sf.title.errors.maxlength\" class=\"invalid-text\">Template name must not exceed 25\r\n                      characters</div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4 \">\r\n            <div class=\"col-12\">\r\n              <form [formGroup]=\"smsForm\">\r\n                <div class=\"form-input\">\r\n                  <label class=\"form-input-label\">SMS Script</label>\r\n                  <input formControlName=\"text\" class=\"input\"\r\n                    [ngClass]=\"{ 'invalid-input': sf.text.errors && (sf.text.touched || sf.text.dirty || smsForm.get('text').value != '') }\" />\r\n                  <span style=\"font-size:12px;\"\r\n                    [ngClass]=\"{'invalid-text': sf.text.errors && (sf.text.touched || sf.text.dirty || smsForm.get('text').value != '')}\">{{smsScriptLength}}\r\n                    / 160</span>\r\n                  <span style=\"margin-left: 10px;\"\r\n                    *ngIf=\"smsForm.get('text').errors && (smsForm.get('text').touched || smsForm.get('text').dirty || smsForm.get('text').value != '')\">\r\n                    <span *ngIf=\"!!sf.text.errors.required\" class=\"invalid-text\">SMS script is required</span>\r\n                    <span *ngIf=\"!!sf.text.errors.minlength\" class=\"invalid-text\">SMS script must be at least 5\r\n                      characters</span>\r\n                    <span *ngIf=\"!!sf.text.errors.maxlength\" class=\"invalid-text\">SMS script must not exceed 160\r\n                      characters</span>\r\n                  </span>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-5 pt-3 pb-2\">\r\n            <div class=\"col-12 justify-content-center text-right\">\r\n              <button (click)=\"saveSms(editableTemplate)\" class=\"button button-green mr-2 \">\r\n                Save Template\r\n              </button>\r\n              <button (click)=\"cancel()\" class=\"button button-black mr-2\">\r\n                Cancel\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"createTemplate === false && smsTemplateList.length > 0\" class=\"ngx-pagination\">\r\n      <div class=\"form-input form-input-select form-selectbox itemsNum animate fadeInUp\">\r\n        <label class=\"form-input-label\">Item/Page</label>\r\n        <select [(ngModel)]=\"perPage\" (change)=\"resetPagination()\" class=\"paginSelect\">\r\n          <option>3</option>\r\n          <option>5</option>\r\n          <option>10</option>\r\n          <option>20</option>\r\n          <option>50</option>\r\n        </select>\r\n      </div>\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"smsTemplateList && filteredList && filteredList.length === 0\">\r\n    <div class=\"row mt-4 animated fadeIn fast\">\r\n      <div class=\"col-12 mt-4 text-center\">\r\n        <div class=\"col-12 mt-4 fas fa-comment-slash fa-7x faded-grey\"></div>\r\n        <div class=\"col-12 mt-4 page-title faded-grey\"><b>No SMS Templates</b></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sms-templates/sms-template-list/sms-template-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/sms-templates/sms-template-list/sms-template-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: SmsTemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsTemplateListComponent", function() { return SmsTemplateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sms_templates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sms-templates.service */ "./src/app/sms-templates/sms-templates.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmsTemplateListComponent = /** @class */ (function () {
    function SmsTemplateListComponent(smsService, formBuilder) {
        this.smsService = smsService;
        this.formBuilder = formBuilder;
        this.smsTemplateList = new Array();
        this.filteredList = null;
        this.smsScriptLength = 0;
        this.deleteConfirm = false;
        //Pagination Filtering & Sorting
        this.p = 1;
        this.perPage = 10;
        //sorting
        this.key = 'title';
        this.reverse = false;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD;
    }
    SmsTemplateListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    SmsTemplateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initialize Sms Listing
        this.authorizationUrl = this.smsService.authorizationUrl;
        this.createTemplate = false;
        this.editTemplate = false;
        this.initialized = false;
        this.listSms();
        this.smsForm = this.formBuilder.group({
            id: null,
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25), this.nameExists()]],
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(160)]],
            language: [1],
            createdBy: 4
        });
        this.smsForm.controls.text.valueChanges.subscribe(function (val) {
            if (val) {
                _this.smsScriptLength = val.length;
            }
            else {
                _this.smsScriptLength = 0;
            }
        });
    };
    Object.defineProperty(SmsTemplateListComponent.prototype, "sf", {
        get: function () { return this.smsForm.controls; },
        enumerable: true,
        configurable: true
    });
    SmsTemplateListComponent.prototype.resetPagination = function () {
        if (this.p > 1) {
            this.p = 1;
        }
    };
    SmsTemplateListComponent.prototype.confirmDelete = function (id) {
        this.deleteConfirm = true;
        this.deleteConfirmId = id;
    };
    SmsTemplateListComponent.prototype.hideConfirmDelete = function () {
        this.deleteConfirm = false;
        this.deleteConfirmId = null;
    };
    SmsTemplateListComponent.prototype.hideDropDown = function () {
        this.dropDownClick++;
        if (this.dropDown && this.dropDownClick > 1) {
            this.dropDown = false;
            /*this.dropDownSmsId = null;*/
        }
    };
    SmsTemplateListComponent.prototype.showDropDown = function (campaign) {
        this.dropDownClick = 0;
        this.dropDown = true;
    };
    SmsTemplateListComponent.prototype.listSms = function () {
        var _this = this;
        this.smsService.listSmsTemplates().subscribe(function (templates) {
            if (templates.responsePayload.length === 0) {
                _this.smsTemplateList = new Array();
            }
            _this.smsTemplateList = templates.responsePayload;
            _this.filteredList = new Array();
            _this.filteredList = _this.smsTemplateList;
        });
    };
    SmsTemplateListComponent.prototype.dropDownOpen = function (smsModel) {
        this.dropDownSmsId = smsModel.id;
        this.dropDownClick = 0;
        this.dropDown = true;
    };
    SmsTemplateListComponent.prototype.dropDownClose = function () {
        this.dropDownSmsId = null;
        this.dropDown = false;
    };
    SmsTemplateListComponent.prototype.clickedOut = function (event) {
        this.dropDownClose();
    };
    SmsTemplateListComponent.prototype.editSms = function (smsModel) {
        this.editableTemplateId = smsModel.id;
        this.smsForm.setValue({
            id: smsModel.id,
            title: smsModel.title,
            text: smsModel.text,
            language: smsModel.language,
            createdBy: smsModel.createdBy
        });
        this.smsForm.get('title').clearValidators();
        this.smsForm.get('title').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]);
        this.editableTemplate = Object.assign({}, this.smsForm.value);
        this.editTemplate = true;
        this.dropDownClose();
    };
    SmsTemplateListComponent.prototype.deleteSms = function (smsModel) {
        var _this = this;
        this.smsService.deleteSmsTemplate(smsModel).subscribe(function (template) {
            if (template.status === 0) {
                _this.smsTemplateList = _this.smsTemplateList.filter(function (x) { return x.id !== smsModel.id; });
            }
        });
        this.hideConfirmDelete();
        this.dropDownClose();
    };
    SmsTemplateListComponent.prototype.saveSms = function (smsModel) {
        var _this = this;
        if (this.smsForm.invalid) {
            this.smsForm.controls.title.markAsTouched();
            this.smsForm.controls.text.markAsTouched();
            return;
        }
        if (this.createTemplate) {
            this.smsService.createSmsTemplate(this.smsForm.value).subscribe(function (template) {
                if (template.warnings.length === 0) {
                    console.log("Creating smsTemplate ==> ", template.responsePayload);
                    smsModel = Object.assign({}, _this.smsForm.value);
                    _this.smsTemplateList.push(smsModel);
                    _this.createTemplate = false;
                    _this.editableTemplate = null;
                    _this.editableTemplateId = null;
                    _this.listSms();
                }
            });
        }
        if (this.editTemplate) {
            this.smsService.updateSmsTemplate(this.smsForm.value).subscribe(function (template) {
                console.log("Updating smsTemplate ==> ", template.responsePayload);
                _this.smsTemplateList[_this.smsTemplateList.findIndex(function (record) { return record.id === _this.editableTemplate.id; })] = _this.smsForm.value;
                _this.editableTemplateId = null;
                _this.editTemplate = false;
            });
        }
    };
    SmsTemplateListComponent.prototype.cancel = function () {
        if (this.editTemplate) {
            this.editableTemplateId = null;
            this.editTemplate = false;
            this.smsForm.controls.title.markAsUntouched();
            this.smsForm.controls.text.markAsUntouched();
        }
        if (this.createTemplate) {
            this.createTemplate = false;
            this.smsForm.markAsUntouched();
            this.smsForm.markAsPristine();
        }
    };
    SmsTemplateListComponent.prototype.createSms = function () {
        this.createTemplate = true;
        this.smsForm.reset();
        this.smsForm.setValue({
            id: null,
            title: null,
            text: null,
            language: 1,
            createdBy: 4
        });
        this.smsForm.markAsUntouched();
        this.smsForm.markAsPristine();
        this.smsForm.get('title').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40), this.nameExists()]);
    };
    SmsTemplateListComponent.prototype.nameExists = function () {
        var _this = this;
        return function (control) {
            var found = false;
            _this.smsTemplateList.forEach(function (sms) {
                if (control.value != null && sms.title.trim().toLowerCase() === control.value.trim().toLowerCase()) {
                    found = true;
                }
            });
            if (found) {
                return { 'smsExists': true };
            }
            return null;
        };
    };
    SmsTemplateListComponent.prototype.setFilteredList = function (filtered) {
        this.filteredList = filtered;
    };
    SmsTemplateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-sms-template-list',
            template: __webpack_require__(/*! ./sms-template-list.component.html */ "./src/app/sms-templates/sms-template-list/sms-template-list.component.html"),
            styles: [__webpack_require__(/*! ./sms-template-list.component.css */ "./src/app/sms-templates/sms-template-list/sms-template-list.component.css")]
        }),
        __metadata("design:paramtypes", [_sms_templates_service__WEBPACK_IMPORTED_MODULE_1__["SmsTemplatesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SmsTemplateListComponent);
    return SmsTemplateListComponent;
}());



/***/ }),

/***/ "./src/app/sms-templates/sms-templates.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sms-templates/sms-templates.module.ts ***!
  \*******************************************************/
/*! exports provided: SmsTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsTemplatesModule", function() { return SmsTemplatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_sms_add_edit_sms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-sms/add-edit-sms.component */ "./src/app/sms-templates/add-edit-sms/add-edit-sms.component.ts");
/* harmony import */ var _sms_template_list_sms_template_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sms-template-list/sms-template-list.component */ "./src/app/sms-templates/sms-template-list/sms-template-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _shared_Pipes_smstemplate_titletext_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/Pipes/smstemplate-titletext-filter.pipe */ "./src/app/shared/Pipes/smstemplate-titletext-filter.pipe.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SmsTemplatesModule = /** @class */ (function () {
    function SmsTemplatesModule() {
    }
    SmsTemplatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_edit_sms_add_edit_sms_component__WEBPACK_IMPORTED_MODULE_2__["AddEditSmsComponent"], _sms_template_list_sms_template_list_component__WEBPACK_IMPORTED_MODULE_3__["SmsTemplateListComponent"], _shared_Pipes_smstemplate_titletext_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["SmstemplateTitletextFilter"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_autosize__WEBPACK_IMPORTED_MODULE_9__["AutosizeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ], exports: [_add_edit_sms_add_edit_sms_component__WEBPACK_IMPORTED_MODULE_2__["AddEditSmsComponent"], _sms_template_list_sms_template_list_component__WEBPACK_IMPORTED_MODULE_3__["SmsTemplateListComponent"]]
        })
    ], SmsTemplatesModule);
    return SmsTemplatesModule;
}());



/***/ }),

/***/ "./src/app/sms-templates/sms-templates.service.ts":
/*!********************************************************!*\
  !*** ./src/app/sms-templates/sms-templates.service.ts ***!
  \********************************************************/
/*! exports provided: SmsTemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsTemplatesService", function() { return SmsTemplatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmsTemplatesService = /** @class */ (function (_super) {
    __extends(SmsTemplatesService, _super);
    function SmsTemplatesService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    SmsTemplatesService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.SMSTEMPLATES;
        console.log("Authorization Url =>", this.authorizationUrl);
    };
    SmsTemplatesService.prototype.listSmsTemplates = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.SMSTEMPLATES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](null, ''), this.httpOptions);
        return obs;
    };
    SmsTemplatesService.prototype.getSmsTemplate = function (smsTemplate) {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.SMSTEMPLATES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](smsTemplate, ''), this.httpOptions);
        return obs;
    };
    SmsTemplatesService.prototype.updateSmsTemplate = function (smsTemplate) {
        console.log('Service Create Template ==> ', smsTemplate);
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.SMSTEMPLATES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.UPDATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](smsTemplate, ''), this.httpOptions);
        return obs;
    };
    SmsTemplatesService.prototype.createSmsTemplate = function (smsTemplate) {
        console.log('Service Create Template ==> ', smsTemplate);
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.SMSTEMPLATES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.CREATE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](smsTemplate, ''), this.httpOptions);
        return obs;
    };
    SmsTemplatesService.prototype.deleteSmsTemplate = function (smsTemplate) {
        console.log('Service Delete Template ==> ', smsTemplate);
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.SMSTEMPLATES + _shared_static_defines__WEBPACK_IMPORTED_MODULE_3__["Defines"].API_ENDPOINTS.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_4__["ApiRequest"](smsTemplate, ''), this.httpOptions);
        return obs;
    };
    SmsTemplatesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SmsTemplatesService);
    return SmsTemplatesService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.css":
/*!****************************************************************!*\
  !*** ./src/app/smsc/add-edit-smsc/add-edit-smsc.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntc2MvYWRkLWVkaXQtc21zYy9hZGQtZWRpdC1zbXNjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/smsc/add-edit-smsc/add-edit-smsc.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content groups-details\">\r\n  <div class=\"section\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"!isCreate\" class=\"col-12 text-left section-title\">\r\n        Edit SMSC Account\r\n      </div>\r\n      <div *ngIf=\"isCreate\" class=\"col-12 text-left section-title\">\r\n        Create SMSC Account\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"mainForm\">\r\n      <div *ngIf=\"smscModel\" class=\"form-input\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <label class=\"form-input-label\">SMSC Name</label>\r\n\r\n            <input  nfSpecialCharacters    type=\"text\" pInputText [(ngModel)]=\"smscModel.name\" formControlName=\"smscName\" />\r\n            <div *ngIf=\"!!f.smscName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"!!f.smscName.errors.required\">Smsc name is required</div>\r\n              <div *ngIf=\"!!f.smscName.errors.maxlength\" class=\"invalid-text\">SMSC Name must not exceed 25\r\n                characters</div>\r\n                <div *ngIf=\"!f.smscName.errors.required && !!f.smscName.errors.nfSpecialCharacters\" >Smsc Name Must be valid</div>\r\n   \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-input-label\">SMSC IP</label>\r\n            <input type=\"text\" nfSpecialCharacters   pInputText [(ngModel)]=\"smscModel.ip\" formControlName=\"smscIp\" />\r\n            <div *ngIf=\"submitted && !!f.smscIp.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"!!f.smscIp.errors.required\">Smsc Ip is required</div>\r\n              <div *ngIf=\"!f.smscIp.errors.required && !!f.smscIp.errors.nfSpecialCharacters\" >Smsc Ip Must be valid</div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <label class=\"form-input-label\">SMSC Port</label>\r\n            <input type=\"number\" pInputText [(ngModel)]=\"smscModel.port\" formControlName=\"smscPort\" />\r\n            <div *ngIf=\"submitted && !!f.smscPort.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"!!f.smscPort.errors.required\">Smsc port is required</div>\r\n              <div *ngIf=\"!!f.smscPort.errors.min\">Smsc port is incorrect</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-input-label\">SMSC Username</label>\r\n            <input  nfSpecialCharacters   type=\"text\" pInputText [(ngModel)]=\"smscModel.userName\" formControlName=\"smscUsername\" />\r\n            <div *ngIf=\"!!f.smscUsername.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"!!f.smscUsername.errors.required\">Smsc username is required</div>\r\n              <div *ngIf=\"!!f.smscUsername.errors.maxlength\" class=\"invalid-text\">SMSC Username must not exceed 25\r\n                characters</div>\r\n                <div *ngIf=\"!f.smscUsername.errors.required && !!f.smscUsername.errors.nfSpecialCharacters\" >Smsc username Must be valid</div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <label class=\"form-input-label\">SMSC Password</label>\r\n            <input nfSpecialCharacters   type=\"text\" pInputText [(ngModel)]=\"smscModel.password\" formControlName=\"smscPassword\" />\r\n            <div *ngIf=\"submitted && !!f.smscPassword.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"!!f.smscPassword.errors.required\">Smsc password is required</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-3\">\r\n            <div class=\"form-input form-selectbox \">\r\n              <label class=\"form-input-label\"> APP profile</label>\r\n              <p-dropdown [options]=\"profileItems\" formControlName=\"appProfile\" placeholder=\"\"\r\n                [(ngModel)]=\"smscModel.appProfileId\" filter=\"true\">\r\n\r\n                <ng-template let-profile pTemplate=\"item\">\r\n                  <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\r\n\r\n                    <div style=\"font-size:14px;float:right;margin-top:4px\">{{profile.label}}</div>\r\n                  </div>\r\n                </ng-template>\r\n              </p-dropdown>\r\n              <div *ngIf=\"submitted && !!f.appProfile.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"!!f.appProfile.errors.required\">select App profile </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-5 pt-3 pb-2\">\r\n        <div class=\"col-12 justify-content-center text-right\">\r\n          <button (click)=\"save()\" class=\"button button-green mr-2 \">\r\n            Save\r\n          </button>\r\n          <button (click)=\"cancel()\" class=\"button button-black mr-2\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/smsc/add-edit-smsc/add-edit-smsc.component.ts ***!
  \***************************************************************/
/*! exports provided: AddEditSmscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSmscComponent", function() { return AddEditSmscComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_models_smsc_account_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/smsc-account-model */ "./src/app/shared/models/smsc-account-model.ts");
/* harmony import */ var _smsc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../smsc.service */ "./src/app/smsc/smsc.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_profiles_app_profiles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-profiles/app-profiles.service */ "./src/app/app-profiles/app-profiles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEditSmscComponent = /** @class */ (function () {
    function AddEditSmscComponent(smscService, appProfilesService, route, router, location, formBuilder) {
        this.smscService = smscService;
        this.appProfilesService = appProfilesService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.profileItems = new Array();
        this.isCreate = true;
        this.submitted = false;
    }
    Object.defineProperty(AddEditSmscComponent.prototype, "f", {
        get: function () { return this.mainForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddEditSmscComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appProfilesService.list().subscribe(function (res) {
            console.log("App profile => ", _this.appProfilesList);
            _this.allAppProfiles = res.responsePayload;
            _this.profileItems.push({ label: "select app profile ", value: -1 });
            _this.allAppProfiles.forEach(function (profile) {
                _this.profileItems.push({ label: profile.appProfileName, value: profile.appProfileId });
                //debugger;
            });
            _this.profileItems = JSON.parse(JSON.stringify(_this.profileItems));
        });
        this.mainForm = this.formBuilder.group({
            smscName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]],
            smscIp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            smscPort: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(0)]],
            smscUsername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]],
            smscPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            appProfile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        if (this.route.snapshot.routeConfig.path == "smsc/get/:id") {
            var id = +this.route.snapshot.paramMap.get('id');
            this.get(id);
            this.isCreate = false;
        }
        else {
            this.smscModel = new src_app_shared_models_smsc_account_model__WEBPACK_IMPORTED_MODULE_3__["SmscAccountModel"];
        }
    };
    AddEditSmscComponent.prototype.get = function (id) {
        var _this = this;
        this.smscService.get(id)
            .subscribe(function (response) { return _this.smscModel = response.responsePayload; });
    };
    AddEditSmscComponent.prototype.save = function () {
        this.smscService.scrollIfFormHasErrors(this.mainForm);
        this.submitted = true;
        if (this.mainForm.invalid) {
            return;
        }
        if (!this.isCreate) {
            this.update();
        }
        else {
            this.create();
        }
    };
    AddEditSmscComponent.prototype.create = function () {
        var _this = this;
        this.smscService.create(this.smscModel)
            .subscribe(function (response) {
            if (response.status === 0) {
                _this.router.navigate(["smsc"]);
            }
        });
    };
    AddEditSmscComponent.prototype.update = function () {
        var _this = this;
        this.smscService.update(this.smscModel)
            .subscribe(function (response) {
            if (response.status === 0) {
                _this.router.navigate(["smsc"]);
            }
        });
    };
    AddEditSmscComponent.prototype.cancel = function () {
        this.location.back();
    };
    AddEditSmscComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-add-edit-group',
            template: __webpack_require__(/*! ./add-edit-smsc.component.html */ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-smsc.component.css */ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.css")]
        }),
        __metadata("design:paramtypes", [_smsc_service__WEBPACK_IMPORTED_MODULE_4__["SmscService"],
            src_app_app_profiles_app_profiles_service__WEBPACK_IMPORTED_MODULE_6__["AppProfilesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], AddEditSmscComponent);
    return AddEditSmscComponent;
}());



/***/ }),

/***/ "./src/app/smsc/smsc-list/smsc-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/smsc/smsc-list/smsc-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntc2Mvc21zYy1saXN0L3Ntc2MtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/smsc/smsc-list/smsc-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/smsc/smsc-list/smsc-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"hideDropDown()\" class=\"page-content groups\">\r\n    <div class=\"groups\">\r\n        <div class=\"row no-gutters\" onclick=\"closeNav()\">\r\n            <div class=\"p-col-5\">\r\n                <div class=\"page-title\">\r\n                    SMSC Accounts\r\n                </div>\r\n            </div>\r\n            <div class=\"p-col-7 col-lg-12 text-right\">\r\n                <div class=\"row\">\r\n                    <div class=\"p-col-8\">\r\n                        <div class=\"search-input\">\r\n                            <input [(ngModel)]=\"filter\" type=\"text\" class=\"\" placeholder=\"Search By SMSC Name\">\r\n                            <i class=\"icon-search icon\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p-col-4\">\r\n                        <button type=\"button\" ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.CREATE\"\r\n                            (successHandler)=\"create()\" label=\"Create Group\" class=\"button button-green\">Create SMSC\r\n                            Account</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"smscList\">\r\n            <div *ngIf=\"setFilteredSmscList(smscList | smscNameFilter: filter)\"></div>\r\n            <div\r\n                *ngFor=\"let smsc of filteredSmscList | orderBy: key  | paginate: { itemsPerPage: perPage, currentPage: p }\">\r\n                <div class=\"section row no-gutters\">\r\n                    <div class=\"p-col-3 heading-6 title-robotomedium pt-2\">{{smsc.name}}</div>\r\n                    <div class=\"p-col-3\">{{smsc.ip}}</div>\r\n                    <div class=\"col text-right my-auto\">\r\n                        <a (click)=\"dropDownOpen(smsc)\" class=\"campaigns-item-actions-link\">\r\n                            <i class=\"icon-dropdown-dots icon icon-lg icon-gray\"></i>\r\n                        </a>\r\n                        <div *ngIf=\"(selectedId === smsc.accountId)\" [ngClass]=\"{'hide':!dropDown}\"\r\n                            class=\"dropdown animated faster fadeInUp\">\r\n                            <ul class=\"list\">\r\n                                <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.UPDATE\"\r\n                                    [targetId]=\"smsc.accountId\" (successHandler)=\"update()\"><span\r\n                                        class=\"icon icon-settings\"></span>Update</li>\r\n                                <li ndpAuthorize [targetUrl]=\"authorizationUrl+ defines.DELETE\"\r\n                                    [targetId]=\"smsc.accountId\" (successHandler)=\"delete(smsc)\"><span\r\n                                        class=\"icon icon-sms\"></span>Delete</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"filteredSmscList.length == 0 && inialized\">\r\n                <div class=\"row mt-4 animated fadeIn fast\">\r\n                    <div class=\"col-12 mt-4 text-center\">\r\n                        <div class=\"col-12 mt-4 fas fa-user-slash fa-7x faded-grey\"></div>\r\n                        <div class=\"col-12 mt-4 page-title faded-grey\"><b>No Smsc Accounts Found</b></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ngx-pagination\">\r\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/smsc/smsc-list/smsc-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/smsc/smsc-list/smsc-list.component.ts ***!
  \*******************************************************/
/*! exports provided: SmscListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmscListComponent", function() { return SmscListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/ndp-message.service */ "./src/app/shared/services/ndp-message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smsc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../smsc.service */ "./src/app/smsc/smsc.service.ts");
/* harmony import */ var src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/static/defines */ "./src/app/shared/static/defines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmscListComponent = /** @class */ (function () {
    function SmscListComponent(messageService, smscService, router) {
        this.messageService = messageService;
        this.smscService = smscService;
        this.router = router;
        this.filteredSmscList = null;
        this.inialized = false;
        /*=============================*/
        /* Pagination Filtering & Sorting*/
        this.p = 1;
        this.perPage = 4;
        /*=============================*/
        /*SORTING*/
        this.key = 'name';
        this.reverse = false;
        this.defines = src_app_shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD;
    }
    SmscListComponent.prototype.ngOnInit = function () {
        this.authorizationUrl = this.smscService.authorizationUrl;
        this.smscList = new Array();
        this.filteredSmscList = this.smscList;
        this.list();
    };
    SmscListComponent.prototype.dropDownOpen = function (smsc) {
        this.selectedId = smsc.accountId;
        this.dropDownId = this.selectedId;
        this.dropDownClick = 0;
        this.dropDown = true;
    };
    SmscListComponent.prototype.dropDownClose = function () {
        this.selectedId = null;
        this.dropDown = false;
    };
    SmscListComponent.prototype.hideDropDown = function () {
        this.dropDownClick++;
        if (this.dropDown && this.dropDownClick > 1) {
            this.dropDown = false;
            this.dropDownId = null;
        }
    };
    SmscListComponent.prototype.list = function () {
        var _this = this;
        this.smscService.list().subscribe(function (response) {
            _this.smscList = response.responsePayload;
            _this.inialized = true;
            console.log('Retrieved Accounts ', response.responsePayload);
        });
    };
    SmscListComponent.prototype.update = function () {
        this.router.navigateByUrl('/smsc/get/' + this.selectedId);
    };
    SmscListComponent.prototype.create = function () {
        this.router.navigateByUrl('/smsc/create');
    };
    SmscListComponent.prototype.delete = function (smsc) {
        var _this = this;
        this.smscService.delete(smsc.accountId).subscribe(function (response) {
            _this.smscList = _this.smscList.filter(function (x) { return x.accountId !== smsc.accountId; });
            _this.filteredSmscList = _this.filteredSmscList.filter(function (x) { return x.accountId !== smsc.accountId; });
        });
        this.dropDownClose();
    };
    SmscListComponent.prototype.setFilteredSmscList = function (filtered) {
        this.filteredSmscList = filtered;
    };
    SmscListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ndp-smsc-list',
            template: __webpack_require__(/*! ./smsc-list.component.html */ "./src/app/smsc/smsc-list/smsc-list.component.html"),
            styles: [__webpack_require__(/*! ./smsc-list.component.css */ "./src/app/smsc/smsc-list/smsc-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_ndp_message_service__WEBPACK_IMPORTED_MODULE_1__["NdpMessageService"],
            _smsc_service__WEBPACK_IMPORTED_MODULE_3__["SmscService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SmscListComponent);
    return SmscListComponent;
}());



/***/ }),

/***/ "./src/app/smsc/smsc.module.ts":
/*!*************************************!*\
  !*** ./src/app/smsc/smsc.module.ts ***!
  \*************************************/
/*! exports provided: SmscModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmscModule", function() { return SmscModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_smsc_add_edit_smsc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-smsc/add-edit-smsc.component */ "./src/app/smsc/add-edit-smsc/add-edit-smsc.component.ts");
/* harmony import */ var _smsc_list_smsc_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smsc-list/smsc-list.component */ "./src/app/smsc/smsc-list/smsc-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_Pipes_smsc_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Pipes/smsc-filter.pipe */ "./src/app/shared/Pipes/smsc-filter.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SmscModule = /** @class */ (function () {
    function SmscModule() {
    }
    SmscModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_edit_smsc_add_edit_smsc_component__WEBPACK_IMPORTED_MODULE_2__["AddEditSmscComponent"], _smsc_list_smsc_list_component__WEBPACK_IMPORTED_MODULE_3__["SmscListComponent"], _shared_Pipes_smsc_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SmscFilterPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"]
            ],
            exports: [
                _add_edit_smsc_add_edit_smsc_component__WEBPACK_IMPORTED_MODULE_2__["AddEditSmscComponent"],
                _smsc_list_smsc_list_component__WEBPACK_IMPORTED_MODULE_3__["SmscListComponent"]
            ]
        })
    ], SmscModule);
    return SmscModule;
}());



/***/ }),

/***/ "./src/app/smsc/smsc.service.ts":
/*!**************************************!*\
  !*** ./src/app/smsc/smsc.service.ts ***!
  \**************************************/
/*! exports provided: SmscService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmscService", function() { return SmscService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/base-service */ "./src/app/shared/services/base-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/static/defines */ "./src/app/shared/static/defines.ts");
/* harmony import */ var _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/api-request */ "./src/app/shared/models/api-request.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SmscService = /** @class */ (function (_super) {
    __extends(SmscService, _super);
    function SmscService(client) {
        var _this = _super.call(this, client) || this;
        _this.client = client;
        return _this;
    }
    SmscService.prototype.initAuthorizationUrl = function () {
        this.authorizationUrl += this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.SMSC;
    };
    SmscService.prototype.create = function (model) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.SMSC + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.CREATE;
        console.log("model before create is => ", model);
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('create smsc: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    SmscService.prototype.update = function (model) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.SMSC + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.UPDATE;
        console.log("model before update is => ", model);
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](model, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('update smsc: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    SmscService.prototype.get = function (id) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.SMSC + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.GET;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](id, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (group) { return console.log('get smsc by id: ' + group); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    SmscService.prototype.delete = function (id) {
        var apiUrl = this.backendUrl + this.secureApi +
            _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.SMSC + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.DELETE;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](id, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (smsc) { return console.log('delete smsc by id: ' + smsc); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    SmscService.prototype.list = function () {
        var apiUrl = this.backendUrl + this.secureApi + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_ENDPOINTS.SMSC + _shared_static_defines__WEBPACK_IMPORTED_MODULE_4__["Defines"].API_CRUD.LIST;
        var obs = this.http.post(apiUrl, new _shared_models_api_request__WEBPACK_IMPORTED_MODULE_5__["ApiRequest"](null, ""), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (list_) { return console.log('get List smsc: ' + list_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Error')));
        return obs;
    };
    SmscService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SmscService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SmscService);
    return SmscService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    backendUrl: "http://localhost:9089/B2bAdmin",
    backendContext: "/B2bAdmin",
    secureApiUrl: "/b2bApi",
    nonSecureApiUrl: "",
    campaignAdminId: 6, campaignManagerId: 5, campaignViewerId: 7
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    backendUrl: "http://10.208.9.82:8085/ndpadmin",
    backendContext: "/ndpadmin",
    secureApiUrl: "/b2bApi",
    nonSecureApiUrl: "",
    campaignAdminId: 6, campaignManagerId: 5, campaignViewerId: 7
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GitLab_10.0.10.167\Etisalat-NDP\Code\UI\B2b-Admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map