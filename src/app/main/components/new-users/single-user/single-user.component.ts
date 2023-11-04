import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {

  @Input() singleUser: any;
}
