import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agency } from '../interfaces/agency';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

  }

  getAgency(): Observable<Agency[]> {

    let agencyLS=localStorage.getItem('agencies');
    if(agencyLS!=null){
      return of(JSON.parse(agencyLS)) ;
     }else{
      return this.http.get<Agency[]>('assets/data/agencies.json', this.httpOptions).pipe(
        map((res: Agency[]) => {
          localStorage.setItem('agencies',JSON.stringify(res));
          return res;
        })
      );
     }
  }

}
