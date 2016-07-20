import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA
} from 'angular2-in-memory-web-api';

import './shared/rxjs-extensions';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import {
  APP_SHARED_PROVIDERS,
  ModalComponent,
  NavComponent,
  SpeakerService,
  ProductService,
  SpinnerComponent,
  ToastComponent
} from '../app/shared';

@Component({
  moduleId: module.id,
  selector: 'event-view-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ModalComponent,
    NavComponent,
    SpinnerComponent,
    ToastComponent
  ],
  providers: [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA, { useClass: InMemoryStoreService }),
    provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
    SpeakerService, ProductService,
    APP_SHARED_PROVIDERS,
  ]
})
export class AppComponent {}
