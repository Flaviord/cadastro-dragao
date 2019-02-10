import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    constructor() {}

    public login(use: string, pwd: string): void {
        if (use === 'admin' && pwd === '123456') {
            localStorage.setItem('LOGGED', 'LOGGED');
        } else {
            localStorage.removeItem('LOGGED');
        }
    }

    public isLogged(): boolean {
        return localStorage.getItem('LOGGED') != null;
    }
}