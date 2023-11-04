import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { newUserType } from './utils/userTypes';
import { NewUserDataService } from './utils/new-user-data.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {

  newUserData: newUserType[] = [];
  private _unSubscribeAll = new Subject();
  constructor(private newUserDataService: NewUserDataService) { }

  ngOnInit() {
    this.newUserDataService.getQueriedNewUserData('new_users').pipe(takeUntil(this._unSubscribeAll)).subscribe((data: newUserType[]) => {
      this.newUserData = data;
    })
  }


  ngOnDestroy() {
    this._unSubscribeAll.next(null);
    this._unSubscribeAll.complete();
  }
}
