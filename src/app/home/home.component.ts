import { Component, OnInit } from '@angular/core';
import { Data, Food, Popularity, Relation, Richness } from 'src/app/core';
import { UbionDataService } from '../ubion-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : Data | undefined;
  relationType = Relation;
  foodType = Food;
  popularityType = Popularity;
  richnessType = Richness;
  srcmap = "assets/map.png";
  constructor(private readonly dataService: UbionDataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      d => {
        this.data = d;
      }
    );
  }
}
