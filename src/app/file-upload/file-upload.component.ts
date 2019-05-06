import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../services/api.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() public fileUrl = new EventEmitter();

  form: FormGroup;
  uploadResponse: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private toastr: ToastrService) { }

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

    this.apiService.uploadFile(formData).subscribe(
      (res: any) => {
        this.uploadResponse = res;
        this.fileUrl.emit(res.url);
        this.toastr.success('Resim Başarıyla Yüklendi');
      },
      (err) => {
        this.toastr.warning('Resim Yüklenemedi');
      }
    );
  }
}
