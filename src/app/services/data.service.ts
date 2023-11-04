import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  API_URL: string = `https://1.api.fy23ey05.careers.ifelsecloud.com/`
  constructor(private http: HttpClient) { }

  fetchData(): Observable<object> {
    return this.http.get(this.API_URL);
  }
}
