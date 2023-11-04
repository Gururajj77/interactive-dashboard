import { Injectable } from '@angular/core';
import { newUserTypeWithoutColor } from './userTypes';
import { catchError, map, throwError } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserDataService {

  constructor(private dataService: DataService) { }

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
    return this.dataService.fetchData().pipe(
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
