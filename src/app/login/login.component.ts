import { Component, OnInit } from '@angular/core';

import { AuthService, UserInfo } from './../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  doSubmit(formData: UserInfo): void {
    const loginData: UserInfo = {
      ...formData,
      role: 'ADMIN'
    };

    this.authService.login(loginData);
  }

}
