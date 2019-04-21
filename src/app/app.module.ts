import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SliderComponent } from './slider/slider.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { UrunlerDetayComponent } from './urunler-detay/urunler-detay.component';
import { MarkalarComponent } from './markalar/markalar.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { GaleriComponent } from './galeri/galeri.component';
import { LoginComponent } from './dashboard/login/login.component';
import { DashMainpageComponent } from './dashboard/dash-mainpage/dash-mainpage.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserService} from './dashboard/login/user.service';
import {AuthGuard} from './guards/auth.guard';
import { PanelAboutComponent } from './dashboard/panel-about/panel-about.component';
import { PanelSliderComponent } from './dashboard/panel-slider/panel-slider.component';
import { PanelUrunlerComponent } from './dashboard/panel-urunler/panel-urunler.component';
import { PanelGaleriComponent } from './dashboard/panel-galeri/panel-galeri.component';
import { PanelMarkalarComponent } from './dashboard/panel-markalar/panel-markalar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SliderComponent,
    HakkimizdaComponent,
    UrunlerComponent,
    IletisimComponent,
    UrunlerDetayComponent,
    MarkalarComponent,
    GaleriComponent,
    LoginComponent,
    DashMainpageComponent,
    PanelAboutComponent,
    PanelSliderComponent,
    PanelUrunlerComponent,
    PanelGaleriComponent,
    PanelMarkalarComponent,
    FileUploadComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBMdSxcrIiSHicIS2iTS8lFwcIPPCGGhVs'
        }),
        AgmSnazzyInfoWindowModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
