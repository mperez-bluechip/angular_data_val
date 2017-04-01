"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var counter_1 = require('./counter');
var SandoAppComponent = (function () {
    function SandoAppComponent() {
        this.title = "Jackson's Deli and Market";
    }
    SandoAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sando-app',
            directives: [counter_1.OrderSheetComponent],
            templateUrl: 'sando-app.component.html',
            styleUrls: ['sando-app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SandoAppComponent);
    return SandoAppComponent;
}());
exports.SandoAppComponent = SandoAppComponent;

//# sourceMappingURL=sando-app.component.js.map
