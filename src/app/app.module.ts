import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbCarouselComponent } from './components/ngb-carousel/ngb-carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    FooterComponent,
    NgbCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
