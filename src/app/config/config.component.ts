import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

    colinSalary: number;
    hannahSalary: number;
    colinPercentage: number;
    hannahPercentage: number;
    totalSalary: number;

    constructor(private calcService: CalcService) { }

    ngOnInit(): void {
        this.colinSalary = 0;
        this.hannahSalary = 0;
        this.totalSalary = this.colinSalary + this.hannahSalary;

        this.colinPercentage = parseFloat((this.colinSalary / this.totalSalary).toFixed(2)) * 100;
        this.hannahPercentage = 100 - this.colinPercentage;

        this.calcService.colinPercentage = this.colinPercentage;
        this.calcService.hannahPercentage = this.hannahPercentage;
    }

}
