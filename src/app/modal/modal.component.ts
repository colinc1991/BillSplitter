import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {
    dialogText: string;
    isOpen: boolean = false;
    private modalSubscription: Subscription;

    constructor() {

        this.isOpen = true;
        this.dialogText = "";
        // this.modalSubscription = this.mealService.modalState$.subscribe((dialogueText) => {

        //     if (dialogueText == "") {
        //         this.isOpen = false;
        //     }
        //     else {
        //         this.isOpen = true;
        //         this.dialogText = dialogueText;
        //     }
        // })
    }

    ngOnDestroy(): void {
        if (this.modalSubscription) {
            this.modalSubscription.unsubscribe();
        }
    }

    closeDialogue() {
        //this.mealService.closeModal();
    }
}