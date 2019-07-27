import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { KatalogComponent } from './katalog/katalog.component';
import { SosyalComponent } from './sosyal/sosyal.component';
import { NavbarlinkComponent } from './navbarlink/navbarlink.component';
import { SliderComponent } from './slider/slider.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { IletisimComponent } from './iletisim/iletisim.component';
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
import { ActivePipe } from './active.pipe';
import { GroupByPipe } from './group-by.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { PanelKategoriComponent } from './dashboard/panel-kategori/panel-kategori.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import {ApplicationStateService} from './services/application-state.service';




@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FooterComponent,
    KatalogComponent,
    SosyalComponent,
    NavbarlinkComponent,
    MainpageComponent,
    SliderComponent,
    HakkimizdaComponent,
    UrunlerComponent,
    IletisimComponent,
    MarkalarComponent,
    GaleriComponent,
    LoginComponent,
    DashMainpageComponent,
    PanelAboutComponent,
    PanelSliderComponent,
    PanelUrunlerComponent,
    PanelGaleriComponent,
    PanelMarkalarComponent,
    FileUploadComponent,
    ActivePipe,
    GroupByPipe,
    PanelKategoriComponent
  ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        AngularFontAwesomeModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBMdSxcrIiSHicIS2iTS8lFwcIPPCGGhVs'
        }),
        AgmSnazzyInfoWindowModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        RichTextEditorAllModule,
        ModalModule.forRoot(),
        CommonModule,
        TransferHttpCacheModule,
        NgtUniversalModule
    ],
  providers: [UserService, AuthGuard, ApplicationStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
