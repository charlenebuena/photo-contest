import { Component, OnInit } from '@angular/core';

interface OverallRating {
    _id: number;
    title: string;
    total: number;
    voters: number;
    average: number;
}

@Component({
    selector: 'app-winners',
    templateUrl: './winners.component.html',
    styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {
    currentRate = 5;
    isLoading = false;
    photos = null;
    overRate: OverallRating[] = [];

    ngOnInit() {
        // localStorage.removeItem('userRatings');
        // localStorage.removeItem('totalRatings');

        if (localStorage.getItem('totalRatings')) {
            this.isLoading = true;
            this.photos = JSON.parse(localStorage.getItem('totalRatings'));
            this.addPhotoRatings();
        } else {
            alert('There are no votes');
        }
    }

    addPhotoRatings() {
        for (let x = 0; x < this.photos.length; x++) {
            for (let photo of this.photos[x]) {
                // overRate not empty
                if (this.overRate.length > 0) {
                    let ctr = 0;

                    for (let x = 0; x < this.overRate.length; x++, ctr++) {
                        // existing photo
                        if (photo._id === this.overRate[x]._id) {
                            this.overRate[x].total += photo.photoRating;
                            this.overRate[x].voters += 1;
                            break;
                        }
                    }

                    // overRate not empty but first push for different photo
                    if (ctr === this.overRate.length) {
                        this.overRate.push({
                            _id: photo._id,
                            title: photo.title,
                            total: photo.photoRating,
                            voters: photo.photoRating > 0 ? 1 : 0,
                            average: 0
                        });
                    }
                // overRate is Empty
                } else {
                    this.overRate.push({
                        _id: photo._id,
                        title: photo.title,
                        total: photo.photoRating,
                        voters: photo.photoRating > 0 ? 1 : 0,
                        average: 0
                    });
                }
            }
        }

        this.getAverage();
    }

    determineTopPhotos() {
        var hold = null;

        for (let x = hold = 0; x < this.overRate.length; x++) {
            for (let y = 0; y < this.overRate.length; y++) {
                if (this.overRate[y].average < this.overRate[x].average) {
                    hold = this.overRate[x];
                    this.overRate[x] = this.overRate[y];
                    this.overRate[y] = hold;
                }
            }
        }

        this.overRate = this.overRate.slice(0,6);
        this.isLoading = false;
        console.log(this.overRate);
    }

    getAverage() {
        for (let x = 0; x < this.overRate.length; x++) {
            this.overRate[x].average = this.overRate[x].total / this.overRate[x].voters;
        }

        this.determineTopPhotos();
    }    
}






