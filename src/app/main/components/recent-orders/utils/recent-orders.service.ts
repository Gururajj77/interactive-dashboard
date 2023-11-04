import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { recentOrders } from './tableDatatypes';

@Injectable({
  providedIn: 'root'
})
export class RecentOrdersService {

  constructor(private dataService: DataService) { }

  getQueriedTableData(customData: string) {
    return this.dataService.fetchData().pipe(
      map((response: any) => {
        return (response?.[customData]).map((res: recentOrders[], index: number) => {
          return { ...res, 'num': `${index + 1}` }
        }
        )
      }),
      catchError((error: any) => {
        console.error('Error while fetching recent orders:', error);
        return throwError('An error occurred while recent orders.');
      })
    );
  }
}
