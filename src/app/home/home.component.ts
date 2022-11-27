import { Component } from '@angular/core';
import { Data } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data : Data;
  srcmap = "assets/map.png";
  constructor(){
    this.data = {
      senators: [
        {
          name: "azeirou",
          fullname: "couzei",
          description: "couzei"
        
        }
      ],
      species: {
        agilite: 12,
        charisme: 8,
        taille: 4,
        force: 5,
        dexterite: 19,
        intelligence: 1,
        psychisme: 9,
        xenophilie: 12,
        mecanique: 7
      }
    }
  }
}
