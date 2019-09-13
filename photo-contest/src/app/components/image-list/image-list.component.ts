import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../shared/services/photo.service';
import { Entry } from '../../shared/models/photo-structure';

@Component({
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit{
    currentUserRatings = null;
    showCurrentUser = false;
    isLoading = false;    
    photos: Entry[] | any  = [];
    showPhotos = false;
    totalRatings = null;

    constructor(
        private photoService: PhotoService
    ){}

    ngOnInit() {
        this.showCurrentUser = localStorage.getItem('userRatings') ? true : false;
        this.photos = localStorage.getItem('userRatings') ? JSON.parse(localStorage.getItem('userRatings')) : null;
        this.totalRatings = localStorage.getItem('totalRatings') ? JSON.parse(localStorage.getItem('totalRatings')) : null;

        console.log(this.photos);
        console.log(this.totalRatings);
    }

    getPhotos() {
        this.isLoading = true;
        this.photoService.getPhotos().subscribe(
            resp => {
                this.photos = resp;
                this.photos.map(obj => { obj['photoRating'] = 0; return obj});
            }, 
            err => console.error(err),
            () => this.isLoading = false
        );
    }

    onChangeRate() {
        localStorage.setItem('userRatings', JSON.stringify(this.photos));
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
        localStorage.removeItem('userRatings');
        this.getPhotos();
        this.showPhotos = true;
    }

}
