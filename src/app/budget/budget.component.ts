import { Component } from '@angular/core';
import { BudgetDomain } from '../core';
import { UbionDataService } from '../ubion-data.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  budget: BudgetDomain[] | undefined;
  values: number[] = new Array<number>();
  totalPR: number = 0;

  constructor(private readonly dataService: UbionDataService){}

  ngOnInit(): void {
    this.dataService.getBudget().subscribe(d => {
      this.budget = d;
      d.forEach(s => {
        this.values.push(0);
      })
    });
    this.dataService.getData().subscribe(d => {
      this.totalPR = d.ressources;
    })
  }

  getValue(i: number) : number{
    if (this.values[i]){
      return this.values[i];
    }
    return 0;
  }

  add(i: number){
    if (this.totalPR==0){return;}
    this.values[i]+=1;
    this.totalPR--;
  }

  substract(i: number){
    if (this.values[i] == 0){return;}
    this.values[i]--;
    this.totalPR++;
  }

  validate(): string{
    if (!this.budget){ return ''; }
    let ret = "**Budget**\n";
    for(let i=0; i<this.budget?.length; i++){
      ret += '\n'+this.budget[i].name + ' : '+this.values[i];
    }
    return ret;
  }

}
