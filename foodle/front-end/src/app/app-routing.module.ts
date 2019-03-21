import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabComponent } from './tab/tab.component';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import {SlideshowModule} from 'ng-simple-slideshow';



const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'tab', component: TabComponent },
  { path: 'nav', component: MaterialNavComponent },
  { path: 'slider', component: SlideshowModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

