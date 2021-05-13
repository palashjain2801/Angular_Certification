import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(event: any) {
    const value = event.target.value;
    if (value != 'none') {
        this.router.navigate([value]);
    }
    return false;
}
}
