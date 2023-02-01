import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../core';
import { UbionDataService } from '../ubion-data.service';

@Component({
  selector: 'app-compute-next-turn',
  templateUrl: './compute-next-turn.component.html',
  styleUrls: ['./compute-next-turn.component.css']
})
export class ComputeNextTurnComponent implements OnInit {
  data: Data | undefined;
  nextTurnForm: FormGroup;

  constructor(private readonly dataService: UbionDataService) {
    this.nextTurnForm = new FormGroup({
      foodDice: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      healthDice: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      militaryBudget: new FormControl(0, [Validators.required, Validators.pattern('[0-9]*')]),
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      d => {
        this.data = d;
      }
    );
  }

}
