import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input-box',
    templateUrl: './input-box.component.html',
    styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

    amount: number | null;
    isFocussed: boolean;
    @Output() amountEntered = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
        this.amount = null;
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key == 'Enter' && this.amount != null && this.isFocussed) {
            this.amountEntered.emit(this.amount);
            this.amount = null;
        }
    }
}
