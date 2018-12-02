import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  pipes = ['lowercase', 'uppercase', 'currency', 'percentage', 'date'];
  constructor() { }

  ngOnInit() {
  }

}
