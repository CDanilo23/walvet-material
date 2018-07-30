import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Clinicstory } from '../clinicStory/clinicstory';
import 'rxjs/add/operator/map';
import { AppSettings } from '../constants/AppSettings';



@Injectable()
export class ClinicstoryService {

  constructor(private http: Http, private router: Router) { }

  findAll(): Observable<any> {
    let response = this.http.get(AppSettings.API_ENDPOINT)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
      console.log(response);
      return response;
  }

  findById(id: Number): Observable<Clinicstory> {
    console.log('entro al service get by id');
    let story$ = this.http.get(AppSettings.API_ENDPOINT + '/' + id).map(
      (res: Response) => {
        return res.json();
      }
    );
    return story$;
  }

  getParamsHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      return headers;
  }

  createParamsToSend(id: Number) {
    return JSON.stringify({id: id});
  }
}
