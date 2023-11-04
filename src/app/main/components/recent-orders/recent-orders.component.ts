import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CardDataService } from 'src/app/services/card-data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { OPEN_ICON } from '../../utils/customMainIcons';
import { recentOrdersWithIndex } from './utils/tableDatatypes';
@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  private _unSubscribeAll = new Subject();
  isModalOpen = false;
  modalName: string = "";
  modalProduct: string = "";

  constructor(private tableData: CardDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('open', sanitizer.bypassSecurityTrustHtml(OPEN_ICON));
  }
  tableView: recentOrdersWithIndex[] = []
  ngOnInit() {
    this.tableData.getQueriedTableData('recent_orders').pipe(takeUntil(this._unSubscribeAll)).subscribe((data: recentOrdersWithIndex[]) => {
      this.tableView = data;
    })
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'Paid':
        return 'bg-green-400';
      case 'Failed':
        return 'bg-red-400';
      case 'Pending':
        return 'bg-gray-500';
      default:
        return 'bg-black ';
    }
  }

  openModal(name: string, product: string) {
    this.isModalOpen = true;
    this.modalName = name;
    this.modalProduct = product;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalName = "";
    this.modalProduct = "";
  }

  ngOnDestroy() {
    this._unSubscribeAll.next(null);
    this._unSubscribeAll.complete();
  }
}
