import { Pipe, PipeTransform } from '@angular/core';
import { StocksService } from '../stocks.service';

@Pipe({
  name: 'news',
  pure: false
})
export class NewsPipe implements PipeTransform {

  cashedSource = '';
  news = 'Loading...';

  constructor(private service: StocksService) {}

  transform(source: string, ...args: unknown[]): any {
    if (source !== this.cashedSource) {
      this.cashedSource = source;
      this.service.getNewsSnapshot(source).subscribe(news => {
        this.news = `<a href="${news.url}" target="_blank">${news.title}</a>`;
      });
    }
    return this.news;
  }

}
