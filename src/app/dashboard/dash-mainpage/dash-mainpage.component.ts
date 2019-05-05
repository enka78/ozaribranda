import { Component, OnInit } from '@angular/core';
import {UserService} from '../login/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash-mainpage',
  templateUrl: './dash-mainpage.component.html',
  styleUrls: ['./dash-mainpage.component.scss']
})
export class DashMainpageComponent implements OnInit {

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userservice.setUserLoggedOut();
    this.router.navigate(['/']);
  }
}
