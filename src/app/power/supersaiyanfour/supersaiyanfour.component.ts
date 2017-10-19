import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit, OnChanges {
  @input() power;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  this.power = this.power * 500;
  }

}
