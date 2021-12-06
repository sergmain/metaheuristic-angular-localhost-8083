(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-dispatcher-dispatcher-module"],{

/***/ "Hf5I":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dispatcher/dispatcher-index/dispatcher-index.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DispatcherIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherIndexComponent", function() { return DispatcherIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ct/ct-section/ct-section.component */ "2ljo");
/* harmony import */ var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ct/ct-section-body/ct-section-body.component */ "Ne1S");
/* harmony import */ var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ct/ct-section-body-row/ct-section-body-row.component */ "Kt2f");
/* harmony import */ var _ct_ct_env_msg_outer_ct_env_msg_outer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ct/ct-env-msg-outer/ct-env-msg-outer.component */ "+l1f");





class DispatcherIndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
DispatcherIndexComponent.ɵfac = function DispatcherIndexComponent_Factory(t) { return new (t || DispatcherIndexComponent)(); };
DispatcherIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DispatcherIndexComponent, selectors: [["dispatcher-index"]], decls: 10, vars: 0, consts: [["propertyName", "brandingMsg"]], template: function DispatcherIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-section-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section-body-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ct-env-msg-outer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_1__["CtSectionComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_2__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_3__["CtSectionBodyRowComponent"], _ct_ct_env_msg_outer_ct_env_msg_outer_component__WEBPACK_IMPORTED_MODULE_4__["CtEnvMsgOuterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwYXRjaGVyLWluZGV4LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ "UaqU":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dispatcher/dispatcher-root/dispatcher-root.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DispatcherRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherRootComponent", function() { return DispatcherRootComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/models/UIStateComponent */ "FzDw");
/* harmony import */ var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/services/authentication */ "q4ZW");
/* harmony import */ var _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services/settings/settings.service */ "LjSU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ct/ct-content/ct-content.component */ "W8U/");
/* harmony import */ var _ct_ct_back_button_ct_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ct/ct-back-button/ct-back-button.component */ "6Q+1");
/* harmony import */ var _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../copy-right/copy-right/copy-right.component */ "qyGu");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function DispatcherRootComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "dispatcher.SourceCodes"), "\n            ");
} }
function DispatcherRootComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "dispatcher.Variables"), "\n            ");
} }
function DispatcherRootComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "dispatcher.Functions"), "\n            ");
} }
function DispatcherRootComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "dispatcher.Processors"), "\n            ");
} }
function DispatcherRootComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "dispatcher.Accounts"), "\n            ");
} }
function DispatcherRootComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "dispatcher.Company"), "\n            ");
} }
class DispatcherRootComponent extends _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_1__["UIStateComponent"] {
    constructor(authenticationService, router, settingsService) {
        super(authenticationService);
        this.authenticationService = authenticationService;
        this.router = router;
        this.settingsService = settingsService;
        // повторным кликом перезагружаем страницу
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.subscribeSubscription(this.settingsService.events.subscribe(event => {
            if (event instanceof _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsServiceEventChange"]) {
                this.settings = event.settings;
                this.sidenavOpened = event.settings.sidenav;
            }
        }));
    }
    ngOnDestroy() {
        this.unsubscribeSubscriptions();
    }
}
DispatcherRootComponent.ɵfac = function DispatcherRootComponent_Factory(t) { return new (t || DispatcherRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
DispatcherRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DispatcherRootComponent, selectors: [["dispatcher-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 7, consts: [["mode", "side", 3, "opened"], [1, "navigation"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/source-codes", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/global-variables", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/functions", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/processors", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/accounts", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/company/companies", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/source-codes"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/global-variables"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/functions"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/processors"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/accounts"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/dispatcher/company/companies"]], template: function DispatcherRootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DispatcherRootComponent_button_6_Template, 3, 3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DispatcherRootComponent_button_8_Template, 3, 3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DispatcherRootComponent_button_10_Template, 3, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DispatcherRootComponent_button_12_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DispatcherRootComponent_button_14_Template, 3, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DispatcherRootComponent_button_16_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ct-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ct-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "copy-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("opened", ctx.sidenavOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRole.MasterAssetManager || ctx.isRole.Admin || ctx.isRole.Data || ctx.isRole.Manager);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRole.Admin || ctx.isRole.Data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRole.MasterAssetManager || ctx.isRole.Admin || ctx.isRole.Data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRole.Admin || ctx.isRole.Data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRole.Admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRole.MasterAdmin || ctx.isRole.MasterOperator || ctx.isRole.MasterSupport);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_7__["CtContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _ct_ct_back_button_ct_back_button_component__WEBPACK_IMPORTED_MODULE_8__["CtBackButtonComponent"], _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_9__["CopyRightComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["mat-sidenav-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 54px;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  padding: 9px;\n}\n\n.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGlzcGF0Y2hlci1yb290LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSkoiLCJmaWxlIjoiZGlzcGF0Y2hlci1yb290LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi9kaXNwYXRjaGVyXHJcblxyXG5cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcblxyXG5cclxubWF0LXNpZGVuYXYgXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogdW5pdCg2KVxyXG5cclxuXHJcblxyXG4ubmF2aWdhdGlvbiBcclxuICAgIHdpZHRoOiAxNTBweFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgcGFkZGluZzogdW5pdCgxKVxyXG5cclxuXHJcbi5uYXZpZ2F0aW9uIGJ1dHRvblxyXG4gICAgbWFyZ2luLWJvdHRvbTogdW5pdCgxKVxyXG5cclxuXHJcbi5tYXQtYnV0dG9uIFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdCJdfQ== */"] });


/***/ }),

/***/ "ihYB":
/*!*********************************************************!*\
  !*** ./src/app/modules/dispatcher/dispatcher.module.ts ***!
  \*********************************************************/
/*! exports provided: DispatcherRoutes, DispatcherRoutingModule, DispatcherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherRoutes", function() { return DispatcherRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherRoutingModule", function() { return DispatcherRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatcherModule", function() { return DispatcherModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dispatcher_index_dispatcher_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatcher-index/dispatcher-index.component */ "Hf5I");
/* harmony import */ var _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatcher-root/dispatcher-root.component */ "UaqU");
/* harmony import */ var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/ngmaterial.module */ "vCXQ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ct_ct_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ct/ct.module */ "9kxi");
/* harmony import */ var _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../copy-right/copy-right.module */ "wIh8");
/* harmony import */ var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/services/authentication */ "q4ZW");
/* harmony import */ var _src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/guards/role-route.guard */ "iuQL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");













const commonRequiredRoles = [
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterAssetManager,
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterAdmin,
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterOpertator,
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterSupport,
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin,
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Data,
    _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Manager,
];
const DispatcherRoutes = [
    {
        path: '',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        data: {
            requiredRoles: commonRequiredRoles
        },
        children: [
            {
                path: '',
                component: _dispatcher_index_dispatcher_index_component__WEBPACK_IMPORTED_MODULE_2__["DispatcherIndexComponent"]
            }
        ]
    },
    {
        path: 'source-codes',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        loadChildren: () => Promise.all(/*! import() | src-app-modules-source-codes-source-codes-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-source-codes-source-codes-module")]).then(__webpack_require__.bind(null, /*! @src/app/modules/source-codes/source-codes.module */ "wCdv")).then(m => m.SourceCodeModule),
        data: {
            requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterAssetManager, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Data, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Manager],
            section: 'source-codes'
        },
    },
    {
        path: 'global-variables',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-global-variables-global-variables-module */ "src-app-modules-global-variables-global-variables-module").then(__webpack_require__.bind(null, /*! @src/app/modules/global-variables/global-variables.module */ "BQRg")).then(m => m.GlobalVariablesModule),
        data: {
            requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Data],
            section: 'global-variables'
        }
    },
    {
        path: 'functions',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        loadChildren: () => Promise.all(/*! import() | src-app-modules-functions-functions-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-functions-functions-module")]).then(__webpack_require__.bind(null, /*! @src/app/modules/functions/functions.module */ "1YC9")).then(m => m.FunctionsModule),
        data: {
            requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterAssetManager, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Data],
            section: 'functions'
        }
    },
    {
        path: 'processors',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-processors-processors-module */ "src-app-modules-processors-processors-module").then(__webpack_require__.bind(null, /*! src/app/modules/processors/processors.module */ "6lBk")).then(m => m.ProcessorsModule),
        data: {
            requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Data],
            section: 'processors'
        }
    },
    {
        path: 'accounts',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        loadChildren: () => Promise.all(/*! import() | src-app-modules-accounts-accounts-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-accounts-accounts-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/accounts/accounts.module */ "I89L")).then(m => m.AccountsModule),
        data: {
            requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin],
            section: 'accounts'
        }
    },
    {
        path: 'company',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_9__["RoleRouteGuard"]],
        component: _dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        loadChildren: () => Promise.all(/*! import() | src-app-modules-company-company-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-company-company-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/company/company.module */ "pYoV")).then(m => m.CompnyModule),
        data: {
            requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterAdmin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterOpertator, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__["Role"].MasterSupport],
            section: 'company'
        }
    }
];
class DispatcherRoutingModule {
}
DispatcherRoutingModule.ɵfac = function DispatcherRoutingModule_Factory(t) { return new (t || DispatcherRoutingModule)(); };
DispatcherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DispatcherRoutingModule });
DispatcherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(DispatcherRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DispatcherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
class DispatcherModule {
}
DispatcherModule.ɵfac = function DispatcherModule_Factory(t) { return new (t || DispatcherModule)(); };
DispatcherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DispatcherModule });
DispatcherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            DispatcherRoutingModule,
            _ct_ct_module__WEBPACK_IMPORTED_MODULE_6__["CtModule"],
            _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_7__["CopyRightModule"],
            _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DispatcherModule, { declarations: [_dispatcher_root_dispatcher_root_component__WEBPACK_IMPORTED_MODULE_3__["DispatcherRootComponent"],
        _dispatcher_index_dispatcher_index_component__WEBPACK_IMPORTED_MODULE_2__["DispatcherIndexComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], DispatcherRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_6__["CtModule"],
        _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_7__["CopyRightModule"],
        _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-dispatcher-dispatcher-module-es2015.js.map