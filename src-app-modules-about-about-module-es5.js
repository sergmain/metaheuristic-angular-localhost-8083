(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-about-about-module"], {
    /***/
    "Afwt": function Afwt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutRoutes", function () {
        return AboutRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
        return AboutRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
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


      var _app_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/guards/auth/auth.guard */
      "fEFe");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _about_root_about_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./about-root/about-root.component */
      "LMcN");
      /* harmony import */


      var _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-index/about-index.component */
      "rxxt");
      /* harmony import */


      var _ct_ct_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ct/ct.module */
      "9kxi");
      /* harmony import */


      var _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/ngmaterial.module */
      "vCXQ");
      /* harmony import */


      var _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../copy-right/copy-right.module */
      "wIh8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutRoutes = [{
        path: '',
        canActivate: [_app_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _about_root_about_root_component__WEBPACK_IMPORTED_MODULE_4__["AboutRootComponent"],
        children: [{
          path: '',
          component: _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_5__["AboutIndexComponent"]
        }]
      }];

      var AboutRoutingModule = function AboutRoutingModule() {
        _classCallCheck(this, AboutRoutingModule);
      };

      AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) {
        return new (t || AboutRoutingModule)();
      };

      AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AboutRoutingModule
      });
      AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(AboutRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      var AboutModule = function AboutModule() {
        _classCallCheck(this, AboutModule);
      };

      AboutModule.ɵfac = function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      };

      AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AboutModule
      });
      AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], AboutRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_6__["CtModule"], _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_8__["CopyRightModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_7__["MaterialAppModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AboutModule, {
          declarations: [_about_root_about_root_component__WEBPACK_IMPORTED_MODULE_4__["AboutRootComponent"], _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_5__["AboutIndexComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], AboutRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_6__["CtModule"], _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_8__["CopyRightModule"], _src_app_ngmaterial_module__WEBPACK_IMPORTED_MODULE_7__["MaterialAppModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "LMcN": function LMcN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutRootComponent", function () {
        return AboutRootComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../about-index/about-index.component */
      "rxxt");
      /* harmony import */


      var _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../copy-right/copy-right/copy-right.component */
      "qyGu");

      var AboutRootComponent = /*#__PURE__*/function () {
        function AboutRootComponent() {
          _classCallCheck(this, AboutRootComponent);
        }

        _createClass(AboutRootComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutRootComponent;
      }();

      AboutRootComponent.ɵfac = function AboutRootComponent_Factory(t) {
        return new (t || AboutRootComponent)();
      };

      AboutRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutRootComponent,
        selectors: [["about-root"]],
        decls: 4,
        vars: 0,
        template: function AboutRootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "about-index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "copy-right");
          }
        },
        directives: [_about_index_about_index_component__WEBPACK_IMPORTED_MODULE_1__["AboutIndexComponent"], _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_2__["CopyRightComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1yb290LmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    "rxxt": function rxxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutIndexComponent", function () {
        return AboutIndexComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../ct/ct-content/ct-content.component */
      "W8U/");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
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

      var AboutIndexComponent = /*#__PURE__*/function () {
        function AboutIndexComponent() {
          _classCallCheck(this, AboutIndexComponent);
        }

        _createClass(AboutIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutIndexComponent;
      }();

      AboutIndexComponent.ɵfac = function AboutIndexComponent_Factory(t) {
        return new (t || AboutIndexComponent)();
      };

      AboutIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutIndexComponent,
        selectors: [["about-index"]],
        decls: 41,
        vars: 0,
        consts: [["size", "1"], ["size", "10"]],
        template: function AboutIndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ct-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ct-cols");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ct-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ct-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About Index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ct-section-body-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam, modi temporibus delectus recusandae impedit dignissimos praesentium reiciendis officia natus, esse deserunt sapiente, dicta dolore ex. Natus facilis provident quibusdam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos minima incidunt consequatur deleniti aspernatur, adipisci voluptatum, quia rem labore veniam enim, perspiciatis sequi! Non, id! Laborum minima cum qui blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam aperiam consequuntur temporibus impedit possimus beatae deleniti ratione velit! Eligendi amet ratione officia assumenda odit et consequatur voluptas dolorum voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem consequuntur accusamus assumenda aliquid excepturi soluta ducimus illum nemo harum sequi. Suscipit natus iusto nam explicabo quaerat sint pariatur, temporibus sunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus voluptas in id distinctio laboriosam vitae facilis dignissimos a. Labore excepturi sit amet nostrum omnis voluptas asperiores tenetur impedit alias incidunt!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_1__["CtContentComponent"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_2__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_3__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_9__["CtSectionBodyRowComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-about-about-module-es5.js.map