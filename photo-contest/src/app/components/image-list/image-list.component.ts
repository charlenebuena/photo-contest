import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../shared/services/photo.service';
import { Entry } from '../../shared/models/photo-structure';

@Component({
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit{
    ctr = null;
    showCurrentUser = false;
    isLoading = false;    
    photos: Entry[] | any  = [];
    showPhotos = false;
    totalRatings = null;

    constructor(
        private photoService: PhotoService
    ){}

    ngOnInit() {
        // localStorage.removeItem('userRatings');
        // localStorage.removeItem('totalRatings');
        this.showCurrentUser = localStorage.getItem('userRatings') ? true : false;
        this.photos = localStorage.getItem('userRatings') ? JSON.parse(localStorage.getItem('userRatings')) : null;
        this.totalRatings = localStorage.getItem('totalRatings') ? JSON.parse(localStorage.getItem('totalRatings')) : null;
    }

    getPhotos() {
        this.photoService.getPhotos().subscribe(
            resp => {
                this.photos = resp;
                this.photos.map(obj => { obj['photoRating'] = 0; return obj});
                this.photos.map(obj => { obj['showDetails'] = false; return obj});
            }, 
            err => console.error(err),
            () => this.sortPhotosByName()
        );
    }

    onChangeRate(index) {
        this.ctr = 0;
        for (let photo of this.photos) {
            this.ctr += photo.photoRating > 0 ? 1 : 0;
        }

        if (this.ctr > 10) {
            this.photos[index].photoRating = 0;
            alert('You can only vote up to 10 photos');
        } else {
            localStorage.setItem('userRatings', JSON.stringify(this.photos));
        }
    }

    onClearVote(index) {
        this.photos[index]['photoRating'] = 0;
        localStorage.setItem('userRatings', JSON.stringify(this.photos));
    }

    onCurrentUser() {
        this.photos = localStorage.getItem('userRatings') ? JSON.parse(localStorage.getItem('userRatings')) : null;
        this.showPhotos = true;
    }

    onNewUser() {
        this.isLoading = true;
        this.getPhotos();
    }

    onSubmitVotes() {
        this.totalRatings = [];
        if (localStorage.getItem('totalRatings')) {
            this.totalRatings = JSON.parse(localStorage.getItem('totalRatings'));
            this.totalRatings.push(JSON.parse(localStorage.getItem('userRatings')));
            localStorage.setItem('totalRatings', JSON.stringify(this.totalRatings));
        } else {
            localStorage.setItem('totalRatings', JSON.stringify( [JSON.parse(localStorage.getItem('userRatings'))] ) );
        }

        localStorage.removeItem('userRatings');
        this.showPhotos = false;
    }

    /*
     * Ascending Order
     */
    sortPhotosByName() {
        var hold = null;

        for (let x = hold = 0; x < this.photos.length; x++) {
            for (let y = 0; y < this.photos.length; y++) {
                if (this.photos[y].title > this.photos[x].title) {
                    hold = this.photos[x];
                    this.photos[x] = this.photos[y];
                    this.photos[y] = hold;
                }
            }
        }

        this.showPhotos = true;        
        this.isLoading = false;
    }
}
