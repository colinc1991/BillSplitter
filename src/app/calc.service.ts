import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalcService {

    personOneAmount: number = 0;
    personTwoAmount: number = 0;
    personOnePercentage: number = 0;
    personTwoPercentage: number = 0;

    constructor() { }
}
