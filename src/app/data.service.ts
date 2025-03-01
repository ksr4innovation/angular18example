import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  saveUser(user: any) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
        
      })
    };
    return this.http.post(this.apiUrl+"saveUser", user,httpOptions);
  }
}
