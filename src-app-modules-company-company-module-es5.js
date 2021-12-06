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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-company-company-module"], {
    /***/
    "9WPk": function WPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountAddComponent", function () {
        return AccountAddComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
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


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      var AccountAddComponent = /*#__PURE__*/function () {
        function AccountAddComponent(activatedRoute, companyService, router) {
          var _this = this;

          _classCallCheck(this, AccountAddComponent);

          this.activatedRoute = activatedRoute;
          this.companyService = companyService;
          this.router = router;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            publicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), function (control) {
              var group = _this.form;

              if (group) {
                return group.value.password === control.value ? null : {
                  notSame: true
                };
              }

              return null;
            }])
          });
        }

        _createClass(AccountAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isDone = false;
            this.isLoading = true;
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.isLoading = false;
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../../', 'accounts'], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "createAccount",
          value: function createAccount() {
            var _this2 = this;

            this.isLoading = true;
            this.companyService.addFormCommitNewAccount({
              username: this.form.value.username,
              password: this.form.value.password,
              password2: this.form.value.password2,
              publicName: this.form.value.publicName
            }, this.companyUniqueId).subscribe({
              next: function next(operationStatusRest) {
                return _this2.operationStatusRest = operationStatusRest;
              },
              complete: function complete() {
                if (_this2.operationStatusRest.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__["OperationStatus"].OK) {
                  _this2.isDone = true;

                  _this2.form.reset();
                }

                _this2.isLoading = false;
              }
            });
          }
        }]);

        return AccountAddComponent;
      }();

      AccountAddComponent.ɵfac = function AccountAddComponent_Factory(t) {
        return new (t || AccountAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AccountAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AccountAddComponent,
        selectors: [["account-add"]],
        decls: 108,
        vars: 3,
        consts: [["align-items", "baseline"], ["size", "6"], ["novalidate", "novalidate", "autocomplete", "off", 3, "formGroup"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "matInput", "type", "text", "autocomplete", "name", "formControlName", "username"], ["matInput", "matInput", "type", "password", "autocomplete", "new-password", "formControlName", "password"], ["matInput", "matInput", "type", "password", "autocomplete", "new-password", "formControlName", "password2"], ["matInput", "matInput", "type", "text", "autocomplete", "name", "formControlName", "publicName"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], [3, "content"]],
        template: function AccountAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ct-cols", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ct-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "New Account");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Password again");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Public Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "ct-section-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "ct-section-footer-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "ct-flex", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountAddComponent_Template_button_click_88_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountAddComponent_Template_button_click_94_listener() {
              return ctx.createAccount();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "ct-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "ct-rest-status", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isDone || ctx.isLoading || ctx.form.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.operationStatusRest);
          }
        },
        directives: [_ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_20__["CtRestStatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWFkZC5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    "A0rH": function A0rH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
        return CompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CompanyComponent = /*#__PURE__*/function () {
        function CompanyComponent() {
          _classCallCheck(this, CompanyComponent);
        }

        _createClass(CompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CompanyComponent;
      }();

      CompanyComponent.ɵfac = function CompanyComponent_Factory(t) {
        return new (t || CompanyComponent)();
      };

      CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CompanyComponent,
        selectors: [["company"]],
        decls: 3,
        vars: 0,
        template: function CompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "company works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    "AHA8": function AHA8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyBatchStatusComponent", function () {
        return CompanyBatchStatusComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-pre/ct-pre.component */
      "IRPT");

      function CompanyBatchStatusComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ct-pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Batch #", ctx_r0.batchDataStatus == null ? null : ctx_r0.batchDataStatus.batchId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.batchDataStatus == null ? null : ctx_r0.batchDataStatus.console);
        }
      }

      var CompanyBatchStatusComponent = /*#__PURE__*/function () {
        function CompanyBatchStatusComponent(companyService, activatedRoute) {
          _classCallCheck(this, CompanyBatchStatusComponent);

          this.companyService = companyService;
          this.activatedRoute = activatedRoute;
        }

        _createClass(CompanyBatchStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.isLoading = true;
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.batchId = this.activatedRoute.snapshot.paramMap.get('batchId');
            this.companyService.getBatchStatus(this.companyUniqueId, this.batchId).subscribe({
              next: function next(batchDataStatus) {
                return _this3.batchDataStatus = batchDataStatus;
              },
              error: function error() {
                return _this3.isLoading = false;
              },
              complete: function complete() {
                return _this3.isLoading = false;
              }
            });
          }
        }]);

        return CompanyBatchStatusComponent;
      }();

      CompanyBatchStatusComponent.ɵfac = function CompanyBatchStatusComponent_Factory(t) {
        return new (t || CompanyBatchStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      CompanyBatchStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CompanyBatchStatusComponent,
        selectors: [["company-batch-status"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function CompanyBatchStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CompanyBatchStatusComponent_ct_section_0_Template, 20, 2, "ct-section", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionBodyRowComponent"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_10__["CtPreComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWJhdGNoLXN0YXR1cy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    "G+rd": function GRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountEditComponent", function () {
        return AccountEditComponent;
      });
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      function AccountEditComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ct-cols", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Public Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountEditComponent_ct_cols_0_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1.publicName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-checkbox", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountEditComponent_ct_cols_0_Template_mat_checkbox_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.isEnabled = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Is account enabled?");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ct-flex", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountEditComponent_ct_cols_0_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountEditComponent_ct_cols_0_Template_button_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.saveChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "ct-rest-status", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Edit Account #", ctx_r0.accountId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.accountResult.account.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.publicName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.isEnabled);
        }
      }

      var AccountEditComponent = /*#__PURE__*/function () {
        function AccountEditComponent(companyService, activatedRoute, router) {
          _classCallCheck(this, AccountEditComponent);

          this.companyService = companyService;
          this.activatedRoute = activatedRoute;
          this.router = router;
        }

        _createClass(AccountEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.accountId = this.activatedRoute.snapshot.paramMap.get('accountId');
            this.companyService.edit(this.companyUniqueId, this.accountId).subscribe(function (accountResult) {
              _this4.accountResult = accountResult;
              _this4.username = accountResult.account.username;
              _this4.publicName = accountResult.account.publicName;
              _this4.isEnabled = accountResult.account.enabled;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../../../', 'accounts'], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var _this5 = this;

            this.companyService.editFormCommit(this.accountId, this.publicName, this.isEnabled, this.companyUniqueId).subscribe(function (operationStatusRest) {
              if (operationStatusRest.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_2__["OperationStatus"].OK) {
                _this5.back();
              } else {
                _this5.operationStatusRest = operationStatusRest;
              }
            });
          }
        }]);

        return AccountEditComponent;
      }();

      AccountEditComponent.ɵfac = function AccountEditComponent_Factory(t) {
        return new (t || AccountEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AccountEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AccountEditComponent,
        selectors: [["account-edit"]],
        decls: 1,
        vars: 1,
        consts: [["align-items", "baseline", 4, "ngIf"], ["align-items", "baseline"], ["size", "6"], ["appearance", "outline", "disabled", "", 2, "width", "100%"], ["matInput", "", "disabled", "", 3, "value"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], [3, "content"]],
        template: function AccountEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AccountEditComponent_ct_cols_0_Template, 70, 4, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_19__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_20__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_22__["CtRestStatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    "G+x7": function GX7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyBatchListComponent", function () {
        return CompanyBatchListComponent;
      });
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @biesbjerg/ngx-translate-extract-marker */
      "4u49");
      /* harmony import */


      var _src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/components/app-dialog-confirmation/app-dialog-confirmation.component */
      "lJGJ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _src_app_enums_BatchExecState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/enums/BatchExecState */
      "YcRZ");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _src_app_services_batch_BatchSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/services/batch/BatchSelector */
      "+xlp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../ct/ct-table-pagination/ct-table-pagination.component */
      "W7k4");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
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

      function CompanyBatchListComponent_ct_section_0_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CompanyBatchListComponent_ct_section_0_th_32_Template_mat_checkbox_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r27.masterToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r6.selection.hasValue() && ctx_r6.isAllSelected())("indeterminate", ctx_r6.selection.hasValue() && !ctx_r6.isAllSelected());
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_34_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-checkbox", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ct_section_0_td_34_ng_container_2_Template_mat_checkbox_click_2_listener($event) {
            return $event.stopPropagation();
          })("change", function CompanyBatchListComponent_ct_section_0_td_34_ng_container_2_Template_mat_checkbox_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35);

            var el_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r33.selection.toggle(el_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var el_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r30.selection.isSelected(el_r29));
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_34_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-checkbox", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CompanyBatchListComponent_ct_section_0_td_34_ng_container_2_Template, 7, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                   \n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, CompanyBatchListComponent_ct_section_0_td_34_ng_container_4_Template, 7, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                   \n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", el_r29.batch.deleted);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !el_r29.batch.deleted);
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", el_r37.batch.id, " ");
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Created on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, el_r38.batch.createdOn, "MMM d, yyyy, HH:mm:ss"), " ");
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Is batch consistent?");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_55_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.true"));
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_55_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.false"));
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CompanyBatchListComponent_ct_section_0_td_55_span_2_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, CompanyBatchListComponent_ct_section_0_td_55_span_3_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", el_r39.ok);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !el_r39.ok);
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Is deleted? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", el_r42.batch.deleted, " ");
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Source Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "File Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](el_r43.sourceCodeUid);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](el_r43.uploadedFileName);
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Exec State");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_76_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_76_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Preparing");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_76_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_76_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Finished");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CompanyBatchListComponent_ct_section_0_td_76_span_2_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, CompanyBatchListComponent_ct_section_0_td_76_span_4_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, CompanyBatchListComponent_ct_section_0_td_76_span_6_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, CompanyBatchListComponent_ct_section_0_td_76_span_8_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", el_r44.execState === -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", el_r44.execState === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", el_r44.execState === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", el_r44.execState === 4);
        }
      }

      function CompanyBatchListComponent_ct_section_0_th_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function CompanyBatchListComponent_ct_section_0_td_83_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ct_section_0_td_83_ng_container_22_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r53);

            var el_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r51.deleteOne(el_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "\n                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var el_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !(el_r49.batch.deleted && ctx_r50.isFinished(el_r49)));
        }
      }

      var _c0 = function _c0(a2) {
        return ["../", "batch", a2];
      };

      function CompanyBatchListComponent_ct_section_0_td_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ct-flex", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ct_section_0_td_83_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r56);

            var el_r49 = ctx.$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r55.downloadResult(el_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "\n                                        Result\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ct_section_0_td_83_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r56);

            var el_r49 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r57.downloadOriginFile(el_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "\n                                        Origin File\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, CompanyBatchListComponent_ct_section_0_td_83_ng_container_22_Template, 11, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "\n                   \n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r49 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, el_r49.batch.id))("disabled", !ctx_r21.isFinished(el_r49) || ctx_r21.isExecContextDeleted(el_r49));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r21.isFinished(el_r49) || ctx_r21.isExecContextDeleted(el_r49));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r21.isRole.MasterOperator);
        }
      }

      function CompanyBatchListComponent_ct_section_0_tr_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 32);
        }
      }

      function CompanyBatchListComponent_ct_section_0_tr_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ct_section_0_tr_88_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r60);

            var row_r58 = ctx.$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r59.checkAndToggleRowSeletion(row_r58);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r58 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("selected-color", ctx_r23.downloadSelector.isSelected(row_r58));
        }
      }

      function CompanyBatchListComponent_ct_section_0_ng_container_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ct_section_0_ng_container_96_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r61.deleteMany();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                    Delete Checked\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r24.isLoading || ctx_r24.selection.selected.length === 0);
        }
      }

      function CompanyBatchListComponent_ct_section_0_ng_container_107_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
        }
      }

      function CompanyBatchListComponent_ct_section_0_ng_container_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, CompanyBatchListComponent_ct_section_0_ng_container_107_ng_container_4_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      function CompanyBatchListComponent_ct_section_0_ng_container_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
        }
      }

      function CompanyBatchListComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Batch ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, CompanyBatchListComponent_ct_section_0_ng_container_16_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ct-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](30, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, CompanyBatchListComponent_ct_section_0_th_32_Template, 7, 2, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, CompanyBatchListComponent_ct_section_0_td_34_Template, 6, 2, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](37, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, CompanyBatchListComponent_ct_section_0_th_39_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, CompanyBatchListComponent_ct_section_0_td_41_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](44, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, CompanyBatchListComponent_ct_section_0_th_46_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](48, CompanyBatchListComponent_ct_section_0_td_48_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](51, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, CompanyBatchListComponent_ct_section_0_th_53_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, CompanyBatchListComponent_ct_section_0_td_55_Template, 4, 2, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](58, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, CompanyBatchListComponent_ct_section_0_th_60_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, CompanyBatchListComponent_ct_section_0_td_62_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](65, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, CompanyBatchListComponent_ct_section_0_th_67_Template, 8, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](69, CompanyBatchListComponent_ct_section_0_td_69_Template, 8, 2, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](72, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](74, CompanyBatchListComponent_ct_section_0_th_74_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](76, CompanyBatchListComponent_ct_section_0_td_76_Template, 10, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](79, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](81, CompanyBatchListComponent_ct_section_0_th_81_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](83, CompanyBatchListComponent_ct_section_0_td_83_Template, 25, 6, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, "\n                   \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](86, CompanyBatchListComponent_ct_section_0_tr_86_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](88, CompanyBatchListComponent_ct_section_0_tr_88_Template, 1, 2, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](90, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](96, CompanyBatchListComponent_ct_section_0_ng_container_96_Template, 8, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](103, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "ct-table-pagination", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("prev", function CompanyBatchListComponent_ct_section_0_Template_ct_table_pagination_prev_104_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r64.prevPage();
          })("next", function CompanyBatchListComponent_ct_section_0_Template_ct_table_pagination_next_104_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r66.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](105, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "\n\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](107, CompanyBatchListComponent_ct_section_0_ng_container_107_Template, 7, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108, "\n\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](110, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](111, CompanyBatchListComponent_ct_section_0_ng_container_111_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](113, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](115, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.isRole.MasterOperator);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageableDefault", ctx_r0.batchesResult.batches);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.downloadSelector.size > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function CompanyBatchListComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ct-flex", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ng_template_2_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r67.downloadResults();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "\n                Download\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CompanyBatchListComponent_ng_template_2_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r68);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r69.downloadSelector.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "\n                Discard\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "\n");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\n                Selected \xD7 ", ctx_r2.downloadSelector.size, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
        }
      }

      var _c1 = function _c1() {
        return ["upload"];
      };

      function CompanyBatchListComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Upload files and start\n            processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function CompanyBatchListComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CompanyBatchListComponent_ng_template_5_ng_container_1_Template, 5, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\n");
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.isRole.MasterOperator);
        }
      }

      var CompanyBatchListComponent = /*#__PURE__*/function (_src_app_models_UISta) {
        _inherits(CompanyBatchListComponent, _src_app_models_UISta);

        var _super = _createSuper(CompanyBatchListComponent);

        function CompanyBatchListComponent(authenticationService, companyService, activatedRoute, dialog, translate) {
          var _this6;

          _classCallCheck(this, CompanyBatchListComponent);

          _this6 = _super.call(this, authenticationService);
          _this6.authenticationService = authenticationService;
          _this6.companyService = companyService;
          _this6.activatedRoute = activatedRoute;
          _this6.dialog = dialog;
          _this6.translate = translate;
          _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
          _this6.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](true, []);
          _this6.downloadSelector = new _src_app_services_batch_BatchSelector__WEBPACK_IMPORTED_MODULE_12__["BatchSelector"]();
          return _this6;
        }

        _createClass(CompanyBatchListComponent, [{
          key: "checkAndToggleRowSeletion",
          value: function checkAndToggleRowSeletion(batch) {
            if (this.isFinished(batch) && !this.isExecContextDeleted(batch)) {
              this.downloadSelector.toggle(batch);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.updateTable('0');
          }
        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            return this.selection.selected.length === this.dataSource.data.filter(function (b) {
              return b.batch.deleted;
            }).length;
          }
        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this7 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.data.filter(function (b) {
              return b.batch.deleted;
            }).forEach(function (row) {
              return _this7.selection.select(row);
            });
          }
        }, {
          key: "columnsToDisplay",
          get: function get() {
            if (this.isRole.MasterOperator) {
              return ['check', 'id', 'createdOn', 'isBatchConsistent', 'isDeleted', 'sourceCode', 'execState', 'bts'];
            } else {
              return ['id', 'createdOn', 'isBatchConsistent', 'isDeleted', 'sourceCode', 'execState', 'bts'];
            }
          }
        }, {
          key: "updateTable",
          value: function updateTable(pageNumber) {
            var _this8 = this;

            this.isLoading = true;
            this.companyService.batches(pageNumber, this.companyUniqueId).subscribe({
              next: function next(batchesResult) {
                _this8.batchesResult = batchesResult;
                _this8.batches = _this8.batchesResult.batches.content;
                _this8.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this8.batches);

                _this8.selection.clear();
              },
              complete: function complete() {
                return _this8.isLoading = false;
              }
            });
          }
        }, {
          key: "isFinished",
          value: function isFinished(b) {
            if (b.batch.execState === _src_app_enums_BatchExecState__WEBPACK_IMPORTED_MODULE_9__["BatchExecState"].Finished || b.batch.execState === _src_app_enums_BatchExecState__WEBPACK_IMPORTED_MODULE_9__["BatchExecState"].Error || b.batch.execState === _src_app_enums_BatchExecState__WEBPACK_IMPORTED_MODULE_9__["BatchExecState"].Archived) {
              return true;
            }

            return false;
          }
        }, {
          key: "isExecContextDeleted",
          value: function isExecContextDeleted(b) {
            return b.execContextDeleted;
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable((this.batchesResult.batches.number - 1).toString());
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable((this.batchesResult.batches.number + 1).toString());
          }
        }, {
          key: "deleteOne",
          value: function deleteOne(batch) {
            var _this9 = this;

            this.isLoading = true;
            this.companyService.processBatchDeleteCommit(this.companyUniqueId, batch.batch.id.toString()).subscribe({
              complete: function complete() {
                _this9.updateTable(_this9.batchesResult.batches.number.toString());
              }
            });
          }
        }, {
          key: "deleteMany",
          value: function deleteMany() {
            var _this10 = this;

            this.isLoading = true;
            this.companyService.processBatchesBulkDeleteCommit(this.companyUniqueId, this.selection.selected.map(function (b) {
              return b.batch.id;
            }).toString()).subscribe({
              next: function next() {
                _this10.updateTable(_this10.batchesResult.batches.number.toString());
              }
            });
          }
        }, {
          key: "downloadResult",
          value: function downloadResult(el) {
            this.companyService.downloadProcessingResult(this.companyUniqueId, el.batch.id.toString()).subscribe(function (res) {
              var name = res.headers.get('Content-Disposition').replace('filename*=UTF-8\'\'', '') || 'result.zip';
              file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](res.body, name);
            });
          }
        }, {
          key: "downloadOriginFile",
          value: function downloadOriginFile(el) {
            this.companyService.downloadOriginFile(this.companyUniqueId, el.batch.id.toString(), el.uploadedFileName).subscribe(function (res) {
              var name = res.headers.get('Content-Disposition').replace('filename*=UTF-8\'\'', '') || 'result.zip';
              file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](res.body, name);
            });
          }
        }, {
          key: "downloadResults",
          value: function downloadResults() {
            var _this11 = this;

            this.isLoading = true;
            this.companyService.downloadProcessingResults(this.downloadSelector.getList(), this.companyUniqueId).subscribe(function () {
              _this11.isLoading = false;

              _this11.downloadSelector.clear();
            });
          }
        }]);

        return CompanyBatchListComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_10__["UIStateComponent"]);

      CompanyBatchListComponent.ɵfac = function CompanyBatchListComponent_Factory(t) {
        return new (t || CompanyBatchListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
      };

      CompanyBatchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: CompanyBatchListComponent,
        selectors: [["company-batch-list"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 1,
        consts: [[4, "ngIf"], ["downloadButtonsTemplate", ""], ["uploadButtonTemplate", ""], ["justify-content", "space-between"], [4, "ngTemplateOutlet"], [3, "isWaiting"], ["mat-table", "", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "check"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["matColumnDef", "createdOn"], ["matColumnDef", "isBatchConsistent"], ["matColumnDef", "isDeleted"], ["matColumnDef", "sourceCode"], ["matColumnDef", "execState"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "selected-color", "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageableDefault", "prev", "next"], ["mat-header-cell", ""], ["color", "warn", 3, "checked", "indeterminate", "change"], [1, "check-area"], ["mat-cell", ""], ["color", "warn", 3, "checked", "click", "change"], ["disabled", ""], [1, "no-wrap"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "routerLink", "disabled"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "warn", "size", "forTableRow", "title", "Delete", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-flat-button", "", "color", "warn", "title", "Delete Checked", 3, "disabled", "click"], ["justify-content", "center", "gap", "unit(1)", "align-items", "center"], [1, "selected-count"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"]],
        template: function CompanyBatchListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, CompanyBatchListComponent_ct_section_0_Template, 117, 9, "ct-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CompanyBatchListComponent_ng_template_2_Template, 22, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, CompanyBatchListComponent_ng_template_5_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.batchesResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_19__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_20__["CtHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_21__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_22__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_23__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_24__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_25__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_26__["CtTablePaginationComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["mat-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.check-area[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.selected-color[_ngcontent-%COMP%] {\n  background-color: rgba(255, 193, 7, 0.18);\n}\n\n.selected-count[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.18);\n  border-radius: 4px;\n  padding: 10px 20px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tcGFueS1iYXRjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFJQTtFQUNJLHlDQ1h1QjtBRFUzQjs7QUFJQTtFQUNJLG1DQ2Z1QjtFRGdCdkIsa0JBQUE7RUFDQSxzQkFBQTtBQURKIiwiZmlsZSI6ImNvbXBhbnktYmF0Y2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9jb21wYW55LnNhc3NcIjtcclxuXHJcbm1hdC1jaGVja2JveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLmNoZWNrLWFyZWEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLnNlbGVjdGVkLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10YWJsZS1yb3ctc2VsZWN0ZWQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdGFibGUtcm93LXNlbGVjdGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDhweDtcclxufSIsIkBmdW5jdGlvbiB1bml0KCRhKSB7XHJcbiAgICBAcmV0dXJuICRhICogOXB4XHJcbn1cclxuXHJcblxyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcblxyXG4kY29sb3ItdGFibGUtcm93LXNlbGVjdGVkOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjE4KTtcclxuXHJcbiRjb2xvci1saW5rOiAjNDJhOGZmO1xyXG4kY29sb3ItbGluay1ob3Zlcjogb3JhbmdlOyJdfQ== */"]
      });

      __decorate([Object(_src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogMethod"])({
        question: function question(batch) {
          return {
            text: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])('batch-company.delete-dialog.Do you want to delete Batch _batchId_'),
            params: {
              batchId: batch.batch.id
            }
          };
        },
        rejectTitle: "".concat(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])('batch-company.delete-dialog.Cancel')),
        resolveTitle: "".concat(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])('batch-company.delete-dialog.Delete'))
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], CompanyBatchListComponent.prototype, "deleteOne", null);

      __decorate([Object(_src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogMethod"])({
        question: function question() {
          return {
            text: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])('batch-company.delete-dialog.Do you want to delete Batches'),
            params: {}
          };
        },
        rejectTitle: "".concat(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])('batch-company.delete-dialog.Cancel')),
        resolveTitle: "".concat(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])('batch-company.delete-dialog.Delete'))
      }), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], CompanyBatchListComponent.prototype, "deleteMany", null);
      /***/

    },

    /***/
    "NMOb": function NMOb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountEditRolesComponent", function () {
        return AccountEditRolesComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function AccountEditRolesComponent_ct_cols_0_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-checkbox", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AccountEditRolesComponent_ct_cols_0_div_19_Template_mat_checkbox_ngModelChange_2_listener($event) {
            var el_r2 = ctx.$implicit;
            return el_r2.value = $event;
          })("change", function AccountEditRolesComponent_ct_cols_0_div_19_Template_mat_checkbox_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var el_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r4.save(el_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", el_r2.value)("disabled", ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", el_r2.key, "\n                        ");
        }
      }

      function AccountEditRolesComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AccountEditRolesComponent_ct_cols_0_div_19_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "ct-rest-status", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n                        Edit Account #", ctx_r0.accountId, " Roles\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 3, ctx_r0.roleModel));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r0.operationStatusRest);
        }
      }

      var AccountEditRolesComponent = /*#__PURE__*/function () {
        function AccountEditRolesComponent(companyService, activatedRoute) {
          _classCallCheck(this, AccountEditRolesComponent);

          this.companyService = companyService;
          this.activatedRoute = activatedRoute;
          this.roleModel = new Map();
        }

        _createClass(AccountEditRolesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.isLoading = true;
            this.accountId = this.activatedRoute.snapshot.paramMap.get('accountId');
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.companyService.editRoles(this.accountId, this.companyUniqueId).subscribe(function (accountWithRoleResult) {
              _this12.accountWithRoleResult = accountWithRoleResult;

              _this12.accountWithRoleResult.possibleRoles.forEach(function (r) {
                return _this12.roleModel.set(r, false);
              });

              _this12.accountWithRoleResult.account.authorities.forEach(function (a) {
                if (_this12.roleModel.has(a.authority)) {
                  _this12.roleModel.set(a.authority, true);
                }
              });

              _this12.isLoading = false;
            });
          }
        }, {
          key: "save",
          value: function save(role) {
            var _this13 = this;

            this.isLoading = true;
            this.companyService.rolesEditFormCommit(this.accountId, role.key, role.value, this.companyUniqueId).subscribe(function (operationStatusRest) {
              _this13.operationStatusRest = operationStatusRest;
              _this13.isLoading = false;
            });
          }
        }]);

        return AccountEditRolesComponent;
      }();

      AccountEditRolesComponent.ɵfac = function AccountEditRolesComponent_Factory(t) {
        return new (t || AccountEditRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      AccountEditRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AccountEditRolesComponent,
        selectors: [["account-edit-roles"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["size", "6"], ["style", "margin: 0.5em 0", 4, "ngFor", "ngForOf"], [3, "content"], [2, "margin", "0.5em 0"], [3, "ngModel", "disabled", "ngModelChange", "change"]],
        template: function AccountEditRolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AccountEditRolesComponent_ct_cols_0_Template, 31, 5, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accountWithRoleResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_4__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_5__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_9__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_12__["CtRestStatusComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQtcm9sZXMuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    "O12v": function O12v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyAddComponent", function () {
        return CompanyAddComponent;
      });
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
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


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      var _c0 = function _c0() {
        return ["../companies"];
      };

      var CompanyAddComponent = /*#__PURE__*/function () {
        function CompanyAddComponent(companyService, router, activatedRoute) {
          _classCallCheck(this, CompanyAddComponent);

          this.companyService = companyService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])
          });
        }

        _createClass(CompanyAddComponent, [{
          key: "createCompany",
          value: function createCompany() {
            var _this14 = this;

            this.companyService.addFormCommitCompany(this.form.value.name).subscribe(function (operationStatusRest) {
              if (operationStatusRest.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__["OperationStatus"].OK) {
                _this14.back();
              } else {
                _this14.operationStatusRest = operationStatusRest;
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../', 'companies'], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return CompanyAddComponent;
      }();

      CompanyAddComponent.ɵfac = function CompanyAddComponent_Factory(t) {
        return new (t || CompanyAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      CompanyAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: CompanyAddComponent,
        selectors: [["company-add"]],
        decls: 56,
        vars: 5,
        consts: [["size", "6"], [3, "formGroup"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "matInput", "formControlName", "name"], ["justify-content", "flex-end", "gap", "unit(1)"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "content"]],
        template: function CompanyAddComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "New Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ct-section-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Name of company");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "This is a required field.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ct-flex", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ct-flex-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\n                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyAddComponent_Template_button_click_42_listener() {
              return ctx.createCompany();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Create\n                                Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\n                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\n                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "ct-rest-status", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.operationStatusRest);
          }
        },
        directives: [_ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_15__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_16__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_18__["CtRestStatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWFkZC5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Qv1B": function Qv1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function () {
        return CompaniesComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/services/dispatcher-asset-mode/dispatcher-asset-mode.service */
      "J0F4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
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


      var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-table-pagination/ct-table-pagination.component */
      "W7k4");
      /* harmony import */


      var _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-alert/ct-alert.component */
      "xAq4");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CompaniesComponent_ct_section_0_ct_flex_item_14_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
        }
      }

      function CompaniesComponent_ct_section_0_ct_flex_item_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CompaniesComponent_ct_section_0_ct_flex_item_14_ng_container_2_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function CompaniesComponent_ct_section_0_ct_section_header_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-alert", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                Management of companies are disabled, assetMode is 'replicated'.\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CompaniesComponent_ct_section_0_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
        }
      }

      function CompaniesComponent_ct_section_0_ct_flex_item_40_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
        }
      }

      function CompaniesComponent_ct_section_0_ct_flex_item_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CompaniesComponent_ct_section_0_ct_flex_item_40_ng_container_2_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function CompaniesComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Companies");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CompaniesComponent_ct_section_0_ct_flex_item_14_Template, 4, 1, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CompaniesComponent_ct_section_0_ct_section_header_row_18_Template, 5, 0, "ct-section-header-row", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CompaniesComponent_ct_section_0_ng_container_25_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ct-table-pagination", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("prev", function CompaniesComponent_ct_section_0_Template_ct_table_pagination_prev_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r11.prevPage();
          })("next", function CompaniesComponent_ct_section_0_Template_ct_table_pagination_next_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r13.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CompaniesComponent_ct_section_0_ct_flex_item_40_Template, 4, 1, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.simpleCompaniesResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.simpleCompaniesResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageableDefault", ctx_r0.simpleCompaniesResult.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.simpleCompaniesResult.assetMode));
        }
      }

      function CompaniesComponent_ng_template_2_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CompaniesComponent_ng_template_2_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", el_r22.uniqueId, " ");
        }
      }

      function CompaniesComponent_ng_template_2_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CompaniesComponent_ng_template_2_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", el_r23.name, " ");
        }
      }

      function CompaniesComponent_ng_template_2_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["../", a1, "edit"];
      };

      function CompaniesComponent_ng_template_2_td_23_ng_container_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var el_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, el_r24.uniqueId));
        }
      }

      function CompaniesComponent_ng_template_2_td_23_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CompaniesComponent_ng_template_2_td_23_ng_container_4_ng_container_2_Template, 8, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r25.dispatcherAssetModeService.isReplicated(ctx_r25.simpleCompaniesResult.assetMode));
        }
      }

      var _c1 = function _c1(a1) {
        return ["../", a1, "accounts"];
      };

      function CompaniesComponent_ng_template_2_td_23_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var el_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c1, el_r24.uniqueId));
        }
      }

      var _c2 = function _c2(a1) {
        return ["../", a1, "batches"];
      };

      function CompaniesComponent_ng_template_2_td_23_ng_container_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Batches");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var el_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c2, el_r24.uniqueId));
        }
      }

      function CompaniesComponent_ng_template_2_td_23_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CompaniesComponent_ng_template_2_td_23_ng_container_8_ng_container_2_Template, 8, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var el_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", el_r24.id !== 1);
        }
      }

      function CompaniesComponent_ng_template_2_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ct-flex", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CompaniesComponent_ng_template_2_td_23_ng_container_4_Template, 4, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CompaniesComponent_ng_template_2_td_23_ng_container_6_Template, 8, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CompaniesComponent_ng_template_2_td_23_ng_container_8_Template, 4, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.authenticationService.isRoleMasterAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.authenticationService.isRoleMasterAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.authenticationService.isRoleMasterOperator() || ctx_r19.authenticationService.isRoleMasterSupport());
        }
      }

      function CompaniesComponent_ng_template_2_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 20);
        }
      }

      function CompaniesComponent_ng_template_2_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 21);
        }
      }

      function CompaniesComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ct-table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CompaniesComponent_ng_template_2_th_7_Template, 2, 0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CompaniesComponent_ng_template_2_td_9_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CompaniesComponent_ng_template_2_th_14_Template, 2, 0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, CompaniesComponent_ng_template_2_td_16_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CompaniesComponent_ng_template_2_th_21_Template, 2, 0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CompaniesComponent_ng_template_2_td_23_Template, 11, 3, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CompaniesComponent_ng_template_2_tr_26_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CompaniesComponent_ng_template_2_tr_28_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\n");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isWaiting", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columnsToDisplay);
        }
      }

      function CompaniesComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Add New Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n");
        }
      }

      var CompaniesComponent = /*#__PURE__*/function (_src_app_models_UISta2) {
        _inherits(CompaniesComponent, _src_app_models_UISta2);

        var _super2 = _createSuper(CompaniesComponent);

        function CompaniesComponent(authenticationService, companyService, dispatcherAssetModeService) {
          var _this15;

          _classCallCheck(this, CompaniesComponent);

          _this15 = _super2.call(this, authenticationService);
          _this15.authenticationService = authenticationService;
          _this15.companyService = companyService;
          _this15.dispatcherAssetModeService = dispatcherAssetModeService;
          _this15.columnsToDisplay = ['uniqueId', 'name', 'bts'];
          _this15.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
          return _this15;
        }

        _createClass(CompaniesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateTable(0);
          }
        }, {
          key: "updateTable",
          value: function updateTable(pageNumber) {
            var _this16 = this;

            this.setIsLoadingStart();
            this.companyService.companies(pageNumber.toString()).subscribe({
              next: function next(simpleCompaniesResult) {
                _this16.simpleCompaniesResult = simpleCompaniesResult;
                _this16.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](_this16.simpleCompaniesResult.companies.content);
              },
              complete: function complete() {
                _this16.setIsLoadingEnd();
              }
            });
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable(this.simpleCompaniesResult.companies.number - 1);
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable(this.simpleCompaniesResult.companies.number + 1);
          }
        }]);

        return CompaniesComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_1__["UIStateComponent"]);

      CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) {
        return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_4__["DispatcherAssetModeService"]));
      };

      CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: CompaniesComponent,
        selectors: [["companies"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 1,
        consts: [[4, "ngIf"], ["mainTableTemplate", ""], ["addButtonTemplate", ""], ["justify-content", "space-between"], [4, "ngTemplateOutlet"], [3, "pageableDefault", "prev", "next"], ["theme", "info"], [3, "isWaiting"], ["mat-table", "mat-table", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "uniqueId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "mat-cell", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "mat-cell"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "", "color", "primary", "size", "forTableRow", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], ["mat-flat-button", "", "color", "primary", "routerLink", "../add"]],
        template: function CompaniesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CompaniesComponent_ct_section_0_Template, 45, 5, "ct-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CompaniesComponent_ng_template_2_Template, 32, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CompaniesComponent_ng_template_5_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.simpleCompaniesResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_10__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_11__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_12__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionBodyRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_17__["CtTablePaginationComponent"], _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_18__["CtAlertComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_19__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW5pZXMuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    "XRP+": function XRP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyBatchUploadComponent", function () {
        return CompanyBatchUploadComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../ct/ct-file-upload/ct-file-upload.component */
      "MbdJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ct_ct_hint_ct_hint_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-hint/ct-hint.component */
      "PVyz");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["fileUpload"];

      function CompanyBatchUploadComponent_ct_cols_0_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sourceCode_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sourceCode_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sourceCode_r3.uid);
        }
      }

      function CompanyBatchUploadComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ct-cols");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CompanyBatchUploadComponent_ct_cols_0_Template_mat_select_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.sourceCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CompanyBatchUploadComponent_ct_cols_0_div_28_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ct-file-upload", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function CompanyBatchUploadComponent_ct_cols_0_Template_ct_file_upload_changed_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.fileUploadChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "ct-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ct-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ct-flex", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyBatchUploadComponent_ct_cols_0_Template_button_click_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyBatchUploadComponent_ct_cols_0_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.upload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "ct-rest-status", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 12, "batch-add.Upload file for processing"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 14, "batch-add.List of Source Codes"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.sourceCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.sourceCodesForCompany.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 16, "batch-add.This is a required field."));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("buttonTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 18, "batch-add.Select File"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 20, "batch-add.This is a required field."));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 22, "batch-add.Only .xml and .zip files are supported"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 24, "batch-add.Cancel"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.sourceCode || !ctx_r0.file);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 26, "batch-add.Upload-File-button"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.batchDataUploadingStatus);
        }
      }

      var CompanyBatchUploadComponent = /*#__PURE__*/function () {
        function CompanyBatchUploadComponent(companyService, activatedRoute, router) {
          _classCallCheck(this, CompanyBatchUploadComponent);

          this.companyService = companyService;
          this.activatedRoute = activatedRoute;
          this.router = router;
        }

        _createClass(CompanyBatchUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.batchId = this.activatedRoute.snapshot.paramMap.get('batchId');
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.companyService.sourceCodesForCompany(this.companyUniqueId).subscribe(function (sourceCodesForCompany) {
              _this17.sourceCodesForCompany = sourceCodesForCompany;
            });
          }
        }, {
          key: "fileUploadChanged",
          value: function fileUploadChanged() {
            this.file = this.fileUpload.fileInput.nativeElement.files[0] || false;
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this18 = this;

            this.companyService.uploadFile(this.companyUniqueId, this.sourceCode.id.toString(), this.file).subscribe(function (batchDataUploadingStatus) {
              _this18.batchDataUploadingStatus = batchDataUploadingStatus;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../'], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return CompanyBatchUploadComponent;
      }();

      CompanyBatchUploadComponent.ɵfac = function CompanyBatchUploadComponent_Factory(t) {
        return new (t || CompanyBatchUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      CompanyBatchUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CompanyBatchUploadComponent,
        selectors: [["company-batch-upload"]],
        viewQuery: function CompanyBatchUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["size", "6"], ["appearance", "outline", 2, "width", "100%"], [3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["acceptTypes", ".zip, .xml", 3, "buttonTitle", "changed"], ["fileUpload", ""], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], [3, "content"], [3, "value"]],
        template: function CompanyBatchUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CompanyBatchUploadComponent_ct_cols_0_Template, 88, 28, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sourceCodesForCompany);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["CtFileUploadComponent"], _ct_ct_hint_ct_hint_component__WEBPACK_IMPORTED_MODULE_16__["CtHintComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_19__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_20__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_22__["CtRestStatusComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWJhdGNoLXVwbG9hZC5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    "fyic": function fyic(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var jszip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jszip */
      "xOOu");
      /* harmony import */


      var jszip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var url = function url(s) {
        return "".concat(_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "dispatcher/company/").concat(s);
      };

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(http) {
          var _this19 = this;

          _classCallCheck(this, CompanyService);

          this.http = http;

          this.companies = function (page) {
            return _this19.http.get(url('companies'), {
              params: {
                page: page
              }
            });
          };

          this.addFormCommitCompany = function (companyName) {
            return _this19.http.post(url('company-add-commit'), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              companyName: companyName
            }));
          };

          this.editCompany = function (companyUniqueId) {
            return _this19.http.get(url("company-edit/".concat(companyUniqueId)));
          };

          this.editFormCommitCompany = function (companyUniqueId, name, groups) {
            return _this19.http.post(url("company-edit-commit"), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              companyUniqueId: companyUniqueId,
              name: name,
              groups: groups
            }));
          };

          this.accounts = function (page, companyUniqueId) {
            return _this19.http.get(url("company-accounts/".concat(companyUniqueId)), {
              params: {
                page: page
              }
            });
          };

          this.addFormCommitNewAccount = function (account, companyUniqueId) {
            return _this19.http.post(url("company-account-add-commit/".concat(companyUniqueId)), account);
          };

          this.edit = function (companyUniqueId, id) {
            return _this19.http.get(url("company-account-edit/".concat(companyUniqueId, "/").concat(id)));
          }; // @PostMapping("/company-account-edit-commit/{companyUniqueId}")
          // @PreAuthorize("hasAnyRole('MASTER_ADMIN')")
          // public OperationStatusRest editFormCommit(Long id, String publicName, boolean enabled, @PathVariable Long companyUniqueId) {
          //     OperationStatusRest operationStatusRest = companyAccountTopLevelService.editFormCommit(id, publicName, enabled, companyUniqueId);
          //     return operationStatusRest;
          // }


          this.editFormCommit = function (id, publicName, enabled, companyUniqueId) {
            return _this19.http.post(url("company-account-edit-commit/".concat(companyUniqueId)), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              id: id,
              publicName: publicName,
              enabled: enabled,
              companyUniqueId: companyUniqueId
            }));
          };

          this.passwordEdit = function (accountId, companyUniqueId) {
            return _this19.http.get(url("company-account-password-edit/".concat(companyUniqueId, "/").concat(accountId)));
          };

          this.passwordEditFormCommit = function (id, password, password2, companyUniqueId) {
            return _this19.http.post(url("company-account-password-edit-commit/".concat(companyUniqueId)), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              id: id,
              password: password,
              password2: password2,
              companyUniqueId: companyUniqueId
            }));
          };

          this.editRoles = function (accountId, companyUniqueId) {
            return _this19.http.get(url("company-account-edit-roles/".concat(companyUniqueId, "/").concat(accountId)));
          };

          this.rolesEditFormCommit = function (accountId, role, checkbox, companyId) {
            return _this19.http.post(url("company-account-edit-roles-commit/".concat(companyId)), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              accountId: accountId,
              role: role,
              checkbox: checkbox,
              companyId: companyId
            }));
          }; //
          //
          //
          //


          this.batches = function (page, companyUniqueId) {
            return _this19.http.get(url("batch/company-batches/".concat(companyUniqueId)), {
              params: {
                page: page
              }
            });
          };

          this.processBatchDelete = function (companyUniqueId, batchId) {
            return _this19.http.get(url("batch/company-batch-delete/".concat(companyUniqueId, "/").concat(batchId)));
          };

          this.processBatchDeleteCommit = function (companyUniqueId, batchId) {
            return _this19.http.post(url("batch/company-batch-delete-commit/".concat(companyUniqueId)), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              batchId: batchId
            }));
          };

          this.processBatchesBulkDeleteCommit = function (companyUniqueId, batchIds) {
            return _this19.http.post(url("batch/company-batch-bulk-delete-commit/".concat(companyUniqueId)), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              batchIds: batchIds
            }));
          };

          this.uploadFile = function (companyUniqueId, sourceCodeId, file) {
            return _this19.http.post(url("batch/company-batch-upload-from-file/".concat(companyUniqueId)), Object(_src_app_helpers_generateFormData__WEBPACK_IMPORTED_MODULE_1__["generateFormData"])({
              sourceCodeId: sourceCodeId,
              file: file
            }));
          };

          this.getBatchStatus = function (companyUniqueId, batchId) {
            return _this19.http.get(url("batch/company-batch-status/".concat(companyUniqueId, "/").concat(batchId)));
          };

          this.downloadProcessingResult = function (companyUniqueId, batchId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers = headers.append('Accept', 'application/octet-stream');
            return _this19.http.get(url("batch/company-batch-download-result/".concat(companyUniqueId, "/").concat(batchId)), {
              headers: headers,
              observe: 'response',
              responseType: 'blob'
            });
          };

          this.downloadOriginFile = function (companyUniqueId, batchId, fileName) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers = headers.append('Accept', 'application/octet-stream');
            return _this19.http.get(url("batch/company-batch-download-origin-file/".concat(companyUniqueId, "/").concat(batchId, "/").concat(fileName)), {
              headers: headers,
              observe: 'response',
              responseType: 'blob'
            });
          };

          this.sourceCodesForCompany = function (companyUniqueId) {
            return _this19.http.get(url("batch/company-batch-source-codes/".concat(companyUniqueId)));
          };
        }

        _createClass(CompanyService, [{
          key: "downloadProcessingResults",
          value: function downloadProcessingResults(list, companyId) {
            var _this20 = this;

            var zipFileName = 'result ' + list.toString() + '.zip';
            var zip = new jszip__WEBPACK_IMPORTED_MODULE_4__();
            var processable = list.map(function (el) {
              return {
                id: el.toString(),
                fileName: 'empty',
                response: null,
                companyId: companyId
              };
            });
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (sub) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(processable).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (item) {
                return _this20.downloadProcessingResult(item.companyId, item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
                }), _this20.parseProcessableItemOperator(item));
              })).subscribe({
                next: function next(e) {},
                error: function error(_error) {
                  return sub.error(_error);
                },
                complete: function complete() {
                  processable.forEach(function (item) {
                    zip.file(item.fileName, item.response.body);
                  });
                  zip.generateAsync({
                    type: 'blob'
                  }).then(function (blob) {
                    file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, zipFileName);
                  });
                  sub.next(true);
                  sub.complete();
                }
              });
            });
          }
        }, {
          key: "parseProcessableItemOperator",
          value: function parseProcessableItemOperator(item) {
            return function (source) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                return source.subscribe({
                  next: function next(response) {
                    item.response = response;
                    item.fileName = response.ok ? "".concat(item.id, ".zip") : "".concat(item.id, " error");
                    observer.next();
                  },
                  error: function error(_error2) {
                    return observer.error(_error2);
                  },
                  complete: function complete() {
                    return observer.complete();
                  }
                });
              });
            };
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ɵfac = function CompanyService_Factory(t) {
        return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: CompanyService,
        factory: CompanyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "iSL5": function iSL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyEditComponent", function () {
        return CompanyEditComponent;
      });
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
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

      var _c0 = function _c0() {
        return ["../../companies"];
      };

      function CompanyEditComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ct-cols");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Edit Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Name of company");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CompanyEditComponent_ct_cols_0_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "This is a required field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Company's groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CompanyEditComponent_ct_cols_0_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.groups = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ct-flex", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyEditComponent_ct_cols_0_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.saveChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "ct-rest-status", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.groups);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.operationStatusRest);
        }
      }

      var CompanyEditComponent = /*#__PURE__*/function () {
        function CompanyEditComponent(companyService, activatedRoute, router) {
          _classCallCheck(this, CompanyEditComponent);

          this.companyService = companyService;
          this.activatedRoute = activatedRoute;
          this.router = router;
        }

        _createClass(CompanyEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.companyService.editCompany(this.companyUniqueId).subscribe(function (simpleCompanyResult) {
              _this21.simpleCompanyResult = simpleCompanyResult;
              _this21.name = simpleCompanyResult.company.name;
              _this21.groups = simpleCompanyResult.companyAccessControl.groups;
            });
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var _this22 = this;

            this.companyService.editFormCommitCompany(this.companyUniqueId, this.name, this.groups).subscribe(function (operationStatusRest) {
              if (operationStatusRest.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_2__["OperationStatus"].OK) {
                _this22.back();
              } else {
                _this22.operationStatusRest = operationStatusRest;
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../../companies'], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return CompanyEditComponent;
      }();

      CompanyEditComponent.ɵfac = function CompanyEditComponent_Factory(t) {
        return new (t || CompanyEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      CompanyEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CompanyEditComponent,
        selectors: [["company-edit"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["size", "6"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "matInput", 3, "ngModel", "ngModelChange"], ["justify-content", "flex-end", "gap", "unit(1)"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", 3, "click"], [3, "content"]],
        template: function CompanyEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CompanyEditComponent_ct_cols_0_Template, 68, 5, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.simpleCompanyResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_16__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_19__["CtRestStatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWVkaXQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    "kDSI": function kDSI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsComponent", function () {
        return AccountsComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/dispatcher-asset-mode/dispatcher-asset-mode.service */
      "J0F4");
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


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-table/ct-table.component */
      "6xdO");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-table-pagination/ct-table-pagination.component */
      "W7k4");
      /* harmony import */


      var _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-alert/ct-alert.component */
      "xAq4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AccountsComponent_ct_section_0_ct_flex_item_14_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
        }
      }

      function AccountsComponent_ct_section_0_ct_flex_item_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AccountsComponent_ct_section_0_ct_flex_item_14_ng_container_2_Template, 1, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      function AccountsComponent_ct_section_0_ct_section_header_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ct-alert", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                Management of accounts are disabled, assetMode is 'replicated'.\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r23.id, " ");
        }
      }

      function AccountsComponent_ct_section_0_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Is enabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r24.enabled ? "Yes" : "No", " ");
        }
      }

      function AccountsComponent_ct_section_0_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_td_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r25.username, " ");
        }
      }

      function AccountsComponent_ct_section_0_th_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Public name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_td_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r26.publicName, " ");
        }
      }

      function AccountsComponent_ct_section_0_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_td_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", el_r27.roles, " ");
        }
      }

      function AccountsComponent_ct_section_0_th_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Created On ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_td_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, el_r28.createdOn, "HH:mm:ss, MMM\xA0d,\xA0yyyy"), " ");
        }
      }

      function AccountsComponent_ct_section_0_th_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a2) {
        return ["../", "account", a2, "edit"];
      };

      var _c1 = function _c1(a2) {
        return ["../", "account", a2, "edit-roles"];
      };

      var _c2 = function _c2(a2) {
        return ["../", "account", a2, "edit-password"];
      };

      function AccountsComponent_ct_section_0_td_75_ct_flex_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ct-flex", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n                                        Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, el_r29.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, el_r29.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, el_r29.id));
        }
      }

      function AccountsComponent_ct_section_0_td_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AccountsComponent_ct_section_0_td_75_ct_flex_2_Template, 20, 9, "ct-flex", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.dispatcherAssetModeService.isReplicated(ctx_r18.accountsResult.assetMode));
        }
      }

      function AccountsComponent_ct_section_0_tr_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_tr_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AccountsComponent_ct_section_0_ct_flex_item_100_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
        }
      }

      function AccountsComponent_ct_section_0_ct_flex_item_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AccountsComponent_ct_section_0_ct_flex_item_100_ng_container_2_Template, 1, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      function AccountsComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ct-flex", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AccountsComponent_ct_section_0_ct_flex_item_14_Template, 4, 1, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AccountsComponent_ct_section_0_ct_section_header_row_18_Template, 5, 0, "ct-section-header-row", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ct-table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AccountsComponent_ct_section_0_th_31_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AccountsComponent_ct_section_0_td_33_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](36, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, AccountsComponent_ct_section_0_th_38_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, AccountsComponent_ct_section_0_td_40_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](43, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, AccountsComponent_ct_section_0_th_45_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, AccountsComponent_ct_section_0_td_47_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](50, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AccountsComponent_ct_section_0_th_52_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, AccountsComponent_ct_section_0_td_54_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](57, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AccountsComponent_ct_section_0_th_59_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AccountsComponent_ct_section_0_td_61_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, AccountsComponent_ct_section_0_th_66_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AccountsComponent_ct_section_0_td_68_Template, 3, 4, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](71, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, AccountsComponent_ct_section_0_th_73_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, AccountsComponent_ct_section_0_td_75_Template, 4, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, AccountsComponent_ct_section_0_tr_78_Template, 2, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, AccountsComponent_ct_section_0_tr_80_Template, 2, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "ct-flex", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "ct-flex", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "ct-table-pagination", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("prev", function AccountsComponent_ct_section_0_Template_ct_table_pagination_prev_96_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r34.prevPage();
          })("next", function AccountsComponent_ct_section_0_Template_ct_table_pagination_next_96_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r36.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, AccountsComponent_ct_section_0_ct_flex_item_100_Template, 4, 1, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.accountsResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.accountsResult.assetMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageableDefault", ctx_r0.accountsResult.accounts);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.dispatcherAssetModeService.isReplicated(ctx_r0.accountsResult.assetMode));
        }
      }

      var _c3 = function _c3() {
        return ["../", "account", "add"];
      };

      function AccountsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\n        Add New Account\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c3));
        }
      }

      var AccountsComponent = /*#__PURE__*/function (_src_app_models_UISta3) {
        _inherits(AccountsComponent, _src_app_models_UISta3);

        var _super3 = _createSuper(AccountsComponent);

        function AccountsComponent(companyService, activatedRoute, dispatcherAssetModeService, authenticationService) {
          var _this23;

          _classCallCheck(this, AccountsComponent);

          _this23 = _super3.call(this, authenticationService);
          _this23.companyService = companyService;
          _this23.activatedRoute = activatedRoute;
          _this23.dispatcherAssetModeService = dispatcherAssetModeService;
          _this23.authenticationService = authenticationService;
          _this23.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
          _this23.columnsToDisplay = ['id', 'isEnabled', 'login', 'publicName', 'role', 'createdOn', 'bts'];
          return _this23;
        }

        _createClass(AccountsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.updateTable(0);
          }
        }, {
          key: "updateTable",
          value: function updateTable(page) {
            var _this24 = this;

            this.setIsLoadingStart();
            this.companyService.accounts(page.toString(), this.companyUniqueId).subscribe({
              next: function next(accountsResult) {
                _this24.accountsResult = accountsResult;
                _this24.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](_this24.accountsResult.accounts.content || []);
              },
              complete: function complete() {
                _this24.setIsLoadingEnd();
              }
            });
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable(this.accountsResult.accounts.number + 1);
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable(this.accountsResult.accounts.number - 1);
          }
        }]);

        return AccountsComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_2__["UIStateComponent"]);

      AccountsComponent.ɵfac = function AccountsComponent_Factory(t) {
        return new (t || AccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_src_app_services_dispatcher_asset_mode_dispatcher_asset_mode_service__WEBPACK_IMPORTED_MODULE_5__["DispatcherAssetModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      AccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: AccountsComponent,
        selectors: [["accounts"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 1,
        consts: [[4, "ngIf"], ["addButtonTemplate", ""], ["justify-content", "space-between"], [3, "isWaiting"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "isEnabled"], ["matColumnDef", "login"], ["matColumnDef", "publicName"], ["matColumnDef", "role"], ["matColumnDef", "createdOn"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["justify-content", "flex-start", "gap", "8px"], [3, "pageableDefault", "prev", "next"], [4, "ngTemplateOutlet"], ["theme", "info"], ["mat-header-cell", ""], ["mat-cell", ""], ["justify-content", "flex-end", "gap", "9px", 4, "ngIf"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], ["mat-flat-button", "", "color", "primary", 3, "routerLink"]],
        template: function AccountsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AccountsComponent_ct_section_0_Template, 105, 8, "ct-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AccountsComponent_ng_template_2_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.accountsResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_11__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_12__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_13__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_16__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_18__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_19__["CtTablePaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _ct_ct_alert_ct_alert_component__WEBPACK_IMPORTED_MODULE_20__["CtAlertComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ozyC": function ozyC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountEditPasswordComponent", function () {
        return AccountEditPasswordComponent;
      });
      /* harmony import */


      var _src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/services/company/company.service */
      "fyic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
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


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");

      function AccountEditPasswordComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ct-cols", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Edit Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "This is a required field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Password again");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "This is a required field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ct-flex", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountEditPasswordComponent_ct_cols_0_Template_button_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountEditPasswordComponent_ct_cols_0_Template_button_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.saveChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "ct-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "ct-rest-status", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.operationStatusRest);
        }
      }

      var AccountEditPasswordComponent = /*#__PURE__*/function () {
        function AccountEditPasswordComponent(activatedRoute, companyService, router) {
          var _this25 = this;

          _classCallCheck(this, AccountEditPasswordComponent);

          this.activatedRoute = activatedRoute;
          this.companyService = companyService;
          this.router = router;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), function (control) {
              var group = _this25.form;

              if (group) {
                return group.value.password === control.value ? null : {
                  notSame: true
                };
              }

              return null;
            }])
          });
        }

        _createClass(AccountEditPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.isLoading = true;
            this.accoundId = this.activatedRoute.snapshot.paramMap.get('accountId');
            this.companyUniqueId = this.activatedRoute.snapshot.paramMap.get('companyUniqueId');
            this.companyService.passwordEdit(this.accoundId, this.companyUniqueId).subscribe({
              next: function next(accountResult) {
                return _this26.accountResult = accountResult;
              },
              complete: function complete() {
                return _this26.isLoading = false;
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../../../', 'accounts'], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var _this27 = this;

            this.isLoading = true;
            this.companyService.passwordEditFormCommit(this.accoundId, this.form.value.password, this.form.value.password2, this.companyUniqueId).subscribe({
              next: function next(operationStatusRest) {
                return _this27.operationStatusRest = operationStatusRest;
              },
              complete: function complete() {
                return _this27.isLoading = false;
              }
            });
          }
        }]);

        return AccountEditPasswordComponent;
      }();

      AccountEditPasswordComponent.ɵfac = function AccountEditPasswordComponent_Factory(t) {
        return new (t || AccountEditPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_0__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AccountEditPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AccountEditPasswordComponent,
        selectors: [["account-edit-password"]],
        decls: 1,
        vars: 1,
        consts: [["align-items", "baseline", 4, "ngIf"], ["align-items", "baseline"], ["size", "6"], ["novalidate", "novalidate", "autocomplete", "off", 3, "formGroup"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "matInput", "type", "password", "autocomplete", "new-password", "formControlName", "password"], ["matInput", "matInput", "type", "password", "autocomplete", "new-password", "formControlName", "password2"], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], [3, "content"]],
        template: function AccountEditPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AccountEditPasswordComponent_ct_cols_0_Template, 78, 3, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_5__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_6__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_10__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_11__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionBodyRowComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_20__["CtRestStatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQtcGFzc3dvcmQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    "pYoV": function pYoV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyRoutes", function () {
        return CompanyRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function () {
        return CompanyRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompnyModule", function () {
        return CompnyModule;
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


      var _company_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./company/company.component */
      "A0rH");
      /* harmony import */


      var _companies_companies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./companies/companies.component */
      "Qv1B");
      /* harmony import */


      var _company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./company-edit/company-edit.component */
      "iSL5");
      /* harmony import */


      var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./accounts/accounts.component */
      "kDSI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./company-add/company-add.component */
      "O12v");
      /* harmony import */


      var _account_add_account_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./account-add/account-add.component */
      "9WPk");
      /* harmony import */


      var _account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./account-edit/account-edit.component */
      "G+rd");
      /* harmony import */


      var _account_edit_password_account_edit_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./account-edit-password/account-edit-password.component */
      "ozyC");
      /* harmony import */


      var _account_edit_roles_account_edit_roles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./account-edit-roles/account-edit-roles.component */
      "NMOb");
      /* harmony import */


      var _company_batch_status_company_batch_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./company-batch-status/company-batch-status.component */
      "AHA8");
      /* harmony import */


      var _company_batch_upload_company_batch_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./company-batch-upload/company-batch-upload.component */
      "XRP+");
      /* harmony import */


      var _company_batches_company_batch_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./company-batches/company-batch-list.component */
      "G+x7");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @src/app/guards/role-route.guard */
      "iuQL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CompanyRoutes = [{
        path: '',
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"]
      }, {
        path: 'companies',
        component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_6__["CompaniesComponent"]
      }, {
        path: ':companyUniqueId/edit',
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_19__["RoleRouteGuard"]],
        component: _company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_7__["CompanyEditComponent"],
        data: {
          backConfig: ['../', '../', 'companies'],
          requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterAdmin]
        }
      }, {
        path: 'add',
        component: _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_10__["CompanyAddComponent"],
        data: {
          backConfig: ['../', 'companies']
        }
      }, {
        path: ':companyUniqueId/accounts',
        component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_8__["AccountsComponent"],
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_19__["RoleRouteGuard"]],
        data: {
          backConfig: ['../', '../', 'companies'],
          requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterAdmin]
        }
      }, {
        path: ':companyUniqueId/account/add',
        component: _account_add_account_add_component__WEBPACK_IMPORTED_MODULE_11__["AccountAddComponent"],
        data: {
          backConfig: ['../', '../', 'accounts']
        }
      }, {
        path: ':companyUniqueId/account/:accountId/edit',
        component: _account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_12__["AccountEditComponent"],
        data: {
          backConfig: ['../', '../', '../', 'accounts']
        }
      }, {
        path: ':companyUniqueId/account/:accountId/edit-roles',
        component: _account_edit_roles_account_edit_roles_component__WEBPACK_IMPORTED_MODULE_14__["AccountEditRolesComponent"],
        data: {
          backConfig: ['../', '../', '../', 'accounts']
        }
      }, {
        path: ':companyUniqueId/account/:accountId/edit-password',
        component: _account_edit_password_account_edit_password_component__WEBPACK_IMPORTED_MODULE_13__["AccountEditPasswordComponent"],
        data: {
          backConfig: ['../', '../', '../', 'accounts']
        }
      }, //
      //
      //
      {
        path: '1/batches',
        redirectTo: 'companies'
      }, {
        path: ':companyUniqueId/batches',
        component: _company_batches_company_batch_list_component__WEBPACK_IMPORTED_MODULE_17__["CompanyBatchListComponent"],
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_19__["RoleRouteGuard"]],
        data: {
          backConfig: ['../', '../', 'companies'],
          requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterSupport, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterOpertator]
        }
      }, {
        path: ':companyUniqueId/batches/upload',
        component: _company_batch_upload_company_batch_upload_component__WEBPACK_IMPORTED_MODULE_16__["CompanyBatchUploadComponent"],
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_19__["RoleRouteGuard"]],
        data: {
          backConfig: ['../'],
          requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterSupport, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterOpertator]
        }
      }, {
        path: ':companyUniqueId/batch/:batchId',
        component: _company_batch_status_company_batch_status_component__WEBPACK_IMPORTED_MODULE_15__["CompanyBatchStatusComponent"],
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_19__["RoleRouteGuard"]],
        data: {
          backConfig: ['../', '../', 'batches'],
          requiredRoles: [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterSupport, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_18__["Role"].MasterOpertator]
        }
      }];

      var CompanyRoutingModule = function CompanyRoutingModule() {
        _classCallCheck(this, CompanyRoutingModule);
      };

      CompanyRoutingModule.ɵfac = function CompanyRoutingModule_Factory(t) {
        return new (t || CompanyRoutingModule)();
      };

      CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
        type: CompanyRoutingModule
      });
      CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(CompanyRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](CompanyRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      var CompnyModule = function CompnyModule() {
        _classCallCheck(this, CompnyModule);
      };

      CompnyModule.ɵfac = function CompnyModule_Factory(t) {
        return new (t || CompnyModule)();
      };

      CompnyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
        type: CompnyModule
      });
      CompnyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], CompanyRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_3__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](CompnyModule, {
          declarations: [_company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_6__["CompaniesComponent"], _company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_7__["CompanyEditComponent"], _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_10__["CompanyAddComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_8__["AccountsComponent"], _account_add_account_add_component__WEBPACK_IMPORTED_MODULE_11__["AccountAddComponent"], _account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_12__["AccountEditComponent"], _account_edit_password_account_edit_password_component__WEBPACK_IMPORTED_MODULE_13__["AccountEditPasswordComponent"], _account_edit_roles_account_edit_roles_component__WEBPACK_IMPORTED_MODULE_14__["AccountEditRolesComponent"], _company_batches_company_batch_list_component__WEBPACK_IMPORTED_MODULE_17__["CompanyBatchListComponent"], _company_batch_status_company_batch_status_component__WEBPACK_IMPORTED_MODULE_15__["CompanyBatchStatusComponent"], _company_batch_upload_company_batch_upload_component__WEBPACK_IMPORTED_MODULE_16__["CompanyBatchUploadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], CompanyRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_3__["CtModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src-app-modules-company-company-module-es5.js.map