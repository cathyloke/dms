import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private common: CommonService) {
  
  }

  async ngOnInit() {
    this.common.login();
  }


  login(event: any) {
    this.common.loadPage("home")
  }
  register(event: any) {
    this.common.loadPage("register")
  }
}


