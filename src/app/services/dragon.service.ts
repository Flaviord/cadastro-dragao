import { DragonRestService } from './dragon-rest.service';
import { switchMap, tap } from 'rxjs/operators';
import { DragonModel } from '../models/dragon.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DragonService {
    constructor(private service: DragonRestService) {}

    public listDragons(): Observable<DragonModel[]> {
        return this.service.listDragons().pipe (
            switchMap(res => of(res))
        );
    }

    public getDragon(id: number): Observable<DragonModel> {
        return this.service.getDragon(id).pipe (
            switchMap(res => of(res))
        );
    }

    public deleteDragon(id: number ): Observable<any> {
        return this.service.deleteDragon(id).pipe (
            switchMap(res => of(res))
        );
    }

    public editDragon(dragon: DragonModel): Observable<any> {
        return this.service.editDragon(dragon).pipe(
            switchMap(res => of(res))
        );
    }
}
