import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from  '../models/slider';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1:3000';
  constructor(private httpClient: HttpClient) { }

  readSliders(): Observable<Slider[]> {
    return this.httpClient.get<Slider[]>(`${this.PHP_API_SERVER}/api/read.php`);
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
