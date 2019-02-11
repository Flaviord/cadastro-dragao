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
  public showError: boolean = false;
  public msgError: string = null;

  constructor(private route: ActivatedRoute,
              private dragonService: DragonService,
              private router: Router) { }

  ngOnInit() {
    this.getDragon();
  }


  public getDragon(): void {
    this.route.paramMap.pipe(
      switchMap((params) => this.dragonService.getDragon(+params.get('id')))
    ).subscribe(
      dragon => {this.dragon = dragon, console.log(dragon); },
      err => console.log(err),
      () => console.log('Complete')
    );
  }

  public save(): void {
    this.dragonService.editDragon(this.dragon)
    .subscribe(
      res => this.goBackDashboard(),
      err => this.showMsgError(err)
    );
  }

  public delete(): void {
    this.dragonService.deleteDragon(this.dragon.id)
    .subscribe(
      res => this.goBackDashboard(),
      err => this.showMsgError(err)
    );
  }

  public goBackDashboard(): void {
    this.clearError();
    this.router.navigate(['dashboard']);
  }

  private showMsgError(msg: string): void {
    this.msgError = msg;
    this.showError = true;
  }

  private clearError(): void {
    this.msgError = null;
    this.showError = false;
  }
}
