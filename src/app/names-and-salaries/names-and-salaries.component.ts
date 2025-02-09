import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NamesAndSalaries } from '../types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-names-and-salaries',
    templateUrl: './names-and-salaries.component.html',
    styleUrls: ['./names-and-salaries.component.scss']
})

export class NamesAndSalariesComponent implements OnInit {

    namesAndSalaries: NamesAndSalaries;
    personOneName: string = "";
    personTwoName: string = "";
    personOneSalary: number = 0;
    personTwoSalary: number = 0;
    namesEntered: boolean = false;
    @Output() settingsSaved = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit(): void {
        this.namesAndSalaries = { personOne: { name: '', salary: 0, percentage: 0 }, personTwo: { name: '', salary: 0, percentage: 0 }, totalSalary: 0 };
    }

    saveNames() {
        this.namesAndSalaries.personOne.name = this.personOneName;
        this.namesAndSalaries.personTwo.name = this.personTwoName;
        this.namesEntered = true;
    }

    saveSalaries() {
        this.namesAndSalaries.personOne.salary = this.personOneSalary;
        this.namesAndSalaries.personTwo.salary = this.personTwoSalary;

        this.namesAndSalaries.totalSalary = this.personOneSalary + this.personTwoSalary;

        if (this.personOneSalary > this.personTwoSalary) {
            this.namesAndSalaries.personOne.percentage = parseFloat((this.personOneSalary / this.namesAndSalaries.totalSalary).toFixed(2)) * 100;
            this.namesAndSalaries.personTwo.percentage = 100 - this.namesAndSalaries.personOne.percentage;
        }
        else {
            this.namesAndSalaries.personTwo.percentage = parseFloat((this.personTwoSalary / this.namesAndSalaries.totalSalary).toFixed(2)) * 100;
            this.namesAndSalaries.personOne.percentage = 100 - this.namesAndSalaries.personTwo.percentage;
        }

        localStorage.setItem('names-and-salaries', JSON.stringify(this.namesAndSalaries));
        this.settingsSaved.emit(true);
    }
}
