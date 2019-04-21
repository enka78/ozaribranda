import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  formUpload = new FormGroup({
    file: new FormControl('')
  });
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
   this.formUpload.value = [];
  }

  onFileChange() {
    console.log(this.formUpload.value);
    if (this.formUpload.value.length > 0) {
      const file = this.formUpload.value[0];
      this.formUpload.value = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.formUpload.value);

    this.apiService.updateFile(formData).subscribe(
        (res) => this.uploadResponse = res,
        (err) => this.error = err
    );
  }
}
