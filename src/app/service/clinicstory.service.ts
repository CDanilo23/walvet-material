import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Clinicstory } from '../clinicStory/clinicstory';
import 'rxjs/add/operator/map';
import { AppSettings } from '../constants/AppSettings';
import { HeadersUtil } from '../constants/HeaderUtil';


@Injectable()
export class ClinicstoryService {
  getResult: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  findAll() {
    const headers = HeadersUtil.getHeaders();
    console.log('Entro al get aws !!!' );

     // tslint:disable-next-line:max-line-length
     this.http.get(AppSettings.AWS_API_ENDPOINT,  {headers}  ).subscribe(res => this.getResult = res);
     console.log(this.getResult);
  }

  findById(id: Number)  {
    const headers = HeadersUtil.getHeaders();
    console.log('entro al service get by id');
    return this.http.get<Clinicstory>(AppSettings.API_ENDPOINT + '/' + id , {headers});
  }

  getParamsHeaders() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return headers;
  }

  createParamsToSend(id: Number) {
    return JSON.stringify({id: id});
  }
}
