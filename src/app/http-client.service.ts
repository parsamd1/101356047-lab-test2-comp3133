import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getspacexlaunches():Observable<any>{
    return this.httpClient.get('https://api.spacexdata.com/v3/launches')
  }
  getDetailsByFlightNum(flight_number:number):Observable<any> {
    const url = `https://api.spacexdata.com/v3/launches/${String(flight_number)}`;
    return this.httpClient.get(url);
  }
}
