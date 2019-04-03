import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SliderComponent } from './slider/slider.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { UrunlerDetayComponent } from './urunler-detay/urunler-detay.component';
import { MarkalarComponent } from './markalar/markalar.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { GaleriComponent } from './galeri/galeri.component';
import { LoginComponent } from './dashboard/login/login.component';
import { DashMainpageComponent } from './dashboard/dash-mainpage/dash-mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SliderComponent,
    AnasayfaComponent,
    HakkimizdaComponent,
    UrunlerComponent,
    IletisimComponent,
    UrunlerDetayComponent,
    MarkalarComponent,
    GaleriComponent,
    LoginComponent,
    DashMainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMdSxcrIiSHicIS2iTS8lFwcIPPCGGhVs'
    }),
    AgmSnazzyInfoWindowModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
