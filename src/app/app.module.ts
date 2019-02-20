import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SliderComponent } from './slider/slider.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SliderComponent,
    AnasayfaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
