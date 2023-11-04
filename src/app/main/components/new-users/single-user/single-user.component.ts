import { Component, Input, HostBinding } from '@angular/core';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {
  @HostBinding('style.--customWidth') customWidth: string = ""
  @HostBinding('style.--customBarColor') customBarColor: string = ""
  @Input() singleUser: any;
  ngOnInit() {
    this.customWidth = `${this.singleUser['progress']}%`;
    this.customBarColor = `${this.singleUser['barColor']}`;
    console.log(this.customBarColor);
  }
}
