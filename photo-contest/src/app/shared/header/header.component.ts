import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() voteEvent = new EventEmitter();
    @Output() winnersEvent = new EventEmitter();
    title = 'photo-contest';

    onVoteClick() {
        this.voteEvent.emit();
    }

    onWinnersClick() {
        this.winnersEvent.emit();
    }
}
