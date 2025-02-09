import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
import { NamesAndSalaries } from '../types';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

    namesAndSalaries: NamesAndSalaries;

    constructor(private calcService: CalcService) { }

    ngOnInit(): void {
        const localStorageNamesAndSalaries = localStorage.getItem('names-and-salaries');
        if (!localStorageNamesAndSalaries) {
            throw Error('Cant be here without having names and salaries saved...')
        }

        this.namesAndSalaries = JSON.parse(localStorageNamesAndSalaries);

        this.calcService.personOnePercentage = this.namesAndSalaries.personOne.percentage;
        this.calcService.personTwoPercentage = this.namesAndSalaries.personTwo.percentage;
    }

}
