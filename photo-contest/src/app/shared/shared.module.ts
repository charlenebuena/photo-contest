import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';

import { PhotoService } from '../shared/services/photo.service';


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
    providers: [
        PhotoService
    ],
})
export class SharedModule { }
