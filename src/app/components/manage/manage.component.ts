import { StocksService } from './../../stocks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  symbols: Array<string>;
  stock: string = '';

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add() {
    this.symbols.push(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol: string) {
    this.symbols = this.service.remove(symbol);
  }

}
