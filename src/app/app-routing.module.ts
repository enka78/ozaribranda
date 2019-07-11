import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HakkimizdaComponent} from './hakkimizda/hakkimizda.component';
import {UrunlerComponent} from './urunler/urunler.component';
import {IletisimComponent} from './iletisim/iletisim.component';
import {MarkalarComponent} from './markalar/markalar.component';
import {GaleriComponent} from './galeri/galeri.component';
import {LoginComponent} from './dashboard/login/login.component';
import {DashMainpageComponent} from './dashboard/dash-mainpage/dash-mainpage.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AuthGuard} from './guards/auth.guard';
import {PanelAboutComponent} from './dashboard/panel-about/panel-about.component';
import {PanelSliderComponent} from './dashboard/panel-slider/panel-slider.component';
import {PanelGaleriComponent} from './dashboard/panel-galeri/panel-galeri.component';
import {PanelMarkalarComponent} from './dashboard/panel-markalar/panel-markalar.component';
import {PanelUrunlerComponent} from './dashboard/panel-urunler/panel-urunler.component';
import {PanelKategoriComponent} from './dashboard/panel-kategori/panel-kategori.component';



const routes: Routes = [
   {path: '', component: MainpageComponent, pathMatch: 'full'},
   {path: 'hakkimizda', component: HakkimizdaComponent },
   {path: 'urunlerimiz', component: UrunlerComponent },
   {path: 'urunlerimiz/:kat', component: UrunlerComponent },
   {path: 'referanslar', component: MarkalarComponent },
   {path: 'galeri', component: GaleriComponent },
   {path: 'iletisim', component: IletisimComponent},
   {path: 'admin', component: LoginComponent,
     children: [
       {
         path: 'panel',
         canActivate: [AuthGuard],
         component: DashMainpageComponent,
         children: [
               {path: 'hakkimizda', component: PanelAboutComponent },
               {path: 'slider', component: PanelSliderComponent },
               {path: 'galeri', component: PanelGaleriComponent },
               {path: 'kategori', component: PanelKategoriComponent },
               {path: 'referanslar', component: PanelMarkalarComponent },
               {path: 'urunler', component: PanelUrunlerComponent },
                ]
       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
