import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../shared/services/photo.service';
import { Entry } from '../../shared/models/photo-structure';

@Component({
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit{
    photos: Entry[]  = [];

    constructor(
        private photoService: PhotoService
    ){}

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.photoService.getPhotos().subscribe(
            resp => this.photos = resp,
            err => console.error(err)
        );
    }
}
