import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private open = false;
  private close = false;
  constructor() { }

  ngOnInit() {
  }

  onSelectItem() {
    this.open = !this.open;
  }

  closeDiv() {
    this.close = !this.close;
  }

}
