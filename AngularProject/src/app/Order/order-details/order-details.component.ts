import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  randomNum :Number = 0
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.randomIntFromInterval();
  }
  randomIntFromInterval() { // min and max included 
    this.randomNum= Math.floor(Math.random() * 100000);
  }
  navigateTo(event: any) {
    const value = event.target.value;
    if (value != 'none') {
        this.router.navigate([value]);
    }
    return false;
}

}
