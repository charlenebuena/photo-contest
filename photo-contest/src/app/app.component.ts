import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showImageList = false;
    showWinners = false;

    voteEventTriggered() {
        this.showImageList = true;
        this.showWinners = false;
    }

    winnersEventTriggered() {
        this.showWinners = true;
        this.showImageList = false;
    }
}
