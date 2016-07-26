import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-dashboard-card',
  templateUrl: 'dashboard-card.component.html',
  styleUrls: ['dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() product: Product;

  name: string;

  //name: string =  this.speaker? .name;

  constructor() {}

  ngOnInit() {
  }
}
