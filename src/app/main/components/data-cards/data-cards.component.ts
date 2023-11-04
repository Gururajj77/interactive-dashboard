import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardType } from './utils/cardTypes';
import { Subject, takeUntil } from 'rxjs';
import { DataCardService } from './utils/data-card.service';
@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.scss']
})
export class DataCardsComponent implements OnInit, OnDestroy {

  private _unSubscribeAll = new Subject();

  constructor(private cardData: DataCardService) { }
  singleCard: CardType[] = []
  ngOnInit() {
    this.cardData.getQueriedData('top_cards').pipe(takeUntil(this._unSubscribeAll)).subscribe((data: CardType[]) => {
      this.singleCard = data;
    })
  }

  ngOnDestroy() {
    this._unSubscribeAll.next(null);
    this._unSubscribeAll.complete();
  }
}
