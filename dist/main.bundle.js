webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_11__feed_feed_component__["a" /* FeedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__app_routes__["b" /* appRoutingProviders */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["a" /* FeedComponent */]
    },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */]
    },
    {
        path: '**', redirectTo: '' // FIXME: ADD 404
    }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fetch_jsonp__ = __webpack_require__("../../../../fetch-jsonp/build/fetch-jsonp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fetch_jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fetch_jsonp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });


__WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('ru');
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getUserData = function (_a) {
        var user_id = _a.user_id, user_access_token = _a.user_access_token;
        var url = ("\n            https://api.vk.com/api.php?\n                oauth=1&\n                method=users.get&\n                user_ids=" + user_id + "&\n                name_case=Nom&\n                fields=photo_50,online&\n                access_token=" + user_access_token).replace(/ /g, '');
        return __WEBPACK_IMPORTED_MODULE_0_fetch_jsonp__(url)
            .then(function (response) { return response.json(); })
            .then(function (_a) {
            var response = _a.response;
            return response;
        })
            .catch(function (ex) { return console.log('parsing failed', ex); });
    };
    ;
    AppService.prototype.getUserGroups = function (_a) {
        var user_id = _a.user_id, user_access_token = _a.user_access_token, count = _a.count;
        var url = ("\n        https://api.vk.com/api.php?\n            oauth=1&\n            extended=1&\n            method=groups.get&\n            user_id=" + user_id + "&\n            offset=0&\n            count=" + count + "&\n            access_token=" + user_access_token).replace(/ /g, '');
        return __WEBPACK_IMPORTED_MODULE_0_fetch_jsonp__(url)
            .then(function (response) { return response.json(); })
            .then(function (_a) {
            var response = _a.response;
            var length = response[0], groups = response.slice(1);
            return { length: length, groups: groups };
        })
            .catch(function (ex) { return console.log('parsing failed', ex); });
    };
    ;
    AppService.prototype.getWallPosts = function (_a) {
        var owner_id = _a.owner_id, user_access_token = _a.user_access_token, count = _a.count;
        var url = ("\n        https://api.vk.com/api.php?\n            oauth=1&\n            method=wall.get&\n            owner_id=" + owner_id + "&\n            offset=0&\n            count=" + count + "&\n            filter=all&\n            access_token=" + user_access_token).replace(/ /g, '');
        return __WEBPACK_IMPORTED_MODULE_0_fetch_jsonp__(url)
            .then(function (response) { return response.json(); })
            .then(function (_a) {
            var response = _a.response;
            if (response) {
                var length = response[0], posts = response.slice(1);
                return { length: length, posts: posts };
            }
            return null;
        })
            .catch(function (ex) { return console.log('parsing failed', ex); });
    };
    ;
    AppService.prototype.isLiked = function (_a) {
        var user_id = _a.user_id, _b = _a.type, type = _b === void 0 ? 'post' : _b, owner_id = _a.owner_id, item_id = _a.item_id, user_access_token = _a.user_access_token;
        var url = ("\n        https://api.vk.com/api.php?\n            oauth=1&\n            method=likes.isLiked&v=5.65&\n            user_id=" + user_id + "&\n            type=" + type + "&\n            owner_id=" + owner_id + "&\n            item_id=" + item_id + "&\n            access_token=" + user_access_token + "\n            ").replace(/ /g, '');
        return __WEBPACK_IMPORTED_MODULE_0_fetch_jsonp__(url)
            .then(function (response) { return response.json(); })
            .then(function (_a) {
            var response = _a.response;
            return response;
        })
            .catch(function (ex) { return console.log('parsing failed', ex); });
    };
    ;
    AppService.prototype.formatPost = function (post, response) {
        post.text = post.text.replace(/<br\s*\/?>/gi, ' ');
        post.date = __WEBPACK_IMPORTED_MODULE_1_moment__(post.date * 1000).format('LL');
        post.reposted = response.copied;
        return post;
    };
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(activatedRoute, authService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = {
            access_token: '',
            user_id: '',
            expires_in: 0
        };
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.authService.getAndSetCookie();
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string__ = __webpack_require__("../../../../query-string/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ;
    AuthService.prototype.update = function () {
        this.cookies = __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].getAll();
    };
    AuthService.prototype.removeCookie = function (rName) {
        this.update();
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].delete(rName);
    };
    AuthService.prototype.setCookie = function (_a) {
        var rName = _a.rName, rValue = _a.rValue, rExpires = _a.rExpires;
        console.log('hello');
        this.cookies = __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set(rName, rValue, rExpires);
        this.update();
    };
    AuthService.prototype.login = function () {
        document.location.href = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].get_token_url;
    };
    AuthService.prototype.logout = function () {
        this.removeCookie('access_token');
        this.update();
    };
    AuthService.prototype.loggedIn = function () {
        this.update();
        return 'access_token' in this.cookies ? true : false;
    };
    AuthService.prototype.getAndSetCookie = function () {
        var _this = this;
        var routeFragment = this.activatedRoute.fragment;
        routeFragment.subscribe(function (fragment) {
            if (('access_token' && 'user_id' && 'expires_in') in __WEBPACK_IMPORTED_MODULE_3_query_string__["parse"](fragment)) {
                _this.setCookie({
                    rName: 'access_token',
                    rValue: __WEBPACK_IMPORTED_MODULE_3_query_string__["parse"](fragment).access_token,
                    rExpires: (__WEBPACK_IMPORTED_MODULE_3_query_string__["parse"](fragment).expires_in / 60 / 60 / 24)
                });
            }
            _this.update();
            _this.router.navigate(['/']);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div>\n\n  <md-toolbar color=\"primary\">\n    <span>\n      <a [routerLink]=\"['/']\">VK Liked Posts</a>\n      <span *ngIf=\"((timer - counter * TIMEOUT_STEP) / 1000) > 0\"> | \n        <i class=\"material-icons md-18\"> access_time </i> {{ (timer - counter * TIMEOUT_STEP) / 1000 }}\n      </span>\n    </span>\n    <button md-icon-button *ngIf=\"authService.loggedIn()\" (click)=\"authService.logout()\">Log Out</button>\n    <button md-icon-button *ngIf=\"!authService.loggedIn()\" (click)=\"authService.login()\">Log In</button>\n  </md-toolbar>\n  <md-card *ngIf=\"!authService.loggedIn()\">\n    <span>\n      Для взаимодействия с данными VK.com требуется авторизация!\n    </span>\n  </md-card>\n  <md-tab-group [selectedIndex]=\"selectedTab\" *ngIf=\"authService.loggedIn()\">\n\n    <md-tab label=\"Посты\" *ngIf=\"posts.length\">\n      <md-card *ngFor=\"let post of posts\">\n      <md-card-header>\n        <md-card-title>{{post.date}}</md-card-title>\n        <md-card-subtitle *ngIf=\"post.reposted === 1\">\n          <i class=\"material-icons md-18\"> reply </i> репост\n        </md-card-subtitle>\n      </md-card-header>\n        <img *ngIf=\"post.attachment && post.attachment.type === 'link'\" md-card-image src=\"{{post.attachment.link.image_big}}\" alt=\"\">\n        <img *ngIf=\"post.attachment && post.attachment.type === 'photo'\" md-card-image src=\"{{post.attachment.photo.src_big}}\" alt=\"\">\n        <md-card-content>\n          <p>\n            {{ post.text }}\n          </p>\n        </md-card-content>\n        <md-card-actions>\n          <button (click)=\"showOriginal(post)\" md-button>\n            <i class=\"material-icons md-18\"> visibility </i> ОРИГИНАЛ\n          </button>\n        </md-card-actions>\n\n      </md-card>\n\n    </md-tab>\n\n    <md-tab label=\"Пользователь\" *ngIf=\"!currentUser.uid || currentUser.deactivated\">\n      <md-card>\n        <md-card-content>\n          <form novalidate (submit)=\"submitUserForm($event, userForm.value)\" #userForm=\"ngForm\">\n            <md-input-container class=\"md-block\">\n              <input mdInput ngModel required min=\"0\" name=\"user_id\" placeholder=\"ID кого искать\" type=\"number\">\n            </md-input-container>\n            <div class=\"md-errors-spacer\"></div>\n\n            <button md-raised-button color=\"primary\" [disabled]=\"!userForm.valid\" type=\"submit\">Найти</button>\n          </form>\n        </md-card-content>\n      </md-card>\n\n    </md-tab>\n\n    <md-tab label=\"Поиск лайков\" *ngIf=\"currentUser.uid && !currentUser.deactivated\">\n      <md-card>\n        <md-card-header>\n          <div md-card-avatar><img src=\"{{currentUser.photo_50}}\" alt=\"\"></div>\n          <md-card-title>{{currentUser.first_name}} {{currentUser.last_name}}</md-card-title>\n          <md-card-subtitle *ngIf=\"currentUser.online === 1\">Online</md-card-subtitle>\n          <md-radio-group name=\"radio\" [(ngModel)]=\"radio\">\n            <md-radio-button value=\"user_groups\">Группы пользователя</md-radio-button>\n            <md-radio-button value=\"other_groups\">Другие группы</md-radio-button>\n          </md-radio-group>\n        </md-card-header>\n        <md-card-content>\n          <form novalidate (submit)=\"submitWallForm($event, wallForm)\" #wallForm=\"ngForm\">\n            <md-input-container *ngIf=\"radio === 'other_groups'\" class=\"md-block\">\n              <input mdInput ngModel required name=\"group_id\" placeholder=\"ID где искать\" type=\"number\">\n            </md-input-container>\n\n            <md-select *ngIf=\"radio === 'user_groups'\" ngModel name=\"group_id\" style=\"width: 100%\" placeholder=\"Группы пользователя\">\n              <md-option mdInput *ngFor=\"let group of currentUserGroups\" [value]=\"group.gid * -1\">\n                <img style=\"width: 30px; height: 30px; margin: auto auto\" src=\"{{group.photo}}\">\n                {{group.name}}\n              </md-option>\n            </md-select>\n\n            <md-input-container class=\"md-block\">\n              <input mdInput min=\"1\" ngModel required name=\"posts_count\" placeholder=\"Кол-во постов\" type=\"number\">\n            </md-input-container>\n            <div class=\"md-errors-spacer\"></div>\n\n            <button md-raised-button color=\"primary\" type=\"button\" [disabled]=\"searchingIsRunning\" (click)=\"backToUserForm($event)\">Вернуться</button>\n            <button md-raised-button color=\"primary\" [disabled]=\"!wallForm.valid || searchingIsRunning\" type=\"submit\">Найти</button>\n          </form>\n        </md-card-content>\n      </md-card>\n    </md-tab>\n\n  </md-tab-group>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none;\n  color: #fff; }\n\nform {\n  margin: 0 auto;\n  width: 90%; }\n\ni {\n  font-family: 'Material Icons';\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n  font-weight: normal;\n  font-style: normal;\n  font-size: inherit;\n  line-height: inherit;\n  vertical-align: top;\n  display: inline-block;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale; }\n\nmd-card {\n  width: 100%; }\n  md-card.mat-card {\n    padding: 24px 0; }\n  md-card md-card-header.mat-card-header {\n    width: 90%;\n    margin: 0 auto; }\n  md-card div.mat-card-avatar img {\n    border-radius: 20px;\n    width: 100%;\n    height: 100%; }\n\nmd-input-container {\n  width: 100%; }\n\n@media (min-width: 700px) {\n  md-card {\n    width: 600px;\n    margin: 5px auto; }\n    md-card.mat-card {\n      padding: 24px; }\n    md-card div.mat-card-avatar img {\n      border-radius: 20px;\n      width: 100%;\n      height: 100%; }\n  form {\n    margin: 0 auto;\n    width: 200px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedComponent = (function () {
    function FeedComponent(appService, authService, snackBar) {
        this.appService = appService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.TIMEOUT_STEP = 400;
        this.currentUser = {};
        this.currentUserGroups = [];
        this.searchingIsRunning = false;
        this.radio = 'user_groups'; // 'other_groups'
        this.posts = [];
        this.timer = 0;
        this.counter = 0;
        this.selectedTab = 1;
    }
    FeedComponent.prototype.getAndFilterPosts = function (_a) {
        var _this = this;
        var owner_id = _a.owner_id, user_id = _a.user_id, count = _a.count, user_access_token = _a.user_access_token;
        if (this.authService.loggedIn()) {
            this.searchingIsRunning = true;
            this.appService.getWallPosts({
                owner_id: owner_id,
                count: count,
                user_access_token: user_access_token
            })
                .catch(function (e) { console.log(e); })
                .then(function (response) {
                if (response) {
                    var timeOut_1 = 0;
                    response.posts.map(function (post) {
                        timeOut_1 += _this.TIMEOUT_STEP;
                        setTimeout(function () {
                            _this.appService
                                .isLiked({
                                user_id: user_id,
                                type: 'post',
                                owner_id: owner_id,
                                item_id: post.id,
                                user_access_token: user_access_token
                            })
                                .then(function (isliked_response) {
                                _this.counter += 1;
                                if (isliked_response && 'liked' in isliked_response) {
                                    if (Boolean(isliked_response.liked)) {
                                        _this.posts.push(_this.appService.formatPost(post, isliked_response));
                                    }
                                }
                                else {
                                    console.log('problems with getting response, skipped');
                                }
                                if (_this.counter === response.posts.length) {
                                    _this.searchingIsRunning = false;
                                    if (!_this.posts.length) {
                                        _this.snackBar.open('Ни одного поста с лайком', 'ОК');
                                    }
                                }
                            });
                        }, timeOut_1);
                    });
                    _this.timer = timeOut_1;
                }
                else {
                    _this.showError();
                }
            });
        }
    };
    FeedComponent.prototype.showOriginal = function (post) {
        if (post.post_type === 'post') {
            document.location.href = "https://vk.com/wall" + post.to_id + "_" + post.id;
        }
    };
    FeedComponent.prototype.showError = function (error, error_description) {
        this.snackBar.open('Что-то пошло не так', 'ОК');
        console.log('No response, sorry');
    };
    FeedComponent.prototype.submitUserForm = function (event, data) {
        event.preventDefault();
        if (data.user_id >= 0) {
            this.getUserAndUserGroups({ user_id: data.user_id, user_access_token: this.authService.cookies.access_token });
        }
        else {
            this.snackBar.open('Неправильный ID пользователя', 'ОК');
        }
    };
    FeedComponent.prototype.submitWallForm = function (event, data) {
        this.posts = [];
        this.timer = 0;
        this.counter = 0;
        event.preventDefault();
        this.selectedTab = 0;
        this.getAndFilterPosts({
            owner_id: data.form.value.group_id,
            user_id: this.currentUser.uid,
            count: data.form.value.posts_count,
            user_access_token: this.authService.cookies.access_token
        });
    };
    FeedComponent.prototype.getUserAndUserGroups = function (_a) {
        var _this = this;
        var user_id = _a.user_id, user_access_token = _a.user_access_token;
        this.appService
            .getUserData({ user_id: user_id, user_access_token: user_access_token })
            .then(function (response) {
            if (!response) {
                _this.showError();
            }
            else {
                _this.currentUser = response[0];
                if ('deactivated' in _this.currentUser) {
                    _this.snackBar.open("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441: " + _this.currentUser.deactivated, 'OK');
                }
                else {
                    _this.appService
                        .getUserGroups({ user_id: _this.currentUser.uid,
                        user_access_token: _this.authService.cookies.access_token,
                        count: 100 })
                        .then(function (groups_response) {
                        _this.currentUserGroups = groups_response.groups;
                    });
                }
            }
        });
    };
    FeedComponent.prototype.backToUserForm = function (event) {
        event.preventDefault();
        this.posts = [];
        this.currentUser = { uid: null };
        this.currentUserGroups = null;
    };
    FeedComponent.prototype.ngOnInit = function () {
        this.authService.update();
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-feed',
        template: __webpack_require__("../../../../../src/app/feed/feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feed/feed.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _c || Object])
], FeedComponent);

var _a, _b, _c;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    get_token_url: 'https://oauth.vk.com/authorize?client_id=6099251&scope=8192&redirect_uri=https://dwnste.github.io/vklikedposts/auth&response_type=token'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
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