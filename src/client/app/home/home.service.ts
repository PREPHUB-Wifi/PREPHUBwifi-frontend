import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Note } from './home.module';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://elpis.mit.edu:8443';
const ARCHIVE_END_POINT = BASE_URL + '/notes';


@Injectable()
export class  NameListService {
  constructor (
    private http: Http
  ) {}

  //get all users
  get(): Observable<any[]> {
    let headers = new Headers();
    return this.http.get( ARCHIVE_END_POINT)
    .map((res:Response) => {
      let obj = res.json();
      if (Object.keys(obj).length === 0 && obj.constructor === Object){
        return [];
      }
      return res.json();
    })
    .catch((error:any) => Observable.throw(error.json().error || 'server error trying to get all reports'));
  }

  sendNewNote(note: any): any {
    let bodyString = JSON.stringify(note);
    let headers = new Headers({ 'Content-Type': 'application/json'}); 
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });

    console.log("send new note");
    console.log(note);

    return this.http.post( ARCHIVE_END_POINT, note, options);
  }
}
