import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CgtreporterviewComponent } from './cgtreporterview/cgtreporterview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', component: PortfolioDetailComponent },
  { path: 'cgtreporterview', component: CgtreporterviewComponent },
  { path: 'heroes', component: HeroesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
