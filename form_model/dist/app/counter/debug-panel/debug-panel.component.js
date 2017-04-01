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
var DebugPanelComponent = (function () {
    function DebugPanelComponent() {
        this.hasContent = false;
        this.isVisible = false;
        this.isVisible = localStorage.getItem('debugIsVisible') === 'true';
    }
    Object.defineProperty(DebugPanelComponent.prototype, "content", {
        get: function () { return this.hasContent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugPanelComponent.prototype, "visible", {
        get: function () { return this.isVisible; },
        enumerable: true,
        configurable: true
    });
    DebugPanelComponent.prototype.ngOnInit = function () {
        this.hasContent = (this.data);
    };
    DebugPanelComponent.prototype.onSaveState = function () {
        localStorage.setItem('debugIsVisible', this.isVisible.toString());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DebugPanelComponent.prototype, "data", void 0);
    __decorate([
        core_1.HostBinding('class.has-content'), 
        __metadata('design:type', Object)
    ], DebugPanelComponent.prototype, "content", null);
    __decorate([
        core_1.HostBinding('class.is-visible'), 
        __metadata('design:type', Object)
    ], DebugPanelComponent.prototype, "visible", null);
    DebugPanelComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'debug-panel',
            template: "\n    <input id=\"debugToggle\" type=\"checkbox\" (change)=\"isVisible = !isVisible;onSaveState()\">\n    <label for=\"debugToggle\"></label>\n    <div>\n      <pre>{{ data | json }}</pre>\n    </div>\n  ",
            styles: ["\n    :host {\n      display: none;\n    }\n    :host.has-content {\n      display: block;\n      background-color: rgba(237, 119, 119, .9);\n      position: fixed;\n      top: 0;\n      right: 0;\n    }\n    :host.is-visible {\n      bottom: 0;\n      min-width: 50%;\n    }\n    input[type=checkbox] {\n      display: none;\n    }\n    label {\n      display: block;\n      text-align: center;\n      height: 1.6em;\n      padding: .4em;\n      line-height: 1.3em;\n    }\n    label:before {\n      content: \"show debug\";\n      width: 100%;\n      cursor: pointer;\n    }\n    input[type=checkbox]:checked+label:before {\n      content: \"hide debug\";\n    }\n    :host.is-visible div {\n      display: block;\n      height: calc(100% - 1.6em);\n    }\n    div {\n      display: none;\n      overflow: auto;\n    }\n    pre {\n      font-size: 2em;\n      padding: 20px;\n      margin: 0;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], DebugPanelComponent);
    return DebugPanelComponent;
}());
exports.DebugPanelComponent = DebugPanelComponent;

//# sourceMappingURL=debug-panel.component.js.map
