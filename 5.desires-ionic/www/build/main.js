webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pending_pending_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__done_done_component__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pending_pending_component__["a" /* PendingComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__done_done_component__["a" /* DoneComponent */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Pending" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Done" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_desires_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingComponent = (function () {
    function PendingComponent(desireListService, navController) {
        this.desireListService = desireListService;
        this.navController = navController;
    }
    PendingComponent.prototype.ngOnInit = function () {
    };
    PendingComponent.prototype.gotoAdd = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__add_add_component__["a" /* AddComponent */]);
    };
    PendingComponent.prototype.gotoDetails = function (list, i) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail_component__["a" /* DetailComponent */], { list: list, i: i });
    };
    PendingComponent.prototype.update = function (item, list) {
        item.completed = !item.completed;
        var evrythCompleted = true;
        for (var _i = 0, _a = list.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completed) {
                evrythCompleted = false;
                break;
            }
        }
        list.completed = evrythCompleted;
        this.desireListService.saveLists();
    };
    return PendingComponent;
}());
PendingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-pending',template:/*ion-inline-start:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\pending\pending.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Pending</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid *ngIf="(desireListService.lists | pending).length == 0">\n\n    <ion-row>\n\n      <ion-col class="text-center emptyview">\n\n        <ion-icon name="ios-cloud-outline" class="big-icon"></ion-icon>\n\n        <p>\n\n          There is no list.\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card *ngFor="let list of desireListService.lists | pending; let i = index">\n\n\n\n    <ion-item (click)="gotoDetails(list, i)">\n\n      {{ list.name }}\n\n      <ion-note item-right>\n\n        {{list.items.length}} items\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item *ngFor="let item of list.items | slice:0:2">\n\n          <ion-label [class.linethrough]="item.completed">{{ item.name }}</ion-label>\n\n          <ion-checkbox color="primary" *ngIf="item.completed" checked="true" (click)="update(item, list)"></ion-checkbox>\n\n          <ion-checkbox color="primary" *ngIf="!item.completed" checked="false" (click)="update(item, list)"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="list.items.length > 2" style="text-align:center;" (click)="gotoDetails(list, i)">\n\n          <ion-icon color="primary" name="ios-arrow-dropdown-outline"></ion-icon>\n\n        </ion-item>\n\n\n\n\n\n      </ion-list>\n\n\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="primary" (click)="gotoAdd()">\n\n      <ion-icon name="add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\pending\pending.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_desires_service__["a" /* DesiresService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
], PendingComponent);

//# sourceMappingURL=pending.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_classes_index__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_desires_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = (function () {
    function AddComponent(alertController, navController, desiresService) {
        this.alertController = alertController;
        this.navController = navController;
        this.desiresService = desiresService;
        this.listName = "";
        this.itemName = "";
        this.items = [];
    }
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent.prototype.addItem = function () {
        if (this.itemName.length != 0) {
            var item = new __WEBPACK_IMPORTED_MODULE_1__app_classes_index__["b" /* ListItem */](this.itemName);
            this.items.push(item);
            this.itemName = "";
        }
    };
    AddComponent.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
    };
    AddComponent.prototype.saveList = function () {
        if (this.listName.length == 0) {
            var alert_1 = this.alertController.create({
                title: 'List name.',
                subTitle: 'You didn\'t give a name to the list',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        if (this.listName.length > 0) {
            var list = new __WEBPACK_IMPORTED_MODULE_1__app_classes_index__["a" /* List */](this.listName);
            list.items = this.items;
            this.desiresService.addList(list);
            this.navController.pop();
        }
    };
    return AddComponent;
}());
AddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-add',template:/*ion-inline-start:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\add\add.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ listName | placeholder:"New list"}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-item>\n\n        <ion-label floating>List name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="listName" name="listName"></ion-input>\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n\n        <ion-label floating>Item:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="itemName" name="itemName" (keyup.enter)="addItem()"></ion-input>\n\n      </ion-item>\n\n      <button ion-button icon-left color="secondary" round (click)="addItem()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n        Add\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="items.length > 0">\n\n    <ion-card-header>\n\n      Added items\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item *ngFor="let item of items; let i = index">\n\n\n\n        <button ion-button clear color="dark">\n\n          {{ item.name }}\n\n        </button>\n\n        <button ion-button outline icon-left item-right color="danger" (click)="deleteItem(i)">\n\n          <ion-icon name="trash"></ion-icon>\n\n           Delete\n\n        </button>\n\n\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button icon-left class="button-block" (click)="saveList()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Add list\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\add\add.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_desires_service__["a" /* DesiresService */]])
], AddComponent);

//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_desires_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoneComponent = (function () {
    function DoneComponent(desireListService, navController) {
        this.desireListService = desireListService;
        this.navController = navController;
    }
    DoneComponent.prototype.ngOnInit = function () { };
    DoneComponent.prototype.gotoDetails = function (list, i) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail_component__["a" /* DetailComponent */], { list: list, i: i });
    };
    DoneComponent.prototype.update = function (item, list) {
        item.completed = !item.completed;
        var evrythCompleted = true;
        for (var _i = 0, _a = list.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completed) {
                evrythCompleted = false;
                break;
            }
        }
        list.completed = evrythCompleted;
        this.desireListService.saveLists();
    };
    return DoneComponent;
}());
DoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-done',template:/*ion-inline-start:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\done\done.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Done</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid *ngIf="(desireListService.lists | pending:true).length == 0">\n\n    <ion-row>\n\n      <ion-col class="text-center emptyview">\n\n        <ion-icon name="ios-cloud-outline" class="big-icon"></ion-icon>\n\n        <p>\n\n          There is no list.\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card *ngFor="let list of desireListService.lists | pending:true; let i = index">\n\n\n\n    <ion-item (click)="gotoDetails(list, i)">\n\n      {{ list.name }}\n\n      <ion-note item-right>\n\n        {{list.items.length}} items\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item *ngFor="let item of list.items | slice:0:2">\n\n          <ion-label [class.linethrough]="item.completed">{{ item.name }}</ion-label>\n\n          <ion-checkbox color="primary" *ngIf="item.completed" checked="true" (click)="update(item, list)"></ion-checkbox>\n\n          <ion-checkbox color="primary" *ngIf="!item.completed" checked="false" (click)="update(item, list)"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="text-center" *ngIf="list.items.length > 2" (click)="gotoDetails(list, i)">\n\n          <ion-icon color="primary" name="ios-arrow-dropdown-outline"></ion-icon>\n\n        </ion-item>\n\n\n\n\n\n      </ion-list>\n\n\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\done\done.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_desires_service__["a" /* DesiresService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], DoneComponent);

//# sourceMappingURL=done.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_desires_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_placeholder_pipe__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pending_pipe__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pending_pending_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_done_done_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_add_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail_component__ = __webpack_require__(99);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pending_pending_component__["a" /* PendingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_done_done_component__["a" /* DoneComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_add_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_placeholder_pipe__["a" /* PlaceholderPipe */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_pending_pipe__["a" /* PendingPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail_component__["a" /* DetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pending_pending_component__["a" /* PendingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_done_done_component__["a" /* DoneComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_add_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail_component__["a" /* DetailComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_desires_service__["a" /* DesiresService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_item__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__list_item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__list__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItem; });
var ListItem = (function () {
    function ListItem(name) {
        this.name = name;
        this.completed = false;
    }
    return ListItem;
}());

//# sourceMappingURL=list-item.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
var List = (function () {
    function List(name) {
        this.name = name;
        this.completed = false;
    }
    return List;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceholderPipe = (function () {
    function PlaceholderPipe() {
    }
    PlaceholderPipe.prototype.transform = function (value, defaultText) {
        return (value) ? value : defaultText;
    };
    return PlaceholderPipe;
}());
PlaceholderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'placeholder'
    })
], PlaceholderPipe);

//# sourceMappingURL=placeholder.pipe.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PendingPipe = (function () {
    function PendingPipe() {
    }
    PendingPipe.prototype.transform = function (lists, status) {
        if (status === void 0) { status = false; }
        var wantedLists = [];
        for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
            var list = lists_1[_i];
            if (list.completed == status) {
                wantedLists.push(list);
            }
        }
        return wantedLists;
    };
    return PendingPipe;
}());
PendingPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'pending',
        pure: false
    })
], PendingPipe);

//# sourceMappingURL=pending.pipe.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesiresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesiresService = (function () {
    function DesiresService() {
        this.lists = [];
        this.loadLists();
    }
    DesiresService.prototype.loadLists = function () {
        if (localStorage.getItem("lists")) {
            this.lists = JSON.parse(localStorage.getItem("lists"));
        }
    };
    DesiresService.prototype.saveLists = function () {
        localStorage.setItem("lists", JSON.stringify(this.lists));
    };
    DesiresService.prototype.addList = function (list) {
        this.lists.push(list);
        this.saveLists();
    };
    DesiresService.prototype.removeList = function (idx) {
        this.lists.splice(idx, 1);
        this.saveLists();
    };
    return DesiresService;
}());
DesiresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DesiresService);

//# sourceMappingURL=desires.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_desires_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(navController, navParams, desiresService, alertCtrl) {
        this.navController = navController;
        this.navParams = navParams;
        this.desiresService = desiresService;
        this.alertCtrl = alertCtrl;
        this.list = this.navParams.get("list");
        this.i = this.navParams.get("i");
    }
    DetailComponent.prototype.ngOnInit = function () { };
    DetailComponent.prototype.update = function (item) {
        item.completed = !item.completed;
        var evrythCompleted = true;
        for (var _i = 0, _a = this.list.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completed) {
                evrythCompleted = false;
                break;
            }
        }
        this.list.completed = evrythCompleted;
        this.desiresService.saveLists();
    };
    DetailComponent.prototype.deleteList = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.list.name,
            message: 'Do you want to delete this list?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.desiresService.removeList(_this.i);
                        _this.navController.pop();
                    }
                }, 'No'
            ]
        });
        confirm.present();
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-detail',template:/*ion-inline-start:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\detail\detail.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>List name</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-item>\n\n        <ion-label floating>List name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="list.name"></ion-input>\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of list.items">\n\n            <ion-label [class.linethrough]="item.completed">{{ item.name }}</ion-label>\n\n            <ion-checkbox color="primary" *ngIf="item.completed" checked="true" (click)="update(item)"></ion-checkbox>\n\n            <ion-checkbox color="primary" *ngIf="!item.completed" checked="false" (click)="update(item)"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="deleteList()" ion-button class="button-block" color="danger">Delete list</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\workspace\programacionWeb\JSYDerivados\angular\5.desires-ionic\src\pages\detail\detail.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_desires_service__["a" /* DesiresService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DetailComponent);

//# sourceMappingURL=detail.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map