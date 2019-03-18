import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { config } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as appsettings from './appsettings.canyoning.json';

interface IConfig {
  title: string;
  itemsLabel: string;
  usersLabel: string;
  default: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: IConfig;

  constructor(private location: Location, private http: HttpClient) { }

  loadAppConfig()  {
    let json: any = appsettings;
    this.config = json.default;
  }

  get title() { return this.config.title; }
  get itemsLabel() { return this.config.itemsLabel; }
  get usersLabel() { return this.config.usersLabel; }

}