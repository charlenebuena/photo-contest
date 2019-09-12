import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ImageListComponent } from '../components/image-list/image-list.component';
import { WinnersComponent } from '../components/winners/winners.component';

@NgModule({
    declarations: [
        ImageListComponent,
        WinnersComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        ImageListComponent,
        WinnersComponent
    ],
    providers: [
    ],
})
export class ComponentsModule { }
