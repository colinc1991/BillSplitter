import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
    selector: 'app-result-container',
    templateUrl: './result-container.component.html',
    styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

    totalAmount: number;
    previousAmounts: number[];
    @Input() person: string;
    @Input() personId: number; // need to distinguish between which person we're talking about
    @Output() amountAdded = new EventEmitter<number>();
    @Output() amountRemoved = new EventEmitter<number>();

    constructor(private calcService: CalcService) { }

    ngOnInit(): void {
        this.totalAmount = 0;
        this.previousAmounts = [];
    }

    addToTotal(amount: number): void {
        this.previousAmounts.push(amount);
        this.amountAdded.emit(amount);
        this.setTotalAmount();
    }

    removeAmount(amount: number): void {
        this.previousAmounts = this.previousAmounts.filter(a => a != amount);
        this.amountRemoved.emit(amount);
        this.setTotalAmount();
    }

    sumArray(array: number[]) {
        return array.reduce((partialSum, a) => partialSum + a, 0);
    }

    setTotalAmount() {
        this.totalAmount = this.sumArray(this.previousAmounts);

        if (this.personId == 1) {
            this.calcService.personOneAmount = this.totalAmount;
        }
        else {
            this.calcService.personTwoAmount = this.totalAmount;
        }
    }

}
