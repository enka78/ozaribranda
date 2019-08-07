import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {ToastrService} from 'ngx-toastr';
import {Contact} from '../models/contact';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.scss']
})
export class IletisimComponent implements OnInit {
  contactForm = new FormGroup({
    contactAd: new FormControl('', Validators.required),
    contactSoyad: new FormControl('', Validators.required),
    contactEmail: new FormControl('', Validators.required),
    contactTel: new FormControl('', Validators.required),
    contactMesaj: new FormControl('', Validators.required)
  });
  loading: boolean = false;

  title = 'Özarı Branda İletişim';
  keywords = 'Branda, Çadır,  Tente, Kamp Çadırı,  PVC,  Tente, Akrilik, Jüt,  Gazebo Çardak';
  description = 'Özarı Branda olarak pvc, pilsa, polyester ve pamuk kumaş çeşitlerimiz ile hizmetinizdeyiz';

  constructor(private apiservice: ApiService, private toastr: ToastrService,  private titleService: Title, private meta: Meta) { }
  location = {lat: 41.0173149, lng: 28.9581623};

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
    this.meta.updateTag({name: 'title', content: this.title});
  }

  onSubmit() {
    this.loading = true;
    this.apiservice.sendMail(this.contactForm.value).subscribe((contact: Contact) => {
      this.contactForm.reset();
      this.loading = false;
      this.toastr.success('Mesaj Başarıyla Gönderildi');
    }, (err) => {
      this.loading = false;
      this.toastr.error('Mesaj Gönderilemedi !');
    });
  }
}
