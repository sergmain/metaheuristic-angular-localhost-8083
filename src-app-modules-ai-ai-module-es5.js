(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ai-ai-module"], {
    /***/
    "I/GP": function IGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AiRoutes", function () {
        return AiRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AiRoutingModule", function () {
        return AiRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AiModule", function () {
        return AiModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ct_ct_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ct/ct.module */
      "9kxi");
      /* harmony import */


      var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/ngmaterial.module */
      "vCXQ");
      /* harmony import */


      var _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../copy-right/copy-right.module */
      "wIh8");
      /* harmony import */


      var _ai_index_ai_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ai-index/ai-index.component */
      "tav2");
      /* harmony import */


      var _ai_root_ai_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ai-root/ai-root.component */
      "swKi");
      /* harmony import */


      var _src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/guards/role-route.guard */
      "iuQL");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var commonRequiredRoles = [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_9__["Role"].Data, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_9__["Role"].Manager];
      var AiRoutes = [{
        path: '',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_8__["RoleRouteGuard"]],
        component: _ai_root_ai_root_component__WEBPACK_IMPORTED_MODULE_7__["AiRootComponent"],
        data: {
          requiredRoles: commonRequiredRoles
        },
        children: [{
          path: '',
          component: _ai_index_ai_index_component__WEBPACK_IMPORTED_MODULE_6__["AiIndexComponent"],
          data: {
            requiredRoles: commonRequiredRoles
          }
        }]
      }, {
        path: 'experiments',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_8__["RoleRouteGuard"]],
        component: _ai_root_ai_root_component__WEBPACK_IMPORTED_MODULE_7__["AiRootComponent"],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-modules-experiments-experiments-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-experiments-experiments-module")]).then(__webpack_require__.bind(null,
          /*! src/app/modules/experiments/experiments.module */
          "CNBl")).then(function (m) {
            return m.ExperimentsModule;
          });
        },
        data: {
          section: 'experiments',
          requiredRoles: commonRequiredRoles
        }
      }, {
        path: 'experiment-results',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_8__["RoleRouteGuard"]],
        component: _ai_root_ai_root_component__WEBPACK_IMPORTED_MODULE_7__["AiRootComponent"],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-modules-experiment-result-experiment-result-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-experiment-result-experiment-result-module")]).then(__webpack_require__.bind(null,
          /*! @src/app/modules/experiment-result/experiment-result.module */
          "2tBD")).then(function (m) {
            return m.ExperimentResultModule;
          });
        },
        data: {
          section: 'experiment-result',
          requiredRoles: commonRequiredRoles
        }
      }];

      var AiRoutingModule = function AiRoutingModule() {
        _classCallCheck(this, AiRoutingModule);
      };

      AiRoutingModule.ɵfac = function AiRoutingModule_Factory(t) {
        return new (t || AiRoutingModule)();
      };

      AiRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AiRoutingModule
      });
      AiRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(AiRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AiRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      var AiModule = function AiModule() {
        _classCallCheck(this, AiModule);
      };

      AiModule.ɵfac = function AiModule_Factory(t) {
        return new (t || AiModule)();
      };

      AiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AiModule
      });
      AiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], AiRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_3__["CtModule"], _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_5__["CopyRightModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AiModule, {
          declarations: [_ai_index_ai_index_component__WEBPACK_IMPORTED_MODULE_6__["AiIndexComponent"], _ai_root_ai_root_component__WEBPACK_IMPORTED_MODULE_7__["AiRootComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], AiRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_3__["CtModule"], _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_5__["CopyRightModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "swKi": function swKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AiRootComponent", function () {
        return AiRootComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-content/ct-content.component */
      "W8U/");
      /* harmony import */


      var _ct_ct_back_button_ct_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-back-button/ct-back-button.component */
      "6Q+1");
      /* harmony import */


      var _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../copy-right/copy-right/copy-right.component */
      "qyGu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AiRootComponent = /*#__PURE__*/function (_src_app_models_UISta) {
        _inherits(AiRootComponent, _src_app_models_UISta);

        var _super = _createSuper(AiRootComponent);

        function AiRootComponent(router, settingsService, authenticationService) {
          var _this;

          _classCallCheck(this, AiRootComponent);

          _this = _super.call(this, authenticationService);
          _this.router = router;
          _this.settingsService = settingsService;
          _this.authenticationService = authenticationService;

          _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          return _this;
        }

        _createClass(AiRootComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.subscribeSubscription(this.settingsService.events.subscribe(function (event) {
              if (event instanceof _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsServiceEventChange"]) {
                _this2.settings = event.settings;
                _this2.sidenavOpened = event.settings.sidenav;
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeSubscriptions();
          }
        }]);

        return AiRootComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_1__["UIStateComponent"]);

      AiRootComponent.ɵfac = function AiRootComponent_Factory(t) {
        return new (t || AiRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AiRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AiRootComponent,
        selectors: [["ai-root"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 28,
        vars: 7,
        consts: [["mode", "side", 3, "opened"], [1, "navigation"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/ai/experiments", 1, "mat-button"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/ai/experiment-results", 1, "mat-button"]],
        template: function AiRootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-sidenav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ct-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ct-back-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "copy-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("opened", ctx.sidenavOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 3, "ai.Experiments"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 5, "ai.Results"));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_7__["CtContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _ct_ct_back_button_ct_back_button_component__WEBPACK_IMPORTED_MODULE_8__["CtBackButtonComponent"], _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_9__["CopyRightComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: ["mat-sidenav-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 54px;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  padding: 9px;\n}\n\n.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWktcm9vdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQURKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6ImFpLXJvb3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uL2FpXHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG5cclxuXHJcbm1hdC1zaWRlbmF2IFxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IHVuaXQoNilcclxuXHJcblxyXG5cclxuLm5hdmlnYXRpb24gXHJcbiAgICB3aWR0aDogMTUwcHhcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIHBhZGRpbmc6IHVuaXQoMSlcclxuXHJcblxyXG4ubmF2aWdhdGlvbiBidXR0b25cclxuICAgIG1hcmdpbi1ib3R0b206IHVuaXQoMSlcclxuXHJcbi5tYXQtYnV0dG9uIFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdCJdfQ== */"]
      });
      /***/
    },

    /***/
    "tav2": function tav2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AiIndexComponent", function () {
        return AiIndexComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AiIndexComponent = /*#__PURE__*/function () {
        function AiIndexComponent() {
          _classCallCheck(this, AiIndexComponent);
        }

        _createClass(AiIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AiIndexComponent;
      }();

      AiIndexComponent.ɵfac = function AiIndexComponent_Factory(t) {
        return new (t || AiIndexComponent)();
      };

      AiIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AiIndexComponent,
        selectors: [["ai-index"]],
        decls: 3,
        vars: 0,
        template: function AiIndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ai-index works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhaS1pbmRleC5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ai-ai-module-es5.js.map