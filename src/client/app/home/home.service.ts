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
  get() {
    let headers = new Headers();

    return this.http.get( ARCHIVE_END_POINT,
      {
        headers: headers
      }
    )
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error trying to get all reports'));

  }

  sendNewNote(note: any) {
    console.log("In send New Note");
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'localhost');

    return this.http.post( ARCHIVE_END_POINT,
      {
        body: note,
        headers: headers
      }
    ).subscribe();
  }
}
