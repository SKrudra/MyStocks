import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

export interface NewsInterface {
  url: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {
    

  stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
  service: string = 'https://angular2-in-action-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  get() {
    return this.stocks;
  }

  add(stock: string) {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>) {
    return this.http.get<Array<StockInterface>>(this.service + '/stocks/snapshot?symbols=' + symbols.join());
  }

  getNewsSnapshot(source = 'the-wall-street-journal') {
    return this.http.get<NewsInterface>(this.service + '/stocks/news/snapshot?source=' + source);
  }
}
