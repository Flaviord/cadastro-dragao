import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonModel } from '../models/dragon.model';

@Injectable()

export class DragonRestService {

    private URL: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json',
                                        'Accept': 'application/json'});
    private  options = {headers: this.headers};

    constructor(private http: HttpClient) {}

    public listDragons(): Observable<DragonModel[]> {
        return this.http.get<DragonModel[]>(`${this.URL}`);
    }

    public getDragon(id: number): Observable<DragonModel> {
        return this.http.get<DragonModel>(`${this.URL}/${id}`);
    }

    public createDragon(dragon: DragonModel): Observable<any> {
        return this.http.post<DragonModel>(`${this.URL}`, dragon, this.options);
    }

    public editDragon(dragon: DragonModel): Observable<any> {
        return this.http.put<DragonModel>(`${this.URL}/${dragon.id}`, dragon, this.options);
    }

    public deleteDragon(id: number): Observable<any> {
        return this.http.delete<any>(`${this.URL}/${id}`, this.options);
    }
}
