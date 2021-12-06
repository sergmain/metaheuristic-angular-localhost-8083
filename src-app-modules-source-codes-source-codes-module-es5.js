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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-source-codes-source-codes-module"], {
    /***/
    "/Pb3": function Pb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewSourceCodeComponent", function () {
        return ViewSourceCodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
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


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section-content/ct-section-content.component */
      "eWij");
      /* harmony import */


      var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-pre/ct-pre.component */
      "IRPT");
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
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      function ViewSourceCodeComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-cols", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ct-section-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ct-pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewSourceCodeComponent_ct_cols_0_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewSourceCodeComponent_ct_cols_0_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.validate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Validate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "ct-rest-status", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit SourceCode ", ctx_r0.sourceCode ? ctx_r0.sourceCode.id : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sourceCode.source);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.sourceCodeResponseForValidate);
        }
      }

      var ViewSourceCodeComponent = /*#__PURE__*/function () {
        function ViewSourceCodeComponent(route, sourceCodesService, router, elRef) {
          _classCallCheck(this, ViewSourceCodeComponent);

          this.route = route;
          this.sourceCodesService = sourceCodesService;
          this.router = router;
          this.elRef = elRef;
        }

        _createClass(ViewSourceCodeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateResponse();
          }
        }, {
          key: "updateResponse",
          value: function updateResponse() {
            var _this = this;

            var id = this.route.snapshot.paramMap.get('sourceCodeId');
            this.sourceCodesService.edit(id).subscribe(function (sourceCodeResult) {
              _this.sourceCodeResponse = sourceCodeResult;
              _this.sourceCode = sourceCodeResult;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/dispatcher', 'source-codes']);
          }
        }, {
          key: "validate",
          value: function validate() {
            var _this2 = this;

            var id = this.route.snapshot.paramMap.get('sourceCodeId');
            this.sourceCodesService.validate(id).subscribe(function (sourceCodeResult) {
              _this2.sourceCodeResponse = sourceCodeResult;
              _this2.sourceCodeResponseForValidate = sourceCodeResult;

              _this2.scrollIntoView();
            });
          }
        }, {
          key: "scrollIntoView",
          value: function scrollIntoView() {
            var node = this.elRef.nativeElement.querySelector('ct-rest-status');

            if (node) {
              node.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            }
          }
        }]);

        return ViewSourceCodeComponent;
      }();

      ViewSourceCodeComponent.ɵfac = function ViewSourceCodeComponent_Factory(t) {
        return new (t || ViewSourceCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ViewSourceCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewSourceCodeComponent,
        selectors: [["view-source-code"]],
        decls: 1,
        vars: 1,
        consts: [["align-items", "flex-start", 4, "ngIf"], ["align-items", "flex-start"], ["size", "6"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "click"], [1, "uploadRestStatus", 3, "content"]],
        template: function ViewSourceCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewSourceCodeComponent_ct_cols_0_Template, 55, 3, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sourceCodeResponse);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_4__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_5__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_9__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyRowComponent"], _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionContentComponent"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_13__["CtPreComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_16__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_19__["CtRestStatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXNvdXJjZS1jb2RlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "2WMi": function WMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodeType", function () {
        return SourceCodeType;
      });

      var SourceCodeType;

      (function (SourceCodeType) {
        SourceCodeType["not_exist"] = "not_exist";
        SourceCodeType["common"] = "common";
        SourceCodeType["experiment"] = "experiment";
        SourceCodeType["batch"] = "batch";
      })(SourceCodeType || (SourceCodeType = {}));
      /***/

    },

    /***/
    "5Exn": function Exn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateOfTasksComponent", function () {
        return StateOfTasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _src_app_enums_TaskExecState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/enums/TaskExecState */
      "XUpR");
      /* harmony import */


      var _src_app_services_exec_context_exec_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/exec-context/exec-context.service */
      "ZYYS");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-pre/ct-pre.component */
      "IRPT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["errorDialogTemplate"];

      function StateOfTasksComponent_div_0_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var elem_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r9.process);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r9.functionCode);
        }
      }

      function StateOfTasksComponent_div_0_tr_48_td_5_div_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function StateOfTasksComponent_div_0_tr_48_td_5_div_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          cell: a0
        };
      };

      function StateOfTasksComponent_div_0_tr_48_td_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StateOfTasksComponent_div_0_tr_48_td_5_div_2_ng_container_8_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StateOfTasksComponent_div_0_tr_48_td_5_div_2_ng_container_10_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r12.taskId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r12.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, cell_r12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, cell_r12));
        }
      }

      function StateOfTasksComponent_div_0_tr_48_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StateOfTasksComponent_div_0_tr_48_td_5_div_2_Template, 12, 10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !cell_r12.empty);
        }
      }

      function StateOfTasksComponent_div_0_tr_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StateOfTasksComponent_div_0_tr_48_td_5_Template, 4, 1, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r10.cells);
        }
      }

      function StateOfTasksComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Is valid:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, StateOfTasksComponent_div_0_td_42_Template, 8, 2, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StateOfTasksComponent_div_0_tr_48_Template, 7, 2, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.response.sourceCodeUid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.response.sourceCodeValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.response.sourceCodeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.response.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.response.lines);
        }
      }

      function StateOfTasksComponent_ng_template_2_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateOfTasksComponent_ng_template_2_ng_container_1_ng_container_2_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var out_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r21.downloadFile(out_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var out_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", out_r20.id, ", ", out_r20.nm, "");
        }
      }

      function StateOfTasksComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StateOfTasksComponent_ng_template_2_ng_container_1_ng_container_2_Template, 8, 2, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().cell;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cell_r17.outs);
        }
      }

      function StateOfTasksComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateOfTasksComponent_ng_template_2_ng_container_1_Template, 4, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
        }

        if (rf & 2) {
          var cell_r17 = ctx.cell;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r17.state === ctx_r2.TaskExecState.OK);
        }
      }

      function StateOfTasksComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateOfTasksComponent_ng_template_5_ng_container_1_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var cell_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().cell;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.openError(cell_r24.taskId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task exec info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function StateOfTasksComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateOfTasksComponent_ng_template_5_ng_container_1_Template, 5, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
        }

        if (rf & 2) {
          var cell_r24 = ctx.cell;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r24.state === ctx_r4.TaskExecState.ERROR);
        }
      }

      function StateOfTasksComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Task Exec Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ct-pre", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-dialog-actions", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" taskId: ", ctx_r29.taskExecInfo.taskId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" execState: ", ctx_r29.taskExecInfo.execState, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx_r29.taskExecInfo.console, "\n            ");
        }
      }

      function StateOfTasksComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateOfTasksComponent_ng_template_8_ng_container_1_Template, 26, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.taskExecInfo);
        }
      }

      var StateOfTasksComponent = /*#__PURE__*/function () {
        function StateOfTasksComponent(execContextService, dialog) {
          _classCallCheck(this, StateOfTasksComponent);

          this.execContextService = execContextService;
          this.dialog = dialog;
          this.TaskExecState = _src_app_enums_TaskExecState__WEBPACK_IMPORTED_MODULE_2__["TaskExecState"];
        }

        _createClass(StateOfTasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (this.sourceCodeId && this.execContextId) {
              this.execContextService.execContextsState(this.sourceCodeId, this.execContextId).subscribe(function (response) {
                _this3.response = response;
              });
            }
          }
        }, {
          key: "openError",
          value: function openError(taskId) {
            var _this4 = this;

            this.taskExecInfo = null;
            this.dialog.open(this.errorDialogTemplate, {
              width: '90%'
            });
            this.execContextService.taskExecInfo(this.sourceCodeId, this.execContextId, taskId).subscribe(function (taskExecInfo) {
              _this4.taskExecInfo = taskExecInfo;
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(out) {
            this.execContextService.downloadVariable(this.execContextId, out.id.toString()).subscribe(function (response) {
              file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](response.body, response.headers.get('Content-Disposition').split('\'\'')[1]);
            });
          }
        }]);

        return StateOfTasksComponent;
      }();

      StateOfTasksComponent.ɵfac = function StateOfTasksComponent_Factory(t) {
        return new (t || StateOfTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_exec_context_exec_context_service__WEBPACK_IMPORTED_MODULE_3__["ExecContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      StateOfTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StateOfTasksComponent,
        selectors: [["state-of-tasks"]],
        viewQuery: function StateOfTasksComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorDialogTemplate = _t.first);
          }
        },
        inputs: {
          sourceCodeId: "sourceCodeId",
          execContextId: "execContextId"
        },
        decls: 10,
        vars: 1,
        consts: [[4, "ngIf"], ["stateOkTemplate", ""], ["stateErrorTemplate", ""], ["errorDialogTemplate", ""], [1, "info-table"], [1, "state-table"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "link", 3, "click"], [2, "font-size", "80%"], ["align", "end"], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", ""]],
        template: function StateOfTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StateOfTasksComponent_div_0_Template, 52, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StateOfTasksComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StateOfTasksComponent_ng_template_5_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StateOfTasksComponent_ng_template_8_Template, 3, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.response);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_6__["CtPreComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["[_nghost-%COMP%] {\n  font-family: \"Roboto Mono\", \"Courier New\", Courier, monospace;\n}\n\n.info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 18px;\n  line-height: 1.2;\n  vertical-align: baseline;\n}\n\n.state-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\n.state-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.05);\n  vertical-align: baseline;\n  white-space: nowrap;\n  padding: 6.75px 9px;\n  font-size: 80%;\n  line-height: 1.2;\n}\n\n.state-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.66);\n}\n\n.state-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.33);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RhdGUtb2YtdGFza3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNkRDRW9CO0FESHhCOztBQUtJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBRlI7O0FBTUE7RUFFSSx5QkFBQTtBQUpKOztBQU1JO0VBQ0ksMkNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFPUTtFQUNBLGtEQUFBO0FBTFI7O0FBU1E7RUFDQSxrREFBQTtBQVBSIiwiZmlsZSI6InN0YXRlLW9mLXRhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc291cmNlLWNvZGVzLnNhc3MnO1xyXG5cclxuOmhvc3R7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1vbm9zcGFjZVxyXG59XHJcblxyXG4uaW5mby10YWJsZSB7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogdW5pdCgyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXRlLXRhYmxlIHtcclxuXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwxMjgsMTI4LDAuMDUpO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcclxuICAgICAgICBwYWRkaW5nOiB1bml0KDAuNzUpIHVuaXQoMSk7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0ZHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsMTI4LDEyOCwwLjY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LDEyOCwxMjgsMC4zMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBmdW5jdGlvbiB1bml0KCRhKSB7XHJcbiAgICBAcmV0dXJuICRhICogOXB4XHJcbn1cclxuXHJcblxyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcblxyXG4kY29sb3ItdGFibGUtcm93LXNlbGVjdGVkOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjE4KTtcclxuXHJcbiRjb2xvci1saW5rOiAjNDJhOGZmO1xyXG4kY29sb3ItbGluay1ob3Zlcjogb3JhbmdlOyJdfQ== */"]
      });
      /***/
    },

    /***/
    "JYqR": function JYqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodesArchiveComponent", function () {
        return SourceCodesArchiveComponent;
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


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
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


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

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

      function SourceCodesArchiveComponent_ct_section_0_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r15.id, " ");
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "UID of sourceCode");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r16.uid, " ");
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Created on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, el_r17.createdOn, "MMM d, yyyy, HH:mm:ss"), "\n                        ");
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Is valid? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r18.valid, " ");
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_th_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Is locked? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_td_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r19.locked, " ");
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_th_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_td_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ct-flex", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SourceCodesArchiveComponent_ct_section_0_td_58_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);

            var el_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r21["delete"](el_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_tr_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_tr_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 19);
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted-table-row", ctx_r14.deletedRows.includes(row_r23));
        }
      }

      function SourceCodesArchiveComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Source Codes");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ct-table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SourceCodesArchiveComponent_ct_section_0_th_21_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SourceCodesArchiveComponent_ct_section_0_td_23_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SourceCodesArchiveComponent_ct_section_0_th_28_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SourceCodesArchiveComponent_ct_section_0_td_30_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](33, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, SourceCodesArchiveComponent_ct_section_0_th_35_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SourceCodesArchiveComponent_ct_section_0_td_37_Template, 3, 4, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](40, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, SourceCodesArchiveComponent_ct_section_0_th_42_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, SourceCodesArchiveComponent_ct_section_0_td_44_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](47, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, SourceCodesArchiveComponent_ct_section_0_th_49_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, SourceCodesArchiveComponent_ct_section_0_td_51_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](54, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, SourceCodesArchiveComponent_ct_section_0_th_56_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, SourceCodesArchiveComponent_ct_section_0_td_58_Template, 14, 0, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, SourceCodesArchiveComponent_ct_section_0_tr_61_Template, 2, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, SourceCodesArchiveComponent_ct_section_0_tr_63_Template, 1, 2, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "ct-table-pagination", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("next", function SourceCodesArchiveComponent_ct_section_0_Template_ct_table_pagination_next_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r24.nextPage();
          })("prev", function SourceCodesArchiveComponent_ct_section_0_Template_ct_table_pagination_prev_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r26.prevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageableDefault", ctx_r0.sourceCodesResult == null ? null : ctx_r0.sourceCodesResult.items)("globalDisable", ctx_r0.isLoading);
        }
      }

      var SourceCodesArchiveComponent = /*#__PURE__*/function (_src_app_models_UISta) {
        _inherits(SourceCodesArchiveComponent, _src_app_models_UISta);

        var _super = _createSuper(SourceCodesArchiveComponent);

        function SourceCodesArchiveComponent(dialog, sourceCodesService, authenticationService) {
          var _this5;

          _classCallCheck(this, SourceCodesArchiveComponent);

          _this5 = _super.call(this, authenticationService);
          _this5.dialog = dialog;
          _this5.sourceCodesService = sourceCodesService;
          _this5.authenticationService = authenticationService;
          _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
          _this5.columnsToDisplay = ['id', 'uid', 'createdOn', 'valid', 'locked', 'bts'];
          _this5.deletedRows = [];
          return _this5;
        }

        _createClass(SourceCodesArchiveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateTable(0);
          }
        }, {
          key: "updateTable",
          value: function updateTable(page) {
            var _this6 = this;

            this.setIsLoadingStart();
            this.sourceCodesService.sourceCodeArchivedOnly(page.toString()).subscribe({
              next: function next(sourceCodesResult) {
                _this6.sourceCodesResult = sourceCodesResult;
                _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](sourceCodesResult.items.content || []);
              },
              complete: function complete() {
                _this6.setIsLoadingEnd();
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(sourceCode) {
            this.deletedRows.push(sourceCode);
            this.sourceCodesService.deleteCommit(sourceCode.id.toString()).subscribe();
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable(this.sourceCodesResult.items.number + 1);
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable(this.sourceCodesResult.items.number - 1);
          }
        }]);

        return SourceCodesArchiveComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_3__["UIStateComponent"]);

      SourceCodesArchiveComponent.ɵfac = function SourceCodesArchiveComponent_Factory(t) {
        return new (t || SourceCodesArchiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_5__["SourceCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      SourceCodesArchiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: SourceCodesArchiveComponent,
        selectors: [["source-codes-archive"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "isWaiting"], ["mat-table", "mat-table", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "mat-header-cell", 4, "matHeaderCellDef"], ["mat-cell", "mat-cell", 4, "matCellDef"], ["matColumnDef", "uid"], ["matColumnDef", "createdOn"], ["matColumnDef", "valid"], ["matColumnDef", "locked"], ["matColumnDef", "bts"], ["mat-header-row", "mat-header-row", 4, "matHeaderRowDef"], ["mat-row", "mat-row", 3, "deleted-table-row", 4, "matRowDef", "matRowDefColumns"], [3, "pageableDefault", "globalDisable", "next", "prev"], ["mat-header-cell", "mat-header-cell"], ["mat-cell", "mat-cell"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "mat-flat-button", "color", "warn", "size", "forTableRow", "title", "Delete", 3, "click"], ["mat-header-row", "mat-header-row"], ["mat-row", "mat-row"]],
        template: function SourceCodesArchiveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SourceCodesArchiveComponent_ct_section_0_Template, 77, 6, "ct-section", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sourceCodesResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_11__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_14__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_17__["CtTablePaginationComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_19__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3VyY2UtY29kZXMtYXJjaGl2ZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      __decorate([Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogMethod"])({
        question: function question(sourceCode) {
          return "Do you want to delete SourceCode #".concat(sourceCode.id);
        },
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], SourceCodesArchiveComponent.prototype, "delete", null);
      /***/

    },

    /***/
    "May9": function May9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecContextStatesComponent", function () {
        return ExecContextStatesComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _state_of_tasks_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../state-of-tasks/state-of-tasks.component */
      "5Exn");

      var ExecContextStatesComponent = /*#__PURE__*/function () {
        function ExecContextStatesComponent(route) {
          _classCallCheck(this, ExecContextStatesComponent);

          this.route = route;
          this.sourceCodeId = this.route.snapshot.paramMap.get('sourceCodeId');
          this.execContextId = this.route.snapshot.paramMap.get('execContextId');
        }

        _createClass(ExecContextStatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExecContextStatesComponent;
      }();

      ExecContextStatesComponent.ɵfac = function ExecContextStatesComponent_Factory(t) {
        return new (t || ExecContextStatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      ExecContextStatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ExecContextStatesComponent,
        selectors: [["exec-context-states"]],
        decls: 19,
        vars: 2,
        consts: [[3, "sourceCodeId", "execContextId"]],
        template: function ExecContextStatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "State of Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "state-of-tasks", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sourceCodeId", ctx.sourceCodeId)("execContextId", ctx.execContextId);
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_2__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_3__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_5__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionBodyRowComponent"], _state_of_tasks_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_8__["StateOfTasksComponent"]],
        styles: [".info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 18px;\n}\n\n.state-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\n.state-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  white-space: nowrap;\n  padding: 6.75px 9px;\n  font-size: 80%;\n  line-height: 1.2;\n}\n\n.state-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.66);\n}\n\n.state-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.33);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhlYy1jb250ZXh0LXN0YXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLG1CQUFBO0FBRlI7O0FBTUE7RUFFSSx5QkFBQTtBQUpKOztBQU1JO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSlI7O0FBT1E7RUFDSSxrREFBQTtBQUxaOztBQVNRO0VBQ0ksa0RBQUE7QUFQWiIsImZpbGUiOiJleGVjLWNvbnRleHQtc3RhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc291cmNlLWNvZGVzLnNhc3MnO1xyXG5cclxuLmluZm8tdGFibGUge1xyXG4gICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuaXQoMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGF0ZS10YWJsZSB7XHJcblxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IHVuaXQoMC43NSkgdW5pdCgxKTtcclxuICAgICAgICBmb250LXNpemU6IDgwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgfVxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsMTI4LDEyOCwwLjY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwxMjgsMTI4LDAuMzMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Rw8z": function Rw8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodesService", function () {
        return SourceCodesService;
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


      var _src_app_enums_SourceCodeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/enums/SourceCodeType */
      "2WMi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var url = function url(s) {
        return "".concat(_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "dispatcher/source-code/").concat(s);
      };

      var SourceCodesService = /*#__PURE__*/function () {
        function SourceCodesService(http) {
          _classCallCheck(this, SourceCodesService);

          this.http = http;
        }

        _createClass(SourceCodesService, [{
          key: "sourceCodes",
          value: function sourceCodes(page) {
            return this.http.get(url('source-codes'), {
              params: {
                page: page
              }
            });
          }
        }, {
          key: "sourceCodeArchivedOnly",
          value: function sourceCodeArchivedOnly(page) {
            return this.http.get(url('source-codes-archived-only'), {
              params: {
                page: page
              }
            });
          }
        }, {
          key: "edit",
          value: function edit(id) {
            return this.http.get(url("source-code/".concat(id)));
          }
        }, {
          key: "validate",
          value: function validate(id) {
            return this.http.get(url("source-code-validate/".concat(id)));
          }
        }, {
          key: "addFormCommit",
          value: function addFormCommit(source) {
            return this.http.post(url("source-code-add-commit"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              source: source
            }));
          }
        }, {
          key: "editFormCommit",
          value: function editFormCommit(sourceCodeId, source) {
            return this.http.post(url("source-code-edit-commit"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              sourceCodeId: sourceCodeId,
              source: source
            }));
          }
        }, {
          key: "deleteCommit",
          value: function deleteCommit(id) {
            return this.http.post(url("source-code-delete-commit"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              id: id
            }));
          }
        }, {
          key: "archiveCommit",
          value: function archiveCommit(id) {
            return this.http.post(url("source-code-archive-commit"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              id: id
            }));
          }
        }, {
          key: "uploadSourceCode",
          value: function uploadSourceCode(file) {
            return this.http.post(url("source-code-upload-from-file"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              file: file
            }));
          } //
          //
          //

        }, {
          key: "getSourceCodeType",
          value: function getSourceCodeType(uid, result) {
            var type = _src_app_enums_SourceCodeType__WEBPACK_IMPORTED_MODULE_3__["SourceCodeType"].common;

            if (result.batches.includes(uid)) {
              type = _src_app_enums_SourceCodeType__WEBPACK_IMPORTED_MODULE_3__["SourceCodeType"].batch;
            }

            if (result.experiments.includes(uid)) {
              type = _src_app_enums_SourceCodeType__WEBPACK_IMPORTED_MODULE_3__["SourceCodeType"].experiment;
            }

            return type;
          }
        }]);

        return SourceCodesService;
      }();

      SourceCodesService.ɵfac = function SourceCodesService_Factory(t) {
        return new (t || SourceCodesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      SourceCodesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: SourceCodesService,
        factory: SourceCodesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "XUpR": function XUpR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskExecState", function () {
        return TaskExecState;
      }); // public enum TaskExecState { 
      //     NONE(0), 
      //     IN_PROGRESS(1), 
      //     ERROR(2), 
      //     OK(3), 
      //     NOT_USED_ANYMORE(4), 
      //     SKIPPED(5), 
      //     CHECK_CACHE(6);


      var TaskExecState;

      (function (TaskExecState) {
        TaskExecState["NONE"] = "NONE";
        TaskExecState["IN_PROGRESS"] = "IN_PROGRESS";
        TaskExecState["ERROR"] = "ERROR";
        TaskExecState["OK"] = "OK";
        TaskExecState["NOT_USED_ANYMORE"] = "NOT_USED_ANYMORE";
        TaskExecState["SKIPPED"] = "SKIPPED";
        TaskExecState["CHECK_CACHE"] = "CHECK_CACHE";
      })(TaskExecState || (TaskExecState = {}));
      /***/

    },

    /***/
    "YFYk": function YFYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFormAddSourceCodeComponent", function () {
        return CardFormAddSourceCodeComponent;
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


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
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


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "ihCf");
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

      var CardFormAddSourceCodeComponent = /*#__PURE__*/function () {
        function CardFormAddSourceCodeComponent(sourceCodesService) {
          _classCallCheck(this, CardFormAddSourceCodeComponent);

          this.sourceCodesService = sourceCodesService;
          this.responseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.abort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            source: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])
          });
        }

        _createClass(CardFormAddSourceCodeComponent, [{
          key: "cancel",
          value: function cancel() {
            this.abort.emit();
          }
        }, {
          key: "create",
          value: function create() {
            var _this7 = this;

            this.button.disabled = true;
            this.sourceCodesService.addFormCommit(this.form.value.source).subscribe(function (sourceCodeResult) {
              _this7.button.disabled = false;

              _this7.responseChange.emit(sourceCodeResult);
            });
          }
        }]);

        return CardFormAddSourceCodeComponent;
      }();

      CardFormAddSourceCodeComponent.ɵfac = function CardFormAddSourceCodeComponent_Factory(t) {
        return new (t || CardFormAddSourceCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodesService"]));
      };

      CardFormAddSourceCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardFormAddSourceCodeComponent,
        selectors: [["card-form-add-source-code"]],
        viewQuery: function CardFormAddSourceCodeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
          }
        },
        outputs: {
          responseChange: "responseChange",
          abort: "abort"
        },
        decls: 53,
        vars: 2,
        consts: [["novalidate", "novalidate", 3, "formGroup"], ["appearance", "outline", 2, "width", "100%"], ["formControlName", "source", "matInput", "matInput", "cdkTextareaAutosize", "cdkTextareaAutosize", "cdkAutosizeMinRows", "10", "value", "", "autocomplete", "off"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], ["button", ""]],
        template: function CardFormAddSourceCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add New Source Code");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Parameters of source code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ct-flex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormAddSourceCodeComponent_Template_button_click_39_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormAddSourceCodeComponent_Template_button_click_45_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_15__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_16__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  overflow: hidden !important;\n  font-size: 80%;\n  font-family: \"Courier New\", Courier, monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC1mb3JtLWFkZC1zb3VyY2UtY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7QUFESiIsImZpbGUiOiJjYXJkLWZvcm0tYWRkLXNvdXJjZS1jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50IDtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "fsm9": function fsm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSourceCodeComponent", function () {
        return AddSourceCodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
      /* harmony import */


      var _card_form_add_source_code_card_form_add_source_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../card-form-add-source-code/card-form-add-source-code.component */
      "YFYk");
      /* harmony import */


      var _card_form_upload_source_code_card_form_upload_source_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../card-form-upload-source-code/card-form-upload-source-code.component */
      "qtmV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      var AddSourceCodeComponent = /*#__PURE__*/function () {
        function AddSourceCodeComponent(router, activatedRoute, elRef) {
          _classCallCheck(this, AddSourceCodeComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.elRef = elRef;
        }

        _createClass(AddSourceCodeComponent, [{
          key: "afterNewSourceCode",
          value: function afterNewSourceCode(response) {
            this.newSourceCodeResponse = response;

            if (response.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].OK) {
              this.back();
            } else {
              this.scrollIntoView('.addRestStatus');
            }
          }
        }, {
          key: "afterUploadSourceCode",
          value: function afterUploadSourceCode(response) {
            this.uploadSourceCodeResponse = response;

            if (response.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].OK) {
              this.back();
            } else {
              this.scrollIntoView('.uploadRestStatus');
            }
          }
        }, {
          key: "scrollIntoView",
          value: function scrollIntoView(selector) {
            var node = this.elRef.nativeElement.querySelector(selector);

            if (node) {
              node.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../'], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return AddSourceCodeComponent;
      }();

      AddSourceCodeComponent.ɵfac = function AddSourceCodeComponent_Factory(t) {
        return new (t || AddSourceCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      AddSourceCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddSourceCodeComponent,
        selectors: [["add-source-code"]],
        viewQuery: function AddSourceCodeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_card_form_add_source_code_card_form_add_source_code_component__WEBPACK_IMPORTED_MODULE_2__["CardFormAddSourceCodeComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_card_form_upload_source_code_card_form_upload_source_code_component__WEBPACK_IMPORTED_MODULE_3__["CardFormUploadSourceCodeComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardFormAddSourceCode = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardFormUploadSourceCode = _t.first);
          }
        },
        decls: 29,
        vars: 2,
        consts: [["size", "6"], [3, "abort", "responseChange"], [1, "addRestStatus", 3, "content"], [1, "uploadRestStatus", 3, "content"]],
        template: function AddSourceCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-cols");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-form-add-source-code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("abort", function AddSourceCodeComponent_Template_card_form_add_source_code_abort_4_listener() {
              return ctx.back();
            })("responseChange", function AddSourceCodeComponent_Template_card_form_add_source_code_responseChange_4_listener($event) {
              return ctx.afterNewSourceCode($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ct-rest-status", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ct-cols");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "card-form-upload-source-code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("abort", function AddSourceCodeComponent_Template_card_form_upload_source_code_abort_20_listener() {
              return ctx.back();
            })("responseChange", function AddSourceCodeComponent_Template_card_form_upload_source_code_responseChange_20_listener($event) {
              return ctx.afterUploadSourceCode($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ct-rest-status", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.newSourceCodeResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.uploadSourceCodeResponse);
          }
        },
        directives: [_ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _card_form_add_source_code_card_form_add_source_code_component__WEBPACK_IMPORTED_MODULE_2__["CardFormAddSourceCodeComponent"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_7__["CtRestStatusComponent"], _card_form_upload_source_code_card_form_upload_source_code_component__WEBPACK_IMPORTED_MODULE_3__["CardFormUploadSourceCodeComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc291cmNlLWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "gsJw": function gsJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddExecContextComponent", function () {
        return AddExecContextComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_enums_LoadStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/enums/LoadStates */
      "u8e3");
      /* harmony import */


      var _app_helpers_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/helpers/state */
      "yGeL");
      /* harmony import */


      var _src_app_services_exec_context_exec_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/exec-context/exec-context.service */
      "ZYYS");
      /* harmony import */


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
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


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-section-content/ct-section-content.component */
      "eWij");

      function AddExecContextComponent_ng_template_0_ct_section_54_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var info_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](info_r4);
        }
      }

      function AddExecContextComponent_ng_template_0_ct_section_54_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](error_r6);
        }
      }

      function AddExecContextComponent_ng_template_0_ct_section_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ct-section-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddExecContextComponent_ng_template_0_ct_section_54_p_8_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddExecContextComponent_ng_template_0_ct_section_54_p_10_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.responseSingle.infoMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.responseSingle.errorMessages);
        }
      }

      function AddExecContextComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ct-cols", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "New execContext with Single Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddExecContextComponent_ng_template_0_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r8.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddExecContextComponent_ng_template_0_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.createWithVariable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, AddExecContextComponent_ng_template_0_ct_section_54_Template, 15, 2, "ct-section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "\n");
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Source Code: #", ctx_r0.sourceCodeResponse.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.sourceCodeResponse.uid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.currentStates.has(ctx_r0.states.loading));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.responseSingle);
        }
      }

      var AddExecContextComponent = /*#__PURE__*/function () {
        function AddExecContextComponent(activatedRoute, router, sourceCodesService, execContextService) {
          _classCallCheck(this, AddExecContextComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.sourceCodesService = sourceCodesService;
          this.execContextService = execContextService;
          this.states = _app_enums_LoadStates__WEBPACK_IMPORTED_MODULE_1__["LoadStates"];
          this.currentStates = new Set();
          this.state = _app_helpers_state__WEBPACK_IMPORTED_MODULE_2__["state"];
          this.currentState = _app_helpers_state__WEBPACK_IMPORTED_MODULE_2__["state"].show;
        }

        _createClass(AddExecContextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.sourceCodeId = this.activatedRoute.snapshot.paramMap.get('sourceCodeId');
            this.sourceCodesService.edit(this.sourceCodeId).subscribe(function (sourceCodeResult) {
              _this8.sourceCodeResponse = sourceCodeResult;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['../../', 'exec-contexts'], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "createWithVariable",
          value: function createWithVariable() {
            var _this9 = this;

            this.currentStates.add(this.states.loading);
            this.execContextService.execContextAddCommit(this.sourceCodeId, this.variable).subscribe(function (response) {
              if (response.errorMessages) {
                _this9.responseSingle = response;
              } else {
                _this9.cancel();
              }

              _this9.currentStates["delete"](_this9.states.loading);
            });
          }
        }]);

        return AddExecContextComponent;
      }();

      AddExecContextComponent.ɵfac = function AddExecContextComponent_Factory(t) {
        return new (t || AddExecContextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_4__["SourceCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_src_app_services_exec_context_exec_context_service__WEBPACK_IMPORTED_MODULE_3__["ExecContextService"]));
      };

      AddExecContextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: AddExecContextComponent,
        selectors: [["add-exec-context"]],
        decls: 1,
        vars: 1,
        consts: [[3, "ngIf"], ["align-items", "flex-start"], ["size", "6"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
        template: function AddExecContextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddExecContextComponent_ng_template_0_Template, 58, 4, "ng-template", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sourceCodeResponse);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_7__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_8__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionBodyRowComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _ct_ct_section_content_ct_section_content_component__WEBPACK_IMPORTED_MODULE_20__["CtSectionContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  overflow: hidden !important;\n}\n\npre[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  opacity: 0.66;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWV4ZWMtY29udGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUZEIiwiZmlsZSI6ImFkZC1leGVjLWNvbnRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50IDtcclxufVxyXG5cclxucHJle1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDtcclxuXHRvcGFjaXR5OiAwLjY2O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "kCBj": function kCBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecContextsComponent", function () {
        return ExecContextsComponent;
      });
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/components/app-dialog-confirmation/app-dialog-confirmation.component */
      "lJGJ");
      /* harmony import */


      var _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/enums/ExecContextState */
      "iA33");
      /* harmony import */


      var _src_app_services_exec_context_exec_context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/services/exec-context/exec-context.service */
      "ZYYS");
      /* harmony import */


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");

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

      var _c0 = ["nextTable"];
      var _c1 = ["prevTable"];

      function ExecContextsComponent_ct_section_header_row_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "UID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Is valid:");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.response.sourceCodeUid);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.response.sourceCodeValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.response.sourceCodeType);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](el_r18.id);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Created On");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, el_r19.createdOn, "MMM d, yyyy HH:mm:ss"), "\n                        ");
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Is execContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](el_r20.valid);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "ExecState");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r21 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r11.execState[el_r21.execState]);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Completed on");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_38_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, el_r22.completedOn, "MMM d, yyyy HH:mm:ss"), "\n                            ");
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ExecContextsComponent_ct_section_body_row_15_td_38_span_2_Template, 3, 4, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", el_r22.completedOn !== null);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 18);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_4_Template_button_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);

            var el_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r29.produce(el_r25, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Produce");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_6_Template_button_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);

            var el_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r32.start(el_r25, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_8_Template_button_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);

            var el_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r35.stop(el_r25, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a2, a4) {
        return ["/dispatcher", "source-codes", a2, "exec-context", a4, "state"];
      };

      function ExecContextsComponent_ct_section_body_row_15_td_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ct-flex", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_4_Template, 5, 0, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_6_Template, 5, 0, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ExecContextsComponent_ct_section_body_row_15_td_45_ct_flex_item_8_Template, 5, 0, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Task\n                                        States\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExecContextsComponent_ct_section_body_row_15_td_45_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);

            var el_r25 = ctx.$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r38["delete"](el_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r25 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", el_r25.execState == ctx_r15.execState.NONE && el_r25.valid && ctx_r15.response.sourceCodeValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", el_r25.execState == ctx_r15.execState.PRODUCED || el_r25.execState == ctx_r15.execState.STOPPED);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", el_r25.execState == ctx_r15.execState.STARTED);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](5, _c2, ctx_r15.sourceCodeId, el_r25.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", el_r25.__deleted);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_tr_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 24);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_tr_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 25);
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-row--deleted", row_r40.__deleted);
        }
      }

      function ExecContextsComponent_ct_section_body_row_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ct-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](6, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ExecContextsComponent_ct_section_body_row_15_th_8_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ExecContextsComponent_ct_section_body_row_15_td_10_Template, 2, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ExecContextsComponent_ct_section_body_row_15_th_15_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ExecContextsComponent_ct_section_body_row_15_td_17_Template, 3, 4, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](20, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, ExecContextsComponent_ct_section_body_row_15_th_22_Template, 4, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, ExecContextsComponent_ct_section_body_row_15_td_24_Template, 2, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](27, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ExecContextsComponent_ct_section_body_row_15_th_29_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, ExecContextsComponent_ct_section_body_row_15_td_31_Template, 2, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](34, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, ExecContextsComponent_ct_section_body_row_15_th_36_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, ExecContextsComponent_ct_section_body_row_15_td_38_Template, 4, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](41, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, ExecContextsComponent_ct_section_body_row_15_th_43_Template, 1, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ExecContextsComponent_ct_section_body_row_15_td_45_Template, 26, 8, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ExecContextsComponent_ct_section_body_row_15_tr_48_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, ExecContextsComponent_ct_section_body_row_15_tr_50_Template, 1, 2, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r1.execContextTableSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.execContextColumnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.execContextColumnsToDisplay);
        }
      }

      var _c3 = function _c3(a2) {
        return ["/dispatcher", "source-codes", a2, "exec-context", "add"];
      };

      var ExecContextsComponent = /*#__PURE__*/function () {
        function ExecContextsComponent(route, dialog, execContextService, sourceCodesService) {
          _classCallCheck(this, ExecContextsComponent);

          this.route = route;
          this.dialog = dialog;
          this.execContextService = execContextService;
          this.sourceCodesService = sourceCodesService;
          this.execState = _src_app_enums_ExecContextState__WEBPACK_IMPORTED_MODULE_5__["ExecContextState"];
          this.execContextTableSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
          this.execContextColumnsToDisplay = ['id', 'createdOn', 'isExecContextValid', 'execState', 'completedOn', 'bts'];
        }

        _createClass(ExecContextsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sourceCodeId = this.route.snapshot.paramMap.get('sourceCodeId');
            this.getExecContexts(0);
          }
        }, {
          key: "getExecContexts",
          value: function getExecContexts(page) {
            var _this10 = this;

            this.execContextService.execContexts(this.sourceCodeId, page.toString()).subscribe(function (execContextsResult) {
              _this10.response = execContextsResult;

              if (execContextsResult) {
                _this10.execContextTableSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](execContextsResult.instances.content);
                _this10.prevTable.disabled = execContextsResult.instances.first;
                _this10.nextTable.disabled = execContextsResult.instances.last;
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(execContext) {
            var _this11 = this;

            var _a, _b;

            this.execContextService.execContextDeleteCommit(this.sourceCodeId, (_b = (_a = execContext.id) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a)).subscribe(function (v) {
              return _this11.getExecContexts(_this11.response.instances.number);
            });
          }
        }, {
          key: "next",
          value: function next() {
            this.getExecContexts(this.response.instances.number + 1);
          }
        }, {
          key: "prev",
          value: function prev() {
            this.getExecContexts(this.response.instances.number - 1);
          }
        }, {
          key: "runExecState",
          value: function runExecState(id, state) {
            var _this12 = this;

            this.execContextService.execContextTargetState(this.sourceCodeId, state, id).subscribe(function (v) {
              return _this12.getExecContexts(_this12.response.instances.number);
            });
          }
        }, {
          key: "stop",
          value: function stop(el, event) {
            event.target.disabled = true;
            this.runExecState(el.id, 'STOPPED');
          }
        }, {
          key: "start",
          value: function start(el, event) {
            event.target.disabled = true;
            this.runExecState(el.id, 'STARTED');
          }
        }, {
          key: "produce",
          value: function produce(el, event) {
            event.target.disabled = true;
            this.runExecState(el.id, 'PRODUCING');
          }
        }]);

        return ExecContextsComponent;
      }();

      ExecContextsComponent.ɵfac = function ExecContextsComponent_Factory(t) {
        return new (t || ExecContextsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_src_app_services_exec_context_exec_context_service__WEBPACK_IMPORTED_MODULE_6__["ExecContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_7__["SourceCodesService"]));
      };

      ExecContextsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: ExecContextsComponent,
        selectors: [["exec-contexts"]],
        viewQuery: function ExecContextsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.nextTable = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.prevTable = _t.first);
          }
        },
        decls: 59,
        vars: 7,
        consts: [[4, "ngIf"], ["justify-content", "space-between"], ["justify-content", "flex-start", "gap", "8px"], ["mat-flat-button", "mat-flat-button", "disabled", "disabled", 3, "click"], ["prevTable", ""], ["nextTable", ""], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "routerLink"], ["mat-table", "mat-table", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "mat-header-cell", 4, "matHeaderCellDef"], ["mat-cell", "mat-cell", 4, "matCellDef"], ["matColumnDef", "createdOn"], ["matColumnDef", "isExecContextValid"], ["matColumnDef", "execState"], ["matColumnDef", "completedOn"], ["matColumnDef", "bts"], ["mat-header-row", "mat-header-row", 4, "matHeaderRowDef"], ["mat-row", "mat-row", 3, "mat-row--deleted", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "mat-header-cell"], ["mat-cell", "mat-cell"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "mat-flat-button", "color", "primary", "size", "forTableRow", 3, "routerLink"], ["mat-flat-button", "mat-flat-button", "color", "warn", "size", "forTableRow", 3, "disabled", "click"], ["mat-flat-button", "mat-flat-button", "size", "forTableRow", "color", "primary", 3, "click"], ["mat-header-row", "mat-header-row"], ["mat-row", "mat-row"]],
        template: function ExecContextsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ExecContextsComponent_ct_section_header_row_10_Template, 32, 3, "ct-section-header-row", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ExecContextsComponent_ct_section_body_row_15_Template, 54, 3, "ct-section-body-row", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ct-flex", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ct-flex", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExecContextsComponent_Template_button_click_30_listener() {
              return ctx.prev();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "\n                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "arrow_back_ios");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "button", 3, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExecContextsComponent_Template_button_click_40_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "\n                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "arrow_forward_ios");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Add Exec\n                        Context");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Exec Contexts in Source Code #", ctx.sourceCodeId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.response);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.response);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.response)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, ctx.sourceCodeId));
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__["CtHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionBodyComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_20__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_21__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [".mat-row--deleted[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n  opacity: 0.33;\n  pointer-events: none;\n}\n\nct-section-header[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhlYy1jb250ZXh0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtBQUFKIiwiZmlsZSI6ImV4ZWMtY29udGV4dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdy0tZGVsZXRlZCB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDAuMzM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuXHJcbmN0LXNlY3Rpb24taGVhZGVyIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufSJdfQ== */"]
      });

      __decorate([Object(_src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogMethod"])({
        question: function question(execContext) {
          return "Do you want to delete ExecContext\xA0#".concat(execContext.id);
        },
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], ExecContextsComponent.prototype, "delete", null);
      /***/

    },

    /***/
    "nilI": function nilI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodesComponent", function () {
        return SourceCodesComponent;
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


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/components/app-dialog-confirmation/app-dialog-confirmation.component */
      "lJGJ");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/services/dispatcher-asset-mode/dispatcher-asset-mode.service */
      "J0F4");
      /* harmony import */


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _source_codes_archive_source_codes_archive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../source-codes-archive/source-codes-archive.component */
      "JYqR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
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


      var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../ct/ct-table-pagination/ct-table-pagination.component */
      "W7k4");
      /* harmony import */


      var _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../ct/ct-alert/ct-alert.component */
      "xAq4");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

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

      var _c0 = ["matTabGroup"];
      var _c1 = ["sourceCodesArchive"];

      function SourceCodesComponent_ct_section_6_ct_flex_item_17_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
        }
      }

      function SourceCodesComponent_ct_section_6_ct_flex_item_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SourceCodesComponent_ct_section_6_ct_flex_item_17_ng_container_2_Template, 1, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function SourceCodesComponent_ct_section_6_ct_section_header_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ct-alert", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Creation of sourceCodes is disabled, assetMode is 'replicated'. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ct_section_6_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
        }
      }

      function SourceCodesComponent_ct_section_6_ct_flex_item_44_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
        }
      }

      function SourceCodesComponent_ct_section_6_ct_flex_item_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SourceCodesComponent_ct_section_6_ct_flex_item_44_ng_container_2_Template, 1, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function SourceCodesComponent_ct_section_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ct-flex", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ct-flex", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Source Codes");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, SourceCodesComponent_ct_section_6_ct_flex_item_17_Template, 4, 1, "ct-flex-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\n\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, SourceCodesComponent_ct_section_6_ct_section_header_row_21_Template, 5, 0, "ct-section-header-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\n\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, SourceCodesComponent_ct_section_6_ng_container_28_Template, 1, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "\n\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "ct-flex", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "ct-table-pagination", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("next", function SourceCodesComponent_ct_section_6_Template_ct_table_pagination_next_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r13.nextPage();
          })("prev", function SourceCodesComponent_ct_section_6_Template_ct_table_pagination_prev_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r15.prevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, SourceCodesComponent_ct_section_6_ct_flex_item_44_Template, 4, 1, "ct-flex-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.dispatcherAssetModeService.isReplicated(ctx_r1.sourceCodesResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.dispatcherAssetModeService.isReplicated(ctx_r1.sourceCodesResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageableDefault", ctx_r1.sourceCodesResult == null ? null : ctx_r1.sourceCodesResult.items)("globalDisable", ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.dispatcherAssetModeService.isReplicated(ctx_r1.sourceCodesResult.assetMode));
        }
      }

      function SourceCodesComponent_ng_template_17_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", el_r30.id, " ");
        }
      }

      function SourceCodesComponent_ng_template_17_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "UID of sourceCode");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", el_r31.uid, " ");
        }
      }

      function SourceCodesComponent_ng_template_17_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r32 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r21.getType(el_r32.uid), " ");
        }
      }

      function SourceCodesComponent_ng_template_17_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Created on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, el_r33.createdOn, "MMM d, yyyy, HH:mm:ss"), " ");
        }
      }

      function SourceCodesComponent_ng_template_17_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Is valid? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", el_r34.valid, " ");
        }
      }

      function SourceCodesComponent_ng_template_17_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_td_44_ct_flex_item_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SourceCodesComponent_ng_template_17_td_44_ct_flex_item_16_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);

            var el_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r38.archive(el_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "To Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", el_r35.locked);
        }
      }

      function SourceCodesComponent_ng_template_17_td_44_ct_flex_item_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SourceCodesComponent_ng_template_17_td_44_ct_flex_item_18_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);

            var el_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r42["delete"](el_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return [a0, "view"];
      };

      var _c3 = function _c3(a0) {
        return [a0, "exec-contexts"];
      };

      function SourceCodesComponent_ng_template_17_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ct-flex", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Exec Contexts");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, SourceCodesComponent_ng_template_17_td_44_ct_flex_item_16_Template, 5, 1, "ct-flex-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, SourceCodesComponent_ng_template_17_td_44_ct_flex_item_18_Template, 8, 0, "ct-flex-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r35 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c2, el_r35.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](6, _c3, el_r35.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r27.dispatcherAssetModeService.isReplicated(ctx_r27.sourceCodesResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r27.dispatcherAssetModeService.isReplicated(ctx_r27.sourceCodesResult.assetMode));
        }
      }

      function SourceCodesComponent_ng_template_17_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function SourceCodesComponent_ng_template_17_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r45 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("deleted-table-row", ctx_r29.deletedSourceCodes.includes(row_r45) || ctx_r29.archivedSourceCodes.includes(row_r45));
        }
      }

      function SourceCodesComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ct-table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](5, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, SourceCodesComponent_ng_template_17_th_7_Template, 2, 0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, SourceCodesComponent_ng_template_17_td_9_Template, 2, 1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](12, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, SourceCodesComponent_ng_template_17_th_14_Template, 2, 0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, SourceCodesComponent_ng_template_17_td_16_Template, 2, 1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](19, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, SourceCodesComponent_ng_template_17_th_21_Template, 2, 0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, SourceCodesComponent_ng_template_17_td_23_Template, 2, 1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](26, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, SourceCodesComponent_ng_template_17_th_28_Template, 2, 0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, SourceCodesComponent_ng_template_17_td_30_Template, 3, 4, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](33, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, SourceCodesComponent_ng_template_17_th_35_Template, 2, 0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, SourceCodesComponent_ng_template_17_td_37_Template, 2, 1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](40, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, SourceCodesComponent_ng_template_17_th_42_Template, 2, 0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, SourceCodesComponent_ng_template_17_td_44_Template, 21, 8, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, SourceCodesComponent_ng_template_17_tr_47_Template, 2, 0, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, SourceCodesComponent_ng_template_17_tr_49_Template, 2, 2, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "\n");
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isWaiting", ctx_r4.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r4.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r4.columnsToDisplay);
        }
      }

      function SourceCodesComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Add Source Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n");
        }
      }

      var SourceCodesComponent = /*#__PURE__*/function (_src_app_models_UISta2) {
        _inherits(SourceCodesComponent, _src_app_models_UISta2);

        var _super2 = _createSuper(SourceCodesComponent);

        function SourceCodesComponent(dialog, sourceCodesService, dispatcherAssetModeService, authenticationService) {
          var _this13;

          _classCallCheck(this, SourceCodesComponent);

          _this13 = _super2.call(this, authenticationService);
          _this13.dialog = dialog;
          _this13.sourceCodesService = sourceCodesService;
          _this13.dispatcherAssetModeService = dispatcherAssetModeService;
          _this13.authenticationService = authenticationService;
          _this13.TABINDEX = 0;
          _this13.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
          _this13.columnsToDisplay = ['id', 'uid', 'type', 'createdOn', 'valid', 'bts'];
          _this13.deletedSourceCodes = [];
          _this13.archivedSourceCodes = [];
          return _this13;
        }

        _createClass(SourceCodesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateTable(0);
          }
        }, {
          key: "updateTable",
          value: function updateTable(page) {
            var _this14 = this;

            this.setIsLoadingStart();
            this.sourceCodesService.sourceCodes(page.toString()).subscribe({
              next: function next(sourceCodesResult) {
                _this14.sourceCodesResult = sourceCodesResult;
                _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](sourceCodesResult.items.content || []);
              },
              complete: function complete() {
                _this14.setIsLoadingEnd();
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(sourceCode) {
            this.deletedSourceCodes.push(sourceCode);
            this.sourceCodesService.deleteCommit(sourceCode.id.toString()).subscribe();
          }
        }, {
          key: "archive",
          value: function archive(sourceCode) {
            this.archivedSourceCodes.push(sourceCode);
            this.sourceCodesService.archiveCommit(sourceCode.id.toString()).subscribe();
          }
        }, {
          key: "tabChange",
          value: function tabChange() {
            if (this.matTabGroup.selectedIndex === 1) {
              this.sourceCodesArchive.updateTable(0);
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable(this.sourceCodesResult.items.number + 1);
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable(this.sourceCodesResult.items.number - 1);
          }
        }, {
          key: "getType",
          value: function getType(uid) {
            return this.sourceCodesService.getSourceCodeType(uid, this.sourceCodesResult);
          }
        }]);

        return SourceCodesComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_4__["UIStateComponent"]);

      SourceCodesComponent.ɵfac = function SourceCodesComponent_Factory(t) {
        return new (t || SourceCodesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_7__["SourceCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_6__["DispatcherAssetModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
      };

      SourceCodesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: SourceCodesComponent,
        selectors: [["source-codes"]],
        viewQuery: function SourceCodesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.matTabGroup = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sourceCodesArchive = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
        decls: 22,
        vars: 1,
        consts: [["mat-stretch-tabs", "", "dynamicHeight", "", 3, "selectedIndexChange"], ["matTabGroup", ""], ["label", "CURRENT"], [4, "ngIf"], ["label", "ARCHIVE"], ["sourceCodesArchive", ""], ["mainTableTemplate", ""], ["addSourceCodeButtonTemplate", ""], ["justify-content", "space-between"], ["justify-content", "flex-start", "gap", "8px"], [4, "ngTemplateOutlet"], [3, "pageableDefault", "globalDisable", "next", "prev"], ["theme", "info"], [3, "isWaiting"], ["mat-table", "", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "uid"], ["matColumnDef", "type"], ["matColumnDef", "createdOn"], ["matColumnDef", "valid"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "deleted-table-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "mat-flat-button", "size", "forTableRow", "color", "primary", "title", "View", 3, "routerLink"], ["mat-flat-button", "mat-flat-button", "size", "forTableRow", "color", "primary", 3, "routerLink"], ["mat-flat-button", "mat-flat-button", "size", "forTableRow", "color", "warn", "title", "Archive", 3, "disabled", "click"], ["mat-flat-button", "mat-flat-button", "size", "forTableRow", "color", "warn", "title", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-flat-button", "mat-flat-button", "color", "primary", "routerLink", "add"]],
        template: function SourceCodesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-tab-group", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedIndexChange", function SourceCodesComponent_Template_mat_tab_group_selectedIndexChange_0_listener() {
              return ctx.tabChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SourceCodesComponent_ct_section_6_Template, 49, 6, "ct-section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n\n\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "source-codes-archive", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\n\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, SourceCodesComponent_ng_template_17_Template, 53, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\n\n\n\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, SourceCodesComponent_ng_template_20_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sourceCodesResult);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _source_codes_archive_source_codes_archive_component__WEBPACK_IMPORTED_MODULE_8__["SourceCodesArchiveComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_14__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_15__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_16__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionBodyRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_19__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_20__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_21__["CtTablePaginationComponent"], _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_22__["CtAlertComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_23__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3VyY2UtY29kZXMuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      __decorate([Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogMethod"])({
        question: function question(sourceCode) {
          return "Do you want to delete SourceCode\xA0#".concat(sourceCode.id);
        },
        rejectTitle: 'Cancel',
        resolveTitle: 'Delete'
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], SourceCodesComponent.prototype, "delete", null);

      __decorate([Object(_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogMethod"])({
        question: function question(sourceCode) {
          return "Do you want to archive SourceCode\xA0#".concat(sourceCode.id);
        },
        rejectTitle: 'Cancel',
        resolveTitle: 'Archive'
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], SourceCodesComponent.prototype, "archive", null);
      /***/

    },

    /***/
    "qtmV": function qtmV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFormUploadSourceCodeComponent", function () {
        return CardFormUploadSourceCodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/services/source-codes/source-codes.service */
      "Rw8z");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
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


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");

      var CardFormUploadSourceCodeComponent = /*#__PURE__*/function () {
        function CardFormUploadSourceCodeComponent(sourceCodesService) {
          _classCallCheck(this, CardFormUploadSourceCodeComponent);

          this.sourceCodesService = sourceCodesService;
          this.responseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.abort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CardFormUploadSourceCodeComponent, [{
          key: "upload",
          value: function upload() {
            var _this15 = this;

            this.sourceCodesService.uploadSourceCode(this.file.fileInput.nativeElement.files[0]).subscribe(function (response) {
              _this15.responseChange.emit(response);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.abort.emit();
          }
        }, {
          key: "changed",
          value: function changed(value) {
            if (this.file.fileInput.nativeElement.files.length) {
              this.button.disabled = false;
            } else {
              this.button.disabled = true;
            }
          }
        }]);

        return CardFormUploadSourceCodeComponent;
      }();

      CardFormUploadSourceCodeComponent.ɵfac = function CardFormUploadSourceCodeComponent_Factory(t) {
        return new (t || CardFormUploadSourceCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_source_codes_source_codes_service__WEBPACK_IMPORTED_MODULE_1__["SourceCodesService"]));
      };

      CardFormUploadSourceCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardFormUploadSourceCodeComponent,
        selectors: [["card-form-upload-source-code"]],
        viewQuery: function CardFormUploadSourceCodeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["CtFileUploadComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
          }
        },
        outputs: {
          responseChange: "responseChange",
          abort: "abort"
        },
        decls: 40,
        vars: 1,
        consts: [["acceptTypes", ".yml, .yaml", 3, "changed"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"]],
        template: function CardFormUploadSourceCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Upload SourceCode from file ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ct-file-upload", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function CardFormUploadSourceCodeComponent_Template_ct_file_upload_changed_15_listener($event) {
              return ctx.changed($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ct-flex", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormUploadSourceCodeComponent_Template_button_click_27_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFormUploadSourceCodeComponent_Template_button_click_33_listener() {
              return ctx.upload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.file == null ? null : ctx.file.fileInput == null ? null : ctx.file.fileInput.nativeElement == null ? null : ctx.file.fileInput.nativeElement.files == null ? null : ctx.file.fileInput.nativeElement.files.length));
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionBodyRowComponent"], _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["CtFileUploadComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_12__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_13__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWZvcm0tdXBsb2FkLXNvdXJjZS1jb2RlLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    "rk/A": function rkA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditExecContextComponent", function () {
        return EditExecContextComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditExecContextComponent = /*#__PURE__*/function () {
        function EditExecContextComponent() {
          _classCallCheck(this, EditExecContextComponent);
        }

        _createClass(EditExecContextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditExecContextComponent;
      }();

      EditExecContextComponent.ɵfac = function EditExecContextComponent_Factory(t) {
        return new (t || EditExecContextComponent)();
      };

      EditExecContextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditExecContextComponent,
        selectors: [["edit-exec-context"]],
        decls: 3,
        vars: 0,
        template: function EditExecContextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  edit-exec-context works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWV4ZWMtY29udGV4dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "wCdv": function wCdv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodesRoutes", function () {
        return SourceCodesRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodeRoutingModule", function () {
        return SourceCodeRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodeModule", function () {
        return SourceCodeModule;
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


      var _ct_ct_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ct/ct.module */
      "9kxi");
      /* harmony import */


      var _add_exec_context_add_exec_context_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-exec-context/add-exec-context.component */
      "gsJw");
      /* harmony import */


      var _add_source_code_add_source_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-source-code/add-source-code.component */
      "fsm9");
      /* harmony import */


      var _edit_exec_context_edit_exec_context_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./edit-exec-context/edit-exec-context.component */
      "rk/A");
      /* harmony import */


      var _exec_context_states_exec_context_states_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./exec-context-states/exec-context-states.component */
      "May9");
      /* harmony import */


      var _exec_contexts_exec_contexts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./exec-contexts/exec-contexts.component */
      "kCBj");
      /* harmony import */


      var _source_codes_archive_source_codes_archive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./source-codes-archive/source-codes-archive.component */
      "JYqR");
      /* harmony import */


      var _source_codes_source_codes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./source-codes/source-codes.component */
      "nilI");
      /* harmony import */


      var _card_form_upload_source_code_card_form_upload_source_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./card-form-upload-source-code/card-form-upload-source-code.component */
      "qtmV");
      /* harmony import */


      var _card_form_add_source_code_card_form_add_source_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./card-form-add-source-code/card-form-add-source-code.component */
      "YFYk");
      /* harmony import */


      var _view_source_code_view_source_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./view-source-code/view-source-code.component */
      "/Pb3");
      /* harmony import */


      var _state_of_tasks_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./state-of-tasks/state-of-tasks.component */
      "5Exn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SourceCodesRoutes = [{
        path: '',
        component: _source_codes_source_codes_component__WEBPACK_IMPORTED_MODULE_12__["SourceCodesComponent"]
      }, {
        path: 'add',
        component: _add_source_code_add_source_code_component__WEBPACK_IMPORTED_MODULE_7__["AddSourceCodeComponent"],
        data: {
          backConfig: ['../']
        }
      }, {
        path: ':sourceCodeId/view',
        component: _view_source_code_view_source_code_component__WEBPACK_IMPORTED_MODULE_15__["ViewSourceCodeComponent"],
        data: {
          backConfig: ['../', '../']
        }
      }, {
        path: ':sourceCodeId/exec-contexts',
        component: _exec_contexts_exec_contexts_component__WEBPACK_IMPORTED_MODULE_10__["ExecContextsComponent"],
        data: {
          backConfig: ['../', '../']
        }
      }, {
        path: ':sourceCodeId/exec-context/add',
        component: _add_exec_context_add_exec_context_component__WEBPACK_IMPORTED_MODULE_6__["AddExecContextComponent"]
      }, {
        path: ':sourceCodeId/exec-context/:execContextId/edit',
        component: _edit_exec_context_edit_exec_context_component__WEBPACK_IMPORTED_MODULE_8__["EditExecContextComponent"],
        data: {
          backConfig: ['../', '../']
        }
      }, {
        path: ':sourceCodeId/exec-context/:execContextId/state',
        component: _exec_context_states_exec_context_states_component__WEBPACK_IMPORTED_MODULE_9__["ExecContextStatesComponent"],
        data: {
          backConfig: ['../', '../', '../', 'exec-contexts']
        }
      }];

      var SourceCodeRoutingModule = function SourceCodeRoutingModule() {
        _classCallCheck(this, SourceCodeRoutingModule);
      };

      SourceCodeRoutingModule.ɵfac = function SourceCodeRoutingModule_Factory(t) {
        return new (t || SourceCodeRoutingModule)();
      };

      SourceCodeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: SourceCodeRoutingModule
      });
      SourceCodeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(SourceCodesRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SourceCodeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();

      var SourceCodeModule = function SourceCodeModule() {
        _classCallCheck(this, SourceCodeModule);
      };

      SourceCodeModule.ɵfac = function SourceCodeModule_Factory(t) {
        return new (t || SourceCodeModule)();
      };

      SourceCodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: SourceCodeModule
      });
      SourceCodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], SourceCodeRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_5__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SourceCodeModule, {
          declarations: [_source_codes_source_codes_component__WEBPACK_IMPORTED_MODULE_12__["SourceCodesComponent"], _source_codes_archive_source_codes_archive_component__WEBPACK_IMPORTED_MODULE_11__["SourceCodesArchiveComponent"], _add_source_code_add_source_code_component__WEBPACK_IMPORTED_MODULE_7__["AddSourceCodeComponent"], _view_source_code_view_source_code_component__WEBPACK_IMPORTED_MODULE_15__["ViewSourceCodeComponent"], _exec_contexts_exec_contexts_component__WEBPACK_IMPORTED_MODULE_10__["ExecContextsComponent"], _add_exec_context_add_exec_context_component__WEBPACK_IMPORTED_MODULE_6__["AddExecContextComponent"], _edit_exec_context_edit_exec_context_component__WEBPACK_IMPORTED_MODULE_8__["EditExecContextComponent"], _exec_context_states_exec_context_states_component__WEBPACK_IMPORTED_MODULE_9__["ExecContextStatesComponent"], _card_form_add_source_code_card_form_add_source_code_component__WEBPACK_IMPORTED_MODULE_14__["CardFormAddSourceCodeComponent"], _card_form_upload_source_code_card_form_upload_source_code_component__WEBPACK_IMPORTED_MODULE_13__["CardFormUploadSourceCodeComponent"], _state_of_tasks_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_16__["StateOfTasksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], SourceCodeRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_5__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src-app-modules-source-codes-source-codes-module-es5.js.map