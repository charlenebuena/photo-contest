import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entry } from '../models/photo-structure';
import { photoData } from '../models/photo-data';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PhotoService {

    constructor(
        private http: HttpClient,
    ) { }

    getPhotos(): Observable<Entry[]> {
        return of(photoData);
        // return this.http.get<Entry[]>()
    }
}