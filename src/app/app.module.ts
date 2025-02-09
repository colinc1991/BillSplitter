import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ResultContainerComponent } from './result-container/result-container.component';
import { ConfigComponent } from './config/config.component';
import { ResultsComponent } from './results/results.component';
import { ModalComponent } from './modal/modal.component';
import { NamesAndSalariesComponent } from './names-and-salaries/names-and-salaries.component';

@NgModule({
    declarations: [
        AppComponent,
        InputBoxComponent,
        ResultContainerComponent,
        ConfigComponent,
        ResultsComponent,
        ModalComponent,
        NamesAndSalariesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
