import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { HeaderComponent } from './header/header.component';

import { PhotoService } from '../shared/services/photo.service';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { 
                dataEncapsulation: false 
            }
        )
    ],
    exports: [
        HeaderComponent,
        NgbModule,
        HttpClientModule
    ],
    providers: [
        PhotoService
    ],
})
export class SharedModule { }
