import { Component, OnInit } from '@angular/core';
import { DragonService } from '../services/dragon.service';
import { DragonModel } from '../models/dragon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dragon: DragonModel[] = [];

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.listDragon();
  }

  public listDragon(): void {
    this.dragonService.listDragons()
      .subscribe((res) => console.log(res));
  }

}
