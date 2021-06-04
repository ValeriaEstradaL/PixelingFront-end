import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateInstituteComponent } from './institutes/create-institute/create-institute.component';
import { IndexComponent } from './institutes/index/index.component';
import { CreatePetsComponent } from './pets/create-pets/create-pets.component';
import { IndexPetsComponent } from './pets/index-pets/index-pets.component';
import { HeroComponent } from './template/hero/hero.component';

const routes: Routes = [
  {
    path:'',
    component: HeroComponent
  },
  {
    path: 'institucion',
    component: IndexComponent
  },

  {
    path: 'institucion/crear',
    component: CreateInstituteComponent
  },
  {
    path: 'mascota',
    component: IndexPetsComponent
  },
  {
    path: 'mascota/crear',
    component: CreatePetsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
