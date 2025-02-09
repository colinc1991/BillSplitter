import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CalcService } from '../calc.service';
import { NamesAndSalaries } from '../types';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    totalBill: number | null; // the overall bill needing paid
    personOneAndpersonTwoAmount: number; // how much both people's individual bills add up to
    finalpersonOneAmount: number; // the final individual bill for personOne
    finalpersonTwoAmount: number; // the final individual bill for personTwo
    totalBillIsFocussed: boolean;
    resultsCalculated: boolean;
    namesAndSalaries: NamesAndSalaries;

    @ViewChild('totalBillInput') totalBillInput: ElementRef;
    constructor(private calcService: CalcService) { }

    ngOnInit(): void {
        this.personOneAndpersonTwoAmount = 0;
        const localStorageNamesAndSalaries = localStorage.getItem('names-and-salaries');
        if (!localStorageNamesAndSalaries) {
            throw Error('Cant be here without saved settings...');
        }

        this.namesAndSalaries = JSON.parse(localStorageNamesAndSalaries);
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {

        if (event.key == 'Enter' && this.totalBillIsFocussed) {
            this.totalBill = parseFloat(this.totalBillInput.nativeElement.value);
        }
    }

    calculateMoney() {
        if (this.totalBill) {
            let amountRemaining = this.totalBill - this.personOneAndpersonTwoAmount;
            let personOneAmount = (amountRemaining / 100) * this.calcService.personOnePercentage;
            let personTwoAmount = (amountRemaining / 100) * this.calcService.personTwoPercentage

            this.finalpersonOneAmount = parseFloat((personOneAmount + this.calcService.personOneAmount).toFixed(2));
            this.finalpersonTwoAmount = parseFloat((personTwoAmount + this.calcService.personTwoAmount).toFixed(2));
            this.resultsCalculated = true;
        }
    }

    addToOurAmount(amount: number) {
        this.personOneAndpersonTwoAmount += amount;
    }

    removeFromOurAmount(amount: number) {
        this.personOneAndpersonTwoAmount -= amount;
    }

}
