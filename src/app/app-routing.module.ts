import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnasayfaComponent} from './anasayfa/anasayfa.component';
import {HakkimizdaComponent} from './hakkimizda/hakkimizda.component';
import {UrunlerComponent} from './urunler/urunler.component';
import {IletisimComponent} from './iletisim/iletisim.component';
import {UrunlerDetayComponent} from './urunler-detay/urunler-detay.component';
import {MarkalarComponent} from './markalar/markalar.component';
import {GaleriComponent} from './galeri/galeri.component';
import { LoginComponent } from './dashboard/login/login.component';
import {DashMainpageComponent} from './dashboard/dash-mainpage/dash-mainpage.component';


const routes: Routes = [
   {path: '', redirectTo: 'anasayfa', pathMatch: 'full'},
   {path: 'anasayfa', component: AnasayfaComponent },
   {path: 'hakkimizda', component: HakkimizdaComponent },
   {path: 'urunlerimiz', component: UrunlerComponent },
   {path: 'urunlerimiz/:id', component: UrunlerDetayComponent },
   {path: 'markalar', component: MarkalarComponent },
   {path: 'galeri', component: GaleriComponent },
   {path: 'iletisim', component: IletisimComponent},
   {path: 'panel', component: LoginComponent,
     children: [
       {
         path: '',
         component: DashMainpageComponent,
         outlet: 'dashboard'
       }
     ]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
