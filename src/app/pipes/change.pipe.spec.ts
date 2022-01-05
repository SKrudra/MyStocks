import { ChangePipe } from './change.pipe';
import { CurrencyPipe, PercentPipe } from '@angular/common';

describe('ChangePipe', () => {

  const currencyPipe = new CurrencyPipe('en_US');
  const percentPipe = new PercentPipe('en_US');
  const pipe = new ChangePipe(currencyPipe, percentPipe);
  const stock = {
    symbol: 'abc',
    lastTradePriceOnly: 10,
    change: 1,
    changeInPercent: 0.05
  }

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a stock value', () => {
    expect(pipe.transform(stock)).toEqual(`$10 (5.00%)`);
    stock.change = -3.45;
    stock.changeInPercent = -0.345;
    expect(pipe.transform(stock)).toEqual(`-$3.45 (-3.45%)`);
  });
});
