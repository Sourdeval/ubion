import { Component } from '@angular/core';
import { Data, Relation } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data : Data;
  relationType = Relation;
  srcmap = "assets/map.png";
  constructor(){
    this.data = {
      senators: [
        {
          name: "zugle",
          fullname: "couzei",
          description: "Gentil"
        },
        {
          name: "flo",
          fullname: "Doss Kaar Le Grand",
          description: "Méchant"
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
      },
      pnj: [
        {
          name: "one",
          fullname: "OneNation",
          relation: Relation.good,
          characters:[
            {
              name: "Krikro",
              relation: Relation.coldwar
            }
          ]
        },
        {
          name: "two",
          fullname: "EZFJOZEFJO",
          relation: Relation.bad,
          characters:[]
        },
        {
          name: "twzezefo",
          fullname: "fvoij oizejf",
          relation: Relation.trade,
          characters:[]
        },
        {
          name: "poreg",
          fullname: "Poro",
          relation: Relation.ally,
          characters:[]
        },
        {
          name: "nnn",
          fullname: "Naninana",
          relation: Relation.war,
          characters:[]
        },
      ],
      lastReport: "Tout va bien. Un jour ou l'autre, il faut savoir prendre son envol. Et si le pays des 9 sénateurs a bien compris quelque chose, c'est qu'il ne devait pas être le dernier à s'envoler. On pense parfois qu'il est nécessaire d'avoir des ailes, mais c'est bien faux, il faut juste une falaise. Ou un endroit bien haut."
    }
  }
}
