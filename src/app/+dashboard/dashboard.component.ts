import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

import { DashboardButtonComponent, DashboardCardComponent } from './shared';
import { Speaker, SpeakerService, Product, ProductService, ToastService } from '../../app/shared';



import {MdUniqueSelectionDispatcher} from '@angular2-material/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
//import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
//import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';



@Component({
  moduleId: module.id,
  selector: 'ev-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    DashboardButtonComponent,
    DashboardCardComponent, 
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    //MD_RADIO_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    //MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    //MD_ICON_DIRECTIVES,
    MD_TABS_DIRECTIVES
  ]
})
export class DashboardComponent implements OnDestroy, OnInit {
  private dbResetSubscription: Subscription;

  speakers: Observable<Speaker[]>;
  products: Observable<Product[]>;

  constructor(
    private speakerService: SpeakerService,
    private productService: ProductService,
    private router: Router,
    private toastService: ToastService) { }

  getSpeakers() {
    this.speakers = this.speakerService.getSpeakers()
      .catch(e => {
        this.toastService.activate(`${e}`);
        return Observable.of([]);
      });
  }

  getProducts() {
    this.products = this.productService.getProducts()
      .catch(e => {
        this.toastService.activate(`${e}`);
        return Observable.of([]);
      });
  }

  gotoDetail(speaker: Speaker) {
    let link = ['/speakers', speaker.id];
    this.router.navigate(link);
  }
  gotoProductDetail(product: Product) {
    let link = ['/products', product.id];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  foods: any[] = [
    { name: 'Pizza', rating: 'Excellent' },
    { name: 'Burritos', rating: 'Great' },
    { name: 'French fries', rating: 'Pretty good' },
  ];
  progress: number = 0;
  ngOnInit() {
    this.getSpeakers();
    this.getProducts();
    this.dbResetSubscription = this.speakerService.onDbReset
      .subscribe(() => this.getSpeakers());

    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);

  }

  trackBySpeakers(index: number, speaker: Speaker) {
    return speaker.id;
  }

  trackByProducts(index: number, product: Product) {
    return product.id;
  }


}
