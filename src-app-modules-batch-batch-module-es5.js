(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-batch-batch-module"], {
    /***/
    "C0/c": function C0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchListComponent", function () {
        return BatchListComponent;
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


      var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @biesbjerg/ngx-translate-extract-marker */
      "4u49");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/components/app-dialog-confirmation/app-dialog-confirmation.component */
      "lJGJ");
      /* harmony import */


      var _src_app_enums_BatchExecState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/enums/BatchExecState */
      "YcRZ");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_batch_batch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/services/batch/batch.service */
      "Hz+5");
      /* harmony import */


      var _src_app_services_batch_BatchExecStatusService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/services/batch/BatchExecStatusService */
      "LazG");
      /* harmony import */


      var _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
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

      function BatchListComponent_ct_section_0_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
        }
      }

      function BatchListComponent_ct_section_0_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u2713\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function BatchListComponent_ct_section_0_span_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u2717\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function BatchListComponent_ct_section_0_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.Id"));
        }
      }

      function BatchListComponent_ct_section_0_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", el_r26.batch.id, " ");
        }
      }

      function BatchListComponent_ct_section_0_th_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.Created On"), "\n                        ");
        }
      }

      function BatchListComponent_ct_section_0_td_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, el_r27.batch.createdOn, "MMM d, yyyy, HH:mm:ss"), " ");
        }
      }

      function BatchListComponent_ct_section_0_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.Owner's username"), "\n                        ");
        }
      }

      function BatchListComponent_ct_section_0_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](el_r28.username);
        }
      }

      function BatchListComponent_ct_section_0_th_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.Is Batch Consistent?"), " ");
        }
      }

      function BatchListComponent_ct_section_0_td_76_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.true"));
        }
      }

      function BatchListComponent_ct_section_0_td_76_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.false"));
        }
      }

      function BatchListComponent_ct_section_0_td_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BatchListComponent_ct_section_0_td_76_span_2_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BatchListComponent_ct_section_0_td_76_span_3_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", el_r29.ok);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !el_r29.ok);
        }
      }

      function BatchListComponent_ct_section_0_th_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "batch.Source Code"));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 4, "batch.File name"));
        }
      }

      function BatchListComponent_ct_section_0_td_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](el_r32.sourceCodeUid);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](el_r32.uploadedFileName);
        }
      }

      function BatchListComponent_ct_section_0_th_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.Exec State"), "\n                        ");
        }
      }

      function BatchListComponent_ct_section_0_td_90_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.Error"), "\n                            ");
        }
      }

      function BatchListComponent_ct_section_0_td_90_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.Preparing"), "\n                            ");
        }
      }

      function BatchListComponent_ct_section_0_td_90_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.Processing"), "\n                            ");
        }
      }

      function BatchListComponent_ct_section_0_td_90_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "batch.isBatchConsistent.Finished"), "\n                            ");
        }
      }

      function BatchListComponent_ct_section_0_td_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BatchListComponent_ct_section_0_td_90_span_2_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BatchListComponent_ct_section_0_td_90_span_4_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BatchListComponent_ct_section_0_td_90_span_6_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BatchListComponent_ct_section_0_td_90_span_8_Template, 3, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", el_r33.execState === -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", el_r33.execState === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", el_r33.execState === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", el_r33.execState === 4);
        }
      }

      function BatchListComponent_ct_section_0_th_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1, a3, a5) {
        return ["/batch", a1, "source-code", a3, "exec-context", a5, "state"];
      };

      var _c1 = function _c1(a1) {
        return ["/batch", a1, "status"];
      };

      function BatchListComponent_ct_section_0_td_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ct-flex", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\n\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BatchListComponent_ct_section_0_td_97_Template_button_click_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);

            var el_r38 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r39.downloadFile($event, el_r38.batch.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "\n\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BatchListComponent_ct_section_0_td_97_Template_button_click_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);

            var el_r38 = ctx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r41["delete"]($event, el_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "\n                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "\n                                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", el_r38.execContextDeleted)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](14, _c0, el_r38.batch.id, el_r38.batch.sourceCodeId, el_r38.batch.execContextId));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                        ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 8, "batch.Task states"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", el_r38.execState !== 4 || el_r38.execContextDeleted)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](18, _c1, el_r38.batch.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                        ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 10, "batch.Status"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", el_r38.execState !== 4 || el_r38.execContextDeleted);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n                                        ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 12, "batch.Download Result"), "");
        }
      }

      function BatchListComponent_ct_section_0_tr_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function BatchListComponent_ct_section_0_tr_102_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BatchListComponent_ct_section_0_tr_102_Template_tr_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44);

            var row_r42 = ctx.$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r43.selectRow($event, row_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r42 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("deleted-table-row", ctx_r23.isDeletedRow(row_r42))("selected-color", ctx_r23.isSelectedRow(row_r42));
        }
      }

      function BatchListComponent_ct_section_0_ct_flex_item_119_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ct-flex", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BatchListComponent_ct_section_0_ct_flex_item_119_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r45.downloadSelectedRows();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BatchListComponent_ct_section_0_ct_flex_item_119_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r47.discardSelectedRows();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 4, "batch.Batch"), " \xD7 ", ctx_r24.countOfSelectedRows(), "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 6, "batch.Download"));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 8, "batch.Discard"));
        }
      }

      function BatchListComponent_ct_section_0_ng_container_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
        }
      }

      function BatchListComponent_ct_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ct-flex", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "ct-flex", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, BatchListComponent_ct_section_0_ng_container_21_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BatchListComponent_ct_section_0_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r48.toggleFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, BatchListComponent_ct_section_0_span_28_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, BatchListComponent_ct_section_0_span_30_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "ct-table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](51, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, BatchListComponent_ct_section_0_th_53_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, BatchListComponent_ct_section_0_td_55_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](58, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, BatchListComponent_ct_section_0_th_60_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](62, BatchListComponent_ct_section_0_td_62_Template, 3, 4, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](65, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](67, BatchListComponent_ct_section_0_th_67_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, BatchListComponent_ct_section_0_td_69_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](72, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, BatchListComponent_ct_section_0_th_74_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, BatchListComponent_ct_section_0_td_76_Template, 4, 2, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](79, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](81, BatchListComponent_ct_section_0_th_81_Template, 10, 6, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](83, BatchListComponent_ct_section_0_td_83_Template, 8, 2, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](86, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](88, BatchListComponent_ct_section_0_th_88_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](89, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](90, BatchListComponent_ct_section_0_td_90_Template, 10, 4, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](93, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](95, BatchListComponent_ct_section_0_th_95_Template, 2, 0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](97, BatchListComponent_ct_section_0_td_97_Template, 35, 20, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](98, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](100, BatchListComponent_ct_section_0_tr_100_Template, 2, 0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](102, BatchListComponent_ct_section_0_tr_102_Template, 1, 4, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](108, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](109, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "ct-flex", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "ct-table-pagination", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("prev", function BatchListComponent_ct_section_0_Template_ct_table_pagination_prev_116_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r50.prevPage();
          })("next", function BatchListComponent_ct_section_0_Template_ct_table_pagination_next_116_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r51.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](118, "\n\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](119, BatchListComponent_ct_section_0_ct_flex_item_119_Template, 26, 10, "ct-flex-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](120, "\n\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](123, BatchListComponent_ct_section_0_ng_container_123_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](126, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 13, "batch.Batch"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isFiltered);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.isFiltered);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](34, 15, "batch.onlyMyBatches"));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isWaiting", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageableDefault", ctx_r0.batchesResult.batches);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.countOfSelectedRows());

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      function BatchListComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n        ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "batch.Upload files and start processing"), "");
        }
      }

      function BatchListComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n        ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "batch.Upload files and start processing"), "");
        }
      }

      var BatchListComponent = /*#__PURE__*/function (_src_app_models_UISta) {
        _inherits(BatchListComponent, _src_app_models_UISta);

        var _super = _createSuper(BatchListComponent);

        function BatchListComponent(batchService, authenticationService, dialog, translate, batchExexStatusService, settingsService) {
          var _this;

          _classCallCheck(this, BatchListComponent);

          _this = _super.call(this, authenticationService);
          _this.batchService = batchService;
          _this.authenticationService = authenticationService;
          _this.dialog = dialog;
          _this.translate = translate;
          _this.batchExexStatusService = batchExexStatusService;
          _this.settingsService = settingsService;
          _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
          _this.columnsToDisplay = ['id', 'createdOn', 'Owner', 'isBatchConsistent', 'sourceCode', 'execState', 'bts'];
          return _this;
        }

        _createClass(BatchListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.isFiltered = this.settingsService.events.value.settings.batchFilter;
            this.updateTable('0', this.isFiltered);
            this.subscribeSubscription(this.batchExexStatusService.getStatuses.subscribe({
              next: function next(statuses) {
                _this2.batchExexStatusService.updateBatchesResultByStatuses(_this2.batchesResult, statuses);
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeSubscriptions();
          }
        }, {
          key: "updateTable",
          value: function updateTable(pageNumbder, isFiltered) {
            var _this3 = this;

            this.isLoading = true;
            this.batchService.batches(pageNumbder, isFiltered).subscribe({
              next: function next(batchesResult) {
                _this3.batchesResult = batchesResult;
                _this3.columnsToDisplay = _this3.authenticationService.isRoleOperator() ? ['id', 'createdOn', 'Owner', 'sourceCode', 'execState', 'bts'] : ['id', 'createdOn', 'Owner', 'isBatchConsistent', 'sourceCode', 'execState', 'bts'];
                _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](batchesResult.batches.content || []);
                _this3.isLoading = false;
              }
            });
          }
        }, {
          key: "toggleFilter",
          value: function toggleFilter() {
            this.isFiltered = !this.isFiltered;
            this.settingsService.toggleBatchFilter(this.isFiltered);
            this.updateTable('0', this.isFiltered);
          }
        }, {
          key: "isDeletedRow",
          value: function isDeletedRow(b) {
            return false;
          }
        }, {
          key: "delete",
          value: function _delete(event, batchData) {
            var _this4 = this;

            this.batchService.processResourceDeleteCommit(batchData.batch.id.toString()).subscribe({
              next: function next() {
                _this4.updateTable(_this4.batchesResult.batches.number.toString(), _this4.isFiltered);
              }
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(event, batchId) {
            event.stopPropagation();
            this.batchService.downloadFile(batchId).subscribe(function (res) {
              var _a, _b, _c;

              var tryname = (_c = (_b = (_a = res.headers.get('Content-Disposition')) === null || _a === void 0 ? void 0 : _a.split) === null || _b === void 0 ? void 0 : _b.call(_a, '\'\'')) === null || _c === void 0 ? void 0 : _c[1];
              file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"](res.body, tryname ? tryname : 'result.zip');
            });
          }
        }, {
          key: "downloadSelectedRows",
          value: function downloadSelectedRows() {
            this.batchService.batchDownloader.download();
          }
        }, {
          key: "discardSelectedRows",
          value: function discardSelectedRows() {
            this.batchService.batchDownloader.clear();
          }
        }, {
          key: "isSelectedRow",
          value: function isSelectedRow(batchData) {
            return this.batchService.batchDownloader.isSelected(batchData);
          }
        }, {
          key: "selectRow",
          value: function selectRow(event, batchData) {
            event.stopPropagation();

            if (batchData.ok && batchData.execState === _src_app_enums_BatchExecState__WEBPACK_IMPORTED_MODULE_5__["BatchExecState"].Finished) {
              this.batchService.batchDownloader.toggle(batchData);
            }
          }
        }, {
          key: "countOfSelectedRows",
          value: function countOfSelectedRows() {
            return this.batchService.batchDownloader.size;
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.updateTable((this.batchesResult.batches.number + 1).toString(), this.isFiltered);
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.updateTable((this.batchesResult.batches.number - 1).toString(), this.isFiltered);
          }
        }]);

        return BatchListComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_6__["UIStateComponent"]);

      BatchListComponent.ɵfac = function BatchListComponent_Factory(t) {
        return new (t || BatchListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_src_app_services_batch_batch_service__WEBPACK_IMPORTED_MODULE_8__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_src_app_services_batch_BatchExecStatusService__WEBPACK_IMPORTED_MODULE_9__["BatchExexStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]));
      };

      BatchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: BatchListComponent,
        selectors: [["batch-list"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 1,
        consts: [[4, "ngIf"], ["uploadFilesButton", ""], ["justify-content", "space-between", "align-items", "center", "gap", "unit(1)"], ["justify-content", "flex-end", "align-items", "center", "gap", "unit(1)"], [4, "ngTemplateOutlet"], ["mat-stroked-button", "", 3, "disabled", "click"], ["style", "vertical-align: baseline;", 4, "ngIf"], [3, "isWaiting"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "createdOn"], ["matColumnDef", "Owner"], ["matColumnDef", "isBatchConsistent"], ["matColumnDef", "sourceCode"], ["matColumnDef", "execState"], ["matColumnDef", "bts"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "deleted-table-row", "selected-color", "click", 4, "matRowDef", "matRowDefColumns"], ["justify-content", "space-between", "align-items", "center"], [3, "pageableDefault", "prev", "next"], [2, "vertical-align", "baseline"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "no-wrap"], ["justify-content", "flex-end", "gap", "9px"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "disabled", "routerLink"], ["mat-flat-button", "", "size", "forTableRow", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "size", "forTableRow", "title", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["justify-content", "center", "align-items", "center", "gap", "unit(1)"], [1, "selected-count"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", "routerLink", "/batch/add", 3, "disabled"]],
        template: function BatchListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, BatchListComponent_ct_section_0_Template, 129, 17, "ct-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BatchListComponent_ng_template_2_Template, 5, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BatchListComponent_ng_template_5_Template, 5, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.batchesResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_15__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionHeaderRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_17__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_18__["CtFlexItemComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_19__["CtHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_21__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_22__["CtSectionBodyRowComponent"], _ct_ct_table_ct_table_component__WEBPACK_IMPORTED_MODULE_23__["CtTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_24__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_25__["CtSectionFooterRowComponent"], _ct_ct_table_pagination_ct_table_pagination_component__WEBPACK_IMPORTED_MODULE_26__["CtTablePaginationComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [".selected-color[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.18);\n}\n\n.selected-count[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.18);\n  border-radius: 4px;\n  padding: 10px 20px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmF0Y2gtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxtQ0NHdUI7QURMM0I7O0FBS0E7RUFDSSxtQ0NEdUI7RURFdkIsa0JBQUE7RUFDQSxzQkFBQTtBQUZKIiwiZmlsZSI6ImJhdGNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vYmF0Y2guc2Nzc1wiO1xyXG5cclxuXHJcbi5zZWxlY3RlZC1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdGFibGUtcm93LXNlbGVjdGVkO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtY291bnQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXRhYmxlLXJvdy1zZWxlY3RlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCA4cHg7XHJcbn0iLCJAZnVuY3Rpb24gdW5pdCgkYSkge1xyXG4gICAgQHJldHVybiAkYSAqIDlweFxyXG59XHJcblxyXG5cclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ1JvYm90byBNb25vJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG5cclxuJGNvbG9yLXRhYmxlLXJvdy1zZWxlY3RlZDogcmdiYSgyNTUsIDE5MywgNywgMC4xOCk7XHJcblxyXG4kY29sb3ItbGluazogIzQyYThmZjtcclxuJGNvbG9yLWxpbmstaG92ZXI6IG9yYW5nZTsiXX0= */"]
      });

      __decorate([Object(_src_app_components_app_dialog_confirmation_app_dialog_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogMethod"])({
        question: function question(event, batchData) {
          event.stopPropagation();
          return {
            text: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__["marker"])('batch.delete-dialog.Do you want to delete Batch _batchId_'),
            params: {
              batchId: batchData.batch.id
            }
          };
        },
        rejectTitle: "".concat(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__["marker"])('batch.delete-dialog.Cancel')),
        resolveTitle: "".concat(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__["marker"])('batch.delete-dialog.Delete'))
      }), __metadata("design:type", Function), __metadata("design:paramtypes", [Event, Object]), __metadata("design:returntype", void 0)], BatchListComponent.prototype, "delete", null);
      /***/

    },

    /***/
    "HgcP": function HgcP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchStateComponent", function () {
        return BatchStateComponent;
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


      var _ct_ct_state_of_tasks_ct_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ct/ct-state-of-tasks/ct-state-of-tasks.component */
      "2qjw");

      var BatchStateComponent = function BatchStateComponent(route) {
        _classCallCheck(this, BatchStateComponent);

        this.route = route;
        this.sourceCodeId = this.route.snapshot.paramMap.get('sourceCodeId');
        this.execContextId = this.route.snapshot.paramMap.get('execContextId');
      };

      BatchStateComponent.ɵfac = function BatchStateComponent_Factory(t) {
        return new (t || BatchStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      BatchStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BatchStateComponent,
        selectors: [["batch-state"]],
        decls: 19,
        vars: 2,
        consts: [[3, "sourceCodeId", "execContextId"]],
        template: function BatchStateComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ct-state-of-tasks", 0);

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
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_2__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_3__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_5__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_7__["CtSectionBodyRowComponent"], _ct_ct_state_of_tasks_ct_state_of_tasks_component__WEBPACK_IMPORTED_MODULE_8__["CtStateOfTasksComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXRjaC1zdGF0ZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    "NGwn": function NGwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchAddComponent", function () {
        return BatchAddComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_batch_batch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/services/batch/batch.service */
      "Hz+5");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/enums/OperationStatus */
      "uB0V");
      /* harmony import */


      var _src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/models/UIStateComponent */
      "FzDw");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ct/ct-file-upload/ct-file-upload.component */
      "MbdJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-cols/ct-cols.component */
      "I6qf");
      /* harmony import */


      var _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-col/ct-col.component */
      "MI58");
      /* harmony import */


      var _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ct/ct-section/ct-section.component */
      "2ljo");
      /* harmony import */


      var _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ct/ct-section-header/ct-section-header.component */
      "1P+h");
      /* harmony import */


      var _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../ct/ct-section-header-row/ct-section-header-row.component */
      "25/r");
      /* harmony import */


      var _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../ct/ct-heading/ct-heading.component */
      "Xc1m");
      /* harmony import */


      var _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../ct/ct-section-body/ct-section-body.component */
      "Ne1S");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ct_ct_hint_ct_hint_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../ct/ct-hint/ct-hint.component */
      "PVyz");
      /* harmony import */


      var _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../ct/ct-section-footer/ct-section-footer.component */
      "FMVq");
      /* harmony import */


      var _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../ct/ct-section-footer-row/ct-section-footer-row.component */
      "V6TR");
      /* harmony import */


      var _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../ct/ct-flex/ct-flex.component */
      "CaYE");
      /* harmony import */


      var _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../ct/ct-flex-item/ct-flex-item.component */
      "No2e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../ct/ct-rest-status/ct-rest-status.component */
      "05qC");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["fileUpload"];

      function BatchAddComponent_ct_cols_0_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sourceCode_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", sourceCode_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](sourceCode_r3.uid);
        }
      }

      function BatchAddComponent_ct_cols_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ct-cols");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ct-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ct-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ct-section-header-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ct-heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ct-section-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function BatchAddComponent_ct_cols_0_Template_mat_select_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r4.sourceCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, BatchAddComponent_ct_cols_0_div_28_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\n\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "\n\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "ct-file-upload", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changed", function BatchAddComponent_ct_cols_0_Template_ct_file_upload_changed_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r6.fileUploadChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "ct-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "ct-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "ct-section-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "ct-section-footer-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "ct-flex", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BatchAddComponent_ct_cols_0_Template_button_click_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r7.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](68, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "ct-flex-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\n                            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BatchAddComponent_ct_cols_0_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r8.upload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "\n                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "ct-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "ct-rest-status", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 12, "batch-add.Upload file for processing"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 14, "batch-add.List of Source Codes"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.sourceCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.listOfSourceCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 16, "batch-add.This is a required field."));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("buttonTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 18, "batch-add.Select File"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 20, "batch-add.This is a required field."));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 22, "batch-add.Only .xml and .zip files are supported"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](68, 24, "batch-add.Cancel"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.sourceCode || !ctx_r0.file);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](75, 26, "batch-add.Upload-File-button"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("content", ctx_r0.uploadResponse);
        }
      }

      var BatchAddComponent = /*#__PURE__*/function (_src_app_models_UISta2) {
        _inherits(BatchAddComponent, _src_app_models_UISta2);

        var _super2 = _createSuper(BatchAddComponent);

        function BatchAddComponent(batchService, router, route, translate, settingsService, authenticationService) {
          var _this5;

          _classCallCheck(this, BatchAddComponent);

          _this5 = _super2.call(this, authenticationService);
          _this5.batchService = batchService;
          _this5.router = router;
          _this5.route = route;
          _this5.translate = translate;
          _this5.settingsService = settingsService;
          _this5.authenticationService = authenticationService;
          _this5.currentStates = new Set();
          _this5.listOfSourceCodes = [];
          return _this5;
        }

        _createClass(BatchAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.subscribeSubscription(this.settingsService.events.subscribe(function (event) {
              if (event instanceof _src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsServiceEventChange"]) {
                _this6.translate.use(event.settings.language);
              }
            }));
            this.updateResponse();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeSubscriptions();
          }
        }, {
          key: "updateResponse",
          value: function updateResponse() {
            var _this7 = this;

            this.batchService.batchAdd().subscribe(function (response) {
              _this7.response = response;
              _this7.listOfSourceCodes = _this7.response.items;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this8 = this;

            this.batchService.uploadFile(this.sourceCode.id.toString(), this.fileUpload.fileInput.nativeElement.files[0]).subscribe(function (response) {
              if (response.status === _src_app_enums_OperationStatus__WEBPACK_IMPORTED_MODULE_3__["OperationStatus"].OK) {
                _this8.back();
              }

              _this8.uploadResponse = response;
            });
          }
        }, {
          key: "fileUploadChanged",
          value: function fileUploadChanged() {
            this.file = this.fileUpload.fileInput.nativeElement.files[0] || false;
          }
        }]);

        return BatchAddComponent;
      }(_src_app_models_UIStateComponent__WEBPACK_IMPORTED_MODULE_4__["UIStateComponent"]);

      BatchAddComponent.ɵfac = function BatchAddComponent_Factory(t) {
        return new (t || BatchAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_batch_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
      };

      BatchAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: BatchAddComponent,
        selectors: [["batch-add"]],
        viewQuery: function BatchAddComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["size", "6"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["acceptTypes", ".zip, .xml", 3, "buttonTitle", "changed"], ["fileUpload", ""], ["justify-content", "flex-end", "gap", "8px"], ["mat-stroked-button", "mat-stroked-button", 3, "click"], ["mat-flat-button", "mat-flat-button", "color", "primary", 3, "disabled", "click"], [3, "content"], [3, "value"]],
        template: function BatchAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, BatchAddComponent_ct_cols_0_Template, 88, 28, "ct-cols", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.response);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ct_ct_cols_ct_cols_component__WEBPACK_IMPORTED_MODULE_10__["CtColsComponent"], _ct_ct_col_ct_col_component__WEBPACK_IMPORTED_MODULE_11__["CtColComponent"], _ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_12__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_13__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_14__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_15__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_16__["CtSectionBodyComponent"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_17__["CtSectionBodyRowComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatHint"], _ct_ct_file_upload_ct_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["CtFileUploadComponent"], _ct_ct_hint_ct_hint_component__WEBPACK_IMPORTED_MODULE_21__["CtHintComponent"], _ct_ct_section_footer_ct_section_footer_component__WEBPACK_IMPORTED_MODULE_22__["CtSectionFooterComponent"], _ct_ct_section_footer_row_ct_section_footer_row_component__WEBPACK_IMPORTED_MODULE_23__["CtSectionFooterRowComponent"], _ct_ct_flex_ct_flex_component__WEBPACK_IMPORTED_MODULE_24__["CtFlexComponent"], _ct_ct_flex_item_ct_flex_item_component__WEBPACK_IMPORTED_MODULE_25__["CtFlexItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButton"], _ct_ct_rest_status_ct_rest_status_component__WEBPACK_IMPORTED_MODULE_27__["CtRestStatusComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmF0Y2gtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQUFKIiwiZmlsZSI6ImJhdGNoLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "gFOi": function gFOi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchRoutes", function () {
        return BatchRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchRoutingModule", function () {
        return BatchRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchModule", function () {
        return BatchModule;
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


      var _ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ngmaterial.module */
      "vCXQ");
      /* harmony import */


      var _batch_status_batch_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./batch-status/batch-status.component */
      "x1QE");
      /* harmony import */


      var _batch_add_batch_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./batch-add/batch-add.component */
      "NGwn");
      /* harmony import */


      var _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ct/ct.module */
      "9kxi");
      /* harmony import */


      var _batch_root_batch_root_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./batch-root/batch-root.component */
      "z6sL");
      /* harmony import */


      var _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../copy-right/copy-right.module */
      "wIh8");
      /* harmony import */


      var _batch_state_batch_state_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./batch-state/batch-state.component */
      "HgcP");
      /* harmony import */


      var _batch_list_batch_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./batch-list/batch-list.component */
      "C0/c");
      /* harmony import */


      var _src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/guards/role-route.guard */
      "iuQL");
      /* harmony import */


      var _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @src/app/services/authentication */
      "q4ZW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var commonRequiredRoles = [_src_app_services_authentication__WEBPACK_IMPORTED_MODULE_13__["Role"].Admin, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_13__["Role"].Data, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_13__["Role"].Manager, _src_app_services_authentication__WEBPACK_IMPORTED_MODULE_13__["Role"].Operator];
      var BatchRoutes = [{
        path: '',
        component: _batch_root_batch_root_component__WEBPACK_IMPORTED_MODULE_8__["BatchRootComponent"],
        canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_12__["RoleRouteGuard"]],
        data: {
          requiredRoles: commonRequiredRoles
        },
        children: [{
          path: '',
          component: _batch_list_batch_list_component__WEBPACK_IMPORTED_MODULE_11__["BatchListComponent"],
          canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_12__["RoleRouteGuard"]],
          data: {
            requiredRoles: commonRequiredRoles
          }
        }, {
          path: ':batchId/status',
          component: _batch_status_batch_status_component__WEBPACK_IMPORTED_MODULE_5__["BatchStatusComponent"],
          canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_12__["RoleRouteGuard"]],
          data: {
            backConfig: ['../', '../'],
            requiredRoles: commonRequiredRoles
          }
        }, {
          path: 'add',
          component: _batch_add_batch_add_component__WEBPACK_IMPORTED_MODULE_6__["BatchAddComponent"],
          canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_12__["RoleRouteGuard"]],
          data: {
            backConfig: ['../'],
            requiredRoles: commonRequiredRoles
          }
        }, {
          path: ':batchId/source-code/:sourceCodeId/exec-context/:execContextId/state',
          component: _batch_state_batch_state_component__WEBPACK_IMPORTED_MODULE_10__["BatchStateComponent"],
          canActivate: [_src_app_guards_role_route_guard__WEBPACK_IMPORTED_MODULE_12__["RoleRouteGuard"]],
          data: {
            backConfig: ['../', '../', '../', '../', '../', '../'],
            requiredRoles: commonRequiredRoles
          }
        }]
      }];

      var BatchRoutingModule = function BatchRoutingModule() {
        _classCallCheck(this, BatchRoutingModule);
      };

      BatchRoutingModule.ɵfac = function BatchRoutingModule_Factory(t) {
        return new (t || BatchRoutingModule)();
      };

      BatchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: BatchRoutingModule
      });
      BatchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(BatchRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](BatchRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();

      var BatchModule = function BatchModule() {
        _classCallCheck(this, BatchModule);
      };

      BatchModule.ɵfac = function BatchModule_Factory(t) {
        return new (t || BatchModule)();
      };

      BatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: BatchModule
      });
      BatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], BatchRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"], _ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_9__["CopyRightModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({})]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](BatchModule, {
          declarations: [_batch_root_batch_root_component__WEBPACK_IMPORTED_MODULE_8__["BatchRootComponent"], _batch_status_batch_status_component__WEBPACK_IMPORTED_MODULE_5__["BatchStatusComponent"], _batch_add_batch_add_component__WEBPACK_IMPORTED_MODULE_6__["BatchAddComponent"], _batch_state_batch_state_component__WEBPACK_IMPORTED_MODULE_10__["BatchStateComponent"], _batch_list_batch_list_component__WEBPACK_IMPORTED_MODULE_11__["BatchListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], BatchRoutingModule, _ct_ct_module__WEBPACK_IMPORTED_MODULE_7__["CtModule"], _ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _copy_right_copy_right_module__WEBPACK_IMPORTED_MODULE_9__["CopyRightModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "x1QE": function x1QE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchStatusComponent", function () {
        return BatchStatusComponent;
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


      var _app_services_batch_batch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/services/batch/batch.service */
      "Hz+5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ct/ct-section-body-row/ct-section-body-row.component */
      "Kt2f");
      /* harmony import */


      var _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ct/ct-pre/ct-pre.component */
      "IRPT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function BatchStatusComponent_ct_section_body_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ct-section-body-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ct-pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.response.console);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          batchId: a0
        };
      };

      var _c1 = function _c1(a0, a1) {
        return [a0, a1];
      };

      var BatchStatusComponent = /*#__PURE__*/function () {
        function BatchStatusComponent(route, batchService, router) {
          _classCallCheck(this, BatchStatusComponent);

          this.route = route;
          this.batchService = batchService;
          this.router = router;
          this.states = _app_enums_LoadStates__WEBPACK_IMPORTED_MODULE_1__["LoadStates"];
          this.currentState = _app_enums_LoadStates__WEBPACK_IMPORTED_MODULE_1__["LoadStates"].firstLoading;
        }

        _createClass(BatchStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.batchId = this.route.snapshot.paramMap.get('batchId');
            this.updateResponse();
          }
        }, {
          key: "updateResponse",
          value: function updateResponse() {
            var _this9 = this;

            this.batchService.getProcessingResourceStatus(this.batchId).subscribe(function (response) {
              _this9.response = response;
              _this9.currentState = _this9.states.show;
            });
          }
        }]);

        return BatchStatusComponent;
      }();

      BatchStatusComponent.ɵfac = function BatchStatusComponent_Factory(t) {
        return new (t || BatchStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services_batch_batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      BatchStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: BatchStatusComponent,
        selectors: [["batch-status"]],
        decls: 21,
        vars: 10,
        consts: [[4, "ngIf"]],
        template: function BatchStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ct-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ct-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ct-section-header-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ct-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "  \n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ct-section-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, BatchStatusComponent_ct_section_body_row_18_Template, 5, 1, "ct-section-body-row", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 2, "batch-status.Status of execution of batch _batchId_", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.batchId)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c1, ctx.states.wait, ctx.states.show).includes(ctx.currentState));
          }
        },
        directives: [_ct_ct_section_ct_section_component__WEBPACK_IMPORTED_MODULE_4__["CtSectionComponent"], _ct_ct_section_header_ct_section_header_component__WEBPACK_IMPORTED_MODULE_5__["CtSectionHeaderComponent"], _ct_ct_section_header_row_ct_section_header_row_component__WEBPACK_IMPORTED_MODULE_6__["CtSectionHeaderRowComponent"], _ct_ct_heading_ct_heading_component__WEBPACK_IMPORTED_MODULE_7__["CtHeadingComponent"], _ct_ct_section_body_ct_section_body_component__WEBPACK_IMPORTED_MODULE_8__["CtSectionBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ct_ct_section_body_row_ct_section_body_row_component__WEBPACK_IMPORTED_MODULE_10__["CtSectionBodyRowComponent"], _ct_ct_pre_ct_pre_component__WEBPACK_IMPORTED_MODULE_11__["CtPreComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        styles: ["pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmF0Y2gtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImJhdGNoLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "z6sL": function z6sL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchRootComponent", function () {
        return BatchRootComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ct_ct_back_button_ct_back_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ct/ct-back-button/ct-back-button.component */
      "6Q+1");
      /* harmony import */


      var _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../copy-right/copy-right/copy-right.component */
      "qyGu");

      var BatchRootComponent = /*#__PURE__*/function () {
        function BatchRootComponent() {
          _classCallCheck(this, BatchRootComponent);
        }

        _createClass(BatchRootComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BatchRootComponent;
      }();

      BatchRootComponent.ɵfac = function BatchRootComponent_Factory(t) {
        return new (t || BatchRootComponent)();
      };

      BatchRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BatchRootComponent,
        selectors: [["batch-root"]],
        decls: 8,
        vars: 0,
        template: function BatchRootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ct-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ct-back-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "copy-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ct_ct_content_ct_content_component__WEBPACK_IMPORTED_MODULE_1__["CtContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _ct_ct_back_button_ct_back_button_component__WEBPACK_IMPORTED_MODULE_3__["CtBackButtonComponent"], _copy_right_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_4__["CopyRightComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXRjaC1yb290LmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-batch-batch-module-es5.js.map