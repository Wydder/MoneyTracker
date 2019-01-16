import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Dateform } from "src/app/classes/dateform";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // INPUT
    @Input()
    title: string;

    @Input()
    dateForm: Dateform;

    @Output()
    chartModeOutput: EventEmitter<any> = new EventEmitter();

    @Output()
    listModeOutput: EventEmitter<any> = new EventEmitter();

    @Output()
    dateFormOutput: EventEmitter<Dateform> = new EventEmitter();

    // work arround bug ionic
    @ViewChild('toolbar')
    toolbar;

    /**
     ** Variables
     */
    searchFormActive: boolean = false;
    chartMode: boolean = true;
    //dateForm: Dateform = new Dateform();

    constructor() {

    }

    ngOnInit() { }

    onChartMode(chartMode) {
        if (this.chartMode) {
            this.chartModeOutput.emit(this.chartMode);
        } else {
            this.listModeOutput.emit(this.chartMode);
        }
    }

    searchContainer() {
        if (!this.searchFormActive) {
            this.searchFormActive = true;
        } else {
            this.searchFormActive = false;
            this.toolbar.closeSlidingItems();
        }
    }

    logForm() {
        this.dateFormOutput.emit(this.dateForm);
        this.searchFormActive = false;
    }

}
