import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from  '../models/slider';
import { User } from  '../models/user';
import { Observable } from  'rxjs';
import {About} from '../models/about';
import {Galeri} from '../models/galeri';
import {Marka} from '../models/marka';
import {Urun} from '../models/urun';
import {Kategori} from '../models/kategori';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // PHP_API_SERVER = 'http://127.0.0.1:3000';
   PHP_API_SERVER = 'http://ozaribranda.com';
  constructor(private httpClient: HttpClient) { }
/*---------------------    read          --------------*/
  readUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/admin.php`);
  }
  readKategori(): Observable<Kategori[]> {
    return this.httpClient.get<Kategori[]>(`${this.PHP_API_SERVER}/api/readKategoriler.php`);
  }
  readSliders(): Observable<Slider[]> {
    return this.httpClient.get<Slider[]>(`${this.PHP_API_SERVER}/api/readSlider.php`);
  }
  readAbout(): Observable<About[]> {
    return this.httpClient.get<About[]>(`${this.PHP_API_SERVER}/api/readAbout.php`);
  }
  readGaleri(): Observable<Galeri[]> {
    return this.httpClient.get<Galeri[]>(`${this.PHP_API_SERVER}/api/readGaleri.php`);
  }
  readMarkalar(): Observable<Marka[]> {
    return this.httpClient.get<Marka[]>(`${this.PHP_API_SERVER}/api/readMarkalar.php`);
  }
  readUrunler(): Observable<Urun[]> {
    return this.httpClient.get<Urun[]>(`${this.PHP_API_SERVER}/api/readUrunler.php`);
  }
  /*---------------------    create         --------------*/
  createSlider(slider: Slider): Observable<Slider> {
    return this.httpClient.post<Slider>(`${this.PHP_API_SERVER}/api/createSlider.php`, slider);
  }
  createAbout(about: About): Observable<About> {
    return this.httpClient.post<About>(`${this.PHP_API_SERVER}/api/createAbout.php`, about);
  }
  createMarkalar(marka: Marka): Observable<Marka> {
    return this.httpClient.post<Marka>(`${this.PHP_API_SERVER}/api/createMarkalar.php`, marka);
  }
  createUrunler(urun: Urun): Observable<Urun> {
    return this.httpClient.post<Urun>(`${this.PHP_API_SERVER}/api/createUrunler.php`, urun);
  }
  createGaleri(galeri: Galeri): Observable<Galeri> {
    return this.httpClient.post<Galeri>(`${this.PHP_API_SERVER}/api/createGaleri.php`, galeri);
  }

  /*---------------------    update         --------------*/
  updateSlider(slider: Slider) {
    return this.httpClient.put<Slider>(`${this.PHP_API_SERVER}/api/updataSlider.php`, slider);
  }
  updateAbout(about: About) {
    return this.httpClient.put<About>(`${this.PHP_API_SERVER}/api/updataAbout.php`, about);
  }
  updateGaleri(galeri: Galeri) {
    return this.httpClient.put<Galeri>(`${this.PHP_API_SERVER}/api/updataGaleri.php`, galeri);
  }
  updateMarkalar(marka: Marka) {
    return this.httpClient.put<Marka>(`${this.PHP_API_SERVER}/api/updataMarkalar.php`, marka);
  }
  updateUrunler(urun: Urun) {
    return this.httpClient.put<Urun>(`${this.PHP_API_SERVER}/api/updataUrunler.php`, urun);
  }

  /*---------------------    delete          --------------*/
  deleteSlider(id: number) {
    return this.httpClient.delete<Slider>(`${this.PHP_API_SERVER}/api/deleteSlider.php/?id=${id}`);
  }
  deleteAbout(id: number) {
    return this.httpClient.delete<About>(`${this.PHP_API_SERVER}/api/deleteAbout.php/?id=${id}`);
  }
  deleteGaleri(id: number) {
    return this.httpClient.delete<Galeri>(`${this.PHP_API_SERVER}/api/deleteGaleri.php/?id=${id}`);
  }
  deleteUrunler(id: number) {
    return this.httpClient.delete<Urun>(`${this.PHP_API_SERVER}/api/deleteUrunler.php/?id=${id}`);
  }
  deleteMarkalar(id: number) {
    return this.httpClient.delete<Marka>(`${this.PHP_API_SERVER}/api/deleteMarkalar.php/?id=${id}`);
  }

  /*---------------------    upload file         --------------*/
  uploadFile(uploadFile: any) {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/api/uploadFile.php`, uploadFile);
  }
}
