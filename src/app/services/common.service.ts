import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  login() {
    return 'Login Successfully';
  }

  loadPage(pageName: String) {
    this.router.navigate([pageName], {relativeTo: this.route})
  }
}
