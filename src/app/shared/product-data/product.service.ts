import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './product.model';
import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../';

let speakersUrl = CONFIG.baseUrls.speakers;

@Injectable()
export class ProductService {
  onDbReset = this.messageService.state;

  constructor(private http: Http,
    private exceptionService: ExceptionService,
    private messageService: MessageService,
    private spinnerService: SpinnerService) {
    this.messageService.state.subscribe(state => this.getSpeakers());
  }

  addSpeaker(product: Product) {
    let body = JSON.stringify(product);
    this.spinnerService.show();
    return <Observable<Product>>this.http
      .post(`${speakersUrl}`, body)
      .map(res => res.json().data)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  deleteSpeaker(product: Product) {
    this.spinnerService.show();
    return <Observable<Product>>this.http
      .delete(`${speakersUrl}/${product.id}`)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  getSpeakers() {
    this.spinnerService.show();
    return <Observable<Product[]>>this.http
      .get(speakersUrl)
      .map(res => this.extractData<Product[]>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  getSpeaker(id: number) {
    this.spinnerService.show();
    return <Observable<Product>>this.http
      .get(`${speakersUrl}/${id}`)
      .map(res => this.extractData<Product>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  updateSpeaker(product: Product) {
    let body = JSON.stringify(product);
    this.spinnerService.show();

    return <Observable<Product>>this.http
      .put(`${speakersUrl}/${product.id}`, body)
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
