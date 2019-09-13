import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Entry } from '../models/photo-structure';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PhotoService {
    photosUrl = 'api/photoData';

    constructor(
        private http: HttpClient,
    ) { }

    getPhotos(): Observable<Entry[]> {
        return this.http.get<Entry[]>(this.photosUrl).pipe(
            tap(_ => console.log('fetched heroes')),
            catchError(this.handleError<Entry[]>('getHeroes', []))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
            // TODO: send the error to remote logging infrastructure
            console.error(error);
        
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
        
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}