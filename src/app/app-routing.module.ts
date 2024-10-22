import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

// import { AbcComponent } from './components/abc/abc.component';
// import { DefComponent } from './components/def/def.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'abc', pathMatch: 'full' },
//   { path: 'abc', component: AbcComponent },
//   { path: 'def', component: DefComponent },
// ];


// ng serve -o (auto open browser)
// ng g c login

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
