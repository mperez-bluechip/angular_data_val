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
var debug_panel_component_1 = require('../debug-panel/debug-panel.component');
var OrderSheetComponent = (function () {
    function OrderSheetComponent() {
    }
    OrderSheetComponent = __decorate([
        core_1.Component({
            selector: 'order-sheet',
            directives: [debug_panel_component_1.DebugPanelComponent],
            templateUrl: 'order-sheet.component.html',
            styleUrls: ['order-sheet.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], OrderSheetComponent);
    return OrderSheetComponent;
}());
exports.OrderSheetComponent = OrderSheetComponent;

//# sourceMappingURL=order-sheet.component.js.map
