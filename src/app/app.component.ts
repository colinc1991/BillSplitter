import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'BillSplitter';
    hasExistingSettings: boolean = false;

    ngOnInit(): void {
        const namesAndSalaries = localStorage.getItem('names-and-salaries');
        if (namesAndSalaries) {
            this.hasExistingSettings = true;
        }
    }
}
