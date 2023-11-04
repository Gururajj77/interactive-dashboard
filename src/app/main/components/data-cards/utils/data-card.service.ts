import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CardType } from './cardTypes';
import { MUSIC_ICON, CHART_ICON, DOWN_ARROW, REFRESH_ICON } from 'src/app/services/customCardIcons';
import { DataService } from 'src/app/services/data.service';
@Injectable({
  providedIn: 'root'
})
export class DataCardService {

  constructor(private dataService: DataService) { }


  getQueriedData(customData: string): Observable<CardType[]> {
    return this.dataService.fetchData().pipe(
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
}
