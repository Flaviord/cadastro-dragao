import { Component, OnInit } from '@angular/core';
import { DragonService } from '../services/dragon.service';
import { DragonModel } from '../models/dragon.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dragons: DragonModel[] = [];
  public order: string = 'name';
  public ascending: boolean = true;

  constructor(private dragonService: DragonService,
              private router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.listDragon();
  }

  public listDragon(): void {
    this.dragonService.listDragons()
      .subscribe(
        (res) => this.dragons = this.changeDate(res),
        err => console.log(err)
      );
  }

  private changeDate(res: DragonModel[]): DragonModel[] {
    return res.map(r => {
        return new DragonModel(r.id, r.name, r.type, r.histories, this.changeToSlash(r.createdAt));
    });
  }

  private changeToSlash(date: string): string {
    let dateSplit = [];
    let newdate: string = null;
    if (date) {
      dateSplit = date.substr(0, 10).split('/');
      newdate = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];
    }
    return dateSplit.length === 1 ? date : newdate;
  }

  public newDragon(): void {
    this.router.navigate(['create']);
  }

}
