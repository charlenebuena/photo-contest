import { Component, ViewChild } from '@angular/core';
import { ImageListComponent } from './components/image-list/image-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showImageList = false;
    showWinners = false;

    @ViewChild(ImageListComponent, {static: false}) imageList: ImageListComponent;

    voteEventTriggered() {
        this.showImageList = true;
        this.showWinners = false;
    }

    winnersEventTriggered() {
        this.showWinners = true;
        this.showImageList = false;
    }

    /************************************

    git log --pretty=format:'%h : %s' --graph > log.log

    *************************************/


}
