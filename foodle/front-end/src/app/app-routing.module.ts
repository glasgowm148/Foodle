import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { SlideshowModule } from 'ng-simple-slideshow';



const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
 // { path: 'slider', component: SlideshowModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

