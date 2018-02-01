import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CgtreporterviewComponent } from './cgtreporterview/cgtreporterview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PortfolioComponent,
    CgtreporterviewComponent,
    DashboardComponent,
    PortfolioDetailComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
