import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnasayfaComponent} from './anasayfa/anasayfa.component';


const routes: Routes = [
   {path: '', component: AnasayfaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
