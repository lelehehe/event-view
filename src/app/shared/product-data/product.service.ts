import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './product.model';
import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../';

let productsUrl = CONFIG.baseUrls.products;

@Injectable()
export class ProductService {
  onDbReset = this.messageService.state;

  constructor(private http: Http,
    private exceptionService: ExceptionService,
    private messageService: MessageService,
    private spinnerService: SpinnerService) {
    this.messageService.state.subscribe(state => this.getProducts());
  }

  addProduct(product: Product) {
    let body = JSON.stringify(product);
    this.spinnerService.show();
    return <Observable<Product>>this.http
      .post(`${productsUrl}`, body)
      .map(res => res.json().data)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  deleteProduct(product: Product) {
    this.spinnerService.show();
    return <Observable<Product>>this.http
      .delete(`${productsUrl}/${product.id}`)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  getProducts() {
    this.spinnerService.show();
    return <Observable<Product[]>>this.http
      .get(productsUrl)
      .map(res => this.extractData<Product[]>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  getProduct(id: number) {
    this.spinnerService.show();
    return <Observable<Product>>this.http
      .get(`${productsUrl}/${id}`)
      .map(res => this.extractData<Product>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  updateProduct(product: Product) {
    let body = JSON.stringify(product);
    this.spinnerService.show();

    return <Observable<Product>>this.http
      .put(`${productsUrl}/${product.id}`, body)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return <T>(body.data || {});
  }
}
