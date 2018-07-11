System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(myElement) {
                    this.query = '';
                    this.countries = ["CO2", "SegmentCO2", "ActualMass", "refco2emission", "PercentageDeviation", "MeanAEC", "StandardDevAEC",
                        "MeanREC", "StandardDevREC", "ConversionValue", "FuelEfficiency", "MassInRunningOrderTotal",
                        "MassOfOptionalEquipmentTotal", "FuelConsumption", "FuelEfficiency", "ElectricConsumption"
                    ];
                    this.filteredList = [];
                    this.elementRef = myElement;
                    this.selectedIdx = -1;
                }
                AppComponent.prototype.filter = function (event) {
                    if (this.query !== "") {
                        this.filteredList = this.countries.filter(function (el) {
                            if (!/^[a-zA-Z0-9]+$/.test(this.query)) {
                                if (this.query.substring(this.query.length - 1) == '+') {
                                    this.Cnt = "a";
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('+') + 1).toLowerCase()) > -1;
                                }
                                else if (this.query.substring(this.query.length - 1) == '-') {
                                    this.Cnt = "b";
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('-') + 1).toLowerCase()) > -1;
                                }
                                else if (this.query.substring(this.query.length - 1) == '(') {
                                    this.Cnt = "c";
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('(') + 1).toLowerCase()) > -1;
                                }
                                else if (this.query.substring(this.query.length - 1) == '*') {
                                    this.Cnt = "d";
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('*') + 1).toLowerCase()) > -1;
                                }
                                else if (this.query.substring(this.query.length - 1) == '/') {
                                    this.Cnt = "e";
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('/') + 1).toLowerCase()) > -1;
                                }
                                else if (this.Cnt == "a") {
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('+') + 1).toLowerCase()) > -1;
                                }
                                else if (this.Cnt == "b") {
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('-') + 1).toLowerCase()) > -1;
                                }
                                else if (this.Cnt == "c") {
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('(') + 1).toLowerCase()) > -1;
                                }
                                else if (this.Cnt == "d") {
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('*') + 1).toLowerCase()) > -1;
                                }
                                else if (this.Cnt == "e") {
                                    return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('/') + 1).toLowerCase()) > -1;
                                }
                            }
                            else {
                                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                            }
                        }.bind(this));
                    }
                    else {
                        this.filteredList = [];
                    }
                };
                AppComponent.prototype.select = function (item) {
                    this.query = item;
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                AppComponent.prototype.handleBlur = function () {
                    if (this.selectedIdx > -1) {
                        this.query = this.filteredList[this.selectedIdx];
                    }
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                AppComponent.prototype.handleClick = function (event) {
                    var clickedComponent = event.target;
                    var inside = false;
                    do {
                        if (clickedComponent === this.elementRef.nativeElement) {
                            inside = true;
                        }
                        clickedComponent = clickedComponent.parentNode;
                    } while (clickedComponent);
                    if (!inside) {
                        this.filteredList = [];
                    }
                    this.selectedIdx = -1;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        host: {
                            '(document:click)': 'handleClick($event)',
                        },
                        template: "\n    <div class=\"container\" >\n    <div class=\"input-field col s12\">\n      <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter($event) (blur)=handleBlur()>\n      <label for=\"country\">List of Variables</label>\n    </div>\n    <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n        <ul *ngFor=\"#item of filteredList;#idx = index\" >\n            <li [class.complete-selected]=\"idx == selectedIdx\">\n                <a (click)=\"select(item)\">{{item}}</a>\n            </li>\n        </ul>\n    </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map