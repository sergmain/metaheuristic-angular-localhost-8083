(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-experiments-experiments-module"],{

/***/ "11Gx":
/*!************************************************************************************!*\
  !*** ./src/app/modules/experiments/experiment-state/experiment-state.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExperimentStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentStateComponent", function() { return ExperimentStateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ct_ct_state_of_tasks_ct_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ct/ct-state-of-tasks/ct-state-of-tasks.component */ "2qjw");




class ExperimentStateComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.sourceCodeId = this.activatedRoute.snapshot.paramMap.get('sourceCodeId');
        this.execContextId = this.activatedRoute.snapshot.paramMap.get('execContextId');
    }
}
ExperimentStateComponent.ɵfac = function ExperimentStateComponent_Factory(t) { return new (t || ExperimentStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
ExperimentStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperimentStateComponent, selectors: [["experiment-state"]], decls: 1, vars: 2, consts: [[3, "sourceCodeId", "execContextId"]], template: function ExperimentStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ct-state-of-tasks", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sourceCodeId", ctx.sourceCodeId)("execContextId", ctx.execContextId);
    } }, directives: [_ct_ct_state_of_tasks_ct_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_2__["CtStateOfTasksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmltZW50LXN0YXRlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ "3c6l":
/*!*************************************************************!*\
  !*** ./src/app/services/experiments/experiments.service.ts ***!
  \*************************************************************/
/*! exports provided: ExperimentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsService", function() { return ExperimentsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/helpers/generateFormData */ "bzsW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const url = (s) => `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}dispatcher/experiment${s}`;
class ExperimentsService {
    constructor(http) {
        this.http = http;
    }
    // @GetMapping("/experiments")
    // public ExperimentApiData.ExperimentsResult getExperiments(@PageableDefault(size = 5) Pageable pageable) {
    //     return experimentTopLevelService.getExperiments(pageable);
    // }
    getExperiments(page) {
        return this.http.get(url(`/experiments`), { params: { page } });
    }
    // @GetMapping(value = "/experiment/{id}")
    // public ExperimentApiData.ExperimentResult getExperiment(@PathVariable Long id) {
    //     return experimentTopLevelService.getExperimentWithoutProcessing(id);
    // }
    getExperiment(id) {
        return this.http.get(url(`/experiment/${id}`));
    }
    // @GetMapping(value = "/experiment-add")
    // public SourceCodeData.SourceCodeUidsForCompany experimentAdd(Authentication authentication) {
    //     DispatcherContext context = userContextService.getContext(authentication);
    //     SourceCodeData.SourceCodeUidsForCompany codes = new SourceCodeData.SourceCodeUidsForCompany();
    //     List<String> uids = dispatcherParamsService.getExperiments();
    //     codes.items = sourceCodeSelectorService.filterSourceCodes(context, uids);
    //     return codes;
    // }
    experimentAdd() {
        return this.http.get(url(`/experiment-add`));
    }
    // @GetMapping(value = "/experiment-edit/{id}")
    // public ExperimentApiData.ExperimentsEditResult edit(@PathVariable Long id) {
    //     return experimentTopLevelService.editExperiment(id);
    // }
    edit(id) {
        return this.http.get(url(`/experiment-edit/${id}`));
    }
    // @PostMapping("/experiment-add-commit")
    // public OperationStatusRest addFormCommit(String sourceCodeUid, String name, String code, String description, Authentication authentication) {
    //     DispatcherContext context = userContextService.getContext(authentication);
    //     return experimentTopLevelService.addExperimentCommit(sourceCodeUid, name, code, description, context);
    // }
    addFormCommit(sourceCodeUid, name, code, description) {
        return this.http.post(url(`/experiment-add-commit`), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_2__["generateFormData"])({
            sourceCodeUid, name, code, description
        }));
    }
    // @PostMapping("/experiment-edit-commit")
    // public OperationStatusRest editFormCommit(@RequestBody ExperimentApiData.SimpleExperiment simpleExperiment) {
    //     return experimentTopLevelService.editExperimentCommit(simpleExperiment);
    // }
    editFormCommit(simpleExperiment) {
        return this.http.post(url(`/experiment-edit-commit`), simpleExperiment);
    }
    // @PostMapping("/experiment-delete-commit")
    // public OperationStatusRest deleteCommit(Long id) {
    //     return experimentTopLevelService.experimentDeleteCommit(id);
    // }
    deleteCommit(id) {
        return this.http.post(url(`/experiment-delete-commit`), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_2__["generateFormData"])({ id }));
    }
    // @PostMapping("/experiment-clone-commit")
    // public OperationStatusRest experimentCloneCommit(Long id, Authentication authentication) {
    //     DispatcherContext context = userContextService.getContext(authentication);
    //     return experimentTopLevelService.experimentCloneCommit(id, context);
    // }
    experimentCloneCommit(id) {
        return this.http.post(url(`/experiment-clone-commit`), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_2__["generateFormData"])({ id }));
    }
    // @PostMapping("/experiment-target-state/{state}/{experimentId}")
    // public OperationStatusRest execContextTargetExecState(
    //         @PathVariable Long experimentId, @PathVariable String state, Authentication authentication) {
    //     DispatcherContext context = userContextService.getContext(authentication);
    //     OperationStatusRest operationStatusRest = experimentTopLevelService.changeExecContextState(state, experimentId, context);
    //     return operationStatusRest;
    // }
    execContextTargetExecState(experimentId, state) {
        return this.http.post(url(`/experiment-target-state/${state}/${experimentId}`), {});
    }
}
ExperimentsService.ɵfac = function ExperimentsService_Factory(t) { return new (t || ExperimentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ExperimentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ExperimentsService, factory: ExperimentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BUyu":
/*!**************************************************************************!*\
  !*** ./src/app/modules/experiments/experiments/experiments.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExperimentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsComponent", function() { return ExperimentsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/app-dialog-confirmation/app-dialog-confirmation.component */ "lJGJ");
/* harmony import */ var _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/enums/ExecContextState */ "iA33");
/* harmony import */ var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/models/UIStateComponent */ "FzDw");
/* harmony import */ var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/authentication */ "q4ZW");
/* harmony import */ var _src_app_services_experiments_experiments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/experiments/experiments.service */ "3c6l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ct/ct-section/ct-section.component */ "2ljo");
/* harmony import */ var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ct/ct-section-header/ct-section-header.component */ "1P+h");
/* harmony import */ var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ct/ct-section-header-row/ct-section-header-row.component */ "25/r");
/* harmony import */ var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ct/ct-heading/ct-heading.component */ "Xc1m");
/* harmony import */ var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ct/ct-section-body/ct-section-body.component */ "Ne1S");
/* harmony import */ var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ct/ct-section-body-row/ct-section-body-row.component */ "Kt2f");
/* harmony import */ var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ct/ct-table/ct-table.component */ "6xdO");
/* harmony import */ var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ct/ct-section-footer/ct-section-footer.component */ "FMVq");
/* harmony import */ var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */ "V6TR");
/* harmony import */ var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ct/ct-flex/ct-flex.component */ "CaYE");
/* harmony import */ var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ct/ct-flex-item/ct-flex-item.component */ "No2e");
/* harmony import */ var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ct/ct-table-pagination/ct-table-pagination.component */ "W7k4");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























function ExperimentsComponent_ct_section_0_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ct_section_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", el_r22.experiment.id, " ");
} }
function ExperimentsComponent_ct_section_0_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ct_section_0_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", el_r23.experiment.name, " ");
} }
function ExperimentsComponent_ct_section_0_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Created on");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ct_section_0_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, el_r24.experiment.createdOn, "HH:mm:ss, MMM d, yyyy"), "\n                        ");
} }
function ExperimentsComponent_ct_section_0_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Exec State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ct_section_0_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", el_r25.experiment.execState, " ");
} }
function ExperimentsComponent_ct_section_0_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ct_section_0_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", el_r26.experiment.code, " ");
} }
function ExperimentsComponent_ct_section_0_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ct_section_0_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", el_r27.experiment.description, " ");
} }
function ExperimentsComponent_ct_section_0_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { element: a0 }; };
function ExperimentsComponent_ct_section_0_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, el_r28));
} }
function ExperimentsComponent_ct_section_0_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 22);
} }
function ExperimentsComponent_ct_section_0_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 23);
} }
function ExperimentsComponent_ct_section_0_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function ExperimentsComponent_ct_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ct-section-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ct-section-header-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ct-heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Experiments");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ct-section-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ct-section-body-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ct-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ExperimentsComponent_ct_section_0_th_21_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ExperimentsComponent_ct_section_0_td_23_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ExperimentsComponent_ct_section_0_th_28_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ExperimentsComponent_ct_section_0_td_30_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ExperimentsComponent_ct_section_0_th_35_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ExperimentsComponent_ct_section_0_td_37_Template, 3, 4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](40, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ExperimentsComponent_ct_section_0_th_42_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ExperimentsComponent_ct_section_0_td_44_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](47, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, ExperimentsComponent_ct_section_0_th_49_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, ExperimentsComponent_ct_section_0_td_51_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](54, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ExperimentsComponent_ct_section_0_th_56_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ExperimentsComponent_ct_section_0_td_58_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](61, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, ExperimentsComponent_ct_section_0_th_63_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ExperimentsComponent_ct_section_0_td_65_Template, 5, 4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, ExperimentsComponent_ct_section_0_tr_68_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ExperimentsComponent_ct_section_0_tr_70_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "ct-section-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "ct-section-footer-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "ct-flex", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "ct-table-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("next", function ExperimentsComponent_ct_section_0_Template_ct_table_pagination_next_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.nextPage(); })("prev", function ExperimentsComponent_ct_section_0_Template_ct_table_pagination_prev_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, ExperimentsComponent_ct_section_0_ng_container_89_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageableDefault", ctx_r0.experimentsResult.items)("globalDisable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function ExperimentsComponent_ng_template_2_ct_flex_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExperimentsComponent_ng_template_2_ct_flex_item_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const element_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().element; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r37.produce(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Produce");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ng_template_2_ct_flex_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExperimentsComponent_ng_template_2_ct_flex_item_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42); const element_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().element; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.start(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ExperimentsComponent_ng_template_2_ct_flex_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExperimentsComponent_ng_template_2_ct_flex_item_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const element_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().element; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r43.stop(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return [a0, "edit"]; };
const _c2 = function (a0, a2, a4) { return [a0, "source-code", a2, "exec-context", a4, "state"]; };
function ExperimentsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ct-flex", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExperimentsComponent_ng_template_2_ct_flex_item_3_Template, 5, 0, "ct-flex-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExperimentsComponent_ng_template_2_ct_flex_item_5_Template, 5, 0, "ct-flex-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExperimentsComponent_ng_template_2_ct_flex_item_7_Template, 5, 0, "ct-flex-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Task\n                State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExperimentsComponent_ng_template_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const element_r33 = ctx.element; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r46.clone(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Clone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExperimentsComponent_ng_template_2_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const element_r33 = ctx.element; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r48.delete(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\n");
} if (rf & 2) {
    const element_r33 = ctx.element;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r33.experiment.execState === ctx_r2.ExecContextState.NONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r33.experiment.execState === ctx_r2.ExecContextState.PRODUCED || element_r33.experiment.execState === ctx_r2.ExecContextState.STOPPED);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r33.experiment.execState === ctx_r2.ExecContextState.STARTED);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, element_r33.experiment.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](7, _c2, element_r33.experiment.id, element_r33.experiment.sourceCodeId, element_r33.experiment.execContextId));
} }
function ExperimentsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Add\n        Experiment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r4.isLoading);
} }
class ExperimentsComponent extends _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_4__["UIStateComponent"] {
    constructor(dialog, experimentsService, authenticationService) {
        super(authenticationService);
        this.dialog = dialog;
        this.experimentsService = experimentsService;
        this.authenticationService = authenticationService;
        this.ExecContextState = _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_3__["ExecContextState"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.columnsToDisplay = ['id', 'name', 'createdOn', 'code', 'description', 'execState', 'bts'];
    }
    ngOnInit() {
        this.updateTable(0);
    }
    updateTable(page) {
        this.setIsLoadingStart();
        this.experimentsService
            .getExperiments(page.toString())
            .subscribe({
            next: experimentsResult => {
                this.experimentsResult = experimentsResult;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](experimentsResult.items.content || []);
            },
            complete: () => {
                this.setIsLoadingEnd();
            }
        });
    }
    delete(experiment) {
        this.experimentsService
            .deleteCommit(experiment.experiment.id.toString())
            .subscribe({
            complete: () => this.updateTable(this.experimentsResult.items.number)
        });
    }
    clone(element) {
        var _a;
        this.experimentsService
            .experimentCloneCommit((_a = element.experiment.id) === null || _a === void 0 ? void 0 : _a.toString())
            .subscribe({
            complete: () => this.updateTable(this.experimentsResult.items.number)
        });
    }
    produce(experiment) {
        this.execContextTargetExecState(experiment.experiment.id.toString(), _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_3__["ExecContextState"].PRODUCED.toLowerCase());
    }
    start(experiment) {
        this.execContextTargetExecState(experiment.experiment.id.toString(), _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_3__["ExecContextState"].STARTED.toLowerCase());
    }
    stop(experiment) {
        this.execContextTargetExecState(experiment.experiment.id.toString(), _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_3__["ExecContextState"].STOPPED.toLowerCase());
    }
    execContextTargetExecState(id, state) {
        this.experimentsService
            .execContextTargetExecState(id, state)
            .subscribe({
            complete: () => this.updateTable(this.experimentsResult.items.number)
        });
    }
    nextPage() {
        this.updateTable(this.experimentsResult.items.number + 1);
    }
    prevPage() {
        this.updateTable(this.experimentsResult.items.number - 1);
    }
}
ExperimentsComponent.ɵfac = function ExperimentsComponent_Factory(t) { return new (t || ExperimentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_experiments_experiments_service__WEBPACK_IMPORTED_MODULE_6__["ExperimentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"])); };
ExperimentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ExperimentsComponent, selectors: [["experiments-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 1, consts: [[4, "ngIf"], ["actionsTemplate", ""], ["addButtonTemplate", ""], [3, "isWaiting"], ["mat-table", "mat-table", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "createdOn"], ["matColumnDef", "execState"], ["matColumnDef", "code"], ["matColumnDef", "description"], ["matColumnDef", "bts"], ["mat-header-row", "mat-header-row", 4, "matHeaderRowDef"], ["mat-row", "mat-row", 4, "matRowDef", "matRowDefColumns"], ["justify-content", "space-between"], [3, "pageableDefault", "globalDisable", "next", "prev"], [4, "ngTemplateOutlet"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-header-row", "mat-header-row"], ["mat-row", "mat-row"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "", "color", "primary", "size", "forTableRow", 3, "routerLink"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "click"], ["mat-flat-button", "", "size", "forTableRow", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", "size", "forTableRow", 3, "click"], ["mat-flat-button", "", "color", "primary", "wide", "wide", "routerLink", "add", 3, "disabled"]], template: function ExperimentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ExperimentsComponent_ct_section_0_Template, 95, 7, "ct-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n\n\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExperimentsComponent_ng_template_2_Template, 37, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n\n\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExperimentsComponent_ng_template_5_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.experimentsResult);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_15__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_19__["CtFlexItemComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_20__["CtTablePaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });
__decorate([
    Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogMethod"])({
        question: (experiment) => `Do you want to delete Experiment\xa0#${experiment.experiment.id}`,
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExperimentsComponent.prototype, "delete", null);


/***/ }),

/***/ "CNBl":
/*!***********************************************************!*\
  !*** ./src/app/modules/experiments/experiments.module.ts ***!
  \***********************************************************/
/*! exports provided: ExperimentsRoutes, ExperimentsRoutingModule, ExperimentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsRoutes", function() { return ExperimentsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsRoutingModule", function() { return ExperimentsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsModule", function() { return ExperimentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/ngmaterial.module */ "vCXQ");
/* harmony import */ var _experiment_add_experiment_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiment-add/experiment-add.component */ "zwJj");
/* harmony import */ var _experiment_edit_experiment_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experiment-edit/experiment-edit.component */ "I5Zz");
/* harmony import */ var _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiments/experiments.component */ "BUyu");
/* harmony import */ var _ct_ct_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ct/ct.module */ "9kxi");
/* harmony import */ var _experiment_state_experiment_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experiment-state/experiment-state.component */ "11Gx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");













const ExperimentsRoutes = [
    {
        path: '',
        component: _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentsComponent"]
    },
    {
        path: 'add',
        component: _experiment_add_experiment_add_component__WEBPACK_IMPORTED_MODULE_5__["ExperimentAddComponent"],
        data: {
            backConfig: ['../']
        }
    },
    {
        path: ':experimentId/edit',
        component: _experiment_edit_experiment_edit_component__WEBPACK_IMPORTED_MODULE_6__["ExperimentEditComponent"],
        data: {
            backConfig: ['../', '../']
        }
    },
    {
        path: ':experimentId/source-code/:sourceCodeId/exec-context/:execContextId/state',
        component: _experiment_state_experiment_state_component__WEBPACK_IMPORTED_MODULE_9__["ExperimentStateComponent"],
        data: {
            backConfig: ['../', '../', '../', '../', '../', '../']
        }
    }
];
class ExperimentsRoutingModule {
}
ExperimentsRoutingModule.ɵfac = function ExperimentsRoutingModule_Factory(t) { return new (t || ExperimentsRoutingModule)(); };
ExperimentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ExperimentsRoutingModule });
ExperimentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ExperimentsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ExperimentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
class ExperimentsModule {
}
ExperimentsModule.ɵfac = function ExperimentsModule_Factory(t) { return new (t || ExperimentsModule)(); };
ExperimentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ExperimentsModule });
ExperimentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ExperimentsRoutingModule,
            _ct_ct_module__WEBPACK_IMPORTED_MODULE_8__["CtModule"],
            _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ExperimentsModule, { declarations: [_experiments_experiments_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentsComponent"],
        _experiment_add_experiment_add_component__WEBPACK_IMPORTED_MODULE_5__["ExperimentAddComponent"],
        _experiment_edit_experiment_edit_component__WEBPACK_IMPORTED_MODULE_6__["ExperimentEditComponent"],
        _experiment_state_experiment_state_component__WEBPACK_IMPORTED_MODULE_9__["ExperimentStateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ExperimentsRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_8__["CtModule"],
        _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();


/***/ }),

/***/ "I5Zz":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/experiments/experiment-edit/experiment-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExperimentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentEditComponent", function() { return ExperimentEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_app_services_experiments_experiments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/services/experiments/experiments.service */ "3c6l");
/* harmony import */ var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/models/UIStateComponent */ "FzDw");
/* harmony import */ var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services/authentication */ "q4ZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ct/ct-cols/ct-cols.component */ "I6qf");
/* harmony import */ var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ct/ct-col/ct-col.component */ "MI58");
/* harmony import */ var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ct/ct-section/ct-section.component */ "2ljo");
/* harmony import */ var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ct/ct-section-header/ct-section-header.component */ "1P+h");
/* harmony import */ var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ct/ct-section-header-row/ct-section-header-row.component */ "25/r");
/* harmony import */ var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ct/ct-heading/ct-heading.component */ "Xc1m");
/* harmony import */ var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ct/ct-section-body/ct-section-body.component */ "Ne1S");
/* harmony import */ var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ct/ct-section-body-row/ct-section-body-row.component */ "Kt2f");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ct/ct-section-footer/ct-section-footer.component */ "FMVq");
/* harmony import */ var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */ "V6TR");
/* harmony import */ var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ct/ct-flex/ct-flex.component */ "CaYE");
/* harmony import */ var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ct/ct-flex-item/ct-flex-item.component */ "No2e");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ct/ct-rest-status/ct-rest-status.component */ "05qC");



























function ExperimentEditComponent_ct_cols_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ct-cols");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ct-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ct-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ct-section-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ct-section-header-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ct-heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ct-section-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ct-section-body-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExperimentEditComponent_ct_cols_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.simpleExperiment.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "This is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ct-section-body-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExperimentEditComponent_ct_cols_0_Template_textarea_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.simpleExperiment.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "This is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "ct-section-body-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Experiment code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExperimentEditComponent_ct_cols_0_Template_textarea_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.simpleExperiment.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "This is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ct-section-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "ct-section-footer-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "ct-flex", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperimentEditComponent_ct_cols_0_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\n                                Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "ct-flex-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperimentEditComponent_ct_cols_0_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "ct-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "ct-rest-status", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Experiment #", ctx_r0.simpleExperiment.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.simpleExperiment.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.simpleExperiment.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.simpleExperiment.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx_r0.operationStatusRest);
} }
class ExperimentEditComponent extends _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_2__["UIStateComponent"] {
    constructor(route, experimentsService, router, activatedRoute, authenticationService) {
        super(authenticationService);
        this.route = route;
        this.experimentsService = experimentsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.simpleExperiment = {
            name: null,
            description: null,
            code: null,
            id: null
        };
    }
    ngOnInit() {
        this.setIsLoadingStart();
        this.simpleExperiment.id = this.route.snapshot.paramMap.get('experimentId');
        this.experimentsService
            .edit(this.route.snapshot.paramMap.get('experimentId'))
            .subscribe({
            next: experimentsEditResult => {
                this.experimentsEditResult = experimentsEditResult;
                this.simpleExperiment.code = experimentsEditResult.simpleExperiment.code;
                this.simpleExperiment.description = experimentsEditResult.simpleExperiment.description;
                this.simpleExperiment.name = experimentsEditResult.simpleExperiment.name;
            },
            complete: () => {
                this.setIsLoadingEnd();
            }
        });
    }
    save() {
        this.setIsLoadingStart();
        this.experimentsService
            .editFormCommit(this.simpleExperiment)
            .subscribe({
            next: operationStatusRest => this.operationStatusRest = operationStatusRest,
            complete: () => this.setIsLoadingEnd()
        });
    }
    back() {
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
    }
}
ExperimentEditComponent.ɵfac = function ExperimentEditComponent_Factory(t) { return new (t || ExperimentEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_experiments_experiments_service__WEBPACK_IMPORTED_MODULE_1__["ExperimentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ExperimentEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExperimentEditComponent, selectors: [["experiment-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["size", "6"], ["appearance", "outline"], ["matInput", "matInput", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["matInput", "matInput", "cdkTextareaAutosize", "cdkTextareaAutosize", "cdkAutosizeMinRows", "5", 3, "ngModel", "ngModelChange"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", "title", "Cancel", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", "title", "Save", 3, "disabled", "click"], [3, "content"]], template: function ExperimentEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExperimentEditComponent_ct_cols_0_Template, 88, 6, "ct-cols", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.experimentsEditResult);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_6__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_7__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_11__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["CdkTextareaAutosize"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_19__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_20__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_21__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_23__["CtRestStatusComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .metadata-sections[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-column-key[_ngcontent-%COMP%], .metadata-sections[_ngcontent-%COMP%]   .mat-column-empty[_ngcontent-%COMP%] {\n  flex: none;\n  width: 250px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-column-values[_ngcontent-%COMP%], .metadata-sections[_ngcontent-%COMP%]   .mat-column-edit[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-column-delete[_ngcontent-%COMP%], .metadata-sections[_ngcontent-%COMP%]   .mat-column-done[_ngcontent-%COMP%] {\n  flex: none;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-column-bts[_ngcontent-%COMP%] {\n  flex: none;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 1.34375em;\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .metadata-params[_ngcontent-%COMP%]   .caption-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.033);\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .metadata-params[_ngcontent-%COMP%]   .caption-row.picked-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0);\n}\n\n.metadata-sections[_ngcontent-%COMP%]   .metadata-params[_ngcontent-%COMP%]   .caption-row.picked-row[_ngcontent-%COMP%]    + .edit-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhwZXJpbWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUlJOztFQUVJLHVCQUFBO0FBRFI7O0FBSUk7O0VBRUksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRlI7O0FBS0k7O0VBRUksWUFBQTtBQUhSOztBQU1JOztFQUVJLFVBQUE7QUFKUjs7QUFPSTtFQUNJLFVBQUE7QUFMUjs7QUFRSTtFQUNJLFdBQUE7QUFOUjs7QUFTSTtFQUNJLHFCQUFBO0FBUFI7O0FBVUk7RUFDSSxhQUFBO0FBUlI7O0FBV0k7RUFDSSxxQkFBQTtBQVRSOztBQWNRO0VBQ0ksZ0NBQUE7QUFaWjs7QUFlUTtFQUNJLDRCQUFBO0FBYlo7O0FBb0JRO0VBQ0ksYUFBQTtBQWxCWiIsImZpbGUiOiJleHBlcmltZW50LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1ldGFkYXRhLXNlY3Rpb25zIHtcclxuXHJcbiAgICAubWF0LWNlbGwsXHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNvbHVtbi1rZXksXHJcbiAgICAubWF0LWNvbHVtbi1lbXB0eSB7XHJcbiAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY29sdW1uLXZhbHVlcyxcclxuICAgIC5tYXQtY29sdW1uLWVkaXQge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNvbHVtbi1kZWxldGUsXHJcbiAgICAubWF0LWNvbHVtbi1kb25lIHtcclxuICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY29sdW1uLWJ0cyB7XHJcbiAgICAgICAgZmxleDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtcm93IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yb3c6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm1ldGFkYXRhLXBhcmFtcyB7XHJcbiAgICAgICAgLmNhcHRpb24tcm93OmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FwdGlvbi1yb3cucGlja2VkLXJvdzpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FwdGlvbi1yb3crLmVkaXQtcm93IHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXB0aW9uLXJvdy5waWNrZWQtcm93Ky5lZGl0LXJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLy8gdG9wOiAtMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "zwJj":
/*!********************************************************************************!*\
  !*** ./src/app/modules/experiments/experiment-add/experiment-add.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExperimentAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentAddComponent", function() { return ExperimentAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_experiments_experiments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/experiments/experiments.service */ "3c6l");
/* harmony import */ var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/enums/OperationStatus */ "uB0V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ct/ct-cols/ct-cols.component */ "I6qf");
/* harmony import */ var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ct/ct-col/ct-col.component */ "MI58");
/* harmony import */ var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ct/ct-section/ct-section.component */ "2ljo");
/* harmony import */ var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ct/ct-section-header/ct-section-header.component */ "1P+h");
/* harmony import */ var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ct/ct-section-header-row/ct-section-header-row.component */ "25/r");
/* harmony import */ var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ct/ct-heading/ct-heading.component */ "Xc1m");
/* harmony import */ var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ct/ct-section-body/ct-section-body.component */ "Ne1S");
/* harmony import */ var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ct/ct-section-body-row/ct-section-body-row.component */ "Kt2f");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ct/ct-section-footer/ct-section-footer.component */ "FMVq");
/* harmony import */ var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */ "V6TR");
/* harmony import */ var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ct/ct-flex/ct-flex.component */ "CaYE");
/* harmony import */ var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ct/ct-flex-item/ct-flex-item.component */ "No2e");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ct/ct-rest-status/ct-rest-status.component */ "05qC");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




























function ExperimentAddComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sourceCode_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", sourceCode_r1.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sourceCode_r1.uid);
} }
class ExperimentAddComponent {
    constructor(experimentsService, router, activatedRoute) {
        this.experimentsService = experimentsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            sourceCodeUID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            experimentCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
        });
    }
    ngOnInit() {
        this.experimentsService
            .experimentAdd()
            .subscribe({
            next: (sourceCodeUidsForCompany) => {
                this.sourceCodeUidsForCompany = sourceCodeUidsForCompany;
            }
        });
    }
    cancel() {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }
    create() {
        this.experimentsService
            .addFormCommit(this.form.value.sourceCodeUID, this.form.value.name, this.form.value.description, this.form.value.experimentCode)
            .subscribe({
            next: (operationStatusRest) => {
                this.operationStatusRest = operationStatusRest;
                if (operationStatusRest.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__["OperationStatus"].OK) {
                    this.form.reset();
                }
            }
        });
    }
}
ExperimentAddComponent.ɵfac = function ExperimentAddComponent_Factory(t) { return new (t || ExperimentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_experiments_experiments_service__WEBPACK_IMPORTED_MODULE_2__["ExperimentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ExperimentAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExperimentAddComponent, selectors: [["experiment-add"]], decls: 111, vars: 4, consts: [["size", "6"], ["novalidate", "novalidate", 3, "formGroup"], ["appearance", "outline"], ["formControlName", "sourceCodeUID"], [4, "ngFor", "ngForOf"], ["matInput", "matInput", "formControlName", "name"], ["matInput", "matInput", "formControlName", "description", "cdkTextareaAutosize", "cdkTextareaAutosize", "cdkAutosizeMinRows", "5"], ["matInput", "matInput", "formControlName", "experimentCode", "cdkTextareaAutosize", "cdkTextareaAutosize", "cdkAutosizeMinRows", "5"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], [3, "content"], [3, "value"]], template: function ExperimentAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ct-cols");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ct-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ct-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ct-section-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ct-section-header-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ct-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "New Experiment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ct-section-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ct-section-body-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "List of Uids of source codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ExperimentAddComponent_div_28_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "This is a required field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "This is a required field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "This is a required field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Experiment code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "This is a required field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "ct-section-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "ct-section-footer-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "ct-flex", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "ct-flex-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperimentAddComponent_Template_button_click_91_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "ct-flex-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperimentAddComponent_Template_button_click_97_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "ct-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "ct-rest-status", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sourceCodeUidsForCompany == null ? null : ctx.sourceCodeUidsForCompany.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.operationStatusRest);
    } }, directives: [_ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["CdkTextareaAutosize"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_19__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_20__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_21__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_23__["CtRestStatusComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhwZXJpbWVudC1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxXQUFBO0FBQUQiLCJmaWxlIjoiZXhwZXJpbWVudC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWZvcm0tZmllbGQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-modules-experiments-experiments-module-es2015.js.map