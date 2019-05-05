import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HakkimizdaComponent} from './hakkimizda/hakkimizda.component';
import {UrunlerComponent} from './urunler/urunler.component';
import {IletisimComponent} from './iletisim/iletisim.component';
import {MarkalarComponent} from './markalar/markalar.component';
import {GaleriComponent} from './galeri/galeri.component';
import { LoginComponent } from './dashboard/login/login.component';
import {DashMainpageComponent} from './dashboard/dash-mainpage/dash-mainpage.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AuthGuard} from './guards/auth.guard';
import {PanelAboutComponent} from './dashboard/panel-about/panel-about.component';
import {PanelSliderComponent} from './dashboard/panel-slider/panel-slider.component';
import {PanelGaleriComponent} from './dashboard/panel-galeri/panel-galeri.component';
import {PanelMarkalarComponent} from './dashboard/panel-markalar/panel-markalar.component';
import {PanelUrunlerComponent} from './dashboard/panel-urunler/panel-urunler.component';



const routes: Routes = [
   {path: '', redirectTo: 'main', pathMatch: 'full'},
   {path: 'main', component: MainpageComponent,
       children: [
           {path: 'hakkimizda', component: HakkimizdaComponent },
           {path: 'urunlerimiz', component: UrunlerComponent },
           {path: 'markalar', component: MarkalarComponent },
           {path: 'galeri', component: GaleriComponent },
           {path: 'iletisim', component: IletisimComponent},
       ]},
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
               {path: 'markalar', component: PanelMarkalarComponent },
               {path: 'urunler', component: PanelUrunlerComponent },
                ]
       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
