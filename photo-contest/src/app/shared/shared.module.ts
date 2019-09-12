import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        NgbModule
    ],
    exports: [
        NgbModule,
        HeaderComponent
    ],
    providers: [],
})
export class SharedModule { }
