import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Dateform } from "src/app/classes/dateform";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // INPUT
    @Input()
    title: string;

    // @Input()
    // dateForm: Dateform;

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
    dateForm: Dateform;

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.dateForm = new Dateform();
    }

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
            this.dateForm = new Dateform();
        } else {
            this.searchFormActive = false;
            this.toolbar.closeSlidingItems();
        }
    }

    logForm() {
        this.dateFormOutput.emit(this.dateForm);
        this.searchFormActive = false;
        var currentUrl = this.router.url;
        let params = { startDate: this.dateForm.startDate, endDate: this.dateForm.endDate };

        const urlTree = this.router.parseUrl(currentUrl);
        const urlWithoutParams = urlTree.root.children['primary'].segments.map(it => it.path).join('/');


        this.router.navigate([urlWithoutParams], { queryParams: params });
    }

    startDateChanged() {
        //var startDate = new URLSearchParams.append(startDate, this.dateForm.startDate)
    }

    endDateChanged() {
        
    }

}
