import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonModel } from '../models/dragon.model';

@Injectable()

export class DragonRestService {

    private URL: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {}

    public listDragons(): Observable<DragonModel[]> {
        return this.http.get<DragonModel[]>(`${this.URL}`);
    }
}
