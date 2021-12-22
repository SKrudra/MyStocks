import { StockInterface, StocksService } from './../../stocks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface> = [];
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service
      .load(this.symbols)
      .subscribe((stocks) => (this.stocks = stocks));
  }
}
