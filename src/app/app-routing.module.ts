import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent

  },
  {
    path:"women",
    component : WomenComponent
  },
  {
    path :"men",
    component : MenComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
