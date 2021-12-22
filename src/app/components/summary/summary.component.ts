import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  @Input() stock: any;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }

}
