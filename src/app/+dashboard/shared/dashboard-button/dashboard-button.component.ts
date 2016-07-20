import { Component, Input, OnInit } from '@angular/core';

import { Speaker, Product } from '../../../../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-dashboard-button',
  templateUrl: 'dashboard-button.component.html',
  styleUrls: ['dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {
  @Input() speaker: Speaker;
  @Input() product: Product;

  name: string;

  //name: string =  this.speaker? .name;

  constructor() {}

  ngOnInit() {
    if (this.product) {
      this.name = this.product.name;
    }
    else if (this.speaker) {
      this.name = this.speaker.name;
    }
    else {
      this.name = 'test';
    }
  }
}
