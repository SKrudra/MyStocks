import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CardTypeDirective } from './directives/card-type.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { DelayDirective } from './directives/delay.directive';
import { ChangePipe } from './pipes/change.pipe';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectorPipe } from './pipes/change-detector.pipe';
import { NewsPipe } from './pipes/news.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageComponent,
    SummaryComponent,
    CardTypeDirective,
    CardHoverDirective,
    DelayDirective,
    ChangePipe,
    ChangeDetectorPipe,
    NewsPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrencyPipe, PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
