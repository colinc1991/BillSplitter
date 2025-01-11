import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalcService {

    colinAmount: number = 0;
    hannahAmount: number = 0;
    colinPercentage: number = 0;
    hannahPercentage: number = 0;
    
    constructor() {}
}
