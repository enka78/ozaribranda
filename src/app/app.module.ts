import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    MarkalarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
