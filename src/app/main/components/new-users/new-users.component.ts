import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {

  newUserData: any = [];
  private _unSubscribeAll = new Subject();
  constructor(private newUserDataService: CardDataService) { }

  ngOnInit() {
    this.newUserDataService.getQueriedTableData('new_users').pipe(takeUntil(this._unSubscribeAll)).subscribe((data: any) => {
      this.newUserData = data;
    })
  }


  ngOnDestroy() {
    this._unSubscribeAll.next(null);
    this._unSubscribeAll.complete();
  }
}
