import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from  '../models/slider';
import { User } from  '../models/user';
import { Observable } from  'rxjs';
import {About} from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1:3000';
  constructor(private httpClient: HttpClient) { }

  readSliders(): Observable<Slider[]> {
    return this.httpClient.get<Slider[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  readUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/admin.php`);
  }
  readAbout(): Observable<About[]> {
    return this.httpClient.get<About[]>(`${this.PHP_API_SERVER}/api/readAbout.php`);
  }

  createAbout(about: About): Observable<About> {
    return this.httpClient.post<About>(`${this.PHP_API_SERVER}/api/create.php`, about);
  }

  createSlider(slider: Slider): Observable<Slider> {
    return this.httpClient.post<Slider>(`${this.PHP_API_SERVER}/api/create.php`, slider);
  }

  updateSlider(slider: Slider) {
    return this.httpClient.put<Slider>(`${this.PHP_API_SERVER}/api/update.php`, slider);
  }

  deleteSlider(id: number) {
    return this.httpClient.delete<Slider>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
}
