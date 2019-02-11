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



}
