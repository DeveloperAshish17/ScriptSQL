import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onConnect() {
    this.display = true;
  }

  // openNav() {
  //   this.getElementById("mySidepanel").style.width = "250px";
  // }

  // closeNav() {
  //   this.getElementById("mySidepanel").style.width = "0";
  // }

}
