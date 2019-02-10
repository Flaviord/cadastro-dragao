import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public loginForm: FormGroup;
  public submitted: boolean = false;

  constructor(private loginService: LoginService,
             private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
			'user': ['', Validators.required],
			'password': ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.loginForm.controls['user'].value, this.loginForm.controls['password'].value);
  }

}
