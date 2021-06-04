import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { IndexComponent } from './institutes/index/index.component';
import { CreateInstituteComponent } from './institutes/create-institute/create-institute.component';
import { IndexPetsComponent } from './pets/index-pets/index-pets.component';
import { CreatePetsComponent } from './pets/create-pets/create-pets.component';
import { ListPetsComponent } from './pets/list-pets/list-pets.component';
import { HeroComponent } from './template/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    CreateInstituteComponent,
    IndexPetsComponent,
    CreatePetsComponent,
    ListPetsComponent,
    HeroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,

  ],
  exports:[


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
