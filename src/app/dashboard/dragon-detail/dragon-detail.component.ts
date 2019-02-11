import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DragonService } from '../../services/dragon.service';
import { DragonModel } from '../../models/dragon.model';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.css']
})
export class DragonDetailComponent implements OnInit {

  public dragon: DragonModel;
  constructor(private route: ActivatedRoute,
              private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragon();
  }


  public getDragon(): void {
    this.route.paramMap.pipe(
      switchMap((params) => this.dragonService.getDragon(+params.get('id')))
    ).subscribe(
      dragon => this.dragon = dragon,
      err => console.log(err),
      () => console.log('Complete')
    );
  }

}
