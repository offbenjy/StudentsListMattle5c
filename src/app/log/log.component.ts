import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoveInfo } from './MoveInfo';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnChanges {

  @Input() moveInfo: MoveInfo | null = null;
  moveHistory: MoveInfo[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['moveInfo'] && this.moveInfo) {
      this.moveHistory.unshift(this.moveInfo);
    }
  }

}
