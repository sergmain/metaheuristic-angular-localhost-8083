(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-global-variables-global-variables-module"], {
    /***/
    "BQRg": function BQRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariablesRoutes", function () {
        return GlobalVariablesRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariablesRoutingModule", function () {
        return GlobalVariablesRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariablesModule", function () {
        return GlobalVariablesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/ngmaterial.module */
      "vCXQ");
      /* harmony import */


      var _global_variables_global_variables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./global-variables/global-variables.component */
      "bHzc");
      /* harmony import */


      var _add_global_variable_add_global_variable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-global-variable/add-global-variable.component */
      "cytg");
      /* harmony import */


      var _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ct/ct.module */
      "9kxi");
      /* harmony import */


      var _card_form_add_variable_card_form_add_variable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./card-form-add-variable/card-form-add-variable.component */
      "CZMM");
      /* harmony import */


      var _card_form_add_variable_with_storage_card_form_add_variable_with_storage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./card-form-add-variable-with-storage/card-form-add-variable-with-storage.component */
      "gbVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GlobalVariablesRoutes = [{
        path: '',
        component: _global_variables_global_variables_component__WEBPACK_IMPORTED_MODULE_5__["GlobalVariablesComponent"]
      }, {
        path: 'add',
        component: _add_global_variable_add_global_variable_component__WEBPACK_IMPORTED_MODULE_6__["AddGlobalVariableComponent"],
        data: {
          backConfig: ['../']
        }
      }, {
        path: ':id',
        component: _global_variables_global_variables_component__WEBPACK_IMPORTED_MODULE_5__["GlobalVariablesComponent"],
        data: {
          backConfig: ['../']
        }
      }];

      var GlobalVariablesRoutingModule = function GlobalVariablesRoutingModule() {
        _classCallCheck(this, GlobalVariablesRoutingModule);
      };

      GlobalVariablesRoutingModule.ɵfac = function GlobalVariablesRoutingModule_Factory(t) {
        return new (t || GlobalVariablesRoutingModule)();
      };

      GlobalVariablesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: GlobalVariablesRoutingModule
      });
      GlobalVariablesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(GlobalVariablesRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](GlobalVariablesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();

      var GlobalVariablesModule = function GlobalVariablesModule() {
        _classCallCheck(this, GlobalVariablesModule);
      };

      GlobalVariablesModule.ɵfac = function GlobalVariablesModule_Factory(t) {
        return new (t || GlobalVariablesModule)();
      };

      GlobalVariablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: GlobalVariablesModule
      });
      GlobalVariablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], GlobalVariablesRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](GlobalVariablesModule, {
          declarations: [_global_variables_global_variables_component__WEBPACK_IMPORTED_MODULE_5__["GlobalVariablesComponent"], _add_global_variable_add_global_variable_component__WEBPACK_IMPORTED_MODULE_6__["AddGlobalVariableComponent"], _card_form_add_variable_card_form_add_variable_component__WEBPACK_IMPORTED_MODULE_8__["CardFormAddVariableComponent"], _card_form_add_variable_with_storage_card_form_add_variable_with_storage_component__WEBPACK_IMPORTED_MODULE_9__["CardFormAddVariableWithStorageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], GlobalVariablesRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "CZMM": function CZMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFormAddVariableComponent", function () {
        return CardFormAddVariableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_app_services_global_variables_global_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/global-variables/global-variables.service */
      "xOAg");
      /* harmony import */


      var _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ct/ct-file-upload/ct-file-upload.component */
      "MbdJ");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["fileUpload"];

      var CardFormAddVariableComponent = /*#__PURE__*/function () {
        function CardFormAddVariableComponent(globalVariablesService) {
          _classCallCheck(this, CardFormAddVariableComponent);

          this.globalVariablesService = globalVariablesService;
          this.afterResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.abort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            poolCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])
          });
        }

        _createClass(CardFormAddVariableComponent, [{
          key: "upload",
          value: function upload() {
            var _this = this;

            this.globalVariablesService.createResourceFromFile(this.form.value.poolCode, this.fileUpload.fileInput.nativeElement.files[0]).subscribe(function (response) {
              _this.afterResponse.emit(response);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.abort.emit();
          }
        }, {
          key: "checkDisable",
          value: function checkDisable() {
            if (this.form.valid && this.fileUpload.fileInput.nativeElement.files.length) {
              return false;
            }

            return true;
          }
        }]);

        return CardFormAddVariableComponent;
      }();

      CardFormAddVariableComponent.ɵfac = function CardFormAddVariableComponent_Factory(t) {
        return new (t || CardFormAddVariableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_global_variables_global_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalVariablesService"]));
      };

      CardFormAddVariableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardFormAddVariableComponent,
        selectors: [["card-form-add-variable"]],
        viewQuery: function CardFormAddVariableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        outputs: {
          afterResponse: "afterResponse",
          abort: "abort"
        },
        decls: 67,
        vars: 2,
        consts: [["novalidate", "novalidate", 3, "formGroup"], ["fileUpload", ""], [1, "mat-form-field", "mat-form-field-appearance-outline", 2, "width", "100%"], [1, "mat-form-field-subscript-wrapper"], ["appearance", "outline", 2, "width", "100%"], ["autocomplete", "off", "matInput", "matInput", "formControlName", "poolCode"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"]],
        template: function CardFormAddVariableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create global variable from file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ct-file-upload", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Variable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ct-flex", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormAddVariableComponent_Template_button_click_54_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormAddVariableComponent_Template_button_click_60_listener() {
              return ctx.upload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checkDisable());
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionBodyRowComponent"], _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["CtFileUploadComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_14__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_15__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWZvcm0tYWRkLXZhcmlhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "bHzc": function bHzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariablesComponent", function () {
        return GlobalVariablesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/components/app-dialog-confirmation/app-dialog-confirmation.component */
      "lJGJ");
      /* harmony import */


      var _src_app_services_global_variables_global_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/services/global-variables/global-variables.service */
      "xOAg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-table-pagination/ct-table-pagination.component */
      "W7k4");
      /* harmony import */


      var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-pre/ct-pre.component */
      "IRPT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      function GlobalVariablesComponent_ct_section_0_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function GlobalVariablesComponent_ct_section_0_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r19.id, " ");
        }
      }

      function GlobalVariablesComponent_ct_section_0_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, el_r20.uploadTs), " ");
        }
      }

      function GlobalVariablesComponent_ct_section_0_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Variable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r21.variable, " ");
        }
      }

      function GlobalVariablesComponent_ct_section_0_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filename");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r22.filename, " ");
        }
      }

      function GlobalVariablesComponent_ct_section_0_th_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Params");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_td_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](el_r23.params);
        }
      }

      function GlobalVariablesComponent_ct_section_0_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_td_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-flex", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalVariablesComponent_ct_section_0_td_69_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var el_r24 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25["delete"](el_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_tr_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GlobalVariablesComponent_ct_section_0_tr_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("deleted-table-row", ctx_r17.deletedRows.includes(row_r27));
        }
      }

      function GlobalVariablesComponent_ct_section_0_ng_container_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function GlobalVariablesComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ct-flex", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GlobalVariablesComponent_ct_section_0_ng_container_16_Template, 1, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ct-table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GlobalVariablesComponent_ct_section_0_th_32_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GlobalVariablesComponent_ct_section_0_td_34_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GlobalVariablesComponent_ct_section_0_th_39_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, GlobalVariablesComponent_ct_section_0_td_41_Template, 3, 3, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, GlobalVariablesComponent_ct_section_0_th_46_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, GlobalVariablesComponent_ct_section_0_td_48_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, GlobalVariablesComponent_ct_section_0_th_53_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, GlobalVariablesComponent_ct_section_0_td_55_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, GlobalVariablesComponent_ct_section_0_th_60_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, GlobalVariablesComponent_ct_section_0_td_62_Template, 5, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, GlobalVariablesComponent_ct_section_0_th_67_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, GlobalVariablesComponent_ct_section_0_td_69_Template, 14, 0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, GlobalVariablesComponent_ct_section_0_tr_72_Template, 2, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, GlobalVariablesComponent_ct_section_0_tr_74_Template, 1, 2, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ct-flex", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ct-table-pagination", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function GlobalVariablesComponent_ct_section_0_Template_ct_table_pagination_next_88_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.nextPage();
          })("prev", function GlobalVariablesComponent_ct_section_0_Template_ct_table_pagination_prev_88_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.prevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, GlobalVariablesComponent_ct_section_0_ng_container_94_Template, 1, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageableDefault", ctx_r0.globalVariablesResult.items)("globalDisable", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      function GlobalVariablesComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create variable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        }
      }

      var GlobalVariablesComponent = /*#__PURE__*/function () {
        function GlobalVariablesComponent(dialog, globalVariablesService, changeDetectorRef) {
          _classCallCheck(this, GlobalVariablesComponent);

          this.dialog = dialog;
          this.globalVariablesService = globalVariablesService;
          this.changeDetectorRef = changeDetectorRef;
          this.deletedRows = [];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
          this.columnsToDisplay = ['id', 'variable', 'uploadTs', 'filename', 'params', 'bts'];
        }

        _createClass(GlobalVariablesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateTable(0);
          }
        }, {
          key: "updateTable",
          value: function updateTable(page) {
            var _this2 = this;

            this.isLoading = true;
            this.globalVariablesService.getResources(page.toString()).subscribe(function (globalVariablesResult) {
              _this2.globalVariablesResult = globalVariablesResult;

              _this2.changeDetectorRef.detectChanges();

              _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](globalVariablesResult.items.content || []);
              _this2.isLoading = false;
            });
          }
        }, {
          key: "delete",
          value: function _delete(globalVariable) {
            this.deletedRows.push(globalVariable);
            this.globalVariablesService.deleteResource(globalVariable.id.toString()).subscribe();
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable(this.globalVariablesResult.items.number + 1);
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable(this.globalVariablesResult.items.number - 1);
          }
        }]);

        return GlobalVariablesComponent;
      }();

      GlobalVariablesComponent.ɵfac = function GlobalVariablesComponent_Factory(t) {
        return new (t || GlobalVariablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_global_variables_global_variables_service__WEBPACK_IMPORTED_MODULE_4__["GlobalVariablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      GlobalVariablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GlobalVariablesComponent,
        selectors: [["global-variables"]],
        decls: 4,
        vars: 1,
        consts: [[4, "ngIf"], ["addVariableButton", ""], ["justify-content", "space-between"], [4, "ngTemplateOutlet"], [3, "isWaiting"], ["mat-table", "mat-table", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "id", "sticky", "sticky"], ["mat-header-cell", "mat-header-cell", 4, "matHeaderCellDef"], ["mat-cell", "mat-cell", 4, "matCellDef"], ["matColumnDef", "uploadTs"], ["matColumnDef", "variable"], ["matColumnDef", "filename"], ["matColumnDef", "params"], ["matColumnDef", "bts", "stickyEnd", "stickyEnd"], ["mat-header-row", "mat-header-row", 4, "matHeaderRowDef"], ["mat-row", "mat-row", 3, "deleted-table-row", 4, "matRowDef", "matRowDefColumns"], [3, "pageableDefault", "globalDisable", "next", "prev"], ["mat-header-cell", "mat-header-cell"], ["mat-cell", "mat-cell"], ["justify-content", "flex-end"], ["mat-flat-button", "mat-flat-button", "color", "warn", "size", "forTableRow", 3, "click"], ["mat-header-row", "mat-header-row"], ["mat-row", "mat-row"], ["mat-flat-button", "mat-flat-button", "color", "primary", "routerLink", "add"]],
        template: function GlobalVariablesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GlobalVariablesComponent_ct_section_0_Template, 100, 8, "ct-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalVariablesComponent_ng_template_2_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.globalVariablesResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_9__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_10__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_11__["CtHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_14__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_17__["CtTablePaginationComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_18__["CtPreComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnbG9iYWwtdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      __decorate([Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogMethod"])({
        question: function question(globalVariable) {
          return "Do you want to delete Variable\xA0#".concat(globalVariable.id);
        },
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], GlobalVariablesComponent.prototype, "delete", null);
      /***/

    },

    /***/
    "cytg": function cytg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGlobalVariableComponent", function () {
        return AddGlobalVariableComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
      /* harmony import */


      var _card_form_add_variable_card_form_add_variable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../card-form-add-variable/card-form-add-variable.component */
      "CZMM");
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");
      /* harmony import */


      var _card_form_add_variable_with_storage_card_form_add_variable_with_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../card-form-add-variable-with-storage/card-form-add-variable-with-storage.component */
      "gbVu");

      var AddGlobalVariableComponent = /*#__PURE__*/function () {
        function AddGlobalVariableComponent(router, route) {
          _classCallCheck(this, AddGlobalVariableComponent);

          this.router = router;
          this.route = route;
        }

        _createClass(AddGlobalVariableComponent, [{
          key: "updateStatusAfterAddVarible",
          value: function updateStatusAfterAddVarible(response) {
            if (response.status !== _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].OK) {
              this.addVariableResponse = response;
            } else {
              this.back();
            }
          }
        }, {
          key: "updateStatusAfterAddVaribleStorage",
          value: function updateStatusAfterAddVaribleStorage(response) {
            if (response.status !== _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].OK) {
              this.addVariableStorageResponse = response;
            } else {
              this.back();
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
          }
        }]);

        return AddGlobalVariableComponent;
      }();

      AddGlobalVariableComponent.ɵfac = function AddGlobalVariableComponent_Factory(t) {
        return new (t || AddGlobalVariableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      AddGlobalVariableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AddGlobalVariableComponent,
        selectors: [["add-global-variable"]],
        decls: 29,
        vars: 2,
        consts: [["size", "6"], [3, "abort", "afterResponse"], [3, "content"]],
        template: function AddGlobalVariableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ct-cols");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "card-form-add-variable", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("abort", function AddGlobalVariableComponent_Template_card_form_add_variable_abort_4_listener() {
              return ctx.back();
            })("afterResponse", function AddGlobalVariableComponent_Template_card_form_add_variable_afterResponse_4_listener($event) {
              return ctx.updateStatusAfterAddVarible($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ct-rest-status", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ct-cols");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "card-form-add-variable-with-storage", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("abort", function AddGlobalVariableComponent_Template_card_form_add_variable_with_storage_abort_20_listener() {
              return ctx.back();
            })("afterResponse", function AddGlobalVariableComponent_Template_card_form_add_variable_with_storage_afterResponse_20_listener($event) {
              return ctx.updateStatusAfterAddVaribleStorage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ct-rest-status", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.addVariableResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.addVariableStorageResponse);
          }
        },
        directives: [_ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_3__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_4__["CtColComponent"], _card_form_add_variable_card_form_add_variable_component__WEBPACK_IMPORTED_MODULE_5__["CardFormAddVariableComponent"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_6__["CtRestStatusComponent"], _card_form_add_variable_with_storage_card_form_add_variable_with_storage_component__WEBPACK_IMPORTED_MODULE_7__["CardFormAddVariableWithStorageComponent"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWdsb2JhbC12YXJpYWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJhZGQtZ2xvYmFsLXZhcmlhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "gbVu": function gbVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFormAddVariableWithStorageComponent", function () {
        return CardFormAddVariableWithStorageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../ct/ct-file-upload/ct-file-upload.component */
      "MbdJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_app_services_global_variables_global_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/global-variables/global-variables.service */
      "xOAg");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section-content/ct-section-content.component */
      "eWij");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "ihCf");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["fileUpload"];

      var CardFormAddVariableWithStorageComponent = /*#__PURE__*/function () {
        function CardFormAddVariableWithStorageComponent(globalVariablesService) {
          _classCallCheck(this, CardFormAddVariableWithStorageComponent);

          this.globalVariablesService = globalVariablesService;
          this.afterResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.abort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            params: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]),
            poolCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])
          });
        }

        _createClass(CardFormAddVariableWithStorageComponent, [{
          key: "create",
          value: function create() {
            var _this3 = this;

            this.globalVariablesService.registerResourceInExternalStorage(this.form.value.poolCode, this.form.value.params).subscribe(function (response) {
              _this3.afterResponse.emit(response);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.abort.emit();
          }
        }]);

        return CardFormAddVariableWithStorageComponent;
      }();

      CardFormAddVariableWithStorageComponent.ɵfac = function CardFormAddVariableWithStorageComponent_Factory(t) {
        return new (t || CardFormAddVariableWithStorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_global_variables_global_variables_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVariablesService"]));
      };

      CardFormAddVariableWithStorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardFormAddVariableWithStorageComponent,
        selectors: [["card-form-add-variable-with-storage"]],
        viewQuery: function CardFormAddVariableWithStorageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        outputs: {
          afterResponse: "afterResponse",
          abort: "abort"
        },
        decls: 84,
        vars: 2,
        consts: [["novalidate", "novalidate", 3, "formGroup"], ["appearance", "outline", 2, "width", "100%"], ["autocomplete", "off", "matInput", "matInput", "formControlName", "poolCode"], [2, "font-size", "80%", "line-height", "1.1"], ["autocomplete", "off", "matInput", "matInput", "formControlName", "params", "cdkTextareaAutosize", "cdkTextareaAutosize", 2, "min-height", "5em", "overflow", "hidden"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function CardFormAddVariableWithStorageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Global variable with git or disk storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Variable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ct-section-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "pre", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Example:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\nsourcing: disk \ndisk: \n  code: storage-code \n  mask: '*'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "pre", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Example:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\nsourcing: git\ngit:\n  repo: https://github.com/sergmain/metaheuristic.git\n  branch: master\n  commit: b25331edba72a1a901634212ac55752238fd2dd5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Params of variables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ct-flex", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormAddVariableWithStorageComponent_Template_button_click_71_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormAddVariableWithStorageComponent_Template_button_click_77_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionContentComponent"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["CdkTextareaAutosize"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_16__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"]],
        styles: ["textarea[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  overflow: hidden !important;\n  font-size: 80%;\n  font-family: \"Courier New\", Courier, monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC1mb3JtLWFkZC12YXJpYWJsZS13aXRoLXN0b3JhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FBQ0oiLCJmaWxlIjoiY2FyZC1mb3JtLWFkZC12YXJpYWJsZS13aXRoLXN0b3JhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "xOAg": function xOAg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariablesService", function () {
        return GlobalVariablesService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/helpers/generateFormData */
      "bzsW");
      /* harmony import */


      var _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var url = function url(s) {
        return "".concat(_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "dispatcher/global-variable").concat(s);
      };

      var GlobalVariablesService = /*#__PURE__*/function () {
        function GlobalVariablesService(http) {
          _classCallCheck(this, GlobalVariablesService);

          this.http = http;
        }

        _createClass(GlobalVariablesService, [{
          key: "getResources",
          value: function getResources(page) {
            return this.http.get(url('/global-variables'), {
              params: {
                page: page
              }
            });
          }
        }, {
          key: "createResourceFromFile",
          value: function createResourceFromFile(variable, file) {
            return this.http.post(url("/global-variable-upload-from-file"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              variable: variable,
              file: file
            }));
          }
        }, {
          key: "registerResourceInExternalStorage",
          value: function registerResourceInExternalStorage(variable, params) {
            return this.http.post(url("/global-variable-in-external-storage"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              variable: variable,
              params: params
            }));
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get(url('/global-variable/' + id));
          }
        }, {
          key: "deleteResource",
          value: function deleteResource(id) {
            return this.http.post(url("/global-variable-delete-commit"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              id: id
            }));
          }
        }]);

        return GlobalVariablesService;
      }();

      GlobalVariablesService.ɵfac = function GlobalVariablesService_Factory(t) {
        return new (t || GlobalVariablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      GlobalVariablesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: GlobalVariablesService,
        factory: GlobalVariablesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-global-variables-global-variables-module-es5.js.map