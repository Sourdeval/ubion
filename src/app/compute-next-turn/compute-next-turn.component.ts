import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Food } from '../core';
import { UbionDataService } from '../ubion-data.service';

@Component({
  selector: 'app-compute-next-turn',
  templateUrl: './compute-next-turn.component.html',
  styleUrls: ['./compute-next-turn.component.css']
})
export class ComputeNextTurnComponent implements OnInit {
  data: Data | undefined;
  nextTurnForm: FormGroup;
  numberCtites: number;

  constructor(private readonly dataService: UbionDataService) {
    this.numberCtites = 0;
    this.nextTurnForm = new FormGroup({
      foodDice: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      healthDice: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      militaryBudget: new FormControl(0, [Validators.required, Validators.pattern('[0-9]*')]),
      birth: new FormControl('0', [Validators.required, Validators.pattern('[0-9]*')]),
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      d => {
        this.data = d;
        let s = 0;
        this.data.cities.forEach(city => s+=city.ctiteRooms )
        this.numberCtites = s;
      }
    );
  }

  compute(): void {
    let newData: Data;
    if (!this.data){ return; }
    newData = structuredClone(this.data);
    const formValues = this.nextTurnForm.value;

    let popVariation = 0;

    //food
    switch (this.data.food){
      case Food.abondance: 
        if (formValues.foodDice == 1 || formValues.foodDice == 2){ popVariation+=3; }
        else if (formValues.foodDice > 2 && formValues.foodDice < 9){ popVariation+=2; }
        else if (formValues.foodDice == 9 || formValues.foodDice == 0){ popVariation+=1; }
        break;
      case Food.suffisante:
        if (formValues.foodDice > 0 && formValues.foodDice < 6){ popVariation+=2; }
        else if (formValues.foodDice > 5){ popVariation+=1; }
        break;
      case Food.maigre:
        if (formValues.foodDice > 0 && formValues.foodDice < 3){ popVariation+=2; }
        else if (formValues.foodDice > 2 && formValues.foodDice < 9){ popVariation+=1; }
        break;
      case Food.famine:
        if (formValues.foodDice > 2 && formValues.foodDice < 8){ popVariation-=1; }
        else if (formValues.foodDice == 8 || formValues.foodDice == 9){ popVariation-=2; }
        else if (formValues.foodDice == 0){ popVariation-=3; }
        break;
    }

    console.log("Variation Nourriture : "+popVariation +" ("+this.data.food+")");

    //health
    let healthState;
    let ps = this.data.health*5;
    if (ps >= (this.data.population*2)){
      healthState = "bonne";
      if (formValues.healthDice == 1 || formValues.healthDice == 2){ popVariation+=2; }
      else if (formValues.healthDice > 2 && formValues.healthDice < 9){ popVariation+=1; }
    }
    else if (ps >= (this.data.population*1.3)){
      healthState = "correcte";
      if (formValues.healthDice > 0 && formValues.healthDice < 6){ popVariation+=1; }
      else if (formValues.healthDice == 0){ popVariation-=1; }
    }
    else if (ps >= (this.data.population)){
      healthState = "moyenne";
      if (formValues.healthDice == 1){ popVariation+=1; }
      else if (formValues.healthDice > 6 && formValues.healthDice < 10){ popVariation-=1; }
      else if (formValues.healthDice == 0){ popVariation-=1; }
    }
    else if (ps >= (this.data.population*0.5)){
      healthState = "faible";
      if (formValues.healthDice > 1 && formValues.healthDice < 6){ popVariation-=1; }
      else if (formValues.healthDice > 5 && formValues.healthDice < 10){ popVariation-=2; }
      else if (formValues.healthDice == 0){ popVariation-=3; }
    }
    else {
      healthState = "mauvaise";
      if (formValues.healthDice == 1){ popVariation-=1; }
      else if (formValues.healthDice > 1 && formValues.healthDice < 9){ popVariation-=2; }
      else if (formValues.healthDice == 9 || formValues.healthDice == 0){ popVariation-=3; }
    }

    console.log("Variation Nourriture/Santé : "+popVariation+" ("+healthState+")");

    //Birth
    if (formValues.birth > 0){
      popVariation+=formValues.birth;
    }

    console.log("Variation Nourriture/Santé/Naissances : "+popVariation);


  }

}
