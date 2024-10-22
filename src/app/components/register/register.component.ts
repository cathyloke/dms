import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private common: CommonService) {
  
  }

  async ngOnInit() {
    this.common.login();
  }


  login(event: any) {
    this.common.loadPage("home")
  }

}