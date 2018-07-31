webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/core/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2MultiStepFormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__ = __webpack_require__("../../../../../src/app/modules/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__["a" /* LandingComponent */] }
];
var Ng2MultiStepFormRoutingModule = (function () {
    function Ng2MultiStepFormRoutingModule() {
    }
    return Ng2MultiStepFormRoutingModule;
}());
Ng2MultiStepFormRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], Ng2MultiStepFormRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import \"node_modules/loaders.css/src/loaders\";*/\r\n\r\nmd-toolbar {\r\n  padding: 0 0 0 5px !important;\r\n}\r\n\r\n.md-elevation-z3 {\r\n  height: 35px;\r\n  background: rgba(245, 245, 245, 0.71) !important;\r\n  padding: 5px 0 0 5px;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n\r\n.logo-span {\r\n\tfloat:left;\r\n\tmargin-left: 16px;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n}\r\n\r\n.menu-span {\r\n\tfloat:right;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\tposition: absolute;\r\n\tright: 21px;\r\n}\r\n\r\n\r\ni {\r\n\tfont-size: 36px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"md-elevation-z3\">\r\n  <span class=\"logo-span\" ><i class=\"material-icons user logo\">stars</i><span class=\"title\">{{title}}</span></span>\r\n\r\n  <span class=\"menu-span\" style=\"float:right;\" >\r\n    <i class=\"material-icons user\" [mdMenuTriggerFor]=\"menu\">account_circle</i>\r\n    <i class=\"material-icons user\">help_outline</i>\r\n  </span>\r\n</md-toolbar>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon>dialpad</md-icon>\r\n    Settings\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon>notifications_off</md-icon>\r\n    <span>Exit</span>\r\n  </button>\r\n</md-menu>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'Placeholder for some tag line in the future';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/core/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

// public static API_ENDPOINT: string =  "http://localhost:4000/api/v1";
AppConfig.API_ENDPOINT = "api/v1";
;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/core/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularModuleConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/core/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_articles_articleFormDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_articles_articleAgreeDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_landing_landing_component__ = __webpack_require__("../../../../../src/app/modules/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_D3Service__ = __webpack_require__("../../../../../src/app/shared/services/D3Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__("../../../../../src/app/core/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/core/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function RestangularModuleConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* AppConfig */].API_ENDPOINT);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__modules_landing_landing_component__["a" /* LandingComponent */], __WEBPACK_IMPORTED_MODULE_9__modules_articles_articleAgreeDialog_component__["a" /* ArticleAgreeDialog */], __WEBPACK_IMPORTED_MODULE_8__modules_articles_articleFormDialog_component__["a" /* ArticleFormDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* Ng2MultiStepFormRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__["RestangularModule"].forRoot(RestangularModuleConfigFactory),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__shared_services_D3Service__["a" /* D3Service */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__modules_articles_articleAgreeDialog_component__["a" /* ArticleAgreeDialog */], __WEBPACK_IMPORTED_MODULE_8__modules_articles_articleFormDialog_component__["a" /* ArticleFormDialog */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleAgreeDialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".agree-container {\r\n\tfloat: left;\r\n}\r\n\r\n.disagree-container {\r\n\tfloat: right;\r\n}\r\n\r\n.desc-text {\r\n\twidth: 100%;\r\n\tmargin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleAgreeDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>{{title}}</h2>\r\n<div>\r\n\t<div class=\"agree-container\">\r\n\t\t<b>Agree</b>\r\n\t\t<button md-icon-button color=\"primary\" (click)=\"vote('agree')\">\r\n\t\t\t<i class=\"material-icons\">thumb_up</i>\r\n\t\t</button>\r\n\t\t{{node.votes.agrees}}\r\n\t</div>\r\n\t<div class=\"disagree-container\">\r\n\t\tDisgree\r\n\t\t<button md-icon-button color=\"warn\" (click)=\"vote('disagree')\">\r\n\t\t\t<i class=\"material-icons\">thumb_down</i>\r\n\t\t</button>\r\n\t\t{{node.votes.disagrees}}\r\n\t</div>\r\n\r\n\r\n\t<textarea md-maxlength=\"150\" rows=\"5\"  md-select-on-focus class=\"desc-text\" readonly=\"readonly\">{{(node.nodeData.g == 'g5') ? node.nodeData.text : node.group.description}}</textarea>\r\n<div>\r\n<!-- <button md-button class=\"agree\" (click)=\"closeDialog()\">Agree</button>\r\n<button md-button class=\"disagree\" (click)=\"closeDialog()\">Disgree</button> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleAgreeDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleAgreeDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ArticleAgreeDialog = (function () {
    function ArticleAgreeDialog(data, dialogRef, restangular) {
        this.dialogRef = dialogRef;
        this.restangular = restangular;
        this.dialogRef.updateSize('300', '300');
        this.node = data.node;
    }
    ArticleAgreeDialog.prototype.ngOnInit = function () {
        if (this.node.nodeData.g == 'g5') {
            this.title = 'Comment';
        }
        else {
            this.title = this.node.group.name;
        }
    };
    ArticleAgreeDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ArticleAgreeDialog.prototype.vote = function (vote) {
        var _this = this;
        this.restangular.one('article', this.node.nodeData.article_id).one(this.node.nodeData.g == 'g5' ? 'comment' : 'group', this.node._id).customPOST({}, 'vote/' + vote).subscribe(function (res) {
            if (vote == 'agree')
                _this.node.votes.agrees++;
            else if (vote == 'disagree')
                _this.node.votes.disagrees++;
            _this.dialogRef.close();
        });
    };
    return ArticleAgreeDialog;
}());
ArticleAgreeDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'articleAgreeDialog',
        template: __webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _b || Object])
], ArticleAgreeDialog);

var _a, _b;
//# sourceMappingURL=articleAgreeDialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleFormDialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  width: 90%;\r\n  margin: 0px auto;\r\n}\r\n\r\n  .content button {\r\n    margin-top: 20px;\r\n  }\r\n.article-content {\r\n  width: 100%;\r\n  height: 120px;\r\n  margin: 0px auto;\r\n}\r\n.article-content .article-image {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tfloat: left;\r\n\tmargin-right: 12px;\r\n}\r\n\r\n.groups-content {\r\n  width: 100%;\r\n  /*height: 120px;*/\r\n  margin: 0px auto;\r\n}\r\n\r\n.groups-content md-form-field {\r\n\twidth: 100%;\r\n}\r\n\r\n.publish-button {\r\n\tfloat: right;\r\n}\r\n\r\n\r\n.full-width {\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleFormDialog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <h1 class=\"title\">Add Article</h1> -->\r\n<div class=\"content\">\r\n<!-- <form class=\"article-form\"> -->\r\n\t<div class=\"article-content\">\r\n\t\t<img class=\"article-image\" src=\"{{node.imageLink}}\"/>\r\n\t\t\t<p>{{node.title}}</p>\r\n\t\t\t<a href={{node.articleLink}}>THIS IS A LINK.</a>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"groups-content\">\r\n\t  <md-form-field class=\"group-chip-list\">\r\n\t\t\t<md-chip-list mdPrefix #group1>\r\n\t\t\t  <md-chip *ngFor=\"let groupName of groups.g1\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(groupName, 'g1')\">\r\n\t\t      {{groupName}}\r\n\t\t      <md-icon mdChipRemove>cancel</md-icon>\r\n\t\t    </md-chip>\r\n\t    </md-chip-list>\r\n\t    <input mdInput placeholder=\"\"\r\n\t       [mdChipInputFor]=\"group1\"\r\n\t       [mdChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n\t       [mdChipInputAddOnBlur]=\"addOnBlur\"\r\n\t       (mdChipInputTokenEnd)=\"add($event, 'g1')\" />\r\n\t\t</md-form-field> \r\n\t\t\r\n\t  <md-form-field class=\"group-chip-list\">\r\n\t     <md-chip-list mdPrefix #group2>\r\n\t\t\t  <md-chip *ngFor=\"let groupName of groups.g2\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(groupName, 'g2')\">\r\n\t\t      {{groupName}}\r\n\t\t      <md-icon mdChipRemove>cancel</md-icon>\r\n\t\t    </md-chip>\r\n\t    </md-chip-list>\r\n\t    <input mdInput placeholder=\"\"\r\n\t       [mdChipInputFor]=\"group2\"\r\n\t       [mdChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n\t       [mdChipInputAddOnBlur]=\"addOnBlur\"\r\n\t       (mdChipInputTokenEnd)=\"add($event, 'g2')\" />\r\n\t\t</md-form-field> \r\n\r\n\t\t<md-form-field class=\"group-chip-list\">\r\n\t     <md-chip-list mdPrefix #group3>\r\n\t\t\t  <md-chip *ngFor=\"let groupName of groups.g3\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(groupName, 'g3')\">\r\n\t\t      {{groupName}}\r\n\t\t      <md-icon mdChipRemove>cancel</md-icon>\r\n\t\t    </md-chip>\r\n\t    </md-chip-list>\r\n\t    <input mdInput placeholder=\"\"\r\n\t       [mdChipInputFor]=\"group3\"\r\n\t       [mdChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n\t       [mdChipInputAddOnBlur]=\"addOnBlur\"\r\n\t       (mdChipInputTokenEnd)=\"add($event, 'g3')\" />\r\n\t\t</md-form-field> \r\n\r\n\t\t<md-form-field class=\"group-chip-list\">\r\n\t    <md-chip-list mdPrefix #group4>\r\n\t\t\t  <md-chip *ngFor=\"let groupName of groups.g4\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(groupName, 'g4')\">\r\n\t\t      {{groupName}}\r\n\t\t      <md-icon mdChipRemove>cancel</md-icon>\r\n\t\t    </md-chip>\r\n\t    </md-chip-list>\r\n\t    <input mdInput placeholder=\"\"\r\n\t       [mdChipInputFor]=\"group4\"\r\n\t       [mdChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n\t       [mdChipInputAddOnBlur]=\"addOnBlur\"\r\n\t       (mdChipInputTokenEnd)=\"add($event, 'g4')\" />\r\n\t\t</md-form-field> \r\n\r\n\t\t<md-form-field class=\"comment-box\">\r\n\t    <input mdInput maxlength=\"120\" placeholder=\"Comment\" [(ngModel)]=\"comment\" required >\r\n\t    <md-hint align=\"start\"></md-hint>\r\n\t    <md-hint align=\"end\">{{comment.length}} / 120</md-hint>\r\n\t  </md-form-field>\r\n\t</div>\r\n\r\n\r\n\r\n\t<!-- </form> -->\r\n\t<button md-button class=\"cancel-button\" (click)=\"closeDialog()\">Cancel</button>\r\n\t<button md-button class=\"publish-button\" (click)=\"publish()\">Publish</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleFormDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleFormDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var COMMA = 188;
var ArticleFormDialog = (function () {
    function ArticleFormDialog(data, dialogRef, restangular) {
        this.dialogRef = dialogRef;
        this.restangular = restangular;
        this.groups = [];
        this.comment = "";
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* ENTER */], COMMA];
        this.dialogRef.updateSize('300', '300');
        this.dialogRef.updatePosition({ top: '50px', right: '0px' });
        this.node = data.node;
    }
    ArticleFormDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.node.groups.forEach(function (group) {
            if (!_this.groups[group.group.groupType]) {
                _this.groups[group.group.groupType] = [];
            }
            _this.groups[group.group.groupType].push(group.group.name);
        });
    };
    ArticleFormDialog.prototype.closeDialog = function (success) {
        if (success === void 0) { success = false; }
        this.dialogRef.close(success);
    };
    ArticleFormDialog.prototype.publish = function () {
        var _this = this;
        var groupsData = __WEBPACK_IMPORTED_MODULE_3_lodash__["chain"](this.groups).mapValues(function (gs, gt) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](gs, function (g) { return { groupType: gt, name: g }; }); }).values().flatten().value();
        if (!this.comment.length || !groupsData.length) {
            return;
        }
        var postData = { "comment": this.comment, "groups": groupsData };
        this.restangular.one('article', this.node._id).customPUT(postData, 'edit').subscribe(function (res) {
            _this.closeDialog(true);
        });
    };
    ArticleFormDialog.prototype.add = function (event, groupType) {
        var input = event.input;
        var value = event.value;
        // Add our person
        if ((value || '').trim()) {
            if (!this.groups[groupType]) {
                this.groups[groupType] = [];
            }
            // if (this.groups[groupType].length > 1) return; // Prevent being more than 2 groups.
            this.groups[groupType].push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ArticleFormDialog.prototype.remove = function (groupName, groupType) {
        var index = this.groups[groupType].indexOf(groupName);
        if (index >= 0) {
            this.groups[groupType].splice(index, 1);
        }
    };
    return ArticleFormDialog;
}());
ArticleFormDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'article-dialog',
        styles: [__webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.css")],
        template: __webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _b || Object])
], ArticleFormDialog);

var _a, _b;
//# sourceMappingURL=articleFormDialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.column {\r\n  margin: 10px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 50%;\r\n          flex: 1 1 50%;\r\n}\r\n.user {\r\n  font-size: 40px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n.title {\r\n  float: right;\r\n  padding: 13px;\r\n  font-size: 15px;\r\n}\r\n.search {\r\n  position: relative;\r\n  margin: auto;\r\n  color: black;\r\n  width: 35%;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* menu bar color : 241; */\r\n\r\n.search-text {\r\n  position: relative;\r\n  float: left;\r\n  color: black;\r\n  background: rgb(224, 224, 224);\r\n  width: 100%;\r\n  outline: none;\r\n  border: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  padding-left: 35px;\r\n  padding-right: 35px;\r\n}\r\n.search-icon {\r\n  font-size: 33px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  padding:4px;\r\n  color: rgb(8, 80, 193);\r\n  cursor: pointer;\r\n  float: left;\r\n}\r\n.clear-search {\r\n  font-size: 20px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  /*padding: 8px;\r\n  float: right;*/\r\n  right: 10px !important;\r\n  color: rgb(8, 80, 193);\r\n  font-size: 33px;\r\n  right: 5px;\r\n  top: 3px;\r\n}\r\nmd-select {\r\n  background: transparent;\r\n  margin-right:10px;\r\n}\r\n\r\n/*md-option {\r\n  font-size: 10px;\r\n}*/\r\n.container {\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n  height: 950px;\r\n}\r\n.title-bar {\r\n  padding: 0px;\r\n  background: rgb(241, 241, 241) !important;\r\n  height: 55px;\r\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.mat-slide-toggle-thumb {\r\n  background: rgb(11, 82, 193);\r\n}\r\n.add-btn{\r\n  position: absolute;\r\n  bottom: auto;\r\n  left: auto;\r\n  right: 23px;\r\n  top: 136px;\r\n}\r\n.ads-btn{\r\n  position: absolute;\r\n  top: auto;\r\n  right: auto;\r\n  left: 5px;\r\n  bottom: 20px;\r\n}\r\n.filter-btn{\r\n  position: absolute;\r\n  bottom: auto;\r\n  right: auto;\r\n  left: 5px;\r\n  top: 136px;\r\n}\r\n.selectStateTrigger {\r\n  position: absolute;\r\n  height: 27px;\r\n  right: 16px;\r\n  left: auto;\r\n  top: auto;\r\n  bottom: 20px;\r\n  margin-right: 8px;\r\n}\r\n.md-menu {\r\n  color: black;\r\n  padding: 0 21px;\r\n  cursor: pointer;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n}\r\n.social-btn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 80px;\r\n  margin-left: 18px;\r\n}\r\n.social-btn>a {\r\n  position: relative;\r\n  border-radius:50%;\r\n  padding:10px;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin: 5px 0 2px;\r\n  font-size:30px;\r\n  left: 10px;\r\n  display: block;\r\n}\r\n.social-btn>a:hover {\r\n  opacity: 0.8;\r\n}\r\n.fa-facebook {\r\n  background: #3B5998;\r\n}\r\n.fa-twitter {\r\n  background: #55ACEE;\r\n}\r\n.fa-google {\r\n  background: #dd4b39;\r\n}\r\n.fa-linkedin {\r\n  background: #007bb5;\r\n}\r\n.status-view {\r\n  margin-right: 25px;\r\n}\r\n.history-view {\r\n  margin-right: 15px;\r\n}\r\n.mat-select-placeholder {\r\n  position: absolute !important;\r\n  color:red !important;\r\n}\r\n\r\n\r\n\r\n.filtersDialog {\r\n  position: absolute;\r\n  left: -20px;\r\n  top: 175px;\r\n  width: 310px;\r\n}\r\n\r\n\r\n/*Common styles*/\r\n\r\n.btn-left-margin {\r\n  margin-left: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<md-toolbar color=\"primary\" class=\"title-bar\">\r\n  <span class=\"md-menu\"><md-icon>dehaze</md-icon></span>\r\n  <div class=\"search\" >\r\n    <md-icon class=\"search-icon\" mdTooltip=\"Search\" mdTooltipPosition=\"below\">search</md-icon>\r\n    <input type=\"text\" class=\"search-text\" placeholder=\"Search\" [(ngModel)]=\"query.search\" (ngModelChange)='onQuerySearchTextChanged($event)' name='search' #search >\r\n    <span [hidden]=\"this.query.search == ''\"><md-icon class=\"clear-search\" (click)=\"clearSearch()\" mdTooltip=\"Clear search\" mdTooltipPosition=\"below\">clear</md-icon></span>\r\n  </div>\r\n  <md-select placeholder=\"Views\" name=\"views\"  class=\"status-view\" style=\"float:right\" [(ngModel)]=\"query.views\" (change)=\"onQueryChanges()\">\r\n    <md-option *ngFor=\"let status of filterViewsOptions\" [value]=\"status.value\">\r\n      {{status.title}}\r\n    </md-option>\r\n  </md-select>\r\n  <md-select placeholder=\"Past Day\" name=\"past\"  class=\"history-view\" style=\"float:right\" [(ngModel)]=\"query.period\" (change)=\"onQueryChanges()\">\r\n    <md-option *ngFor=\"let status of filterPeriodOptions\" [value]=\"status.value\">\r\n      {{status.title}}\r\n    </md-option>\r\n  </md-select>\r\n</md-toolbar>\r\n\r\n<div class=\"column\" (window:resize)=\"onResize($event)\">\r\n\t<div id=\"svg\" [style.width.px]=\"svgSize.width\" [style.height.px]=\"svgSize.height\" (click)='toggleOffAll()'>\r\n\t</div>\r\n</div>\r\n<button md-fab class=\"filter-btn btn-left-margin\" mdTooltip=\"Filter\" mdTooltipPosition=\"right\" color=\"primary\" (click)=\"showFilterDialog=!showFilterDialog\">Filter</button>\r\n<div class=\"filtersDialog\" [hidden]=\"!showFilterDialog\">\r\n  <md-card>\r\n    <md-card-content>\r\n      <md-form-field class=\"full-width\" *ngFor=\"let g of getQueryFilterKeys()\">\r\n        <input mdInput placeholder=\"{{ 'Group' + g.substr(1) }}\" [(ngModel)]=\"this.query.filter[g]\" />\r\n      </md-form-field>\r\n      <button md-icon-button mb-fab color=\"primary\" class=\"pull-right\" (click)=\"onQueryChanges()\"><md-icon class=\"md-24\">done</md-icon></button>\r\n      <div class=\"clear\"></div>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n<button md-fab class=\"add-btn\" mdTooltip=\"Add article\" mdTooltipPosition=\"left\" (click)=\"addArticle()\" color=\"primary\"><md-icon>add</md-icon></button>\r\n<button md-fab class=\"ads-btn btn-left-margin\" mdTooltip=\"Adsense\" mdTooltipPosition=\"right\" (click)=\"toggleSocial()\" color=\"primary\">Ads</button>\r\n<div class='social-btn' [hidden]=\"!showSocialMenu\">\r\n  <a href=\"#\" mdTooltip=\"Facebook\" mdTooltipPosition=\"right\" class=\"fa fa-facebook\"></a>\r\n  <a href=\"#\" mdTooltip=\"Twitter\" mdTooltipPosition=\"right\" class=\"fa fa-twitter\"></a>\r\n  <a href=\"#\" mdTooltip=\"Google\" mdTooltipPosition=\"right\" class=\"fa fa-google\"></a>\r\n  <a href=\"#\" mdTooltip=\"Linkedin\" mdTooltipPosition=\"right\" class=\"fa fa-linkedin\"></a>\r\n</div>\r\n\r\n<section class=\"selectStateTrigger\"  mdTooltip=\"State Trigger\" mdTooltipPosition=\"left\">\r\n    State\r\n  <md-slide-toggle\r\n      class=\"\"\r\n      [color]=\"stateTriggerOptions.slideColor\"\r\n      [checked]=\"stateView\"\r\n      [disabled]=\"stateTriggerOptions.disabled\"\r\n      (change)=\"onStateViewChanges($event.checked)\">\r\n  </md-slide-toggle>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_D3Service__ = __webpack_require__("../../../../../src/app/shared/services/D3Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__articles_articleAgreeDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articles_articleFormDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LandingComponent = (function () {
    function LandingComponent(router, restangular, d3Service, dialog) {
        var _this = this;
        this.router = router;
        this.restangular = restangular;
        this.d3Service = d3Service;
        this.dialog = dialog;
        this.title = 'Landing Page';
        this.currentView = 'DEFAULT'; // can be 'FOCUS', 'ARTICLE'
        this.focusedGroup = null;
        this.filterViewsOptions = [
            { value: "LATEST", title: "Latest" },
            { value: "VIEWS", title: "Views" },
            { value: "S1", title: "State1" },
            { value: "S2", title: "State2" },
            { value: "S3", title: "State3" }
        ];
        this.filterPeriodOptions = [
            { value: 'PAST_DAY', title: "Past day" },
            { value: 'PAST_WEEK', title: "Past week" },
            { value: 'PAST_MONTH', title: "Past month" },
            { value: 'PAST_3MONTHS', title: "Past 3 months" },
            { value: 'PAST_6MONTHS', title: "Past 6 months" },
            { value: 'PAST_YEAR', title: "Past 1 year" },
            { value: 'ALL', title: "All" },
        ];
        this.stateTriggerOptions = {
            slideColor: 'primary',
            disabled: false
        };
        this.showFilterDialog = false;
        this.showSocialMenu = false;
        this.svgSize = {
            width: 0,
            height: 0
        };
        this.stateView = false;
        this.querySearchTextChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.filterPeriodDates = {
            PAST_DAY: { start: __WEBPACK_IMPORTED_MODULE_11_moment__().add(-1, 'days').format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.startdate), end: __WEBPACK_IMPORTED_MODULE_11_moment__().format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.datetime) },
            PAST_WEEK: { start: __WEBPACK_IMPORTED_MODULE_11_moment__().add(-7, 'days').format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.startdate), end: __WEBPACK_IMPORTED_MODULE_11_moment__().format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.datetime) },
            PAST_MONTH: { start: __WEBPACK_IMPORTED_MODULE_11_moment__().add(-1, 'months').format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.startdate), end: __WEBPACK_IMPORTED_MODULE_11_moment__().format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.datetime) },
            PAST_3MONTHS: { start: __WEBPACK_IMPORTED_MODULE_11_moment__().add(-3, 'months').format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.startdate), end: __WEBPACK_IMPORTED_MODULE_11_moment__().format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.datetime) },
            PAST_6MONTHS: { start: __WEBPACK_IMPORTED_MODULE_11_moment__().add(-6, 'months').format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.startdate), end: __WEBPACK_IMPORTED_MODULE_11_moment__().format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.datetime) },
            PAST_YEAR: { start: __WEBPACK_IMPORTED_MODULE_11_moment__().add(-1, 'years').format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.startdate), end: __WEBPACK_IMPORTED_MODULE_11_moment__().format(__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].formats.backend.datetime) },
            ALL: { start: null, end: null }
        };
        this.querySearchTextChanged
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (text) {
            _this.query.search = text.trim();
            _this.onQueryChanges();
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.d3Service.init('#svg');
        this.resizeWindow();
        this.d3Service.on('click', this.nodeClick, this);
        this.d3Service.on('dblclick', this.nodeDblClick, this);
        this.d3Service.on('agreedisagree', this.showAgreeDialog, this);
        this.d3Service.on('drilldown', this.switchFocusView, this);
        this.resetQuery();
        this.start();
    };
    LandingComponent.prototype.onResize = function ($event) {
        this.resizeWindow();
    };
    LandingComponent.prototype.resizeWindow = function (width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (width == 0) {
            width = window.innerWidth;
            height = window.innerHeight;
        }
        this.svgSize.width = width;
        this.svgSize.height = height - 128;
        this.d3Service.resize(this.svgSize);
    };
    LandingComponent.prototype.resetQuery = function () {
        this.query = {
            search: '',
            views: 'LATEST',
            period: 'ALL',
            filter: {
                // g1: '', g2: '', g3: '', g4: '', g6: '', g7: '', 
                g11: '',
                // g12: '', 
                g13: ''
            },
            user: null,
            location: null,
            group: null
        };
        this.stateView = false;
    };
    LandingComponent.prototype.getQuery = function () {
        var params = JSON.parse(JSON.stringify(this.query));
        params.periodStart = this.filterPeriodDates[params.period].start;
        params.periodEnd = this.filterPeriodDates[params.period].end;
        delete params.period;
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["pickBy"](params, function (q) { return q != null; });
    };
    LandingComponent.prototype.draw = function (articles) {
        this.nodes = this.initNodes(articles);
        this.data = articles;
        this.d3Service.start(this.nodes);
    };
    LandingComponent.prototype.start = function (refreshData) {
        var _this = this;
        if (refreshData === void 0) { refreshData = true; }
        if (refreshData) {
            var apiArticles = this.restangular.all('article');
            apiArticles.customGET('search', this.getQuery()).subscribe(function (articles) {
                _this.draw(articles);
            });
        }
        else {
            this.draw(this.data);
        }
    };
    LandingComponent.prototype.onPageBack = function ($event) {
        if (this.currentView == 'DEFAULT')
            return false;
        else if (this.currentView == 'FOCUS') {
            this.query.user = null;
            this.query.location = null;
            this.query.group = null;
            this.currentView = 'DEFAULT';
        }
        else if (this.currentView == 'ARTICLE')
            this.currentView = 'FOCUS';
        this.start();
        return false;
    };
    LandingComponent.prototype.onQuerySearchTextChanged = function (text) {
        this.querySearchTextChanged.next(text);
    };
    LandingComponent.prototype.toggleOffAll = function () {
        this.showFilterDialog = false;
        this.showSocialMenu = false;
    };
    LandingComponent.prototype.search = function () {
    };
    LandingComponent.prototype.clearSearch = function () {
        this.query.search = '';
        this.start();
    };
    LandingComponent.prototype.nodeClick = function (node, elType) {
        var _this = this;
        if (node.nodeData.g == 'g0' && elType == 'editLinksArticle') {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__articles_articleFormDialog_component__["a" /* ArticleFormDialog */], {
                width: '550px',
                height: '600px',
                data: { node: node }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.start();
            });
        }
        else {
            if (this.currentView == 'DEFAULT') {
                this.showAgreeDialog(node);
            }
            else if (this.currentView == 'FOCUS') {
                this.switchFocusView(node, elType);
            }
        }
    };
    LandingComponent.prototype.nodeDblClick = function (node, elType) {
        if (this.currentView == 'FOCUS')
            return;
        this.switchFocusView(node, elType);
    };
    LandingComponent.prototype.showAgreeDialog = function (node) {
        if (node.nodeData.g == 'g1' || node.nodeData.g == 'g2' || node.nodeData.g == 'g3' || node.nodeData.g == 'g5' || node.nodeData.g == 'g6' || node.nodeData.g == 'g7' || node.nodeData.g == 'g12' || node.nodeData.g == 'g13') {
            // show agree disagree dialog
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__articles_articleAgreeDialog_component__["a" /* ArticleAgreeDialog */], {
                width: '350px',
                data: { node: node }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        }
    };
    LandingComponent.prototype.switchFocusView = function (node, elType) {
        var nodeType = node.nodeData.type;
        if (nodeType == 'comment' || nodeType == 'article')
            return;
        this.currentView = 'FOCUS';
        this.query.user = null;
        this.query.location = null;
        this.query.group = null;
        switch (true) {
            case nodeType == 'user':
                this.query.user = node._id;
                break;
            case nodeType == 'location':
                this.query.location = node._id;
                break;
            case nodeType == 'group':
                this.query.group = node.group._id;
                break;
        }
        this.focusedGroup = node;
        this.start();
    };
    LandingComponent.prototype.onQueryChanges = function () {
        this.start();
        this.toggleOffAll();
    };
    LandingComponent.prototype.onStateViewChanges = function (checked) {
        this.stateView = checked;
        this.start();
    };
    LandingComponent.prototype.addArticle = function () {
    };
    LandingComponent.prototype.toggleSocial = function () {
        this.showSocialMenu = !this.showSocialMenu;
    };
    LandingComponent.prototype.initNodes = function (data) {
        var _this = this;
        var nodes = [], nodeIndex = 0;
        if (this.currentView == 'FOCUS') {
            __WEBPACK_IMPORTED_MODULE_10_lodash__["each"](data, function (article, index) {
                var oldIndex = __WEBPACK_IMPORTED_MODULE_10_lodash__["findIndex"](_this.data, { _id: article._id });
                if (oldIndex !== -1) {
                    data[index] = _this.data[oldIndex];
                }
            });
            this.focusedGroup.nodeData.nodeIndex = 0;
            this.focusedGroup.nodeData.parentIndex = nodeIndex;
            this.focusedGroup.nodeData.movable = false;
            this.focusedGroup.nodeData.focused = true;
            this.focusedGroup.fx = this.focusedGroup.x;
            this.focusedGroup.fy = this.focusedGroup.y;
            nodes.push(this.focusedGroup);
            nodeIndex++;
        }
        nodes = nodes.concat(__WEBPACK_IMPORTED_MODULE_10_lodash__["map"](data, function (d) {
            d.nodeData = {
                nodeIndex: nodeIndex,
                g: 'g0',
                parentIndex: _this.currentView == 'FOCUS' ? 0 : nodeIndex,
                type: 'article',
                text: _this.getNodeText(d, 'article'),
                link: _this.currentView == 'FOCUS' ? { width: 3, color: '#ccc' } : null,
                movable: true
            };
            d.fx = d.fy = null;
            nodeIndex++;
            return d;
        }));
        data.forEach(function (article) {
            var parentGroupsForStates = { S1: null, S2: null, S3: null }; // for stateView only
            var parentGroupsForGroups = { g1: null, g2: null, g3: null, g4: null, g5: null, g6: null, g7: null, g11: null, g12: null, g13: null, g21: null, g22: null }; // for not stateView only
            nodes = nodes.concat(__WEBPACK_IMPORTED_MODULE_10_lodash__["map"](_this.sliceGroup(article.users, 'user'), function (d, index) {
                var parentIndex = article.nodeData.nodeIndex;
                if (_this.stateView) {
                    if (parentGroupsForStates.S3)
                        parentIndex = parentGroupsForStates.S3;
                    else
                        parentGroupsForStates.S3 = nodeIndex;
                }
                else {
                    if (parentGroupsForGroups.g21)
                        parentIndex = parentGroupsForGroups.g21;
                    else
                        parentGroupsForGroups.g21 = nodeIndex;
                }
                d.nodeData = {
                    nodeIndex: nodeIndex,
                    g: 'g21',
                    parentIndex: parentIndex,
                    article_id: article._id,
                    type: 'user',
                    text: _this.getNodeText(d, 'user'),
                    link: null,
                    movable: true
                };
                d.fx = d.fy = null;
                nodeIndex++;
                return d;
            }));
            nodes = nodes.concat(__WEBPACK_IMPORTED_MODULE_10_lodash__["map"](_this.sliceGroup(article.locations, 'location'), function (d, index) {
                var parentIndex = article.nodeData.nodeIndex;
                if (_this.stateView) {
                    if (parentGroupsForStates.S3)
                        parentIndex = parentGroupsForStates.S3;
                    else
                        parentGroupsForStates.S3 = nodeIndex;
                }
                else {
                    if (parentGroupsForGroups.g22)
                        parentIndex = parentGroupsForGroups.g22;
                    else
                        parentGroupsForGroups.g22 = nodeIndex;
                }
                d.nodeData = {
                    nodeIndex: nodeIndex,
                    g: 'g22',
                    parentIndex: parentIndex,
                    article_id: article._id,
                    type: 'location',
                    text: _this.getNodeText(d, 'location'),
                    link: null,
                    movable: true
                };
                d.fx = d.fy = null;
                nodeIndex++;
                return d;
            }));
            nodes = nodes.concat(__WEBPACK_IMPORTED_MODULE_10_lodash__["map"](_this.sliceGroup(article.comments, 'comment'), function (d, index) {
                var parentIndex = article.nodeData.nodeIndex;
                if (_this.stateView) {
                    if (parentGroupsForStates.S3)
                        parentIndex = parentGroupsForStates.S3;
                    else
                        parentGroupsForStates.S3 = nodeIndex;
                }
                else {
                    if (parentGroupsForGroups.g5)
                        parentIndex = parentGroupsForGroups.g5;
                    else
                        parentGroupsForGroups.g5 = nodeIndex;
                }
                d.nodeData = {
                    nodeIndex: nodeIndex,
                    g: 'g5',
                    parentIndex: parentIndex,
                    article_id: article._id,
                    type: 'comment',
                    text: _this.getNodeText(d, 'comment'),
                    link: null,
                    movable: true
                };
                d.fx = d.fy = null;
                nodeIndex++;
                return d;
            }));
            nodes = nodes.concat(__WEBPACK_IMPORTED_MODULE_10_lodash__["map"](_this.sliceGroup(article.groups, 'group'), function (d, index) {
                var parentIndex = article.nodeData.nodeIndex;
                if (_this.stateView) {
                    if (d.group.state) {
                        if (parentGroupsForStates[d.group.state])
                            parentIndex = parentGroupsForStates[d.group.state];
                        else
                            parentGroupsForStates[d.group.state] = nodeIndex;
                    }
                    else {
                        if (parentGroupsForStates.S3)
                            parentIndex = parentGroupsForStates.S3;
                        else
                            parentGroupsForStates.S3 = nodeIndex;
                    }
                }
                else {
                    if (parentGroupsForGroups[d.group.groupType])
                        parentIndex = parentGroupsForGroups[d.group.groupType];
                    else
                        parentGroupsForGroups[d.group.groupType] = nodeIndex;
                }
                d.nodeData = {
                    nodeIndex: nodeIndex,
                    g: d.group.groupType,
                    parentIndex: parentIndex,
                    article_id: article._id,
                    type: 'group',
                    text: _this.getNodeText(d, 'group'),
                    link: null,
                    movable: true
                };
                d.fx = d.fy = null;
                nodeIndex++;
                return d;
            }));
        });
        __WEBPACK_IMPORTED_MODULE_10_lodash__["each"](nodes, function (d) {
            d.shape = __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SHAPES[d.nodeData.g];
            d.style = _this.getStyle(d);
        });
        return nodes;
    };
    LandingComponent.prototype.sliceGroup = function (nodes, nodeType) {
        var _this = this;
        var sliceNodes = nodes;
        if (this.currentView == 'FOCUS') {
            var focusedType_1 = this.focusedGroup.nodeData.type;
            if (focusedType_1 == nodeType) {
                var focusedId = focusedType_1 == 'group' ? this.focusedGroup.group._id : this.focusedGroup._id;
                sliceNodes = __WEBPACK_IMPORTED_MODULE_10_lodash__["filter"](nodes, function (d) {
                    var id = focusedType_1 == 'group' ? d.group._id : d._id;
                    return focusedId != id;
                });
            }
        }
        if (nodeType == 'comment') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_10_lodash__["chain"](sliceNodes)
                .sortBy(function (d) { return d.votes.agrees + d.votes.disagrees; })
                .reverse()
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].NODE_COUNTS[this.currentView].g5);
        }
        else if (nodeType == 'group') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_10_lodash__["chain"](sliceNodes)
                .groupBy(function (d) { return d.group.groupType; })
                .map(function (groups, g) { return __WEBPACK_IMPORTED_MODULE_10_lodash__["chain"](groups)
                .sortBy(function (d) { return g == '11' ? d.createdAt : d.votes.agrees + d.votes.disagrees; })
                .reverse()
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].NODE_COUNTS[_this.currentView][g]); })
                .flatten()
                .value();
        }
        if (nodeType == 'user') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_10_lodash__["chain"](sliceNodes)
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].NODE_COUNTS[this.currentView].g21);
        }
        else if (nodeType == 'location') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_10_lodash__["chain"](sliceNodes)
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].NODE_COUNTS[this.currentView].g22);
        }
        return sliceNodes;
    };
    LandingComponent.prototype.getStyle = function (d, preserveSize) {
        if (preserveSize === void 0) { preserveSize = false; }
        var state = d.nodeData.type == 'group' && d.group.state ? d.group.state : 'S3';
        var style = __WEBPACK_IMPORTED_MODULE_10_lodash__["extend"]({
            color: '#000000',
            font: 0,
            width: 0,
            height: 0,
            radius: 0
        }, d.style);
        style.color = __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].getColor(this.stateView && d.nodeData.g != 'g0' ? state : d.nodeData.g);
        if (!preserveSize) {
            if (d.shape == 'article') {
                style.font = __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].font;
                style.width = __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].width;
                style.height = __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].height;
            }
            else if (d.shape == 'ellipse' || d.shape == 'rect') {
                var rand = __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].random();
                style.font = d == this.focusedGroup ? __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.max * 2 : Math.round(rand * (__WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.max - __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.min)) + __WEBPACK_IMPORTED_MODULE_6__shared_services_dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.min;
            }
        }
        return style;
    };
    LandingComponent.prototype.getNodeText = function (d, type) {
        switch (true) {
            case type == 'article': return d.title;
            case type == 'user': return d.name;
            case type == 'location': return d.city + ',' + d.state + ',' + d.country;
            case type == 'group': return d.group.name;
            case type == 'comment': return d.text;
        }
    };
    LandingComponent.prototype.getQueryFilterKeys = function () {
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["keys"](this.query.filter);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'landing',
        template: __webpack_require__("../../../../../src/app/modules/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_restangular__["Restangular"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_D3Service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_D3Service__["a" /* D3Service */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _d || Object])
], LandingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/D3/contextMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_index__ = __webpack_require__("../../../../d3/index.js");

var D3ContextMenu = (function () {
    function D3ContextMenu(svg, menuItems) {
        this.svg = null;
        this.height = 0;
        this.width = 0;
        this.margin = 0.1;
        this.items = [];
        this.rescale = false;
        this.style = {
            'rect': {
                'mouseout': {
                    'fill': 'rgb(244,244,244)',
                    'stroke': 'white',
                    'strokeWidth': '1px'
                },
                'mouseover': {
                    'fill': 'rgb(200,200,200)',
                    'stroke': 'white',
                    'strokeWidth': '0px'
                }
            },
            'text': {
                'fill': 'steelblue',
                'fontSize': '13'
            }
        };
        this.clickListeners = [];
        this.svg = svg;
        this.items = menuItems;
        this.rescale = true;
    }
    D3ContextMenu.prototype.on = function (id, listener) {
        this.clickListeners[id] = listener;
    };
    D3ContextMenu.prototype.highlight = function (menu, highlight) {
        if (highlight) {
            menu.style('fill', this.style.rect.mouseover.fill);
            menu.style('stroke', this.style.rect.mouseover.stroke);
            menu.style('stroke-width', this.style.rect.mouseover.strokeWidth);
        }
        else {
            menu.style('fill', this.style.rect.mouseout.fill);
            menu.style('stroke', this.style.rect.mouseout.stroke);
            menu.style('stroke-width', this.style.rect.mouseout.strokeWidth);
        }
    };
    D3ContextMenu.prototype.pop = function (x, y, meta) {
        var _this = this;
        this.meta = meta;
        var that = this;
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('.context-menu').remove();
        this.scaleItems();
        // Draw the menu
        this.svg
            .append('g').attr('class', 'context-menu')
            .style('filter', "url('#drop-shadow')")
            .selectAll('tmp')
            .data(this.items).enter()
            .append('g').attr('class', 'menu-entry')
            .style('cursor', 'pointer')
            .on('mouseover', function () { that.highlight(__WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */](this).select('rect'), true); })
            .on('mouseout', function () { that.highlight(__WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */](this).select('rect'), false); })
            .on('click', function (d) {
            if (_this.clickListeners[d.id])
                _this.clickListeners[d.id].func.call(_this.clickListeners[d.id].context, _this.meta);
        });
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["l" /* selectAll */]('.menu-entry')
            .append('rect')
            .attr('x', x)
            .attr('y', function (d, i) { return y + (i * _this.height); })
            .attr('width', this.width)
            .attr('height', this.height)
            .style('fill', this.style.rect.mouseout.fill)
            .style('stroke', this.style.rect.mouseout.stroke)
            .style('stroke-width', this.style.rect.mouseout.strokeWidth);
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["l" /* selectAll */]('.menu-entry')
            .append('text')
            .text(function (d) { return d.label; })
            .attr('x', x)
            .attr('y', function (d, i) { return y + (i * _this.height); })
            .attr('dy', this.height - this.margin / 2)
            .attr('dx', this.margin)
            .style('fill', this.style.text.fill)
            .style('font-size', this.style.text.fontSize);
        // Other interactions
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('body')
            .on('click', function () {
            __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('.context-menu').remove();
        });
    };
    // Automatically set width, height, and margin;
    D3ContextMenu.prototype.scaleItems = function () {
        var _this = this;
        if (this.rescale) {
            this.svg.selectAll('tmp')
                .data(this.items).enter()
                .append('text')
                .text(function (d) { return d.label; })
                .style('fill', this.style.text.fill)
                .style('font-size', this.style.text.fontSize)
                .attr('x', -1000)
                .attr('y', -1000)
                .attr('class', 'tmp');
            var z = __WEBPACK_IMPORTED_MODULE_0_d3_index__["l" /* selectAll */]('.tmp').nodes().map(function (x) { return x.getBBox(); });
            this.width = __WEBPACK_IMPORTED_MODULE_0_d3_index__["h" /* max */](z.map(function (x) { return x.width; }));
            this.margin = this.margin * this.width;
            this.width = this.width + 2 * this.margin;
            this.height = __WEBPACK_IMPORTED_MODULE_0_d3_index__["h" /* max */](z.map(function (x) { return x.height + _this.margin / 2; }));
            // cleanup
            __WEBPACK_IMPORTED_MODULE_0_d3_index__["l" /* selectAll */]('.tmp').remove();
            this.rescale = false;
        }
    };
    return D3ContextMenu;
}());

//# sourceMappingURL=contextMenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/D3Service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_index__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_D3_contextMenu_component__ = __webpack_require__("../../../../../src/app/shared/components/D3/contextMenu.component.ts");



var D3Service = (function () {
    function D3Service() {
        this.width = 1503;
        this.height = 917;
        this.paddings = { node: 20, cluster: 100, text: 5 };
        this.nodes = [];
        this.svgElements = {
            ellipses: null, textsEllipse: null,
            articles: null, textsArticle: null, tspansArticle1: null, tspansArticle2: null, imgsArticle: null, twitterLinksArticle: null, bookmarkLinksArticle: null, detailLinksArticle: null, editLinksArticle: null,
            rects: null, textsRect: null,
            texts: null,
            links: null
        };
        this.transform = { k: 1, x: 0, y: 0 };
        this.listeners = {
            click: null,
            dblclick: null
        };
        // used to cancel click event if double click
        this.handleClickListener = null;
    }
    D3Service.prototype.init = function (svgSelector) {
        var _this = this;
        this.svgSelector = svgSelector;
        this.svgContainer = __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */](this.svgSelector)
            .append('svg')
            .call(__WEBPACK_IMPORTED_MODULE_0_d3_index__["m" /* zoom */]().on("zoom", function () {
            _this.transform = {
                k: __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].transform.k,
                x: __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].transform.x,
                y: __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].transform.y
            };
            _this.svg.attr("transform", 'translate(' + (_this.transform.x + _this.width / 2) + ',' + (_this.transform.y + _this.height / 2) + ') scale(' + _this.transform.k + ')');
        }))
            .on("dblclick.zoom", null);
        // define filters
        var defs = this.svgContainer.append("defs");
        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr("height", "130%");
        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 3)
            .attr("result", "blur");
        filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 2)
            .attr("dy", 2)
            .attr("result", "offsetBlur");
        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur");
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");
        this.svg = this.svgContainer.append('g');
        this.simulation = __WEBPACK_IMPORTED_MODULE_0_d3_index__["e" /* forceSimulation */]()
            .velocityDecay(0.1)
            .force("x", __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* forceX */]().strength(.0005))
            .force("y", __WEBPACK_IMPORTED_MODULE_0_d3_index__["g" /* forceY */]().strength(.0005))
            .force("charge", __WEBPACK_IMPORTED_MODULE_0_d3_index__["d" /* forceManyBody */]())
            .force("collide", function (alpha) { return _this.collide(alpha); })
            .force("cluster", function (alpha) { return _this.clustering(alpha); });
        this.contextMenu = new __WEBPACK_IMPORTED_MODULE_2__components_D3_contextMenu_component__["a" /* D3ContextMenu */](this.svg, [{ id: 'AGREE_DISAGREE', label: 'Agree/Disagree' }, { id: 'DRILL_DOWN', label: 'Drill down' }]);
        this.contextMenu.on('AGREE_DISAGREE', { context: this, func: function (d) {
                _this.listeners.agreedisagree.func.call(_this.listeners.agreedisagree.context, d);
            } });
        this.contextMenu.on('DRILL_DOWN', { context: this, func: function (d) {
                _this.listeners.drilldown.func.call(_this.listeners.drilldown.context, d);
            } });
    };
    D3Service.prototype.resize = function (size) {
        this.width = size.width;
        this.height = size.height;
        this.svgContainer
            .style('width', size.width)
            .style('height', size.height);
        this.svg
            .attr("transform", 'translate(' + (this.transform.x + this.width / 2) + ',' + (this.transform.y + this.height / 2) + ') scale(' + this.transform.k + ')');
    };
    D3Service.prototype.start = function (nodes) {
        this.nodes = nodes;
        this.svg.selectAll('*').remove();
        this.initNodes();
        this.visualize();
    };
    D3Service.prototype.initNodes = function () {
    };
    D3Service.prototype.reskinNodes = function (nodes) {
        var _this = this;
        var that = this;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](nodes, function (d) {
            var node = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](_this.nodes, function (n) { return n.nodeData.nodeIndex == d.nodeData.nodeIndex; });
            node.style = d.style;
        });
        this.svgElements.links
            .style("stroke-width", function (d) { return d.nodeData.link.width + 'px'; })
            .style("stroke", function (d) { return d.nodeData.link.color; });
        this.svgElements.articles
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .style('stroke', '#000')
            .style('stroke-width', 2)
            .style("fill", function (d) { return d.style.color; });
        this.svgElements.imgsArticle
            .attr('width', function (d) { return d.style.height; })
            .attr('height', function (d) { return d.style.height; });
        this.svgElements.ellipses
            .style("fill", function (d) { return d.style.color; });
        this.svgElements.textsEllipse
            .attr('font-size', function (d) { return d.style.font; })
            .each(function (d) { var bb = this.getBBox(); d.style.width = bb.width + that.paddings.text * 2; d.style.height = bb.height * 2 + that.paddings.text * 2; });
        this.svgElements.rects
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .style("fill", function (d) { return d.style.color; });
        this.svgElements.textsRect
            .attr('font-size', function (d) { return d.style.font; })
            .each(function (d) { var bb = this.getBBox(); d.style.width = bb.width + that.paddings.text; d.style.height = bb.height + that.paddings.text; });
    };
    D3Service.prototype.visualize = function () {
        var _this = this;
        var that = this;
        this.simulation.nodes(this.nodes)
            .force("link", __WEBPACK_IMPORTED_MODULE_0_d3_index__["c" /* forceLink */]().id(function (d) { return d._id; })
            .distance(100)
            .strength(1))
            .on("tick", function () { return _this.ticked(); });
        this.svgElements.links = this.svg
            .datum(this.nodes.filter(function (d) { return d.nodeData.link != null; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter().append('line');
        this.svgElements.articles = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('id', function (d) { return 'article' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.imgsArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.image')
            .data(function (d) { return d; })
            .enter().append('image')
            .attr('xlink:href', function (d) { return d.imageLink; })
            .attr('id', function (d) { return 'articleImg' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.textsArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('font-size', function (d) { return 15; })
            .attr("dominant-baseline", "central")
            .attr('id', function (d) { return 'articleText' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        var charsToWrap = 30;
        this.svgElements.tspansArticle1 = this.svgElements.textsArticle
            .append('tspan')
            .attr('x', 0)
            .attr('dy', 15)
            .text(function (d) { return d.body.substring(0, charsToWrap); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.tspansArticle2 = this.svgElements.textsArticle
            .append('tspan')
            .attr('x', 0)
            .attr('dy', 30)
            .text(function (d) { return __WEBPACK_IMPORTED_MODULE_1_lodash__["truncate"](d.body.substring(charsToWrap), { 'length': charsToWrap }); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.twitterLinksArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter().append('g')
            .attr('class', 'pointer')
            .append('text')
            .style("font-family", "FontAwesome")
            .attr('font-size', function (d) { return 25; })
            .attr('id', function (d) { return 'articleTwitterButton' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .html('&#xf099;');
        this.svgElements.bookmarkLinksArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter().append('g')
            .attr('class', 'pointer')
            .append('text')
            .style("font-family", "FontAwesome")
            .attr('font-size', function (d) { return 25; })
            .attr('id', function (d) { return 'articleBookmarkButton' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .html('&#xf02e;');
        this.svgElements.detailLinksArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter().append('g')
            .attr('class', 'pointer')
            .append('text')
            .style("font-family", "FontAwesome")
            .attr('font-size', function (d) { return 25; })
            .attr('id', function (d) { return 'articleDetailButton' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .html('&#xf138;');
        this.svgElements.editLinksArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter().append('g')
            .attr('class', 'pointer')
            .append('text')
            .style("font-family", "FontAwesome")
            .attr('font-size', function (d) { return 25; })
            .attr('id', function (d) { return 'articleEditButton' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .html('&#xf055;');
        this.svgElements.ellipses = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'ellipse'; }))
            .selectAll('.ellipse')
            .data(function (d) { return d; })
            .enter().append('ellipse')
            .attr('id', function (d) { return 'ellipse' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g ellipse ' + d.nodeData.g; });
        this.svgElements.textsEllipse = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'ellipse'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('id', function (d) { return 'ellipseText' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g text ' + d.nodeData.g; })
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .text(function (d) { return d.nodeData.text; });
        this.svgElements.rects = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'rect'; }))
            .selectAll('.rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('id', function (d) { return 'rect' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g rect ' + d.nodeData.g; });
        this.svgElements.textsRect = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'rect'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('id', function (d) { return 'rectText' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g text ' + d.nodeData.g; })
            .attr("text-anchor", function (d) { return d.nodeData.g == 'g5' ? "left" : "middle"; }) // comment = g5: left aligned
            .attr("dominant-baseline", function (d) { return d.nodeData.g == 'g5' ? "text-before-edge" : "central"; })
            .attr('font-size', function (d) { return d.style.font; })
            .each(function (d) {
            charsToWrap = 60;
            var totalW = 0;
            for (var i = 0; i < d.nodeData.text.length; i += charsToWrap) {
                var tspan = __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */](this).append('tspan')
                    .attr('dx', -1 * totalW)
                    .attr('dy', i == 0 ? 0 : 15)
                    .text(function (d) { return d.nodeData.text.substr(i, charsToWrap); })
                    .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
                    .node();
                totalW = tspan.getComputedTextLength();
            }
        });
        this.reskinNodes(this.nodes);
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.svgElements, function (elements, elType) {
            if (elements == null || elType == 'links')
                return;
            elements
                .on("dblclick", function (d) {
                if (_this.listeners.dblclick) {
                    if (_this.handleClickListener) {
                        _this.handleClickListener = null;
                        window.clearTimeout(_this.handleClickListener);
                    }
                    _this.listeners.dblclick.func.call(_this.listeners.dblclick.context, d, elType);
                }
            })
                .on("click", function (d) {
                if (_this.listeners.click) {
                    _this.handleClickListener = window.setTimeout(function () {
                        if (that.handleClickListener) {
                            _this.listeners.click.func.call(_this.listeners.click.context, d, elType);
                            that.handleClickListener = null;
                        }
                    }, 300);
                }
            })
                .on('contextmenu', function (d) {
                __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].preventDefault();
                that.contextMenu.pop(__WEBPACK_IMPORTED_MODULE_0_d3_index__["i" /* mouse */](this)[0], __WEBPACK_IMPORTED_MODULE_0_d3_index__["i" /* mouse */](this)[1], d);
            });
            if (elType == 'rects' || elType == 'ellipses') {
                elements.on('mouseenter', function (d) {
                    if (that.dropShowable(d)) {
                        this.style.filter = "url('#drop-shadow')";
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#rectText' + d.nodeData.nodeIndex).style('font-weight', "bold");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "bold");
                    }
                })
                    .on('mouseleave', function (d) {
                    if (that.dropShowable(d)) {
                        this.style.filter = "none";
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#rectText' + d.nodeData.nodeIndex).style('font-weight', "normal");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "normal");
                    }
                });
            }
            else if (elType == 'textsRect' || elType == 'textsEllipse') {
                elements.on('mouseenter', function (d) {
                    if (that.dropShowable(d)) {
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#rect' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#ellipse' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
                        this.style.fontWeight = 'bold';
                    }
                })
                    .on('mouseleave', function (d) {
                    if (that.dropShowable(d)) {
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#rect' + d.nodeData.nodeIndex).style('filter', "none");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */]('#ellipse' + d.nodeData.nodeIndex).style('filter', "none");
                        this.style.fontWeight = 'normal';
                    }
                });
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.svgElements, function (elements) {
            if (elements == null)
                return;
            elements.call(__WEBPACK_IMPORTED_MODULE_0_d3_index__["a" /* drag */]()
                .on("start", function (d) {
                __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].sourceEvent.stopPropagation();
                if (!d.nodeData.movable)
                    return;
                if (!__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].active)
                    that.simulation.alphaTarget(0.3).restart();
            })
                .on("drag", function (d) {
                if (!d.nodeData.movable)
                    return;
                __WEBPACK_IMPORTED_MODULE_0_d3_index__["k" /* select */](this).attr("x", d.x = __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].x).attr("y", d.y = __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].y);
            })
                .on("end", function (d) {
                if (!d.nodeData.movable)
                    return;
                if (!__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].active)
                    that.simulation.alphaTarget(0);
            }));
        });
        this.simulation.restart();
        this.simulation.alpha(1);
    };
    D3Service.prototype.dropShowable = function (d) {
        return d.nodeData.g == 'g1' || d.nodeData.g == 'g2' || d.nodeData.g == 'g3' || d.nodeData.g == 'g4' || d.nodeData.g == 'g6' || d.nodeData.g == 'g7' || d.nodeData.g == 'g11' || d.nodeData.g == 'g12' || d.nodeData.g == 'g13' || d.nodeData.g == 'g21' || d.nodeData.g == 'g22';
    };
    D3Service.prototype.on = function (event, listener, context) {
        if (context === void 0) { context = null; }
        this.listeners[event] = { context: context, func: listener };
    };
    D3Service.prototype.ticked = function () {
        var _this = this;
        this.svgElements.links
            .attr('x1', function (d) { return d.x + d.style.width / 2; })
            .attr('y1', function (d) { return d.y + d.style.height / 2; })
            .attr('x2', function (d) { var p = _this.parentOfElement(d); return p.x + p.style.width / 2; })
            .attr('y2', function (d) { var p = _this.parentOfElement(d); return p.y + p.style.height / 2; });
        this.svgElements.articles
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; });
        this.svgElements.imgsArticle
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; });
        this.svgElements.textsArticle
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; });
        this.svgElements.tspansArticle1
            .attr('x', function (d) { return d.x + 110; })
            .attr('y', function (d) { return d.y; });
        this.svgElements.tspansArticle2
            .attr('x', function (d) { return d.x + 110; })
            .attr('y', function (d) { return d.y; });
        var bottomPadding = 10, leftPadding = 10, rightPadding = 40, eachPadding = 30, articleImageWidth = 100;
        this.svgElements.bookmarkLinksArticle
            .attr('x', function (d) { return d.x + articleImageWidth + leftPadding; })
            .attr('y', function (d) { return d.y + d.style.height - bottomPadding; });
        this.svgElements.twitterLinksArticle
            .attr('x', function (d) { return d.x + articleImageWidth + leftPadding + eachPadding; })
            .attr('y', function (d) { return d.y + d.style.height - bottomPadding; });
        this.svgElements.detailLinksArticle
            .attr('x', function (d) { return d.x + d.style.width - rightPadding - eachPadding; })
            .attr('y', function (d) { return d.y + d.style.height - bottomPadding; });
        this.svgElements.editLinksArticle
            .attr('x', function (d) { return d.x + d.style.width - rightPadding; })
            .attr('y', function (d) { return d.y + d.style.height - bottomPadding; });
        this.svgElements.ellipses
            .attr('rx', function (d) { return d.style.width / 2; })
            .attr('ry', function (d) { return d.style.height / 2; })
            .attr('cx', function (d) { return d.x + d.style.width / 2; })
            .attr('cy', function (d) { return d.y + d.style.height / 2; });
        this.svgElements.textsEllipse
            .attr('x', function (d) { return d.x + d.style.width / 2; })
            .attr('y', function (d) { return d.y + d.style.height / 2; });
        this.svgElements.rects
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; });
        this.svgElements.textsRect
            .attr('x', function (d) { return d.x + (d.nodeData.g == 'g5' ? 0 : d.style.width / 2); }) //g5 : comment left aligned
            .attr('y', function (d) { return d.y + (d.nodeData.g == 'g5' ? 0 : d.style.height / 2); });
    };
    D3Service.prototype.clustering = function (alpha) {
        var _this = this;
        this.nodes.forEach(function (d) {
            var parent = _this.parentOfElement(d);
            if (parent == null)
                return;
            var padding = (parent._id != d.nodeData.article_id && d.nodeData.parentIndex != parent.nodeData.nodeIndex && d.nodeData.nodeIndex != parent.nodeData.parentIndex && d.nodeData.parentIndex != parent.nodeData.parentIndex ? _this.paddings.cluster : 0) + _this.paddings.node;
            if (parent === d) {
                // parent = {
                //   x: 0,     y: 0,
                //   style : {
                //     width: 0, height: 2
                //   }
                // }
                return;
            }
            var x = (d.x + d.style.width / 2) - (parent.x + parent.style.width / 2), y = (d.y + d.style.height / 2) - (parent.y + parent.style.height / 2), xSpacing = (parent.style.width + d.style.width) / 2 + 0, ySpacing = (parent.style.height + d.style.height) / 2 + 0, absX = Math.abs(x), absY = Math.abs(y), l, lx, ly;
            if (absX > xSpacing || absY > ySpacing) {
                l = Math.sqrt(x * x + y * y);
                lx = (absX - xSpacing) / l * alpha;
                ly = (absY - ySpacing) / l * alpha;
                d.x -= x *= lx;
                d.y -= y *= ly;
                parent.x += x;
                parent.y += y;
            }
        });
    };
    D3Service.prototype.collide = function (alpha) {
        var _this = this;
        // let that = this;
        var quadtree = __WEBPACK_IMPORTED_MODULE_0_d3_index__["j" /* quadtree */]()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .addAll(this.nodes);
        this.nodes.forEach(function (d) {
            quadtree.visit(function (quad, x0, y0, x1, y1) {
                var updated = false;
                if (quad.data && (quad.data !== d)) {
                    var padding = (quad.data.nodeData.article_id != d._id && quad.data._id != d.nodeData.article_id && d.nodeData.parentIndex != quad.data.nodeData.nodeIndex && d.nodeData.nodeIndex != quad.data.nodeData.parentIndex && d.nodeData.parentIndex != quad.data.nodeData.parentIndex ? _this.paddings.cluster : 0) + _this.paddings.node;
                    var x = (d.x + d.style.width / 2) - (quad.data.x + quad.data.style.width / 2), y = (d.y + d.style.height / 2) - (quad.data.y + quad.data.style.height / 2), xSpacing = (quad.data.style.width + d.style.width) / 2 + padding, ySpacing = (quad.data.style.height + d.style.height) / 2 + padding, absX = Math.abs(x), absY = Math.abs(y), l = void 0, lx = void 0, ly = void 0;
                    if (absX < xSpacing && absY < ySpacing) {
                        l = Math.sqrt(x * x + y * y);
                        lx = (absX - xSpacing) / l * alpha;
                        ly = (absY - ySpacing) / l * alpha;
                        if (Math.abs(lx) > Math.abs(ly)) {
                            lx = 0;
                        }
                        else {
                            ly = 0;
                        }
                        d.x -= x *= lx;
                        d.y -= y *= ly;
                        quad.data.x += x;
                        quad.data.y += y;
                        updated = true;
                    }
                }
                return updated;
            });
        });
    };
    D3Service.prototype.xCenter = function (d) {
        return d.x + d.vx + d.style.width / 2;
    };
    D3Service.prototype.yCenter = function (d) {
        return d.y + d.vy + d.style.height / 2;
    };
    D3Service.prototype.parentOfElement = function (d) {
        return this.nodes[d.nodeData.parentIndex];
    };
    return D3Service;
}());

//# sourceMappingURL=D3Service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var DataService = (function () {
    function DataService() {
    }
    DataService.getColor = function (g, weight) {
        if (weight === void 0) { weight = 0; }
        if (this.COLORS[g].length == 1)
            return this.COLORS[g][0];
        var index = Math.floor(DataService.random() * this.COLORS[g].length);
        return this.COLORS[g][index];
    };
    DataService.random = function () {
        return Math.random();
    };
    return DataService;
}());

DataService.formats = {
    backend: {
        date: 'YYYY-MM-DD',
        startdate: 'YYYY-MM-DD 00:00:00',
        enddate: 'YYYY-MM-DD 23:59:59',
        datetime: 'YYYY-MM-DD HH:mm:ss'
    }
};
DataService.COLORS = {
    g0: ['#ffffff'],
    g1: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'],
    g2: ['#eceff1', '#cfd8dc', '#607d8b', '#546e7a'],
    g3: ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835'],
    g4: ['#d1c4e9', '#b39ddb', '#7e57c2', '#673ab7'],
    g5: ['#fafafa', '#f5f5f5', '#eeeeee'],
    g6: ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4'],
    g7: ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33'],
    g11: ['#ff5722'],
    g12: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043'],
    g13: ['#efebe9', '#d7ccc8', '#bcaaa4'],
    g21: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1'],
    g22: ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00'],
    // states
    S1: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50'],
    S2: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373'],
    S3: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E']
};
DataService.SHAPES = {
    g0: 'article',
    g1: 'ellipse',
    g2: 'rect',
    g3: 'ellipse',
    g4: 'rect',
    g5: 'rect',
    g6: 'rect',
    g7: 'ellipse',
    g11: 'rect',
    g12: 'ellipse',
    g13: 'ellipse',
    g21: 'ellipse',
    g22: 'ellipse' //location
};
DataService.NODE_COUNTS = {
    DEFAULT: { g1: 5, g2: 5, g3: 5, g4: 5, g5: 20, g6: 5, g7: 5, g11: 5, g12: 5, g13: 5, g21: 5, g22: 5 },
    FOCUS: { g1: 10, g2: 10, g3: 10, g4: 10, g10: 20, g6: 10, g7: 10, g11: 1, g12: 10, g13: 10, g21: 10, g22: 10 },
    ARTICLE: { g1: 15, g2: 15, g3: 15, g4: 15, g15: 100, g6: 15, g7: 15, g11: 1, g12: 15, g13: 15, g21: 15, g22: 15 }
};
DataService.SIZES = {
    g0: { font: 14, width: 350, height: 100 },
    g1: { font: { min: 10, max: 24 } },
    g2: { font: { min: 10, max: 18 } },
    g3: { font: { min: 10, max: 24 } },
    g4: { font: { min: 10, max: 18 } },
    g5: { font: { min: 10, max: 14 } },
    g6: { font: { min: 10, max: 18 } },
    g7: { font: { min: 10, max: 24 } },
    g11: { font: { min: 24, max: 24 } },
    g12: { font: { min: 10, max: 24 } },
    g13: { font: { min: 10, max: 24 } },
    g21: { font: { min: 10, max: 24 } },
    g22: { font: { min: 10, max: 24 } } //location
};
//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_app_module__ = __webpack_require__("../../../../../src/app/core/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_core_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map