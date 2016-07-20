import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

import { DashboardButtonComponent } from './shared';
import { Speaker, SpeakerService, Product, ProductService, ToastService } from '../../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [DashboardButtonComponent]
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

  ngOnInit() {
    this.getSpeakers();
    this.getProducts();
    this.dbResetSubscription = this.speakerService.onDbReset
      .subscribe(() => this.getSpeakers());
  }

  trackBySpeakers(index: number, speaker: Speaker) {
    return speaker.id;
  }

  trackByProducts(index: number, product: Product) {
    return product.id;
  }


}
