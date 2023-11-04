import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { newUserTypeWithoutColor } from '../main/components/new-users/utils/userTypes';
import { recentOrders } from '../main/components/recent-orders/utils/tableDatatypes';



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
