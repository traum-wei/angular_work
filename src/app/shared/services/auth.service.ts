import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class AuthService {

 private userInfo: UserInfo = {
   account: 'P039',
   name: 'Tomas',
   role: 'ADMIN'
 };

 constructor() { }

 getUserInfo(): UserInfo {
   return this.userInfo;
 }
}

export interface UserInfo {
 account: string;
 name: string;
 role: 'GENERAL' | 'ADMIN'
}
