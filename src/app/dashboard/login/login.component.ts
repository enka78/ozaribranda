import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/user';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    user: new FormControl(''),
    sifre: new FormControl(''),
  });

  users: User[];
  isLogin: Boolean = false;
  alertShow: Boolean = false;
  constructor( private apiService: ApiService, private router: Router, private userservice: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
      const sonucArray = this.users.filter(x => x.userName === this.userForm.value.user && x.userPass === this.userForm.value.sifre );
      if (sonucArray.length > 0) {
        this.userservice.setUserLoggedIn();
        this.isLogin = this.userservice.getUserLoggedIn();
        this.alertShow = false;
        this.router.navigate(['/admin/panel']);
      } else {
          this.isLogin = this.userservice.getUserLoggedIn();
          this.alertShow = true;
      }
    });
  }

}
