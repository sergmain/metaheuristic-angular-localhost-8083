(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-functions-functions-module"], {
    /***/
    "/4NT": function NT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddFunctionComponent", function () {
        return AddFunctionComponent;
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


      var _src_app_services_functions_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/functions/functions.service */
      "LkXH");
      /* harmony import */


      var _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ct/ct-file-upload/ct-file-upload.component */
      "MbdJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      var _c0 = ["fileUpload"];

      function AddFunctionComponent_ct_col_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ct-col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ct-rest-status", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx_r1.response);
        }
      }

      var AddFunctionComponent = /*#__PURE__*/function () {
        function AddFunctionComponent(funcrionsService, router) {
          _classCallCheck(this, AddFunctionComponent);

          this.funcrionsService = funcrionsService;
          this.router = router;
        }

        _createClass(AddFunctionComponent, [{
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['/dispatcher', 'functions']);
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this = this;

            this.funcrionsService.uploadFunction(this.fileUpload.fileInput.nativeElement.files[0]).subscribe(function (response) {
              _this.response = response;

              if (response.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].OK) {
                _this.cancel();
              }
            });
          }
        }]);

        return AddFunctionComponent;
      }();

      AddFunctionComponent.ɵfac = function AddFunctionComponent_Factory(t) {
        return new (t || AddFunctionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_functions_functions_service__WEBPACK_IMPORTED_MODULE_2__["FuncrionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      AddFunctionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AddFunctionComponent,
        selectors: [["add-function"]],
        viewQuery: function AddFunctionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        decls: 49,
        vars: 2,
        consts: [["size", "6"], ["fileUpload", ""], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], ["size", "6", 4, "ngIf"], [3, "content"]],
        template: function AddFunctionComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Add Function");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ct-file-upload", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ct-flex", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddFunctionComponent_Template_button_click_32_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddFunctionComponent_Template_button_click_38_listener() {
              return ctx.upload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Upload\n                                function");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, AddFunctionComponent_ct_col_47_Template, 4, 1, "ct-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(_r0 == null ? null : _r0.fileInput == null ? null : _r0.fileInput.nativeElement == null ? null : _r0.fileInput.nativeElement.files == null ? null : _r0.fileInput.nativeElement.files.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.response);
          }
        },
        directives: [_ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["CtFileUploadComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_15__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_16__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_19__["CtRestStatusComponent"]],
        styles: [".file-names[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-size: 125%;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWZ1bmN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFkZC1mdW5jdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLW5hbWVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTsgIFxyXG4gICAgcGFkZGluZzogOHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "1YC9": function YC9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionsRoutes", function () {
        return FunctionsRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionsRoutingModule", function () {
        return FunctionsRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionsModule", function () {
        return FunctionsModule;
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


      var _add_function_add_function_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-function/add-function.component */
      "/4NT");
      /* harmony import */


      var _functions_functions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./functions/functions.component */
      "R6QM");
      /* harmony import */


      var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/ngmaterial.module */
      "vCXQ");
      /* harmony import */


      var _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ct/ct.module */
      "9kxi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FunctionsRoutes = [{
        path: '',
        component: _functions_functions_component__WEBPACK_IMPORTED_MODULE_5__["FunctionsComponent"]
      }, {
        path: 'add',
        component: _add_function_add_function_component__WEBPACK_IMPORTED_MODULE_4__["AddFunctionComponent"],
        data: {
          backConfig: ['../']
        }
      }];

      var FunctionsRoutingModule = function FunctionsRoutingModule() {
        _classCallCheck(this, FunctionsRoutingModule);
      };

      FunctionsRoutingModule.ɵfac = function FunctionsRoutingModule_Factory(t) {
        return new (t || FunctionsRoutingModule)();
      };

      FunctionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: FunctionsRoutingModule
      });
      FunctionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(FunctionsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FunctionsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();

      var FunctionsModule = function FunctionsModule() {
        _classCallCheck(this, FunctionsModule);
      };

      FunctionsModule.ɵfac = function FunctionsModule_Factory(t) {
        return new (t || FunctionsModule)();
      };

      FunctionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: FunctionsModule
      });
      FunctionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], FunctionsRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_6__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FunctionsModule, {
          declarations: [_add_function_add_function_component__WEBPACK_IMPORTED_MODULE_4__["AddFunctionComponent"], _functions_functions_component__WEBPACK_IMPORTED_MODULE_5__["FunctionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], FunctionsRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_6__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "LkXH": function LkXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncrionsService", function () {
        return FuncrionsService;
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
        return "".concat(_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "dispatcher/function/").concat(s);
      };

      var FuncrionsService = /*#__PURE__*/function () {
        function FuncrionsService(http) {
          _classCallCheck(this, FuncrionsService);

          this.http = http;
        } // @GetMapping("/functions")
        // @PreAuthorize("hasAnyRole('ADMIN', 'DATA', 'MANAGER')")
        // public FunctionData.FunctionsResult getFunctions() {
        //     return functionTopLevelService.getFunctions();
        // }


        _createClass(FuncrionsService, [{
          key: "getFunctions",
          value: function getFunctions(page) {
            return this.http.get(url('functions'), {
              params: {
                page: page
              }
            });
          } // @GetMapping("/function-delete/{id}")
          // @PreAuthorize("hasAnyRole('ADMIN', 'DATA')")
          // public OperationStatusRest deleteCommit(@PathVariable Long id) {
          //     return functionTopLevelService.deleteFunctionById(id);
          // }

        }, {
          key: "deleteCommit",
          value: function deleteCommit(id) {
            return this.http.get(url("function-delete/".concat(id)));
          } // @PostMapping(value = "/function-upload-from-file")
          // @PreAuthorize("hasAnyRole('ADMIN', 'DATA')")
          // public OperationStatusRest uploadFunction(final MultipartFile file) {
          //     return functionTopLevelService.uploadFunction(file);
          // }

        }, {
          key: "uploadFunction",
          value: function uploadFunction(file) {
            return this.http.post(url('function-upload-from-file'), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              file: file
            }));
          }
        }]);

        return FuncrionsService;
      }();

      FuncrionsService.ɵfac = function FuncrionsService_Factory(t) {
        return new (t || FuncrionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      FuncrionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FuncrionsService,
        factory: FuncrionsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "R6QM": function R6QM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionsComponent", function () {
        return FunctionsComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/components/app-dialog-confirmation/app-dialog-confirmation.component */
      "lJGJ");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/dispatcher-asset-mode/dispatcher-asset-mode.service */
      "J0F4");
      /* harmony import */


      var _src_app_services_functions_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/services/functions/functions.service */
      "LkXH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../ct/ct-alert/ct-alert.component */
      "xAq4");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");
      /* harmony import */


      var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../ct/ct-pre/ct-pre.component */
      "IRPT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
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

      function FunctionsComponent_ct_section_0_ct_flex_item_24_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
        }
      }

      function FunctionsComponent_ct_section_0_ct_flex_item_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FunctionsComponent_ct_section_0_ct_flex_item_24_ng_container_2_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function FunctionsComponent_ct_section_0_ct_section_header_row_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ct-alert", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Upload and deletion of functions are disabled, assetMode is 'replicated'.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function FunctionsComponent_ct_section_0_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
        }
      }

      function FunctionsComponent_ct_section_0_ct_flex_item_51_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
        }
      }

      function FunctionsComponent_ct_section_0_ct_flex_item_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FunctionsComponent_ct_section_0_ct_flex_item_51_ng_container_2_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function FunctionsComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Functions");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ct-flex", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-slide-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function FunctionsComponent_ct_section_0_Template_mat_slide_toggle_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.showParams = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Show Params");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, FunctionsComponent_ct_section_0_ct_flex_item_24_Template, 4, 1, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, FunctionsComponent_ct_section_0_ct_section_header_row_30_Template, 5, 0, "ct-section-header-row", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, FunctionsComponent_ct_section_0_ng_container_37_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, FunctionsComponent_ct_section_0_ct_flex_item_51_Template, 4, 1, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r0.showParams);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.functionsResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.functionsResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.functionsResult.assetMode));
        }
      }

      function FunctionsComponent_ng_template_2_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                    Code\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function FunctionsComponent_ng_template_2_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](el_r23.code);
        }
      }

      function FunctionsComponent_ng_template_2_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                    Type\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function FunctionsComponent_ng_template_2_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](el_r24.type);
        }
      }

      function FunctionsComponent_ng_template_2_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                    Params\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function FunctionsComponent_ng_template_2_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ct-pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r25 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r18.showParams);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](el_r25.params);
        }
      }

      function FunctionsComponent_ng_template_2_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 18);
        }
      }

      function FunctionsComponent_ng_template_2_td_30_ct_flex_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ct-flex", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FunctionsComponent_ng_template_2_td_30_ct_flex_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);

            var el_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r28["delete"](el_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function FunctionsComponent_ng_template_2_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FunctionsComponent_ng_template_2_td_30_ct_flex_2_Template, 11, 0, "ct-flex", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r20.dispatcherAssetModeService.isReplicated(ctx_r20.functionsResult.assetMode));
        }
      }

      function FunctionsComponent_ng_template_2_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 24);
        }
      }

      function FunctionsComponent_ng_template_2_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 25);
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted-table-row", ctx_r22.deletedRows.includes(row_r31));
        }
      }

      function FunctionsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ct-table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, FunctionsComponent_ng_template_2_th_7_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, FunctionsComponent_ng_template_2_td_9_Template, 2, 1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, FunctionsComponent_ng_template_2_th_14_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, FunctionsComponent_ng_template_2_td_16_Template, 2, 1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, FunctionsComponent_ng_template_2_th_21_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, FunctionsComponent_ng_template_2_td_23_Template, 8, 2, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, FunctionsComponent_ng_template_2_th_28_Template, 1, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, FunctionsComponent_ng_template_2_td_30_Template, 4, 1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, FunctionsComponent_ng_template_2_tr_33_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, FunctionsComponent_ng_template_2_tr_35_Template, 1, 2, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isWaiting", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columnsToDisplay);
        }
      }

      function FunctionsComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Add Function ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n");
        }
      }

      var FunctionsComponent = /*#__PURE__*/function (_src_app_models_UISta) {
        _inherits(FunctionsComponent, _src_app_models_UISta);

        var _super = _createSuper(FunctionsComponent);

        function FunctionsComponent(functionService, dispatcherAssetModeService, dialog, authenticationService) {
          var _this2;

          _classCallCheck(this, FunctionsComponent);

          _this2 = _super.call(this, authenticationService);
          _this2.functionService = functionService;
          _this2.dispatcherAssetModeService = dispatcherAssetModeService;
          _this2.dialog = dialog;
          _this2.authenticationService = authenticationService;
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
          _this2.columnsToDisplay = ['code', 'type', 'params', 'bts'];
          _this2.deletedRows = [];
          _this2.showParams = false;
          return _this2;
        }

        _createClass(FunctionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateTable(0);
          }
        }, {
          key: "updateTable",
          value: function updateTable(page) {
            var _this3 = this;

            this.setIsLoadingStart();
            this.functionService.getFunctions(page.toString()).subscribe({
              next: function next(functionsResult) {
                _this3.functionsResult = functionsResult;
                _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](functionsResult.functions);
              },
              complete: function complete() {
                _this3.setIsLoadingEnd();
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(functionEntity) {
            this.deletedRows.push(functionEntity);
            this.functionService.deleteCommit(functionEntity.id.toString()).subscribe();
          } // INFO: functionsResult не содержит pageable
          // INFO: листание

        }, {
          key: "nextPage",
          value: function nextPage() {// this.updateTable(this...items.number + 1);
          }
        }, {
          key: "prevPage",
          value: function prevPage() {// this.updateTable(this...items.number - 1);
          }
        }]);

        return FunctionsComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_3__["UIStateComponent"]);

      FunctionsComponent.ɵfac = function FunctionsComponent_Factory(t) {
        return new (t || FunctionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_functions_functions_service__WEBPACK_IMPORTED_MODULE_6__["FuncrionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_5__["DispatcherAssetModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      FunctionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: FunctionsComponent,
        selectors: [["functions"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 1,
        consts: [[4, "ngIf"], ["MainTableTemplate", ""], ["addButtonTemplate", ""], ["justify-content", "space-between"], ["justify-content", "flex-end", "align-items", "center", "gap", "16px"], [3, "ngModel", "ngModelChange"], [4, "ngTemplateOutlet"], ["theme", "info"], [3, "isWaiting"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "params"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "deleted-table-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "hidden"], ["justify-content", "flex-end", "gap", "8px", 4, "ngIf"], ["justify-content", "flex-end", "gap", "8px"], ["mat-flat-button", "", "color", "warn", "size", "forTableRow", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["routerLink", "/dispatcher/functions/add"], ["mat-flat-button", "", "color", "primary"]],
        template: function FunctionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, FunctionsComponent_ct_section_0_Template, 56, 5, "ct-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FunctionsComponent_ng_template_2_Template, 39, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, FunctionsComponent_ng_template_5_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.functionsResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_12__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_13__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_14__["CtHeadingComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionBodyRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_19__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_20__["CtSectionFooterRowComponent"], _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_21__["CtAlertComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_22__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_23__["CtPreComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5jdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      __decorate([Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogMethod"])({
        question: function question(functionEntity) {
          return "Do you want to delete Function\xA0#".concat(functionEntity.id);
        },
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], FunctionsComponent.prototype, "delete", null);
      /***/

    }
  }]);
})();
//# sourceMappingURL=src-app-modules-functions-functions-module-es5.js.map