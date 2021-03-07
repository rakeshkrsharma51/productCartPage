import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private mockServiceUrl = 'https://run.mocky.io/v3/ca987707-db46-419e-9178-2bbdde3c3762';

  constructor(private http: HttpClient) { }

  getMockData() {
    return this.http.get(this.mockServiceUrl);
  }

}
