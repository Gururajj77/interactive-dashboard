import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CardType } from '../main/components/data-cards/utils/cardTypes';
import { CHART_ICON, DOWN_ARROW, MUSIC_ICON, REFRESH_ICON } from './customCardIcons';
import { newUserTypeWithoutColor } from '../main/components/new-users/utils/userTypes';
import { recentOrders } from '../main/components/recent-orders/utils/tableDatatypes';



@Injectable({
  providedIn: 'root'
})

export class CardDataService {
  API_URL: string = `https://1.api.fy23ey05.careers.ifelsecloud.com/`
  constructor(private http: HttpClient) { }

  fetchData(): Observable<object> {
    return this.http.get(this.API_URL);
  }
  getQueriedData(customData: string): Observable<CardType[]> {
    return this.fetchData().pipe(
      map((response: any) => {
        const data = response?.[customData];
        const customIcons = [MUSIC_ICON, CHART_ICON, DOWN_ARROW, REFRESH_ICON];
        data.forEach((item: any, index: any) => {
          item.customIcon = customIcons[index];
        });
        return data;
      }),
      catchError((error: any) => {
        console.error('Error while fetching top cards:', error);
        return throwError('An error occurred while fetching top cards.');
      })
    );
  }

  getQueriedTableData(customData: string) {
    return this.fetchData().pipe(
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

  private generateRandomHexColor(): string {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }

  modifyResponseObjects(responseObjects: newUserTypeWithoutColor[]): any[] {
    return responseObjects.map((obj) => ({
      ...obj,
      barColor: this.generateRandomHexColor(),
    }));
  }

  getQueriedNewUserData(customData: string) {
    return this.fetchData().pipe(
      map((response: any) => {
        const queriedData = response?.[customData];
        if (queriedData) {
          return this.modifyResponseObjects(queriedData);
        } else {
          return [];
        }
      }),
      catchError((error: any) => {
        console.error('Error while fetching new users list:', error);
        return throwError('An error occurred new users list.');
      })
    );
  }
}
