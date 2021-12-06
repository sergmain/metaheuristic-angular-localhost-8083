(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "4u49":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@biesbjerg/ngx-translate-extract-marker/__ivy_ngcc__/fesm2015/biesbjerg-ngx-translate-extract-marker.js ***!
  \******************************************************************************************************************************/
/*! exports provided: marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} key
 * @return {?}
 */
function marker(key) {
    return key;
}



//# sourceMappingURL=biesbjerg-ngx-translate-extract-marker.js.map

/***/ }),

/***/ "J0F4":
/*!*********************************************************************************!*\
  !*** ./src/app/services/dispatcher-asset-mode/dispatcher-asset-mode.service.ts ***!
  \*********************************************************************************/
/*! exports provided: DispatcherAssetModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherAssetModeService", function() { return DispatcherAssetModeService; });
/* harmony import */ var _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/app/enums/DispatcherAssetMode */ "mVEk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DispatcherAssetModeService {
    constructor() { }
    isLocal(value) {
        if (value === _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__["DispatcherAssetMode"].local) {
            return true;
        }
        return false;
    }
    isReplicated(value) {
        if (value === _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__["DispatcherAssetMode"].replicated) {
            return true;
        }
        return false;
    }
    isSource(value) {
        if (value === _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__["DispatcherAssetMode"].source) {
            return true;
        }
        return false;
    }
}
DispatcherAssetModeService.ɵfac = function DispatcherAssetModeService_Factory(t) { return new (t || DispatcherAssetModeService)(); };
DispatcherAssetModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DispatcherAssetModeService, factory: DispatcherAssetModeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YcRZ":
/*!*****************************************!*\
  !*** ./src/app/enums/BatchExecState.ts ***!
  \*****************************************/
/*! exports provided: BatchExecState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchExecState", function() { return BatchExecState; });
var BatchExecState;
(function (BatchExecState) {
    BatchExecState[BatchExecState["Error"] = -1] = "Error";
    BatchExecState[BatchExecState["Unknown"] = 0] = "Unknown";
    BatchExecState[BatchExecState["Stored"] = 1] = "Stored";
    BatchExecState[BatchExecState["Preparing"] = 2] = "Preparing";
    BatchExecState[BatchExecState["Processing"] = 3] = "Processing";
    BatchExecState[BatchExecState["Finished"] = 4] = "Finished";
    BatchExecState[BatchExecState["Archived"] = 5] = "Archived";
})(BatchExecState || (BatchExecState = {}));


/***/ }),

/***/ "iA33":
/*!*******************************************!*\
  !*** ./src/app/enums/ExecContextState.ts ***!
  \*******************************************/
/*! exports provided: ExecContextState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecContextState", function() { return ExecContextState; });
var ExecContextState;
(function (ExecContextState) {
    ExecContextState["ERROR"] = "ERROR";
    ExecContextState["UNKNOWN"] = "UNKNOWN";
    ExecContextState["NONE"] = "NONE";
    ExecContextState["PRODUCING"] = "PRODUCING";
    ExecContextState["PRODUCED"] = "PRODUCED";
    ExecContextState["STARTED"] = "STARTED";
    ExecContextState["STOPPED"] = "STOPPED";
    ExecContextState["FINISHED"] = "FINISHED";
    ExecContextState["DOESNT_EXIST"] = "DOESNT_EXIST";
})(ExecContextState || (ExecContextState = {}));


/***/ }),

/***/ "iuQL":
/*!********************************************!*\
  !*** ./src/app/guards/role-route.guard.ts ***!
  \********************************************/
/*! exports provided: RoleRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRouteGuard", function() { return RoleRouteGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication */ "q4ZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RoleRouteGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        var _a, _b, _c, _d;
        if (!_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.groupCollapsed('%c%s', 'color:orange;', state.url);
            console.log('%c%s', 'color:blue;', 'requiredRoles: ', this.authenticationService.convertRolesToString(route.data.requiredRoles));
            console.log('%c%s', 'color:blue;', this.authenticationService.user.username + ': ', this.authenticationService.convertRolesToString((_b = (_a = this.authenticationService.user) === null || _a === void 0 ? void 0 : _a.authorities) === null || _b === void 0 ? void 0 : _b.map(v => v.authority)));
            console.groupEnd();
        }
        let check = false;
        const roles = this.authenticationService.getUserRole();
        (_d = (_c = route.data) === null || _c === void 0 ? void 0 : _c.requiredRoles) === null || _d === void 0 ? void 0 : _d.forEach(role => {
            if (roles.has(role)) {
                check = true;
            }
        });
        return check;
    }
}
RoleRouteGuard.ɵfac = function RoleRouteGuard_Factory(t) { return new (t || RoleRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
RoleRouteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleRouteGuard, factory: RoleRouteGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mVEk":
/*!**********************************************!*\
  !*** ./src/app/enums/DispatcherAssetMode.ts ***!
  \**********************************************/
/*! exports provided: DispatcherAssetMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherAssetMode", function() { return DispatcherAssetMode; });
var DispatcherAssetMode;
(function (DispatcherAssetMode) {
    DispatcherAssetMode["local"] = "local";
    DispatcherAssetMode["source"] = "source";
    DispatcherAssetMode["replicated"] = "replicated";
})(DispatcherAssetMode || (DispatcherAssetMode = {}));


/***/ }),

/***/ "u8e3":
/*!*************************************!*\
  !*** ./src/app/enums/LoadStates.ts ***!
  \*************************************/
/*! exports provided: LoadStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadStates", function() { return LoadStates; });
var LoadStates;
(function (LoadStates) {
    LoadStates[LoadStates["show"] = 0] = "show";
    LoadStates[LoadStates["loading"] = 1] = "loading";
    LoadStates[LoadStates["empty"] = 2] = "empty";
    LoadStates[LoadStates["wait"] = 3] = "wait";
    LoadStates[LoadStates["firstLoading"] = 4] = "firstLoading";
})(LoadStates || (LoadStates = {}));


/***/ }),

/***/ "yGeL":
/*!**********************************!*\
  !*** ./src/app/helpers/state.ts ***!
  \**********************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
const state = {
    show: 'show',
    loading: 'loading',
    empty: 'empty',
    wait: 'wait',
    firstLoading: 'firstLoading'
};



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map