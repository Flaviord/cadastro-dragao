import { Component, OnInit } from '@angular/core';
import { DragonService } from '../../services/dragon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DragonModel } from '../../models/dragon.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dragon',
  templateUrl: './create-dragon.component.html',
  styleUrls: ['./create-dragon.component.css']
})
export class CreateDragonComponent implements OnInit {

  public dragonForm: FormGroup;
  public submitted: boolean = false;
  public showError: boolean = false;
  public msgError: string = null;

  constructor(private dragonService: DragonService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  get f() { return this.dragonForm.controls; }

  public onSubmit(): void {
    this.submitted = true;
    if (this.dragonForm.invalid) {
      return;
    }

    this.dragonService.createDragon(this.fnc())
      .subscribe(
        res => this.goBackDashboard(),
        err => this.showMsgError(err)
      );
  }

  public createForm(): void {
    this.dragonForm = this.fb.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'detail': ['']
    });
  }

  private fnc(): DragonModel {
    return new DragonModel(null,
      this.dragonForm.controls['name'].value,
      this.dragonForm.controls['type'].value,
      [this.dragonForm.controls['detail'].value],
      moment().format()
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
