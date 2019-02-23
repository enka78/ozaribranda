import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnasayfaComponent} from './anasayfa/anasayfa.component';
import {HakkimizdaComponent} from './hakkimizda/hakkimizda.component';
import {UrunlerComponent} from './urunler/urunler.component';
import {IletisimComponent} from './iletisim/iletisim.component';
import {UrunlerDetayComponent} from './urunler-detay/urunler-detay.component';


const routes: Routes = [
   {path: '', component: AnasayfaComponent },
   {path: 'hakkimizda', component: HakkimizdaComponent },
   {path: 'urunlerimiz', component: UrunlerComponent },
   {path: 'urunlerimiz/:id', component: UrunlerDetayComponent },
   {path: 'iletisim', component: IletisimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
