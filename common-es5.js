(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "4u49": function u49(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "marker", function () {
        return marker;
      });
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
      } //# sourceMappingURL=biesbjerg-ngx-translate-extract-marker.js.map

      /***/

    },

    /***/
    "J0F4": function J0F4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DispatcherAssetModeService", function () {
        return DispatcherAssetModeService;
      });
      /* harmony import */


      var _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/enums/DispatcherAssetMode */
      "mVEk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DispatcherAssetModeService = /*#__PURE__*/function () {
        function DispatcherAssetModeService() {
          _classCallCheck(this, DispatcherAssetModeService);
        }

        _createClass(DispatcherAssetModeService, [{
          key: "isLocal",
          value: function isLocal(value) {
            if (value === _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__["DispatcherAssetMode"].local) {
              return true;
            }

            return false;
          }
        }, {
          key: "isReplicated",
          value: function isReplicated(value) {
            if (value === _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__["DispatcherAssetMode"].replicated) {
              return true;
            }

            return false;
          }
        }, {
          key: "isSource",
          value: function isSource(value) {
            if (value === _src_app_enums_DispatcherAssetMode__WEBPACK_IMPORTED_MODULE_0__["DispatcherAssetMode"].source) {
              return true;
            }

            return false;
          }
        }]);

        return DispatcherAssetModeService;
      }();

      DispatcherAssetModeService.ɵfac = function DispatcherAssetModeService_Factory(t) {
        return new (t || DispatcherAssetModeService)();
      };

      DispatcherAssetModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DispatcherAssetModeService,
        factory: DispatcherAssetModeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "YcRZ": function YcRZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchExecState", function () {
        return BatchExecState;
      });

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
      /***/

    },

    /***/
    "iA33": function iA33(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecContextState", function () {
        return ExecContextState;
      });

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
      /***/

    },

    /***/
    "iuQL": function iuQL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleRouteGuard", function () {
        return RoleRouteGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication */
      "q4ZW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RoleRouteGuard = /*#__PURE__*/function () {
        function RoleRouteGuard(authenticationService, router) {
          _classCallCheck(this, RoleRouteGuard);

          this.authenticationService = authenticationService;
          this.router = router;
        }

        _createClass(RoleRouteGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _a, _b, _c, _d;

            if (!_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
              console.groupCollapsed('%c%s', 'color:orange;', state.url);
              console.log('%c%s', 'color:blue;', 'requiredRoles: ', this.authenticationService.convertRolesToString(route.data.requiredRoles));
              console.log('%c%s', 'color:blue;', this.authenticationService.user.username + ': ', this.authenticationService.convertRolesToString((_b = (_a = this.authenticationService.user) === null || _a === void 0 ? void 0 : _a.authorities) === null || _b === void 0 ? void 0 : _b.map(function (v) {
                return v.authority;
              })));
              console.groupEnd();
            }

            var check = false;
            var roles = this.authenticationService.getUserRole();
            (_d = (_c = route.data) === null || _c === void 0 ? void 0 : _c.requiredRoles) === null || _d === void 0 ? void 0 : _d.forEach(function (role) {
              if (roles.has(role)) {
                check = true;
              }
            });
            return check;
          }
        }]);

        return RoleRouteGuard;
      }();

      RoleRouteGuard.ɵfac = function RoleRouteGuard_Factory(t) {
        return new (t || RoleRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      RoleRouteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: RoleRouteGuard,
        factory: RoleRouteGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "mVEk": function mVEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DispatcherAssetMode", function () {
        return DispatcherAssetMode;
      });

      var DispatcherAssetMode;

      (function (DispatcherAssetMode) {
        DispatcherAssetMode["local"] = "local";
        DispatcherAssetMode["source"] = "source";
        DispatcherAssetMode["replicated"] = "replicated";
      })(DispatcherAssetMode || (DispatcherAssetMode = {}));
      /***/

    },

    /***/
    "u8e3": function u8e3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadStates", function () {
        return LoadStates;
      });

      var LoadStates;

      (function (LoadStates) {
        LoadStates[LoadStates["show"] = 0] = "show";
        LoadStates[LoadStates["loading"] = 1] = "loading";
        LoadStates[LoadStates["empty"] = 2] = "empty";
        LoadStates[LoadStates["wait"] = 3] = "wait";
        LoadStates[LoadStates["firstLoading"] = 4] = "firstLoading";
      })(LoadStates || (LoadStates = {}));
      /***/

    },

    /***/
    "yGeL": function yGeL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "state", function () {
        return state;
      });

      var state = {
        show: 'show',
        loading: 'loading',
        empty: 'empty',
        wait: 'wait',
        firstLoading: 'firstLoading'
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map