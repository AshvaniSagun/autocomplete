import {Component, ElementRef} from 'angular2/core';

@Component({
    selector: 'my-app',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template:`
    <div class="container" >
    <div class="input-field col s12">
      <input id="country" type="text" class="validate filter-input" [(ngModel)]=query (keyup)=filter($event) (blur)=handleBlur()>
      <label for="country">List of Variables</label>
    </div>
    <div class="suggestions" *ngIf="filteredList.length > 0">
        <ul *ngFor="#item of filteredList;#idx = index" >
            <li [class.complete-selected]="idx == selectedIdx">
                <a (click)="select(item)">{{item}}</a>
            </li>
        </ul>
    </div>
</div>
    `
    	
})

export class AppComponent {
    public query = '';
    public countries = ["CO2", "SegmentCO2", "ActualMass", "refco2emission", "PercentageDeviation", "MeanAEC", "StandardDevAEC",
    "MeanREC", "StandardDevREC", "ConversionValue", "FuelEfficiency", "MassInRunningOrderTotal", 
    "MassOfOptionalEquipmentTotal","FuelConsumption", "FuelEfficiency", "ElectricConsumption" 
    ];
    public filteredList = [];
    public elementRef;
    selectedIdx: number;

    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }
    filter(event: any) {
        if (this.query !== "") {
        this.filteredList = this.countries.filter(function (el) {
        if (! /^[a-zA-Z0-9]+$/.test(this.query)) 
        { 
        if (this.query.substring(this.query.length-1) == '+')
        {
        this.Cnt="a";
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('+') + 1).toLowerCase()) > -1; 
        }
        else if (this.query.substring(this.query.length-1) == '-')
        {
        this.Cnt="b";
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('-') + 1).toLowerCase()) > -1; 
        }
        else if (this.query.substring(this.query.length-1) == '(')
        {
        this.Cnt="c";
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('(') + 1).toLowerCase()) > -1; 
        }
        else if (this.query.substring(this.query.length-1) == '*')
        {
        this.Cnt="d";
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('*') + 1).toLowerCase()) > -1; 
        }
        else if (this.query.substring(this.query.length-1) == '/')
        {
        this.Cnt="e";
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('/') + 1).toLowerCase()) > -1; 
        }
        else if(this.Cnt =="a")
        {
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('+') + 1 ).toLowerCase()) > -1; 
        }
        else if(this.Cnt =="b")
        {
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('-') + 1 ).toLowerCase()) > -1; 
        }
        else if(this.Cnt =="c")
        {
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('(') + 1 ).toLowerCase()) > -1; 
        }
        else if(this.Cnt =="d")
        {
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('*') + 1 ).toLowerCase()) > -1; 
        }
        else if(this.Cnt =="e")
        {
        return el.toLowerCase().indexOf(this.query.substring(this.query.lastIndexOf('/') + 1 ).toLowerCase()) > -1; 
        }
        }
        else
        {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }
        }.bind(this));
        } else {
        this.filteredList = [];
        }
        } 

    select(item) {
        this.query = item;
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleClick(event) {
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
    }


}