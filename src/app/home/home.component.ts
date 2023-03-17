import { Component, OnInit } from '@angular/core';
import { BudgetDomain, Data, Food, Popularity, Relation, Richness } from 'src/app/core';
import { UbionDataService } from '../ubion-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : Data | undefined;
  budget : BudgetDomain[] | undefined;
  relationType = Relation;
  foodType = Food;
  popularityType = Popularity;
  richnessType = Richness;
  srcmap = "https://sourdeval.github.io/ubion-data/map.png";
  constructor(private readonly dataService: UbionDataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      d => {
        this.data = d;
      }
    );
    this.dataService.getBudget().subscribe(
      d => {
        this.budget = d;
      }
    )
  }
}
