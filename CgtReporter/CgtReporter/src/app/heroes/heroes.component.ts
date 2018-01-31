import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Http } from '@angular/http'

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
    apiValues: string[] = [];

    constructor(private _httpService: Http) { }
    
    ngOnInit() {

      this._httpService.get('/api/portfolio').subscribe(values => {
        this.apiValues = values.json() as string[];
      });
      
  }
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
