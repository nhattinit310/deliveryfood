import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from './data';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class DataService {

heroesUrl = 'http://localhost:3000/';  // URL to web api
constructor( private http: HttpClient) {}

getdata(){
    return this.http.get<Data>(this.heroesUrl)
    }
}

 
 



