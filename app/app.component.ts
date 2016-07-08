import { Component, OnInit } from '@angular/core';

import { DxForm } from 'devextreme-angular2';

@Component({
    selector: 'my-app',
    template: '<dx-form [(formData)]="model"></dx-form><button (click)="change()">Change value</button>',
    directives: [DxForm]
})
export class AppComponent implements OnInit { 
    model: any;

    change() {
        alert(`Current value: ${this.model.reportNumber}. Changing it to 'foo'`);
        this.model.reportNumber = "foo";
    }

    ngOnInit() {
        let report = { reportNumber: "123" };
        this.model = report;
    }
}
