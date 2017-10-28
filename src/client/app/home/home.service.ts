import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:8081';
const ARCHIVE_END_POINT = BASE_URL + '/users';


@Injectable()
export class  NameListService {
  constructor (
    private http: Http
  ) {}

  //get all users
  get(): Observable<Notes[]> {
    let headers = new Headers();
    return this.http.get( ARCHIVE_END_POINT,{headers: headers})
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'server error trying to get all reports');
  }

  sendNewNote(note: any): Observable<Notes[]> {
    console.log("In send New Note");
    let bodyString = JSON.stringify(note);
    let headers = new Headers({ 'Content-Type': 'application/json'}); 
    headers.append('Access-Control-Allow-Origin', 'localhost');
    let options = new RequestOptions({ headers: headers });

    return this.http.post( ARCHIVE_END_POINT, note, options).subscribe();
  }
}
