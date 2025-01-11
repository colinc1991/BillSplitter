import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    totalShopAmount: number | null;
    colinAndHannahAmount: number;
    finalColinAmount: number;
    finalHannahAmount: number;
    totalShopIsFocussed: boolean;
    resultsCalculated: boolean;

    @ViewChild('totalShopInput') totalShopInput: ElementRef;
    constructor(private calcService: CalcService) { }

    ngOnInit(): void {
        this.colinAndHannahAmount = 0;
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {

        if (event.key == 'Enter' && this.totalShopIsFocussed) {
            this.totalShopAmount = parseFloat(this.totalShopInput.nativeElement.value);
        }
    }

    calculateMoney(){
        if (this.totalShopAmount){
            let amountRemaining = this.totalShopAmount - this.colinAndHannahAmount;
            let colinAmount = (amountRemaining / 100) * this.calcService.colinPercentage;
            let hannahAmount = (amountRemaining / 100) * this.calcService.hannahPercentage

            this.finalColinAmount = parseFloat((colinAmount + this.calcService.colinAmount).toFixed(2));
            this.finalHannahAmount = parseFloat((hannahAmount + this.calcService.hannahAmount).toFixed(2));
            this.resultsCalculated = true;
        }
    }

    addToOurAmount(amount: number){
        this.colinAndHannahAmount += amount;
    }

    removeFromOurAmount(amount: number){
        this.colinAndHannahAmount -= amount;
    }

}
