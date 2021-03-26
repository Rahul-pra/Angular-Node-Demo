import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from "../authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: any;


  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );
  }
}
