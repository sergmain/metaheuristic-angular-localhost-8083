(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-processors-processors-module"],{

/***/ "6lBk":
/*!*********************************************************!*\
  !*** ./src/app/modules/processors/processors.module.ts ***!
  \*********************************************************/
/*! exports provided: ProcessorsRoutes, ProcessorsRoutingModule, ProcessorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorsRoutes", function() { return ProcessorsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorsRoutingModule", function() { return ProcessorsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorsModule", function() { return ProcessorsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/ngmaterial.module */ "vCXQ");
/* harmony import */ var _edit_processor_edit_processor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-processor/edit-processor.component */ "UfP9");
/* harmony import */ var _processors_processors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processors/processors.component */ "8S/x");
/* harmony import */ var _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ct/ct.module */ "9kxi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











const ProcessorsRoutes = [
    {
        path: '',
        component: _processors_processors_component__WEBPACK_IMPORTED_MODULE_6__["ProcessorsComponent"]
    },
    {
        path: ':id/edit',
        component: _edit_processor_edit_processor_component__WEBPACK_IMPORTED_MODULE_5__["EditProcessorComponent"],
        data: {
            backConfig: ['../', '../']
        }
    }
];
class ProcessorsRoutingModule {
}
ProcessorsRoutingModule.ɵfac = function ProcessorsRoutingModule_Factory(t) { return new (t || ProcessorsRoutingModule)(); };
ProcessorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProcessorsRoutingModule });
ProcessorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ProcessorsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProcessorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
class ProcessorsModule {
}
ProcessorsModule.ɵfac = function ProcessorsModule_Factory(t) { return new (t || ProcessorsModule)(); };
ProcessorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProcessorsModule });
ProcessorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ProcessorsRoutingModule,
            _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"],
            _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProcessorsModule, { declarations: [_processors_processors_component__WEBPACK_IMPORTED_MODULE_6__["ProcessorsComponent"],
        _edit_processor_edit_processor_component__WEBPACK_IMPORTED_MODULE_5__["EditProcessorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ProcessorsRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"],
        _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();


/***/ }),

/***/ "84U5":
/*!***********************************************************!*\
  !*** ./src/app/services/processors/processors.service.ts ***!
  \***********************************************************/
/*! exports provided: ProcessorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorsService", function() { return ProcessorsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/helpers/generateFormData */ "bzsW");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const url = (s) => `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl}dispatcher${s}`;
class ProcessorsService {
    constructor(http) {
        this.http = http;
    }
    init(page) {
        return this.http.get(url(`/processors`), { params: { page } });
    }
    getProcessor(id) {
        return this.http.get(url(`/processor/${id}`));
    }
    formCommit(station) {
        return this.http.post(url(`/processor-form-commit/`), station);
    }
    deleteProcessorCommit(id) {
        return this.http.post(url(`/processor-delete-commit`), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({ id }));
    }
    // @PostMapping("/processor-bulk-delete-commit")
    // @PreAuthorize("hasAnyRole('MASTER_OPERATOR')")
    // public ProcessorData.BulkOperations  processProcessorBulkDeleteCommit(String processorIds) {
    //     ProcessorData.BulkOperations  r = processorTopLevelService.processProcessorBulkDeleteCommit(processorIds);
    //     return r;
    // }
    processProcessorBulkDeleteCommit(processorIds) {
        return this.http.post(url('/processor-bulk-delete-commit'), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
            processorIds: processorIds.join()
        }));
    }
}
ProcessorsService.ɵfac = function ProcessorsService_Factory(t) { return new (t || ProcessorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProcessorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProcessorsService, factory: ProcessorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8S/x":
/*!***********************************************************************!*\
  !*** ./src/app/modules/processors/processors/processors.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProcessorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorsComponent", function() { return ProcessorsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/app-dialog-confirmation/app-dialog-confirmation.component */ "lJGJ");
/* harmony import */ var _src_app_services_processors_processors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services/processors/processors.service */ "84U5");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/models/UIStateComponent */ "FzDw");
/* harmony import */ var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/authentication */ "q4ZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ct/ct-section/ct-section.component */ "2ljo");
/* harmony import */ var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ct/ct-section-header/ct-section-header.component */ "1P+h");
/* harmony import */ var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ct/ct-section-header-row/ct-section-header-row.component */ "25/r");
/* harmony import */ var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ct/ct-flex/ct-flex.component */ "CaYE");
/* harmony import */ var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ct/ct-flex-item/ct-flex-item.component */ "No2e");
/* harmony import */ var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ct/ct-heading/ct-heading.component */ "Xc1m");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ct/ct-section-body/ct-section-body.component */ "Ne1S");
/* harmony import */ var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ct/ct-section-body-row/ct-section-body-row.component */ "Kt2f");
/* harmony import */ var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ct/ct-table/ct-table.component */ "6xdO");
/* harmony import */ var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ct/ct-section-footer/ct-section-footer.component */ "FMVq");
/* harmony import */ var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */ "V6TR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ct/ct-table-pagination/ct-table-pagination.component */ "W7k4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../ct/ct-pre/ct-pre.component */ "IRPT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
































function ProcessorsComponent_ct_section_0_th_33_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ProcessorsComponent_ct_section_0_th_33_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return $event ? ctx_r20.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
} }
function ProcessorsComponent_ct_section_0_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProcessorsComponent_ct_section_0_td_35_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function ProcessorsComponent_ct_section_0_td_35_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const el_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return $event ? ctx_r24.selection.toggle(el_r22) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r22 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(el_r22));
} }
function ProcessorsComponent_ct_section_0_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProcessorsComponent_ct_section_0_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](el_r26.processor.id);
} }
function ProcessorsComponent_ct_section_0_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProcessorsComponent_ct_section_0_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](el_r27.ip || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](el_r27.host || "\u2014");
} }
function ProcessorsComponent_ct_section_0_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProcessorsComponent_ct_section_0_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", el_r28.processor.description || "\u2014", " ");
} }
function ProcessorsComponent_ct_section_0_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProcessorsComponent_ct_section_0_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Status of Processor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ct-pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r30 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", ctx_r10.columnsToDisplay.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", el_r30.processor.status || "\u2014", " ");
} }
function ProcessorsComponent_ct_section_0_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Is active?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "problems with functions?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Is blacklisted?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProcessorsComponent_ct_section_0_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](el_r31.active ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \n                                ", el_r31.active ? "Yes" : "No", "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](el_r31.functionProblem ? "alert-danger" : "alert-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\n                                ", el_r31.functionProblem ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](el_r31.blacklisted ? "alert-danger" : "alert-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\n                                ", el_r31.blacklisted ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \n                                ", el_r31.blacklistReason, "\n                            ");
} }
function ProcessorsComponent_ct_section_0_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Last Seen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProcessorsComponent_ct_section_0_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, el_r32.lastSeen, "MMM d, y, hh:mm"), " ");
} }
function ProcessorsComponent_ct_section_0_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/dispatcher/processors", a1, "edit"]; };
function ProcessorsComponent_ct_section_0_td_87_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ct-flex", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                                            Edit\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProcessorsComponent_ct_section_0_td_87_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const el_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r34.delete(el_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, el_r33.processor.id));
} }
function ProcessorsComponent_ct_section_0_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
} }
function ProcessorsComponent_ct_section_0_tr_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 30);
} }
function ProcessorsComponent_ct_section_0_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 31);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r19.showStatusOfProcessor);
} }
function ProcessorsComponent_ct_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ct-section-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ct-section-header-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ct-flex", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ct-heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Processors");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-slide-toggle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ProcessorsComponent_ct_section_0_Template_mat_slide_toggle_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r38.showStatusOfProcessor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n                        Show current status of processor\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ct-section-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ct-section-body-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ct-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](31, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ProcessorsComponent_ct_section_0_th_33_Template, 5, 2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ProcessorsComponent_ct_section_0_td_35_Template, 5, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ProcessorsComponent_ct_section_0_th_40_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ProcessorsComponent_ct_section_0_td_42_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](45, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, ProcessorsComponent_ct_section_0_th_47_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, ProcessorsComponent_ct_section_0_td_49_Template, 8, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](52, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, ProcessorsComponent_ct_section_0_th_54_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ProcessorsComponent_ct_section_0_td_56_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](59, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ProcessorsComponent_ct_section_0_td_61_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](64, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ProcessorsComponent_ct_section_0_td_66_Template, 8, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](69, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ProcessorsComponent_ct_section_0_th_71_Template, 14, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, ProcessorsComponent_ct_section_0_td_73_Template, 14, 10, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](76, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, ProcessorsComponent_ct_section_0_th_78_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, ProcessorsComponent_ct_section_0_td_80_Template, 3, 4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](83, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, ProcessorsComponent_ct_section_0_th_85_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, ProcessorsComponent_ct_section_0_td_87_Template, 20, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, ProcessorsComponent_ct_section_0_tr_90_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, ProcessorsComponent_ct_section_0_tr_92_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, ProcessorsComponent_ct_section_0_tr_94_Template, 1, 1, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "ct-section-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "ct-section-footer-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProcessorsComponent_ct_section_0_Template_button_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.deleteMany(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "\n                    Delete Checked\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "ct-section-footer-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "ct-table-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("prev", function ProcessorsComponent_ct_section_0_Template_ct_table_pagination_prev_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r41.prevPage(); })("next", function ProcessorsComponent_ct_section_0_Template_ct_table_pagination_next_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r42.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r0.showStatusOfProcessor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r0.secondColumnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.isLoading || !ctx_r0.selection.selected.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageableDefault", ctx_r0.processorResult.items);
} }
class ProcessorsComponent extends _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_5__["UIStateComponent"] {
    constructor(dialog, processorsService, authenticationService) {
        super(authenticationService);
        this.dialog = dialog;
        this.processorsService = processorsService;
        this.authenticationService = authenticationService;
        this.showStatusOfProcessor = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.columnsToDisplay = ['check', 'id', 'ip', 'description', 'reason', 'lastSeen', 'bts'];
        this.secondColumnsToDisplay = ['empty', 'env'];
    }
    ngOnInit() {
        this.updateTable(0);
    }
    updateTable(page) {
        this.isLoading = true;
        this.processorsService
            .init(page.toString())
            .subscribe(processorResult => {
            this.processorResult = processorResult;
            const items = processorResult.items.content || [];
            if (items.length) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](items);
            }
            this.isLoading = false;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    isAllSelected() {
        return this.selection.selected.length === this.dataSource.data.length;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    nextPage() {
        this.updateTable(this.processorResult.items.number + 1);
    }
    prevPage() {
        this.updateTable(this.processorResult.items.number - 1);
    }
    delete(processor) {
        this.processorsService
            .deleteProcessorCommit(processor.processor.id.toString())
            .subscribe(() => this.updateTable(this.processorResult.items.number));
    }
    deleteMany() {
        this.processorsService
            .processProcessorBulkDeleteCommit(this.selection.selected.map(v => v.processor.id.toString()))
            .subscribe(() => this.updateTable(this.processorResult.items.number));
    }
}
ProcessorsComponent.ɵfac = function ProcessorsComponent_Factory(t) { return new (t || ProcessorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_processors_processors_service__WEBPACK_IMPORTED_MODULE_3__["ProcessorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
ProcessorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProcessorsComponent, selectors: [["processors"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["justify-content", "space-between", "align-items", "center"], [3, "ngModel", "ngModelChange"], [3, "isWaiting"], ["mat-table", "", "multiTemplateDataRows", "multiTemplateDataRows", 3, "dataSource"], ["matColumnDef", "check"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["matColumnDef", "ip"], ["matColumnDef", "description"], ["matColumnDef", "empty"], ["matColumnDef", "env"], ["matColumnDef", "reason"], ["matColumnDef", "lastSeen"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "first-row", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "second-row", "mat-row", "", 3, "hidden", 4, "matRowDef", "matRowDefColumns"], ["mat-flat-button", "", "color", "warn", "title", "Delete Checked", 3, "disabled", "click"], [3, "pageableDefault", "prev", "next"], ["mat-header-cell", ""], ["color", "warn", 3, "checked", "indeterminate", "change"], ["mat-cell", ""], ["color", "warn", 3, "checked", "click", "change"], [1, "alert-danger"], ["justify-content", "flex-end", "gap", "unit(1)"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "routerLink"], ["mat-flat-button", "", "size", "forTableRow", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "first-row"], ["mat-row", "", 1, "second-row", 3, "hidden"]], template: function ProcessorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ProcessorsComponent_ct_section_0_Template, 118, 8, "ct-section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.processorResult);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_12__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_13__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_14__["CtHeadingComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_19__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_20__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_21__["CtSectionFooterRowComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_23__["CtTablePaginationComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_25__["CtPreComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".section[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-width: 0;\n}\n\n.first-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .first-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.second-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  background-color: rgba(0, 128, 0, 0.25);\n  padding: 0 2px;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.25);\n  padding: 0 2px;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvY2Vzc29ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7QUFEWjs7QUFNQTs7RUFFSSxtQkFBQTtBQUhKOztBQU1BOztFQUVJLFlBQUE7QUFISjs7QUFNQTtFQUNJLHVDQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksdUNBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKIiwiZmlsZSI6InByb2Nlc3NvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICAuZmlyc3Qtcm93IHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXJzdC1yb3cgdGQsXHJcbi5maXJzdC1yb3cgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnNlY29uZC1yb3cgdGQsXHJcbi5zZWNvbmQtcm93IHRoIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShncmVlbiwgMC4yNSk7XHJcbiAgICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHJlZCwgMC4yNSk7XHJcbiAgICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG5cclxubWF0LWNoZWNrYm94IHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59Il19 */"] });
__decorate([
    Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogMethod"])({
        question: (processor) => `Do you want to delete Processor\xa0#${processor.processor.id}`,
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProcessorsComponent.prototype, "delete", null);
__decorate([
    Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogMethod"])({
        question: () => `Do you want to delete Processors`,
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProcessorsComponent.prototype, "deleteMany", null);


/***/ }),

/***/ "UfP9":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/processors/edit-processor/edit-processor.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditProcessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProcessorComponent", function() { return EditProcessorComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_app_services_processors_processors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/services/processors/processors.service */ "84U5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ct/ct-cols/ct-cols.component */ "I6qf");
/* harmony import */ var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ct/ct-col/ct-col.component */ "MI58");
/* harmony import */ var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ct/ct-section/ct-section.component */ "2ljo");
/* harmony import */ var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ct/ct-section-header/ct-section-header.component */ "1P+h");
/* harmony import */ var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ct/ct-section-header-row/ct-section-header-row.component */ "25/r");
/* harmony import */ var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ct/ct-heading/ct-heading.component */ "Xc1m");
/* harmony import */ var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ct/ct-section-body/ct-section-body.component */ "Ne1S");
/* harmony import */ var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ct/ct-section-body-row/ct-section-body-row.component */ "Kt2f");
/* harmony import */ var _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ct/ct-section-content/ct-section-content.component */ "eWij");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ct/ct-section-footer/ct-section-footer.component */ "FMVq");
/* harmony import */ var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */ "V6TR");
/* harmony import */ var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ct/ct-flex/ct-flex.component */ "CaYE");
/* harmony import */ var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ct/ct-flex-item/ct-flex-item.component */ "No2e");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../ct/ct-rest-status/ct-rest-status.component */ "05qC");

























function EditProcessorComponent_ct_cols_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ct-cols");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ct-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ct-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ct-section-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ct-section-header-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ct-heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ct-section-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ct-section-body-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ct-section-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "textarea", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditProcessorComponent_ct_cols_0_Template_textarea_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.processor.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ct-section-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ct-section-footer-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ct-flex", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProcessorComponent_ct_cols_0_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProcessorComponent_ct_cols_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "ct-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "ct-rest-status", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Edit Processor ", ctx_r0.processor ? ctx_r0.processor.id : "...", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.processor.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r0.processorResponse);
} }
class EditProcessorComponent {
    constructor(route, processorsService, router) {
        this.route = route;
        this.processorsService = processorsService;
        this.router = router;
    }
    ngOnInit() {
        this.processorsService
            .getProcessor(this.route.snapshot.paramMap.get('id'))
            .subscribe((response) => {
            this.processorResponse = response;
            this.processor = response.processor;
        });
    }
    save() {
        this.processorsService
            .formCommit(this.processor)
            .subscribe((response) => {
            var _a;
            if ((_a = response.errorMessages) === null || _a === void 0 ? void 0 : _a.length) {
                this.processorResponse = response;
            }
            else {
                this.back();
            }
        });
    }
    back() {
        this.router.navigate(['/dispatcher', 'processors']);
    }
}
EditProcessorComponent.ɵfac = function EditProcessorComponent_Factory(t) { return new (t || EditProcessorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_src_app_services_processors_processors_service__WEBPACK_IMPORTED_MODULE_1__["ProcessorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
EditProcessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditProcessorComponent, selectors: [["edit-processor"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["size", "6"], ["appearance", "outline"], ["matInput", "matInput", "value", "", "cdkTextareaAutosize", "cdkTextareaAutosize", "cdkAutosizeMinRows", "5", 3, "ngModel", "ngModelChange"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "click"], [3, "content"]], template: function EditProcessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditProcessorComponent_ct_cols_0_Template, 61, 3, "ct-cols", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.processorResponse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_4__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_5__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_9__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyRowComponent"], _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionContentComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_19__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_20__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_22__["CtRestStatusComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1wcm9jZXNzb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FBREoiLCJmaWxlIjoiZWRpdC1wcm9jZXNzb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-modules-processors-processors-module-es2015.js.map