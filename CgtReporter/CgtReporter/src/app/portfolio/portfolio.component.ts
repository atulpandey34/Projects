import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { PortFolioViewModel } from './heroes.model'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioList: PortFolioViewModel[] = [];

  constructor(private _httpService: Http) { }

  ngOnInit() {
    this._httpService.get('/api/portfolio').map(response => response.json()).subscribe((res: PortFolioViewModel[]) => {
      this.portfolioList = res;
    });
  }

}
