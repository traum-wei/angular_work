import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class AuthService {

  private userInfo: UserInfo | null = null;

  constructor(
    private router: Router,
  ) { }

  login(userInfo: UserInfo): void {
    this.userInfo = userInfo;
    if (this.userInfo.keepLogin) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    this.router.navigate(['article-list']);
  }

  logout(): void {
    this.userInfo = null;
    localStorage.clear();
    this.router.navigate(['login']);
  }


  getUserInfo(): UserInfo | null {
    return this.userInfo || JSON.parse(localStorage.getItem('userInfo')!);
  }

  isLogin(): boolean {
    const hasUserInfo = !!this.getUserInfo();
    return hasUserInfo;
  }

  isAdmin(): boolean {
    const userInfo = this.getUserInfo();
    return userInfo?.role === 'ADMIN';
  }

}

export interface UserInfo {
 account: string;
 name: string;
 keepLogin: boolean
 role?: 'GENERAL' | 'ADMIN',
}
