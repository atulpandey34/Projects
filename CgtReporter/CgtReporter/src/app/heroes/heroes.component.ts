import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Http } from '@angular/http'
import { PortFolioViewModel } from './heroes.model'

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    portfolioList: PortFolioViewModel[] = [];

    constructor(private _httpService: Http) { }
    
    ngOnInit() {

      this._httpService.get('/api/portfolio').map(response => response.json()).subscribe((res: PortFolioViewModel[]) => {
        this.portfolioList = res;
      });
      
  }
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
