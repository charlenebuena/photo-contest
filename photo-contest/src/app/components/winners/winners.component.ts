import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-winners',
    templateUrl: './winners.component.html',
    styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
    currentRate = 5;
    photos = null;

    ngOnInit() {
        console.log(localStorage.getItem('totalRatings'));
    }
}
