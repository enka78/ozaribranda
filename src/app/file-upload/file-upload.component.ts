import { Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  form: FormGroup;
  uploadResponse: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      uploadFile: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('uploadFile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('uploadFile', this.form.get('uploadFile').value);

    this.apiService.updateFile(formData).subscribe(
      (res: any) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
